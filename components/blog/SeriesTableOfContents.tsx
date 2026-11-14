'use client';

import Link from 'next/link';
import type { SeriesContext } from '@/lib/series';

interface Props {
  seriesContext: SeriesContext;
  currentSlug: string;
}

export function SeriesTableOfContents({ seriesContext, currentSlug }: Props) {
  return (
    <div
      className="flex flex-col border rounded-[var(--mds-radius-lg)] overflow-hidden"
      style={{
        backgroundColor: 'var(--mds-color-bg-surface)',
        borderColor: 'var(--mds-color-border-default)',
        boxShadow: 'var(--mds-shadow-raised)',
      }}
    >
      <div
        className="p-4 border-b"
        style={{ borderColor: 'var(--mds-color-border-subtle)' }}
      >
        <div
          className="text-[11px] font-bold tracking-wider mb-1"
          style={{ color: 'var(--mds-color-text-muted)' }}
        >
          SERIES
        </div>
        <h3
          className="font-bold text-[14px] leading-snug"
          style={{ color: 'var(--mds-color-text-primary)' }}
        >
          {seriesContext.series}
          <span
            className="ml-2 font-normal text-xs"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          >
            ({seriesContext.seriesOrder}/{seriesContext.total})
          </span>
        </h3>
      </div>
      <ul className="flex flex-col p-2 max-h-[320px] overflow-y-auto scrollbar-thin">
        {seriesContext.entries.map((entry, idx) => {
          const isActive = entry.slug === currentSlug;
          return (
            <li key={entry.slug}>
              <Link
                href={`/notes/${entry.slug}`}
                className={`flex items-start gap-2 p-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'font-bold'
                    : 'hover:bg-[var(--mds-color-bg-overlay)]'
                }`}
                style={{
                  color: isActive
                    ? 'var(--mds-color-brand-primary)'
                    : 'var(--mds-color-text-secondary)',
                  backgroundColor: isActive
                    ? 'var(--mds-color-bg-elevated)'
                    : 'transparent',
                }}
              >
                <span
                  className="shrink-0 font-medium opacity-60"
                  style={{
                    color: isActive
                      ? 'var(--mds-color-brand-primary)'
                      : 'var(--mds-color-text-muted)',
                  }}
                >
                  {idx + 1}.
                </span>
                <span className="leading-tight">{entry.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
