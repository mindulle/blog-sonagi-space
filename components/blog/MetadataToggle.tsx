'use client';
import { useState } from 'react';
import { Button } from '@/components/ui';

interface MetadataToggleProps {
  created: string;
  modified?: string;
  wordCount?: number;
  linksCount?: number;
}

export function MetadataToggle({
  created,
  modified,
  wordCount,
  linksCount,
}: MetadataToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button variant="secondary" size="sm" onClick={() => setOpen(!open)}>
        [i]
      </Button>
      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-64 p-4 rounded-lg shadow-lg z-50 text-sm"
          style={{
            backgroundColor: 'var(--sng-color-bg-elevated)',
            border: '1px solid var(--sng-color-border-default)',
            color: 'var(--sng-color-text-primary)',
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Created:</span> <span>{created}</span>
            </div>
            {modified && (
              <div className="flex justify-between">
                <span>Modified:</span> <span>{modified}</span>
              </div>
            )}
            {wordCount !== undefined && (
              <div className="flex justify-between">
                <span>Words:</span> <span>{wordCount}</span>
              </div>
            )}
            {linksCount !== undefined && (
              <div className="flex justify-between">
                <span>Links:</span> <span>{linksCount}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
