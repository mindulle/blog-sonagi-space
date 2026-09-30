import { describe, it, expect, vi } from 'vitest';
import {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
} from './mdx';
import fs from 'fs';

vi.mock('fs');

describe('MDX Utility', () => {
  describe('getAllPosts', () => {
    it('returns empty array if directory does not exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);
      expect(getAllPosts()).toEqual([]);
    });

    it('returns parsed posts from directory', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true);
      vi.mocked(fs.readdirSync).mockReturnValue([
        'post1.mdx',
        'post2.mdx',
      ] as unknown as string[]);
      vi.mocked(fs.readFileSync).mockImplementation((path) => {
        if (path.toString().includes('post1')) {
          return '---\ntitle: Post 1\ndate: 2023-01-01\ncategory: tech\n---\nContent 1';
        }
        return '---\ntitle: Post 2\ndate: 2023-01-02\ncategory: essay\n---\nContent 2';
      });

      const posts = getAllPosts();
      expect(posts).toHaveLength(2);
      expect(posts[0].slug).toBe('post2'); // Sorted by date desc
      expect(posts[1].slug).toBe('post1');
    });
  });

  describe('getPostBySlug', () => {
    it('returns null if file does not exist', () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File not found');
      });
      expect(getPostBySlug('unknown')).toBeNull();
    });

    it('parses content and adds heading IDs', () => {
      vi.mocked(fs.readFileSync).mockReturnValue(
        '---\ntitle: Test Post\n---\n## Hello World\nContent here.'
      );

      const post = getPostBySlug('test-post');
      expect(post).not.toBeNull();
      expect(post?.title).toBe('Test Post');
      expect(post?.content).toContain('<h2 id="hello-world">Hello World</h2>');
    });
  });
});
