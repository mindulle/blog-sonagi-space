import { getAllSeries } from '@/lib/series';
import { Container } from '@/components/ui/Container';
import { HairlineRule } from '@/components/editorial';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const seriesList = getAllSeries();
  return seriesList.map((s) => ({
    id: s.series,
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
        <h1
          className="text-3xl font-bold mb-6"
          style={{
            color: 'var(--mds-color-text-primary)',
            fontFamily: 'var(--font-cinematic, serif)',
          }}
        >
          시리즈를 찾을 수 없습니다.
        </h1>
        <Link
          href="/series"
          className="inline-flex items-center gap-2 px-4 py-2 border font-mono text-xs uppercase tracking-wider transition-colors hover:bg-[var(--mds-color-bg-surface)]"
          style={{
            borderColor: 'var(--mds-color-border-default)',
            color: 'var(--mds-color-text-primary)',
          }}
        >
          ← 목록으로 돌아가기
        </Link>
      </Container>
    );
  }

  const { series, total, entries } = seriesData;
  const firstPostUrl = entries.length > 0 ? `/notes/${entries[0].slug}` : '#';

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* 시리즈 헤더 */}
        <header className="mb-10">
          <div className="flex flex-col gap-[3px] mb-5" aria-hidden="true">
            <div
              className="w-full h-[2px]"
              style={{ backgroundColor: 'var(--mds-color-text-primary)' }}
            />
            <div
              className="w-full h-[1px]"
              style={{ backgroundColor: 'var(--mds-color-border-default)' }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest text-[var(--mds-color-text-secondary)] mb-4">
            <Link
              href="/series"
              className="hover:text-[var(--mds-color-brand-primary)] transition-colors"
            >
              ← SERIES
            </Link>
            <span className="font-semibold text-[var(--mds-color-brand-primary)] tabular-nums">
              SPECIAL ISSUE • TOTAL {total} EPISODES
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 text-[var(--mds-color-text-primary)] break-keep"
            style={{ fontFamily: 'var(--font-cinematic, serif)' }}
          >
            {series}
          </h1>
          <p className="text-sm sm:text-base max-w-2xl leading-relaxed text-[var(--mds-color-text-secondary)] mb-6">
            총 {total}편으로 이루어진 연재물입니다. 아래 목록에서 1편부터 차례대로 정주행할 수 있습니다.
          </p>

          <Link
            href={firstPostUrl}
            className="inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--mds-color-text-primary)',
              color: 'var(--mds-color-text-inverse)',
            }}
          >
            <span>1편부터 정주행 시작하기</span>
            <ArrowRight size={14} />
          </Link>

          <HairlineRule className="mt-8" />
        </header>

        {/* 에피소드 리스트 (1px 헤어라인 색인형) */}
        <section aria-label="에피소드 목록">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--mds-color-text-muted)] mb-2">
            EPISODES • 에피소드 목록
          </div>

          <div
            className="divide-y border-b"
            style={{ borderColor: 'var(--mds-color-border-default)' }}
          >
            {entries.map((entry, idx) => (
              <Link
                key={entry.slug}
                href={`/notes/${entry.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 py-5 transition-colors hover:bg-[var(--mds-color-bg-surface)] px-2 -mx-2"
                style={{ borderColor: 'var(--mds-color-border-subtle)' }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-xs font-bold tabular-nums shrink-0"
                    style={{ color: 'var(--mds-color-brand-primary)' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--mds-color-text-primary)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors break-keep">
                    {entry.title}
                  </h2>
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--mds-color-text-muted)] group-hover:text-[var(--mds-color-brand-primary)] shrink-0 pl-8 sm:pl-0">
                  <span>READ</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
