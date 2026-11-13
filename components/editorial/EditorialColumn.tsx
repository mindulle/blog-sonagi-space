import React from 'react';
import { HairlineRule } from './HairlineRule';

export interface EditorialColumnProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
  ratio?: '65-35' | '50-50' | '70-30';
  className?: string;
}

/**
 * EditorialColumn
 *
 * 신문 브로드시트 특유의 다단(2단) 조판 그리드 레이아웃.
 */
export function EditorialColumn({
  children,
  aside,
  ratio = '65-35',
  className = '',
}: EditorialColumnProps) {
  if (!aside) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }

  const gridCols =
    ratio === '50-50'
      ? 'md:grid-cols-2'
      : ratio === '70-30'
        ? 'md:grid-cols-[7fr_3fr]'
        : 'md:grid-cols-[65fr_35fr]';

  return (
    <div
      className={`grid grid-cols-1 ${gridCols} gap-8 md:gap-10 items-start ${className}`}
    >
      <div className="w-full min-w-0">{children}</div>
      <div className="hidden md:flex items-stretch gap-8 w-full">
        <HairlineRule vertical />
        <aside className="w-full text-xs sm:text-sm text-[var(--sng-color-text-secondary)] leading-relaxed">
          {aside}
        </aside>
      </div>
      {/* Mobile aside fallback */}
      <aside className="md:hidden w-full pt-4 border-t border-[var(--sng-color-border-default)] text-xs text-[var(--sng-color-text-secondary)]">
        {aside}
      </aside>
    </div>
  );
}
