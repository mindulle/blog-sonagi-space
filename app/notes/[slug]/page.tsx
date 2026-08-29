import Link from 'next/link';
import { getNoteBySlug } from '@/lib/notes';
import { BacklinksSection } from '@/components/blog/BacklinksSection';
import { LocalGraph } from '@/components/blog/LocalGraph';
import { MDXContent } from '@/components/blog/MDXContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { MobileTOC } from '@/components/blog/TableOfContents/MobileTOC';
import { Badge } from '@/components/ui';
import { extractHeadings } from '@/lib/headings';
import backlinksData from '@/lib/generated/backlinks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

const surfaceCardStyle = {
  backgroundColor: 'var(--sng-color-bg-surface)',
  borderColor: 'var(--sng-color-border-default)',
  boxShadow: 'var(--sng-shadow-raised)',
};

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

  const headings = note ? extractHeadings(note.rawContent) : [];

  const backLink = (
    <Link
      href="/notes"
      className="inline-flex items-center gap-1 mb-4 text-sm"
      style={{ color: 'var(--sng-color-text-secondary)' }}
    >
      ← Notes
    </Link>
  );

  /** 데스크탑 우측 사이드바: 목차 → Graph View → 백링크 */
  const sidebar = (
    <aside className="hidden lg:block lg:col-span-4">
      <div className="sticky top-24 space-y-8">
        {headings.length > 0 && (
          <div
            className="p-4 border rounded-[var(--sng-radius-lg)]"
            style={surfaceCardStyle}
          >
            <TableOfContents headings={headings} />
          </div>
        )}

        <div>
          <h3
            className="mb-2 text-sm font-medium"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            지식 연결망
          </h3>
          <div
            className="h-64 overflow-hidden border rounded-[var(--sng-radius-lg)]"
            style={surfaceCardStyle}
          >
            <LocalGraph slug={decodedSlug} />
          </div>
        </div>

        <BacklinksSection backlinks={backlinks} />
      </div>
    </aside>
  );

  /** 모바일: 사이드바가 숨겨지므로 본문 하단에 노출 */
  const mobileExtras = (
    <div className="block lg:hidden mt-16 space-y-8">
      <div
        className="h-64 overflow-hidden border rounded-[var(--sng-radius-lg)]"
        style={surfaceCardStyle}
      >
        <LocalGraph slug={decodedSlug} />
      </div>
      <BacklinksSection backlinks={backlinks} />
    </div>
  );

  if (!note) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            <header className="mb-8">
              {backLink}
              <h1
                className="mb-3 text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                {decodedSlug}
              </h1>

              <details className="group">
                <summary
                  className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  <span className="transition-transform group-open:rotate-90">
                    ▶
                  </span>
                  문서 메타정보 보기
                </summary>
                <div
                  className="flex items-center gap-2 mt-4 p-4 border rounded-[var(--sng-radius-md)]"
                  style={{
                    backgroundColor: 'var(--sng-color-bg-surface)',
                    borderColor: 'var(--sng-color-border-subtle)',
                  }}
                >
                  <span
                    className="text-xs"
                    style={{ color: 'var(--sng-color-text-muted)' }}
                  >
                    상태
                  </span>
                  <Badge variant="pill" color="warning">
                    🌱 Seed (작성 예정)
                  </Badge>
                </div>
              </details>
            </header>

            <div
              className="p-8 mb-12 text-center border-2 border-dashed rounded-[var(--sng-radius-lg)]"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <p
                className="mb-2 text-lg"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                아직 내용이 심어지지 않은 <strong>지식의 씨앗</strong>입니다.
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--sng-color-text-muted)' }}
              >
                본문은 비어있지만, 연결망과 백링크를 통해
                <br />이 개념이 어떤 문서들과 이어져 있는지 탐색해 보세요.
              </p>
            </div>

            {mobileExtras}
          </main>

          {sidebar}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8">
          <header className="mb-10">
            {backLink}
            <h1
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              {note.title}
            </h1>

            <details className="group">
              <summary
                className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                <span className="transition-transform group-open:rotate-90">
                  ▶
                </span>
                문서 메타정보 보기
              </summary>
              <div
                className="flex flex-col gap-3 mt-4 p-4 border rounded-[var(--sng-radius-md)]"
                style={{
                  backgroundColor: 'var(--sng-color-bg-surface)',
                  borderColor: 'var(--sng-color-border-subtle)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-12 text-xs"
                    style={{ color: 'var(--sng-color-text-muted)' }}
                  >
                    상태
                  </span>
                  <Badge variant="pill" color="success">
                    🌲 Evergreen
                  </Badge>
                </div>

                {note.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span
                      className="w-12 text-xs"
                      style={{ color: 'var(--sng-color-text-muted)' }}
                    >
                      태그
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="label" color="info">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </details>
          </header>

          <MDXContent content={note.rawContent} />

          <MobileTOC headings={headings} />
          {mobileExtras}
        </main>

        {sidebar}
      </div>
    </div>
  );
}
