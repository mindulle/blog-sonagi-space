import { getAllSeries } from '@/lib/series';
import { Container } from '@/components/ui/Container';
import { HairlineRule } from '@/components/editorial';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: '연재 기획 • Series',
  description: '하나의 주제로 깊고 길게 이어지는 사유의 연작들을 모아봅니다.',
};

export default function SeriesIndexPage() {
  const seriesList = getAllSeries();

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
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

          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest text-[var(--mds-color-text-secondary)] mb-3">
            <span className="font-semibold text-[var(--mds-color-brand-primary)]">
              SPECIAL ISSUES • INDEX
            </span>
            <span className="tabular-nums">TOTAL {seriesList.length} SERIES</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 text-[var(--mds-color-text-primary)]"
            style={{ fontFamily: 'var(--font-cinematic, serif)' }}
          >
            연재 기획 (Series)
          </h1>
          <p className="text-sm sm:text-base max-w-2xl leading-relaxed text-[var(--mds-color-text-secondary)]">
            하나의 주제로 깊고 길게 이어지는 사유와 엔지니어링의 연작들을 신문 특집호 색인처럼 모아봅니다.
          </p>

          <HairlineRule className="mt-6" />
        </header>

        {seriesList.length === 0 ? (
          <p className="py-12 text-center font-mono text-sm text-[var(--mds-color-text-muted)]">
            등록된 연재 기획이 없습니다.
          </p>
        ) : (
          <div
            className="divide-y border-b"
            style={{
              borderColor: 'var(--mds-color-border-default)',
            }}
          >
            {seriesList.map((s, idx) => {
              const seriesUrl = `/series/${encodeURIComponent(s.series)}`;
              const issueNo = String(idx + 1).padStart(2, '0');

              return (
                <Link
                  href={seriesUrl}
                  key={s.series}
                  className="group block py-6 transition-colors hover:bg-[var(--mds-color-bg-surface)] px-2 sm:px-4 -mx-2 sm:-mx-4"
                  style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-8">
                    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[var(--mds-color-text-muted)]">
                        <span className="font-semibold text-[var(--mds-color-brand-primary)] tabular-nums">
                          ISSUE {issueNo}
                        </span>
                        <span aria-hidden="true">•</span>
                        <span className="tabular-nums">총 {s.total}편</span>
                      </div>

                      <h2
                        className="text-xl sm:text-2xl font-bold tracking-tight transition-colors text-[var(--mds-color-text-primary)] group-hover:text-[var(--mds-color-brand-primary)]"
                        style={{ fontFamily: 'var(--font-cinematic, serif)' }}
                      >
                        {s.series}
                      </h2>

                      <p className="text-sm leading-relaxed text-[var(--mds-color-text-secondary)] line-clamp-2">
                        총 {s.total}개의 파트로 구성된 연재 기획입니다. 1편부터 차례대로 읽어보세요.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider shrink-0 text-[var(--mds-color-text-secondary)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors">
                      <span>Read Series</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
