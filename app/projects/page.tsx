import { Container } from '@/components/ui/Container';

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
          Projects
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          진행했던 프로젝트들을 소개합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 예시 프로젝트 카드 */}
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              소나기 블로그
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Next.js 15와 소나기 디자인 시스템으로 만든 개인 블로그
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                Next.js
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                TypeScript
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* 추가 프로젝트는 여기에... */}
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              Coming Soon
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              새로운 프로젝트를 준비 중입니다.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
