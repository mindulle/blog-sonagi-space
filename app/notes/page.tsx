import { getAllNotes } from '@/lib/notes';
import { NoteCard } from '@/components/blog/NoteCard';

export const metadata = {
  title: 'Digital Garden',
  description: '연결된 지식들이 자라나는 디지털 정원입니다.',
};

export default async function NotesPage() {
  // OOM 방지 및 렌더링 최적화를 위해 최신 50개의 노트만 잘라서 가져옵니다.
  const notes = getAllNotes().slice(0, 50);

  return (
    <main
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-4)',
      }}
    >
      <header style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            color: 'var(--sng-color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Digital Garden
        </h1>
        <p
          style={{
            color: 'var(--sng-color-text-secondary)',
            fontSize: 'var(--text-lg)',
          }}
        >
          개념과 영감들이 거미줄처럼 연결되어 자라나는 지식 정원
        </p>
      </header>

      {/* 최근 노트 목록 */}
      <section style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: '600',
            marginBottom: 'var(--space-6)',
            color: 'var(--sng-color-text-primary)',
          }}
        >
          최근 기록된 씨앗들
        </h2>
        {notes.length === 0 ? (
          <p style={{ color: 'var(--sng-color-text-secondary)' }}>
            아직 노트가 없어요.
          </p>
        ) : (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            {notes.map((note) => (
              <li key={note.slug}>
                <NoteCard note={note} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
