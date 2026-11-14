import React from 'react';

interface HerbariumSealProps {
  size?: number;
  className?: string;
  registrationNo?: string;
  year?: string;
}

export function HerbariumSeal({
  size = 72,
  className = '',
  registrationNo = 'SNG-2026',
  year = '2026',
}: HerbariumSealProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block select-none pointer-events-none transition-transform ${className}`}
      style={{
        color: 'var(--color-brand-primary)',
        opacity: 0.85,
      }}
      role="img"
      aria-label="Official Herbarium Curatorial Seal"
    >
      {/* Outer decorative notched circle */}
      <circle cx={50} cy={50} r={46} strokeWidth={2} />
      <circle cx={50} cy={50} r={42} strokeWidth={1} strokeDasharray="3 2" />

      {/* Internal octagonal/star boundary */}
      <circle cx={50} cy={50} r={32} strokeWidth={1.5} />

      {/* Center Dandelion Sprout Icon */}
      <path d="M 50 64 L 50 42" strokeWidth={2} />
      <path
        d="M 50 48 C 45 42 38 44 38 50 C 38 56 46 54 50 50"
        strokeWidth={1.5}
      />
      <path
        d="M 50 48 C 55 42 62 44 62 50 C 62 56 54 54 50 50"
        strokeWidth={1.5}
      />
      <path d="M 50 42 L 50 36" strokeWidth={2} />

      {/* Radial Archival Text via SVG Text */}
      <text
        x={50}
        y={24}
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize={6.5}
        fontFamily="var(--mds-font-mono, monospace)"
        fontWeight="bold"
        letterSpacing="0.18em"
      >
        HERBARIUM
      </text>

      <text
        x={50}
        y={76}
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize={6}
        fontFamily="var(--mds-font-mono, monospace)"
        fontWeight="bold"
        letterSpacing="0.15em"
      >
        SONAGI SPACE
      </text>

      {/* Registration Badge in Center */}
      <text
        x={50}
        y={68}
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize={5}
        fontFamily="var(--mds-font-mono, monospace)"
        opacity={0.8}
        letterSpacing="0.1em"
      >
        {registrationNo}
      </text>

      <text
        x={50}
        y={35}
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize={5}
        fontFamily="var(--mds-font-mono, monospace)"
        opacity={0.8}
        letterSpacing="0.1em"
      >
        ANNO {year}
      </text>
    </svg>
  );
}
