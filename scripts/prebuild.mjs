#!/usr/bin/env node
/**
 * prebuild.mjs — 통합 prebuild 파이프라인
 *
 * 기존 3개 스크립트(generate-backlinks, generate-summaries, enrich-graph)를
 * 단일 패스로 통합하여 파일 I/O를 1회로 줄이고, 증분 캐시로 변경된 파일만 재처리합니다.
 *
 * 개선 포인트:
 *   1. 단일 패스: content/notes/ 를 한 번만 읽어 backlinks + summaries 동시 생성
 *   2. 비동기 I/O: Promise.all 기반 병렬 파일 읽기 (배치 처리)
 *   3. 증분 캐시: .cache/prebuild-manifest.json 에 파일별 mtime 저장,
 *                변경된 파일만 재처리하고 나머지는 캐시에서 복원
 *   4. enrich-graph: summaries 완성 즉시 실행 (별도 스크립트 기동 불필요)
 *
 * 실행: node scripts/prebuild.mjs
 * 강제 전체 재빌드: FORCE_PREBUILD=1 node scripts/prebuild.mjs
 */

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const NOTES_DIR = path.join(ROOT, 'content/notes');
const BACKLINKS_FILE = path.join(ROOT, 'lib/generated/backlinks.json');
const SUMMARIES_FILE = path.join(ROOT, 'public/note-summaries.json');
const GRAPH_FILE = path.join(ROOT, 'public/wiki-graph.json');
const CACHE_DIR = path.join(ROOT, '.cache');
const MANIFEST_FILE = path.join(CACHE_DIR, 'prebuild-manifest.json');

const FORCE = process.env.FORCE_PREBUILD === '1';

// 비동기 파일 읽기 배치 크기 (메모리 압력 조절)
const BATCH_SIZE = 500;

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

// enrich-graph의 superGroups 정의
const SUPER_GROUPS = {
  frontend: ['react', 'javascript', 'frontend', 'angular', 'css', 'html', 'ui'],
  backend: ['backend', 'php', 'redis', 'postgresql-dba', 'server-side-game-developer', 'aspnet-core', 'nodejs', 'database'],
  design: ['design', 'ux', 'ui-ux', 'figma', 'design-system'],
  'ai-ml': ['machine-learning', 'ai-agents', 'deep-learning'],
  management: ['product-manager', 'engineering-manager', 'agile'],
  cs: ['computer-science', 'algorithm', 'data-structure', 'cyber-security'],
};

