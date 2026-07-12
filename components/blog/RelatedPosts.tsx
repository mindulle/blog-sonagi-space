import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CategoryBadge } from './CategoryBadge';
import type { Post } from '@/types/blog';

type RelatedPostsProps = {
  currentPost: Post;
  allPosts: Post[];
  maxCount?: number;
};

/**
 * Get related posts based on category and tags
 */
function getRelatedPosts(
  currentPost: Post,
  allPosts: Post[],
  maxCount: number = 3
): Post[] {
  return allPosts
    .filter((post) => post.slug !== currentPost.slug) // Exclude current post
    .map((post) => {
      let score = 0;

      // Same category: +3 points
      if (post.category === currentPost.category) {
        score += 3;
      }

      // Shared tags: +1 point per tag
      const sharedTags =
        post.tags?.filter((tag) => currentPost.tags?.includes(tag)) || [];
      score += sharedTags.length;

      return { post, score };
    })
    .filter(({ score }) => score > 0) // Only posts with some relation
    .sort((a, b) => b.score - a.score) // Sort by score
    .slice(0, maxCount)
    .map(({ post }) => post);
}

export function RelatedPosts({
  currentPost,
  allPosts,
  maxCount = 3,
}: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost, allPosts, maxCount);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2
        className="text-2xl font-bold mb-6"
        style={{ color: 'var(--sng-color-text-primary)' }}
      >
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow group">
              {post.coverImage && (
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CategoryBadge category={post.category} />
                </div>
                <h3
                  className="font-semibold mb-2 line-clamp-2 group-hover:text-[var(--sng-color-brand-primary)] transition-colors"
                  style={{ color: 'var(--sng-color-text-primary)' }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm mb-3 line-clamp-2"
                  style={{ color: 'var(--sng-color-text-secondary)' }}
                >
                  {post.description}
                </p>
                <div
                  className="flex items-center gap-3 text-xs"
                  style={{ color: 'var(--sng-color-text-muted)' }}
                >
                  <time
                    dateTime={post.date}
                    className="flex items-center gap-1"
                  >
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readingTime}분
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
