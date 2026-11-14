'use client';
import { Button } from '@mindulle/ui';

import { useState, useMemo } from 'react';
import type React from 'react';
export interface Backlink {
  sourceSlug: string;
  sourceTitle: string;
  excerpt: string;
}

interface BacklinksSectionProps {
  backlinks: Backlink[];
}

const INITIAL_LIMIT = 10;

function BacklinkCard({ link }: { link: Backlink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/notes/${link.sourceSlug}`}
      style={{
        display: 'block',
        padding: 'var(--mds-spacing-4)',
        border: `2px solid ${isHovered ? 'var(--mds-color-brand-primary)' : 'var(--mds-color-border-default)'}`,
        borderRadius: 'var(--mds-radius-md)',
        textDecoration: 'none',
        transition: 'border-color 0.15s, transform 0.15s',
        transform: isHovered ? 'translate(-2px, -2px)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        style={{
          display: 'block',
          fontWeight: '600',
          color: 'var(--mds-color-text-primary)',
          marginBottom: 'var(--mds-spacing-2)',
        }}
      >
        {link.sourceTitle || 'Untitled'}
      </span>
      <span
        style={
          {
            display: '-webkit-box',
            fontSize: 'var(--mds-font-size-sm)',
            color: 'var(--mds-color-text-secondary)',
            lineHeight: '1.5',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          } as React.CSSProperties
        }
      >
        {link.excerpt || ''}
      </span>
    </a>
  );
}

export function BacklinksSection({ backlinks }: BacklinksSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const filteredBacklinks = useMemo(() => {
    if (!searchQuery.trim() || !backlinks) return backlinks || [];
    const lowerQuery = searchQuery.toLowerCase();
    return backlinks.filter(
      (link) =>
        (link?.sourceTitle || '').toLowerCase().includes(lowerQuery) ||
        (link?.excerpt || '').toLowerCase().includes(lowerQuery)
    );
  }, [backlinks, searchQuery]);

  if (!backlinks || backlinks.length === 0) return null;

  const hasMore = filteredBacklinks.length > INITIAL_LIMIT;
  const visibleBacklinks = isExpanded
    ? filteredBacklinks
    : filteredBacklinks.slice(0, INITIAL_LIMIT);

  return (
    <section
      style={{
        marginTop: 'var(--mds-spacing-12)',
        paddingTop: 'var(--mds-spacing-8)',
        borderTop: '2px solid var(--mds-color-border-default)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--mds-spacing-4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3
            style={{
              fontSize: 'var(--mds-font-size-sm)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--mds-color-text-secondary)',
              margin: 0,
            }}
          >
            이 노트를 언급한 곳
          </h3>
          <span
            style={{
              fontSize: 'var(--mds-font-size-xs)',
              fontWeight: '600',
              color: 'var(--mds-color-text-muted)',
              background: 'var(--mds-color-bg-overlay)',
              padding: '2px 8px',
              borderRadius: '999px',
            }}
          >
            {backlinks.length}
          </span>
        </div>

        {backlinks.length > 30 && (
          <input
            type="text"
            placeholder="백링크 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '4px 12px',
              fontSize: 'var(--mds-font-size-sm)',
              borderRadius: 'var(--mds-radius-md)',
              border: `1px solid ${isInputFocused ? 'var(--mds-color-brand-primary)' : 'var(--mds-color-border-default)'}`,
              background: 'var(--mds-color-bg-surface)',
              color: 'var(--mds-color-text-primary)',
              outline: 'none',
              width: '200px',
            }}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        )}
      </div>

      {filteredBacklinks.length === 0 ? (
        <div
          style={{
            padding: 'var(--mds-spacing-8)',
            textAlign: 'center',
            color: 'var(--mds-color-text-muted)',
            fontSize: 'var(--mds-font-size-sm)',
            border: '1px dashed var(--mds-color-border-default)',
            borderRadius: 'var(--mds-radius-md)',
          }}
        >
          검색 결과가 없습니다.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 'var(--mds-spacing-4)',
          }}
        >
          {visibleBacklinks.map((link) => (
            <BacklinkCard key={link.sourceSlug} link={link} />
          ))}
        </div>
      )}

      {hasMore && !isExpanded && (
        <div style={{ marginTop: 'var(--mds-spacing-6)', textAlign: 'center' }}>
          <Button variant="secondary" onClick={() => setIsExpanded(true)}>
            + {filteredBacklinks.length - INITIAL_LIMIT}개의 백링크 더 보기
          </Button>
        </div>
      )}
    </section>
  );
}
