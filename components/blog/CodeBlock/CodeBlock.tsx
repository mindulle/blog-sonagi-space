'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type CodeBlockProps = {
  children: string;
  language?: string;
  className?: string;
};

export function CodeBlock({ children, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group">
      {language && (
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 dark:bg-neutral-900 border-b border-neutral-700 rounded-t-lg">
          <span className="text-xs font-mono text-neutral-400 uppercase">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className={cn(
              'flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors',
              copied
                ? 'text-green-400 bg-green-400/10'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700'
            )}
            aria-label={copied ? 'Copied' : 'Copy code'}
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      {!language && (
        <button
          onClick={handleCopy}
          className={cn(
            'absolute top-2 right-2 p-2 rounded transition-all opacity-0 group-hover:opacity-100',
            copied
              ? 'text-green-400 bg-green-400/10'
              : 'text-neutral-400 hover:text-neutral-200 bg-neutral-800/80 hover:bg-neutral-700'
          )}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
      <pre
        className={cn(
          'overflow-x-auto',
          language ? 'rounded-b-lg' : 'rounded-lg',
          className
        )}
      >
        <code className={`language-${language || 'text'}`}>{children}</code>
      </pre>
    </div>
  );
}
