import { Container } from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">
          About
        </h1>
        
        <div className="prose dark:prose-invert">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            안녕하세요! 소나기 블로그에 오신 것을 환영합니다.
          </p>
          
          <p className="text-neutral-600 dark:text-neutral-400">
            소나기 블로그는 <strong>소나기(Sonagi) 프로젝트</strong>의 일환으로 운영되는 기술 블로그입니다. 
            Next.js 15와 자체 개발한 소나기 디자인 시스템을 기반으로 구축되었으며, 
            프론트엔드 개발 기술, UI/UX 디자인 원칙, 그리고 효율적인 디자인 시스템 구축에 대한 통찰력을 공유합니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">
            미션
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400">
            복잡한 웹 기술을 명확하고 아름다운 디자인 시스템으로 풀어내어, 개발자와 사용자 모두에게 즐거운 웹 경험을 제공하는 것을 목표로 합니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">
            주요 주제
          </h2>
          
          <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>프론트엔드 개발 (React, Next.js, TypeScript)</li>
            <li>UI/UX 디자인 & 디자인 시스템</li>
            <li>웹 접근성 & 성능 최적화</li>
            <li>오픈소스 기여</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
