import Fuse from 'fuse.js';
import type { Post } from '@/types/blog';

export type SearchablePost = Post & {
  content?: string;
};

/**
 * Create a Fuse.js search index for blog posts
 */
export function createSearchIndex(posts: SearchablePost[]) {
  return new Fuse(posts, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'content', weight: 0.2 },
      { name: 'tags', weight: 0.1 },
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
  });
}

/**
 * Search posts using Fuse.js
 */
export function searchPosts(query: string, posts: SearchablePost[]): Post[] {
  if (!query.trim()) {
    return posts;
  }

  const fuse = createSearchIndex(posts);
  const results = fuse.search(query);

  return results.map((result) => result.item);
}

/**
 * Highlight matched text in search results
 */
export function highlightMatches(
  text: string,
  query: string,
  className: string = 'bg-yellow-200 dark:bg-yellow-900/50 font-semibold'
): string {
  if (!query.trim()) {
    return text;
  }

  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<mark class="${className}">$1</mark>`);
}

/**
 * Get search suggestions based on existing posts
 */
export function getSearchSuggestions(
  query: string,
  posts: SearchablePost[],
  limit: number = 5
): string[] {
  if (!query.trim() || query.length < 2) {
    return [];
  }

  const allTags = posts.flatMap((post) => post.tags || []);
  const uniqueTags = Array.from(new Set(allTags));

  const matchingTags = uniqueTags
    .filter((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit);

  const matchingTitles = posts
    .filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, limit - matchingTags.length)
    .map((post) => post.title);

  return [...matchingTags, ...matchingTitles];
}
