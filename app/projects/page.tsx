import { Card, Badge, Button } from '@/components/ui';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { getAllNotes } from '@/lib/notes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description:
    '소나기 생태계의 프로덕트 디자인과 소프트웨어 엔지니어링 프로젝트. 디지털 정원 및 MDS와 유기적으로 연결됩니다.',
};

export default function ProjectsPage() {
  const allNotes = getAllNotes();
  const projects = allNotes.filter((note) => note.category === 'project');

  return (
    <Container className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="pill" color="info">
              Portfolio & Artifacts
            </Badge>
            <Badge variant="label">MDS Powered</Badge>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            Projects & Ecosystem
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          >
            소나기 세계관에서 설계되고 운영되는 프로덕트들입니다. 모든 산출물은{' '}
            <Link
              href="/notes/The-Gardener"
              className="underline font-semibold hover:opacity-80"
              style={{ color: 'var(--mds-color-brand-primary)' }}
            >
              [[The Gardener]]
            </Link>
            의 집필 철학과{' '}
            <a
              href="https://design.sonagi.space"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:opacity-80 inline-flex items-center gap-0.5"
              style={{ color: 'var(--mds-color-brand-primary)' }}
            >
              <span>MDS (디자인 시스템)</span>
              <ExternalLink size={12} />
            </a>
            의 토큰을 기반으로 구현됩니다.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={`/notes/${project.slug}`}
              key={project.slug}
              className="group block"
            >
              <Card
                className="h-full p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                style={{ borderColor: 'var(--mds-color-border-default)' }}
              >
                <div
                  className="aspect-video rounded-lg mb-6 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'var(--mds-color-bg-overlay)' }}
                >
                  📦
                </div>
                <h3
                  className="text-xl font-semibold mb-3 transition-colors group-hover:text-[var(--mds-color-brand-primary)]"
                  style={{ color: 'var(--mds-color-text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: 'var(--mds-color-text-secondary)' }}
                >
                  {project.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="label">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Cross-link banner to MDS & The Gardener */}
        <Card
          elevation="raised"
          className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border"
          style={{
            backgroundColor: 'var(--mds-color-bg-surface)',
            borderColor: 'var(--mds-color-border-default)',
          }}
        >
          <div className="flex flex-col gap-2 max-w-xl">
            <h3
              className="text-lg font-bold"
              style={{ color: 'var(--mds-color-text-primary)' }}
            >
              프로젝트 뒤에 숨은 사유의 과정이 궁금하신가요?
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              프로덕트의 아키텍처적 가설과 실패, 그리고 시각적 규칙은 디지털
              정원과 MDS(Mindulle Design System)에 모두 공개되어 있습니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/notes/The-Gardener">
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-1.5"
              >
                <span>정원사 에세이</span>
                <ArrowRight size={14} />
              </Button>
            </Link>
            <a
              href="https://design.sonagi.space"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-1.5"
              >
                <span>MDS 문서</span>
                <ExternalLink size={14} />
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </Container>
  );
}
