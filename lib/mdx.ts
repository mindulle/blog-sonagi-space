import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import type { Post } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Calculate reading time based on word count
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Add IDs to headings for anchor links and TOC
 */
function addHeadingIds(html: string): string {
  return html.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (match, level, content) => {
      const text = content.replace(/<[^>]*>/g, '');
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-');
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );
}

/**
 * Get all blog posts
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || 'essay',
        tags: data.tags || [],
        coverImage: data.coverImage,
        author: data.author,
        draft: data.draft || false,
        featured: data.featured || false,
        readingTime: calculateReadingTime(content),
      } as Post;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      return -1;
    });

  return allPostsData;
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): (Post & { content: string }) | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .processSync(content);

    let htmlContent = processedContent.toString();
    
    // Add IDs to headings
    htmlContent = addHeadingIds(htmlContent);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || 'essay',
      tags: data.tags || [],
      coverImage: data.coverImage,
      author: data.author,
      draft: data.draft || false,
      featured: data.featured || false,
      readingTime: calculateReadingTime(content),
      content: htmlContent,
    };
  } catch {
    return null;
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags || []);
  return Array.from(new Set(tags));
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured).slice(0, limit);
}
