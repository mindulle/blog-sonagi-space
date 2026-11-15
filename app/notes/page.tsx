import Link from 'next/link';
import { getAllNotes } from '@/lib/notes';
import { NotesGarden } from '@/components/blog/NotesGarden';
import { RssSubscribeWidget } from '@/components/blog';
import { EndMark } from '@/components/editorial';

export const metadata = {
  title: '민들레 정원 • Digital Garden',
  description:
    '민들레 정원(Mindulle Garden). 척박한 바위 틈에서도 단단히 뿌리내리고 자라나는 생각의 기록과 유기적 지식 네트워크입니다.',
};

export default async function NotesPage() {
  const allNotes = getAllNotes();

  return (
    <main
      className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6 select-text"
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      {/* 헤더: 에디토리얼 판권 바 + 타이틀 */}
      <header className="mb-10 sm:mb-12">
        <div
          className="flex flex-wrap items-center justify-between gap-2 py-2.5 mb-8 border-y font-mono text-[10px] tracking-[0.22em] uppercase"
          style={{
            borderColor: 'var(--mds-color-border-subtle)',
            color: 'var(--mds-color-text-secondary)',
          }}
        >
          <span>DIGITAL GARDEN ARCHIVE</span>
          <span style={{ color: 'var(--mds-color-brand-primary)' }}>
            TOTAL {allNotes.length} NOTES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-3 keep-all"
              style={{ color: 'var(--mds-color-text-primary)' }}
            >
              지식의 정원 (Digital Garden)
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl leading-relaxed font-sans keep-all"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              돌 틈에서도 단단히 뿌리내리는 생각의 씨앗(Seed)부터 세상으로
              비상하는 홀씨(Pappus)에 이르는 유기적 지식 네트워크를 탐색합니다.
            </p>
          </div>

          <Link
            href="/notes/The-Gardener"
            className="shrink-0 text-xs font-mono font-semibold hover:underline inline-flex items-center gap-1.5 transition-colors"
            style={{ color: 'var(--mds-color-brand-primary)' }}
          >
            <span>[[The Gardener]]: 정원사의 사유</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 필터 및 1px 헤어라인 목록 */}
      <NotesGarden initialNotes={allNotes} />

      <div className="mt-14">
        <EndMark />
      </div>

      <div className="mt-12">
        <RssSubscribeWidget
          variant="compact"
          title="정원 구독: 순수 RSS 피드"
          description="새로운 생각의 씨앗(Seed)과 노트가 자라날 때 알고리즘 없이 바로 받아보세요."
        />
      </div>
    </main>
  );
}
