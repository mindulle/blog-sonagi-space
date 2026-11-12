import { Button } from '@mindulle/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PostPreviewCard } from '@/components/blog/PostPreviewCard';
import { HerbariumTextureFilter } from '@/components/blog/HerbariumTexture';
import { getAllNotes } from '@/lib/notes';

export default function Home() {
  const recentNotes = getAllNotes().slice(0, 3);

  return (
    <>
      <HerbariumTextureFilter />

      {/* Hero Section: 돌 틈의 식물 표본실 (The Herbarium in the Crevice) */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background:
            'linear-gradient(to bottom, var(--sng-color-bg-overlay), var(--sng-color-bg-base))',
        }}
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center font-mono">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs mb-6 border select-none"
              style={{
                backgroundColor: 'var(--sng-color-bg-surface)',
                borderColor: 'var(--sng-color-border-subtle)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--sng-color-brand-primary)' }}
              />
              <span
                className="font-bold tracking-wider uppercase"
                style={{ color: 'var(--sng-color-brand-primary)' }}
              >
                HERBARIUM IN THE CREVICE • EST. 2026
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight"
              style={{ color: 'var(--sng-color-text-primary)' }}
            >
              돌 틈의 식물 표본실,
              <br />
              자라나는 사유의 기록
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-sans"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              완결주의를 거부하고, 생각의 씨앗(Seed)부터 세상으로 비상하는
              홀씨(Pappus)에 이르기까지 척박한 암반의 틈새에서 피어나는 유기적
              지식 네트워크를 수집합니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/notes">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-7"
                >
                  <span>표본실 둘러보기</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto px-7"
                >
                  <span>정원사의 헌법 읽기</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Recently Cultivated Specimens Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--sng-color-bg-base)' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto font-mono">
            <div className="text-center mb-12">
              <span
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: 'var(--sng-color-brand-primary)' }}
              >
                RECENTLY HARVESTED SPECIMENS
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold font-sans tracking-tight mt-1"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                최근 기탁된 사유의 표본들
              </h2>
            </div>

            {recentNotes.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
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
                className="text-center text-sm"
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
