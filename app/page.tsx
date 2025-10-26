import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">소나기 디자인 시스템으로 만든 블로그</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
              청량하고 세련된
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                개발 블로그
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Next.js 15와 소나기 디자인 시스템으로 구축한 개인 블로그입니다.
              개발, 디자인, 그리고 일상의 이야기를 공유합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="large" className="w-full sm:w-auto">
                  블로그 보기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="large" className="w-full sm:w-auto">
                  About
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-50">
              이런 것들을 공유합니다
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                  개발
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  웹 개발, React, Next.js, TypeScript 등 프론트엔드 기술에 대한 이야기
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                  디자인
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  UI/UX 디자인, 디자인 시스템, 그리고 아름다운 웹을 만드는 방법
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                  프로젝트
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  개인 프로젝트, 사이드 프로젝트, 그리고 배운 것들의 기록
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
