import React from 'react';

export type GrowthStage =
  | 'seed'
  | 'sprout'
  | 'rosette'
  | 'pappus'
  // Backward compatibility with legacy digital garden notes:
  | 'sapling'
  | 'evergreen';

export interface GrowthGlyphProps extends React.SVGProps<SVGSVGElement> {
  stage: GrowthStage;
  size?: 24 | 48 | 96 | number;
  strokeColor?: string;
  animated?: boolean;
  className?: string;
}

/**
 * Normalizes legacy or alternative stage names to canonical 4 botanical stages:
 * Seed -> Sprout -> Rosette -> Pappus
 */
export function normalizeStage(
  stage: GrowthStage
): 'seed' | 'sprout' | 'rosette' | 'pappus' {
  if (stage === 'sapling') return 'sprout';
  if (stage === 'evergreen') return 'pappus';
  return stage;
}

export function GrowthGlyph({
  stage,
  size = 24,
  strokeColor = 'var(--color-brand-primary)',
  animated = false,
  className = '',
  style,
  ...rest
}: GrowthGlyphProps) {
  const canonicalStage = normalizeStage(stage);
  const numSize = typeof size === 'number' ? size : 24;

  // Optical size tier selection (24 / 48 / 96)
  const opticalSize = numSize <= 32 ? 24 : numSize <= 64 ? 48 : 96;
  const viewBox = `0 0 ${opticalSize} ${opticalSize}`;

  const animationStyle = animated
    ? {
        strokeDasharray: 1,
        strokeDashoffset: 0,
        animation: 'sng-glyph-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={numSize}
      height={numSize}
      fill="none"
      stroke={strokeColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 transition-transform ${className}`}
      style={{
        ...animationStyle,
        ...style,
      }}
      role="img"
      aria-label={`Botanical growth stage: ${canonicalStage}`}
      {...rest}
    >
      {/* ─── STAGE I: SEED (겨울 씨앗 - 수과 Achene) ─── */}
      {canonicalStage === 'seed' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Rock crevice cleft bed */}
              <path
                d="M 3 22 L 8 20.5 L 12 21.5 L 16 20 L 21 21.5"
                pathLength={1}
              />
              <path d="M 12 21.5 L 12 23" pathLength={1} />
              {/* Slender achene body with organic taper */}
              <path
                d="M 11.5 13 C 10 14.5 10.2 18 11.8 21 C 13.4 18 13.5 14.5 12.2 13 Z"
                pathLength={1}
              />
              {/* Spinule barbs on upper shoulder */}
              <path d="M 10.6 14.8 L 9.2 13.6" pathLength={1} />
              <path d="M 13.2 14.8 L 14.6 13.6" pathLength={1} />
              {/* Central longitudinal rib */}
              <path d="M 11.8 14.5 L 11.8 19.5" pathLength={1} />
              {/* Slender wire beak (rostrum) */}
              <path d="M 11.8 13 L 12 5.5" pathLength={1} />
              {/* Radiating pappus umbrella rays */}
              <path d="M 12 5.5 L 6.5 2.5" pathLength={1} />
              <path d="M 12 5.5 L 9.5 1.8" pathLength={1} />
              <path d="M 12 5.5 L 12 1" pathLength={1} />
              <path d="M 12 5.5 L 14.5 1.8" pathLength={1} />
              <path d="M 12 5.5 L 17.5 2.5" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Craggy rock fracture bed */}
              <path
                d="M 6 43 L 15 40 L 23 42 L 31 39.5 L 42 42.5"
                pathLength={1}
              />
              <path d="M 23 42 L 23.5 46" pathLength={1} />
              <path d="M 15 40 L 19 44" pathLength={1} />
              <path d="M 31 39.5 L 27 43" pathLength={1} />
              {/* Dandelion Achene: elongated, tapering with natural curvature */}
              <path
                d="M 23.5 24.5 C 20.2 27.5 20.5 35 23.5 41 C 26.5 35 26.8 27.5 23.5 24.5 Z"
                pathLength={1}
              />
              {/* Prominent ascending spinule barbs (가시 돌기) */}
              <path d="M 21.2 26.5 L 18 24.5" pathLength={1} />
              <path d="M 25.8 26.5 L 29 24.5" pathLength={1} />
              <path d="M 21 29.5 L 18.5 28" pathLength={1} />
              <path d="M 26 29.5 L 28.5 28" pathLength={1} />
              {/* Longitudinal ribs (세로 능선) */}
              <path d="M 23.5 26 L 23.5 39" pathLength={1} />
              <path d="M 22 28 C 21.3 31 21.5 35 22.8 38.5" pathLength={1} />
              <path d="M 25 28 C 25.7 31 25.5 35 24.2 38.5" pathLength={1} />
              {/* Collar / conical apex */}
              <path d="M 22 24.5 L 25 24.5" pathLength={1} />
              {/* Slender flexible beak (rostrum) */}
              <path d="M 23.5 24.5 C 23.4 18 24.2 14 24 10.5" pathLength={1} />
              {/* Radiating gossamer pappus rays */}
              <path d="M 24 10.5 L 12 5" pathLength={1} />
              <path d="M 24 10.5 L 16.5 3.5" pathLength={1} />
              <path d="M 24 10.5 L 21.5 2" pathLength={1} />
              <path d="M 24 10.5 L 24 1.5" pathLength={1} />
              <path d="M 24 10.5 L 26.5 2" pathLength={1} />
              <path d="M 24 10.5 L 31.5 3.5" pathLength={1} />
              <path d="M 24 10.5 L 36 5" pathLength={1} />
              {/* Capillary barbs on rays */}
              <path d="M 15 6 L 16 4.5" pathLength={1} />
              <path d="M 33 6 L 32 4.5" pathLength={1} />
              <path d="M 19 4 L 20 2.5" pathLength={1} />
              <path d="M 29 4 L 28 2.5" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Archival Rock Crevice Strata Bed */}
              <path
                d="M 12 87 L 30 81 L 47 84 L 64 80 L 84 86"
                pathLength={1}
              />
              <path d="M 47 84 L 48 93" pathLength={1} />
              <path d="M 30 81 L 38 87" pathLength={1} />
              <path d="M 64 80 L 58 86" pathLength={1} />
              <path d="M 22 84 L 27 88" pathLength={1} />
              <path d="M 74 83 L 69 88" pathLength={1} />
              {/* Dandelion Achene: Spindle body with fine botanical curvature */}
              <path
                d="M 47.5 48 C 41 54 41 69 47.5 81 C 54 69 54 54 47.5 48 Z"
                pathLength={1}
              />
              {/* Muricate ascending spinules on achene upper shoulders (가시 돌기 군락) */}
              <path d="M 43 52 L 36 48" pathLength={1} />
              <path d="M 52 52 L 59 48" pathLength={1} />
              <path d="M 42.5 57 L 37 54" pathLength={1} />
              <path d="M 52.5 57 L 58 54" pathLength={1} />
              <path d="M 43 62 L 38.5 60" pathLength={1} />
              <path d="M 52 62 L 56.5 60" pathLength={1} />
              <path d="M 44 67 L 40.5 66" pathLength={1} />
              <path d="M 51 67 L 54.5 66" pathLength={1} />
              {/* Prominent longitudinal ribs (세로 능선 에칭) */}
              <path d="M 47.5 50 L 47.5 78" pathLength={1} />
              <path d="M 44.5 54 C 43 60 43.5 69 46 76" pathLength={1} />
              <path d="M 50.5 54 C 52 60 51.5 69 49 76" pathLength={1} />
              <path d="M 42 59 C 41.5 63 42 68 44 73" pathLength={1} />
              <path d="M 53 59 C 53.5 63 53 68 51 73" pathLength={1} />
              {/* Apical conical collar ring */}
              <path d="M 44 48 L 51 48" pathLength={1} />
              {/* Elongated fragile beak (rostrum) */}
              <path d="M 47.5 48 C 47.2 36 48.5 28 48 20" pathLength={1} />
              {/* Multi-rayed botanical pappus umbrella rays */}
              <path d="M 48 20 L 22 10" pathLength={1} />
              <path d="M 48 20 L 31 6.5" pathLength={1} />
              <path d="M 48 20 L 41 3.5" pathLength={1} />
              <path d="M 48 20 L 48 2.5" pathLength={1} />
              <path d="M 48 20 L 55 3.5" pathLength={1} />
              <path d="M 48 20 L 65 6.5" pathLength={1} />
              <path d="M 48 20 L 74 10" pathLength={1} />
              {/* Micro plumose lateral hairs on rays */}
              <path d="M 28 12 L 29 8" pathLength={1} />
              <path d="M 68 12 L 67 8" pathLength={1} />
              <path d="M 37 8 L 39 5" pathLength={1} />
              <path d="M 59 8 L 57 5" pathLength={1} />
              <path d="M 45 6 L 46 3" pathLength={1} />
              <path d="M 51 6 L 50 3" pathLength={1} />
              <path d="M 33 13 L 34 10" pathLength={1} />
              <path d="M 63 13 L 62 10" pathLength={1} />
            </>
          )}
        </>
      )}

      {/* ─── STAGE II: SPROUT (돌 틈의 떡잎 - Cotyledon) ─── */}
      {canonicalStage === 'sprout' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Jagged rock crevice fracture */}
              <path
                d="M 2 22 L 7 19.5 L 11.5 21 L 15.5 19 L 22 21.5"
                pathLength={1}
              />
              <path d="M 11.5 21 L 11.5 23.5" pathLength={1} />
              {/* Organic arched hypocotyl stem */}
              <path d="M 11.5 20 C 11 15 12.8 12.5 12 9" pathLength={1} />
              {/* Left Cotyledon (spatulate leaf blade with organic tilt) */}
              <path
                d="M 12 10.5 C 9 8.5 4.5 9 4.5 13 C 4.5 16.5 9.5 15.5 12 12"
                pathLength={1}
              />
              <path d="M 7.5 12.5 L 10 12" pathLength={1} />
              {/* Right Cotyledon (slightly higher, asymmetrical) */}
              <path
                d="M 12 10.5 C 15 8 19.5 8.5 19.5 12.5 C 19.5 16 14.5 15.2 12 12"
                pathLength={1}
              />
              <path d="M 16.5 12 L 14 11.8" pathLength={1} />
              {/* Emerging primordial true leaf tip (초생 본잎 싹) */}
              <path d="M 12 8.5 L 12 4.5" pathLength={1} />
              <path d="M 12 6.5 L 10.5 5" pathLength={1} />
              <path d="M 12 5.5 L 13.5 4" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Craggy stone fissure strata */}
              <path
                d="M 4 43 L 15 39 L 23 41.5 L 31 38.5 L 44 42.5"
                pathLength={1}
              />
              <path d="M 23 41.5 L 23.5 46.5" pathLength={1} />
              <path d="M 15 39 L 19 43.5" pathLength={1} />
              <path d="M 31 38.5 L 27.5 43" pathLength={1} />
              {/* Organic arching hypocotyl stem */}
              <path d="M 23 40 C 22 30 25.5 24 24 18" pathLength={1} />
              {/* Left Spatulate Cotyledon Leaf with etched venation */}
              <path
                d="M 24 21 C 17 17 8 18.5 8 26 C 8 33 19 31.5 24 24.5"
                pathLength={1}
              />
              <path d="M 14 26 C 18 25 21 24.5 23.5 24" pathLength={1} />
              <path d="M 13 23 L 16 25" pathLength={1} />
              <path d="M 15 28.5 L 18 26.5" pathLength={1} />
              {/* Right Cotyledon (naturally asymmetrical, slightly raised) */}
              <path
                d="M 24 21 C 31 16.5 40 17.5 40 25 C 40 32 29 31 24 24.5"
                pathLength={1}
              />
              <path d="M 34 25 C 30 24.5 27 24.5 24.5 24" pathLength={1} />
              <path d="M 35 22.5 L 32 24.5" pathLength={1} />
              <path d="M 33 28 L 30 26" pathLength={1} />
              {/* Primordial true leaf shoot (어린 본잎 싹) */}
              <path d="M 24 17 L 24 8" pathLength={1} />
              <path d="M 24 13 L 20 10.5 L 24 9.5" pathLength={1} />
              <path d="M 24 11 L 28 8.5 L 24 7.5" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Detailed Geological Stone Crevice Strata */}
              <path d="M 8 86 L 28 78 L 46 83 L 64 77 L 88 85" pathLength={1} />
              <path d="M 46 83 L 47 94" pathLength={1} />
              <path d="M 28 78 L 36 85" pathLength={1} />
              <path d="M 64 77 L 57 85" pathLength={1} />
              <path d="M 18 82 L 25 87" pathLength={1} />
              <path d="M 76 81 L 70 87" pathLength={1} />
              {/* Organic Stem with Growth Nodes emerging from the deep cleft */}
              <path d="M 46 80 C 44 60 51 48 48 36" pathLength={1} />
              <path d="M 45 61 L 48 61" pathLength={1} />
              {/* Left Cotyledon (spatulate leaf blade with primary and secondary veins) */}
              <path
                d="M 48 42 C 34 34 16 37 16 52 C 16 66 38 63 48 49"
                pathLength={1}
              />
              <path d="M 27 52 C 36 50 42 49 47 48" pathLength={1} />
              <path d="M 25 46 L 31 50" pathLength={1} />
              <path d="M 32 43 L 37 48" pathLength={1} />
              <path d="M 29 57 L 35 53" pathLength={1} />
              <path d="M 37 59 L 42 53" pathLength={1} />
              {/* Right Cotyledon (graceful organic asymmetry, lifted towards light) */}
              <path
                d="M 48 42 C 62 33 80 35 80 50 C 80 64 58 62 48 49"
                pathLength={1}
              />
              <path d="M 69 50 C 60 49 54 49 49 48" pathLength={1} />
              <path d="M 71 44 L 65 48" pathLength={1} />
              <path d="M 64 41 L 59 47" pathLength={1} />
              <path d="M 67 55 L 61 52" pathLength={1} />
              <path d="M 59 58 L 54 52" pathLength={1} />
              {/* Emerging Central Primordial True Leaf Shoot */}
              <path d="M 48 34 L 48 16" pathLength={1} />
              <path d="M 48 26 L 40 21 L 48 19" pathLength={1} />
              <path d="M 48 22 L 56 17 L 48 15" pathLength={1} />
              <path d="M 48 16 L 48 10" pathLength={1} />
              <path d="M 48 13 L 45 11" pathLength={1} />
              <path d="M 48 13 L 51 11" pathLength={1} />
            </>
          )}
        </>
      )}

      {/* ─── STAGE III: ROSETTE (톱니형 본잎 - Dent-de-lion) ─── */}
      {canonicalStage === 'rosette' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Stone surface base fissure */}
              <path
                d="M 3 22 L 8 20.5 L 12 21.5 L 16 20.5 L 21 22"
                pathLength={1}
              />
              {/* Central fleshy midrib */}
              <path d="M 12 21.5 L 12 2.5" pathLength={1} />
              {/* Terminal sagittal spear lobe (말단 창모양 엽편) */}
              <path
                d="M 12 2.5 L 9.5 5.5 C 10.5 6 11 6.5 12 7 C 13 6.5 13.5 6 14.5 5.5 Z"
                pathLength={1}
              />
              {/* Left runcinate downward-pointing teeth (하향 경사 사자이빨 톱니) */}
              <path
                d="M 12 7 L 8 9.5 L 10.5 10 C 9.5 11.5 7.5 12.5 6.5 14 L 10 14.5 C 9 16 7 17.5 6 19 L 12 21"
                pathLength={1}
              />
              {/* Right runcinate downward-pointing teeth (자연스러운 미세 비대칭) */}
              <path
                d="M 12 7 L 16 9 L 13.5 10 C 14.5 11.5 16.5 12 17.5 13.5 L 14 14.5 C 15 16 17 17 18 18.5 L 12 21"
                pathLength={1}
              />
              {/* Basal lateral ground-anchoring arcs */}
              <path d="M 5 21 C 7 19.5 9.5 20.2 12 21" pathLength={1} />
              <path d="M 19 21 C 17 19.5 14.5 20.2 12 21" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Natural stone cleft base */}
              <path
                d="M 5 44 L 16 41 L 24 43 L 32 40.5 L 43 43.5"
                pathLength={1}
              />
              {/* Central fleshy midrib (주맥) */}
              <path d="M 24 42 L 24 4.5" pathLength={1} />
              {/* Terminal sagittal spear lobe (말단 창모양 엽편) */}
              <path
                d="M 24 4.5 L 19 9.5 C 20.5 10.5 22 11.2 24 12 C 26 11.2 27.5 10.5 29 9.5 Z"
                pathLength={1}
              />
              {/* Left Runcinate downward teeth (사자이빨 역방향 톱니) */}
              <path d="M 24 12 L 16.5 16 L 20.5 17.5" pathLength={1} />
              <path d="M 20.5 17.5 L 14 23.5 L 19.5 25" pathLength={1} />
              <path d="M 19.5 25 L 11.5 32 L 18 34" pathLength={1} />
              <path d="M 18 34 L 10 40 L 24 42" pathLength={1} />
              {/* Right Runcinate downward teeth (미세한 비대칭 자연미) */}
              <path d="M 24 12 L 31.5 15.5 L 27.5 17.5" pathLength={1} />
              <path d="M 27.5 17.5 L 34 23 L 28.5 25" pathLength={1} />
              <path d="M 28.5 25 L 36.5 31.5 L 30 34" pathLength={1} />
              <path d="M 30 34 L 38 39.5 L 24 42" pathLength={1} />
              {/* Internal lateral venation to tooth apices (측맥 에칭) */}
              <path d="M 24 14.5 L 17.5 16" pathLength={1} />
              <path d="M 24 14.5 L 30.5 15.5" pathLength={1} />
              <path d="M 24 21.5 L 15 23" pathLength={1} />
              <path d="M 24 21.5 L 33 23" pathLength={1} />
              <path d="M 24 29.5 L 13 31.5" pathLength={1} />
              <path d="M 24 29.5 L 35 31.5" pathLength={1} />
              {/* Spreading prostrate basal rosette leaves (지표면에 납작 엎드린 근생엽) */}
              <path
                d="M 24 38 C 16 35.5 10 38 6 42.5 L 12 42.5"
                pathLength={1}
              />
              <path
                d="M 24 38 C 32 35.5 38 38 42 42.5 L 36 42.5"
                pathLength={1}
              />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Natural Geological Stone Crevice Base */}
              <path
                d="M 10 88 L 32 82 L 48 85 L 64 81 L 86 87"
                pathLength={1}
              />
              <path d="M 48 85 L 48 94" pathLength={1} />
              <path d="M 32 82 L 39 88" pathLength={1} />
              <path d="M 64 81 L 58 87" pathLength={1} />
              {/* Central Fleshy Midrib (강인한 중심 주맥) */}
              <path d="M 48 85 L 48 9" pathLength={1} />
              {/* Terminal Sagittal Spear Lobe (말단 창모양 엽편) */}
              <path
                d="M 48 9 L 38 18 C 41 20 44 21.5 48 23 C 52 21.5 55 20 58 18 Z"
                pathLength={1}
              />
              <path d="M 48 14 L 41 17" pathLength={1} />
              <path d="M 48 14 L 55 17" pathLength={1} />
              {/* Tier 1 Runcinate Downward Lobes */}
              <path d="M 48 23 L 33 29 L 41 32" pathLength={1} />
              <path d="M 48 23 L 63 28.5 L 55 32" pathLength={1} />
              <path d="M 48 27 L 35 29" pathLength={1} />
              <path d="M 48 27 L 61 28.5" pathLength={1} />
              {/* Tier 2 Runcinate Downward Lobes */}
              <path d="M 41 32 L 27 42 L 38 45" pathLength={1} />
              <path d="M 55 32 L 69 41.5 L 58 45" pathLength={1} />
              <path d="M 48 39 L 30 42" pathLength={1} />
              <path d="M 48 39 L 66 41.5" pathLength={1} />
              {/* Tier 3 Runcinate Downward Lobes */}
              <path d="M 38 45 L 22 58 L 35 62" pathLength={1} />
              <path d="M 58 45 L 74 57.5 L 61 62" pathLength={1} />
              <path d="M 48 53 L 26 57" pathLength={1} />
              <path d="M 48 53 L 70 56.5" pathLength={1} />
              {/* Tier 4 Basal Runcinate Lobes */}
              <path d="M 35 62 L 18 75 L 48 84" pathLength={1} />
              <path d="M 61 62 L 78 74.5 L 48 84" pathLength={1} />
              <path d="M 48 70 L 23 74" pathLength={1} />
              <path d="M 48 70 L 73 73.5" pathLength={1} />
              {/* Lateral Spreading Rosette Ground Leaves (근생엽 로제트) */}
              <path d="M 48 78 C 32 73 20 78 12 85 L 24 85" pathLength={1} />
              <path d="M 48 78 C 64 73 76 78 84 85 L 72 85" pathLength={1} />
              <path d="M 32 77 L 22 82" pathLength={1} />
              <path d="M 64 77 L 74 82" pathLength={1} />
            </>
          )}
        </>
      )}

      {/* ─── STAGE IV: PAPPUS (비상하는 홀씨 - Airborne Parachute) ─── */}
      {canonicalStage === 'pappus' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Receptacle stem and base cushion */}
              <path d="M 10 22 L 10 16.5" pathLength={1} />
              <path
                d="M 8.5 16.5 C 8.5 15.5 11.5 15.5 11.5 16.5 Z"
                pathLength={1}
              />
              {/* Hemispherical radiating parachute rays */}
              <path d="M 10 15.5 L 3.5 13" pathLength={1} />
              <path d="M 10 15.5 L 5 9.5" pathLength={1} />
              <path d="M 10 15.5 L 8 6.5" pathLength={1} />
              <path d="M 10 15.5 L 11 5.5" pathLength={1} />
              <path d="M 10 15.5 L 14 7" pathLength={1} />
              <path d="M 10 15.5 L 16 10.5" pathLength={1} />
              {/* Filament halo arc */}
              <path d="M 4 13 C 4 8 8 5.5 13 6.5" pathLength={1} />
              {/* Single airborne seed ascending in flight (상공으로 비행 중인 독립 수과) */}
              <path d="M 16.5 7 L 15 10" pathLength={1} />
              <path d="M 16.5 7 L 19 3" pathLength={1} />
              <path d="M 19 3 L 15.5 1" pathLength={1} />
              <path d="M 19 3 L 19 0.5" pathLength={1} />
              <path d="M 19 3 L 22.5 1.5" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Receptacle stem and involucral bracts (화탁 줄기와 총포편) */}
              <path d="M 20 44 L 20 33" pathLength={1} />
              <path d="M 17 33.5 C 17 31 23 31 23 33.5 Z" pathLength={1} />
              <path d="M 17.5 35 L 15.5 38" pathLength={1} />
              <path d="M 22.5 35 L 24.5 38" pathLength={1} />
              {/* Spherical Seedhead Radiating Parachute Rays */}
              <path d="M 20 31 L 7 26" pathLength={1} />
              <path d="M 20 31 L 9.5 19" pathLength={1} />
              <path d="M 20 31 L 14.5 14" pathLength={1} />
              <path d="M 20 31 L 20.5 11" pathLength={1} />
              <path d="M 20 31 L 26.5 13.5" pathLength={1} />
              <path d="M 20 31 L 30 19" pathLength={1} />
              <path d="M 20 31 L 31.5 26" pathLength={1} />
              {/* Gossamer halo arc (구형 솜털 외곽 곡선) */}
              <path
                d="M 8 26 C 7 17 14 11 22 11 C 27 11 31 16 31 26"
                pathLength={1}
              />
              {/* Micro starburst hair tips on rays */}
              <path d="M 14.5 14 L 13.5 11.5" pathLength={1} />
              <path d="M 20.5 11 L 20.5 8" pathLength={1} />
              <path d="M 26.5 13.5 L 28 11" pathLength={1} />
              {/* Free Floating Airborne Seed (상공으로 비행 중인 독립 수과와 관모 우산) */}
              <path d="M 33 16 L 30 21" pathLength={1} />
              <path d="M 33 16 L 38 7.5" pathLength={1} />
              {/* Parachute Canopy of the Flying Seed */}
              <path d="M 38 7.5 L 30.5 3.5" pathLength={1} />
              <path d="M 38 7.5 L 34.5 1.5" pathLength={1} />
              <path d="M 38 7.5 L 39 1" pathLength={1} />
              <path d="M 38 7.5 L 43.5 2.5" pathLength={1} />
              <path d="M 38 7.5 L 45 6" pathLength={1} />
              <path d="M 32 3 C 36 1.5 42 2 44.5 5" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Receptacle stem and reflexed involucral bracts (화탁과 젖혀진 총포편) */}
              <path d="M 40 88 L 40 66" pathLength={1} />
              <path d="M 34 67 C 34 62 46 62 46 67 Z" pathLength={1} />
              <path d="M 35 70 L 30 76" pathLength={1} />
              <path d="M 45 70 L 50 76" pathLength={1} />
              <path d="M 37 72 L 34 77" pathLength={1} />
              <path d="M 43 72 L 46 77" pathLength={1} />
              {/* Mature Radiating Seedhead Parachute Rays */}
              <path d="M 40 62 L 14 52" pathLength={1} />
              <path d="M 40 62 L 19 38" pathLength={1} />
              <path d="M 40 62 L 28 28" pathLength={1} />
              <path d="M 40 62 L 40 22" pathLength={1} />
              <path d="M 40 62 L 52 27" pathLength={1} />
              <path d="M 40 62 L 59 38" pathLength={1} />
              <path d="M 40 62 L 62 52" pathLength={1} />
              {/* Spherical Seedhead Halo Arc (구형 솜털 윤곽) */}
              <path
                d="M 15 52 C 14 34 26 22 41 22 C 54 22 62 34 61 52"
                pathLength={1}
              />
              {/* Micro starburst hair tips on primary rays */}
              <path d="M 28 28 L 25 24" pathLength={1} />
              <path d="M 40 22 L 40 16" pathLength={1} />
              <path d="M 52 27 L 55 23" pathLength={1} />
              <path d="M 19 38 L 15 35" pathLength={1} />
              <path d="M 59 38 L 63 35" pathLength={1} />
              {/* Secondary inner plumule rays */}
              <path d="M 40 62 L 23 45" pathLength={1} />
              <path d="M 40 62 L 34 32" pathLength={1} />
              <path d="M 40 62 L 46 32" pathLength={1} />
              <path d="M 40 62 L 56 45" pathLength={1} />
              {/* Free Floating Airborne Dandelion Seed 1 (Ascending Diagonally Right) */}
              <path d="M 66 32 L 62 40" pathLength={1} />
              <path d="M 66 32 L 75 16" pathLength={1} />
              {/* Open Parachute Canopy of Seed 1 */}
              <path d="M 75 16 L 61 9" pathLength={1} />
              <path d="M 75 16 L 68 5" pathLength={1} />
              <path d="M 75 16 L 76 4" pathLength="1" />
              <path d="M 75 16 L 84 7" pathLength={1} />
              <path d="M 75 16 L 88 13" pathLength={1} />
              <path d="M 64 8 C 72 4 82 5 87 11" pathLength={1} />
              <path d="M 69 7 L 70 3" pathLength={1} />
              <path d="M 83 9 L 85 5" pathLength={1} />
              {/* Free Floating Airborne Seed 2 (Higher Drift at Apex) */}
              <path d="M 86 10 L 89 5" pathLength={1} />
              <path d="M 89 5 L 85 2" pathLength={1} />
              <path d="M 89 5 L 93 2" pathLength={1} />
            </>
          )}
        </>
      )}
    </svg>
  );
}
