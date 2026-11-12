import React from 'react';

/**
 * HerbariumTextureFilter
 *
 * 순수 웹 표준 SVG 필터 기반의 한지(Korean Mulberry Paper) 섬유 결 텍스처 엔진.
 * 외부 래스터 이미지(JPG/PNG) 없이 브라우저 네이티브 GPU 연산으로
 * 미세한 한지 닥나무 섬유의 불규칙한 질감과 촉각적 깊이감을 합성합니다.
 */
export function HerbariumTextureFilter() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        {/* 한지 닥나무 섬유 질감 (Mulberry Fiber Noise) */}
        <filter
          id="sng-mulberry-fiber"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="
              0.8 0   0   0   0.05
              0   0.8 0   0   0.05
              0   0   0.7 0   0.03
              0   0   0   0.12 0
            "
            in="noise"
            result="coloredNoise"
          />
          <feComposite
            in="SourceGraphic"
            in2="coloredNoise"
            operator="arithmetic"
            k1="0.1"
            k2="0.9"
            k3="0.05"
            k4="0"
          />
        </filter>

        {/* 바위 틈새 암반 미세 요철 필터 (Greystone Rock Fissure Grain) */}
        <filter
          id="sng-stone-fissure"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.08"
            numOctaves="3"
            result="rockNoise"
          />
          <feColorMatrix
            type="matrix"
            values="
              0 0 0 0 0.1
              0 0 0 0 0.12
              0 0 0 0 0.15
              0 0 0 0.08 0
            "
            in="rockNoise"
            result="darkRock"
          />
          <feBlend in="SourceGraphic" in2="darkRock" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * WashiTapeStrip
 *
 * 실제 반투명 한지(Korean Hanji) 마운팅 테이프의 섬유질 찢김 엣지와
 * 미세한 질감을 구현한 컴포넌트.
 */
export function WashiTapeStrip({
  className = '',
  width = 112,
  height = 18,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-[2px]"
        style={{
          backgroundColor: 'var(--color-brand-primary)',
          opacity: 0.88,
          border: '1px solid var(--color-border-strong)',
          boxShadow:
            '0 1px 3px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.08) 2px, rgba(255, 255, 255, 0.08) 4px)',
        }}
      />
      {/* 테이프 좌우의 미세한 섬유 찢김 (Fringe) 장식 */}
      <div
        className="absolute -left-0.5 top-0 bottom-0 w-1 opacity-70"
        style={{
          borderLeft: '1px dashed var(--color-brand-primary)',
        }}
      />
      <div
        className="absolute -right-0.5 top-0 bottom-0 w-1 opacity-70"
        style={{
          borderRight: '1px dashed var(--color-brand-primary)',
        }}
      />
    </div>
  );
}
