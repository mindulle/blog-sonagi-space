import React from 'react';
import { GrowthGlyph, GrowthStage, normalizeStage } from './GrowthGlyph';

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
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] font-mono text-xs select-none ${className}`}
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
          />
        )}
        <div className="flex items-center gap-1.5 tabular-nums">
          <span
            className="font-bold tracking-tight"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            {specimenNo}
          </span>
          <span style={{ color: 'var(--color-border-default)' }}>|</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>
            {harvestDate}
          </span>
        </div>
      </div>
    );
  }

  // 2. Plate Variant (Horizontal Header Bar)
  if (variant === 'plate') {
    const size = glyphSize || 48;
    return (
      <div
        className={`relative overflow-hidden p-4 rounded-[4px] font-mono ${className}`}
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '2px solid var(--color-border-strong)',
        }}
      >
        {/* Top Washi Mounting Strip Accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-b-[2px]"
          style={{
            backgroundColor: 'var(--color-brand-primary)',
            opacity: 0.85,
          }}
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3.5">
            {showGlyph && (
              <div
                className="flex items-center justify-center p-2 rounded-[4px]"
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
            <div>
              <div className="flex items-center gap-2 text-xs tabular-nums">
                <span
                  className="font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-[2px]"
                  style={{
                    backgroundColor: 'var(--color-bg-overlay)',
                    color: 'var(--color-brand-primary)',
                  }}
                >
                  {specimenNo}
                </span>
                <span style={{ color: 'var(--color-text-muted)' }}>
                  {stageDisplay}
                </span>
              </div>
              <div
                className="text-sm font-semibold tracking-tight mt-1"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {title}
              </div>
              <div
                className="text-xs italic tracking-normal"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {scientificName}
              </div>
            </div>
          </div>

          <div
            className="flex flex-col text-xs text-right tabular-nums space-y-1 pl-4 border-l"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>
                HABITAT:{' '}
              </span>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {habitat}
              </span>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)' }}>DATE: </span>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
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
      className={`relative p-6 rounded-[4px] font-mono select-text transition-shadow ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '2px solid var(--color-border-strong)', // The True 2px Stem (Gold Accent)
        boxShadow:
          '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06)',
      }}
      aria-label={`Botanical Specimen ${specimenNo}`}
    >
      {/* Top Center Washi Paper Mount Tape (한지 마운트 띠 장식) */}
      <div
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-5 w-28 rounded-[2px] shadow-sm pointer-events-none"
        style={{
          backgroundColor: 'var(--color-brand-primary)',
          opacity: 0.9,
          border: '1px solid var(--color-border-strong)',
        }}
        aria-hidden="true"
      />

      {/* Header: Specimen Identification & Botanical Seal */}
      <header
        className="flex items-center justify-between pb-4 border-b"
        style={{ borderColor: 'var(--color-border-subtle)' }}
      >
        <div className="flex flex-col gap-1">
          <span
            className="text-[11px] font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            HERBARIUM SPECIMEN SHEET
          </span>
          <h3
            className="text-base font-bold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {title}
          </h3>
          <p
            className="text-xs italic tracking-normal"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {scientificName}
          </p>
        </div>

        {showGlyph && (
          <div
            className="flex items-center justify-center w-14 h-14 rounded-[4px]"
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
      <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-4 text-xs tabular-nums">
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            SPECIMEN NO.
          </span>
          <span
            className="font-bold text-sm tracking-tight"
            style={{ color: 'var(--color-brand-primary)' }}
          >
            {specimenNo}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            HARVEST DATE
          </span>
          <span
            className="font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {harvestDate}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            GROWTH STAGE
          </span>
          <span
            className="font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {stageDisplay}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] uppercase tracking-wider font-semibold"
            style={{ color: 'var(--color-text-muted)' }}
          >
            HABITAT / MEDIUM
          </span>
          <span
            className="font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {habitat}
          </span>
        </div>
      </div>

      {/* Footer: Curatorial Verification Bar */}
      <footer
        className="mt-5 pt-3 flex items-center justify-between text-[11px] border-t"
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
        <div
          className="text-[10px] uppercase tracking-wider"
          style={{ color: 'var(--color-text-muted)' }}
        >
          MDS v0.1.0 • BOTANICAL SSOT
        </div>
      </footer>
    </section>
  );
}
