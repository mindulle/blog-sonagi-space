import React from 'react';
import { GrowthGlyph, GrowthStage, normalizeStage } from './GrowthGlyph';
import { WashiTapeStrip } from './HerbariumTexture';
import { HerbariumSeal } from './HerbariumSeal';

export interface SpecimenLabelProps {
  /**
   * Botanical Specimen identifier, e.g. "SNG-2026-001"
   */
  specimenNo?: string;
  /**
   * Date of harvest / documentation, e.g. "2026.11.12"
   */
  harvestDate?: string;
  /**
   * Habitat where the thought was cultivated, e.g. "Cloudflare Workers"
   */
  habitat?: string;
  /**
   * Growth stage: seed | sprout | rosette | pappus (or legacy sapling | evergreen)
   */
  stage?: GrowthStage;
  /**
   * Botanical common or Korean title, e.g. "토종 민들레 (Korean Dandelion)" or article title
   */
  title?: string;
  /**
   * Formal binomial scientific nomenclature, e.g. "Taraxacum platycarpum Dahlst."
   */
  scientificName?: string;
  /**
   * Curator / Gardener designation, e.g. "The Gardener"
   */
  collector?: string;
  /**
   * Layout visual variant:
   * - 'card': Full herbarium mounting sheet with top washi mounting strip & metadata grid
   * - 'plate': Horizontal archival specimen badge plate (for headers and post meta)
   * - 'tag': Compact seal tag with glyph & specimen number
   */
  variant?: 'card' | 'plate' | 'tag';
  /**
   * Whether to display the 2px botanical etching growth glyph
   */
  showGlyph?: boolean;
  /**
   * Optical size for the growth glyph
   */
  glyphSize?: 24 | 48 | 96;
  /**
   * Optional custom CSS class name
   */
  className?: string;
}

const stageLabels: Record<'seed' | 'sprout' | 'rosette' | 'pappus', string> = {
  seed: 'Stage I: Seed (겨울 씨앗)',
  sprout: 'Stage II: Sprout (돌 틈의 떡잎)',
  rosette: 'Stage III: Rosette (톱니형 본잎)',
  pappus: 'Stage IV: Pappus (비상하는 홀씨)',
};

