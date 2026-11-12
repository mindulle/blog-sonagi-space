import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Sprout,
  Network,
  Code2,
} from 'lucide-react';
import { Button, Badge, Card } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import {
  RssSubscribeWidget,
  GrowthGlyph,
  SpecimenLabel,
} from '@/components/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Gardener & Sonagi Space',
  description:
    '디지털 정원사(The Gardener)의 소개와 집필 철학, 그리고 소나기 디자인 시스템(MDS) 및 포트폴리오와의 유기적 생태계를 소개합니다.',
};

export default function AboutPage() {
  return (
    <Container className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-24 px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20">
        {/* 1. Hero / Gardener Intro */}
        <section className="flex flex-col gap-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <Badge variant="pill" color="success">
              🌱 The Gardener
            </Badge>
            <Badge variant="label">Digital Garden</Badge>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            쏟아지는 영감의 씨앗을 심고,
            <br />
            유기적인 사유의 숲을 가꿉니다.
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl font-normal leading-relaxed"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            소나기 스페이스(Sonagi Space)는 시간순으로 휘발되는 기존
            블로그(Stream)의 한계를 넘어, 시간이 지남에 따라 진화하고 교차
            수분되는 지식 정원(Digital Garden)입니다. 정원사는 완결된 지식의
            권위자가 아닌, 불완전한 생각의 씨앗을 열린 공간에서 가꾸고 돌보는
            관리자입니다.
          </p>
        </section>

        {/* 2. Core Essay Spotlight: [[The Gardener]] */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              정원사 집필 철학 에세이
            </h2>
            <Badge variant="pill" color="info">
              Evergreen
            </Badge>
          </div>

          <Card
            elevation="raised"
            className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 border transition-all duration-200"
            style={{
              backgroundColor: 'var(--sng-color-bg-surface)',
              borderColor: 'var(--sng-color-border-default)',
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-mono text-[var(--sng-color-brand-primary)]">
                <span>[[The Gardener]]</span>
                <span>•</span>
                <span>정원사의 헌법</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                The Gardener: 디지털 정원사의 철학과 집필 원칙
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                &ldquo;정원은 완성을 목표로 하지 않는다. 그것은 지속적인
                보살핌과 변화의 과정 그 자체다.&rdquo; 완벽주의의 덫(Perfection
                Trap)에서 벗어나, 생각의 씨앗(Seed)부터 상록수(Evergreen)에
                이르는 생명주기와 위키링크 백링크를 통한 양방향 지식 네트워크의
                멘탈 모델을 기술한 에세이입니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--sng-color-border-subtle)]">
              <div className="flex flex-wrap gap-2">
                <Badge variant="label">Philosophy</Badge>
                <Badge variant="label">Writing</Badge>
                <Badge variant="label">MDS</Badge>
                <Badge variant="label">Backlinks</Badge>
              </div>

              <Link href="/notes/The-Gardener">
                <Button
                  variant="primary"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <span>에세이 전문 읽기</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* 2.5. 돌 틈의 표본실 (The Herbarium in the Crevice) & 4단계 생장 선화 에칭 */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="pill" color="warning">
                🌿 Botanical Herbarium
              </Badge>
              <Badge variant="label">MDS v0.1.0 SSOT</Badge>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              돌 틈의 식물 표본실 (The Herbarium in the Crevice)
            </h2>
            <p
              className="text-base leading-relaxed max-w-3xl"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              척박한 겨울 회색돌(Greystone Dark) 틈새를 뚫고 피어나는 야생
              민들레의 생명력. 단단한 씨앗(Seed)부터 세상으로 비상하는
              홀씨(Pappus)에 이르는 4단계 생장 선화 에칭과 식물학 표본실 라벨
              시스템을 통해 사유의 성숙 과정을 기록합니다.
            </p>
          </div>

          {/* 4단계 생장 선화 에칭 쇼케이스 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage I: Seed */}
            <div
              className="p-6 rounded-[4px] flex flex-col items-center text-center gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div
                className="w-20 h-20 rounded-[4px] flex items-center justify-center p-3"
                style={{
                  backgroundColor: 'var(--sng-color-bg-overlay)',
                  border: '1px solid var(--sng-color-border-subtle)',
                }}
              >
                <GrowthGlyph
                  stage="seed"
                  size={48}
                  strokeColor="var(--sng-color-brand-primary)"
                  animated
                />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase"
                  style={{ color: 'var(--sng-color-brand-primary)' }}
                >
                  Stage I • Seed
                </span>
                <h3
                  className="text-base font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  단단한 겨울 씨앗
                </h3>
                <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  긴 침묵과 휴면을 견디는 세로 능선(Ribs)의 수과. 생각의 원초적
                  배아.
                </p>
              </div>
            </div>

            {/* Stage II: Sprout */}
            <div
              className="p-6 rounded-[4px] flex flex-col items-center text-center gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div
                className="w-20 h-20 rounded-[4px] flex items-center justify-center p-3"
                style={{
                  backgroundColor: 'var(--sng-color-bg-overlay)',
                  border: '1px solid var(--sng-color-border-subtle)',
                }}
              >
                <GrowthGlyph
                  stage="sprout"
                  size={48}
                  strokeColor="var(--sng-color-brand-primary)"
                  animated
                />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase"
                  style={{ color: 'var(--sng-color-brand-primary)' }}
                >
                  Stage II • Sprout
                </span>
                <h3
                  className="text-base font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  돌 틈의 여린 떡잎
                </h3>
                <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  암반의 균열을 뚫고 솟아오른 둥근 떡잎 쌍과 중심 생장점의 태동.
                </p>
              </div>
            </div>

            {/* Stage III: Rosette */}
            <div
              className="p-6 rounded-[4px] flex flex-col items-center text-center gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div
                className="w-20 h-20 rounded-[4px] flex items-center justify-center p-3"
                style={{
                  backgroundColor: 'var(--sng-color-bg-overlay)',
                  border: '1px solid var(--sng-color-border-subtle)',
                }}
              >
                <GrowthGlyph
                  stage="rosette"
                  size={48}
                  strokeColor="var(--sng-color-brand-primary)"
                  animated
                />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase"
                  style={{ color: 'var(--sng-color-brand-primary)' }}
                >
                  Stage III • Rosette
                </span>
                <h3
                  className="text-base font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  톱니형 민들레 본잎
                </h3>
                <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  비바람을 견디며 지면에 납작 엎드린 역방향 톱니
                  잎(Dent-de-lion).
                </p>
              </div>
            </div>

            {/* Stage IV: Pappus */}
            <div
              className="p-6 rounded-[4px] flex flex-col items-center text-center gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div
                className="w-20 h-20 rounded-[4px] flex items-center justify-center p-3"
                style={{
                  backgroundColor: 'var(--sng-color-bg-overlay)',
                  border: '1px solid var(--sng-color-border-subtle)',
                }}
              >
                <GrowthGlyph
                  stage="pappus"
                  size={48}
                  strokeColor="var(--sng-color-brand-primary)"
                  animated
                />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase"
                  style={{ color: 'var(--sng-color-brand-primary)' }}
                >
                  Stage IV • Pappus
                </span>
                <h3
                  className="text-base font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  비상하는 황금 홀씨
                </h3>
                <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  낙하산 관모를 펼치고 대중의 사유 공간으로 비행하는 상록의
                  지식.
                </p>
              </div>
            </div>
          </div>

          {/* 식물학 표본실 라벨 실물 시편 컴포넌트 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
            <div className="lg:col-span-5">
              <SpecimenLabel
                variant="card"
                specimenNo="SNG-2026-001"
                harvestDate="2026.11.12"
                habitat="Cloudflare Workers"
                stage="sprout"
                title="돌 틈의 표본실 (The Herbarium)"
                scientificName="Taraxacum platycarpum Dahlst."
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              <SpecimenLabel
                variant="plate"
                specimenNo="SNG-2026-002"
                harvestDate="2026.11.12"
                habitat="Mindulle Design System"
                stage="rosette"
                title="MDS 조형 헌법: The True 2px Stem & 4px Radius"
                scientificName="Taraxacum officinale Weber"
              />

              <div
                className="p-5 rounded-[4px] border flex flex-col gap-3 font-mono text-xs"
                style={{
                  backgroundColor: 'var(--sng-color-bg-surface)',
                  borderColor: 'var(--sng-color-border-default)',
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--sng-color-border-subtle)]">
                  <span
                    className="font-bold tracking-wider"
                    style={{ color: 'var(--sng-color-brand-primary)' }}
                  >
                    HERBARIUM SPECIMEN TAG SEALS
                  </span>
                  <span style={{ color: 'var(--sng-color-text-muted)' }}>
                    JetBrains Mono Tabular
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <SpecimenLabel
                    variant="tag"
                    specimenNo="SNG-2026-SEED"
                    stage="seed"
                    harvestDate="2026.11.10"
                  />
                  <SpecimenLabel
                    variant="tag"
                    specimenNo="SNG-2026-SPRT"
                    stage="sprout"
                    harvestDate="2026.11.11"
                  />
                  <SpecimenLabel
                    variant="tag"
                    specimenNo="SNG-2026-ROST"
                    stage="rosette"
                    harvestDate="2026.11.12"
                  />
                  <SpecimenLabel
                    variant="tag"
                    specimenNo="SNG-2026-PAPP"
                    stage="pappus"
                    harvestDate="2026.11.12"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 3대 핵심 철학 (Core Philosophy) */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              Core Garden Philosophy
            </h2>
            <p className="text-base text-[var(--sng-color-text-secondary)]">
              정원을 경작하며 지키는 세 가지 기본 원칙입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              elevation="flat"
              className="p-6 flex flex-col gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-subtle)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--sng-color-brand-primary)]"
                style={{ backgroundColor: 'var(--sng-color-bg-overlay)' }}
              >
                <Sprout size={20} />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                1. Thinking in Public
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                완벽해질 때까지 서랍 속에 사유를 숨겨두지 않습니다. 거친 생각의
                씨앗(Seed)부터 세상과 호흡하며 비판과 피드백을 통해 튼튼한
                상록수(Evergreen)로 키워나갑니다.
              </p>
            </Card>

            <Card
              elevation="flat"
              className="p-6 flex flex-col gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-subtle)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--sng-color-brand-primary)]"
                style={{ backgroundColor: 'var(--sng-color-bg-overlay)' }}
              >
                <Code2 size={20} />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                2. Everything as Code
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                디자인 토큰부터 인프라, 위키 역참조 그래프까지 모든 지식과
                인터페이스를 투명하고 재현 가능한 코드로 선언합니다. 단 하나의
                진실 공급원(SSOT) 원칙을 수호합니다.
              </p>
            </Card>

            <Card
              elevation="flat"
              className="p-6 flex flex-col gap-4 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-subtle)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--sng-color-brand-primary)]"
                style={{ backgroundColor: 'var(--sng-color-bg-overlay)' }}
              >
                <Network size={20} />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                3. Interconnected Knowledge
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                고립된 글은 생명력을 잃습니다. 위키링크(`[[]]`)와 자동 백링크를
                통해 디자인 시스템, 실제 프로젝트, 그리고 기술적 에세이가
                거미줄처럼 양방향으로 연결되어 서로를 강화합니다.
              </p>
            </Card>
          </div>
        </section>

        {/* 4. Ecosystem & Cross-links (MDS, Portfolio, Garden, Wiki) */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              Interconnected Ecosystem
            </h2>
            <p className="text-base text-[var(--sng-color-text-secondary)]">
              소나기 스페이스를 구성하는 4대 축과 유기적 양방향 링크 체계입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MDS */}
            <Card
              elevation="raised"
              className="p-6 sm:p-8 flex flex-col justify-between gap-6 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="label">Design System</Badge>
                  <span className="text-xs font-mono text-[var(--sng-color-text-muted)]">
                    design.sonagi.space
                  </span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  MDS (Mindulle Design System)
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  W3C 표준 JSON 기반의 NPM 토큰 패키지(`@mindulle/tokens`)와
                  Tailwind CSS 기반 React 컴포넌트 시스템. 이 블로그의 모든
                  시각적 의미론(Semantics)을 규정하는 원천입니다.
                </p>
              </div>

              <a
                href="https://design.sonagi.space"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="소나기 디자인 시스템 (새 창으로 열림)"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>MDS 공식 문서 둘러보기</span>
                  <ExternalLink size={14} />
                </Button>
              </a>
            </Card>

            {/* Portfolio */}
            <Card
              elevation="raised"
              className="p-6 sm:p-8 flex flex-col justify-between gap-6 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="label">Projects & Portfolio</Badge>
                  <span className="text-xs font-mono text-[var(--sng-color-text-muted)]">
                    /projects
                  </span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  Portfolio & Artifacts
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  실제 사용자와 만나는 프로덕트 디자인과 소프트웨어 엔지니어링
                  산출물. 화면 뒤에 숨은 사유의 과정과 아키텍처적 가설은 정원의
                  노트들과 양방향으로 연결되어 있습니다.
                </p>
              </div>

              <Link href="/projects">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>프로젝트 아카이브 보기</span>
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </Card>

            {/* Digital Garden */}
            <Card
              elevation="raised"
              className="p-6 sm:p-8 flex flex-col justify-between gap-6 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="label">Knowledge Base</Badge>
                  <span className="text-xs font-mono text-[var(--sng-color-text-muted)]">
                    /notes
                  </span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  Digital Garden & Graph
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  카테고리별 필터와 위키 호버 팝오버, 지식 그래프가 결합된
                  사유의 공간입니다. 각 노트를 넘나들며 생각의 맥락을 입체적으로
                  탐색할 수 있습니다.
                </p>
              </div>

              <Link href="/notes">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>정원 탐색하기</span>
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </Card>

            {/* Blog Stream */}
            <Card
              elevation="raised"
              className="p-6 sm:p-8 flex flex-col justify-between gap-6 border"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-default)',
              }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="label">Editorial Articles</Badge>
                  <span className="text-xs font-mono text-[var(--sng-color-text-muted)]">
                    /blog
                  </span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  Curated Articles
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  정원에서 검증된 상록수 글들과 구조화된 시리즈들을 아티클
                  형태로 정제하여 발행하는 편집 공간입니다.
                </p>
              </div>

              <Link href="/blog">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>블로그 글 목록 보기</span>
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* 5. RSS Feed Subscribe Widget */}
        <section className="flex flex-col gap-6">
          <RssSubscribeWidget
            title="정원 구독하기: 순수 RSS 피드"
            description="알고리즘의 간섭 없이 정원의 새로운 씨앗(Seed)과 상록수(Evergreen) 에세이를 가장 신속하고 투명하게 받아보세요."
          />
        </section>

        {/* 6. Footer Note */}
        <div className="pt-8 border-t border-[var(--sng-color-border-subtle)] text-center">
          <p className="text-sm text-[var(--sng-color-text-muted)]">
            Built with 💙 by Mindulle & AI Agents. Governed by MDS Tokens.
          </p>
        </div>
      </div>
    </Container>
  );
}
