'use client';

import { useState } from 'react';
import { Twitter, Facebook, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareButtons({ title, url, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        공유하기
      </span>

      {/* Twitter */}
      <button
        onClick={handleShareTwitter}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
        aria-label="Twitter에 공유"
      >
        <Twitter size={18} />
      </button>

      {/* Facebook */}
      <button
        onClick={handleShareFacebook}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
        aria-label="Facebook에 공유"
      >
        <Facebook size={18} />
      </button>

      {/* 링크 복사 */}
      <button
        onClick={handleCopyLink}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-lg border transition-colors',
          copied
            ? 'border-primary-600 bg-primary-600 text-white'
            : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
        )}
        aria-label="링크 복사"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}
