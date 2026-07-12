'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { CategoryBadge } from '../CategoryBadge';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Post } from '@/types/blog';

type SearchResultsProps = {
  results: Post[];
  query: string;
  isLoading?: boolean;
};

export function SearchResults({
  results,
  query,
  isLoading,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} variant="outlined" className="animate-pulse">
            <CardBody className="p-6">
              <div className="h-6 rounded w-3/4 mb-3 bg-[var(--sng-color-bg-overlay)]"></div>
              <div className="h-4 rounded w-full mb-2 bg-[var(--sng-color-bg-overlay)]"></div>
              <div className="h-4 rounded w-2/3 bg-[var(--sng-color-bg-overlay)]"></div>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg mb-2 text-[var(--sng-color-text-secondary)]">
          No results found for &quot;{query}&quot;
        </p>
        <p className="text-sm text-[var(--sng-color-text-muted)]">
          Try different keywords or browse all posts
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-[var(--sng-color-text-secondary)]">
        Found{' '}
        <strong className="text-[var(--sng-color-text-primary)]">
          {results.length}
        </strong>{' '}
        result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
      </p>

      <div className="space-y-4">
        {results.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <Card variant="outlined" hoverable>
              <CardBody className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl font-semibold transition-colors line-clamp-2 text-[var(--sng-color-text-primary)] group-hover:text-[var(--sng-color-brand-primary)]">
                    {post.title}
                  </h2>
                  <CategoryBadge category={post.category} />
                </div>

                <p className="mb-4 line-clamp-2 text-[var(--sng-color-text-secondary)]">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-[var(--sng-color-text-muted)]">
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
                      <Badge key={tag} variant="default" size="small">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
