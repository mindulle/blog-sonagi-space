'use client';
import { HoverPreview } from '@sonagi/ui';

interface NotePreview {
  title: string;
  excerpt: string;
}

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
