import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-2xl">💧</span>
            <span>소나기</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/blog"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/projects"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/about"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* 액션 버튼들 */}
          <div className="flex items-center space-x-2">
            {/* 검색 버튼 */}
            <Button
              variant="ghost"
              size="small"
              aria-label="Search"
              className="w-10 h-10"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* 테마 토글 */}
            <ThemeToggle />

            {/* 모바일 메뉴 버튼 (나중에 추가) */}
            {/* <MobileMenuButton /> */}
          </div>
        </div>
      </Container>
    </header>
  );
}
