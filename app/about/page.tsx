import { Container } from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8"
          style={{ color: 'var(--color-text-primary)' }}
        >
          About Sonagi
        </h1>

        <div className="prose">
          <p
            className="text-xl font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            갑자기 쏟아지는 시원한 소나기처럼,
            <br />
            영감과 기록을 쏟아내는 개인 인프라스트럭처.
          </p>

          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>소나기(Sonagi)</strong>는 단순히 글을 올리는 블로그가
            아닙니다. 개인의 지식, 자동화 시스템, 그리고 디자인 철학을 하나로
            엮어낸 거대한 <strong>개인 인프라 프로젝트</strong>입니다.
          </p>

          <p style={{ color: 'var(--color-text-secondary)' }}>
            Next.js와 MDX 기반으로 돌아가는 이 블로그는 지식의 전초기지 역할을
            하며, 모든 시각적 요소는 자체적으로 구축한{' '}
            <a
              href="/design-system"
              className="font-semibold underline underline-offset-4 decoration-[var(--color-brand-primary)]"
            >
              소나기 디자인 시스템
            </a>
            의 철저한 토큰 통제하에 렌더링됩니다.
          </p>

          <h2
            className="text-2xl font-bold mt-12 mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Core Philosophy
          </h2>

          <div className="space-y-6">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                1. Everything as Code
              </h3>
              <p
                className="text-sm m-0"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                디자인 토큰부터 인프라 프로비저닝까지, 가능한 모든 것을 코드로
                관리하여 재현 가능(Reproducible)하게 만듭니다.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                2. Single Source of Truth
              </h3>
              <p
                className="text-sm m-0"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                지식은 위키(Wiki)에, 색상은 토큰(JSON)에. 파편화된 정보를 하나의
                완벽한 출처에서 관리하고 각 플랫폼으로 배포합니다.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                3. AI-Native Workflow
              </h3>
              <p
                className="text-sm m-0"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                에이전트(AI)가 이해하고 조작할 수 있는 명확한 마크다운 문서와
                구조를 작성하여, 인간과 AI가 협업하는 미래형 워크플로우를
                실험합니다.
              </p>
            </div>
          </div>

          <h2
            className="text-2xl font-bold mt-12 mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ecosystem
          </h2>

          <ul
            className="list-disc pl-6 space-y-2"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <li>
              <strong>Blog</strong>: 현재 보고 계신 이 공간입니다. (Next.js 15)
            </li>
            <li>
              <strong>Design System</strong>: W3C 표준 JSON 기반의 NPM 토큰
              패키지입니다.
            </li>
            <li>
              <strong>Garden (BI)</strong>: 개인 데이터를 시각화하는
              대시보드입니다. (Svelte + Evidence)
            </li>
            <li>
              <strong>Wiki</strong>: 지식과 규칙을 담고 있는 내부
              두뇌(Markdown)입니다.
            </li>
          </ul>

          <hr className="my-12 border-[var(--color-border-default)]" />

          <p
            className="text-sm text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Built with 💙 by Mindulle & AI Agents.
          </p>
        </div>
      </div>
    </Container>
  );
}
