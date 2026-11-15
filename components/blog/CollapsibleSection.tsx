'use client';

import type React from 'react';
import { Accordion } from '@mindulle/ui';

interface CollapsibleSectionProps {
  title: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  title,
  defaultExpanded = false,
  children,
}: CollapsibleSectionProps) {
  return (
    <Accordion.Container>
      <Accordion.Item title={title} defaultExpanded={defaultExpanded}>
        {children}
      </Accordion.Item>
    </Accordion.Container>
  );
}
