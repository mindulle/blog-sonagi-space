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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.sonagi.space';

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.created,
      url: `${siteUrl}/notes/${note.slug}`,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.excerpt,
      images: [`${siteUrl}/og-image.png`],
    },
  };
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
