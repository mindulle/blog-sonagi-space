/**
 * components/blog/VineFrame.tsx
 *
 * [BLOG-11] 85% 골든스냅 덩굴 드로잉 모션 장식 프레임
 *
 * 존코바 85% 골든스냅 텐션 곡선(cubic-bezier(0.15, 0.85, 0.35, 1.0))을 기반으로,
 * 식물학 표본실(Herbarium) 테두리에 자라나는 유기적 덩굴(Vine)을 120fps 순수 CSS로 드로잉합니다.
 */

'use client';

import React from 'react';

interface VineFrameProps {
  className?: string;
  variant?: 'divider' | 'corner' | 'full';
  strokeColor?: string;
}

export function VineFrame({
  className = '',
  variant = 'divider',
  strokeColor,
}: VineFrameProps) {
  const color = strokeColor || 'var(--sng-color-brand-primary, #d97706)';

  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-16 pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <path
          d="M4 116 V28 C4 14.7 14.7 4 28 4 H116 M28 4 C38 4 44 14 36 22 C28 30 18 20 28 4 M4 28 C4 38 14 44 22 36 C30 28 20 18 4 28"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sng-vine-drawing"
        />
        {/* 미세 잎사귀 디테일 */}
        <circle cx="28" cy="28" r="2.5" fill={color} opacity="0.8" />
        <circle cx="48" cy="4" r="2" fill={color} opacity="0.6" />
        <circle cx="4" cy="48" r="2" fill={color} opacity="0.6" />
      </svg>
    );
  }

  // Default: Botanical Divider
  return (
    <div
      className={`relative w-full flex items-center justify-center my-6 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 600 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xl h-6 pointer-events-none"
        aria-hidden="true"
      >
        {/* 중심 줄기 */}
        <path
          d="M20 16 H260 C275 16 285 8 300 8 C315 8 325 16 340 16 H580"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="sng-vine-drawing"
        />
        {/* 덩굴 싹과 잎사귀 (유기적 굴곡) */}
        <path
          d="M180 16 C190 10 205 8 215 14 M390 16 C400 22 415 24 425 18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="sng-vine-drawing"
        />
        {/* 중심 식물 포자 링 */}
        <circle
          cx="300"
          cy="8"
          r="3"
          fill="var(--sng-color-bg-surface)"
          stroke={color}
          strokeWidth="1.5"
        />
        <circle cx="300" cy="8" r="1.2" fill={color} />
        {/* 좌우 마디 포인트 */}
        <circle cx="215" cy="14" r="1.5" fill={color} opacity="0.8" />
        <circle cx="425" cy="18" r="1.5" fill={color} opacity="0.8" />
      </svg>
    </div>
  );
}
