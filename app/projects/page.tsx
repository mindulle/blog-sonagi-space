import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Sonagi Blog',
      description:
        '기록과 영감을 공유하는 개인 지식 저장소입니다. 소나기 디자인 시스템을 적용한 첫 번째 프로덕트이자, MDX 기반의 정적 블로그입니다.',
      emoji: '📝',
      tags: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'MDX'],
      link: '/',
    },
    {
      title: 'Sonagi Design System',
      description:
        'Primitive-Semantic 레이어를 갖춘 토큰 주도(Token-Driven) 디자인 시스템입니다. NPM 패키지로 배포되며 프레임워크에 종속되지 않습니다.',
      emoji: '🎨',
      tags: ['CSS Variables', 'NPM', 'Semantic Release', 'Design Tokens'],
      link: '/design-system',
    },
    {
      title: 'Sonagi Garden (BI)',
      description:
        '인프라 및 자동화 상태를 한눈에 파악하는 개인화된 BI 대시보드입니다. 마크다운 기반의 데이터 시각화 도구를 활용해 구축되었습니다.',
      emoji: '🪴',
      tags: ['Evidence', 'Svelte', 'DuckDB', 'Data Viz'],
      link: 'https://garden.sonagi.space', // 나중에 실제 URL로 변경 가능
    },
  ];

  return (
    <Container className="py-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Projects
        </h1>
        <p
          className="text-lg mb-12"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Sonagi 세계관에서 진행 중인 프로젝트들을 소개합니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              className="group block"
            >
              <Card
                className="h-full p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: 'var(--color-border-default)' }}
              >
                <div
                  className="aspect-video rounded-lg mb-6 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'var(--color-bg-overlay)' }}
                >
                  {project.emoji}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 transition-colors group-hover:text-[var(--color-brand-primary)]"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
