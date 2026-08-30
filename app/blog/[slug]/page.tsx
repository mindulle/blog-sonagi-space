import { getNoteBySlug } from '@/lib/notes';
import { UnifiedDetail } from '@/components/blog/UnifiedDetail';
import backlinksData from '@/lib/generated/backlinks.json';
import { notFound } from 'next/navigation';

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const note = getNoteBySlug(decodedSlug);

  if (!note || !note.published) {
    notFound();
  }

  const backlinks = (backlinksData as Record<string, unknown[]>)[decodedSlug] ?? [];

  return <UnifiedDetail note={note} backlinks={backlinks} isBlogView={true} />;
}
