import Link from 'next/link';
import { Rss } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--mds-color-bg-overlay)',
        borderColor: 'var(--mds-color-border-default)',
      }}
    >
      <Container>
        <div className="py-8 flex flex-col gap-5">
          {/* 상단 콜로폰: 브랜드 + 유틸리티 인라인 링크 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <Link
                href="/"
                aria-label="MINDULLE GARDEN 홈"
                className="inline-flex items-center transition-opacity hover:opacity-80 text-[var(--mds-color-text-primary)]"
              >
                <Logo height={22} />
              </Link>
              <span className="hidden sm:inline text-[var(--mds-color-border-default)]" aria-hidden="true">
                |
              </span>
              <p className="text-xs text-[var(--mds-color-text-secondary)]">
                민들레 디자인 시스템(MDS)으로 조판한 메이커의 열린 신문 지면입니다.
              </p>
            </div>

            <nav
              aria-label="푸터 유틸리티 링크"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider"
            >
              <a
                href="/rss.xml"
                className="inline-flex items-center gap-1.5 transition-colors text-[var(--mds-color-text-secondary)] hover:text-[var(--mds-color-brand-primary)]"
              >
                <Rss className="w-3.5 h-3.5" aria-hidden="true" />
                <span>RSS</span>
              </a>
              <a
                href="https://design.sonagi.space"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="민들레 디자인 시스템 (새 창으로 열림)"
                className="transition-colors text-[var(--mds-color-text-secondary)] hover:text-[var(--mds-color-brand-primary)]"
              >
                Design System
              </a>
              <Link
                href="/privacy"
                className="transition-colors text-[var(--mds-color-text-secondary)] hover:text-[var(--mds-color-brand-primary)]"
              >
                Privacy
              </Link>
            </nav>
          </div>

          {/* 하단 판권 바 */}
          <div
            className="pt-4 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-[var(--mds-color-text-muted)]"
            style={{ borderColor: 'var(--mds-color-border-subtle)' }}
          >
            <p>© {currentYear} MINDULLE GARDEN. All rights reserved.</p>
            <p>
              Typeset with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[var(--mds-color-text-secondary)]"
              >
                Next.js
              </a>{' '}
              &amp;{' '}
              <a
                href="https://design.sonagi.space"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="민들레 디자인 시스템 (새 창으로 열림)"
                className="hover:underline text-[var(--mds-color-brand-primary)]"
              >
                MDS v0.1.0
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
