'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { CategoryBadge } from '../CategoryBadge';
import type { Post } from '@/types/blog';

type SearchResultsProps = {
  results: Post[];
  query: string;
  isLoading?: boolean;
};

export function SearchResults({ results, query, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg animate-pulse"
          >
            <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
          No results found for &quot;{query}&quot;
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          Try different keywords or browse all posts
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
      </p>

      <div className="space-y-4">
        {results.map((post) => (
          <article
            key={post.slug}
            className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <CategoryBadge category={post.category} />
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                <time
                  dateTime={post.date}
                  className="flex items-center gap-1.5"
                >
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readingTime} min read
                </span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
