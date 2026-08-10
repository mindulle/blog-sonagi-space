'use client';
import { HoverPreview } from '@sonagi/ui';

import type { NotePreview } from '@sonagi/ui';

interface Props {
  children: React.ReactNode;
  slug: string;
  href: string;
  fetchNote: (slug: string) => Promise<NotePreview>;
}

export function WikiLinkPreview({ children, slug, href, fetchNote }: Props) {
  return (
    <HoverPreview slug={slug} href={href} fetchNote={fetchNote}>
      {children}
    </HoverPreview>
  );
}
