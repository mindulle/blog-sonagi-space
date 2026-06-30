'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';

import { Logo } from '@/components/ui/Logo';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Design', href: '/design-system' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor:
          'color-mix(in srgb, var(--color-bg-surface) 80%, transparent)',
        borderBottom: 'var(--border-thin) solid var(--color-border-default)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80 text-[var(--color-text-primary)]"
          >
            <Logo height={28} />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color:
                    pathname === item.href
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
