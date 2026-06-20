import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import matter from 'gray-matter';
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root, Text, Link, PhrasingContent } from 'mdast';

// ── 노트 캐시 ──────────────────────────────────────────────────────────────────

interface NoteRef {
  url: string;
  title: string;
}

const noteCache = new Map<string, NoteRef>();

/**
 * 빌드 시작 시 1회 호출 — content/notes/ 전체를 스캔해서 slug → url 맵 구축
 */
export function initNoteCache(contentDir: string): void {
  noteCache.clear();

  const files = globSync('**/*.md', { cwd: contentDir, absolute: true });

  for (const filePath of files) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const filename = path.basename(filePath, '.md');

      // URL-safe slug: 파일명 그대로 사용 (한글 파일명 지원)
      const urlPath = filename;

      // 정규화 키: 소문자, 하이픈/언더바/공백 → 통합
      const normalizedKey = filename
        .toLowerCase()
        .replace(/[-_\s]/g, ' ')
        .trim();

      noteCache.set(normalizedKey, {
        url: `/notes/${urlPath}`,
        title: (data.title as string) || filename,
      });
    } catch {
      // 파일 읽기 실패 시 무시
    }
  }
}

// ── 위키링크 파싱 ──────────────────────────────────────────────────────────────

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

interface WikiLink {
  raw: string;
  target: string;   // 링크 대상 (노트 이름)
  alias?: string;   // 표시 텍스트 (있을 경우)
  start: number;
  end: number;
}

function findWikiLinks(text: string): WikiLink[] {
  const links: WikiLink[] = [];
  let match: RegExpExecArray | null;
  WIKILINK_REGEX.lastIndex = 0;

  while ((match = WIKILINK_REGEX.exec(text)) !== null) {
    links.push({
      raw: match[0],
      target: match[1].trim(),
      alias: match[2]?.trim(),
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  return links;
}

function resolveWikiLink(target: string): NoteRef | null {
  const normalizedKey = target
    .toLowerCase()
    .replace(/[-_\s]/g, ' ')
    .trim();

  return noteCache.get(normalizedKey) ?? null;
}

// ── remark 플러그인 ────────────────────────────────────────────────────────────

/**
 * remarkWikilinks
 *
 * [[노트 이름]] 또는 [[노트 이름|표시 텍스트]] 형태의 위키링크를
 * 실제 <a> 태그로 변환하는 remark 플러그인.
 *
 * - 연결된 노트: class="wikilink"
 * - 끊어진 링크: class="wikilink broken" (href="#")
 */
export const remarkWikilinks: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (index === undefined || !parent) return;

      const wikilinks = findWikiLinks(node.value);
      if (wikilinks.length === 0) return;

      const newNodes: PhrasingContent[] = [];
      let lastIndex = 0;

      for (const wikilink of wikilinks) {
        // 위키링크 앞 일반 텍스트
        if (wikilink.start > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, wikilink.start),
          });
        }

        const resolved = resolveWikiLink(wikilink.target);
        const displayText = wikilink.alias || wikilink.target;

        const linkNode: Link = {
          type: 'link',
          url: resolved ? resolved.url : '#',
          title: resolved ? resolved.title : null,
          data: {
            hProperties: {
              className: resolved ? 'wikilink' : 'wikilink broken',
              'data-slug': wikilink.target,
            },
          },
          children: [{ type: 'text', value: displayText }],
        };

        newNodes.push(linkNode);
        lastIndex = wikilink.end;
      }

      // 위키링크 뒤 나머지 텍스트
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      parent.children.splice(index, 1, ...newNodes);
    });
  };
};
