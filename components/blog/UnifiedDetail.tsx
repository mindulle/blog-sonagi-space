import Link from 'next/link';
import { MDXContent } from './MDXContent';
import { TableOfContents } from './TableOfContents';
import { BacklinksSection } from './BacklinksSection';
import type { Backlink } from './BacklinksSection';
import { CollapsibleSection } from './CollapsibleSection';
import { ShareButtons } from './ShareButtons';
import { ReadingProgress } from './ReadingProgress';
import { GrowthGlyph, normalizeStage } from './GrowthGlyph';
import { SeriesNav } from './SeriesNav';
import { HairlineRule, EndMark } from '@/components/editorial';

import { extractHeadings } from '@/lib/headings';
import { getSeriesContext } from '@/lib/series';
import { getAllNotes, type NoteWithContent } from '@/lib/notes';

interface UnifiedDetailProps {
  note: NoteWithContent;
  backlinks: Backlink[];
  relatedNotes?: Backlink[];
  isBlogView?: boolean;
}

export function UnifiedDetail({
  note,
  backlinks,
  isBlogView = false,
}: UnifiedDetailProps) {
  const headings = extractHeadings(note.rawContent);
  const h2Count = headings.filter((h) => h.level === 2).length;
  const showCollapsibleToc = h2Count >= 4;
  const seriesContext = getSeriesContext(note.series, note.slug);
  const relatedNotes = !seriesContext
    ? getAllNotes()
        .filter((n) => n.slug !== note.slug)
        .map((n) => {
          let score = 0;
          if (note.category && n.category === note.category) score += 3;
          const shared = n.tags.filter((t) => note.tags.includes(t)).length;
          score += shared;
          return { n, score };
        })
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((x) => x.n)
    : [];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const currentUrl = `${siteUrl}/${isBlogView ? 'blog' : 'notes'}/${note.slug}`;

  const wordCount = note.rawContent.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 220));
  const displayDate = note.publishedDate || note.created;
  const showDeck = Boolean(note.excerpt && note.excerpt.trim() !== note.title.trim());

  return (
    <>
      {isBlogView && <ReadingProgress />}
      <main className="max-w-[680px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          {/* 상단 신문 이중선 */}
          <div className="flex flex-col gap-[3px] mb-5" aria-hidden="true">
            <div
              className="w-full h-[2px]"
              style={{ backgroundColor: 'var(--mds-color-text-primary)' }}
            />
            <div
              className="w-full h-[1px]"
              style={{ backgroundColor: 'var(--mds-color-border-default)' }}
            />
          </div>

          {/* 상단 바이라인: 섹션 복귀 + 발행일/읽기시간 */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 font-mono text-xs uppercase tracking-wider">
            <Link
              href={isBlogView ? '/blog' : '/notes'}
              className="inline-flex items-center gap-1 transition-colors hover:text-[var(--mds-color-brand-primary)]"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              ← {isBlogView ? 'Blog' : 'Garden'}
            </Link>
            <div
              className="flex items-center gap-2 tabular-nums"
              style={{ color: 'var(--mds-color-text-muted)' }}
            >
              {displayDate && <span>{displayDate}</span>}
              {displayDate && <span aria-hidden="true">·</span>}
              <span>{readingMinutes} MIN READ</span>
            </div>
          </div>

          {/* 생장 단계 / 카테고리 / 태그 */}
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-xs">
            {note.status && (
              <span
                className="inline-flex items-center gap-1.5 font-bold tracking-[0.16em] uppercase"
                style={{ color: 'var(--mds-color-brand-primary)' }}
              >
                <GrowthGlyph
                  stage={normalizeStage(note.status)}
                  size={13}
                  strokeColor="var(--mds-color-brand-primary)"
                />
                <span>{normalizeStage(note.status)}</span>
              </span>
            )}
            {note.category && (
              <Link
                href={`/notes?category=${note.category}`}
                className="uppercase tracking-wider hover:underline"
                style={{ color: 'var(--mds-color-text-secondary)' }}
              >
                · {note.category}
              </Link>
            )}
            {note.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/notes?tag=${encodeURIComponent(tag)}`}
                className="hover:underline transition-colors"
                style={{ color: 'var(--mds-color-text-muted)' }}
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* 기사 헤드라인 */}
          <h1
            className="mb-3 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.18] tracking-tight break-keep"
            style={{
              color: 'var(--mds-color-text-primary)',
              fontFamily: 'var(--font-cinematic, serif)',
            }}
          >
            {note.title}
          </h1>

          {/* 리드문(Deck) */}
          {showDeck && (
            <p
              className="text-base sm:text-lg italic leading-relaxed break-keep"
              style={{
                color: 'var(--mds-color-text-secondary)',
                fontFamily: 'var(--font-cinematic, serif)',
              }}
            >
              {note.excerpt}
            </p>
          )}

          <HairlineRule thick className="mt-6" />
        </header>

        {showCollapsibleToc && (
          <div className="mb-8">
            <CollapsibleSection title="목차 보기" defaultExpanded={false}>
              <TableOfContents headings={headings} />
            </CollapsibleSection>
          </div>
        )}

        <MDXContent content={note.rawContent} />

        <div
          className="mt-10 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-[1px] w-12 bg-[var(--mds-color-border-default)]" />
          <EndMark size={16} className="ml-0" />
          <span className="h-[1px] w-12 bg-[var(--mds-color-border-default)]" />
        </div>

        {seriesContext && (
          <div className="mt-14 mb-8">
            <SeriesNav
              series={seriesContext.series}
              seriesOrder={seriesContext.seriesOrder}
              total={seriesContext.total}
              prev={seriesContext.prev}
              next={seriesContext.next}
              entries={seriesContext.entries}
              currentSlug={note.slug}
            />
          </div>
        )}

        {relatedNotes.length > 0 && (
          <section
            className="mt-12 pt-6 border-t"
            style={{ borderColor: 'var(--mds-color-border-default)' }}
          >
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--mds-color-brand-primary)' }}
            >
              FURTHER READING • 관련 기록
            </h3>
            <div
              className="divide-y border-b"
              style={{ borderColor: 'var(--mds-color-border-subtle)' }}
            >
              {relatedNotes.map((rel) => (
                <Link
                  key={rel.slug}
                  href={isBlogView && rel.published ? `/blog/${rel.slug}` : `/notes/${rel.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3 transition-colors hover:bg-[var(--mds-color-bg-surface)] px-2 -mx-2"
                  style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                >
                  <span
                    className="font-medium text-sm sm:text-base group-hover:text-[var(--mds-color-brand-primary)] transition-colors"
                    style={{
                      color: 'var(--mds-color-text-primary)',
                      fontFamily: 'var(--font-cinematic, serif)',
                    }}
                  >
                    {rel.title}
                  </span>
                  <span
                    className="font-mono text-xs shrink-0 uppercase"
                    style={{ color: 'var(--mds-color-text-muted)' }}
                  >
                    {rel.category || 'note'}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {backlinks.length > 0 && (
          <div className="mt-10">
            <CollapsibleSection
              title={`연결된 사유 보기 (${backlinks.length})`}
              defaultExpanded={false}
            >
              <BacklinksSection backlinks={backlinks} embedded />
            </CollapsibleSection>
          </div>
        )}

        {isBlogView && (
          <div
            className="mt-12 pt-6 border-t"
            style={{ borderColor: 'var(--mds-color-border-default)' }}
          >
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--mds-color-text-muted)' }}
            >
              SHARE THIS DISPATCH
            </h3>
            <ShareButtons title={note.title} url={currentUrl} />
          </div>
        )}
      </main>
    </>
  );
}
