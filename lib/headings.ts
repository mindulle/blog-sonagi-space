import GithubSlugger from 'github-slugger';
import type { Heading } from '@/components/blog/TableOfContents';

/** 목차에 노출할 헤딩 레벨 */
const VISIBLE_LEVELS = [2, 3];

/**
 * 원본 마크다운에서 목차(TOC)용 헤딩을 추출한다.
 *
 * ⚠️ 반드시 "원본 마크다운"을 넘겨야 한다. (렌더링된 HTML 아님)
 *
 * id 생성은 MDXContent 의 rehypeCustomSlug 와 동일하게 github-slugger 를 사용한다.
 * GithubSlugger 는 중복 텍스트에 순번을 붙이므로, id 가 어긋나지 않도록
 * h1~h6 전체를 문서 순서대로 slug 한 뒤 표시할 레벨만 걸러낸다.
 */
export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .trim();

    // 중복 카운터를 rehypeCustomSlug 와 맞추기 위해 모든 레벨을 slug 한다.
    const id = slugger.slug(text);

    if (VISIBLE_LEVELS.includes(level)) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

/**
 * Add IDs to headings in HTML content
 */
export function addHeadingIds(html: string): string {
  return html.replace(/<h([23])>(.*?)<\/h\1>/g, (match, level, content) => {
    const text = content.replace(/<[^>]*>/g, '');
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, '')
      .replace(/\s+/g, '-');
    return `<h${level} id="${id}">${content}</h${level}>`;
  });
}
