import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Rss,
  Github,
  Code2,
  Layers,
  BookOpen,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import {
  GazetteMasthead,
  HairlineRule,
  DropCap,
  EndMark,
  EditorialColumn,
} from '@/components/editorial';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '민들레 정원 이야기 • About Mindulle Garden',
  description:
    '민들레 정원(Mindulle Garden)의 기록. 척박한 바위 틈에서도 단단히 뿌리내리는 야생 민들레처럼, 활판 인쇄의 담백한 지면 위에 메이커의 사유와 도구들을 기록합니다.',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-10 md:py-16 select-text">
      <Container className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ─── 신문 브로드시트 대장 (The Broadsheet Folio) ─── */}
        <article
          className="relative rounded-[4px] p-6 sm:p-10 md:p-14 border bg-[var(--mds-color-bg-surface)] border-[var(--mds-color-border-default)] shadow-sm"
          style={{
            borderWidth: '2px',
          }}
        >
          {/* 1. 상단 신문 마스트헤드 */}
          <GazetteMasthead vol="VOL. 01" issue="EDITORIAL NO. 01" />

          {/* 2. 에디토리얼 리드 섹션 (2단 칼럼) */}
          <section className="pt-8 sm:pt-10">
            <EditorialColumn
              ratio="65-35"
              aside={
                <div className="space-y-6 pt-1">
                  <div>
                    <h3
                      className="text-xs font-bold uppercase tracking-widest text-[var(--mds-color-brand-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-cinematic, serif)' }}
                    >
                      ATELIER ARCHITECTURE
                    </h3>
                    <p className="text-xs text-[var(--mds-color-text-secondary)] leading-relaxed">
                      소나기 공방은 소프트웨어 엔지니어링과 아날로그
                      에디토리얼의 교차점에서 실전 프로덕트를 짓습니다.
                    </p>
                  </div>

                  <div className="p-4 rounded-[4px] border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)]">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--mds-color-text-muted)] mb-1">
                      THE 85:15 RULE
                    </span>
                    <p className="text-xs font-medium text-[var(--mds-color-text-primary)] leading-normal">
                      85% 신문 조판 그리드와 15% 보태니컬 펜 선화의 균형.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-[var(--mds-color-border-default)]">
                      <span className="text-[var(--mds-color-text-muted)]">
                        FOUNDATION
                      </span>
                      <span className="font-semibold text-[var(--mds-color-text-primary)]">
                        The True 2px Stem
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[var(--mds-color-border-default)]">
                      <span className="text-[var(--mds-color-text-muted)]">
                        PALETTE
                      </span>
                      <span className="font-semibold text-[var(--mds-color-text-primary)]">
                        Ink &amp; Newsprint
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[var(--mds-color-border-default)]">
                      <span className="text-[var(--mds-color-text-muted)]">
                        SYSTEM
                      </span>
                      <span className="font-semibold text-[var(--mds-color-brand-primary)]">
                        MDS v0.1.0
                      </span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[var(--mds-color-text-secondary)] font-sans">
                <DropCap letter="정">
                  <p>
                    원은 완성을 목표로 하지 않습니다. 그것은 지속적인 보살핌과
                    변화의 과정 그 자체입니다. 우리가 글을 쓰고 지식을 축적하는
                    방식은 오랫동안 시간순 피드와 완결주의라는 족쇄에 묶여
                    있었습니다. 수많은 영감들이 &ldquo;아직 세상에 내놓기에
                    완벽하지 않다&rdquo;는 완결의 덫에 걸려 서랍 속에서 풍화되어
                    사라졌습니다.
                  </p>
                </DropCap>

                <p>
                  <strong>민들레 정원(Mindulle Garden)</strong>은 그 완결주의를
                  거부합니다. 온실이 아닌 척박한 바위 틈에서도 꿋꿋이 자라나는
                  야생 민들레처럼, 거친 생각의 씨앗(Seed)부터 세상과 나누며
                  비판과 검증을 통해 단단한 지식으로 키워나가는{' '}
                  <strong className="text-[var(--mds-color-text-primary)]">
                    열린 사유(Thinking in Public)
                  </strong>
                  의 지면입니다.
                </p>

                <p>
                  정원사는 지식의 권위자가 아닙니다. 지식의 불완전함을 겸허히
                  인정하고, 매일 물을 주고 가지를 치며 사유의 연결망을 가꾸는
                  고요한 메이커입니다.
                  <EndMark />
                </p>
              </div>
            </EditorialColumn>
          </section>

          <HairlineRule thick className="my-10" />

          {/* 3. 메이커 철학 & 도구 체계 (Atelier Pillars) */}
          <section className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--mds-color-brand-primary)] font-mono">
                MAKER PILLARS &amp; TOOLCHAIN
              </span>
              <h2
                className="text-lg sm:text-xl font-bold tracking-tight text-[var(--mds-color-text-primary)]"
                style={{ fontFamily: 'var(--font-cinematic, serif)' }}
              >
                도구는 단단하게, 사유는 자유롭게
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-[4px] border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[var(--mds-color-brand-primary)]">
                  <Code2 size={18} />
                  <span className="text-xs font-bold uppercase font-mono">
                    Everything as Code
                  </span>
                </div>
                <p className="text-xs text-[var(--mds-color-text-secondary)] leading-relaxed">
                  디자인 토큰부터 인프라, 위키 문서까지 모든 지적 자산을 코드로
                  정의하고 버전 관리합니다.
                </p>
              </div>

              <div className="p-5 rounded-[4px] border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[var(--mds-color-brand-primary)]">
                  <Layers size={18} />
                  <span className="text-xs font-bold uppercase font-mono">
                    True 2px Stem
                  </span>
                </div>
                <p className="text-xs text-[var(--mds-color-text-secondary)] leading-relaxed">
                  모호한 그림자와 장식을 배제하고, 선명한 2px 실선과 단단한
                  경계로 UI와 타이포그래피 공간을 규정합니다.
                </p>
              </div>

              <div className="p-5 rounded-[4px] border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[var(--mds-color-brand-primary)]">
                  <BookOpen size={18} />
                  <span className="text-xs font-bold uppercase font-mono">
                    Ink on Newsprint
                  </span>
                </div>
                <p className="text-xs text-[var(--mds-color-text-secondary)] leading-relaxed">
                  스크린에서도 갓 인쇄된 신문 지면의 촉각성과 깊은 먹색 잉크의
                  가독성을 최우선으로 지켜냅니다.
                </p>
              </div>
            </div>
          </section>

          <HairlineRule className="my-10" />

          {/* 4. 접견 및 소통 채널 (Footer Connect) */}
          <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse bg-[var(--mds-color-brand-primary)]"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold text-[var(--mds-color-brand-primary)] font-mono">
                  GARDENER IS ACTIVE IN THE ATELIER
                </span>
              </div>
              <p className="text-xs text-[var(--mds-color-text-muted)]">
                정원의 사유에 대한 대화, 기술 교류, 질문은 언제나 열려 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <a
                href="mailto:mindulle@sonagi.space"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] text-[var(--mds-color-text-primary)] hover:border-[var(--mds-color-brand-primary)] transition-colors"
              >
                <Mail size={13} />
                <span>메일 보내기</span>
              </a>

              <a
                href="https://github.com/mindulle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] text-[var(--mds-color-text-primary)] hover:border-[var(--mds-color-brand-primary)] transition-colors"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>

              <Link
                href="/rss.xml"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-base)] text-[var(--mds-color-text-primary)] hover:border-[var(--mds-color-brand-primary)] transition-colors"
              >
                <Rss size={13} />
                <span>RSS 구독</span>
              </Link>
            </div>
          </footer>
        </article>
      </Container>
    </div>
  );
}
