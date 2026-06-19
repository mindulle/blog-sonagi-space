import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.sonagi.space';
  const posts = await getAllPosts();

  const feed = `<?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0">
    <channel>
      <title>소나기 블로그</title>
      <link>${baseUrl}</link>
      <description>Next.js와 소나기 디자인 시스템으로 만든 기술 블로그</description>
      <language>ko</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${posts
        .map(
          (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid>${baseUrl}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>`
        )
        .join('')}
    </channel>
  </rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
