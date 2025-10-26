import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/mdx';
import { Container } from '@/components/ui/Container';
import { PostHeader } from '@/components/blog/PostHeader';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { Badge } from '@/components/ui/Badge';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// Static Params 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Metadata 생성
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author || 'Anonymous' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Anonymous'],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
      url: postUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // 관련 포스트 가져오기
  const relatedPosts = await getRelatedPosts(params.slug, 3);

  // 포스트 URL (공유 기능용)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="py-12">
      <Container maxWidth="lg">
        {/* 포스트 헤더 */}
        <PostHeader post={post} showCoverImage={true} />

        {/* 구분선 */}
        <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

        {/* 포스트 내용 */}
        <div className="prose prose-lg prose-neutral mx-auto dark:prose-invert">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>

        {/* 하단 메타 섹션 */}
        <div className="mt-12 space-y-6 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          {/* 태그 */}
          {post.tags && post.tags.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                태그
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* 공유 버튼 */}
          <div>
            <ShareButtons title={post.title} url={postUrl} />
          </div>
        </div>

        {/* 관련 포스트 */}
        <RelatedPosts posts={relatedPosts} />
      </Container>
    </article>
  );
}
