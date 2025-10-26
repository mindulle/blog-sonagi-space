'use client';

import { useState, useMemo } from 'react';
import { PostList } from './PostList';
import { CategoryFilter } from './CategoryFilter';
import { Pagination } from './Pagination';
import type { Post, Category } from '@/types/blog';

interface BlogListClientProps {
  posts: Post[];
  categories: Category[];
  postsPerPage?: number;
}

export function BlogListClient({
  posts,
  categories,
  postsPerPage = 9,
}: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 카테고리로 필터링된 포스트
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // 카테고리 변경 시 페이지 초기화
  const handleCategoryChange = (category: Category | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지 변경 시 스크롤을 상단으로
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {/* 카테고리 필터 */}
      <div className="flex justify-center">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </div>

      {/* 결과 개수 */}
      <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">
        {selectedCategory ? (
          <p>
            <span className="font-medium">{filteredPosts.length}개</span>의{' '}
            포스트
          </p>
        ) : (
          <p>
            총 <span className="font-medium">{posts.length}개</span>의 포스트
          </p>
        )}
      </div>

      {/* 포스트 목록 */}
      {currentPosts.length > 0 ? (
        <>
          <PostList posts={currentPosts} variant="grid" columns={3} />

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            포스트가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
