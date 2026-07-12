import Link from 'next/link';
import { Github, Twitter, Rss, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--sng-color-bg-overlay)',
        borderColor: 'var(--sng-color-border-default)',
      }}
    >
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 & 설명 */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-lg transition-colors text-[var(--sng-color-text-primary)] hover:text-[var(--sng-color-brand-primary)]"
            >
              <Logo height={24} />
            </Link>
            <p className="text-sm text-[var(--sng-color-text-secondary)]">
              Next.js와 소나기 디자인 시스템으로 만든 개인 블로그입니다.
            </p>
          </div>

          {/* 네비게이션 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-[var(--sng-color-text-primary)]">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://design.sonagi.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
                >
                  Design System
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-[var(--sng-color-text-primary)]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="/feed.xml"
                aria-label="RSS Feed"
                className="transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
              >
                <Rss className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="transition-colors text-[var(--sng-color-text-secondary)] hover:text-[var(--sng-color-brand-primary)]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div
          className="py-6 border-t"
          style={{ borderColor: 'var(--sng-color-border-default)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-[var(--sng-color-text-secondary)]">
              © {currentYear} 소나기 블로그. All rights reserved.
            </p>
            <p className="text-sm text-[var(--sng-color-text-secondary)]">
              Built with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[var(--sng-color-brand-primary)]"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://design.sonagi.space"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[var(--sng-color-brand-primary)]"
              >
                소나기 Design System
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
