/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      const sourceId =
        typeof link.source === 'object' ? (link.source as any).id : link.source;
      const targetId =
        typeof link.target === 'object' ? (link.target as any).id : link.target;

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

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.getElementById('graph-container');
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: height || window.innerHeight * 0.7,
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
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

      // 커스텀 Force 주입: 같은 그룹끼리 특정 좌표로 끌어당김
      fgRef.current.d3Force(
        'x',
        d3
          .forceX()
          .x((d: any) => clusterCenters[d.group]?.x || 0)
          .strength(0.08)
      );
      fgRef.current.d3Force(
        'y',
        d3
          .forceY()
          .y((d: any) => clusterCenters[d.group]?.y || 0)
          .strength(0.08)
      );

      fgRef.current.d3ReheatSimulation();
    } else if (fgRef.current && isLocal) {
      fgRef.current.d3Force('charge')?.strength(-250);
      fgRef.current.d3Force('link')?.distance(80);
      // 로컬 그래프에서는 x, y custom force 제거하여 단일 중력 중심으로 원형 정렬
      fgRef.current.d3Force('x', null);
      fgRef.current.d3Force('y', null);
      fgRef.current.d3ReheatSimulation();
    }
  }, [isLocal, data]);

  const handleNodeClick = useCallback(
    (node: any) => {
      // 가상 노드(Dummy Node)는 클릭 무시
      if (node.group === 'dummy') return;

      if (node.visibility === 'public') {
        router.push(`/notes/${node.id}`);
      }
    },
    [router]
  );

  return (
    <div
      id="graph-container"
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: 'var(--sng-radius-lg)',
        overflow: 'hidden',
        border: '2px solid var(--sng-color-border)',
        backgroundColor: 'var(--sng-color-bg-surface)',
      }}
    >
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
          const isDimmed = hoverNode && !highlightNodes.has(node.id);
          const opacity = isDimmed ? 0.1 : 1;

          if (node.group === 'dummy') return `rgba(148, 163, 184, ${opacity})`;

          if (node.visibility === 'public') {
            return isDimmed
              ? `rgba(88, 166, 255, 0.1)`
              : getCssVar('--sng-color-brand-primary', '#58a6ff');
          }
          if (node.visibility === 'private') {
            return isDimmed
              ? `rgba(139, 148, 158, 0.1)`
              : getCssVar('--sng-color-text-muted', '#8b949e');
          }
          return `rgba(148, 163, 184, ${isDimmed ? 0.05 : 0.2})`; // missing
        }}
        linkColor={(link: any) => {
          const isDimmed = hoverNode && !highlightLinks.has(link);
          return isDimmed
            ? 'rgba(0,0,0,0)'
            : getCssVar('--sng-color-border-default', '#30363d');
        }}
        linkWidth={(link: any) => (highlightLinks.has(link) ? 2 : 1)}
        linkDirectionalParticles={(link: any) =>
          highlightLinks.has(link) || isLocal ? 2 : 0
        }
        linkDirectionalParticleSpeed={0.005}
        cooldownTicks={100}
        onNodeHover={handleNodeHover}
        onNodeClick={handleNodeClick}
        onEngineStop={() => fgRef.current?.zoomToFit(400, 50)}
      />

      {/* Custom Hover Tooltip */}
      {hoverNode && (
        <div
          style={{
            position: 'absolute',
            zIndex: 50,
            top: '16px',
            left: '16px',
            maxWidth: '300px',
            backgroundColor: 'var(--sng-color-bg-surface)',
            border: '2px solid var(--sng-color-border-default)',
            borderRadius: 'var(--sng-radius-md)',
            boxShadow: '4px 4px 0 var(--sng-color-border-default)',
            padding: 'var(--space-4)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
            }}
          >
            <span
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor:
                  hoverNode.visibility === 'public'
                    ? '#8b5cf6'
                    : hoverNode.visibility === 'private'
                      ? '#64748b'
                      : '#cbd5e1',
              }}
            />
            <h3
              style={{
                fontWeight: '700',
                fontSize: 'var(--text-sm)',
                color: 'var(--sng-color-text-primary)',
                margin: 0,
              }}
            >
              {hoverNode.title}
            </h3>
          </div>
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--sng-color-text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {hoverNode.summary || '요약이 존재하지 않습니다.'}
          </p>
          {hoverNode.visibility === 'public' ? (
            <span
              style={{
                display: 'inline-block',
                marginTop: '8px',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--sng-color-brand-primary)',
              }}
            >
              클릭하여 읽기 →
            </span>
          ) : (
            <span
              style={{
                display: 'inline-block',
                marginTop: '8px',
                fontSize: 'var(--text-xs)',
                fontWeight: 500,
                color: 'var(--sng-color-text-muted)',
              }}
            >
              {hoverNode.visibility === 'missing'
                ? '작성 예정 문서'
                : '비공개 문서'}{' '}
              🔒
            </span>
          )}
        </div>
      )}
    </div>
  );
}
