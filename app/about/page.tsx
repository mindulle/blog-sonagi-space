import { Card } from '@/components/ui';
import { Container } from '@/components/ui/Container';

// ListItem 로컬 구현체 (디자인 시스템 배포 전 임시)
function LocalListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-[var(--sng-color-bg-elevated)] rounded-xl border border-[var(--sng-color-border-subtle)]">
      <h4 className="font-bold text-[var(--sng-color-text-primary)]">
        {title}
      </h4>
      <p className="text-sm text-[var(--sng-color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Container className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-[120px] px-6 md:px-[120px] py-12 md:py-[80px]">
        {/* 1. Intro */}
        <section className="flex flex-col gap-4">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[var(--sng-color-text-primary)]">
            About Sonagi Space
          </h1>
          <p className="text-[16px] md:text-[20px] font-normal leading-relaxed text-[var(--sng-color-text-secondary)]">
            디지털 정원(Digital Garden)은 시간이 지남에 따라 진화하고, 기여하며,
            축적되는 구조를 지향합니다. 단순한 블로그가 아니라 연결된 생각들의
            네트워크를 구성합니다.
          </p>
        </section>

        {/* 2. Core Philosophy */}
        <section className="flex flex-col gap-8">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[var(--sng-color-text-primary)]">
            Core Philosophy
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 flex flex-col gap-2 p-6" elevation="flat">
              <h3 className="text-lg font-bold text-[var(--sng-color-text-primary)]">
                1. Everything as Code
              </h3>
              <p className="text-sm text-[var(--sng-color-text-secondary)] leading-relaxed">
                디자인 토큰부터 인프라 프로비저닝까지, 가능한 모든 것을 코드로
                관리하여 재현 가능(Reproducible)하게 만듭니다.
              </p>
            </Card>

            <Card className="flex-1 flex flex-col gap-2 p-6" elevation="flat">
              <h3 className="text-lg font-bold text-[var(--sng-color-text-primary)]">
                2. Single Source of Truth
              </h3>
              <p className="text-sm text-[var(--sng-color-text-secondary)] leading-relaxed">
                지식은 위키(Wiki)에, 색상은 토큰(JSON)에. 파편화된 정보를 하나의
                완벽한 출처에서 관리하고 각 플랫폼으로 배포합니다.
              </p>
            </Card>

            <Card className="flex-1 flex flex-col gap-2 p-6" elevation="flat">
              <h3 className="text-lg font-bold text-[var(--sng-color-text-primary)]">
                3. AI-Native Workflow
              </h3>
              <p className="text-sm text-[var(--sng-color-text-secondary)] leading-relaxed">
                에이전트(AI)가 이해하고 조작할 수 있는 명확한 마크다운 문서와
                구조를 작성하여, 인간과 AI가 협업하는 미래형 워크플로우를
                실험합니다.
              </p>
            </Card>
          </div>
        </section>

        {/* 3. Ecosystem */}
        <section className="flex flex-col gap-6">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[var(--sng-color-text-primary)]">
            Ecosystem
          </h2>
          <div className="flex flex-col gap-4">
            <LocalListItem
              title="Blog"
              description="현재 보고 계신 이 공간입니다. (Next.js 16)"
            />
            <LocalListItem
              title="Design System"
              description="W3C 표준 JSON 기반의 NPM 토큰 패키지입니다."
            />
            <LocalListItem
              title="Garden (BI)"
              description="개인 데이터를 시각화하는 대시보드입니다. (Svelte + Evidence)"
            />
            <LocalListItem
              title="Wiki"
              description="지식과 규칙을 담고 있는 내부 두뇌(Markdown)입니다."
            />
          </div>
        </section>

        <hr className="mt-8 border-[var(--sng-color-border-default)]" />

        <p className="text-sm text-center text-[var(--sng-color-text-muted)] pb-12">
          Built with 💙 by Mindulle & AI Agents.
        </p>
      </div>
    </Container>
  );
}
