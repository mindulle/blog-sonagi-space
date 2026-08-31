import Link from 'next/link';
import type { SeriesEntry } from '@/lib/series';

interface SeriesPanelProps {
  series: string;
  entries: SeriesEntry[];
  currentSlug: string;
}

/**
 * 상세 페이지 사이드바의 "이 시리즈의 다른 글" 패널.
 * docs/features-pipeline-series.md 3.3-A 의 [추가 필요] 항목.
 */
export function SeriesPanel({
  series,
  entries,
  currentSlug,
}: SeriesPanelProps) {
  if (entries.length === 0) return null;

  return (
    <div
      className="p-4 border rounded-[var(--sng-radius-lg)]"
      style={{
        backgroundColor: 'var(--sng-color-bg-surface)',
        borderColor: 'var(--sng-color-border-default)',
        boxShadow: 'var(--sng-shadow-raised)',
      }}
    >
      <h3
        className="mb-1 text-sm font-medium"
        style={{ color: 'var(--sng-color-text-secondary)' }}
      >
        이 시리즈의 다른 글
      </h3>
      <p
        className="mb-4 text-sm font-bold"
        style={{ color: 'var(--sng-color-text-primary)' }}
      >
        {series}
      </p>

      <ol className="flex flex-col gap-1">
        {entries.map((entry, index) => {
          const isCurrent = entry.slug === currentSlug;

          return (
            <li key={entry.slug} className="flex gap-2 items-baseline">
              <span
                className="text-sm"
                style={{
                  color: isCurrent
                    ? 'var(--sng-color-brand-primary)'
                    : 'var(--sng-color-text-muted)',
                }}
              >
                {index + 1}.
              </span>

              {isCurrent ? (
                <span
                  aria-current="page"
                  className="text-sm font-bold"
                  style={{ color: 'var(--sng-color-brand-primary)' }}
                >
                  {entry.title}
                </span>
              ) : (
                <Link
                  href={`/notes/${entry.slug}`}
                  className="text-sm"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  {entry.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
