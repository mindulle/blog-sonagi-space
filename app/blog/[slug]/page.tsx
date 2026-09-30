import { getNoteBySlug } from '@/lib/notes';
import { UnifiedDetail } from '@/components/blog/UnifiedDetail';
import type { Backlink } from '@/components/blog/BacklinksSection';
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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.sonagi.space';

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.publishedDate || note.created,
      url: `${siteUrl}/blog/${note.slug}`,
      images: [
        {
          url: note.coverImage
            ? `${siteUrl}${note.coverImage}`
            : `${siteUrl}/og-image.png`,
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
      images: [
        note.coverImage
          ? `${siteUrl}${note.coverImage}`
          : `${siteUrl}/og-image.png`,
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const note = getNoteBySlug(decodedSlug);

  if (!note || !note.published) {
    notFound();
  }

  const backlinks: Backlink[] =
    (backlinksData as Record<string, Backlink[]>)[decodedSlug] || [];

  return <UnifiedDetail note={note} backlinks={backlinks} isBlogView={true} />;
}
