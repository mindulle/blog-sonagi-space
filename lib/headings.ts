import type { Heading } from '@/components/blog/TableOfContents';

/**
 * Extract headings from MDX content for Table of Contents
 */
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}

/**
 * Add IDs to headings in HTML content
 */
export function addHeadingIds(html: string): string {
  return html.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (match, level, content) => {
      const text = content.replace(/<[^>]*>/g, '');
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-');
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );
}
