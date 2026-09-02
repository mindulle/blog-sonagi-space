/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { HoverPreview } from '@mindulle/ui';

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
      {children as any}
    </HoverPreview>
  );
}
