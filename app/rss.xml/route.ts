import RSS from 'rss';
import { getAllNotes } from '@/lib/notes';

export async function GET() {
  const baseUrl = 'https://blog.sonagi.space';
  const notes = getAllNotes().filter((n) => n.published);

  const feed = new RSS({
    title: '소나기 블로그',
    description:
      '웹 개발과 디자인 시스템, 그리고 기술적인 통찰력을 공유하는 소나기 블로그입니다.',
    site_url: baseUrl,
    feed_url: `${baseUrl}/rss.xml`,
    language: 'ko-KR',
    image_url: `${baseUrl}/og-image.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Sonagi`,
  });

  notes.forEach((note) => {
    feed.item({
      title: note.title,
      description: note.excerpt || '',
      url: `${baseUrl}/blog/${note.slug}`,
      date: note.publishedDate || note.created || new Date(),
      author: 'Sonagi',
      categories: [note.category, ...(note.tags || [])].filter(
        Boolean
      ) as string[],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
