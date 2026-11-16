'use client';

import {
  TableOfContents as DsTableOfContents,
  useActiveSection,
  type TocItem,
} from '@mindulle/ui';
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

  const items: TocItem[] = headings.map((h) => ({
    id: h.id,
    label: h.text,
    depth: Math.max(0, h.level - 2),
  }));

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
    <DsTableOfContents
      title="Table of Contents"
      items={items}
      activeId={activeId ?? undefined}
      onSelect={handleSelect}
      className={cn(
        'sticky top-24 hidden lg:block max-h-[calc(100vh-8rem)] overflow-y-auto',
        className
      )}
    />
  );
}
