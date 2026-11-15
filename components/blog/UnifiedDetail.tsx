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
import type { NoteWithContent } from '@/lib/notes';

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const currentUrl = `${siteUrl}/${isBlogView ? 'blog' : 'notes'}/${note.slug}`;

  return (
    <>
      {isBlogView && <ReadingProgress />}
      <main className="max-w-[680px] mx-auto px-4 sm:px-6 py-12">
        <header className="mb-10">
          <Link
            href={isBlogView ? '/blog' : '/notes'}
            className="inline-flex items-center gap-1 mb-4 text-sm"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          >
            ← {isBlogView ? 'Blog' : 'Notes'}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs">
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
              <span
                key={tag}
                style={{ color: 'var(--mds-color-text-muted)' }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{
              color: 'var(--mds-color-text-primary)',
              fontFamily: 'var(--font-cinematic, serif)',
            }}
          >
            {note.title}
          </h1>

          {(note.publishedDate || note.created) && (
            <div
              className="flex items-center gap-4 text-sm"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              <span>{note.publishedDate || note.created}</span>
            </div>
          )}

          <HairlineRule thick className="mt-6" />
          {/* Future slot: TL;DR & Audio Player (BLOG-24) */}
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
          <div className="mt-16 mb-8">
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
            className="mt-12 pt-8 border-t"
            style={{ borderColor: 'var(--mds-color-border-default)' }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--mds-color-text-primary)' }}
            >
              Share this post
            </h3>
            <ShareButtons title={note.title} url={currentUrl} />
          </div>
        )}
      </main>
    </>
  );
}
