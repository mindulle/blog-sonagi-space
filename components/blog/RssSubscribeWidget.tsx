'use client';

import { useState, useSyncExternalStore } from 'react';
import { Rss, Copy, Check, ExternalLink } from 'lucide-react';
import { Button, Badge, Card } from '@/components/ui';

interface RssSubscribeWidgetProps {
  variant?: 'card' | 'compact';
  className?: string;
  title?: string;
  description?: string;
}

const emptySubscribe = () => () => {};

export function RssSubscribeWidget({
  variant = 'card',
  className = '',
  title = 'RSS 피드 구독 (Subscribe via RSS)',
  description = '소음 없는 순수 RSS 2.0 피드로 디지털 정원의 새로운 씨앗과 사유를 받아보세요.',
}: RssSubscribeWidgetProps) {
  const [copied, setCopied] = useState(false);

  // 브라우저 윈도우 origin을 hydration 불일치나 effect cascade 없이 구독
  const feedUrl = useSyncExternalStore(
    emptySubscribe,
    () => `${window.location.origin}/rss.xml`,
    () => 'https://blog.sonagi.space/rss.xml'
  );

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(feedUrl);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = feedUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div
        className={`flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border ${className}`}
        style={{
          backgroundColor: 'var(--mds-color-bg-surface)',
          borderColor: 'var(--mds-color-border-default)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              backgroundColor: 'var(--mds-color-bg-overlay)',
              color: 'var(--mds-color-brand-primary)',
            }}
          >
            <Rss size={18} />
          </div>
          <div>
            <div
              className="text-sm font-semibold"
              style={{ color: 'var(--mds-color-text-primary)' }}
            >
              RSS Feed
            </div>
            <div
              className="text-xs font-mono select-all"
              style={{ color: 'var(--mds-color-text-muted)' }}
            >
              {feedUrl}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={copied ? 'secondary' : 'primary'}
            size="sm"
            onClick={handleCopy}
            className="flex items-center gap-1.5"
            aria-label="RSS 피드 URL 복사"
          >
            {copied ? (
              <>
                <Check
                  size={14}
                  style={{ color: 'var(--mds-color-state-success)' }}
                />
                <span>복사됨!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>URL 복사</span>
              </>
            )}
          </Button>

          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS 피드 원본 새 창으로 열기"
          >
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1"
            >
              <ExternalLink size={14} />
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <Card
      elevation="raised"
      className={`p-6 sm:p-8 flex flex-col gap-6 ${className}`}
      style={{
        backgroundColor: 'var(--mds-color-bg-surface)',
        borderColor: 'var(--mds-color-border-default)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
            style={{
              backgroundColor: 'var(--mds-color-bg-overlay)',
              color: 'var(--mds-color-brand-primary)',
            }}
          >
            <Rss size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3
                className="text-lg sm:text-xl font-bold tracking-tight"
                style={{ color: 'var(--mds-color-text-primary)' }}
              >
                {title}
              </h3>
              <Badge variant="pill" color="info">
                RSS 2.0
              </Badge>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--mds-color-text-secondary)' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Feed URL Box & Action Buttons */}
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2.5 sm:p-2 rounded-xl border"
        style={{
          backgroundColor: 'var(--mds-color-bg-base)',
          borderColor: 'var(--mds-color-border-subtle)',
        }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 overflow-hidden">
          <span
            className="text-xs font-medium uppercase shrink-0"
            style={{ color: 'var(--mds-color-text-muted)' }}
          >
            Feed
          </span>
          <span
            className="text-xs sm:text-sm font-mono truncate select-all"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            {feedUrl}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="primary"
            size="md"
            onClick={handleCopy}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4"
            aria-label="RSS 피드 URL 복사"
          >
            {copied ? (
              <>
                <Check
                  size={16}
                  style={{ color: 'var(--mds-color-state-success)' }}
                />
                <span>복사 완료!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>원클릭 복사</span>
              </>
            )}
          </Button>

          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS XML 직접 열기"
          >
            <Button
              variant="secondary"
              size="md"
              className="flex items-center justify-center gap-1.5 px-3"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">XML 보기</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Supported Readers Guide */}
      <div
        className="flex flex-wrap items-center gap-2 pt-2 border-t text-xs"
        style={{
          borderColor: 'var(--mds-color-border-subtle)',
          color: 'var(--mds-color-text-muted)',
        }}
      >
        <span>지원 리더기:</span>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="label">Feedly</Badge>
          <Badge variant="label">Inoreader</Badge>
          <Badge variant="label">NetNewsWire</Badge>
          <Badge variant="label">Apple News</Badge>
          <Badge variant="label">Follow</Badge>
        </div>
      </div>
    </Card>
  );
}
