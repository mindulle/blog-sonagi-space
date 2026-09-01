'use client';
import { Button } from '@mindulle/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Logo } from '@/components/ui/Logo';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Garden', href: '/notes' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-200"
      style={{
        backgroundColor:
          'color-mix(in srgb, var(--sng-color-bg-surface) 80%, transparent)',
        borderBottom:
          'var(--sng-border-thin) solid var(--sng-color-border-default)',
      }}
    >
      {/* Desktop: px-8 (32px), Mobile: px-4 (16px) */}
      <div className="mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80 text-[var(--sng-color-text-primary)]"
          >
            <Logo height={28} />
          </Link>

          <div className="flex items-center gap-12 md:gap-12">
            {/* Navigation (Desktop Only) - gap-8 (32px) */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium transition-colors hover:opacity-80"
                  style={{
                    color:
                      pathname === item.href ||
                      (pathname?.startsWith(item.href) && item.href !== '/')
                        ? 'var(--sng-color-text-primary)'
                        : 'var(--sng-color-text-muted)',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions - gap-4 (16px) */}
            <div className="flex items-center gap-4">
              <Link href="/search">
                <Button
                  variant="secondary"
                  aria-label="Search"
                  className="!p-2 text-[var(--sng-color-icon-muted)] hover:text-[var(--sng-color-text-primary)] bg-transparent border-transparent"
                >
                  <Search size={20} />
                </Button>
              </Link>
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <Button
                variant="secondary"
                aria-label="Menu"
                className="md:hidden !p-2 text-[var(--sng-color-icon-muted)] hover:text-[var(--sng-color-text-primary)] bg-transparent border-transparent"
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
