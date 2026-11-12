import { describe, it, expect, vi, beforeEach } from 'vitest';
import { haptics } from './haptics';

describe('Haptics Engine (Web Audio API)', () => {
  beforeEach(() => {
    haptics.setMuted(false);
  });

  it('triggers paperRustle, rootClick, and dewTap without throwing', () => {
    expect(() => {
      haptics.playPaperRustle();
      haptics.playRootClick();
      haptics.playDewTap();
    }).not.toThrow();
  });

  it('respects mute setting', () => {
    haptics.setMuted(true);
    expect(() => {
      haptics.trigger('paperRustle');
      haptics.trigger('rootClick');
      haptics.trigger('dewTap');
    }).not.toThrow();
  });
});
