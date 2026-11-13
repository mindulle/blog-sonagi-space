import React from 'react';

export interface DropCapProps {
  letter: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * DropCap
 *
 * 기사 본문 첫 글자를 3줄 높이의 클래식 세리프 활자로 강조하는 신문 조판 컴포넌트.
 */
export function DropCap({ letter, className = '', children }: DropCapProps) {
  return (
    <div className={`relative leading-relaxed ${className}`}>
      <span
        className="float-left text-4xl sm:text-5xl leading-none font-bold mr-3 mt-1 select-none text-[var(--sng-color-brand-primary)]"
        style={{
          fontFamily: 'var(--font-cinematic, serif)',
        }}
        aria-hidden="true"
      >
        {letter}
      </span>
      {children}
    </div>
  );
}
