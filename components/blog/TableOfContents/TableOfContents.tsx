'use client';

import { useActiveSection } from '@mindulle/ui';
import { cn } from '@/lib/utils';

export type Heading = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  headings: Heading[];
  className?: string;
  onSelect?: (id: string) => void;
};

export function TableOfContents({
  headings,
  className,
  onSelect,
}: TableOfContentsProps) {
  const ids = headings.map((h) => h.id);
  const activeId = useActiveSection(ids);

  if (headings.length === 0) return null;

  const handleSelect = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    onSelect?.(id);
  };

  return (
    <nav aria-label="목차" className={cn('py-1', className)}>
      <ol className="divide-y" style={{ borderColor: 'var(--mds-color-border-subtle)' }}>
        {headings.map((h, idx) => {
          const isActive = activeId === h.id;
          const depth = Math.max(0, h.level - 2);
          return (
            <li
              key={h.id}
              style={{
                borderColor: 'var(--mds-color-border-subtle)',
                paddingLeft: depth > 0 ? `${depth * 14}px` : undefined,
              }}
            >
              <button
                type="button"
                onClick={() => handleSelect(h.id)}
                className={cn(
                  'w-full text-left flex items-baseline gap-3 py-2 px-2 transition-colors rounded-none text-sm',
                  isActive && 'border-l-2 font-semibold'
                )}
                style={{
                  color: isActive
                    ? 'var(--mds-color-brand-primary)'
                    : 'var(--mds-color-text-secondary)',
                  borderLeftColor: isActive
                    ? 'var(--mds-color-brand-primary)'
                    : 'transparent',
                }}
              >
                <span className="font-mono text-xs tabular-nums shrink-0 opacity-75">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="leading-snug">{h.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
