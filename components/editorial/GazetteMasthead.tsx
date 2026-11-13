import React from 'react';

export interface GazetteMastheadProps {
  vol?: string;
  issue?: string;
  dateStr?: string;
  className?: string;
}

export function GazetteMasthead({
  vol = 'VOL. 01',
  issue = 'ISSUE 01',
  dateStr,
  className = '',
}: GazetteMastheadProps) {
  const currentDate =
    dateStr ||
    new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <header className={`w-full py-6 select-none ${className}`}>
      {/* 1. Top Double Hairline Rule (2px thick + 1px thin) */}
      <div className="w-full flex flex-col gap-[3px]" aria-hidden="true">
        <div
          className="w-full h-[2px]"
          style={{ backgroundColor: 'var(--sng-color-text-primary)' }}
        />
        <div
          className="w-full h-[1px]"
          style={{ backgroundColor: 'var(--sng-color-border-default)' }}
        />
      </div>

      {/* 2. Top Editorial Meta Line */}
      <div className="py-2.5 flex items-center justify-between text-[10px] md:text-xs tracking-widest uppercase font-mono text-[var(--sng-color-text-secondary)]">
        <span className="font-semibold tabular-nums">
          {vol} • {issue}
        </span>
        <span
          className="font-bold tracking-[0.25em] text-[var(--sng-color-text-primary)]"
          style={{ fontFamily: 'var(--font-cinematic, serif)' }}
        >
          M I N D U L L E &nbsp; A T E L I E R
        </span>
        <span className="tabular-nums">{currentDate}</span>
      </div>

      {/* 3. Sub-divider below meta */}
      <div
        className="w-full h-[1px]"
        style={{ backgroundColor: 'var(--sng-color-border-default)' }}
        aria-hidden="true"
      />

      {/* 4. Centerpiece: MINDULLE GARDEN (The Broadsheet Headline) */}
      <div className="py-6 sm:py-8 text-center flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-3">
          {/* Small 1-color sprout symbol */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            className="text-[var(--sng-color-brand-primary)]"
            aria-hidden="true"
          >
            <line
              x1="16"
              y1="14"
              x2="16"
              y2="28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 6 15 C 6 7, 14 3, 26 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="16" cy="12" r="3.5" fill="currentColor" />
          </svg>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.28em] text-[var(--sng-color-text-primary)] uppercase"
            style={{ fontFamily: 'var(--font-cinematic, serif)' }}
          >
            MINDULLE GARDEN
          </h1>
        </div>

        {/* Korean Subtitle */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[var(--sng-color-text-secondary)] font-sans">
          민 들 레 정 원
        </p>

        {/* Philosophy Deck (Serif Italic) */}
        <p
          className="text-xs sm:text-sm italic tracking-normal text-[var(--sng-color-text-muted)] mt-1 max-w-[540px]"
          style={{ fontFamily: 'var(--font-cinematic, serif)' }}
        >
          &ldquo;돌 틈에 단단히 뿌리내리고, 가볍게 사유하는 정원사의 지면&rdquo;
        </p>
      </div>

      {/* 5. Bottom Double Hairline Rule (1px thin + 2px thick) */}
      <div className="w-full flex flex-col gap-[3px]" aria-hidden="true">
        <div
          className="w-full h-[1px]"
          style={{ backgroundColor: 'var(--sng-color-border-default)' }}
        />
        <div
          className="w-full h-[2px]"
          style={{ backgroundColor: 'var(--sng-color-text-primary)' }}
        />
      </div>
    </header>
  );
}
