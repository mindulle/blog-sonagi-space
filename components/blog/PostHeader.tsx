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
      {showCoverImage && post.coverImage && (
        <div className="relative w-full mb-8 overflow-hidden aspect-video rounded-[var(--sng-radius-lg)]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mb-4">
        <CategoryBadge category={post.category} />
      </div>

      <h1
        className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        style={{ color: 'var(--sng-color-text-primary)' }}
      >
        {post.title}
      </h1>

      {/*
        점진적 공개(Progressive Disclosure)
        본문 읽기에 집중할 수 있도록 메타데이터는 기본적으로 접어 둔다.
      */}
      <details className="group">
        <summary
          className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
          style={{ color: 'var(--sng-color-text-secondary)' }}
        >
          <span className="transition-transform group-open:rotate-90">▶</span>
          포스트 정보 보기
        </summary>

        <div
          className="flex flex-col gap-4 mt-4 p-4 border rounded-[var(--sng-radius-md)]"
          style={{
            backgroundColor: 'var(--sng-color-bg-surface)',
            borderColor: 'var(--sng-color-border-subtle)',
          }}
        >
          {post.description && (
            <div className="flex flex-col gap-1">
              <span
                className="text-xs"
                style={{ color: 'var(--sng-color-text-muted)' }}
              >
                요약
              </span>
              <p
                className="m-0 text-sm"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                {post.description}
              </p>
            </div>
          )}

          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            <div className="flex items-center gap-1.5">
              <Calendar size={16} aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <span style={{ color: 'var(--sng-color-text-muted)' }}>·</span>

            <div className="flex items-center gap-1.5">
              <Clock size={16} aria-hidden="true" />
              <span>{post.readingTime}분</span>
            </div>

            {post.author && (
              <>
                <span style={{ color: 'var(--sng-color-text-muted)' }}>·</span>
                <div className="flex items-center gap-1.5">
                  <User size={16} aria-hidden="true" />
                  <span>{post.author}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </details>
    </header>
  );
}
