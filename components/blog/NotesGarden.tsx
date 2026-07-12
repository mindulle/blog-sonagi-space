'use client';

import { useState, useMemo } from 'react';
import { NoteCard } from './NoteCard';
import type { Note } from '@/lib/notes';

interface NotesGardenProps {
  initialNotes: Note[];
}

interface CategoryInfo {
  id: string;
  nameKo: string;
  nameEn: string;
  emoji: string;
  tags: string[];
}

const CATEGORIES: CategoryInfo[] = [
  {
    id: 'frontend',
    nameKo: '프론트엔드',
    nameEn: 'Frontend',
    emoji: '🌐',
    tags: ['react', 'javascript', 'frontend', 'angular', 'css', 'html', 'ui'],
  },
  {
    id: 'backend',
    nameKo: '백엔드 & DB',
    nameEn: 'Backend & DB',
    emoji: '💾',
    tags: [
      'backend',
      'php',
      'redis',
      'postgresql-dba',
      'server-side-game-developer',
      'aspnet-core',
      'nodejs',
      'database',
    ],
  },
  {
    id: 'design',
    nameKo: '디자인 & UX',
    nameEn: 'Design & UX',
    emoji: '🎨',
    tags: ['design', 'ux', 'ui-ux', 'figma', 'design-system'],
  },
  {
    id: 'aiml',
    nameKo: '인공지능 & ML',
    nameEn: 'AI & ML',
    emoji: '🤖',
    tags: ['machine-learning', 'ai-agents', 'deep-learning'],
  },
  {
    id: 'management',
    nameKo: '기획 & 비즈니스',
    nameEn: 'Product & Biz',
    emoji: '📊',
    tags: ['product-manager', 'engineering-manager', 'bi-analyst', 'devrel'],
  },
  {
    id: 'cs',
    nameKo: '컴퓨터 과학',
    nameEn: 'Computer Science',
    emoji: '🛡️',
    tags: ['computer-science', 'algorithm', 'data-structure', 'cyber-security'],
  },
];

