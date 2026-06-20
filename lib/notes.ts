import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { initNoteCache, remarkWikilinks } from './remark-wikilinks';

const notesDirectory = path.join(process.cwd(), 'content/notes');

// 빌드 시작 시 1회 캐시 초기화
initNoteCache(notesDirectory);

export interface Note {
  slug: string;
  title: string;
  tags: string[];
  created: string;
  excerpt: string;
}

export interface NoteWithContent extends Note {
  content: string;
}

/**
 * 파일명에서 slug 생성 (확장자 제거)
 */
function fileNameToSlug(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}

/**
 * 본문 첫 단락을 excerpt로 추출
 */
function extractExcerpt(content: string, maxLength = 150): string {
  const firstParagraph = content
    .replace(/^---[\s\S]*?---\n/, '') // frontmatter 제거
    .replace(/#+\s.*\n/g, '')          // 헤딩 제거
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2') // 위키링크 → alias 또는 제거
    .trim()
    .split('\n')
    .find((line) => line.trim().length > 0) ?? '';

  return firstParagraph.length > maxLength
    ? firstParagraph.slice(0, maxLength) + '...'
    : firstParagraph;
}

/**
 * 모든 노트 목록 반환
 */
export function getAllNotes(): Note[] {
  if (!fs.existsSync(notesDirectory)) return [];

  return fs
    .readdirSync(notesDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileNameToSlug(fileName);
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: (data.title as string) || slug,
        tags: (data.tags as string[]) || [],
        created: (data.created as string) || '',
        excerpt: extractExcerpt(content),
      };
    })
    .sort((a, b) => (a.created < b.created ? 1 : -1));
}

/**
 * slug로 단일 노트 반환 (HTML 변환 포함)
 */
export function getNoteBySlug(slug: string): NoteWithContent | null {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = remark()
      .use(remarkGfm)
      .use(remarkWikilinks)
      .use(html, { sanitize: false })
      .processSync(content);

    return {
      slug,
      title: (data.title as string) || slug,
      tags: (data.tags as string[]) || [],
      created: (data.created as string) || '',
      excerpt: extractExcerpt(content),
      content: processedContent.toString(),
    };
  } catch {
    return null;
  }
}

/**
 * 모든 노트 slug 목록 (generateStaticParams용)
 */
export function getAllNoteSlugs(): string[] {
  if (!fs.existsSync(notesDirectory)) return [];
  return fs
    .readdirSync(notesDirectory)
    .filter((f) => f.endsWith('.md'))
    .map(fileNameToSlug);
}
