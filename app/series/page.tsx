import { getAllSeries } from '@/lib/series';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { Card } from '@/components/ui';

export const metadata = {
  title: 'Series',
  description: '주제별로 엮은 연재물들을 모아봅니다.',
};

export default function SeriesIndexPage() {
  const seriesList = getAllSeries();

  return (
    <Container className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            Series
          </h1>
          <p
            className="text-lg"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            하나의 주제로 길게 이어지는 생각의 흐름들을 모아봅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {seriesList.map((s) => {
            // Encode the series name for the URL URL
            const seriesUrl = `/series/${encodeURIComponent(s.series)}`;

            return (
              <Link href={seriesUrl} key={s.series} className="group block">
                <Card
                  className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    backgroundColor: 'var(--sng-color-bg-surface)',
                    borderColor: 'var(--sng-color-border-default)',
                  }}
                >
                  {/* 커버 이미지 영역 (Netflix Style) */}
                  <div
                    className="relative w-full aspect-video p-6 flex flex-col justify-end"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--sng-color-bg-overlay), var(--sng-color-bg-elevated))',
                      borderBottom: '1px solid var(--sng-color-border-subtle)',
                    }}
                  >
                    {/* 상단 뱃지 (총 N편) */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md"
                      style={{
                        backgroundColor:
                          'color-mix(in srgb, var(--sng-color-bg-surface) 80%, transparent)',
                        color: 'var(--sng-color-text-primary)',
                        border: '1px solid var(--sng-color-border-subtle)',
                      }}
                    >
                      총 {s.total}편
                    </div>

                    <h2
                      className="text-2xl font-extrabold leading-snug drop-shadow-sm transition-colors group-hover:text-[var(--sng-color-brand-primary)]"
                      style={{ color: 'var(--sng-color-text-primary)' }}
                    >
                      {s.series}
                    </h2>
                  </div>

                  {/* 하단 설명 영역 */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p
                      className="text-sm line-clamp-3 mb-4"
                      style={{ color: 'var(--sng-color-text-secondary)' }}
                    >
                      {/* TODO: 나중에 요약문을 추가할 수 있습니다. */}이
                      시리즈는 총 {s.total}개의 파트로 구성되어 있습니다.
                      클릭하여 1편부터 차례대로 정주행해 보세요.
                    </p>
                    <div
                      className="text-sm font-semibold flex items-center gap-2 transition-opacity opacity-70 group-hover:opacity-100"
                      style={{ color: 'var(--sng-color-brand-primary)' }}
                    >
                      정주행 시작하기 <span>→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
