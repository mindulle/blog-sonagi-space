import { getAllNotes } from '@/lib/notes';
import { NoteCard } from '@/components/blog/NoteCard';

export const metadata = {
  title: 'Notes',
  description: '공부하면서 쌓아온 개념 정의와 토막글 모음.',
};

export default function NotesPage() {
  // OOM 방지 및 렌더링 최적화를 위해 최신 50개의 노트만 잘라서 가져옵니다.
  const notes = getAllNotes().slice(0, 50);

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      <header style={{ marginBottom: 'var(--space-10)' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Notes
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-lg)' }}>
          공부하면서 쌓아온 개념 정의와 토막글 모음.
        </p>
      </header>

      {notes.length === 0 ? (
        <p style={{ color: 'var(--color-text-secondary)' }}>아직 노트가 없어요.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {notes.map((note) => (
            <li key={note.slug}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
