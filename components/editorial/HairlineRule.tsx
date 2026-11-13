import React from 'react';

export interface HairlineRuleProps {
  thick?: boolean;
  double?: boolean;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * HairlineRule
 *
 * 갓 인쇄된 신문 지면의 물리적 1px/2px 실선(Hairline) 분할 컴포넌트.
 */
export function HairlineRule({
  thick = false,
  double = false,
  vertical = false,
  className = '',
  style,
}: HairlineRuleProps) {
  if (vertical) {
    return (
      <div
        className={`inline-block self-stretch w-[1px] bg-[var(--sng-color-border-default)] ${className}`}
        style={style}
        aria-hidden="true"
      />
    );
  }

  if (double) {
    return (
      <div
        className={`w-full flex flex-col gap-[3px] my-6 ${className}`}
        style={style}
        aria-hidden="true"
      >
        <div
          className={`w-full ${thick ? 'h-[2px]' : 'h-[1px]'}`}
          style={{ backgroundColor: 'var(--sng-color-text-primary)' }}
        />
        <div
          className="w-full h-[1px]"
          style={{ backgroundColor: 'var(--sng-color-border-default)' }}
        />
      </div>
    );
  }

  return (
    <hr
      className={`w-full border-none my-6 ${className}`}
      style={{
        height: thick ? '2px' : '1px',
        backgroundColor: thick
          ? 'var(--sng-color-text-primary)'
          : 'var(--sng-color-border-default)',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
