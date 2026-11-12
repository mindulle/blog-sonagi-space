import React from 'react';
import { Badge } from '@/components/ui';
import { GrowthGlyph, GrowthStage, normalizeStage } from './GrowthGlyph';

interface GrowthBadgeProps {
  status: 'seed' | 'sapling' | 'sprout' | 'rosette' | 'evergreen' | 'pappus';
  showGlyph?: boolean;
  className?: string;
}

const statusMap: Record<
  'seed' | 'sprout' | 'rosette' | 'pappus',
  { label: string; color: 'warning' | 'info' | 'success' }
> = {
  seed: { label: 'Seed', color: 'warning' },
  sprout: { label: 'Sprout', color: 'info' },
  rosette: { label: 'Rosette', color: 'info' },
  pappus: { label: 'Pappus', color: 'success' },
};

export function GrowthBadge({
  status,
  showGlyph = false,
  className = '',
}: GrowthBadgeProps) {
  const canonical = normalizeStage(status as GrowthStage);
  const config = statusMap[canonical] || statusMap['seed'];

  if (showGlyph) {
    return (
      <Badge
        variant="pill"
        color={config.color}
        className={`inline-flex items-center gap-1.5 ${className}`}
      >
        <GrowthGlyph
          stage={canonical}
          size={14}
          strokeColor="currentColor"
          className="shrink-0"
        />
        <span>{config.label}</span>
      </Badge>
    );
  }

  return (
    <Badge variant="pill" color={config.color} className={className}>
      {config.label}
    </Badge>
  );
}
