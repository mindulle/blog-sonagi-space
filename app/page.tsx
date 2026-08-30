import { Button } from '@mindulle/ui';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PostPreviewCard } from '@/components/blog/PostPreviewCard';
import { getAllNotes } from '@/lib/notes';

export default function Home() {
  const recentNotes = getAllNotes().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 md:py-32"
        style={{
          background:
            'linear-gradient(to bottom, var(--sng-color-bg-overlay), var(--sng-color-bg-base))',
        }}
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              쏟아지는 영감,
              <br />
              자라나는 생각들
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              디자인 시스템, AI 에이전트, 그리고 웹 아키텍처가 교차하는 개인
              지식 정원입니다.
            </p>

            <div className="flex justify-center">
              <Link href="/notes">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                >
                  Enter the Garden
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Seedlings Section */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--sng-color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              🌱 Recent Seedlings
            </h2>

            {recentNotes.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {recentNotes.map((note) => (
                  <PostPreviewCard
                    key={note.slug}
                    href={`/notes/${note.slug}`}
                    post={{
                      slug: note.slug,
                      title: note.title,
                      excerpt: note.excerpt,
                      category: note.category,
                      status: note.status,
                      dateLabel: (
                        note.publishedDate ||
                        note.created ||
                        ''
                      ).slice(0, 10),
                      coverImage: note.coverImage,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p
                className="text-center"
                style={{ color: 'var(--sng-color-text-secondary)' }}
              >
                아직 심어진 씨앗이 없습니다. 곧 첫 글이 자라날 예정이에요.
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
