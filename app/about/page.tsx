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
            이 블로그는 Next.js 15와 소나기 디자인 시스템으로 구축되었습니다.
            개발, 디자인, 그리고 일상의 이야기를 공유하는 공간입니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">
            관심사
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
