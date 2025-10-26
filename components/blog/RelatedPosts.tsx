import { PostCard } from './PostCard';
import type { Post } from '@/types/blog';

interface RelatedPostsProps {
  posts: Post[];
  title?: string;
}

export function RelatedPosts({ posts, title = '관련 포스트' }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} variant="compact" />
        ))}
      </div>
    </section>
  );
}
