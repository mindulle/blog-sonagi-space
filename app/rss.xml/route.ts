import RSS from 'rss';
import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const baseUrl = 'https://blog.sonagi.space';
  const posts = getAllPosts();

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

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      date: post.date || new Date(),
      author: post.author?.name || 'Sonagi',
      categories: [post.category, ...post.tags],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
