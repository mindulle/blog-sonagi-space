'use client';

import { cn } from '@/lib/utils';
import type { Category } from '@/types/blog';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
  className?: string;
}

const categoryLabels: Record<Category, string> = {
  development: '개발',
  design: '디자인',
  essay: '에세이',
  project: '프로젝트',
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}: CategoryFilterProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {/* 전체 버튼 */}
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          selectedCategory === null
            ? 'text-[var(--sng-color-text-inverse)]'
            : 'text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-text-primary)]'
        )}
        style={
          selectedCategory === null
            ? { backgroundColor: 'var(--sng-color-brand-primary)' }
            : { backgroundColor: 'var(--sng-color-bg-overlay)' }
        }
      >
        전체
      </button>

      {/* 카테고리 버튼들 */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'text-[var(--sng-color-text-inverse)]'
              : 'text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-text-primary)]'
          )}
          style={
            selectedCategory === category
              ? { backgroundColor: 'var(--sng-color-brand-primary)' }
              : { backgroundColor: 'var(--sng-color-bg-overlay)' }
          }
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
