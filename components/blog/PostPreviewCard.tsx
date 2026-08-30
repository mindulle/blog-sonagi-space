import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui';
import { Calendar, Clock } from 'lucide-react';
import { GrowthBadge } from './GrowthBadge';
import { CategoryLabel } from './CategoryLabel';

/**
 * PostPreviewCard가 렌더링하는 데 필요한 최소 데이터.
 *
 * 의도적으로 대부분의 필드를 optional로 둡니다: 이 카드는
 * Note(가든/블로그 리스트), Post(블로그 상세의 Related Posts), 랜딩
 * "Recent Seedlings" 3곳에서 재사용되며, 각 소스가 가진 필드가 다르기
 * 때문입니다 (예: Post에는 status가 없고, Note에는 readingTime이 없음).
 * 어떤 필드가 없어도 레이아웃이 깨지지 않고 자연스럽게 생략됩니다 —
 * coverImage가 optional인 것과 동일한 원칙입니다.
 */
export interface PostPreviewCardPost {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  status?: 'seed' | 'sapling' | 'evergreen';
  /** 미리 포맷된 날짜 문자열 (예: "2026년 8월 29일") */
  dateLabel?: string;
  readingTime?: number;
  coverImage?: string;
}

interface PostPreviewCardProps {
  post: PostPreviewCardPost;
  /** 이동 경로 — 블로그는 `/blog/[slug]`, 가든은 `/notes/[slug]` */
  href: string;
}

export function PostPreviewCard({ post, href }: PostPreviewCardProps) {
  const hasMeta = Boolean(post.dateLabel || post.readingTime);

  return (
    <Link href={href} className="group block h-full">
      <Card
        elevation="raised"
        clickable
        className="h-full flex flex-col overflow-hidden"
      >
        {post.coverImage && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {(post.status || post.category) && (
            <div className="mb-3 flex items-center gap-2">
              {post.status && <GrowthBadge status={post.status} />}
              {post.category && <CategoryLabel category={post.category} />}
            </div>
          )}

          <h3
            className="mb-2 line-clamp-2 font-semibold transition-colors group-hover:text-[var(--sng-color-brand-primary)]"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            {post.title}
          </h3>

          {post.excerpt && (
            <p
              className="mb-4 line-clamp-2 flex-1 text-sm"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              {post.excerpt}
            </p>
          )}

          {hasMeta && (
            <div
              className="mt-auto flex items-center gap-3 text-xs"
              style={{ color: 'var(--sng-color-text-muted)' }}
            >
              {post.dateLabel && (
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.dateLabel}
                </span>
              )}
              {post.readingTime && (
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readingTime}분
                </span>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
