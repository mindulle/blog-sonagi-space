import { MetadataRoute } from 'next';
import { getAllNotes } from '@/lib/notes';
import { getAllSeries } from '@/lib/series';

const baseUrl = 'https://blog.sonagi.space';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static routes
  const routes = ['', '/blog', '/series', '/about', '/search'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Blog posts (Wiki notes promoted to blog)
  const posts = getAllNotes()
    .filter((note) => note.published)
    .map((note) => ({
      url: `${baseUrl}/blog/${note.slug}`,
      lastModified: note.publishedDate
        ? new Date(note.publishedDate).toISOString().split('T')[0]
        : note.created
          ? new Date(note.created).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // 3. Series
  const series = getAllSeries().map((s) => ({
    url: `${baseUrl}/series/${encodeURIComponent(s.series)}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...posts, ...series];
}
