'use client';

import { Button } from '@/components/ui';
import Link from 'next/link';
import type { SeriesEntry } from '@/lib/series';

interface SeriesNavProps {
  series: string;
  seriesOrder: number;
  total: number;
  prev?: SeriesEntry;
  next?: SeriesEntry;
  entries: SeriesEntry[];
  currentSlug: string;
}

export function SeriesNav({
  series,
  seriesOrder,
  total,
  prev,
  next,
  entries,
  currentSlug,
}: SeriesNavProps) {
  return (
    <div
      className="flex flex-col rounded-[var(--sng-radius-xl)] overflow-hidden"
      style={{
        backgroundColor: 'var(--sng-color-bg-elevated)',
        border: '1px solid var(--sng-color-border-default)',
        boxShadow: 'var(--sng-shadow-sm)',
      }}
    >
      {/* Header */}
      <div
        className="px-6 pt-6 pb-4 border-b"
        style={{ borderColor: 'var(--sng-color-border-subtle)' }}
      >
        <div
          className="text-[12px] font-bold tracking-wider mb-2"
          style={{ color: 'var(--sng-color-brand-primary)' }}
        >
          SERIES
        </div>
        <h3
          className="text-xl font-bold leading-tight"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
          {series}
          <span
            className="ml-2 text-sm font-normal"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            ({seriesOrder}/{total})
          </span>
        </h3>
      </div>

      {/* List of Entries */}
      <div className="p-4">
        <ul className="flex flex-col gap-1.5 max-h-[360px] overflow-y-auto scrollbar-thin px-2">
          {entries.map((entry, idx) => {
            const isActive = entry.slug === currentSlug;
            return (
              <li key={entry.slug}>
                <Link
                  href={`/notes/${entry.slug}`}
                  className={`flex items-start gap-3 p-3 rounded-xl text-[15px] transition-colors ${
                    isActive
                      ? 'font-bold'
                      : 'hover:bg-[var(--sng-color-bg-overlay)]'
                  }`}
                  style={{
                    color: isActive
                      ? 'var(--sng-color-text-primary)'
                      : 'var(--sng-color-text-secondary)',
                    backgroundColor: isActive
                      ? 'var(--sng-color-bg-surface)'
                      : 'transparent',
                    border: isActive
                      ? '1px solid var(--sng-color-border-subtle)'
                      : '1px solid transparent',
                  }}
                >
                  <span
                    className="shrink-0 font-medium opacity-80"
                    style={{
                      color: isActive
                        ? 'var(--sng-color-brand-primary)'
                        : 'var(--sng-color-text-muted)',
                    }}
                  >
                    {idx + 1}.
                  </span>
                  <span className="leading-snug">{entry.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer / Buttons */}
      <div
        className="flex justify-between items-center px-6 py-5 border-t gap-4 bg-[var(--sng-color-bg-surface)]"
        style={{ borderColor: 'var(--sng-color-border-subtle)' }}
      >
        <div className="flex-1">
          {prev && (
            <Link href={`/notes/${prev.slug}`}>
              <Button
                variant="secondary"
                className="w-full justify-center text-[15px] h-12"
              >
                <span className="mr-2 opacity-50">←</span> 이전 글
              </Button>
            </Link>
          )}
        </div>
        <div className="flex-1">
          {next && (
            <Link href={`/notes/${next.slug}`}>
              <Button
                variant="secondary"
                className="w-full justify-center text-[15px] h-12 bg-[var(--sng-color-brand-primary)] text-white hover:opacity-90"
              >
                다음 글 <span className="ml-2 opacity-70">→</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
