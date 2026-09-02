import { PostPreviewCard } from './PostPreviewCard';
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
          <PostPreviewCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            post={{
              slug: post.slug,
              title: post.title,
              excerpt: post.description,
              category: post.category,
              dateLabel: new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }),
              readingTime: post.readingTime,
              coverImage: post.coverImage,
            }}
          />
        ))}
      </div>
    </section>
  );
}
