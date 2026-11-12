import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { VineFrame } from './VineFrame';

describe('VineFrame Component (85% Golden Snap Motion)', () => {
  it('renders default divider variant with SVG path and circles', () => {
    const { container } = render(<VineFrame variant="divider" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();

    const path = container.querySelector('path.sng-vine-drawing');
    expect(path).toBeDefined();
  });

  it('renders corner variant correctly', () => {
    const { container } = render(<VineFrame variant="corner" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 120 120');
  });

  it('applies custom strokeColor when provided', () => {
    const customColor = '#10b981';
    const { container } = render(<VineFrame strokeColor={customColor} />);
    const path = container.querySelector('path.sng-vine-drawing');
    expect(path?.getAttribute('stroke')).toBe(customColor);
  });
});
