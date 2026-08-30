import { getNoteBySlug } from '@/lib/notes';
import { UnifiedDetail } from '@/components/blog/UnifiedDetail';
import type { Backlink } from '@/components/blog/BacklinksSection';
import backlinksData from '@/lib/generated/backlinks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const note = getNoteBySlug(decodedSlug);

  if (!note) {
    return { title: 'Not Found' };
  }

  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const note = getNoteBySlug(decodedSlug);

  if (!note) {
    return <div>Not found</div>;
  }

  const backlinks =
    (backlinksData as Record<string, Backlink[]>)[decodedSlug] ?? [];

  return <UnifiedDetail note={note} backlinks={backlinks} />;
}
