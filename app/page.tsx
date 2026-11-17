import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import {
  DropCap,
  EndMark,
  GazetteMasthead,
  HairlineRule,
} from '@/components/editorial';
import { getAllNotes } from '@/lib/notes';

function DandelionSpotIllustration() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="민들레 홀씨 1도 펜 선화 스팟 삽화"
      className="w-32 h-32 md:w-36 md:h-36 mx-auto select-none"
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
  const allNotes = getAllNotes().filter((n) => n.published);
  const leadNote = allNotes[0];
  const subNotes = allNotes.slice(1, 3);
  const sideNotes = allNotes.slice(3, 6);
  const archiveNotes = allNotes.slice(6, 11);

  const leadDate = (leadNote?.publishedDate || leadNote?.created || '').slice(
    0,
    10
  );

  return (
    <>
      {/* Broadsheet Front Page: GazetteMasthead + 65:35 Asymmetric Front Page */}
      <section
        className="pt-4 pb-10 md:pt-6 md:pb-12"
        style={{ backgroundColor: 'var(--mds-color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <GazetteMasthead vol="VOL. 01" issue="FRONT PAGE" />

            {leadNote ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pt-8 pb-6">
                {/* Left 2/3 (8 cols): Lead Story + 2-Column Sub-Dispatches */}
                <div className="lg:col-span-8 lg:pr-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase mb-3">
                      <span
                        className="font-bold"
                        style={{ color: 'var(--mds-color-brand-primary)' }}
                      >
                        LEAD DISPATCH
                      </span>
                      {leadDate && (
                        <span
                          style={{ color: 'var(--mds-color-text-secondary)' }}
                        >
                          • {leadDate}
                        </span>
                      )}
                    </div>

                    <Link href={`/notes/${leadNote.slug}`} className="group block">
                      <h2
                        className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold tracking-tight leading-[1.18] keep-all group-hover:underline"
                        style={{ color: 'var(--mds-color-text-primary)' }}
                      >
                        {leadNote.title}
                      </h2>
                    </Link>

                    {leadNote.excerpt && (
                      <div className="mt-5 text-base sm:text-[17px] leading-[1.75] font-serif keep-all">
                        <DropCap letter={leadNote.excerpt.charAt(0)} className="mr-3" />
                        <p
                          style={{ color: 'var(--mds-color-text-secondary)' }}
                        >
                          {leadNote.excerpt.slice(1)}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <Link
                        href={`/notes/${leadNote.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-serif font-bold hover:underline"
                        style={{ color: 'var(--mds-color-brand-primary)' }}
                      >
                        <span>기사 전문 읽기</span>
                        <ArrowRight size={15} />
                      </Link>
                      <Link
                        href="/about"
                        className="text-xs font-mono uppercase tracking-wider hover:underline"
                        style={{ color: 'var(--mds-color-text-secondary)' }}
                      >
                        정원 소개 →
                      </Link>
                    </div>
                  </div>

                  {/* Secondary 2-Column Sub-Dispatches */}
                  {subNotes.length > 0 && (
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t"
                      style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                    >
                      {subNotes.map((note) => {
                        const d = (
                          note.publishedDate ||
                          note.created ||
                          ''
                        ).slice(0, 10);
                        return (
                          <Link
                            key={note.slug}
                            href={`/notes/${note.slug}`}
                            className="group block"
                          >
                            <div
                              className="font-mono text-[10px] tracking-[0.16em] uppercase mb-1.5"
                              style={{
                                color: 'var(--mds-color-text-secondary)',
                              }}
                            >
                              {d || 'DISPATCH'}
                              {note.status ? ` • ${note.status}` : ''}
                            </div>
                            <h3
                              className="text-lg font-serif font-bold leading-snug keep-all group-hover:underline"
                              style={{
                                color: 'var(--mds-color-text-primary)',
                              }}
                            >
                              {note.title}
                            </h3>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right 1/3 (4 cols): Garden Notes Side Column + Spot Illustration */}
                <aside
                  className="lg:col-span-4 lg:pl-8 lg:border-l flex flex-col justify-between gap-8"
                  style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                >
                  <div>
                    <div
                      className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase pb-3 border-b"
                      style={{
                        color: 'var(--mds-color-brand-primary)',
                        borderColor: 'var(--mds-color-border-subtle)',
                      }}
                    >
                      GARDEN NOTES • 단신
                    </div>

                    <div
                      className="divide-y"
                      style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                    >
                      {sideNotes.map((note) => {
                        const d = (
                          note.publishedDate ||
                          note.created ||
                          ''
                        ).slice(0, 10);
                        return (
                          <Link
                            key={note.slug}
                            href={`/notes/${note.slug}`}
                            className="group block py-4"
                            style={{
                              borderColor: 'var(--mds-color-border-subtle)',
                            }}
                          >
                            <div
                              className="font-mono text-[10px] tracking-[0.14em] uppercase mb-1"
                              style={{
                                color: 'var(--mds-color-text-secondary)',
                              }}
                            >
                              {d || 'SEED'}
                              {note.status ? ` • ${note.status}` : ''}
                            </div>
                            <h3
                              className="text-base font-serif font-bold leading-snug keep-all group-hover:underline"
                              style={{
                                color: 'var(--mds-color-text-primary)',
                              }}
                            >
                              {note.title}
                            </h3>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className="pt-4 border-t flex flex-col items-center justify-center"
                    style={{ borderColor: 'var(--mds-color-border-subtle)' }}
                  >
                    <DandelionSpotIllustration />
                    <span
                      className="mt-2 text-[10px] font-mono tracking-[0.22em] uppercase"
                      style={{ color: 'var(--mds-color-text-secondary)' }}
                    >
                      FIG. 01 — SEED DISPERSAL
                    </span>
                  </div>
                </aside>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-5xl mx-auto">
          <HairlineRule thick />
        </div>
      </Container>

      {/* Archive Index List */}
      <section
        className="py-10 md:py-14"
        style={{ backgroundColor: 'var(--mds-color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span
                  className="text-xs font-mono font-bold tracking-[0.18em] uppercase"
                  style={{ color: 'var(--mds-color-brand-primary)' }}
                >
                  ARCHIVE &amp; BACK ISSUES
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mt-1"
                  style={{ color: 'var(--mds-color-text-primary)' }}
                >
                  지난 지면과 정원 기록
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase hover:underline"
                style={{ color: 'var(--mds-color-text-primary)' }}
              >
                <span>ALL DISPATCHES</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {archiveNotes.length > 0 && (
              <div
                className="border-t"
                style={{ borderColor: 'var(--mds-color-border-subtle)' }}
              >
                {archiveNotes.map((note) => {
                  const dateLabel = (
                    note.publishedDate ||
                    note.created ||
                    ''
                  ).slice(0, 10);

                  return (
                    <Link
                      key={note.slug}
                      href={`/notes/${note.slug}`}
                      className="group block border-b py-5 transition-colors"
                      style={{
                        borderColor: 'var(--mds-color-border-subtle)',
                      }}
                    >
                      <div className="grid md:grid-cols-12 gap-2 md:gap-6 items-baseline">
                        <div className="md:col-span-3 flex items-center gap-3 font-mono text-xs">
                          <span
                            style={{ color: 'var(--mds-color-text-secondary)' }}
                          >
                            {dateLabel || 'UNDATED'}
                          </span>
                          {note.category && (
                            <span
                              className="uppercase tracking-wider"
                              style={{
                                color: 'var(--mds-color-text-secondary)',
                              }}
                            >
                              {note.category}
                            </span>
                          )}
                        </div>

                        <div className="md:col-span-8">
                          <h3
                            className="font-serif font-bold tracking-tight keep-all group-hover:underline text-lg sm:text-xl"
                            style={{ color: 'var(--mds-color-text-primary)' }}
                          >
                            {note.title}
                          </h3>
                        </div>

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
            )}

            <div className="mt-12 flex items-center gap-4">
              <HairlineRule className="flex-1 my-0" />
              <EndMark className="ml-0" />
              <HairlineRule className="flex-1 my-0" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
