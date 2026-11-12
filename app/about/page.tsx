import Link from 'next/link';
import { ArrowRight, Mail, Rss } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import {
  GrowthGlyph,
  SpecimenLabel,
  RssSubscribeWidget,
} from '@/components/blog';
import {
  HerbariumTextureFilter,
  WashiTapeStrip,
} from '@/components/blog/HerbariumTexture';
import { HerbariumSeal } from '@/components/blog/HerbariumSeal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Herbarium Register • About Sonagi Space',
  description:
    '돌 틈의 식물 표본실(The Herbarium in the Crevice) 관리 대장. 척박한 암반의 틈새에서 피어나는 야생 민들레의 생명력과 디지털 정원사의 집필 철학을 기록합니다.',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-12 md:py-24 select-text">
      {/* SVG Native 한지/암반 질감 필터 인젝션 */}
      <HerbariumTextureFilter />

      {/* 배경 장식: 거친 암반의 균열 에칭 라인 (The Rock Crevice Fissure) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          style={{ color: 'var(--color-border-strong)' }}
        >
          <path
            d="M 120 0 L 140 180 L 110 360 L 150 600 L 125 900 L 160 1200"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M 140 180 L 210 240 L 260 210"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <path
            d="M 110 360 L 60 410 L 30 390"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        </svg>
      </div>

      <Container className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ─── 단 하나의 장중한 아카이벌 표본지 대장 (The Archival Monograph Folio) ─── */}
        <article
          className="relative rounded-[4px] p-6 sm:p-10 md:p-16 border font-mono transition-shadow sng-texture-folio"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            borderColor: 'var(--color-border-strong)', // The True 2px Stem (Gold Accent)
            borderWidth: '2px',
            boxShadow:
              '0 8px 32px -4px rgba(0, 0, 0, 0.12), 0 2px 10px -2px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* 상단 중앙: 실제 한지(Korean Mulberry) 마운팅 테이프 */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none">
            <WashiTapeStrip width={140} height={20} />
          </div>

          {/* 4개 모서리: 아카이벌 식물 표본지 사각 린넨 마운트 탭 */}
          <div
            className="absolute top-3 left-3 w-4 h-4 pointer-events-none opacity-40 border-t-2 border-l-2"
            style={{ borderColor: 'var(--color-brand-primary)' }}
            aria-hidden="true"
          />
          <div
            className="absolute top-3 right-3 w-4 h-4 pointer-events-none opacity-40 border-t-2 border-r-2"
            style={{ borderColor: 'var(--color-brand-primary)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none opacity-40 border-b-2 border-l-2"
            style={{ borderColor: 'var(--color-brand-primary)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none opacity-40 border-b-2 border-r-2"
            style={{ borderColor: 'var(--color-brand-primary)' }}
            aria-hidden="true"
          />

          {/* 1. 표본실 등록 현판 (The Herbarium Register Entry) */}
          <header
            className="pb-8 border-b"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex flex-col gap-2 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px]"
                    style={{
                      backgroundColor: 'var(--color-bg-overlay)',
                      color: 'var(--color-brand-primary)',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    HERBARIUM REGISTRATION • SNG-SPACE
                  </span>
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    NO. 2026-HERB-001
                  </span>
                </div>

                <h1
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-sans mt-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  돌 틈의 표본실 (The Herbarium in the Crevice)
                </h1>

                <p
                  className="text-sm italic tracking-normal"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Taraxacum platycarpum Dahlst. (토종 야생 민들레의 사유)
                </p>
              </div>

              {/* 공식 표본실 음각 압인 씰 */}
              <div className="shrink-0 flex items-center justify-center p-2 rounded-[4px]">
                <HerbariumSeal
                  size={84}
                  registrationNo="HERB-001"
                  year="2026"
                />
              </div>
            </div>

            {/* 식물학 채집 정보 매트릭스 (Botanical Ledger Metadata) */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 mt-6 border-t text-[11px] sm:text-xs tabular-nums"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <div>
                <span
                  className="block text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  TAXONOMY
                </span>
                <span
                  className="font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Asteraceae (국화과)
                </span>
              </div>
              <div>
                <span
                  className="block text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  HABITAT / CLEFT
                </span>
                <span
                  className="font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  돌 틈 (Rock Crevice)
                </span>
              </div>
              <div>
                <span
                  className="block text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  CANONICAL RULE
                </span>
                <span
                  className="font-semibold"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  The True 2px Stem
                </span>
              </div>
              <div>
                <span
                  className="block text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  CURATOR
                </span>
                <span
                  className="font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  The Gardener
                </span>
              </div>
            </div>
          </header>

          {/* 2. 정원사의 선서 (The Gardener's Manifesto) */}
          <section
            className="py-8 sm:py-10 border-b font-sans leading-relaxed"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <blockquote
              className="p-4 sm:p-6 rounded-[4px] my-6 italic text-base sm:text-lg border-l-4"
              style={{
                backgroundColor: 'var(--color-bg-overlay)',
                borderColor: 'var(--color-brand-primary)',
                color: 'var(--color-text-primary)',
              }}
            >
              “정원은 완성을 목표로 하지 않는다. 그것은 지속적인 보살핌과 변화의
              과정 그 자체다.”
            </blockquote>

            <div
              className="space-y-4 text-sm sm:text-base"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <p>
                우리가 글을 쓰고 지식을 축적하는 방식은 오랫동안 시간순
                피드(Feed)와 완결주의라는 족쇄에 묶여 있었습니다. 수많은
                반짝이는 영감들이 &ldquo;아직 세상에 내놓기에 완성되지
                않았다&rdquo;는 완벽주의의 덫(Perfection Trap)에 걸려 드래프트
                서랍 속에서 영원히 풍화되어 사라집니다.
              </p>
              <p>
                <strong>돌 틈의 표본실(Sonagi Space)</strong>은 그 완결주의를
                거부합니다. 비옥한 온실이 아닌, 척박한 겨울 돌 틈에서 자라나는
                야생 민들레처럼 거친 생각의 씨앗(Seed)부터 세상과 호흡하며
                비판과 검증을 통해 단단한 상록수(Evergreen)로 키워나가는{' '}
                <strong>열린 사유(Thinking in Public)</strong>의 아카이브입니다.
              </p>
              <p>
                정원사는 완결된 지식의 권위자가 아닙니다. 지식의 불완전성을
                인정하고, 매일 물을 주고 가지를 치며 지식의 위상수학적
                연결망(Topological Network)을 가꾸는 고요한 관리자입니다.
              </p>
            </div>
          </section>

          {/* 3. 4단계 생장 동판화 도판 (The Four Botanical Etching Plates) */}
          <section
            className="py-8 sm:py-10 border-b"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <div className="flex flex-col gap-1 mb-6">
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                BOTANICAL ETCHING PLATES • I - IV
              </span>
              <h2
                className="text-lg sm:text-xl font-bold font-sans tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                생각의 4단계 생장 동판화 규격
              </h2>
              <p
                className="text-xs font-sans mt-0.5"
                style={{ color: 'var(--color-text-muted)' }}
              >
                디지털 정원의 모든 노트는 아래 4단계 식물학적 형태 규격을
                따릅니다.
              </p>
            </div>

            {/* 고서적 도판 포맷의 4단 선화 배치 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Plate I: Seed */}
              <div
                className="p-5 rounded-[4px] border flex flex-col gap-3 relative"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: 'var(--color-brand-primary)' }}
                  >
                    PLATE I • SEED
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    단단한 겨울 씨앗
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div
                    className="shrink-0 p-2 rounded-[2px]"
                    style={{ border: '1px solid var(--color-border-subtle)' }}
                  >
                    <GrowthGlyph stage="seed" size={48} animated />
                  </div>
                  <div className="text-xs font-sans space-y-1">
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      원초적 배아와 세로 능선(Ribs)
                    </p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      긴 침묵과 휴면을 견디는 단단한 수과(Achene). 결론이 나지
                      않은 거친 질문과 가설의 시작.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plate II: Sprout */}
              <div
                className="p-5 rounded-[4px] border flex flex-col gap-3 relative"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: 'var(--color-brand-primary)' }}
                  >
                    PLATE II • SPROUT
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    돌 틈의 여린 떡잎
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div
                    className="shrink-0 p-2 rounded-[2px]"
                    style={{ border: '1px solid var(--color-border-subtle)' }}
                  >
                    <GrowthGlyph stage="sprout" size={48} animated />
                  </div>
                  <div className="text-xs font-sans space-y-1">
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      암반 균열과 초생 떡잎 쌍
                    </p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      단단한 바위 틈을 가르고 솟아오른 주걱형 떡잎. 레퍼런스와
                      실험 코드가 뼈대를 잡는 단계.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plate III: Rosette */}
              <div
                className="p-5 rounded-[4px] border flex flex-col gap-3 relative"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: 'var(--color-brand-primary)' }}
                  >
                    PLATE III • ROSETTE
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    톱니형 민들레 본잎
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div
                    className="shrink-0 p-2 rounded-[2px]"
                    style={{ border: '1px solid var(--color-border-subtle)' }}
                  >
                    <GrowthGlyph stage="rosette" size={48} animated />
                  </div>
                  <div className="text-xs font-sans space-y-1">
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      비바람을 견디는 사자이빨(Dent-de-lion)
                    </p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      지면에 납작 엎드린 역방향 톱니와 강인한 주맥. 논리적
                      반박과 치열한 실증 검증을 마친 구조체.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plate IV: Pappus */}
              <div
                className="p-5 rounded-[4px] border flex flex-col gap-3 relative"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-subtle)]">
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: 'var(--color-brand-primary)' }}
                  >
                    PLATE IV • PAPPUS
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    비상하는 황금 홀씨
                  </span>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div
                    className="shrink-0 p-2 rounded-[2px]"
                    style={{ border: '1px solid var(--color-border-subtle)' }}
                  >
                    <GrowthGlyph stage="pappus" size={48} animated />
                  </div>
                  <div className="text-xs font-sans space-y-1">
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      상공으로 비행하는 낙하산 관모
                    </p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      충분히 숙성되어 미풍에 날아가 다른 사람의 사유와 교차
                      수분되는 완성된 에버그린 자산.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 실물 표본실 라벨 시편 (Official Specimen Plate) */}
          <section
            className="py-8 sm:py-10 border-b"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <div className="flex flex-col gap-1 mb-6">
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                EXHIBITED SPECIMEN SHEET
              </span>
              <h2
                className="text-lg sm:text-xl font-bold font-sans tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                표본실 실물 시편 규격
              </h2>
            </div>

            <SpecimenLabel
              variant="card"
              specimenNo="SNG-2026-HERB"
              harvestDate="2026.11.12"
              habitat="The Crevice / Cloudflare Edge"
              stage="pappus"
              title="The Gardener: 디지털 정원사의 철학과 집필 원칙"
              scientificName="Taraxacum platycarpum Dahlst."
            />
          </section>

          {/* 5. 정원사와의 신호 & 접견 (Curatorial Signals & RSS) */}
          <footer className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--color-brand-primary)' }}
                />
                <span
                  className="text-xs font-bold"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  GARDENER IS ACTIVE IN THE CREVICE
                </span>
              </div>
              <p
                className="text-xs font-sans"
                style={{ color: 'var(--color-text-muted)' }}
              >
                정원의 사유에 대한 질문, 반론, 교차 수분 제안은 언제나 열려
                있습니다.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:mindulle@sonagi.space"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs border transition-colors hover:border-[var(--color-brand-primary)]"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <Mail size={14} />
                <span>정원사에게 전갈 보내기</span>
              </a>

              <Link
                href="/rss.xml"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs border transition-colors hover:border-[var(--color-brand-primary)]"
                style={{
                  backgroundColor: 'var(--color-bg-overlay)',
                  borderColor: 'var(--color-border-subtle)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <Rss size={14} />
                <span>RSS 구독</span>
              </Link>
            </div>
          </footer>
        </article>
      </Container>
    </div>
  );
}