export function SpecimenLabel({
  specimenNo = 'SNG-2026-001',
  harvestDate = '2026.11.12',
  habitat = 'Cloudflare Workers',
  stage = 'sprout',
  title = '돌 틈의 표본실 (The Herbarium in the Crevice)',
  scientificName = 'Taraxacum platycarpum Dahlst.',
  collector = 'The Gardener',
  variant = 'card',
  showGlyph = true,
  glyphSize,
  className = '',
}: SpecimenLabelProps) {
  const canonicalStage = normalizeStage(stage);
  const stageDisplay = stageLabels[canonicalStage];

  // 1. Tag Variant (Compact Seal)
  if (variant === 'tag') {
    const size = glyphSize || 24;
    return (
      <div
        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-[4px] font-mono text-xs select-none max-w-full overflow-hidden ${className}`}
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border-default)',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        }}
      >
        {showGlyph && (
          <GrowthGlyph
            stage={canonicalStage}
            size={size}
            strokeColor="var(--color-brand-primary)"
            className="shrink-0"
          />
        )}
        <div className="flex items-center gap-1.5 tabular-nums truncate">
          <span
            className="font-bold tracking-tight shrink-0"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            {specimenNo}
          </span>
          <span style={{ color: 'var(--color-border-default)' }}>|</span>
          <span
            className="truncate"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {harvestDate}
          </span>
        </div>
      </div>
    );
  }

  // 2. Plate Variant (Horizontal Header Bar)
  if (variant === 'plate') {
    const size = glyphSize || 40;
    return (
      <div
        className={`relative overflow-hidden p-4 sm:p-5 rounded-[4px] font-mono w-full sng-texture-folio ${className}`}
        style={{
          backgroundColor: 'var(--mds-color-bg-surface)',
          border: '1px solid var(--mds-color-border-default)',
          borderLeft: '4px solid var(--mds-color-brand-primary)',
          boxShadow: 'var(--mds-shadow-raised)',
        }}
      >
        {/* Top Washi Mounting Strip Accent */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 pointer-events-none">
          <WashiTapeStrip width={96} height={10} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            {showGlyph && (
              <div
                className="flex items-center justify-center p-2 rounded-[4px] shrink-0"
                style={{
                  backgroundColor: 'var(--mds-color-bg-overlay)',
                  border: '1px solid var(--mds-color-border-subtle)',
                }}
              >
                <GrowthGlyph
                  stage={canonicalStage}
                  size={size}
                  strokeColor="var(--mds-color-brand-primary)"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs tabular-nums mb-1">
                <span
                  className="font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-[2px] shrink-0"
                  style={{
                    backgroundColor: 'var(--mds-color-bg-overlay)',
                    color: 'var(--mds-color-brand-primary)',
                  }}
                >
                  {specimenNo}
                </span>
                <span
                  className="font-medium"
                  style={{ color: 'var(--mds-color-text-muted)' }}
                >
                  {stageDisplay}
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-[var(--mds-color-text-primary)] leading-snug">
                {title}
              </div>
              <div className="text-[11px] sm:text-xs italic tracking-normal mt-0.5 text-[var(--mds-color-text-secondary)]">
                {scientificName}
              </div>
            </div>
          </div>

          <div
            className="flex flex-row sm:flex-col justify-between sm:justify-start text-[11px] sm:text-xs sm:text-right tabular-nums pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l sm:pl-4 shrink-0 gap-1.5"
            style={{ borderColor: 'var(--mds-color-border-subtle)' }}
          >
            <div>
              <span style={{ color: 'var(--mds-color-text-muted)' }}>
                HABITAT:{' '}
              </span>
              <span
                className="font-medium"
                style={{ color: 'var(--mds-color-text-secondary)' }}
              >
                {habitat}
              </span>
            </div>
            <div>
              <span style={{ color: 'var(--mds-color-text-muted)' }}>
                HARVEST:{' '}
              </span>
              <span
                className="font-medium"
                style={{ color: 'var(--mds-color-text-secondary)' }}
              >
                {harvestDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Card Variant (Full Classical Herbarium Mount Sheet)
  const size = glyphSize || 48;
  return (
    <section
      className={`relative p-4 sm:p-6 rounded-[4px] font-mono select-text transition-shadow w-full sng-texture-folio ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '2px solid var(--color-border-strong)', // The True 2px Stem (Gold Accent)
        boxShadow:
          '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06)',
      }}
      aria-label={`Botanical Specimen ${specimenNo}`}
    >
      {/* Top Center Real Washi Paper Mount Tape */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none">
        <WashiTapeStrip width={112} height={16} />
      </div>

      {/* 4 Corner Archival Linen Mounting Tabs (표본지 사각 린넨 마운트 탭) */}
      <div
        className="absolute top-2 left-2 w-3.5 h-3.5 pointer-events-none opacity-40 border-t-2 border-l-2"
        style={{ borderColor: 'var(--color-brand-primary)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-2 right-2 w-3.5 h-3.5 pointer-events-none opacity-40 border-t-2 border-r-2"
        style={{ borderColor: 'var(--color-brand-primary)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2 left-2 w-3.5 h-3.5 pointer-events-none opacity-40 border-b-2 border-l-2"
        style={{ borderColor: 'var(--color-brand-primary)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2 right-2 w-3.5 h-3.5 pointer-events-none opacity-40 border-b-2 border-r-2"
        style={{ borderColor: 'var(--color-brand-primary)' }}
        aria-hidden="true"
      />

      {/* Header: Specimen Identification & Botanical Seal */}
      <header
        className="flex items-start justify-between pb-3 sm:pb-4 border-b gap-3"
        style={{ borderColor: 'var(--color-border-subtle)' }}
      >
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            HERBARIUM SPECIMEN SHEET
          </span>
          <h3
            className="text-sm sm:text-base font-bold tracking-tight break-words"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {title}
          </h3>
          <p
            className="text-[11px] sm:text-xs italic tracking-normal truncate"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {scientificName}
          </p>
        </div>

        {showGlyph && (
          <div
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] shrink-0"
            style={{
              backgroundColor: 'var(--color-bg-overlay)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <GrowthGlyph
              stage={canonicalStage}
              size={size}
              strokeColor="var(--color-brand-primary)"
            />
          </div>
        )}
      </header>

      {/* Structured Botanical Metadata Matrix (JetBrains Mono Tabular) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3.5 gap-x-4 pt-3 sm:pt-4 text-xs tabular-nums">
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            SPECIMEN NO.
          </span>
          <span
            className="font-bold text-xs sm:text-sm tracking-tight"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            {specimenNo}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            HARVEST DATE
          </span>
          <span
            className="font-medium text-xs sm:text-sm"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {harvestDate}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            GROWTH STAGE
          </span>
          <span
            className="font-medium text-xs sm:text-sm"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {stageDisplay}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            HABITAT / MEDIUM
          </span>
          <span
            className="font-medium text-xs sm:text-sm break-words"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {habitat}
          </span>
        </div>
      </div>

      {/* Footer: Curatorial Verification Bar with Embossed Seal */}
      <footer
        className="mt-4 sm:mt-5 pt-3 flex items-center justify-between text-[10px] sm:text-[11px] border-t"
        style={{ borderColor: 'var(--color-border-subtle)' }}
      >
        <div className="flex items-center gap-1.5">
          <span style={{ color: 'var(--color-text-muted)' }}>CURATOR:</span>
          <span
            className="font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {collector}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-wider hidden sm:inline"
            style={{ color: 'var(--color-text-muted)' }}
          >
            MDS v0.1.0 • BOTANICAL SSOT
          </span>
          <HerbariumSeal size={32} registrationNo={specimenNo.slice(0, 8)} />
        </div>
      </footer>
    </section>
  );
}
