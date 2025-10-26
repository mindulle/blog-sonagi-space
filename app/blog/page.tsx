import { getAllPosts, getAllCategories } from '@/lib/mdx';
import { Container } from '@/components/ui/Container';
import { BlogListClient } from '@/components/blog/BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: '개발, 디자인, 그리고 생각들을 기록합니다.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <div className="py-12">
      <Container>
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            개발, 디자인, 그리고 생각들을 기록합니다.
          </p>
        </div>

        {/* 포스트 목록 (카테고리 필터 + 페이지네이션) */}
        <BlogListClient posts={posts} categories={categories} />
      </Container>
    </div>
  );
}
