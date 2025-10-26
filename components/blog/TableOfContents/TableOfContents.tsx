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
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: 0.5,
      }
    );

    const headingElements = headings.map(({ id }) => 
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        'sticky top-24 hidden lg:block',
        'max-h-[calc(100vh-8rem)] overflow-y-auto',
        className
      )}
      aria-label="Table of contents"
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-neutral-100">
          Table of Contents
        </h3>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={cn(
                  'block py-1 transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                  'border-l-2',
                  activeId === heading.id
                    ? 'text-primary-600 dark:text-primary-400 font-medium border-primary-600 dark:border-primary-400 pl-3'
                    : 'text-neutral-600 dark:text-neutral-400 border-transparent pl-3'
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
