'use client';

import type React from 'react';

interface Backlink {
  sourceSlug: string;
  sourceTitle: string;
  excerpt: string;
}

interface BacklinksSectionProps {
  backlinks: Backlink[];
}

export function BacklinksSection({ backlinks }: BacklinksSectionProps) {
  if (backlinks.length === 0) return null;

  return (
    <section
      style={{
        marginTop: 'var(--space-12)',
        paddingTop: 'var(--space-8)',
        borderTop: '2px solid var(--color-border)',
      }}
    >
      <h3
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-4)',
        }}
      >
        이 노트를 언급한 곳
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {backlinks.map((link) => (
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
              style={{
                display: '-webkit-box',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.5',
                overflow: 'hidden',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              } as React.CSSProperties}
            >
              {link.excerpt}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
