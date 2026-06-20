#!/usr/bin/env node
/**
 * generate-backlinks.mjs
 *
 * content/notes/ 전체를 스캔해서 [[위키링크]] 역참조를 수집하고
 * lib/generated/backlinks.json 으로 출력한다.
 *
 * 실행: node scripts/generate-backlinks.mjs
 * 자동 실행: package.json의 "prebuild" 스크립트에 등록
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const NOTES_DIR = path.join(ROOT, 'content/notes');
const OUTPUT_FILE = path.join(ROOT, 'lib/generated/backlinks.json');

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

// ── 1. 파일 목록 수집 ────────────────────────────────────────────────────────

if (!fs.existsSync(NOTES_DIR)) {
  console.log('content/notes/ 디렉토리가 없습니다. 백링크 생성을 건너뜁니다.');
  process.exit(0);
}

const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'));

// slug → { title, content } 맵
const noteMap = new Map();

for (const fileName of files) {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(NOTES_DIR, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  noteMap.set(slug.toLowerCase().replace(/[-_\s]/g, ' '), {
    slug,
    title: data.title || slug,
    content,
    raw,
  });
}

// ── 2. 위키링크 역추적 ────────────────────────────────────────────────────────

/** @type {Record<string, Array<{sourceSlug: string, sourceTitle: string, excerpt: string}>>} */
const backlinks = {};

for (const [, { slug: sourceSlug, title: sourceTitle, content }] of noteMap) {
  WIKILINK_REGEX.lastIndex = 0;
  let match;

  while ((match = WIKILINK_REGEX.exec(content)) !== null) {
    const targetRaw = match[1].trim();
    const targetKey = targetRaw.toLowerCase().replace(/[-_\s]/g, ' ');
    const targetNote = noteMap.get(targetKey);

    if (!targetNote) continue; // 끊어진 링크 무시

    const targetSlug = targetNote.slug;

    if (!backlinks[targetSlug]) {
      backlinks[targetSlug] = [];
    }

    // 링크 앞뒤 50자 발췌
    const pos = match.index;
    const start = Math.max(0, pos - 50);
    const end = Math.min(content.length, pos + match[0].length + 50);
    const excerpt = content
      .slice(start, end)
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2' || '$1') // 위키링크 → 텍스트
      .trim();

    // 중복 방지
    const alreadyLinked = backlinks[targetSlug].some(
      (b) => b.sourceSlug === sourceSlug
    );

    if (!alreadyLinked) {
      backlinks[targetSlug].push({ sourceSlug, sourceTitle, excerpt });
    }
  }
}

// ── 3. 출력 ──────────────────────────────────────────────────────────────────

const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(backlinks, null, 2), 'utf8');

const totalLinks = Object.values(backlinks).reduce((acc, arr) => acc + arr.length, 0);
console.log(`✅ 백링크 생성 완료: ${totalLinks}개 링크, ${Object.keys(backlinks).length}개 노트`);
console.log(`   → ${OUTPUT_FILE}`);
