'use client';

import { useState } from 'react';
import type React from 'react';

interface Backlink {
  sourceSlug: string;
  sourceTitle: string;
  excerpt: string;
}

interface BacklinksSectionProps {
  backlinks: Backlink[];
}

const INITIAL_LIMIT = 6;

export function BacklinksSection({ backlinks }: BacklinksSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (backlinks.length === 0) return null;

  const hasMore = backlinks.length > INITIAL_LIMIT;
  const visibleBacklinks = isExpanded
    ? backlinks
    : backlinks.slice(0, INITIAL_LIMIT);

  return (
    <section
      style={{
        marginTop: 'var(--space-12)',
        paddingTop: 'var(--space-8)',
        borderTop: '2px solid var(--color-border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: 'var(--space-4)',
        }}
      >
        <h3
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}
        >
          이 노트를 언급한 곳
        </h3>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: '600',
            color: 'var(--color-text-muted)',
            background: 'var(--color-bg-subtle)',
            padding: '2px 8px',
            borderRadius: '999px',
          }}
        >
          {backlinks.length}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {visibleBacklinks.map((link) => (
          <a
            key={link.sourceSlug}
            href={`/notes/${link.sourceSlug}`}
            style={{
              display: 'block',
              padding: 'var(--space-4)',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              transition: 'border-color 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                'var(--color-brand-primary)';
              (e.currentTarget as HTMLElement).style.transform =
                'translate(-2px, -2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                'var(--color-border)';
              (e.currentTarget as HTMLElement).style.transform = 'none';
            }}
          >
            <span
              style={{
                display: 'block',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              {link.sourceTitle}
            </span>
            <span
              style={
                {
                  display: '-webkit-box',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  overflow: 'hidden',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                } as React.CSSProperties
              }
            >
              {link.excerpt}
            </span>
          </a>
        ))}
      </div>

      {hasMore && !isExpanded && (
        <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
          <button
            onClick={() => setIsExpanded(true)}
            style={{
              background: 'transparent',
              border: '2px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              fontWeight: '600',
              fontSize: 'var(--text-sm)',
              padding: 'var(--space-2) var(--space-6)',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                'var(--color-brand-primary)';
              (e.currentTarget as HTMLElement).style.color =
                'var(--color-brand-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                'var(--color-border)';
              (e.currentTarget as HTMLElement).style.color =
                'var(--color-text-secondary)';
            }}
          >
            +{backlinks.length - INITIAL_LIMIT}개의 백링크 더 보기
          </button>
        </div>
      )}
    </section>
  );
}
