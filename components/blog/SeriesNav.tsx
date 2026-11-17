'use client';

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
      className="flex flex-col rounded-none overflow-hidden"
      style={{
        backgroundColor: 'var(--mds-color-bg-surface)',
        border: '1px solid var(--mds-color-border-default)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b"
        style={{ borderColor: 'var(--mds-color-border-subtle)' }}
      >
        <div className="flex items-center justify-between gap-2 font-mono text-xs tracking-wider mb-1.5">
          <span
            className="font-bold uppercase"
            style={{ color: 'var(--mds-color-brand-primary)' }}
          >
            SERIES • 연재 목차
          </span>
          <span
            className="tabular-nums"
            style={{ color: 'var(--mds-color-text-muted)' }}
          >
            {seriesOrder} OF {total}
          </span>
        </div>
        <h3
          className="text-xl font-bold leading-tight"
          style={{
            color: 'var(--mds-color-text-primary)',
            fontFamily: 'var(--font-cinematic, serif)',
          }}
        >
          {series}
        </h3>
      </div>

      {/* List of Entries */}
      <div className="px-4 py-2">
        <ul className="divide-y max-h-[360px] overflow-y-auto scrollbar-thin" style={{ borderColor: 'var(--mds-color-border-subtle)' }}>
          {entries.map((entry, idx) => {
            const isActive = entry.slug === currentSlug;
            return (
              <li
                key={entry.slug}
                style={{ borderColor: 'var(--mds-color-border-subtle)' }}
              >
                <Link
                  href={`/notes/${entry.slug}`}
                  className={`flex items-baseline gap-3 px-3 py-2.5 rounded-none text-sm transition-colors ${
                    isActive
                      ? 'font-bold border-l-2'
                      : 'hover:bg-[var(--mds-color-bg-overlay)]'
                  }`}
                  style={{
                    color: isActive
                      ? 'var(--mds-color-text-primary)'
                      : 'var(--mds-color-text-secondary)',
                    backgroundColor: isActive
                      ? 'var(--mds-color-bg-overlay)'
                      : 'transparent',
                    borderLeftColor: isActive
                      ? 'var(--mds-color-brand-primary)'
                      : 'transparent',
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold tabular-nums shrink-0"
                    style={{
                      color: isActive
                        ? 'var(--mds-color-brand-primary)'
                        : 'var(--mds-color-text-muted)',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
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
        className="grid grid-cols-1 sm:grid-cols-2 px-5 py-4 border-t gap-3"
        style={{
          borderColor: 'var(--mds-color-border-subtle)',
          backgroundColor: 'var(--mds-color-bg-base)',
        }}
      >
        <Link
          href={prev ? `/notes/${prev.slug}` : '/series'}
          className="flex items-center justify-center px-4 py-2.5 border rounded-none font-mono text-xs font-medium uppercase tracking-wider transition-colors hover:bg-[var(--mds-color-bg-surface)]"
          style={{
            borderColor: 'var(--mds-color-border-default)',
            color: 'var(--mds-color-text-primary)',
          }}
        >
          {prev ? '← 이전 글' : '시리즈 목록'}
        </Link>

        <Link
          href={next ? `/notes/${next.slug}` : '/series'}
          className="flex items-center justify-center px-4 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{
            backgroundColor: 'var(--mds-color-text-primary)',
            color: 'var(--mds-color-text-inverse)',
          }}
        >
          {next ? '다음 글 →' : '전체 시리즈 목록 →'}
        </Link>
      </div>
    </div>
  );
}
