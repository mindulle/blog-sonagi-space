import { getAllNotes } from '@/lib/notes';
import { Container } from '@/components/ui/Container';
import { BlogListClient } from '@/components/blog/BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: '개발, 디자인, 그리고 생각들을 기록합니다.',
};

export default async function BlogPage() {
  const notes = getAllNotes().filter(note => note.published);
  const categories = Array.from(new Set(notes.map(n => n.category).filter(Boolean))) as string[];

  return (
    <div className="py-12">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            개발, 디자인, 그리고 생각들을 기록합니다.
          </p>
        </div>

        <BlogListClient posts={notes} categories={categories} />
      </Container>
    </div>
  );
}
