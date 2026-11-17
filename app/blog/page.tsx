import { getAllNotes } from '@/lib/notes';
import { Container } from '@/components/ui/Container';
import { BlogListClient } from '@/components/blog/BlogListClient';
import { RssSubscribeWidget } from '@/components/blog';
import { EndMark, HairlineRule } from '@/components/editorial';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '기록과 지면 • Blog',
  description:
    '정원에서 무르익은 생각들을 정돈하여 활판 인쇄의 지면으로 발행합니다.',
};

export default async function BlogPage() {
  const notes = getAllNotes().filter((note) => note.published);
  const categories = Array.from(
    new Set(notes.map((n) => n.category).filter(Boolean))
  ) as string[];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div
            className="flex flex-wrap items-center justify-between gap-2 py-2.5 mb-8 border-y font-mono text-xs tracking-[0.22em] uppercase"
            style={{
              borderColor: 'var(--mds-color-border-subtle)',
              color: 'var(--mds-color-text-secondary)',
            }}
          >
            <span>DISPATCHES &amp; ARTICLES</span>
            <span style={{ color: 'var(--mds-color-brand-primary)' }}>
              TOTAL {notes.length} ARTICLES
            </span>
          </div>

          <div className="mb-8">
            <h1
              className="mb-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight keep-all"
              style={{ color: 'var(--mds-color-text-primary)' }}
            >
              기록과 지면
            </h1>
            <p
              className="max-w-2xl text-base sm:text-lg font-sans keep-all"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              정원에서 무르익은 사유와 기술적 통찰을 정돈하여 발행하는
              에디토리얼 아티클입니다.
            </p>
            <HairlineRule thick className="mt-8" />
          </div>

          <BlogListClient posts={notes} categories={categories} />

          <div className="mt-14 flex items-center gap-4">
            <HairlineRule className="flex-1 my-0" />
            <EndMark className="ml-0" />
            <HairlineRule className="flex-1 my-0" />
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <RssSubscribeWidget />
          </div>
        </div>
      </Container>
    </div>
  );
}
