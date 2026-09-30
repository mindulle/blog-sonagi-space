import { describe, it, expect } from 'vitest';
import {
  searchPosts,
  highlightMatches,
  getSearchSuggestions,
  SearchablePost,
} from './search';

const mockPosts: SearchablePost[] = [
  {
    slug: 'react-hooks',
    title: 'React Hooks Deep Dive',
    description: 'Understanding useEffect and useState',
    tags: ['react', 'javascript'],
  },
  {
    slug: 'nextjs-seo',
    title: 'Next.js SEO Guide',
    description: 'How to optimize Next.js for search engines',
    tags: ['nextjs', 'seo'],
  },
  {
    slug: 'css-grid',
    title: 'CSS Grid Layouts',
    description: 'A comprehensive guide to CSS Grid',
    tags: ['css', 'design'],
  },
];

describe('Search Utility', () => {
  describe('searchPosts', () => {
    it('returns all posts if query is empty', () => {
      const results = searchPosts('', mockPosts);
      expect(results).toHaveLength(3);
    });

    it('finds posts by title match', () => {
      const results = searchPosts('React', mockPosts);
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe('react-hooks');
    });

    it('finds posts by description match', () => {
      const results = searchPosts('search engines', mockPosts);
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe('nextjs-seo');
    });

    it('finds posts by tag match', () => {
      const results = searchPosts('css', mockPosts);
      expect(results).toHaveLength(1);
      expect(results[0].slug).toBe('css-grid');
    });
  });

  describe('highlightMatches', () => {
    it('returns original text if query is empty', () => {
      expect(highlightMatches('Hello World', '')).toBe('Hello World');
    });

    it('wraps matched query in a <mark> tag', () => {
      const highlighted = highlightMatches('Hello Next.js World', 'Next.js');
      expect(highlighted).toContain('<mark');
      expect(highlighted).toContain('>Next.js</mark>');
    });

    it('is case-insensitive', () => {
      const highlighted = highlightMatches('Hello Next.js World', 'next.js');
      expect(highlighted).toContain('Next.js'); // Should keep original case in output
      expect(highlighted).toContain('<mark');
    });
  });

  describe('getSearchSuggestions', () => {
    it('returns empty array for short query', () => {
      expect(getSearchSuggestions('a', mockPosts)).toHaveLength(0);
    });

    it('suggests matching tags first', () => {
      const suggestions = getSearchSuggestions('rea', mockPosts);
      expect(suggestions).toContain('react');
    });

    it('suggests matching titles if tags do not fill the limit', () => {
      const suggestions = getSearchSuggestions('next', mockPosts);
      expect(suggestions).toContain('nextjs'); // tag
      expect(suggestions).toContain('Next.js SEO Guide'); // title
    });
  });
});
