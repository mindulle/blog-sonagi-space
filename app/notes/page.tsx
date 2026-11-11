import Link from 'next/link';
import { getAllNotes } from '@/lib/notes';
import { NotesGarden } from '@/components/blog/NotesGarden';
import { RssSubscribeWidget } from '@/components/blog';

export const metadata = {
  title: 'Digital Garden',
  description: '연결된 지식들이 자라나는 디지털 정원입니다.',
};

export default async function NotesPage() {
  const allNotes = getAllNotes();

  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: 'var(--sng-spacing-8) var(--sng-spacing-4)',
      }}
    >
      <header
        style={{ marginBottom: 'var(--sng-spacing-8)', textAlign: 'center' }}
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            color: 'var(--sng-color-text-primary)',
            marginBottom: 'var(--sng-spacing-3)',
          }}
        >
          Digital Garden
        </h1>
        <p
          style={{
            color: 'var(--sng-color-text-secondary)',
            fontSize: 'var(--sng-font-size-lg)',
            marginBottom: 'var(--sng-spacing-3)',
          }}
        >
          개념과 영감들이 거미줄처럼 연결되어 자라나는 지식 정원
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link
            href="/notes/The-Gardener"
            className="text-sm font-medium hover:underline inline-flex items-center gap-1"
            style={{ color: 'var(--sng-color-brand-primary)' }}
          >
            <span>[[The Gardener]]: 정원사의 집필 철학 읽기</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 카테고리 뷰 및 필터링 정원 컴포넌트 */}
      <NotesGarden initialNotes={allNotes} />

      <div className="mt-16">
        <RssSubscribeWidget variant="compact" />
      </div>
    </main>
  );
}
