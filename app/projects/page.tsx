import { Card, Badge } from '@mindulle/ui';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { getAllNotes } from '@/lib/notes';

export default function ProjectsPage() {
  const allNotes = getAllNotes();
  const projects = allNotes.filter(note => note.category === 'project');

  return (
    <Container className="py-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
          Projects
        </h1>
        <p
          className="text-lg mb-12"
          style={{ color: 'var(--sng-color-text-secondary)' }}
        >
          Sonagi 세계관에서 진행 중인 프로젝트들을 소개합니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={`/notes/${project.slug}`}
              key={project.slug}
              className="group block"
            >
              <Card
                className="h-full p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: 'var(--sng-color-border-default)' }}
              >
                <div
                  className="aspect-video rounded-lg mb-6 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: 'var(--sng-color-bg-overlay)' }}
                >
                  📦
                </div>
                <h3
                  className="text-xl font-semibold mb-3 transition-colors group-hover:text-[var(--sng-color-brand-primary)]"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
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
      </div>
    </Container>
  );
}
