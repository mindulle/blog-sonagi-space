import { Button } from '@mindulle/ui';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EndMark, HairlineRule } from '@/components/editorial';
import { getAllNotes } from '@/lib/notes';

function DandelionSpotIllustration() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="민들레 홀씨 1도 펜 선화 스팟 삽화"
      className="w-44 h-44 md:w-56 md:h-56 mx-auto select-none"
    >
      <path
        d="M112 222 C112 184, 114 152, 118 118"
        stroke="var(--mds-color-text-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="118"
        cy="112"
        r="5"
        fill="var(--mds-color-bg-base)"
        stroke="var(--mds-color-text-primary)"
        strokeWidth="2"
      />
      {[
        [118, 112, 74, 72],
        [118, 112, 92, 54],
        [118, 112, 118, 46],
        [118, 112, 144, 54],
        [118, 112, 162, 74],
        [118, 112, 166, 102],
        [118, 112, 156, 130],
        [118, 112, 82, 138],
        [118, 112, 68, 106],
      ].map(([x1, y1, x2, y2], idx) => (
        <g key={idx}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--mds-color-text-primary)"
            strokeWidth="1.25"
            strokeOpacity="0.85"
          />
          <path
            d={`M${x2 - 6} ${y2 - 5} Q${x2} ${y2 + 2} ${x2 + 6} ${y2 - 5}`}
            stroke="var(--mds-color-text-primary)"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ))}
      <g transform="translate(178, 42) rotate(22)">
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="20"
          stroke="var(--mds-color-brand-primary)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M-8 -5 Q0 2 8 -5"
          stroke="var(--mds-color-brand-primary)"
          strokeWidth="1.75"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="0"
          cy="23"
          rx="2.5"
          ry="4.5"
          fill="var(--mds-color-brand-primary)"
        />
      </g>
    </svg>
  );
}

export default function Home() {
  const recentNotes = getAllNotes().slice(0, 5);

  return (
    <>
      {/* Hero Section: MDS 표면 톤 계층 + 인쇄 판권 바 + 15% 민들레 스팟 */}
      <section
        className="relative pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden"
        style={{
          background:
            'linear-gradient(to bottom, var(--mds-color-bg-overlay), var(--mds-color-bg-base))',
        }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* 인쇄 판권 바 (1px 헤어라인) */}
            <div
              className="flex flex-wrap items-center justify-between gap-2 py-2.5 mb-10 border-y font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{
                borderColor: 'var(--mds-color-border-subtle)',
                color: 'var(--mds-color-text-secondary)',
              }}
            >
              <span>VOL. 01 — MINDULLE GARDEN</span>
              <span style={{ color: 'var(--mds-color-brand-primary)' }}>
                THINKING IN PUBLIC • EST. 2026
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-8 text-left">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif tracking-tight leading-[1.12] keep-all"
                  style={{ color: 'var(--mds-color-text-primary)' }}
                >
                  돌 틈에 뿌리내린 사유,
                  <br />
                  가볍게 비상하는 기록
                </h1>

                <p
                  className="text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-sans keep-all"
                  style={{ color: 'var(--mds-color-text-secondary)' }}
                >
                  완결주의를 거부하고, 생각의 씨앗(Seed)부터 세상과 나누며
                  키워나가는 메이커의 열린 사유(Thinking in Public)이자 담백한
                  지면입니다.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link href="/notes">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-7"
                    >
                      <span>정원 둘러보기</span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto px-7"
                    >
                      <span>정원 이야기 읽기</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center">
                <DandelionSpotIllustration />
                <span
                  className="mt-2 text-[10px] font-mono tracking-[0.22em] uppercase"
                  style={{ color: 'var(--mds-color-text-secondary)' }}
                >
                  FIG. 01 — SEED DISPERSAL
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-5xl mx-auto">
          <HairlineRule thick />
        </div>
      </Container>

      {/* Recently Cultivated Garden Notes: 1px 헤어라인 목록형 */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: 'var(--mds-color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span
                  className="text-xs font-mono font-bold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--mds-color-brand-primary)' }}
                >
                  RECENT DISPATCHES &amp; NOTES
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold font-sans tracking-tight mt-1"
                  style={{ color: 'var(--mds-color-text-primary)' }}
                >
                  최근 가꾼 정원의 기록들
                </h2>
              </div>
              <Link
                href="/notes"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase hover:underline"
                style={{ color: 'var(--mds-color-text-primary)' }}
              >
                <span>ALL NOTES</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {recentNotes.length > 0 ? (
              <div
                className="border-t"
                style={{ borderColor: 'var(--mds-color-border-subtle)' }}
              >
                {recentNotes.map((note, idx) => {
                  const dateLabel = (
                    note.publishedDate ||
                    note.created ||
                    ''
                  ).slice(0, 10);
                  const isLead = idx === 0;

                  return (
                    <Link
                      key={note.slug}
                      href={`/notes/${note.slug}`}
                      className="group block border-b py-6 md:py-7 transition-colors"
                      style={{
                        borderColor: 'var(--mds-color-border-subtle)',
                        backgroundColor: isLead
                          ? 'var(--mds-color-bg-surface)'
                          : 'transparent',
                      }}
                    >
                      <div
                        className={`grid md:grid-cols-12 gap-3 md:gap-6 items-baseline ${
                          isLead ? 'border-l-2 pl-4 md:pl-5' : ''
                        }`}
                        style={
                          isLead
                            ? { borderColor: 'var(--mds-color-brand-primary)' }
                            : undefined
                        }
                      >
                        {/* 메타 (날짜 · 루브릭/카테고리) */}
                        <div className="md:col-span-3 flex items-center gap-3 font-mono text-xs">
                          <span
                            style={{ color: 'var(--mds-color-text-secondary)' }}
                          >
                            {dateLabel || 'UNDATED'}
                          </span>
                          {isLead ? (
                            <span
                              className="text-[10px] font-bold tracking-[0.18em] uppercase"
                              style={{ color: 'var(--mds-color-brand-primary)' }}
                            >
                              • LEAD
                            </span>
                          ) : note.category ? (
                            <span
                              className="uppercase tracking-wider"
                              style={{ color: 'var(--mds-color-text-secondary)' }}
                            >
                              {note.category}
                            </span>
                          ) : null}
                        </div>

                        {/* 제목 + 요약 */}
                        <div className="md:col-span-8">
                          <h3
                            className={`font-sans font-bold tracking-tight keep-all group-hover:underline ${
                              isLead
                                ? 'text-xl sm:text-2xl'
                                : 'text-lg sm:text-xl'
                            }`}
                            style={{ color: 'var(--mds-color-text-primary)' }}
                          >
                            {note.title}
                          </h3>
                          {note.excerpt && (
                            <p
                              className={`mt-2 text-sm sm:text-base leading-relaxed font-sans keep-all ${
                                isLead ? 'line-clamp-2' : 'line-clamp-1'
                              }`}
                              style={{
                                color: 'var(--mds-color-text-secondary)',
                              }}
                            >
                              {note.excerpt}
                            </p>
                          )}
                        </div>

                        {/* 우측 화살표 */}
                        <div className="hidden md:flex md:col-span-1 justify-end pr-2">
                          <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ color: 'var(--mds-color-text-secondary)' }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p
                className="text-center text-sm"
                style={{ color: 'var(--mds-color-text-secondary)' }}
              >
                아직 심어진 씨앗이 없습니다. 곧 첫 글이 자라날 예정이에요.
              </p>
            )}

            <div className="mt-12">
              <EndMark />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
