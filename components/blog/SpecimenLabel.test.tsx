import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SpecimenLabel } from './SpecimenLabel';

describe('SpecimenLabel', () => {
  it('renders default card variant with specimen ID, harvest date, and habitat', () => {
    render(<SpecimenLabel />);

    expect(screen.getByText('SNG-2026-001')).toBeInTheDocument();
    expect(screen.getByText('2026.11.12')).toBeInTheDocument();
    expect(screen.getByText('Cloudflare Workers')).toBeInTheDocument();
    expect(screen.getByText(/Stage II: Sprout/)).toBeInTheDocument();
    expect(
      screen.getByText('돌 틈의 표본실 (The Herbarium in the Crevice)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Taraxacum platycarpum Dahlst.')
    ).toBeInTheDocument();
  });

  it('renders tag variant with compact information', () => {
    render(
      <SpecimenLabel
        variant="tag"
        specimenNo="SNG-2026-042"
        harvestDate="2026.12.01"
      />
    );

    expect(screen.getByText('SNG-2026-042')).toBeInTheDocument();
    expect(screen.getByText('2026.12.01')).toBeInTheDocument();
  });

  it('renders plate variant with horizontal layout', () => {
    render(
      <SpecimenLabel
        variant="plate"
        specimenNo="SNG-2026-108"
        habitat="Edge Runtime"
        stage="pappus"
      />
    );

    expect(screen.getByText('SNG-2026-108')).toBeInTheDocument();
    expect(screen.getByText('Edge Runtime')).toBeInTheDocument();
    expect(screen.getByText(/Stage IV: Pappus/)).toBeInTheDocument();
  });

  it('supports legacy stage mappings seamlessly', () => {
    render(<SpecimenLabel stage="sapling" />);
    expect(screen.getByText(/Stage II: Sprout/)).toBeInTheDocument();

    render(<SpecimenLabel stage="evergreen" />);
    expect(screen.getByText(/Stage IV: Pappus/)).toBeInTheDocument();
  });
});
