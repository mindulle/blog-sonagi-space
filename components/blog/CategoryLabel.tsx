import { Badge } from '@/components/ui';
import Link from 'next/link';

interface CategoryLabelProps {
  category: string;
  href?: string;
}

const categoryLabels: Record<string, string> = {
  development: '개발',
  design: '디자인',
  essay: '에세이',
  project: '프로젝트',
};

export function CategoryLabel({ category, href }: CategoryLabelProps) {
  const label = categoryLabels[category] || category;
  const badgeContent = <Badge variant="label" color="info">{label}</Badge>;

  if (href) {
    return <Link href={href}>{badgeContent}</Link>;
  }
  return badgeContent;
}
