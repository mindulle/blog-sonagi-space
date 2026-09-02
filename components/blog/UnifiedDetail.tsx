import Link from 'next/link';
import { MDXContent } from './MDXContent';
import { TableOfContents } from './TableOfContents';
import { MobileTOC } from './TableOfContents/MobileTOC';
import { BacklinksSection } from './BacklinksSection';
import type { Backlink } from './BacklinksSection';
import { LocalGraph } from './LocalGraph';
import { RelatedPosts } from './RelatedPosts';
import { ShareButtons } from './ShareButtons';
import { ReadingProgress } from './ReadingProgress';
import { GrowthBadge } from './GrowthBadge';
import { CategoryLabel } from './CategoryLabel';
import { MetadataToggle } from './MetadataToggle';
import { SeriesNav } from './SeriesNav';

import { extractHeadings } from '@/lib/headings';
import { getSeriesContext } from '@/lib/series';
import type { NoteWithContent } from '@/lib/notes';
import type { Post } from '@/types/blog';

interface UnifiedDetailProps {
  note: NoteWithContent;
  backlinks: Backlink[];
  relatedNotes?: Backlink[];
  isBlogView?: boolean;
}

const surfaceCardStyle = {
  backgroundColor: 'var(--sng-color-bg-surface)',
  borderColor: 'var(--sng-color-border-default)',
  boxShadow: 'var(--sng-shadow-raised)',
};

export function UnifiedDetail({
  note,
  backlinks,
  relatedNotes = [],
  isBlogView = false,
}: UnifiedDetailProps) {
  const headings = extractHeadings(note.rawContent);
  const seriesContext = getSeriesContext(note.series, note.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const currentUrl = `${siteUrl}/${isBlogView ? 'blog' : 'notes'}/${note.slug}`;

  const backLink = (
    <Link
      href={isBlogView ? '/blog' : '/notes'}
      className="inline-flex items-center gap-1 mb-4 text-sm"
      style={{ color: 'var(--sng-color-text-secondary)' }}
    >
      ← {isBlogView ? 'Blog' : 'Notes'}
    </Link>
  );

  return (
    <>
      {isBlogView && <ReadingProgress />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8">
            <header className="mb-10">
              {backLink}

              <div className="flex items-center gap-3 mb-4">
                <GrowthBadge status={note.status} />
                {note.category && (
                  <CategoryLabel
                    category={note.category}
                    href={`/notes?category=${note.category}`}
                  />
                )}
              </div>

              <h1
                className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                {note.title}
              </h1>

              <div
                className="flex items-center gap-4 text-sm"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                {note.publishedDate && <span>{note.publishedDate}</span>}
                <MetadataToggle created={note.created} />
              </div>
            </header>

            <MDXContent content={note.rawContent} />

            {/* 본문 하단: 시리즈 네비게이션 (Figma 시안 반영) */}
            {seriesContext && (
              <div className="mt-16 mb-8">
                <SeriesNav
                  series={seriesContext.series}
                  seriesOrder={seriesContext.seriesOrder}
                  total={seriesContext.total}
                  prev={seriesContext.prev}
                  next={seriesContext.next}
                />
              </div>
            )}

            <MobileTOC headings={headings} />

            <div className="block lg:hidden mt-16 space-y-8">
              <LocalGraph slug={note.slug} />
              <BacklinksSection backlinks={backlinks} />
            </div>

            {isBlogView && (
              <div
                className="mt-12 pt-8 border-t"
                style={{ borderColor: 'var(--sng-color-border-default)' }}
              >
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  Share this post
                </h3>
                <ShareButtons title={note.title} url={currentUrl} />
              </div>
            )}
          </main>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {headings.length > 0 && (
                <div
                  className="p-4 border rounded-[var(--sng-radius-lg)]"
                  style={surfaceCardStyle}
                >
                  <TableOfContents headings={headings} />
                </div>
              )}

              <LocalGraph slug={note.slug} />

              <BacklinksSection backlinks={backlinks} />

              {/* Related Posts & Tags */}
              <div
                className="p-4 border rounded-[var(--sng-radius-lg)]"
                style={surfaceCardStyle}
              >
                <h3
                  className="mb-4 text-sm font-medium"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  관련 태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <CategoryLabel key={tag} category={tag} />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
