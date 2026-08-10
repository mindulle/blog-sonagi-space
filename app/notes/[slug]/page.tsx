import Link from 'next/link';
import { getNoteBySlug } from '@/lib/notes';
import { BacklinksSection } from '@/components/blog/BacklinksSection';
import { LocalGraph } from '@/components/blog/LocalGraph';
import { MDXContent } from '@/components/blog/MDXContent';
import backlinksData from '@/lib/generated/backlinks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  let decodedSlug = slug;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // 무시
  }
  const note = getNoteBySlug(decodedSlug);

  if (!note) {
    return {
      title: `${decodedSlug} - 🌱 Seed`,
      description: '아직 내용이 심어지지 않은 지식의 씨앗(작성 예정)입니다.',
      robots: { index: false, follow: false },
    };
  }

  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  let decodedSlug = slug;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // 무시
  }

  const note = getNoteBySlug(decodedSlug);
  const backlinks =
    (
      backlinksData as Record<
        string,
        { sourceSlug: string; sourceTitle: string; excerpt: string }[]
      >
    )[decodedSlug] ?? [];

  if (!note) {
    return (
      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: 'var(--space-8) var(--space-4)',
        }}
      >
        <header style={{ marginBottom: 'var(--space-8)' }}>
          <Link
            href="/notes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-1)',
              fontSize: 'var(--text-sm)',
              color: 'var(--sng-color-text-secondary)',
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
              color: 'var(--sng-color-text-primary)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {decodedSlug}
          </h1>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <span className="sng-badge sng-badge--warning">
              🌱 Seed (작성 예정)
            </span>
          </div>
        </header>

        <div
          style={{
            backgroundColor: 'var(--sng-color-bg-subtle)',
            border: '2px dashed var(--sng-color-border-default)',
            borderRadius: 'var(--sng-radius-lg)',
            padding: 'var(--space-8) var(--space-4)',
            textAlign: 'center',
            marginBottom: 'var(--space-12)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--sng-color-text-secondary)',
              margin: '0 0 var(--space-2) 0',
            }}
          >
            아직 내용이 심어지지 않은 <strong>지식의 씨앗</strong>입니다.
          </p>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--sng-color-text-muted)',
              margin: 0,
            }}
          >
            본문은 비어있지만, 하단의 로컬 그래프나 백링크를 통해
            <br />이 개념이 어떤 문서들과 연결되어 있는지 탐색해 보세요!
          </p>
        </div>

        <LocalGraph slug={decodedSlug} />
        <BacklinksSection backlinks={backlinks} />
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-4)',
      }}
    >
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <Link
          href="/notes"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            fontSize: 'var(--text-sm)',
            color: 'var(--sng-color-text-secondary)',
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
            color: 'var(--sng-color-text-primary)',
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
              <span key={tag} className="sng-badge sng-badge--info">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <MDXContent content={note.rawContent} />

      <LocalGraph slug={decodedSlug} />
      <BacklinksSection backlinks={backlinks} />
    </main>
  );
}
