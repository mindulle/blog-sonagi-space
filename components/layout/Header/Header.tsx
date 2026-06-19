'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Design', href: '/design-system' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-bg-surface) 80%, transparent)',
        borderBottom: 'var(--border-thin) solid var(--color-border-default)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <svg
              width="32" height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              <path
                d="M8 6C8 6 12 2 16 2C20 2 24 6 24 6C24 6 28 10 28 14C28 18 24 22 24 22C24 22 20 26 16 26C12 26 8 22 8 22C8 22 4 18 4 14C4 10 8 6 8 6Z"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M16 10V18M12 14H20"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              />
            </svg>
            <span>Sonagi</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: pathname === item.href
                    ? 'var(--color-brand-primary)'
                    : 'var(--color-text-secondary)',
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link href="/search">
              <Button variant="ghost" size="small" aria-label="Search">
                <Search size={20} />
              </Button>
            </Link>
            <ThemeToggle />
          </div>

        </div>
      </div>
    </header>
  );
}
