'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchBarProps = {
  className?: string;
  autoFocus?: boolean;
  onClose?: () => void;
};

export function SearchBar({ className, autoFocus, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape') {
        if (query) {
          setQuery('');
        } else if (onClose) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [query, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      if (onClose) {
        onClose();
      }
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative', className)}
      role="search"
    >
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--color-text-muted)' }}
          size={20}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts... (⌘K)"
          className={cn(
            'w-full pl-10 pr-10 py-2.5 rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'transition-colors'
          )}
          style={{
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-bg-elevated)',
            color: 'var(--color-text-primary)',
          }}
          aria-label="Search posts"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>
      <p
        className="mt-2 text-xs"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Press{' '}
        <kbd
          className="px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: 'var(--color-bg-overlay)',
            border: '1px solid var(--color-border-default)',
            color: 'var(--color-text-secondary)',
          }}
        >
          ⌘K
        </kbd>{' '}
        to focus
      </p>
    </form>
  );
}
