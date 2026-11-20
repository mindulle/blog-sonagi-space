'use client';

import { useState } from 'react';
import { Button, MobileHeader, TopBar } from '@mindulle/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Logo } from '@/components/ui/Logo';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Garden', href: '/notes' },
  { name: 'Series', href: '/series' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

const translucentSurfaceStyle = {
  backgroundColor:
    'color-mix(in srgb, var(--mds-color-bg-surface) 96%, transparent)',
  borderBottom:
    'var(--mds-border-thin) solid var(--mds-color-border-default)',
};

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLabel = isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기';

  const isRouteActive = (href: string) =>
    pathname === href || (pathname?.startsWith(href) && href !== '/');

  const brand = (
    <Link
      href="/"
      onClick={() => setIsMobileMenuOpen(false)}
      className="flex items-center transition-opacity hover:opacity-80 text-[var(--mds-color-text-primary)]"
    >
      <Logo height={28} />
    </Link>
  );

  const actions = (
    <div className="flex items-center gap-2">
      <Link href="/search" onClick={() => setIsMobileMenuOpen(false)}>
        <Button
          variant="secondary"
          aria-label="Search"
          className="!p-2 text-[var(--mds-color-icon-muted)] hover:text-[var(--mds-color-text-primary)] bg-transparent border-transparent"
        >
          <Search size={20} />
        </Button>
      </Link>
      <ThemeToggle />
    </div>
  );

  const desktopNav = (
    <>
      {navigation.map((item) => {
        const isActive = isRouteActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className="text-[15px] font-medium transition-colors hover:opacity-80"
            style={{
              color: isActive
                ? 'var(--mds-color-text-primary)'
                : 'var(--mds-color-text-muted)',
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      <TopBar
        sticky
        brand={brand}
        nav={desktopNav}
        actions={actions}
        className="!hidden md:!flex z-50 transition-colors duration-200"
        style={translucentSurfaceStyle}
      />

      <div className="md:hidden sticky top-0 z-50 w-full">
        <MobileHeader
          title={brand}
          onMenuClick={() => setIsMobileMenuOpen((prev) => !prev)}
          menuLabel={menuLabel}
          menuExpanded={isMobileMenuOpen}
          actions={actions}
          className="backdrop-blur-md transition-colors duration-200"
          style={translucentSurfaceStyle}
        />

        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 w-full backdrop-blur-xl"
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--mds-color-bg-surface) 95%, transparent)',
              borderBottom:
                'var(--mds-border-thin) solid var(--mds-color-border-default)',
              boxShadow: 'var(--mds-shadow-sm)',
            }}
          >
            <nav className="flex flex-col py-4 px-6 gap-2" aria-label="모바일 메뉴">
              {navigation.map((item) => {
                const isActive = isRouteActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium transition-colors p-3 rounded-lg"
                    style={{
                      color: isActive
                        ? 'var(--mds-color-text-primary)'
                        : 'var(--mds-color-text-secondary)',
                      backgroundColor: isActive
                        ? 'var(--mds-color-bg-elevated)'
                        : 'transparent',
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
