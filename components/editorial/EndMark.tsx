import React from 'react';

export interface EndMarkProps {
  className?: string;
  size?: number;
}

/**
 * EndMark (❦)
 *
 * 기사 본문 종결부에 툭 얹히는 1도 민들레 꽃망울 형상의 활판 인쇄 종결 부호.
 */
export function EndMark({ className = '', size = 18 }: EndMarkProps) {
  return (
    <span
      className={`inline-flex items-center justify-center align-middle ml-2 text-[var(--sng-color-brand-primary)] select-none ${className}`}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="11" r="2.5" />
        <path d="M 10 11 C 6 10, 4 14, 8 16 C 10 17, 11 14, 10 11 Z" />
        <path d="M 14 11 C 18 10, 20 14, 16 16 C 14 17, 13 14, 14 11 Z" />
        <path d="M 12 13 C 12 18, 9 20, 7 19.5 C 8 21, 13 21, 13.5 15 C 13.5 14, 12.5 13, 12 13 Z" />
      </svg>
    </span>
  );
}
