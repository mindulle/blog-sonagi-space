import { PostCard } from './PostCard';
import type { Post } from '@/types/blog';
import { cn } from '@/lib/utils';

export interface PostListProps {
  posts: Post[];
  variant?: 'grid' | 'list';
  columns?: 1 | 2 | 3;
  emptyMessage?: string;
  className?: string;
}

/**
 * PostList 컴포넌트
 * 
 * 여러 포스트를 목록 또는 그리드로 표시
 */
export function PostList({
  posts,
  variant = 'grid',
  columns = 3,
  emptyMessage = '포스트가 없습니다.',
  className,
}: PostListProps) {
  // 빈 상태
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {emptyMessage}
        </p>
      </div>
    );
  }

  // Grid 레이아웃
  if (variant === 'grid') {
    const gridColsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
      <div
        className={cn(
          'grid gap-6',
          gridColsClasses[columns],
          className
        )}
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    );
  }

  // List 레이아웃
  return (
    <div className={cn('space-y-6', className)}>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          variant="compact"
          showImage={false}
        />
      ))}
    </div>
  );
}
