import Link from 'next/link';
import { getNoteBySlug } from '@/lib/notes';
import { BacklinksSection } from '@/components/blog/BacklinksSection';
import { LocalGraph } from '@/components/blog/LocalGraph';
import { PostContent } from '@/components/blog/PostContent';
import backlinksData from '@/lib/generated/backlinks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Return an empty array to build all pages on demand (ISR)
  // This prevents Out of Memory (OOM) errors during build when there are thousands of notes.
  return [];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  let decodedSlug = slug;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // 무시 (디코딩 실패 시 원본 사용)
  }
  const note = getNoteBySlug(decodedSlug);

  if (!note) {
    return {
      title: `${decodedSlug} - 🌱 Seed`,
      description: '아직 내용이 심어지지 않은 지식의 씨앗(작성 예정)입니다.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  let decodedSlug = slug;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // 무시 (디코딩 실패 시 원본 사용)
  }

  const note = getNoteBySlug(decodedSlug);

  const backlinks =
    (
      backlinksData as Record<
        string,
        Array<{ sourceSlug: string; sourceTitle: string; excerpt: string }>
      >
    )[decodedSlug] ?? [];

  // 방안 C: 미작성된 문서(Seed) 플레이스홀더 렌더링
  if (!note) {
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
            <span
              style={{
                fontSize: 'var(--text-xs)',
                padding: '2px 8px',
                border: '1px solid var(--sng-color-border-default)',
                borderRadius: 'var(--sng-radius-sm)',
                color: 'var(--sng-color-text-muted)',
              }}
            >
              🌱 Seed (작성 예정)
            </span>
          </div>
        </header>

        {/* 씨앗 페이지 본문 안내 */}
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

        {/* 로컬 그래프 (디지털 가든) */}
        <LocalGraph slug={decodedSlug} />

        {/* 백링크 */}
        <BacklinksSection backlinks={backlinks} />
      </main>
    );
  }

  // 작성된 정상 노트 렌더링
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
              <span
                key={tag}
                style={{
                  fontSize: 'var(--text-xs)',
                  padding: '2px 8px',
                  border: '1px solid var(--sng-color-border-default)',
                  borderRadius: 'var(--sng-radius-sm)',
                  color: 'var(--sng-color-text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 본문 */}
      <PostContent html={note.content} className="prose" />

      {/* 로컬 그래프 (디지털 가든) */}
      <LocalGraph slug={decodedSlug} />

      {/* 백링크 */}
      <BacklinksSection backlinks={backlinks} />
    </main>
  );
}
