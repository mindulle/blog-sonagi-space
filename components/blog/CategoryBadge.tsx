import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/blog';

interface CategoryBadgeProps {
  category: Category;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const categoryLabels: Record<Category, string> = {
  development: '개발',
  design: '디자인',
  essay: '에세이',
  project: '프로젝트',
};

// CSS 변수 기반 — globals.css의 --sng-color-cat-* 토큰 사용
const categoryVars: Record<Category, { bg: string; text: string }> = {
  development: {
    bg: 'var(--sng-color-cat-dev-bg)',
    text: 'var(--sng-color-cat-dev-text)',
  },
  design: {
    bg: 'var(--sng-color-cat-design-bg)',
    text: 'var(--sng-color-cat-design-text)',
  },
  essay: {
    bg: 'var(--sng-color-cat-essay-bg)',
    text: 'var(--sng-color-cat-essay-text)',
  },
  project: {
    bg: 'var(--sng-color-cat-project-bg)',
    text: 'var(--sng-color-cat-project-text)',
  },
};

export function CategoryBadge({
  category,
  href,
  className,
  onClick,
}: CategoryBadgeProps) {
  const { bg, text } = categoryVars[category];

  const badgeContent = (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
        href && 'cursor-pointer hover:opacity-80',
        className
      )}
      style={{ backgroundColor: bg, color: text }}
      onClick={onClick}
    >
      {categoryLabels[category]}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {badgeContent}
      </Link>
    );
  }

  return badgeContent;
}
