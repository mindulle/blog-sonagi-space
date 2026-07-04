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

// 화면 크기에 따른 툴팁 위치 조정 (순수 함수 분리)
const adjustTooltipPosition = (x: number, y: number) => {
  if (typeof window === 'undefined') return { x, y };
  const tooltipWidth = 280;
  const padding = 16;
  let adjustedX = x;

  // 오른쪽 화면 밖으로 넘어가는 경우
  if (x + tooltipWidth > window.innerWidth - padding) {
    adjustedX = window.innerWidth - tooltipWidth - padding;
  }

  // 왼쪽 화면 밖으로 넘어가는 경우
  if (adjustedX < padding) {
    adjustedX = padding;
  }

  return { x: adjustedX, y };
};

/** 포스트 본문을 렌더링하고, .wikilink 요소에 하이브리드 UX 호버 팝오버를 붙여주는 클라이언트 컴포넌트 */
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
  const tooltipVisibleRef = useRef(false);

  // 모바일(터치) 환경 판별
  const checkIsTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  };

  const clearTimers = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    async (e: MouseEvent, slug: string) => {
      if (checkIsTouchDevice()) return;

      clearTimers();

      // 잔상 방지: 이전 툴팁 즉시 닫기
      if (hoveredSlugRef.current !== null && hoveredSlugRef.current !== slug) {
        setTooltip((prev) => ({ ...prev, visible: false }));
      }

      hoveredSlugRef.current = slug;

      // 다른 링크로 마우스가 이동했을 때만 기존 툴팁 숨김 (같은 링크 재진입 시 유지)
      setTooltip((prev) => {
        if (prev.visible && prev.note?.slug !== slug) {
          return { ...prev, visible: false };
        }
        return prev;
      });

      const target = e.currentTarget as HTMLAnchorElement;

      // 400ms 지연 표시
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

        // 방어 로직: 데이터를 로딩하는 그 찰나에 마우스를 치웠다면 무시
        if (!note || hoveredSlugRef.current !== slug) return;

        const rect = target.getBoundingClientRect();
        const { x, y } = adjustTooltipPosition(
          rect.left + window.scrollX,
          rect.bottom + window.scrollY + 8
        );

        setTooltip({
          visible: true,
          x,
          y,
          note,
        });
      }, 400);
    },
    [clearTimers]
  );

  const handleMouseLeave = useCallback(
    (e?: MouseEvent) => {
      if (checkIsTouchDevice()) return;

      clearTimers();
      hoveredSlugRef.current = null;
      hideTimer.current = setTimeout(() => {
        setTooltip((prev) =>
          prev.visible ? { ...prev, visible: false } : prev
        );
      }, 200); // 마우스가 툴팁으로 넘어갈 수 있도록 200ms 여유
    },
    [clearTimers]
  );

  // 모바일/터치 환경: 첫 터치 시 팝업, 두 번째 터치 시 이동 (스마트 클릭)
  const handleClick = useCallback(
    async (e: MouseEvent, slug: string) => {
      // 터치 디바이스가 아니면 기본 이동 수행
      if (!checkIsTouchDevice()) return;

      const target = e.currentTarget as HTMLAnchorElement;

      // 이미 이 링크의 툴팁이 열려있다면 링크 이동을 허용
      if (tooltipVisibleRef.current && hoveredSlugRef.current === slug) {
        return;
      }

      // 툴팁이 안 열려있거나, 다른 툴팁이 열려있다면 링크 이동을 막고 해당 툴팁을 염
      e.preventDefault();
      clearTimers();

      hoveredSlugRef.current = slug;

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

      if (!note || hoveredSlugRef.current !== slug) return;

      const rect = target.getBoundingClientRect();
      const { x, y } = adjustTooltipPosition(
        rect.left + window.scrollX,
        rect.bottom + window.scrollY + 8
      );

      setTooltip({
        visible: true,
        x,
        y,
        note,
      });
    },
    [clearTimers]
  );

  // 문서의 다른 곳을 터치/클릭하면 툴팁 닫기
  useEffect(() => {
    tooltipVisibleRef.current = tooltip.visible;
    const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
      if (tooltip.visible) {
        const target = e.target as HTMLElement;
        // 툴팁 내부나 위키링크 클릭이 아니면 닫음
        if (
          !target.closest('[role="tooltip"]') &&
          !target.closest('.wikilink')
        ) {
          setTooltip((prev) => ({ ...prev, visible: false }));
          hoveredSlugRef.current = null;
        }
      }
    };

    // touchstart로 해야 터치 디바이스에서 더 빠르게 반응함
    document.addEventListener('touchstart', handleDocumentClick);
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('touchstart', handleDocumentClick);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [tooltip.visible]);

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

      const onEnter = (e: Event) =>
        handleMouseEnter(e as unknown as MouseEvent, slug);
      const onLeave = (e: Event) =>
        handleMouseLeave(e as unknown as MouseEvent);
      const onClick = (e: Event) =>
        handleClick(e as unknown as MouseEvent, slug);

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
  }, [html, handleMouseEnter, handleMouseLeave, handleClick]);

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
                key={tooltip.note.slug}
                role="tooltip"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onMouseEnter={clearTimers}
                onMouseLeave={() => {
                  if (!checkIsTouchDevice()) {
                    handleMouseLeave();
                  }
                }}
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
