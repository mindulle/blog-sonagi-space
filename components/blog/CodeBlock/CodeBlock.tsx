'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

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
        <div
          className="flex items-center justify-between px-4 py-2 border-b rounded-t-lg"
          style={{
            backgroundColor: 'var(--color-bg-overlay)',
            borderColor: 'var(--color-border-default)',
          }}
        >
          <span
            className="text-xs font-mono uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {language}
          </span>
          <Button
            variant="ghost"
            size="small"
            onClick={handleCopy}
            className="flex items-center gap-1.5"
            style={{
              color: copied
                ? 'var(--color-state-success)'
                : 'var(--color-text-secondary)',
            }}
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
          </Button>
        </div>
      )}
      {!language && (
        <Button
          variant="ghost"
          size="small"
          onClick={handleCopy}
          className={cn(
            'absolute top-2 right-2 transition-all opacity-0 group-hover:opacity-100',
            copied && 'opacity-100'
          )}
          style={{
            backgroundColor: 'var(--color-bg-overlay)',
            color: copied
              ? 'var(--color-state-success)'
              : 'var(--color-text-secondary)',
          }}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
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
