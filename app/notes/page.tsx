import Link from 'next/link';
import { getAllNotes } from '@/lib/notes';
import { NotesGarden } from '@/components/blog/NotesGarden';
import { RssSubscribeWidget } from '@/components/blog';
import { HerbariumTextureFilter } from '@/components/blog/HerbariumTexture';

export const metadata = {
  title: 'The Herbarium • Digital Garden',
  description:
    '돌 틈의 식물 표본실(The Herbarium in the Crevice). 척박한 암반의 틈새에서 채집된 지식 표본과 사유의 기록입니다.',
};

export default async function NotesPage() {
  const allNotes = getAllNotes();

  return (
    <main
      className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 select-text"
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      <HerbariumTextureFilter />

      {/* 헤더: 돌 틈의 표본실 공식 아카이브 타이틀 */}
      <header className="mb-10 sm:mb-14 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] font-mono text-xs mb-4 border select-none"
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
            className="font-bold tracking-wider"
            style={{ color: 'var(--sng-color-brand-primary)' }}
          >
            HERBARIUM SPECIMEN ARCHIVE
          </span>
          <span style={{ color: 'var(--sng-color-border-default)' }}>|</span>
          <span style={{ color: 'var(--sng-color-text-muted)' }}>
            총 {allNotes.length}점 채집
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
          돌 틈의 표본실 (The Herbarium)
        </h1>

        <p
          className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-4"
          style={{ color: 'var(--sng-color-text-secondary)' }}
        >
          척박한 암반의 틈새에서 채집된 지식 표본과 사유의 기록. 생각의
          씨앗(Seed)부터 세상으로 비상하는 홀씨(Pappus)에 이르는 유기적 지식
          네트워크를 탐색합니다.
        </p>

        <div className="flex justify-center items-center gap-2">
          <Link
            href="/notes/The-Gardener"
            className="text-xs sm:text-sm font-mono font-medium hover:underline inline-flex items-center gap-1.5 transition-colors"
            style={{ color: 'var(--sng-color-brand-primary)' }}
          >
            <span>[[The Gardener]]: 정원사의 집필 철학 읽기</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 식물 표본 서랍 및 다층 필터링 정원 컴포넌트 */}
      <NotesGarden initialNotes={allNotes} />

      <div className="mt-20">
        <RssSubscribeWidget
          variant="compact"
          title="표본실 구독: 순수 RSS 피드"
          description="새로운 생각의 씨앗(Seed)과 에버그린 표본이 기탁될 때 알고리즘 없이 바로 받아보세요."
        />
      </div>
    </main>
  );
}
