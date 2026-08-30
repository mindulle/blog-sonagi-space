import { Badge } from '@/components/ui';

interface GrowthBadgeProps {
  status: 'seed' | 'sapling' | 'evergreen';
}

const statusMap = {
  seed: { label: 'Seed', color: 'warning' as const },
  sapling: { label: 'Sapling', color: 'info' as const },
  evergreen: { label: 'Evergreen', color: 'success' as const },
};

export function GrowthBadge({ status }: GrowthBadgeProps) {
  const { label, color } = statusMap[status];
  return <Badge variant="pill" color={color}>{label}</Badge>;
}
