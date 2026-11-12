'use client';

import { GrowthBadge } from './GrowthBadge';
import type { GrowthStage } from './GrowthGlyph';

interface Note {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  status?: GrowthStage;
  created?: string;
  publishedDate?: string;
}

export function NoteCard({ note }: { note: Note }) {
  const dateStr = (note.publishedDate || note.created || '').slice(0, 10);

  return (
    <a
      href={`/notes/${note.slug}`}
      className="block group h-full select-text"
      style={{ textDecoration: 'none' }}
    >
      <article
        className="relative h-full flex flex-col justify-between p-5 rounded-[4px] border transition-all duration-200 font-mono"
        style={{
          backgroundColor: 'var(--sng-color-bg-surface)',
          borderColor: 'var(--sng-color-border-default)',
          borderWidth: '2px', // The True 2px Stem (SSOT)
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            'var(--sng-color-brand-primary)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLElement).style.boxShadow =
            'var(--sng-shadow-raised, 0 8px 24px -4px rgba(0, 0, 0, 0.12))';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            'var(--sng-color-border-default)';
          (e.currentTarget as HTMLElement).style.transform = 'none';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        <div>
          {/* Header: Specimen Slug & Botanical Growth Stage */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--sng-color-border-subtle)]">
            <span
              className="text-xs font-bold tracking-tight truncate"
              style={{ color: 'var(--sng-color-brand-primary)' }}
            >
              [[{note.slug}]]
            </span>
            {note.status && (
              <div className="shrink-0">
                <GrowthBadge status={note.status} showGlyph />
              </div>
            )}
          </div>

          {/* Title */}
          <h2
            className="text-base font-bold font-sans tracking-tight mb-2 line-clamp-2 transition-colors group-hover:text-[var(--sng-color-brand-primary)]"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            {note.title}
          </h2>

          {/* Excerpt */}
          {note.excerpt && (
            <p
              className="text-xs font-sans leading-relaxed line-clamp-2 mb-4"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              {note.excerpt}
            </p>
          )}
        </div>

        {/* Footer: Tags & Harvest Date */}
        <div
          className="pt-3 mt-auto flex flex-wrap items-center justify-between gap-2 border-t text-[11px]"
          style={{ borderColor: 'var(--sng-color-border-subtle)' }}
        >
          {note.tags && note.tags.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1.5 max-w-[70%]">
              {note.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded-[2px] truncate"
                  style={{
                    backgroundColor: 'var(--sng-color-bg-overlay)',
                    color: 'var(--sng-color-text-muted)',
                    border: '1px solid var(--sng-color-border-subtle)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : (
            <span />
          )}

          {dateStr && (
            <span
              className="tabular-nums shrink-0"
              style={{ color: 'var(--sng-color-text-muted)' }}
            >
              {dateStr}
            </span>
          )}
        </div>
      </article>
    </a>
  );
}
