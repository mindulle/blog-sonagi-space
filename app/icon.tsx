import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

/**
 * Mindulle Garden Master Favicon (MDS v0.1.0 SSOT - Direction A)
 * Floating Dandelion Pappus Seed:
 * - 5 Parachute Plume Ribs & Curved Wind Canopy
 * - The True 2px Central Stalk
 * - Teardrop Achene Seed Core (Dandelion Gold)
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. Parachute Plumes (5-way delicate radial rays) */}
        <line
          x1="16"
          y1="14"
          x2="16"
          y2="3.5"
          stroke="#161616"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="14"
          x2="10.5"
          y2="5"
          stroke="#161616"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="14"
          x2="21.5"
          y2="5"
          stroke="#161616"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="14"
          x2="5.5"
          y2="8.5"
          stroke="#161616"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="14"
          x2="26.5"
          y2="8.5"
          stroke="#161616"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* 2. Curved Wind Canopy Arc */}
        <path
          d="M 5.5 8.5 Q 16 1.8 26.5 8.5"
          stroke="#161616"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="1.5 2"
          opacity="0.65"
        />

        {/* 3. Parachute Vertex Node */}
        <circle cx="16" cy="14" r="1.5" fill="#D97706" />

        {/* 4. Central Stalk (The True 2px Stem) */}
        <line
          x1="16"
          y1="14"
          x2="16"
          y2="23"
          stroke="#161616"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 5. Teardrop Seed Core (Gold payload at bottom) */}
        <path
          d="M 16 22.5 C 14.2 24.5, 14.2 28, 16 29.5 C 17.8 28, 17.8 24.5, 16 22.5 Z"
          fill="#D97706"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
