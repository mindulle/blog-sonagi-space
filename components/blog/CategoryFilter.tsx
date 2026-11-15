'use client';

import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

const categoryLabels: Record<string, string> = {
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
    <div className={cn('flex flex-wrap items-center gap-2 font-mono', className)}>
      <button
        onClick={() => onSelectCategory(null)}
        className="px-3 py-1.5 text-xs tracking-wider uppercase border transition-colors"
        style={{
          backgroundColor:
            selectedCategory === null
              ? 'var(--mds-color-bg-overlay)'
              : 'transparent',
          borderColor:
            selectedCategory === null
              ? 'var(--mds-color-brand-primary)'
              : 'var(--mds-color-border-subtle)',
          color:
            selectedCategory === null
              ? 'var(--mds-color-brand-primary)'
              : 'var(--mds-color-text-secondary)',
        }}
      >
        전체
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="px-3 py-1.5 text-xs tracking-wider uppercase border transition-colors"
          style={{
            backgroundColor:
              selectedCategory === category
                ? 'var(--mds-color-bg-overlay)'
                : 'transparent',
            borderColor:
              selectedCategory === category
                ? 'var(--mds-color-brand-primary)'
                : 'var(--mds-color-border-subtle)',
            color:
              selectedCategory === category
                ? 'var(--mds-color-brand-primary)'
                : 'var(--mds-color-text-secondary)',
          }}
        >
          {categoryLabels[category] || category}
        </button>
      ))}
    </div>
  );
}
