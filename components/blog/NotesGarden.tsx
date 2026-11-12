'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { NoteCard } from './NoteCard';
import { GrowthGlyph, GrowthStage, normalizeStage } from './GrowthGlyph';
import type { Note } from '@/lib/notes';

interface NotesGardenProps {
  initialNotes: Note[];
}

interface DomainCategory {
  id: string;
  nameKo: string;
  nameEn: string;
  tags: string[];
}

const DOMAIN_CATEGORIES: DomainCategory[] = [
  {
    id: 'design',
    nameKo: '디자인 시스템 & UX',
    nameEn: 'Design Systems',
    tags: [
      'design',
      'ux',
      'ui-ux',
      'figma',
      'design-system',
      'tokens',
      'typography',
      'pixel-perfect',
    ],
  },
  {
    id: 'frontend',
    nameKo: '프론트엔드 엔지니어링',
    nameEn: 'Frontend Engine',
    tags: [
      'react',
      'javascript',
      'frontend',
      'angular',
      'css',
      'html',
      'ui',
      'flexbox',
      'handoff',
    ],
  },
  {
    id: 'backend',
    nameKo: '시스템 & 인프라',
    nameEn: 'Systems & Cloud',
    tags: [
      'backend',
      'redis',
      'postgresql-dba',
      'server-side-game-developer',
      'aspnet-core',
      'nodejs',
      'database',
      'cloudflare',
      'ssot',
      'architecture',
    ],
  },
  {
    id: 'aiml',
    nameKo: '인공지능 & 에이전트',
    nameEn: 'AI & Agents',
    tags: ['machine-learning', 'ai-agents', 'deep-learning', 'llm'],
  },
  {
    id: 'philosophy',
    nameKo: '정원사의 사유',
    nameEn: 'Philosophy',
    tags: ['philosophy', 'digital-garden', 'gardener', 'writing', 'concept'],
  },
];

const BOTANICAL_STAGES: Array<{
  id: GrowthStage;
  nameKo: string;
  nameEn: string;
}> = [
  { id: 'seed', nameKo: '겨울 씨앗', nameEn: 'Seed' },
  { id: 'sprout', nameKo: '돌 틈 떡잎', nameEn: 'Sprout' },
  { id: 'rosette', nameKo: '사자이빨 본잎', nameEn: 'Rosette' },
  { id: 'pappus', nameKo: '비상 홀씨', nameEn: 'Pappus' },
];

