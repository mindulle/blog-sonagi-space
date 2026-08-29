import { HTMLAttributes } from 'react';
import { SonagiLogo } from '@mindulle/ui';

export interface LogoProps extends HTMLAttributes<SVGElement> {
  height?: number;
}

export function Logo({ height = 28, className, style, ...props }: LogoProps) {
  return (
    <SonagiLogo
      height={height}
      className={className}
      style={style}
      {...props}
    />
  );
}
