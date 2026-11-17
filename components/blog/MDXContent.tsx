import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { remarkWikilinks } from '@/lib/remark-wikilinks';
import Link from 'next/link';
import { WikiLinkPreview } from './WikiLinkPreview';
import { getNoteBySlug } from '@/lib/notes';
import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';
import type { Root, Element, Text } from 'hast';
import 'highlight.js/styles/github-dark.css';

interface MDXContentProps {
  content: string;
}

const HEADING_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

/**
 * 헤딩에 id 를 부여해 목차(TOC)의 앵커 링크가 동작하도록 한다.
 *
 * rehype-slug 를 쓰지 않는 이유:
 * 이 프로젝트의 next-mdx-remote 조합에서 rehype-slug 가
 * MDX 컴파일을 실패시키기 때문에 동일 동작을 직접 구현한다.
 *
 * ⚠️ lib/headings.ts 의 extractHeadings 와 반드시 동일한 규칙이어야 한다.
 *    (둘 다 github-slugger 로 h1~h6 을 문서 순서대로 slug)
 */
function rehypeCustomSlug() {
  return (tree: Root) => {
    const slugger = new GithubSlugger();

    visit(tree, 'element', (node: Element) => {
      if (!HEADING_TAGS.has(node.tagName)) return;

      let text = '';
      visit(node, 'text', (textNode: Text) => {
        text += textNode.value;
      });

      node.properties = node.properties ?? {};
      if (!node.properties.id) {
        node.properties.id = slugger.slug(text);
      }
    });
  };
}

// HoverPreview에서 노트를 가져오기 위한 Server Action (또는 헬퍼)
async function fetchNoteSummary(slug: string) {
  'use server';
  const note = getNoteBySlug(slug);
  if (!note) return { title: slug, excerpt: '문서를 찾을 수 없습니다.' };
  return { title: note.title, excerpt: note.excerpt };
}

import React from 'react';

interface CustomAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  'data-slug'?: string;
}

const components = {
  h2: ({ children, className = '', style, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...rest}
      className={`pb-2 border-b border-[var(--mds-color-border-default)] ${className}`}
      style={{ fontFamily: 'var(--font-cinematic, serif)', ...style }}
    >
      {children}
    </h2>
  ),
  pre: ({ children, className = "", ...rest }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...rest}
      className={`overflow-x-auto max-w-full border border-[var(--mds-color-border-default)] rounded-none ${className}`}
    >
      {children}
    </pre>
  ),
  img: ({ src, alt = "", className = "", ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`max-w-full h-auto my-6 border border-[var(--mds-color-border-default)] ${className}`}
      {...rest}
    />
  ),
  blockquote: ({ children, className = '', style, ...rest }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...rest}
      className={`my-7 border-l-2 border-[var(--mds-color-brand-primary)] pl-5 py-1 not-italic text-[var(--mds-color-text-secondary)] ${className}`}
      style={{ fontFamily: 'var(--font-cinematic, serif)', ...style }}
    >
      {children}
    </blockquote>
  ),
  a: (props: CustomAnchorProps) => {
    const { href, className, 'data-slug': dataSlug, children, ...rest } = props;

    // 위키링크인 경우 HoverPreview 적용
    if (className && className.includes('wikilink')) {
      const isBroken = className.includes('broken');
      const slug = dataSlug || href || '';

      // 미승격(broken) 위키링크는 404 이동 대신 점선 밑줄 평문으로 폴백
      if (isBroken) {
        return (
          <span
            className="underline decoration-dotted underline-offset-4 cursor-help text-[var(--mds-color-text-secondary)]"
            title="아직 공개되지 않은 노트입니다"
            data-slug={dataSlug}
          >
            {children}
          </span>
        );
      }

      return (
        <WikiLinkPreview
          slug={slug}
          href={`/notes/${slug}`}
          fetchNote={fetchNoteSummary}
          data-slug={dataSlug}
        >
          {children}
        </WikiLinkPreview>
      );
    }

    // 일반 외부 링크
    if (href?.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }

    // 내부 링크
    return (
      <Link href={href || '#'} {...rest}>
        {children}
      </Link>
    );
  },
};

function normalizeMarkdownForMdx(raw: string): string {
  // 1) 페이지 상단 H1과 중복되는 본문 첫 줄 H1 제거
  const text = raw.replace(/^\s*#\s+[^\n]+\n+/, '');
  // 2) 코드 블록/인라인 코드 제외 구간에서 CommonMark 우측 경계 실패(**...**조사) 보정
  const segments = text.split(/(```[\s\S]*?```|`[^`\n]+`)/g);
  return segments
    .map((seg, idx) => {
      if (idx % 2 === 1) return seg;
      return seg.replace(/\*\*([^\n*]+?)\*\*(?=[가-힣])/g, '<strong>$1</strong>');
    })
    .join('');
}

export function MDXContent({ content }: MDXContentProps) {
  const normalizedContent = normalizeMarkdownForMdx(content);
  return (
    <article className="editorial-article prose prose-neutral dark:prose-invert max-w-none break-keep leading-[1.8]">
      <MDXRemote
        source={normalizedContent}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkWikilinks],
            rehypePlugins: [rehypeHighlight, rehypeCustomSlug],
          },
        }}
      />
    </article>
  );
}
