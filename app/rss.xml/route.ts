import RSS from 'rss';
import { getAllNotes } from '@/lib/notes';

export async function GET() {
  const baseUrl = 'https://blog.sonagi.space';
  const notes = getAllNotes().filter((n) => n.published);

  const feed = new RSS({
    title: '소나기 블로그 & 디지털 정원',
    description:
      '웹 개발, 디자인 시스템(MDS), 그리고 디지털 정원사의 생각을 기록하는 소나기 스페이스입니다.',
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
