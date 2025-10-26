import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import type { Post } from '@/types/blog';

interface PostHeaderProps {
  post: Post;
  showCoverImage?: boolean;
}

export function PostHeader({ post, showCoverImage = true }: PostHeaderProps) {
  return (
    <header className="mb-12">
      {/* 커버 이미지 */}
      {showCoverImage && post.coverImage && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* 카테고리 */}
      <div className="mb-4">
        <CategoryBadge category={post.category} />
      </div>

      {/* 제목 */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {post.title}
      </h1>

      {/* 설명 */}
      <p className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
        {post.description}
      </p>

      {/* 메타 정보 */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        {/* 날짜 */}
        <div className="flex items-center gap-1.5">
          <Calendar size={16} />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <span className="text-neutral-300 dark:text-neutral-700">·</span>

        {/* 읽기 시간 */}
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          <span>{post.readingTime}분</span>
        </div>

        {/* 작성자 */}
        {post.author && (
          <>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <div className="flex items-center gap-1.5">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
