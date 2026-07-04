'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const fetchPromise = useRef<Promise<void> | null>(null);
  const hoveredSlugRef = useRef<string | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (showTimer.current) clearTimeout(showTimer.current);
  }, []);

  const handleMouseEnter = useCallback(
    async (e: MouseEvent | Event, slug: string, isMobileTap = false) => {
      clearTimers();

      // 다른 링크로 마우스가 이동했을 때만 기존 툴팁 숨김 (같은 링크 재진입 시 유지)
      setTooltip((prev) => {
        if (prev.visible && prev.note?.slug !== slug) {
          return { ...prev, visible: false };
        }
        return prev;
      });

      hoveredSlugRef.current = slug;
      const target = e.currentTarget as HTMLAnchorElement;

      // 모바일 터치면 즉시, 데스크톱 호버면 400ms 딜레이 (위키피디아 스타일)
      const delay = isMobileTap ? 0 : 400;

      showTimer.current = setTimeout(async () => {
        let note = cache.current.get(slug);

        if (!note) {
          try {
            if (!cache.current.has('_loaded')) {
              if (!fetchPromise.current) {
                fetchPromise.current = fetch('/note-summaries.json')
                  .then(async (res) => {
                    if (res.ok) {
                      const summaries = await res.json();
                      for (const [key, val] of Object.entries(summaries)) {
                        cache.current.set(key, val as NotePreview);
                      }
                      cache.current.set('_loaded', {} as NotePreview);
                    } else {
                      fetchPromise.current = null;
                    }
                  })
                  .catch((err) => {
                    fetchPromise.current = null;
                    throw err;
                  });
              }
              await fetchPromise.current;
            }
            note = cache.current.get(slug);
          } catch (err) {
            console.error('Failed to fetch note-summaries.json:', err);
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
      }, delay);
    },
    [clearTimers]
  );

  const handleMouseLeave = useCallback(() => {
    clearTimers();
    hoveredSlugRef.current = null;
    hideTimer.current = setTimeout(() => {
      setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
    }, 200); // 마우스가 툴팁으로 넘어갈 수 있도록 200ms 여유
  }, [clearTimers]);

  // 바깥쪽 클릭 시 툴팁 닫기 (모바일 대응)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('[role="tooltip"]') &&
        !target.closest('a.wikilink')
      ) {
        setTooltip((prev) =>
          prev.visible ? { ...prev, visible: false } : prev
        );
        hoveredSlugRef.current = null;
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

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

      const onEnter = (e: MouseEvent) => handleMouseEnter(e, slug, false);
      const onLeave = () => handleMouseLeave();
      const onClick = (e: MouseEvent) => {
        // 모바일(터치 디바이스) 감지
        const isTouchDevice = window.matchMedia(
          '(hover: none) and (pointer: coarse)'
        ).matches;
        if (isTouchDevice) {
          // DOM을 직접 조회하여 현재 이 링크의 팝오버가 떠 있는지 확인 (React 상태 클로저 문제 우회)
          const tooltipEl = document.querySelector('[role="tooltip"]');
          const isTooltipForThisLink =
            tooltipEl && tooltipEl.querySelector(`a[href="/notes/${slug}"]`);

          if (!isTooltipForThisLink) {
            // 첫 번째 터치: 링크 이동을 막고 팝오버를 즉시 띄움
            e.preventDefault();
            handleMouseEnter(e, slug, true);
          }
          // 두 번째 터치(이미 팝오버가 떠 있는 상태): 자연스럽게 링크 이동 허용
        }
      };

      link.addEventListener('mouseenter', onEnter);
      link.addEventListener('mouseleave', onLeave);
      link.addEventListener('click', onClick);

      cleanups.push(() => {
        link.removeEventListener('mouseenter', onEnter);
        link.removeEventListener('mouseleave', onLeave);
        link.removeEventListener('click', onClick);
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

      {/* 호버 프리뷰 툴팁 (Portal + Framer Motion) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {tooltip.visible && tooltip.note && (
              <motion.div
                role="tooltip"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onMouseEnter={clearTimers}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: 'absolute',
                  top: tooltip.y,
                  left: tooltip.x,
                  zIndex: 99999,
                  width: '280px',
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-4)',
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                  pointerEvents: 'auto',
                  // 뷰포트를 벗어나지 않도록 방어하는 간단한 트릭 (화면 우측 끝일 경우 좌측으로 이동)
                  transform: `translateX(min(0px, calc(100vw - ${tooltip.x + 300}px)))`,
                }}
              >
                <p
                  style={{
                    fontWeight: '700',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-2)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: '1.4',
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
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
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
                    {tooltip.note.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '10px',
                          padding: '2px 8px',
                          background: 'var(--color-bg-subtle)',
                          border: '1px solid var(--color-border-default)',
                          borderRadius: '9999px',
                          color: 'var(--color-text-secondary)',
                          fontWeight: '500',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                    {tooltip.note.tags.length > 3 && (
                      <span
                        style={{
                          fontSize: '10px',
                          color: 'var(--color-text-muted)',
                          padding: '2px 4px',
                        }}
                      >
                        +{tooltip.note.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
                <div
                  style={{
                    marginTop: 'var(--space-3)',
                    borderTop: '1px solid var(--color-border-default)',
                    paddingTop: 'var(--space-3)',
                  }}
                >
                  <a
                    href={`/notes/${tooltip.note.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-brand-primary)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-text-primary)')
                    }
                  >
                    문서 깊이 읽기 <span style={{ marginLeft: '4px' }}>→</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
