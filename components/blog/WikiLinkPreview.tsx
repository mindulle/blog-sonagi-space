'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface NotePreview {
  title: string;
  excerpt: string;
}

interface Props {
  children: React.ReactNode;
  slug: string;
  href: string;
  fetchNote: (slug: string) => Promise<NotePreview>;
}

export function WikiLinkPreview({ children, slug, href, fetchNote }: Props) {
  const [preview, setPreview] = useState<NotePreview | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleRef = useRef(false);

  // Keep visibleRef in sync with visible state for event closures
  visibleRef.current = visible;

  const loadPreview = useCallback(async () => {
    if (!preview && !loading) {
      setLoading(true);
      try {
        const data = await fetchNote(slug);
        setPreview(data);
      } catch (err) {
        console.error('Failed to fetch preview for slug:', slug, err);
      } finally {
        setLoading(false);
      }
    }
  }, [fetchNote, loading, preview, slug]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
      loadPreview();
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  // Smart Tap (모바일 터치 인터랙션):
  // 1차 탭: 팝오버가 닫혀있으면 기본 이동 방지 후 즉각 팝오버 노출
  // 2차 탭: 팝오버가 이미 열려있을 때 탭하면 정상 링크 이동
  const handleTouchEnd = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (!visibleRef.current) {
      e.preventDefault();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setVisible(true);
      loadPreview();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!visibleRef.current) {
      e.preventDefault();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setVisible(true);
      loadPreview();
    }
  };

  // 외부 영역 클릭/터치 시 팝오버 닫힘
  useEffect(() => {
    if (!visible) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [visible]);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href ?? `/notes/${slug}`}
        data-slug={slug}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        className="font-medium underline decoration-[var(--sng-color-border-subtle)] underline-offset-2 hover:decoration-[var(--sng-color-brand-primary)] transition-colors"
        style={{ color: 'var(--sng-color-brand-primary)' }}
      >
        {children}
      </a>

      {visible && (
        <span
          role="tooltip"
          className="absolute z-[500] bottom-full mb-2 left-1/2 -translate-x-1/2 w-80 p-4 flex flex-col gap-2 rounded-xl pointer-events-none transition-all duration-200"
          style={{
            backgroundColor: 'var(--sng-color-bg-elevated)',
            border: '1px solid var(--sng-color-border-subtle)',
            boxShadow:
              'var(--sng-shadow-raised, 0 8px 24px -4px rgba(0, 0, 0, 0.12))',
          }}
        >
          {loading ? (
            <span
              className="text-sm animate-pulse"
              style={{ color: 'var(--sng-color-text-muted)' }}
            >
              불러오는 중...
            </span>
          ) : preview ? (
            <>
              <div
                className="flex items-center gap-1.5 text-xs font-mono"
                style={{ color: 'var(--sng-color-brand-primary)' }}
              >
                <span>[[{slug}]]</span>
              </div>
              <div
                className="font-semibold text-sm line-clamp-1"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                {preview.title}
              </div>
              {preview.excerpt && (
                <div
                  className="text-xs line-clamp-2 leading-relaxed"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  {preview.excerpt}
                </div>
              )}
            </>
          ) : null}
        </span>
      )}
    </span>
  );
}
