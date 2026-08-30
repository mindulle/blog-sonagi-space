import { Button } from '@/components/ui';
import Link from 'next/link';

interface SeriesNavProps {
  series: string;
  seriesOrder: number;
  total: number;
  prev?: { title: string; slug: string };
  next?: { title: string; slug: string };
}

export function SeriesNav({ series, seriesOrder, total, prev, next }: SeriesNavProps) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--sng-color-bg-surface)', border: '1px solid var(--sng-color-border-subtle)' }}>
      <div className="flex justify-between items-center text-sm" style={{ color: 'var(--sng-color-text-secondary)' }}>
        <span className="font-bold">{series}</span>
        <span>{seriesOrder} of {total}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        {prev ? (
          <Link href={`/notes/${prev.slug}`}>
            <Button variant="secondary" size="sm">← 이전 글</Button>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/notes/${next.slug}`}>
            <Button variant="secondary" size="sm">다음 글 →</Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
