import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Card, CardBody } from '@/components/ui/Card';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 md:py-32"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-bg-overlay), var(--color-bg-base))',
        }}
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-default)',
              }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{ color: 'var(--color-brand-primary)' }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                소나기 디자인 시스템으로 만든 블로그
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              청량하고 세련된
              <br />
              <span style={{ color: 'var(--color-brand-primary)' }}>
                개발 블로그
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
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
                <Button
                  variant="outline"
                  size="large"
                  className="w-full sm:w-auto"
                >
                  About
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: 'var(--color-text-primary)' }}
            >
              이런 것들을 공유합니다
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="outlined" hoverable>
                <CardBody className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-bg-overlay)' }}
                  >
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    개발
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    웹 개발, React, Next.js, TypeScript 등 프론트엔드 기술에
                    대한 이야기
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined" hoverable>
                <CardBody className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-bg-overlay)' }}
                  >
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    디자인
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    UI/UX 디자인, 디자인 시스템, 그리고 아름다운 웹을 만드는
                    방법
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined" hoverable>
                <CardBody className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-bg-overlay)' }}
                  >
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    프로젝트
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    개인 프로젝트, 사이드 프로젝트, 그리고 배운 것들의 기록
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
