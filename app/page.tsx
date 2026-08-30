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
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                border: '1px solid var(--sng-color-border-default)',
              }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{ color: 'var(--sng-color-brand-primary)' }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                소나기 디자인 시스템으로 만든 블로그
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              청량하고 세련된
              <br />
              <span style={{ color: 'var(--sng-color-brand-primary)' }}>
                개발 블로그
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              Next.js 15와 소나기 디자인 시스템으로 구축한 개인 블로그입니다.
              개발, 디자인, 그리고 일상의 이야기를 공유합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="w-full sm:w-auto">
                  블로그 보기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  About
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
