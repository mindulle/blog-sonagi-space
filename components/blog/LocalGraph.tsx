/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { WikiGraph } from './WikiGraph';

interface LocalGraphProps {
  slug: string;
}

// 컴포넌트 외부(모듈 스코프)에 전역 캐시 선언하여 여러 번 로드 방지
let cachedGraphPromise: Promise<{ nodes: any[]; links: any[] }> | null = null;

function fetchWikiGraph() {
  if (!cachedGraphPromise) {
    cachedGraphPromise = fetch('/wiki-graph.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch graph');
        return res.json();
      })
      .catch((err) => {
        cachedGraphPromise = null; // 에러 발생 시 재시도 가능하도록 초기화
        throw err;
      });
  }
  return cachedGraphPromise;
}

const MAX_NEIGHBORS = 20;

export function LocalGraph({ slug }: LocalGraphProps) {
  const [data, setData] = useState<{ nodes: any[]; links: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    fetchWikiGraph()
      .then((fullData) => {
        if (!isCurrent) return;

        // 1. 현재 노트와 직간접적으로 연결된 링크 찾기 (1-hop)
        const relevantLinks = fullData.links.filter(
          (link: any) => link.source === slug || link.target === slug
        );

        let finalLinks = relevantLinks;
        const relevantNodeIds = new Set<string>();
        relevantNodeIds.add(slug);

        // 노드 가지치기 (Pruning) - 연결이 너무 많은 슈퍼 허브 노드 방어
        if (relevantLinks.length > MAX_NEIGHBORS) {
          finalLinks = relevantLinks.slice(0, MAX_NEIGHBORS);

          finalLinks.forEach((link: any) => {
            relevantNodeIds.add(link.source);
            relevantNodeIds.add(link.target);
          });

          // 가상 노드(Dummy Node) 생성하여 생략된 연결 수 표시
          const dummyId = `dummy-more-${slug}`;
          relevantNodeIds.add(dummyId);
          finalLinks.push({ source: slug, target: dummyId });

          const relevantNodes = fullData.nodes.filter((node: any) =>
            relevantNodeIds.has(node.id)
          );
          relevantNodes.push({
            id: dummyId,
            title: `+ ${relevantLinks.length - MAX_NEIGHBORS} links`,
            group: 'dummy',
            val: 1,
          });

          setData({ nodes: relevantNodes, links: finalLinks });
        } else {
          relevantLinks.forEach((link: any) => {
            relevantNodeIds.add(link.source);
            relevantNodeIds.add(link.target);
          });
          const relevantNodes = fullData.nodes.filter((node: any) =>
            relevantNodeIds.has(node.id)
          );
          setData({ nodes: relevantNodes, links: finalLinks });
        }

        setIsLoading(false);
      })
      .catch((err) => {
        if (!isCurrent) return;
        console.error('Failed to load graph data:', err);
        setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [slug]);

  if (!isLoading && (!data || data.nodes.length <= 1)) return null;

  return (
    <div className="mt-12 mb-8 relative">
      <h3 className="text-xl font-bold text-[var(--sng-color-text-primary)] mb-4">
        Interactive Local Graph
      </h3>
      <div className="text-sm text-[var(--sng-color-text-secondary)] mb-4">
        이 지식과 연결된 인접 문서들의 생태계입니다. 마우스를 올려 요약을
        확인하세요.
      </div>

      {isLoading ? (
        <div
          className="w-full flex items-center justify-center border-2 border-[var(--sng-color-border-default)] rounded-[var(--sng-radius-lg)] bg-[var(--sng-color-bg-surface)] animate-pulse"
          style={{ height: 350 }}
        >
          <span className="text-[var(--sng-color-text-muted)] font-medium text-sm">
            그래프 데이터를 불러오는 중...
          </span>
        </div>
      ) : (
        <WikiGraph data={data!} height={350} isLocal={true} />
      )}
    </div>
  );
}
