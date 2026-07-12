'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type ReadingProgressProps = {
  className?: string;
};

export function ReadingProgress({ className }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      className={cn('fixed top-0 left-0 right-0 h-1 z-50', className)}
      style={{ backgroundColor: 'var(--sng-color-bg-overlay)' }}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background:
            'linear-gradient(to right, var(--sng-color-brand-primary), var(--sng-color-brand-primary-hover))',
        }}
      />
    </div>
  );
}
