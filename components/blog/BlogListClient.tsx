'use client';

import { useState, useMemo } from 'react';
import { PostList } from './PostList';
import { CategoryFilter } from './CategoryFilter';
import { Pagination } from './Pagination';
import type { Note } from '@/lib/notes';

interface BlogListClientProps {
  posts: Note[];
  categories: string[];
  postsPerPage?: number;
}

export function BlogListClient({
  posts,
  categories,
  postsPerPage = 9,
}: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  return (
    <div className="space-y-12">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory as unknown}
        onSelectCategory={(cat: unknown) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
      />

      <PostList posts={currentPosts as unknown} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
