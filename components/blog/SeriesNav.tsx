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
        className="grid grid-cols-1 sm:grid-cols-2 px-6 py-5 border-t gap-3 sm:gap-4 bg-[var(--sng-color-bg-surface)]"
        style={{ borderColor: 'var(--sng-color-border-subtle)' }}
      >
        <div>
          {prev ? (
            <Link href={`/notes/${prev.slug}`} className="block">
              <Button
                variant="secondary"
                className="w-full justify-center text-[15px] h-12"
              >
                <span className="mr-2 opacity-60">←</span> 이전 글
              </Button>
            </Link>
          ) : (
            <Link href="/series" className="block">
              <Button
                variant="secondary"
                className="w-full justify-center text-[15px] h-12"
              >
                시리즈 목록
              </Button>
            </Link>
          )}
        </div>

        <div>
          {next ? (
            <Link href={`/notes/${next.slug}`} className="block">
              <Button
                variant="primary"
                className="w-full justify-center text-[15px] h-12"
              >
                다음 글 <span className="ml-2 opacity-80">→</span>
              </Button>
            </Link>
          ) : (
            <Link href="/series" className="block">
              <Button
                variant="primary"
                className="w-full justify-center text-[15px] h-12"
              >
                전체 시리즈 목록 <span className="ml-2 opacity-80">→</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
