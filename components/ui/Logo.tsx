import { HTMLAttributes } from 'react';
import { MindulleLogo } from '@mindulle/ui';

export interface LogoProps extends HTMLAttributes<HTMLSpanElement> {
  height?: number;
}

export function Logo({ height = 28, className = '', style, ...props }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={style}
      {...props}
    >
      <MindulleLogo size={height} aria-hidden="true" />
      <span
        className="font-bold tracking-[0.22em] uppercase text-[var(--mds-color-text-primary)] leading-none"
        style={{
          fontFamily: 'var(--font-cinematic, serif)',
          fontSize: `${Math.round(height * 0.68)}px`,
        }}
      >
        MINDULLE
      </span>
    </span>
  );
}