function CategoryCard({
  cat,
  isActive,
  count,
  onClick,
}: {
  cat: CategoryInfo;
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: 'var(--sng-spacing-6)',
        backgroundColor: isActive
          ? 'var(--sng-color-bg-surface)'
          : 'var(--sng-color-bg-overlay)',
        border: `2px solid ${
          isActive
            ? 'var(--sng-color-brand-primary)'
            : isHovered
              ? 'var(--sng-color-brand-primary-hover)'
              : 'var(--sng-color-border-default)'
        }`,
        borderRadius: 'var(--sng-radius-lg)',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isActive || isHovered ? 'var(--sng-shadow-md)' : 'none',
        transform: isActive || isHovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{cat.emoji}</div>
      <h3
        style={{
          fontSize: 'var(--sng-font-size-base)',
          fontWeight: '700',
          color: 'var(--sng-color-text-primary)',
          margin: '0 0 4px 0',
        }}
      >
        {cat.nameKo}
      </h3>
      <div
        style={{
          fontSize: 'var(--sng-font-size-xs)',
          color: 'var(--sng-color-text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{cat.nameEn}</span>
        <span
          style={{
            backgroundColor: isActive
              ? 'var(--sng-color-brand-primary)'
              : 'var(--sng-color-border-default)',
            color: isActive
              ? 'var(--sng-color-text-inverse)'
              : 'var(--sng-color-text-secondary)',
            padding: '2px 8px',
            borderRadius: '999px',
            fontWeight: 600,
          }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}

function EtcCard({
  isActive,
  count,
  onClick,
}: {
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: 'var(--sng-spacing-6)',
        backgroundColor: isActive
          ? 'var(--sng-color-bg-surface)'
          : 'var(--sng-color-bg-overlay)',
        border: `2px solid ${
          isActive
            ? 'var(--sng-color-brand-primary)'
            : isHovered
              ? 'var(--sng-color-brand-primary-hover)'
              : 'var(--sng-color-border-default)'
        }`,
        borderRadius: 'var(--sng-radius-lg)',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isActive || isHovered ? 'var(--sng-shadow-md)' : 'none',
        transform: isActive || isHovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🌱</div>
      <h3
        style={{
          fontSize: 'var(--sng-font-size-base)',
          fontWeight: '700',
          color: 'var(--sng-color-text-primary)',
          margin: '0 0 4px 0',
        }}
      >
        기타 씨앗들
      </h3>
      <div
        style={{
          fontSize: 'var(--sng-font-size-xs)',
          color: 'var(--sng-color-text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>Uncategorized</span>
        <span
          style={{
            backgroundColor: isActive
              ? 'var(--sng-color-brand-primary)'
              : 'var(--sng-color-border-default)',
            color: isActive
              ? 'var(--sng-color-text-inverse)'
              : 'var(--sng-color-text-secondary)',
            padding: '2px 8px',
            borderRadius: '999px',
            fontWeight: 600,
          }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}

export function NotesGarden({ initialNotes }: NotesGardenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. 카테고리별 노트 수 계산
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      frontend: 0,
      backend: 0,
      design: 0,
      aiml: 0,
      management: 0,
      cs: 0,
      etc: 0,
    };

    if (initialNotes) {
      initialNotes.forEach((note) => {
        if (note.tags && note.tags.length > 0) {
          const primaryTag =
            note.tags.find((t) => t !== 'concept' && t !== 'reference') ||
            note.tags[0];
          let assigned = false;
          for (const cat of CATEGORIES) {
            if (cat.tags.includes(primaryTag)) {
              counts[cat.id]++;
              assigned = true;
              break;
            }
          }
          if (!assigned) counts.etc++;
        } else {
          counts.etc++;
        }
      });
    }

    return counts;
  }, [initialNotes]);

  // 2. 선택된 카테고리 및 검색어에 따라 노트 필터링
  const filteredNotes = useMemo(() => {
    if (!initialNotes) return [];
    return initialNotes.filter((note) => {
      // 카테고리 필터
      if (selectedCategory) {
        if (selectedCategory === 'etc') {
          const isCategorized = CATEGORIES.some(
            (cat) =>
              note.tags && note.tags.some((tag) => cat.tags.includes(tag))
          );
          if (isCategorized) return false;
        } else {
          const currentCat = CATEGORIES.find((c) => c.id === selectedCategory);
          const hasMatchingTag =
            currentCat &&
            note.tags &&
            note.tags.some((tag) => currentCat.tags.includes(tag));
          if (!hasMatchingTag) return false;
        }
      }

      // 검색어 필터
      if (searchQuery.trim()) {
        const lowerQuery = searchQuery.toLowerCase();
        const matchesTitle =
          note.title && note.title.toLowerCase().includes(lowerQuery);
        const matchesExcerpt =
          note.excerpt && note.excerpt.toLowerCase().includes(lowerQuery);
        const matchesTags =
          note.tags &&
          Array.isArray(note.tags) &&
          note.tags.some(
            (tag) => tag && tag.toLowerCase().includes(lowerQuery)
          );
        return matchesTitle || matchesExcerpt || matchesTags;
      }

      return true;
    });
  }, [initialNotes, selectedCategory, searchQuery]);

  // 상위 30개만 잘라서 렌더링
  const visibleNotes = useMemo(
    () => filteredNotes.slice(0, 30),
    [filteredNotes]
  );

  return (
    <div style={{ marginTop: 'var(--sng-spacing-8)' }}>
      {/* 별자리 카테고리 그리드 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 'var(--sng-spacing-4)',
          marginBottom: 'var(--sng-spacing-10)',
        }}
      >
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            isActive={selectedCategory === cat.id}
            count={categoryCounts[cat.id] || 0}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat.id ? null : cat.id)
            }
          />
        ))}

        <EtcCard
          isActive={selectedCategory === 'etc'}
          count={categoryCounts.etc || 0}
          onClick={() =>
            setSelectedCategory(selectedCategory === 'etc' ? null : 'etc')
          }
        />
      </div>

      {/* 검색 바 & 안내 메시지 */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        style={{
          marginBottom: 'var(--sng-spacing-6)',
          borderBottom: '1px solid var(--sng-color-border-default)',
          paddingBottom: 'var(--sng-spacing-4)',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'var(--sng-font-size-2xl)',
              fontWeight: '600',
              margin: 0,
              color: 'var(--sng-color-text-primary)',
            }}
          >
            {selectedCategory
              ? `${CATEGORIES.find((c) => c.id === selectedCategory)?.nameKo || '기타'} 카테고리의 지식들`
              : '최근 기록된 씨앗들'}
          </h2>
          <p
            style={{
              fontSize: 'var(--sng-font-size-sm)',
              color: 'var(--sng-color-text-muted)',
              margin: '4px 0 0 0',
            }}
          >
            총 {filteredNotes.length}개의 일치하는 지식이 있습니다.
          </p>
        </div>

        <input
          type="text"
          placeholder="제목, 본문, 태그 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px 16px',
            fontSize: 'var(--sng-font-size-sm)',
            borderRadius: 'var(--sng-radius-md)',
            border: '2px solid var(--sng-color-border-default)',
            background: 'var(--sng-color-bg-surface)',
            color: 'var(--sng-color-text-primary)',
            outline: 'none',
            width: '100%',
            maxWidth: '300px',
            transition: 'border-color 0.2s',
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

      {/* 노트 목록 리스트 */}
      {visibleNotes.length === 0 ? (
        <div
          style={{
            padding: 'var(--sng-spacing-16)',
            textAlign: 'center',
            color: 'var(--sng-color-text-muted)',
            fontSize: 'var(--sng-font-size-base)',
            border: '2px dashed var(--sng-color-border-default)',
            borderRadius: 'var(--sng-radius-lg)',
          }}
        >
          일치하는 지식이 발견되지 않았습니다. 필터나 검색어를 변경해 보세요!
        </div>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--sng-spacing-4)',
          }}
        >
          {visibleNotes.map((note) => (
            <li key={note.slug}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
