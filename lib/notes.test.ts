import { describe, it, expect, vi } from 'vitest';
import { getAllNotes, getNoteBySlug, getAllNoteSlugs } from './notes';
import fs from 'fs';
import path from 'path';

vi.mock('fs');
vi.mock('../public/note-summaries.json', () => ({
  default: {
    'test-note-1': {
      slug: 'test-note-1',
      title: 'Test Note 1',
      tags: ['test'],
      created: '2023-01-01',
      status: 'evergreen',
      published: true,
      excerpt: 'This is a test note.',
    },
    'test-note-2': {
      slug: 'test-note-2',
      title: 'Test Note 2',
      status: 'seed',
      published: false,
    },
  },
}));

describe('Notes Utility', () => {
  describe('getAllNotes', () => {
    it('returns all notes correctly formatted', () => {
      const notes = getAllNotes();
      expect(notes).toHaveLength(2);
      expect(notes[0].slug).toBe('test-note-1');
      expect(notes[0].published).toBe(true);
      expect(notes[0].status).toBe('evergreen');
      expect(notes[1].slug).toBe('test-note-2');
      expect(notes[1].published).toBe(false);
      expect(notes[1].status).toBe('seed');
    });

    it('sorts notes by created date descending', () => {
      const notes = getAllNotes();
      expect(notes[0].slug).toBe('test-note-1');
    });
  });

  describe('getAllNoteSlugs', () => {
    it('returns keys of note summaries', () => {
      const slugs = getAllNoteSlugs();
      expect(slugs).toEqual(['test-note-1', 'test-note-2']);
    });
  });

  describe('getNoteBySlug', () => {
    it('returns null if file does not exist', () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File not found');
      });
      const note = getNoteBySlug('non-existent');
      expect(note).toBeNull();
    });

    it('parses frontmatter and converts markdown to HTML', () => {
      vi.mocked(fs.readFileSync).mockReturnValue(`---
title: "Parsed Title"
tags: ["react", "frontend"]
status: "sapling"
published: true
---
# Hello
This is the first paragraph.

This is the second paragraph.
      `);

      const note = getNoteBySlug('parsed-note');
      expect(note).not.toBeNull();
      expect(note?.title).toBe('Parsed Title');
      expect(note?.tags).toEqual(['react', 'frontend']);
      expect(note?.status).toBe('sapling');
      expect(note?.published).toBe(true);
      expect(note?.excerpt).toBe('This is the first paragraph.');
      expect(note?.content).toContain('<h1');
      expect(note?.content).toContain('Hello');
    });
  });
});
