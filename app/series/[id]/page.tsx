import { getAllSeries } from '@/lib/series';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { PostPreviewCard } from '@/components/blog/PostPreviewCard';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const seriesList = getAllSeries();
  return seriesList.map((s) => ({
    id: s.series, // Next.js automatically encodes/decodes URI components
  }));
}

export default async function SeriesDetailPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const seriesList = getAllSeries();
  const seriesData = seriesList.find((s) => s.series === decodedId);

  if (!seriesData) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">시리즈를 찾을 수 없습니다.</h1>
        <Link href="/series">
          <Button variant="secondary">목록으로 돌아가기</Button>
        </Link>
      </Container>
    );
  }

  // entries are already sorted by seriesOrder in lib/series.ts
  const { series, total, entries } = seriesData;
  const firstPostUrl = entries.length > 0 ? `/notes/${entries[0].slug}` : '#';

  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* 시리즈 헤더 */}
        <div
          className="mb-16 p-8 md:p-12 rounded-[var(--sng-radius-2xl)]"
          style={{
            background:
              'linear-gradient(135deg, var(--sng-color-bg-overlay), var(--sng-color-bg-elevated))',
            border: '1px solid var(--sng-color-border-subtle)',
          }}
        >
          <div
            className="text-sm font-bold tracking-widest mb-4 uppercase"
            style={{ color: 'var(--sng-color-brand-primary)' }}
          >
            Series
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            {series}
          </h1>
          <p
            className="text-lg md:text-xl mb-8"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            총 {total}편으로 이루어진 연재물입니다. 아래 목록에서 1편부터
            차례대로 정주행할 수 있습니다.
          </p>

          <Link href={firstPostUrl}>
            <Button
              size="lg"
              className="bg-[var(--sng-color-brand-primary)] text-white font-bold px-8"
            >
              1편부터 정주행 시작하기 ▶
            </Button>
          </Link>
        </div>

        {/* 에피소드 리스트 */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            에피소드 목록
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {entries.map((entry, idx) => (
              <Link
                key={entry.slug}
                href={`/notes/${entry.slug}`}
                className="group flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-[var(--sng-radius-xl)] transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--sng-color-bg-surface)',
                  border: '1px solid var(--sng-color-border-default)',
                }}
              >
                {/* 썸네일 (번호 표시) */}
                <div
                  className="w-full md:w-32 aspect-video md:aspect-square flex-shrink-0 flex items-center justify-center rounded-[var(--sng-radius-lg)] text-3xl font-extrabold"
                  style={{
                    backgroundColor: 'var(--sng-color-bg-overlay)',
                    color: 'var(--sng-color-text-muted)',
                    border: '1px solid var(--sng-color-border-subtle)',
                  }}
                >
                  {idx + 1}
                </div>

                {/* 텍스트 영역 */}
                <div className="flex flex-col justify-center">
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'var(--sng-color-brand-primary)' }}
                  >
                    EPISODE {idx + 1}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 group-hover:underline"
                    style={{ color: 'var(--sng-color-text-primary)' }}
                  >
                    {entry.title}
                  </h3>
                  {/* excerpt 데이터를 가져오려면 lib/series.ts 업데이트가 필요하지만 일단 생략 */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
