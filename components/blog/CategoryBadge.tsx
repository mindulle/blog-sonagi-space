import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/blog';

interface CategoryBadgeProps {
  category: Category;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const categoryColors: Record<Category, string> = {
  development: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  design: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  essay: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  project: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
};

const categoryLabels: Record<Category, string> = {
  development: '개발',
  design: '디자인',
  essay: '에세이',
  project: '프로젝트',
};

export function CategoryBadge({
  category,
  href,
  className,
  onClick,
}: CategoryBadgeProps) {
  const badgeContent = (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
        categoryColors[category],
        href && 'cursor-pointer hover:opacity-80',
        className
      )}
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