// ── 유틸 ───────────────────────────────────────────────────────────────────────

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function extractExcerpt(content, maxLength = 150) {
  const firstParagraph = content
    .replace(/^---[\s\S]*?---\n/, '')
    .replace(/^#+\s.*$/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, alias) => alias || t)
    .trim()
    .split('\n')
    .find((line) => line.trim().length > 0) ?? '';

  return firstParagraph.length > maxLength
    ? firstParagraph.slice(0, maxLength) + '...'
    : firstParagraph;
}

function assignGroup(tags) {
  if (!tags || tags.length === 0) return 'orphan';
  const primaryTag = tags.find((t) => t !== 'concept' && t !== 'reference') || tags[0];
  for (const [groupName, keywords] of Object.entries(SUPER_GROUPS)) {
    if (keywords.includes(primaryTag)) return groupName;
  }
  return 'etc';
}

// ── 캐시 관리 ──────────────────────────────────────────────────────────────────

async function loadManifest() {
  if (FORCE) return {};
  try {
    const raw = await fsPromises.readFile(MANIFEST_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function saveManifest(manifest) {
  ensureDir(MANIFEST_FILE);
  await fsPromises.writeFile(MANIFEST_FILE, JSON.stringify(manifest), 'utf8');
}

// ── 메인 ───────────────────────────────────────────────────────────────────────

async function main() {
  const startTime = Date.now();

  if (!fs.existsSync(NOTES_DIR)) {
    console.log('content/notes/ 디렉토리가 없습니다. prebuild를 건너뜁니다.');
    return;
  }

  // 1. 파일 목록 + stat 병렬 수집
  console.log('📂 노트 목록 스캔 중...');
  const fileNames = (await fsPromises.readdir(NOTES_DIR)).filter((f) => f.endsWith('.md'));
  console.log(`   ${fileNames.length.toLocaleString()}개 파일 발견`);

  const stats = await Promise.all(
    fileNames.map((f) => fsPromises.stat(path.join(NOTES_DIR, f)))
  );

  // 2. 캐시 로드 + 변경 파일 판별
  const [manifest, prevBacklinks, prevSummaries] = await Promise.all([
    loadManifest(),
    loadJSON(BACKLINKS_FILE),
    loadJSON(SUMMARIES_FILE),
  ]);

  const changedFiles = [];
  const unchangedFiles = [];
  const newManifest = {};

  for (let i = 0; i < fileNames.length; i++) {
    const name = fileNames[i];
    const slug = name.replace(/\.md$/, '');
    const mtime = stats[i].mtimeMs;
    newManifest[name] = mtime;

    if (!FORCE && manifest[name] === mtime) {
      unchangedFiles.push(slug);
    } else {
      changedFiles.push({ name, slug });
    }
  }

  console.log(`   변경된 파일: ${changedFiles.length.toLocaleString()}개 / 캐시 히트: ${unchangedFiles.length.toLocaleString()}개`);

  // 3. 변경된 파일 비동기 읽기 (배치 처리)
  /** @type {Map<string, {slug: string, title: string, tags: string[], content: string, excerpt: string, normalizedKey: string}>} */
  const noteMap = new Map();

  if (changedFiles.length > 0) {
    console.log(`📖 변경된 파일 읽는 중...`);

    for (let i = 0; i < changedFiles.length; i += BATCH_SIZE) {
      const batch = changedFiles.slice(i, i + BATCH_SIZE);
      const raws = await Promise.all(
        batch.map(({ name }) => fsPromises.readFile(path.join(NOTES_DIR, name), 'utf8'))
      );

      for (let j = 0; j < batch.length; j++) {
        const { slug } = batch[j];
        const { data, content } = matter(raws[j]);
        const normalizedKey = slug.toLowerCase().replace(/[-_\s]/g, ' ');

        noteMap.set(normalizedKey, {
          slug,
          title: data.title || slug,
          tags: data.tags || [],
          content,
          excerpt: extractExcerpt(content),
          normalizedKey,
        });
      }
    }
  }

  // 캐시된 파일은 기존 summaries에서 복원 (content 없이 메타만)
  // backlinks 재계산을 위해 content가 필요하므로, 캐시 히트된 파일도 noteMap에 메타는 올림
  // (backlinks는 전체 재계산이 필요한 경우에만 처리)
  const needFullBacklinkRebuild = changedFiles.length > 0;

  // summaries는 항상 증분: 캐시 히트 파일은 prevSummaries에서 가져옴
  const summaries = { ...prevSummaries };
  for (const [, note] of noteMap) {
    summaries[note.slug] = {
      slug: note.slug,
      title: note.title,
      tags: note.tags,
      excerpt: note.excerpt,
    };
  }

  // 4. 백링크 계산
  // 백링크는 "소스 → 타겟" 관계이므로, 변경된 소스가 있으면 해당 소스의 기여분만 갱신
  let backlinks;

  if (!needFullBacklinkRebuild && prevBacklinks) {
    console.log('🔗 백링크: 캐시 사용 (변경 없음)');
    backlinks = prevBacklinks;
  } else {
    console.log('🔗 백링크 계산 중...');

    // 전체 노트의 normalizedKey → slug 역방향 맵이 필요
    // 변경된 파일은 noteMap에 있고, 캐시된 파일은 prevSummaries에서 slug만 알 수 있음
    // backlinks 계산: 변경된 소스 파일의 기여분만 업데이트

    // 1) 기존 backlinks에서 변경된 소스(sourceSlug)의 기여분 제거
    const changedSlugs = new Set(changedFiles.map((f) => f.slug));

    if (prevBacklinks && !FORCE) {
      backlinks = {};
      for (const [targetSlug, links] of Object.entries(prevBacklinks)) {
        const filtered = links.filter((l) => !changedSlugs.has(l.sourceSlug));
        if (filtered.length > 0) backlinks[targetSlug] = filtered;
      }
    } else {
      backlinks = {};
    }

    // 2) 변경된 파일의 위키링크 스캔 → backlinks 에 추가
    // slug 정규화 맵: 전체 파일 (캐시 포함) 에서 구성
    const slugNormMap = new Map(); // normalizedKey → slug
    for (const [normKey, note] of noteMap) {
      slugNormMap.set(normKey, note.slug);
    }
    // 캐시된 파일은 summaries에서 slug만 있으므로 normalizedKey 재구성
    for (const slug of unchangedFiles) {
      const normKey = slug.toLowerCase().replace(/[-_\s]/g, ' ');
      if (!slugNormMap.has(normKey)) slugNormMap.set(normKey, slug);
    }

    for (const [, note] of noteMap) {
      const regex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
      let match;

      while ((match = regex.exec(note.content)) !== null) {
        const targetRaw = match[1].trim();
        const targetKey = targetRaw.toLowerCase().replace(/[-_\s]/g, ' ');
        const targetSlug = slugNormMap.get(targetKey);

        if (!targetSlug) continue;

        if (!backlinks[targetSlug]) backlinks[targetSlug] = [];

        const alreadyLinked = backlinks[targetSlug].some(
          (b) => b.sourceSlug === note.slug
        );
        if (alreadyLinked) continue;

        const pos = match.index;
        const start = Math.max(0, pos - 50);
        const end = Math.min(note.content.length, pos + match[0].length + 50);
        const excerpt = note.content
          .slice(start, end)
          .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, alias) => alias || t)
          .trim();

        backlinks[targetSlug].push({
          sourceSlug: note.slug,
          sourceTitle: note.title,
          excerpt,
        });
      }
    }
  }

  // 5. 결과 파일 저장 (병렬)
  console.log('💾 결과 저장 중...');
  ensureDir(BACKLINKS_FILE);
  ensureDir(SUMMARIES_FILE);

  await Promise.all([
    fsPromises.writeFile(BACKLINKS_FILE, JSON.stringify(backlinks, null, 2), 'utf8'),
    fsPromises.writeFile(SUMMARIES_FILE, JSON.stringify(summaries, null, 2), 'utf8'),
    saveManifest(newManifest),
  ]);

  const totalLinks = Object.values(backlinks).reduce((acc, arr) => acc + arr.length, 0);
  const totalNotes = Object.keys(summaries).length;
  console.log(`   ✅ 백링크: ${totalLinks.toLocaleString()}개 링크, ${Object.keys(backlinks).length.toLocaleString()}개 노트`);
  console.log(`   ✅ 요약: ${totalNotes.toLocaleString()}개 노트`);

  // 6. enrich-graph (summaries 완성 후 즉시 실행)
  await enrichGraph(summaries);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n⚡ prebuild 완료: ${elapsed}s`);
}

// ── enrich-graph ───────────────────────────────────────────────────────────────

async function enrichGraph(summaries) {
  if (!fs.existsSync(GRAPH_FILE)) {
    console.warn('⚠️  public/wiki-graph.json 이 없습니다. graph enrichment를 건너뜁니다.');
    console.warn('   wiki-graph.json 은 별도로 생성해야 합니다.');
    return;
  }

  console.log('🌐 그래프 enrichment 중...');
  const graphData = JSON.parse(await fsPromises.readFile(GRAPH_FILE, 'utf8'));

  let enrichedCount = 0;
  for (const node of graphData.nodes) {
    const summary = summaries[node.id];
    node.group = assignGroup(summary?.tags);
    if (node.group !== 'orphan') enrichedCount++;
  }

  await fsPromises.writeFile(GRAPH_FILE, JSON.stringify(graphData, null, 2), 'utf8');
  console.log(`   ✅ 그래프: ${enrichedCount.toLocaleString()}개 노드 그룹 할당`);
}

// ── JSON 로드 헬퍼 ─────────────────────────────────────────────────────────────

async function loadJSON(filePath) {
  try {
    const raw = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ── 실행 ───────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error('❌ prebuild 실패:', err);
  process.exit(1);
});
