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
  a: (props: CustomAnchorProps) => {
    const { href, className, 'data-slug': dataSlug, children, ...rest } = props;

    // 위키링크인 경우 HoverPreview 적용
    if (className && className.includes('wikilink')) {
      const isBroken = className.includes('broken');
      const slug = dataSlug || href || '';

      // 끊어진 링크는 HoverPreview 없이 단순 렌더링
      if (isBroken) {
        return (
          <Link href={`/notes/${slug}`} className={className} {...rest}>
            {children}
          </Link>
        );
      }

      return (
        <WikiLinkPreview
          slug={slug}
          href={`/notes/${slug}`}
          fetchNote={fetchNoteSummary}
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

export function MDXContent({ content }: MDXContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote
        source={content}
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
