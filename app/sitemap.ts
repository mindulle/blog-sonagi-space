import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { getAllNotes } from '@/lib/notes';

const baseUrl = 'https://blog.sonagi.space';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static routes
  const routes = ['', '/blog', '/notes', '/about', '/search'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Blog posts
  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date
      ? new Date(post.date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Wiki notes
  const notes = getAllNotes().map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: note.created
      ? new Date(note.created).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...posts, ...notes];
}
