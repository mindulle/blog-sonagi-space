'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface NotePreview {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  note: NotePreview | null;
}

/** 포스트 본문을 렌더링하고, .wikilink 요소에 호버 프리뷰를 붙여주는 클라이언트 컴포넌트 */
export function PostContent({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    note: null,
  });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cache = useRef<Map<string, NotePreview>>(new Map());
  const hoveredSlugRef = useRef<string | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (showTimer.current) clearTimeout(showTimer.current);
  }, []);

  const handleMouseEnter = useCallback(
    async (e: MouseEvent, slug: string) => {
      clearTimers();
      hoveredSlugRef.current = slug;

      const target = e.currentTarget as HTMLAnchorElement;

      showTimer.current = setTimeout(async () => {
        let note = cache.current.get(slug);

        if (!note) {
          try {
            if (!cache.current.has('_loaded')) {
              const res = await fetch('/note-summaries.json');
              if (res.ok) {
                const summaries = await res.json();
                for (const [key, val] of Object.entries(summaries)) {
                  cache.current.set(key, val as NotePreview);
                }
                cache.current.set('_loaded', {} as NotePreview);
              }
            }
            note = cache.current.get(slug);
          } catch {
            return;
          }
        }

        // 방어 로직: 데이터를 로딩하는 그 찰나에 유저가 마우스를 치웠거나 다른 링크로 갔다면 무시
        if (!note || hoveredSlugRef.current !== slug) return;

        const rect = target.getBoundingClientRect();
        setTooltip({
          visible: true,
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY + 8,
          note,
        });
      }, 300);
    },
    [clearTimers]
  );

  const handleMouseLeave = useCallback(() => {
    clearTimers();
    hoveredSlugRef.current = null;
    hideTimer.current = setTimeout(() => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }, 200);
  }, [clearTimers]);

  // wikilink 요소에 이벤트 연결
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const links = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('a.wikilink')
    );
    const cleanups: Array<() => void> = [];

    for (const link of links) {
      const slug = link.getAttribute('data-slug') ?? '';
      if (!slug) continue;

      const onEnter = (e: MouseEvent) => handleMouseEnter(e, slug);
      const onLeave = () => handleMouseLeave();

      link.addEventListener('mouseenter', onEnter);
      link.addEventListener('mouseleave', onLeave);

      cleanups.push(() => {
        link.removeEventListener('mouseenter', onEnter);
        link.removeEventListener('mouseleave', onLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [html, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <div
        ref={containerRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* 호버 프리뷰 툴팁 */}
      {tooltip.visible && tooltip.note && (
        <div
          role="tooltip"
          onMouseEnter={clearTimers}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            top: tooltip.y,
            left: tooltip.x,
            zIndex: 9999,
            width: '280px',
            background: 'var(--color-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            boxShadow: '4px 4px 0 var(--color-border)',
            pointerEvents: 'auto',
          }}
        >
          <p
            style={{
              fontWeight: '700',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
            }}
          >
            {tooltip.note.title}
          </p>
          {tooltip.note.excerpt && (
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
              }}
            >
              {tooltip.note.excerpt}
            </p>
          )}
          {tooltip.note.tags.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                marginTop: 'var(--space-3)',
              }}
            >
              {tooltip.note.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    padding: '1px 6px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <a
            href={`/notes/${tooltip.note.slug}`}
            style={{
              display: 'inline-block',
              marginTop: 'var(--space-3)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-brand-primary)',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            노트 전체 보기 →
          </a>
        </div>
      )}
    </>
  );
}
