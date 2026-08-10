import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { remarkWikilinks } from '@/lib/remark-wikilinks';
import Link from 'next/link';
import { WikiLinkPreview } from './WikiLinkPreview';
import { getNoteBySlug } from '@/lib/notes';
import 'highlight.js/styles/github-dark.css';

interface MDXContentProps {
  content: string;
}

// HoverPreview에서 노트를 가져오기 위한 Server Action (또는 헬퍼)
async function fetchNoteSummary(slug: string) {
  'use server';
  const note = getNoteBySlug(slug);
  if (!note) return { title: slug, excerpt: '문서를 찾을 수 없습니다.' };
  return { title: note.title, excerpt: note.excerpt };
}

const components = {
  a: (props: any) => {
    const { href, className, 'data-slug': dataSlug, children, ...rest } = props;
    
    // 위키링크인 경우 HoverPreview 적용
    if (className && className.includes('wikilink')) {
      const isBroken = className.includes('broken');
      const slug = dataSlug || href;
      
      // 끊어진 링크는 HoverPreview 없이 단순 렌더링
      if (isBroken) {
        return (
          <Link href={`/notes/${slug}`} className={className} {...rest}>
            {children}
          </Link>
        );
      }

      return (
        <WikiLinkPreview slug={slug} href={`/notes/${slug}`} fetchNote={fetchNoteSummary}>
          {children}
        </WikiLinkPreview>
      );
    }
    
    // 일반 외부 링크
    if (href?.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
    }
    
    // 내부 링크
    return <Link href={href || '#'} {...rest}>{children}</Link>;
  }
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
            rehypePlugins: [rehypeHighlight]
          }
        }}
      />
    </article>
  );
}
