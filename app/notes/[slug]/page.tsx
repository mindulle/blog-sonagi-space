import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNoteBySlug } from '@/lib/notes';
import { BacklinksSection } from '@/components/blog/BacklinksSection';
import { LocalGraph } from '@/components/blog/LocalGraph';
import backlinksData from '@/lib/generated/backlinks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // ISR (On-demand Rendering): 빌드 타임에는 빈 배열을 반환하여
  // 2만 개의 노트를 한 번에 빌드하지 않고 사용자가 접속할 때 생성하도록 합니다.
  return [];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) notFound();

  const backlinks =
    (
      backlinksData as Record<
        string,
        Array<{ sourceSlug: string; sourceTitle: string; excerpt: string }>
      >
    )[slug] ?? [];

  return (
    <main
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-4)',
      }}
    >
      {/* 헤더 */}
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Link
          href="/notes"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            marginBottom: 'var(--space-4)',
          }}
        >
          ← Notes
        </Link>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: '700',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {note.title}
        </h1>

        {note.tags.length > 0 && (
          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}
          >
            {note.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 'var(--text-xs)',
                  padding: '2px 8px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 본문 */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />

      {/* 로컬 그래프 (디지털 가든) */}
      <LocalGraph slug={slug} />

      {/* 백링크 */}
      <BacklinksSection backlinks={backlinks} />
    </main>
  );
}
