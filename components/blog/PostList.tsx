import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GrowthGlyph, normalizeStage } from './GrowthGlyph';
import type { Note } from '@/lib/notes';

interface PostListProps {
  posts: Note[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center text-[var(--mds-color-text-secondary)]">
        작성된 포스트가 없습니다.
      </div>
    );
  }

  return (
    <div
      className="border-t"
      style={{ borderColor: 'var(--mds-color-border-subtle)' }}
    >
      {posts.map((post) => {
        const dateLabel = (post.publishedDate || post.created || '').slice(
          0,
          10
        );
        const stage = post.status ? normalizeStage(post.status) : null;

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border-b py-6 transition-colors hover:bg-[var(--mds-color-bg-surface)] px-2 -mx-2 select-text"
            style={{
              borderColor: 'var(--mds-color-border-subtle)',
              textDecoration: 'none',
            }}
          >
            <article className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline">
              <div className="md:col-span-3 flex items-center gap-2.5 font-mono text-xs">
                {dateLabel && (
                  <span
                    className="tabular-nums"
                    style={{ color: 'var(--mds-color-text-secondary)' }}
                  >
                    {dateLabel}
                  </span>
                )}
                {stage && (
                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold tracking-[0.16em] uppercase"
                    style={{ color: 'var(--mds-color-brand-primary)' }}
                  >
                    <GrowthGlyph
                      stage={stage}
                      size={12}
                      strokeColor="var(--mds-color-brand-primary)"
                    />
                    <span>{stage}</span>
                  </span>
                )}
                {post.category && (
                  <span
                    className="uppercase tracking-wider"
                    style={{ color: 'var(--mds-color-text-muted)' }}
                  >
                    · {post.category}
                  </span>
                )}
              </div>

              <div className="md:col-span-8">
                <h2
                  className="text-lg sm:text-xl font-bold font-sans tracking-tight keep-all group-hover:underline"
                  style={{ color: 'var(--mds-color-text-primary)' }}
                >
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p
                    className="mt-1.5 text-sm font-sans leading-relaxed line-clamp-2 keep-all"
                    style={{ color: 'var(--mds-color-text-secondary)' }}
                  >
                    {post.excerpt}
                  </p>
                )}
              </div>

              <div className="hidden md:flex md:col-span-1 justify-end pr-2">
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--mds-color-text-secondary)' }}
                />
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
