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
      className="group flex flex-col justify-between h-full p-5 border rounded-none transition-colors hover:bg-[var(--mds-color-bg-surface)] select-text"
      style={{
        borderColor: 'var(--mds-color-border-default)',
        backgroundColor: 'var(--mds-color-bg-base)',
        textDecoration: 'none',
      }}
    >
      <div>
        {/* 상단 메타: 생장 단계 · 날짜 */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--mds-color-border-subtle)] font-mono text-xs">
          {stage ? (
            <span
              className="inline-flex items-center gap-1.5 font-bold tracking-[0.14em] uppercase"
              style={{ color: 'var(--mds-color-brand-primary)' }}
            >
              <GrowthGlyph
                stage={stage}
                size={12}
                strokeColor="var(--mds-color-brand-primary)"
              />
              <span>{STAGE_LABEL[stage]}</span>
            </span>
          ) : (
            <span />
          )}
          {dateStr && (
            <span
              className="tabular-nums"
              style={{ color: 'var(--mds-color-text-muted)' }}
            >
              {dateStr}
            </span>
          )}
        </div>

        {/* 슬러그 + 제목 + 요약 */}
        <div className="space-y-1.5">
          <div
            className="font-mono text-xs truncate"
            style={{ color: 'var(--mds-color-text-muted)' }}
          >
            [[{note.slug}]]
          </div>
          <h2
            className="text-base sm:text-lg font-bold font-sans tracking-tight keep-all group-hover:underline"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            {note.title}
          </h2>
          {note.excerpt && (
            <p
              className="text-sm font-sans leading-relaxed line-clamp-2 keep-all"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              {note.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* 하단: 태그 + 이동 화살표 */}
      <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-[var(--mds-color-border-subtle)] font-mono text-xs">
        <span
          className="truncate"
          style={{ color: 'var(--mds-color-text-muted)' }}
        >
          {note.tags && note.tags.length > 0
            ? note.tags
                .slice(0, 2)
                .map((t) => `#${t}`)
                .join(' ')
            : 'NOTE'}
        </span>
        <span
          className="inline-flex items-center gap-1 shrink-0 font-medium"
          style={{ color: 'var(--mds-color-text-primary)' }}
        >
          <span>EXPLORE</span>
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
