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
      <p className="mb-6 text-xl" style={{ color: 'var(--color-text-secondary)' }}>
        {post.description}
      </p>

      {/* 메타 정보 */}
      <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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

        <span style={{ color: 'var(--color-text-muted)' }}>·</span>

        {/* 읽기 시간 */}
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          <span>{post.readingTime}분</span>
        </div>

        {/* 작성자 */}
        {post.author && (
          <>
            <span style={{ color: 'var(--color-text-muted)' }}>·</span>
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
