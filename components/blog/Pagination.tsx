'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // 페이지 번호 배열 생성
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let start = currentPage - halfVisible;
      let end = currentPage + halfVisible;

      if (start < 1) {
        start = 1;
        end = maxVisiblePages;
      }

      if (end > totalPages) {
        end = totalPages;
        start = totalPages - maxVisiblePages + 1;
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const navBtnBase =
    'flex h-10 w-10 items-center justify-center rounded-lg border transition-colors';

  return (
    <nav
      className={cn('flex items-center justify-center gap-2', className)}
      aria-label="Pagination"
    >
      {/* 이전 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={navBtnBase}
        style={
          currentPage === 1
            ? {
                cursor: 'not-allowed',
                borderColor: 'var(--color-border-subtle)',
                color: 'var(--color-text-disabled)',
              }
            : {
                borderColor: 'var(--color-border-default)',
                color: 'var(--color-text-secondary)',
              }
        }
        aria-label="이전 페이지"
      >
        <ChevronLeft size={20} />
      </button>

      {/* 페이지 번호들 */}
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-10 w-10 items-center justify-center"
              style={{ color: 'var(--color-text-muted)' }}
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={cn(navBtnBase, 'text-sm font-medium')}
            style={
              isActive
                ? {
                    borderColor: 'var(--color-brand-primary)',
                    backgroundColor: 'var(--color-brand-primary)',
                    color: 'var(--color-text-inverse)',
                  }
                : {
                    borderColor: 'var(--color-border-default)',
                    color: 'var(--color-text-secondary)',
                  }
            }
            aria-label={`페이지 ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* 다음 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={navBtnBase}
        style={
          currentPage === totalPages
            ? {
                cursor: 'not-allowed',
                borderColor: 'var(--color-border-subtle)',
                color: 'var(--color-text-disabled)',
              }
            : {
                borderColor: 'var(--color-border-default)',
                color: 'var(--color-text-secondary)',
              }
        }
        aria-label="다음 페이지"
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
}
