'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { CategoryBadge } from './CategoryBadge';
import type { Post } from '@/types/blog';
import { cn } from '@/lib/utils';

export interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact' | 'featured';
  showImage?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

/**
 * PostCard 컴포넌트
 * 
 * 블로그 포스트를 카드 형태로 표시
 */
export function PostCard({
  post,
  variant = 'default',
  showImage = true,
  showExcerpt = true,
  className,
}: PostCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Card
      variant="elevated"
      hoverable
      className={cn(
        'group overflow-hidden',
        variant === 'featured' && 'border-2 border-primary-500',
        className
      )}
    >
      {/* 커버 이미지 */}
      {showImage && post.coverImage && (
        <Link href={`/blog/${post.slug}`} className="block">
          <div className={cn(
            'relative w-full overflow-hidden',
            isCompact ? 'aspect-[4/3]' : 'aspect-video'
          )}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}

      <CardHeader className={isCompact ? 'p-4' : undefined}>
        {/* 메타 정보 */}
        <div className={cn(
          'mb-3 flex flex-wrap items-center gap-2 text-neutral-600 dark:text-neutral-400',
          isCompact ? 'text-xs' : 'text-sm'
        )}>
          <time dateTime={post.date} className="flex items-center gap-1">
            <Calendar size={isCompact ? 12 : 14} />
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: isCompact ? 'short' : 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={isCompact ? 12 : 14} />
            {post.readingTime}분
          </span>
        </div>

        {/* 제목 */}
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={cn(
              'font-bold transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400',
              variant === 'featured' && 'text-2xl',
              variant === 'default' && 'text-xl',
              variant === 'compact' && 'text-lg'
            )}
          >
            {post.title}
          </h3>
        </Link>

        {/* 설명 */}
        {showExcerpt && !isCompact && (
          <p className="mt-2 text-neutral-600 line-clamp-2 dark:text-neutral-400">
            {post.description}
          </p>
        )}
      </CardHeader>

      <CardFooter className={cn(
        'flex items-center justify-between',
        isCompact ? 'p-4 pt-0' : undefined
      )}>
        {/* 카테고리 */}
        <CategoryBadge category={post.category} href={`/blog/category/${post.category}`} />

        {/* Read More 링크 */}
        {!isCompact && (
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Read more →
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
