import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { RssSubscribeWidget } from './RssSubscribeWidget';

describe('RssSubscribeWidget', () => {
  const writeTextMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock.mockResolvedValue(undefined),
      },
    });
  });

  it('renders default card variant with title, description, and feed URL', () => {
    render(<RssSubscribeWidget />);

    expect(
      screen.getByText('RSS 피드 구독 (Subscribe via RSS)')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/소음 없는 순수 RSS 2.0 피드로/)
    ).toBeInTheDocument();
    expect(screen.getByText(/rss\.xml/)).toBeInTheDocument();
    expect(screen.getByText('원클릭 복사')).toBeInTheDocument();
  });

  it('copies URL to clipboard and updates button state upon clicking copy', async () => {
    render(<RssSubscribeWidget />);

    const copyBtn = screen.getByRole('button', { name: /RSS 피드 URL 복사/i });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith(
      expect.stringContaining('/rss.xml')
    );

    await waitFor(() => {
      expect(screen.getByText('복사 완료!')).toBeInTheDocument();
    });
  });

  it('renders compact variant correctly', async () => {
    render(<RssSubscribeWidget variant="compact" />);

    expect(screen.getByText('RSS Feed')).toBeInTheDocument();
    expect(screen.getByText('URL 복사')).toBeInTheDocument();

    const copyBtn = screen.getByRole('button', { name: /RSS 피드 URL 복사/i });
    fireEvent.click(copyBtn);

    await waitFor(() => {
      expect(screen.getByText('복사됨!')).toBeInTheDocument();
    });
  });
});
