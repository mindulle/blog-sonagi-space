import Link from 'next/link';
import { Github, Twitter, Rss, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 & 설명 */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 font-bold text-lg text-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span className="text-xl">💧</span>
              <span>소나기 블로그</span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Next.js와 소나기 디자인 시스템으로 만든 개인 블로그입니다.
            </p>
          </div>

          {/* 네비게이션 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 링크 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="/feed.xml"
                aria-label="RSS Feed"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Rss className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="py-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} 소나기 블로그. All rights reserved.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built with{' '}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Next.js
              </a>
              {' '}and{' '}
              <span className="text-primary-600 dark:text-primary-400">
                소나기 Design System
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
