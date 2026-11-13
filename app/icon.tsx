import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

/**
 * Mindulle Garden Master Favicon (MDS v0.1.0 SSOT)
 * - 2px Central Stem Axis
 * - Asymmetric Sail Arc
 * - Golden Seed Core with 3 Radial Rays
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
        {/* 1. The True 2px Stem (x=16) */}
        <line
          x1="16"
          y1="15"
          x2="16"
          y2="30"
          stroke="#161616"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 2. Asymmetric Sail Arc */}
        <path
          d="M 6 15 C 6 7, 14 3, 26 9"
          stroke="#161616"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 3. Three Radiating Vitality Rays */}
        <line
          x1="16"
          y1="12"
          x2="16"
          y2="6"
          stroke="#D97706"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="12"
          x2="21.5"
          y2="8.5"
          stroke="#D97706"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="12"
          x2="10.5"
          y2="8.5"
          stroke="#D97706"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* 4. Golden Seed Core */}
        <circle cx="16" cy="12" r="3" fill="#D97706" />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
