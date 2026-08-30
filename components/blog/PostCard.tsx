import Link from 'next/link';
import { Card, Badge } from '@mindulle/ui';
import type { Note } from '@/lib/notes';

interface PostCardProps {
  post: Note;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card
        className="h-full flex flex-col p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
        style={{
          borderColor: 'var(--sng-color-border-default)',
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <Badge variant="label">{post.category || 'Note'}</Badge>
          <time
            className="text-sm"
            style={{ color: 'var(--sng-color-text-muted)' }}
          >
            {post.publishedDate || post.created}
          </time>
        </div>

        <h3
          className="text-xl font-bold mb-3 line-clamp-2 transition-colors group-hover:text-[var(--sng-color-brand-primary)]"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
          {post.title}
        </h3>

        <p
          className="mb-6 text-sm line-clamp-3 leading-relaxed flex-grow"
          style={{ color: 'var(--sng-color-text-secondary)' }}
        >
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                backgroundColor: 'var(--sng-color-bg-overlay)',
                color: 'var(--sng-color-text-secondary)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  );
}
