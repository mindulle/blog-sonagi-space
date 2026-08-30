import { PostCard } from './PostCard';
import type { Note } from '@/lib/notes';

interface PostListProps {
  posts: Note[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center text-[var(--sng-color-text-secondary)]">
        작성된 포스트가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
