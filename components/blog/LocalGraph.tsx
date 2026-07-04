/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { WikiGraph } from './WikiGraph';

interface LocalGraphProps {
  slug: string;
}

export function LocalGraph({ slug }: LocalGraphProps) {
  const [data, setData] = useState<{ nodes: any[]; links: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/wiki-graph.json')
      .then((res) => res.json())
      .then((fullData) => {
        // 1. 현재 노트와 직간접적으로 연결된 링크 찾기 (1-hop)
        const relevantLinks = fullData.links.filter(
          (link: any) => link.source === slug || link.target === slug
        );

        // 2. 관련된 노드 ID 추출 (현재 노드 + 이웃 노드들)
        const relevantNodeIds = new Set<string>();
        relevantNodeIds.add(slug);
        relevantLinks.forEach((link: any) => {
          relevantNodeIds.add(link.source);
          relevantNodeIds.add(link.target);
        });

        // 3. 서브그래프(Subgraph) 노드 필터링
        const relevantNodes = fullData.nodes.filter((node: any) =>
          relevantNodeIds.has(node.id)
        );

        setData({ nodes: relevantNodes, links: relevantLinks });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load graph data:', err);
        setIsLoading(false);
      });
  }, [slug]);

  if (!isLoading && (!data || data.nodes.length <= 1)) return null;

  return (
    <div className="mt-12 mb-8 relative">
      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
        Interactive Local Graph
      </h3>
      <div className="text-sm text-[var(--color-text-secondary)] mb-4">
        이 지식과 연결된 인접 문서들의 생태계입니다. 마우스를 올려 요약을
        확인하세요.
      </div>

      {isLoading ? (
        <div
          className="w-full flex items-center justify-center border-2 border-[var(--color-border-default)] rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] animate-pulse"
          style={{ height: 350 }}
        >
          <span className="text-[var(--color-text-muted)] font-medium text-sm">
            그래프 데이터를 불러오는 중...
          </span>
        </div>
      ) : (
        <WikiGraph data={data!} height={350} isLocal={true} />
      )}
    </div>
  );
}