export function NotesGarden({ initialNotes }: NotesGardenProps) {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. 생장 단계별 표본 수 집계
  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: initialNotes ? initialNotes.length : 0,
      seed: 0,
      sprout: 0,
      rosette: 0,
      pappus: 0,
    };

    if (initialNotes) {
      initialNotes.forEach((note) => {
        const canonical = normalizeStage(note.status);
        counts[canonical] = (counts[canonical] || 0) + 1;
      });
    }
    return counts;
  }, [initialNotes]);

  // 2. 도메인별 표본 수 집계
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DOMAIN_CATEGORIES.forEach((d) => (counts[d.id] = 0));

    if (initialNotes) {
      initialNotes.forEach((note) => {
        if (note.tags && note.tags.length > 0) {
          DOMAIN_CATEGORIES.forEach((dom) => {
            if (note.tags.some((t) => dom.tags.includes(t.toLowerCase()))) {
              counts[dom.id]++;
            }
          });
        }
      });
    }
    return counts;
  }, [initialNotes]);

  // 3. 다층 필터링 로직 (생장 단계 + 도메인 + 검색어)
  const filteredNotes = useMemo(() => {
    if (!initialNotes) return [];
    return initialNotes.filter((note) => {
      // 생장 단계 필터
      if (selectedStage) {
        const canonical = normalizeStage(note.status);
        if (canonical !== selectedStage) return false;
      }

      // 도메인 필터
      if (selectedDomain) {
        const targetDomain = DOMAIN_CATEGORIES.find(
          (d) => d.id === selectedDomain
        );
        if (
          !targetDomain ||
          !note.tags ||
          !note.tags.some((t) => targetDomain.tags.includes(t.toLowerCase()))
        ) {
          return false;
        }
      }

      // 검색어 필터
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = note.title && note.title.toLowerCase().includes(q);
        const matchesExcerpt =
          note.excerpt && note.excerpt.toLowerCase().includes(q);
        const matchesTags =
          note.tags &&
          Array.isArray(note.tags) &&
          note.tags.some((t) => t.toLowerCase().includes(q));
        const matchesSlug = note.slug && note.slug.toLowerCase().includes(q);
        return matchesTitle || matchesExcerpt || matchesTags || matchesSlug;
      }

      return true;
    });
  }, [initialNotes, selectedStage, selectedDomain, searchQuery]);

  return (
    <div className="space-y-8 font-mono">
      {/* ─── TIER 1: 4단계 생장 선화 에칭 필터 (Botanical Stages) ─── */}
      <section
        className="p-4 sm:p-5 rounded-[4px] border select-none sng-texture-folio"
        style={{
          backgroundColor: 'var(--sng-color-bg-surface)',
          borderColor: 'var(--sng-color-border-default)',
        }}
        aria-label="Botanical Growth Stage Filter"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--sng-color-border-subtle)]">
          <span
            className="text-[11px] font-bold tracking-wider uppercase"
            style={{ color: 'var(--sng-color-brand-primary)' }}
          >
            STAGE FILTER • 생장 단계별 표본 서랍
          </span>
          <span
            className="text-[11px] tabular-nums"
            style={{ color: 'var(--sng-color-text-muted)' }}
          >
            {filteredNotes.length} / {initialNotes.length} 표본
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
          {/* 전체 표본 버튼 */}
          <button
            onClick={() => setSelectedStage(null)}
            className="col-span-2 sm:col-span-1 flex items-center justify-between p-2.5 rounded-[4px] border text-xs transition-all"
            style={{
              backgroundColor:
                selectedStage === null
                  ? 'var(--sng-color-bg-overlay)'
                  : 'transparent',
              borderColor:
                selectedStage === null
                  ? 'var(--sng-color-brand-primary)'
                  : 'var(--sng-color-border-subtle)',
              color:
                selectedStage === null
                  ? 'var(--sng-color-brand-primary)'
                  : 'var(--sng-color-text-secondary)',
            }}
          >
            <span className="font-semibold">전체 표본</span>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-[2px]"
              style={{
                backgroundColor: 'var(--sng-color-bg-overlay)',
                color: 'var(--sng-color-text-muted)',
              }}
            >
              {stageCounts.all}
            </span>
          </button>

          {/* 4단계 글리프 버튼 */}
          {BOTANICAL_STAGES.map((st) => {
            const isActive = selectedStage === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStage(isActive ? null : st.id)}
                className="flex items-center justify-between p-2.5 rounded-[4px] border text-xs transition-all"
                style={{
                  backgroundColor: isActive
                    ? 'var(--sng-color-bg-overlay)'
                    : 'transparent',
                  borderColor: isActive
                    ? 'var(--sng-color-brand-primary)'
                    : 'var(--sng-color-border-subtle)',
                  color: isActive
                    ? 'var(--sng-color-brand-primary)'
                    : 'var(--sng-color-text-secondary)',
                }}
              >
                <div className="flex items-center gap-2">
                  <GrowthGlyph
                    stage={st.id}
                    size={16}
                    strokeColor={
                      isActive
                        ? 'var(--sng-color-brand-primary)'
                        : 'currentColor'
                    }
                  />
                  <span className="font-semibold">{st.nameEn}</span>
                </div>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-[2px]"
                  style={{
                    backgroundColor: 'var(--sng-color-bg-overlay)',
                    color: 'var(--sng-color-text-muted)',
                  }}
                >
                  {stageCounts[st.id] || 0}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── TIER 2: 도메인 분류 탭 & 검색 바 ─── */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2 border-b border-[var(--sng-color-border-subtle)]">
        {/* 도메인 필터 알약 탭 */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => setSelectedDomain(null)}
            className="px-2.5 py-1 rounded-[4px] border transition-colors"
            style={{
              backgroundColor:
                selectedDomain === null
                  ? 'var(--sng-color-bg-overlay)'
                  : 'transparent',
              borderColor:
                selectedDomain === null
                  ? 'var(--sng-color-brand-primary)'
                  : 'var(--sng-color-border-subtle)',
              color:
                selectedDomain === null
                  ? 'var(--sng-color-brand-primary)'
                  : 'var(--sng-color-text-muted)',
            }}
          >
            All Fields
          </button>

          {DOMAIN_CATEGORIES.map((dom) => {
            const isDomActive = selectedDomain === dom.id;
            const count = domainCounts[dom.id] || 0;
            if (count === 0) return null;
            return (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(isDomActive ? null : dom.id)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border transition-colors"
                style={{
                  backgroundColor: isDomActive
                    ? 'var(--sng-color-bg-overlay)'
                    : 'transparent',
                  borderColor: isDomActive
                    ? 'var(--sng-color-brand-primary)'
                    : 'var(--sng-color-border-subtle)',
                  color: isDomActive
                    ? 'var(--sng-color-brand-primary)'
                    : 'var(--sng-color-text-secondary)',
                }}
              >
                <span>{dom.nameEn}</span>
                <span className="text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 표본 아카이브 검색 인풋 */}
        <div className="relative w-full md:w-64">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--sng-color-text-muted)' }}
          />
          <input
            type="text"
            placeholder="Search specimen docket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-[4px] text-xs border outline-none transition-colors"
            style={{
              backgroundColor: 'var(--sng-color-bg-surface)',
              borderColor: 'var(--sng-color-border-default)',
              color: 'var(--sng-color-text-primary)',
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor =
                'var(--sng-color-brand-primary)')
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor =
                'var(--sng-color-border-default)')
            }
          />
        </div>
      </section>

      {/* ─── TIER 3: 채집된 표본 목록 (Specimen Dockets) ─── */}
      {filteredNotes.length === 0 ? (
        <div
          className="p-12 text-center rounded-[4px] border border-dashed text-xs space-y-2"
          style={{
            borderColor: 'var(--sng-color-border-default)',
            color: 'var(--sng-color-text-muted)',
          }}
        >
          <div
            className="text-sm font-semibold"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            조건에 일치하는 표본이 표본 서랍에 없습니다.
          </div>
          <p>선택된 생장 단계나 도메인 필터를 해제해 보세요.</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
          {filteredNotes.map((note) => (
            <li key={note.slug}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
