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
      {canonicalStage === 'seed' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Stone Crevice Bed */}
              <path d="M 4 21 L 10 20 L 14 20 L 20 21" pathLength={1} />
              {/* Dandelion Achene (Spindle Body) */}
              <path
                d="M 12 12 C 10 14 10 18 12 20 C 14 18 14 14 12 12 Z"
                pathLength={1}
              />
              {/* Central Longitudinal Rib */}
              <path d="M 12 13 L 12 19" pathLength={1} />
              {/* Beak Stalk */}
              <path d="M 12 12 L 12 6" pathLength={1} />
              {/* Pappus Ray Tips */}
              <path d="M 12 6 L 7 3" pathLength={1} />
              <path d="M 12 6 L 12 2" pathLength={1} />
              <path d="M 12 6 L 17 3" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Rock Fissure / Crevice Ground */}
              <path d="M 8 43 L 18 40 L 24 41 L 30 40 L 40 43" pathLength={1} />
              <path d="M 19 44 L 24 41 L 29 44" pathLength={1} />
              <path d="M 24 41 L 24 46" pathLength={1} />
              {/* Dandelion Achene Spindle Body */}
              <path
                d="M 24 24 C 20 27 20 35 24 39 C 28 35 28 27 24 24 Z"
                pathLength={1}
              />
              {/* Rib Etchings */}
              <path d="M 24 25 L 24 37" pathLength={1} />
              <path d="M 22 27 C 21 30 21 34 23 37" pathLength={1} />
              <path d="M 26 27 C 27 30 27 34 25 37" pathLength={1} />
              {/* Collar Ring */}
              <path d="M 22 24 L 26 24" pathLength={1} />
              {/* Slender Beak Stalk */}
              <path d="M 24 24 L 24 11" pathLength={1} />
              {/* Crown Rays (Pappus Umbrella) */}
              <path d="M 24 11 L 13 6" pathLength={1} />
              <path d="M 24 11 L 18 4" pathLength={1} />
              <path d="M 24 11 L 24 3" pathLength={1} />
              <path d="M 24 11 L 30 4" pathLength={1} />
              <path d="M 24 11 L 35 6" pathLength={1} />
              {/* Micro Plumule Barbs */}
              <path d="M 16 8 L 17 6" pathLength={1} />
              <path d="M 32 8 L 31 6" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Rock Strata & Fissure Bed */}
              <path
                d="M 16 86 L 36 80 L 48 82 L 60 80 L 80 86"
                pathLength={1}
              />
              <path d="M 38 88 L 48 82 L 58 88" pathLength={1} />
              <path d="M 48 82 L 48 91" pathLength={1} />
              <path d="M 28 84 L 34 82" pathLength={1} />
              <path d="M 68 84 L 62 82" pathLength={1} />
              {/* Dandelion Achene (Spindle Body) */}
              <path
                d="M 48 48 C 40 54 40 70 48 78 C 56 70 56 54 48 48 Z"
                pathLength={1}
              />
              {/* Longitudinal Ribs */}
              <path d="M 48 50 L 48 75" pathLength={1} />
              <path d="M 44 53 C 42 60 42 68 46 75" pathLength={1} />
              <path d="M 52 53 C 54 60 54 68 50 75" pathLength={1} />
              {/* Micro Spines on Achene Shoulder */}
              <path d="M 43 54 L 39 51" pathLength={1} />
              <path d="M 53 54 L 57 51" pathLength={1} />
              <path d="M 44 60 L 40 58" pathLength={1} />
              <path d="M 52 60 L 56 58" pathLength={1} />
              {/* Apical Collar Ring */}
              <path d="M 44 48 L 52 48" pathLength={1} />
              {/* Slender Beak Stalk */}
              <path d="M 48 48 L 48 22" pathLength={1} />
              {/* Crown Rays (Pappus Umbrella) */}
              <path d="M 48 22 L 24 12" pathLength={1} />
              <path d="M 48 22 L 32 8" pathLength={1} />
              <path d="M 48 22 L 41 5" pathLength={1} />
              <path d="M 48 22 L 48 4" pathLength={1} />
              <path d="M 48 22 L 55 5" pathLength={1} />
              <path d="M 48 22 L 64 8" pathLength={1} />
              <path d="M 48 22 L 72 12" pathLength={1} />
              {/* Fine Plumose Lateral Hairs */}
              <path d="M 30 15 L 32 11" pathLength={1} />
              <path d="M 66 15 L 64 11" pathLength={1} />
              <path d="M 37 12 L 40 9" pathLength={1} />
              <path d="M 59 12 L 56 9" pathLength={1} />
              <path d="M 44 10 L 46 7" pathLength={1} />
              <path d="M 52 10 L 50 7" pathLength={1} />
            </>
          )}
        </>
      )}

      {canonicalStage === 'sprout' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Rock Fissure Crevice */}
              <path d="M 3 21 L 9 19 L 12 21 L 15 19 L 21 21" pathLength={1} />
              <path d="M 12 21 L 12 23" pathLength={1} />
              {/* Arching Stem */}
              <path d="M 12 19 C 11.5 15 12.5 13 12 10" pathLength={1} />
              {/* Left Cotyledon Leaf */}
              <path
                d="M 12 11 C 9 9 5 10 5 13 C 5 16 10 15 12 12"
                pathLength={1}
              />
              {/* Right Cotyledon Leaf */}
              <path
                d="M 12 11 C 15 9 19 10 19 13 C 19 16 14 15 12 12"
                pathLength={1}
              />
              {/* Apical Budding Tip */}
              <path d="M 12 9 L 12 5" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Rock Crevice Strata */}
              <path d="M 6 42 L 18 38 L 24 41 L 30 38 L 42 42" pathLength={1} />
              <path d="M 24 41 L 24 46" pathLength={1} />
              <path d="M 12 40 L 16 43" pathLength={1} />
              <path d="M 36 40 L 32 43" pathLength={1} />
              {/* Emerging Arching Stem */}
              <path d="M 24 39 C 23 31 25 26 24 20" pathLength={1} />
              {/* Left Cotyledon with Vein */}
              <path
                d="M 24 23 C 18 19 10 20 10 26 C 10 32 20 31 24 25"
                pathLength={1}
              />
              <path d="M 15 26 L 21 25" pathLength={1} />
              {/* Right Cotyledon with Vein */}
              <path
                d="M 24 23 C 30 19 38 20 38 26 C 38 32 28 31 24 25"
                pathLength={1}
              />
              <path d="M 33 26 L 27 25" pathLength={1} />
              {/* Emerging True Leaf Tip */}
              <path d="M 24 19 L 24 10" pathLength={1} />
              <path d="M 24 14 L 21 12" pathLength={1} />
              <path d="M 24 12 L 27 10" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Rock Crevice Geological Strata */}
              <path
                d="M 12 84 L 36 76 L 48 81 L 60 76 L 84 84"
                pathLength={1}
              />
              <path d="M 48 81 L 48 92" pathLength={1} />
              <path d="M 34 82 L 48 81 L 62 82" pathLength={1} />
              <path d="M 22 80 L 30 86" pathLength={1} />
              <path d="M 74 80 L 66 86" pathLength={1} />
              {/* Main Stem with Growth Nodes */}
              <path d="M 48 78 C 46 62 50 52 48 40" pathLength={1} />
              <path d="M 47 62 L 49 62" pathLength={1} />
              {/* Left Cotyledon Leaf and Fine Venation */}
              <path
                d="M 48 46 C 36 38 20 40 20 52 C 20 64 40 62 48 50"
                pathLength={1}
              />
              <path d="M 28 52 C 36 50 42 50 48 48" pathLength={1} />
              <path d="M 32 46 L 36 49" pathLength={1} />
              <path d="M 30 57 L 35 54" pathLength={1} />
              {/* Right Cotyledon Leaf and Fine Venation */}
              <path
                d="M 48 46 C 60 38 76 40 76 52 C 76 64 56 62 48 50"
                pathLength={1}
              />
              <path d="M 68 52 C 60 50 54 50 48 48" pathLength={1} />
              <path d="M 64 46 L 60 49" pathLength={1} />
              <path d="M 66 57 L 61 54" pathLength={1} />
              {/* Emerging Central Shoot (Young Leaf Blades) */}
              <path d="M 48 38 L 48 18" pathLength={1} />
              <path
                d="M 48 26 L 42 22 L 48 19 L 54 22 L 48 26"
                pathLength={1}
              />
              <path d="M 48 18 L 48 12" pathLength={1} />
              <path d="M 48 15 L 45 13" pathLength={1} />
              <path d="M 48 15 L 51 13" pathLength={1} />
            </>
          )}
        </>
      )}

      {canonicalStage === 'rosette' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Central Midrib */}
              <path d="M 12 22 L 12 3" pathLength={1} />
              {/* Left Runcinate Serrated Teeth */}
              <path
                d="M 12 3 L 8 7 L 10 8 L 7 12 L 9 13 L 6 17 L 12 21"
                pathLength={1}
              />
              {/* Right Runcinate Serrated Teeth */}
              <path
                d="M 12 3 L 16 7 L 14 8 L 17 12 L 15 13 L 18 17 L 12 21"
                pathLength={1}
              />
              {/* Ground Rosette Spreading Basal Arcs */}
              <path d="M 5 21 C 8 19 10 20 12 21" pathLength={1} />
              <path d="M 19 21 C 16 19 14 20 12 21" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Ground Rock Fissure Line */}
              <path d="M 6 43 L 24 41 L 42 43" pathLength={1} />
              {/* Central Leaf Midrib */}
              <path d="M 24 41 L 24 5" pathLength={1} />
              {/* Left Runcinate Serrated Blade */}
              <path
                d="M 24 5 L 17 11 L 20 13 L 14 20 L 18 22 L 12 30 L 17 32 L 11 38 L 24 41"
                pathLength={1}
              />
              {/* Right Runcinate Serrated Blade */}
              <path
                d="M 24 5 L 31 11 L 28 13 L 34 20 L 30 22 L 36 30 L 31 32 L 37 38 L 24 41"
                pathLength={1}
              />
              {/* Lateral Venation to Tooth Apices */}
              <path d="M 24 12 L 18 11" pathLength={1} />
              <path d="M 24 12 L 30 11" pathLength={1} />
              <path d="M 24 21 L 15 20" pathLength={1} />
              <path d="M 24 21 L 33 20" pathLength={1} />
              <path d="M 24 31 L 13 30" pathLength={1} />
              <path d="M 24 31 L 35 30" pathLength={1} />
              {/* Basal Spreading Rosette Leaves */}
              <path d="M 24 37 C 16 35 10 37 7 41 L 11 41" pathLength={1} />
              <path d="M 24 37 C 32 35 38 37 41 41 L 37 41" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Rock Ground Fissure Bed */}
              <path d="M 12 86 L 48 83 L 84 86" pathLength={1} />
              <path d="M 36 85 L 48 83 L 60 85" pathLength={1} />
              {/* Central Leaf Main Midrib */}
              <path d="M 48 84 L 48 10" pathLength={1} />
              {/* Terminal Sagittal Lobe */}
              <path d="M 48 10 L 40 18 L 44 21" pathLength={1} />
              <path d="M 48 10 L 56 18 L 52 21" pathLength={1} />
              {/* Tier 1 Runcinate Teeth */}
              <path d="M 44 21 L 34 29 L 39 32" pathLength={1} />
              <path d="M 52 21 L 62 29 L 57 32" pathLength={1} />
              <path d="M 48 24 L 37 28" pathLength={1} />
              <path d="M 48 24 L 59 28" pathLength={1} />
              {/* Tier 2 Runcinate Teeth */}
              <path d="M 39 32 L 28 42 L 34 45" pathLength={1} />
              <path d="M 57 32 L 68 42 L 62 45" pathLength={1} />
              <path d="M 48 37 L 31 41" pathLength={1} />
              <path d="M 48 37 L 65 41" pathLength={1} />
              {/* Tier 3 Runcinate Teeth */}
              <path d="M 34 45 L 24 58 L 31 61" pathLength={1} />
              <path d="M 62 45 L 72 58 L 65 61" pathLength={1} />
              <path d="M 48 51 L 27 57" pathLength={1} />
              <path d="M 48 51 L 69 57" pathLength={1} />
              {/* Tier 4 Runcinate Teeth / Base */}
              <path d="M 31 61 L 22 75 L 48 83" pathLength={1} />
              <path d="M 65 61 L 74 75 L 48 83" pathLength={1} />
              <path d="M 48 67 L 25 73" pathLength={1} />
              <path d="M 48 67 L 71 73" pathLength={1} />
              {/* Lateral Spreading Rosette Ground Leaves */}
              <path d="M 48 76 C 32 72 20 76 14 84 L 22 84" pathLength={1} />
              <path d="M 48 76 C 64 72 76 76 82 84 L 74 84" pathLength={1} />
              <path d="M 30 76 L 22 81" pathLength={1} />
              <path d="M 66 76 L 74 81" pathLength={1} />
            </>
          )}
        </>
      )}

      {canonicalStage === 'pappus' && (
        <>
          {opticalSize === 24 && (
            <>
              {/* Dandelion Achene Seed at Base */}
              <path d="M 12 21 L 12 17" pathLength={1} />
              {/* Slender Beak Stalk */}
              <path d="M 12 17 L 12 10" pathLength={1} />
              {/* Radiating Parachute Rays */}
              <path d="M 12 10 L 5 6" pathLength={1} />
              <path d="M 12 10 L 8 4" pathLength={1} />
              <path d="M 12 10 L 12 3" pathLength={1} />
              <path d="M 12 10 L 16 4" pathLength={1} />
              <path d="M 12 10 L 19 6" pathLength={1} />
              {/* Capillary Web Filament Arc */}
              <path d="M 6 6 Q 12 3 18 6" pathLength={1} />
              {/* Airborne Floating Seed taking flight */}
              <path d="M 18 10 L 21 8" pathLength={1} />
              <path d="M 21 8 L 22 6" pathLength={1} />
            </>
          )}

          {opticalSize === 48 && (
            <>
              {/* Dandelion Receptacle Stalk */}
              <path d="M 24 44 L 24 35" pathLength={1} />
              <path d="M 21 35 C 21 33 27 33 27 35 Z" pathLength={1} />
              {/* Radiating Pappus Umbrella Rays */}
              <path d="M 24 33 L 12 28" pathLength={1} />
              <path d="M 24 33 L 15 22" pathLength={1} />
              <path d="M 24 33 L 20 17" pathLength={1} />
              <path d="M 24 33 L 24 15" pathLength={1} />
              <path d="M 24 33 L 28 17" pathLength={1} />
              <path d="M 24 33 L 33 22" pathLength={1} />
              <path d="M 24 33 L 36 28" pathLength={1} />
              {/* Outer Spherical Halo Ring Arc */}
              <path
                d="M 13 28 C 12 20 18 15 24 15 C 30 15 36 20 35 28"
                pathLength={1}
              />
              {/* Micro Starburst Hair Tips */}
              <path d="M 20 17 L 19 14" pathLength={1} />
              <path d="M 24 15 L 24 12" pathLength={1} />
              <path d="M 28 17 L 29 14" pathLength={1} />
              {/* Airborne Floating Seed Taking Flight */}
              <path d="M 37 16 L 34 20" pathLength={1} />
              <path d="M 37 16 L 41 11" pathLength={1} />
              <path d="M 41 11 L 36 8" pathLength={1} />
              <path d="M 41 11 L 41 6" pathLength={1} />
              <path d="M 41 11 L 46 8" pathLength={1} />
            </>
          )}

          {opticalSize === 96 && (
            <>
              {/* Receptacle Stalk & Bracts */}
              <path d="M 48 88 L 48 68" pathLength={1} />
              <path d="M 42 70 C 44 67 52 67 54 70" pathLength={1} />
              <path d="M 41 68 C 41 64 55 64 55 68 Z" pathLength={1} />
              {/* Involucral Bract Tips */}
              <path d="M 43 72 L 40 76" pathLength={1} />
              <path d="M 53 72 L 56 76" pathLength={1} />
              {/* Mature Radiating Pappus Parachute Rays */}
              <path d="M 48 64 L 22 55" pathLength={1} />
              <path d="M 48 64 L 27 42" pathLength={1} />
              <path d="M 48 64 L 35 32" pathLength={1} />
              <path d="M 48 64 L 42 26" pathLength={1} />
              <path d="M 48 64 L 48 24" pathLength={1} />
              <path d="M 48 64 L 54 26" pathLength={1} />
              <path d="M 48 64 L 61 32" pathLength={1} />
              <path d="M 48 64 L 69 42" pathLength={1} />
              <path d="M 48 64 L 74 55" pathLength={1} />
              {/* Spherical Seedhead Filament Halo Arc */}
              <path
                d="M 23 55 C 22 38 34 24 48 24 C 62 24 74 38 73 55"
                pathLength={1}
              />
              {/* Micro Starburst Hair Tips on Primary Rays */}
              <path d="M 35 32 L 32 28" pathLength={1} />
              <path d="M 42 26 L 40 21" pathLength={1} />
              <path d="M 48 24 L 48 18" pathLength={1} />
              <path d="M 54 26 L 56 21" pathLength={1} />
              <path d="M 61 32 L 64 28" pathLength={1} />
              <path d="M 27 42 L 23 39" pathLength={1} />
              <path d="M 69 42 L 73 39" pathLength={1} />
              {/* Free Floating Airborne Dandelion Seed 1 (Ascending Right) */}
              <path d="M 72 30 L 68 37" pathLength={1} />
              <path d="M 72 30 L 78 20" pathLength={1} />
              <path d="M 78 20 L 70 14" pathLength={1} />
              <path d="M 78 20 L 78 11" pathLength={1} />
              <path d="M 78 20 L 86 14" pathLength={1} />
              <path d="M 78 20 L 84 18" pathLength={1} />
              <path d="M 78 20 L 72 17" pathLength={1} />
              {/* Free Floating Airborne Seed 2 (Higher Apex) */}
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
