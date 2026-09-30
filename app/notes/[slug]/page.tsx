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
    alternates: {
      canonical: `${siteUrl}/blog/${note.slug}`, // SEO 중복 방지: blog 경로를 원본으로 지정
    },
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.publishedDate || note.created,
      url: `${siteUrl}/notes/${note.slug}`,
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

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const note = getNoteBySlug(decodedSlug);

  if (!note) {
    return <div>Not found</div>;
  }

  const backlinks: Backlink[] =
    (backlinksData as Record<string, Backlink[]>)[decodedSlug] || [];

  return <UnifiedDetail note={note} backlinks={backlinks} />;
}
