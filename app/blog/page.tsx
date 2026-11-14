import { getAllNotes } from '@/lib/notes';
import { Container } from '@/components/ui/Container';
import { BlogListClient } from '@/components/blog/BlogListClient';
import { RssSubscribeWidget } from '@/components/blog';
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
    <div className="py-12">
      <Container>
        <div className="mb-12 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] font-mono text-xs mb-3 border select-none"
            style={{
              backgroundColor: 'var(--mds-color-bg-surface)',
              borderColor: 'var(--mds-color-border-subtle)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--mds-color-brand-primary)' }}
            />
            <span
              className="font-bold tracking-wider uppercase"
              style={{ color: 'var(--mds-color-brand-primary)' }}
            >
              DISPATCHES &amp; ARTICLES
            </span>
          </div>
          <h1
            className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            기록과 지면
          </h1>
          <p
            className="mx-auto max-w-2xl text-base sm:text-lg"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          >
            정원에서 무르익은 사유와 기술적 통찰을 정돈하여 발행하는 에디토리얼
            아티클입니다.
          </p>
        </div>

        <BlogListClient posts={notes} categories={categories} />

        <div className="mt-16 max-w-3xl mx-auto">
          <RssSubscribeWidget />
        </div>
      </Container>
    </div>
  );
}
