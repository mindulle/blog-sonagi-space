'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import { TableOfContents, type Heading } from './TableOfContents';

/**
 * 모바일 전용 목차.
 * 데스크탑에서는 우측 사이드바가 목차를 담당하므로 lg 이상에서 숨긴다.
 */
export function MobileTOC({ headings }: { headings: Heading[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (headings.length === 0) return null;

  return (
    <div className="lg:hidden">
      <Button
        variant="secondary"
        onClick={() => setIsOpen(true)}
        aria-label="목차 열기"
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 w-14 h-14 p-0 rounded-full"
        style={{
          zIndex: 'var(--sng-z-sticky)',
          boxShadow: 'var(--sng-shadow-floating)',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </Button>

      {isOpen && (
        <div
          role="presentation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 flex flex-col justify-end"
          style={{
            zIndex: 'var(--sng-z-modal)',
            backgroundColor:
              'color-mix(in srgb, var(--sng-color-text-primary) 45%, transparent)',
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="목차"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-h-[70vh] overflow-y-auto p-6 rounded-t-[var(--sng-radius-xl)]"
            style={{
              backgroundColor: 'var(--sng-color-bg-surface)',
              boxShadow: 'var(--sng-shadow-floating)',
            }}
          >
            <div
              className="flex items-center justify-between pb-4 mb-6 border-b"
              style={{ borderColor: 'var(--sng-color-border-subtle)' }}
            >
              <h3
                className="text-lg font-bold"
                style={{ color: 'var(--sng-color-text-primary)' }}
              >
                목차
              </h3>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="목차 닫기"
              >
                ✕
              </Button>
            </div>

            {/* TableOfContents 는 데스크탑 기준으로 sticky/hidden 이므로 모바일에서 해제 */}
            <TableOfContents
              headings={headings}
              className="!static !block !max-h-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
