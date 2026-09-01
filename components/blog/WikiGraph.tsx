/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { ForceGraphMethods } from 'react-force-graph-2d';
import * as d3 from 'd3-force';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
});
import { useRouter } from 'next/navigation';

interface Node {
  id: string;
  title: string;
  visibility: string;
  summary: string;
  val: number;
  x?: number;
  y?: number;
  group?: string;
}

interface Link {
  source: string | Node;
  target: string | Node;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

// Helper to read CSS variables at runtime for Canvas compatibility
function getCssVar(name: string, fallback: string) {
  if (typeof window === 'undefined') return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

export function WikiGraph({
  data,
  height = 0,
  isLocal = false,
}: {
  data: GraphData;
  height?: number;
  isLocal?: boolean;
}) {
  const fgRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoverNode, setHoverNode] = useState<Node | null>(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set<string>());
  const [highlightLinks, setHighlightLinks] = useState(new Set<Link>());

  // Cache node connections using useMemo (caching neighbors and links for O(1) hover lookup)
  const adjacencyList = useMemo(() => {
    const map = new Map<string, { neighbors: Set<string>; links: Set<Link> }>();

    data.nodes.forEach((node) => {
      map.set(node.id, { neighbors: new Set([node.id]), links: new Set() });
    });

    data.links.forEach((link) => {
      // D3 mutates links so source/target might be objects
      const sourceId =
        typeof link.source === 'object'
          ? (link.source as Node).id
          : (link.source as string);
      const targetId =
        typeof link.target === 'object'
          ? (link.target as Node).id
          : (link.target as string);

      if (!map.has(sourceId)) {
        map.set(sourceId, { neighbors: new Set([sourceId]), links: new Set() });
      }
      if (!map.has(targetId)) {
        map.set(targetId, { neighbors: new Set([targetId]), links: new Set() });
      }

      map.get(sourceId)!.neighbors.add(targetId);
      map.get(sourceId)!.links.add(link);

      map.get(targetId)!.neighbors.add(sourceId);
      map.get(targetId)!.links.add(link);
    });

    return map;
  }, [data.nodes, data.links]);

  const handleNodeHover = useCallback(
    (node: Node | any | null) => {
      setHoverNode(node || null);

      if (node && adjacencyList.has(node.id)) {
        const { neighbors, links } = adjacencyList.get(node.id)!;
        setHighlightNodes(neighbors);
        setHighlightLinks(links);
      } else {
        setHighlightNodes(new Set());
        setHighlightLinks(new Set());
      }
    },
    [adjacencyList]
  );

  // 창 크기 변경 시 그래프 크기 조절
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width } = entries[0].contentRect;

      setDimensions({
        width: width,
        height: height || window.innerHeight * 0.7,
      });
    });

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, [height]);

  useEffect(() => {
    // 물리 엔진(d3-force) 거리 및 반발력 튜닝
    if (fgRef.current && !isLocal) {
      // 그룹별 군집(Clustering)을 위한 가상의 중력점 좌표
      const clusterCenters: Record<string, { x: number; y: number }> = {
        frontend: { x: -300, y: -200 },
        backend: { x: 300, y: -200 },
        design: { x: -300, y: 200 },
        'ai-ml': { x: 300, y: 200 },
        cs: { x: 0, y: 0 },
        management: { x: 0, y: 300 },
        etc: { x: 0, y: -300 },
        orphan: { x: 0, y: 0 },
      };

      const chargeStrength = Math.min(-250, data.nodes.length * -15);
      fgRef.current.d3Force('charge')?.strength(chargeStrength);
      fgRef.current.d3Force('link')?.distance(80);

      // Custom grouping force
      fgRef.current.d3Force(
        'cluster',
        d3
          .forceX((d: any) => {
            if (d.group && clusterCenters[d.group])
              return clusterCenters[d.group].x;
            return 0;
          })
          .strength(0.05)
      );

      fgRef.current.d3Force(
        'clusterY',
        d3
          .forceY((d: any) => {
            if (d.group && clusterCenters[d.group])
              return clusterCenters[d.group].y;
            return 0;
          })
          .strength(0.05)
      );
    } else if (fgRef.current && isLocal) {
      // 로컬 뷰에서는 군집 대신 중앙에 모이는 일반적인 포스 사용
      fgRef.current.d3Force('charge')?.strength(-150);
      fgRef.current.d3Force('link')?.distance(80);
    }
  }, [isLocal, data]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: 'var(--sng-radius-lg)',
        overflow: 'hidden',
        border: '2px solid var(--sng-color-border)',
        backgroundColor: 'var(--sng-color-bg-surface)',
      }}
    >
      {dimensions.width > 0 && (
        <ForceGraph2D
          ref={fgRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          nodeLabel="" // We implement custom hover
          nodeVal={(node: any) => node.val || 1} // 가중치에 따른 노드 크기 차별화
          nodeRelSize={3} // 노드 기본 크기 축소 (기존 6 -> 3)
          nodeColor={(node: Node | any) => {
            // 호버 상태일 때 이웃 노드가 아니면 투명하게(Dimming) 처리
            if (
              hoverNode &&
              !highlightNodes.has(node.id) &&
              node.id !== hoverNode.id
            ) {
              return 'rgba(200, 200, 200, 0.2)';
            }
            return node.visibility === 'private'
              ? 'var(--sng-color-border-strong)'
              : 'var(--sng-color-brand-primary)';
          }}
          linkColor={(link: any) =>
            highlightLinks.has(link)
              ? 'var(--sng-color-brand-primary)'
              : 'var(--sng-color-border-default)'
          }
          linkWidth={(link: any) =>
            highlightLinks.has(link) || isLocal ? 2 : 0.5
          }
          onNodeHover={handleNodeHover}
          onNodeClick={(node: any) => {
            // 더미 노드 처리 (링크 생략 알림)
            if (node.group === 'dummy') return;
            router.push(isLocal ? `/notes/${node.id}` : `/notes/${node.id}`);
          }}
        />
      )}

      {/* 툴팁 오버레이 */}
      {hoverNode && hoverNode.group !== 'dummy' && (
        <div
          className="absolute z-10 p-4 border rounded-[var(--sng-radius-lg)] pointer-events-none transition-opacity duration-200"
          style={{
            left: 16,
            top: 16,
            maxWidth: '300px',
            backgroundColor: 'var(--sng-color-bg-elevated)',
            borderColor: 'var(--sng-color-border-subtle)',
            boxShadow: 'var(--sng-shadow-raised)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-2 py-0.5 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: 'var(--sng-color-bg-base)',
                color: 'var(--sng-color-text-secondary)',
                border: '1px solid var(--sng-color-border-default)',
              }}
            >
              {hoverNode.group || 'note'}
            </span>
            <span
              className="text-xs font-medium"
              style={{
                color:
                  hoverNode.visibility === 'public'
                    ? 'var(--sng-color-state-success)'
                    : 'var(--sng-color-state-warning)',
              }}
            >
              {hoverNode.visibility === 'public' ? 'Published' : 'Private'}
            </span>
          </div>
          <h4
            className="text-sm font-bold mb-1 line-clamp-2"
            style={{ color: 'var(--sng-color-text-primary)' }}
          >
            {hoverNode.title}
          </h4>
          <p
            className="text-xs line-clamp-3 leading-relaxed"
            style={{ color: 'var(--sng-color-text-secondary)' }}
          >
            {hoverNode.summary || 'Summary not available.'}
          </p>
        </div>
      )}
    </div>
  );
}
