'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export type Heading = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  headings: Heading[];
  className?: string;
};

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%', threshold: 0.5 }
    );

    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((el) => observer.observe(el));
    return () => headingElements.forEach((el) => observer.unobserve(el));
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className={cn(
        'sticky top-24 hidden lg:block max-h-[calc(100vh-8rem)] overflow-y-auto',
        className
      )}
      aria-label="Table of contents"
    >
      <div className="space-y-2">
        <h3
          className="font-semibold text-sm mb-4"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
          Table of Contents
        </h3>
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className="block py-1 pl-3 border-l-2 transition-colors"
                  style={{
                    color: isActive
                      ? 'var(--sng-color-brand-primary)'
                      : 'var(--sng-color-text-muted)',
                    borderLeftColor: isActive
                      ? 'var(--sng-color-brand-primary)'
                      : 'transparent',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
