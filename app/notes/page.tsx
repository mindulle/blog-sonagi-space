import fs from 'fs';
import path from 'path';
import { getAllNotes } from '@/lib/notes';
import { NoteCard } from '@/components/blog/NoteCard';
import { WikiGraph } from '@/components/blog/WikiGraph';

export const metadata = {
  title: 'Digital Garden',
  description: '연결된 지식들이 자라나는 디지털 정원입니다.',
};

export default function NotesPage() {
  // OOM 방지 및 렌더링 최적화를 위해 최신 50개의 노트만 잘라서 가져옵니다.
  const notes = getAllNotes().slice(0, 50);

  // 그래프 데이터 로드
  const graphDataPath = path.join(process.cwd(), 'public', 'wiki-graph.json');
  let graphData = { nodes: [], links: [] };
  try {
    const fileContent = fs.readFileSync(graphDataPath, 'utf8');
    graphData = JSON.parse(fileContent);
  } catch (error) {
    console.error('Failed to load wiki-graph.json:', error);
  }

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
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Digital Garden
        </h1>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-lg)',
          }}
        >
          개념과 영감들이 거미줄처럼 연결되어 자라나는 지식 정원
        </p>
      </header>

      {/* 지식 그래프 뷰 */}
      <section style={{ marginBottom: 'var(--space-12)' }}>
        <div
          id="graph-container"
          style={{
            width: '100%',
            height: '600px',
            border: '1px solid var(--color-border-default)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-subtle)',
          }}
        >
          {graphData.nodes.length > 0 && (
            <WikiGraph data={graphData} height={600} />
          )}
        </div>
      </section>

      {/* 최근 노트 목록 */}
      <section style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: '600',
            marginBottom: 'var(--space-6)',
            color: 'var(--color-text-primary)',
          }}
        >
          최근 기록된 씨앗들
        </h2>
        {notes.length === 0 ? (
          <p style={{ color: 'var(--color-text-secondary)' }}>
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
