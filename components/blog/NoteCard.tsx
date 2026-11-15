'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GrowthGlyph, normalizeStage } from './GrowthGlyph';
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

const STAGE_LABEL: Record<string, string> = {
  seed: 'SEED',
  sprout: 'SPROUT',
  rosette: 'ROSETTE',
  pappus: 'PAPPUS',
};

export function NoteCard({ note }: { note: Note }) {
  const dateStr = (note.publishedDate || note.created || '').slice(0, 10);
  const stage = note.status ? normalizeStage(note.status) : null;

  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group block border-b py-6 transition-colors hover:bg-[var(--mds-color-bg-surface)] px-2 -mx-2 select-text"
      style={{
        borderColor: 'var(--mds-color-border-subtle)',
        textDecoration: 'none',
      }}
    >
      <article className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline">
        {/* 좌측 메타: 날짜 · 생장 단계(박스 없는 루브릭) · 슬러그 */}
        <div className="md:col-span-3 flex flex-col gap-1 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            {dateStr && (
              <span
                className="tabular-nums"
                style={{ color: 'var(--mds-color-text-secondary)' }}
              >
                {dateStr}
              </span>
            )}
            {stage && (
              <span
                className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.16em] uppercase"
                style={{ color: 'var(--mds-color-brand-primary)' }}
              >
                <GrowthGlyph
                  stage={stage}
                  size={12}
                  strokeColor="var(--mds-color-brand-primary)"
                />
                <span>{STAGE_LABEL[stage]}</span>
              </span>
            )}
          </div>
          <span
            className="text-[11px] truncate"
            style={{ color: 'var(--mds-color-text-muted)' }}
          >
            [[{note.slug}]]
          </span>
        </div>

        {/* 중앙: 제목 + 요약 */}
        <div className="md:col-span-7">
          <h2
            className="text-lg sm:text-xl font-bold font-sans tracking-tight keep-all group-hover:underline"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            {note.title}
          </h2>
          {note.excerpt && (
            <p
              className="mt-1.5 text-sm font-sans leading-relaxed line-clamp-2 keep-all"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              {note.excerpt}
            </p>
          )}
        </div>

        {/* 우측: 태그 + 이동 화살표 */}
        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 font-mono text-[11px]">
          {note.tags && note.tags.length > 0 && (
            <span
              className="truncate"
              style={{ color: 'var(--mds-color-text-muted)' }}
            >
              {note.tags
                .slice(0, 2)
                .map((t) => `#${t}`)
                .join(' ')}
            </span>
          )}
          <ArrowUpRight
            size={16}
            className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          />
        </div>
      </article>
    </Link>
  );
}
