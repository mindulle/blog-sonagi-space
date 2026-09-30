import { describe, it, expect, vi } from 'vitest';
import { getSeriesNotes, getSeriesContext, getAllSeries } from './series';

// Mock the public JSON data
vi.mock('../public/note-summaries.json', () => ({
  default: {
    'post-1': {
      slug: 'post-1',
      title: 'First Post',
      series: 'Test Series',
      seriesOrder: 1,
    },
    'post-2': {
      slug: 'post-2',
      title: 'Second Post',
      series: 'Test Series',
      seriesOrder: 2,
    },
    'post-3': {
      slug: 'post-3',
      title: 'Unrelated Post',
    },
    'post-4': {
      slug: 'post-4',
      title: 'Another Series Post',
      series: 'Another Series',
      seriesOrder: 1,
    },
  },
}));

describe('Series Utility', () => {
  describe('getSeriesNotes', () => {
    it('returns empty array if series name is empty', () => {
      expect(getSeriesNotes('')).toEqual([]);
    });

    it('returns sorted notes for a given series', () => {
      const notes = getSeriesNotes('Test Series');
      expect(notes).toHaveLength(2);
      expect(notes[0].slug).toBe('post-1');
      expect(notes[1].slug).toBe('post-2');
    });
  });

  describe('getAllSeries', () => {
    it('returns all unique series with their totals and entries', () => {
      const allSeries = getAllSeries();
      expect(allSeries).toHaveLength(2);

      const testSeries = allSeries.find((s) => s.series === 'Test Series');
      expect(testSeries).toBeDefined();
      expect(testSeries?.total).toBe(2);
      expect(testSeries?.entries).toHaveLength(2);
    });
  });

  describe('getSeriesContext', () => {
    it('returns null if series name is empty', () => {
      expect(getSeriesContext('', 'post-1')).toBeNull();
    });

    it('returns null if slug is not found in series', () => {
      expect(getSeriesContext('Test Series', 'unknown-post')).toBeNull();
    });

    it('returns correct context for the first post in a series', () => {
      const context = getSeriesContext('Test Series', 'post-1');
      expect(context).not.toBeNull();
      expect(context?.series).toBe('Test Series');
      expect(context?.seriesOrder).toBe(1);
      expect(context?.total).toBe(2);
      expect(context?.prev).toBeUndefined();
      expect(context?.next?.slug).toBe('post-2');
    });

    it('returns correct context for the last post in a series', () => {
      const context = getSeriesContext('Test Series', 'post-2');
      expect(context?.prev?.slug).toBe('post-1');
      expect(context?.next).toBeUndefined();
    });
  });
});
