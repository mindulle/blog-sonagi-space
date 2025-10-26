import { notFound } from 'next/navigation';
import type { Metadata } from 'next/data';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { extractHeadings } from '@/lib/headings';
import { PostHeader } from '@/components/blog/PostHeader';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { Container } from '@/components/ui/Container';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const headings = extractHeadings(post.content);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <ReadingProgress />
      
      <article className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <PostHeader post={post} />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block">
                <TableOfContents headings={headings} />
              </aside>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Share this post
              </h3>
              <ShareButtons title={post.title} url={postUrl} />
            </div>

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <RelatedPosts currentPost={post} allPosts={allPosts} />
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
