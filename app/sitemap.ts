// app/sitemap.ts
import { getAllPosts } from '@/lib/mdx';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 사이트 기본 URL - GoDaddy 도메인 사용
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  // 모든 블로그 포스트 가져오기
  const posts = await getAllPosts();

  // 블로그 포스트 URL 생성
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 카테고리 추출 (중복 제거)
  const categories = [...new Set(posts.map((post) => post.category))];
  
  // 카테고리 페이지
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 정적 페이지
  const routes = ['', '/blog', '/about', '/projects', '/search'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  // 모든 URL 합치기
  return [...routes, ...blogPosts, ...categoryPages];
}