import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { GrowthGlyph, normalizeStage } from './GrowthGlyph';

describe('GrowthGlyph', () => {
  it('normalizes legacy and alternative stage names', () => {
    expect(normalizeStage('seed')).toBe('seed');
    expect(normalizeStage('sprout')).toBe('sprout');
    expect(normalizeStage('rosette')).toBe('rosette');
    expect(normalizeStage('pappus')).toBe('pappus');
    expect(normalizeStage('sapling')).toBe('sprout');
    expect(normalizeStage('evergreen')).toBe('pappus');
  });

  it('renders seed stage with 2px single stroke and pathLength=1', () => {
    const { container } = render(<GrowthGlyph stage="seed" size={24} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
    expect(svg?.getAttribute('stroke-width')).toBe('2');
    expect(svg?.getAttribute('stroke')).toBe('var(--color-brand-primary)');

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
    paths.forEach((p) => {
      const lengthAttr =
        p.getAttribute('pathLength') ?? p.getAttribute('pathlength');
      expect(lengthAttr).toBe('1');
    });
  });

  it('switches optical size viewBoxes based on size prop (24, 48, 96)', () => {
    const { container: c24 } = render(<GrowthGlyph stage="sprout" size={24} />);
    expect(c24.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 24 24');

    const { container: c48 } = render(<GrowthGlyph stage="sprout" size={48} />);
    expect(c48.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 48 48');

    const { container: c96 } = render(<GrowthGlyph stage="sprout" size={96} />);
    expect(c96.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 96 96');
  });

  it('renders rosette and pappus stages cleanly', () => {
    const { container: rContainer } = render(
      <GrowthGlyph stage="rosette" size={48} />
    );
    expect(rContainer.querySelectorAll('path').length).toBeGreaterThan(0);

    const { container: pContainer } = render(
      <GrowthGlyph stage="pappus" size={48} />
    );
    expect(pContainer.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('applies custom strokeColor and animation styles when requested', () => {
    const { container } = render(
      <GrowthGlyph stage="pappus" strokeColor="gold" animated />
    );
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('stroke')).toBe('gold');
    expect(svg?.style.strokeDasharray).toBe('1');
    expect(svg?.style.animation).toContain('sng-glyph-draw');
  });
});
