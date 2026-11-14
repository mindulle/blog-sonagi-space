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
import { haptics } from '@/lib/haptics';

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
  rootSlug = '',
}: {
  data: GraphData;
  height?: number;
  isLocal?: boolean;
  rootSlug?: string;
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
      if (node && node.id !== hoverNode?.id) {
        haptics.playRootClick();
      }
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
    [adjacencyList, hoverNode]
  );

  // [BLOG-10] 지식의 뿌리망(Rhizome Mesh) 유기적 선화 렌더러
  const getCurvature = useCallback((sourceId: string, targetId: string) => {
    let hash = 0;
    const str = sourceId + targetId;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return ((Math.abs(hash) % 100) / 100 - 0.5) * 0.32;
  }, []);

  const drawRhizomeLink = useCallback(
    (link: any, ctx: CanvasRenderingContext2D) => {
      const start = link.source;
      const end = link.target;
      if (typeof start !== 'object' || typeof end !== 'object') return;
      if (start.x === undefined || end.x === undefined) return;

      const isHighlighted = highlightLinks.has(link);
      const brandPrimary = getCssVar('--mds-color-brand-primary', '#3DA8CC');
      const borderSubtle = getCssVar(
        '--mds-color-border-subtle',
        'rgba(168, 145, 120, 0.3)'
      );

      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist === 0) return;

      const curve = getCurvature(start.id, end.id);
      const midX = (start.x + end.x) / 2 - (dy / dist) * (dist * curve);
      const midY = (start.y + end.y) / 2 + (dx / dist) * (dist * curve);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.quadraticCurveTo(midX, midY, end.x, end.y);

      if (isHighlighted) {
        ctx.strokeStyle = brandPrimary;
        ctx.lineWidth = 2.4;
        ctx.shadowColor = brandPrimary;
        ctx.shadowBlur = 6;
        ctx.stroke();

        // 뿌리를 따라 흐르는 수액/영양소 펄스 노드
        const t = (Date.now() % 2400) / 2400;
        const pulseX =
          (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x;
        const pulseY =
          (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.2, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      } else {
        ctx.strokeStyle = hoverNode
          ? 'rgba(180, 160, 140, 0.12)'
          : borderSubtle;
        ctx.lineWidth = isLocal ? 1.4 : 0.8;
        ctx.stroke();
      }
      ctx.restore();
    },
    [highlightLinks, hoverNode, isLocal, getCurvature]
  );

  const drawBotanicalNode = useCallback(
    (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
      if (node.x === undefined || node.y === undefined) return;

      const isHovered = hoverNode && hoverNode.id === node.id;
      const isNeighbor = highlightNodes.has(node.id);
      const isDimmed = hoverNode && !isNeighbor && !isHovered;

      const brandPrimary = getCssVar('--mds-color-brand-primary', '#3DA8CC');
      const bgSurface = getCssVar('--mds-color-bg-surface', '#ffffff');
      const isCenterNode =
        isLocal &&
        Boolean(rootSlug) &&
        (node.id === rootSlug ||
          node.id?.toLowerCase() === rootSlug.toLowerCase());
      const baseRadius = isCenterNode
        ? 5.5
        : Math.max(2.5, (node.val || 1) * 1.5 + 1.5);

      ctx.save();

      if (isDimmed) {
        ctx.globalAlpha = 0.2;
      }

      if (isHovered || isNeighbor || isCenterNode) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, baseRadius + 4, 0, 2 * Math.PI);
        ctx.fillStyle = brandPrimary;
        ctx.globalAlpha = isHovered || isCenterNode ? 0.35 : 0.18;
        ctx.fill();
        ctx.globalAlpha = isDimmed ? 0.2 : 1.0;
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, baseRadius, 0, 2 * Math.PI);
      ctx.fillStyle = bgSurface;
      ctx.fill();
      ctx.lineWidth = isHovered || isCenterNode ? 2.2 : 1.2;
      ctx.strokeStyle =
        isHovered || isNeighbor || isCenterNode
          ? brandPrimary
          : node.visibility === 'private'
            ? getCssVar('--mds-color-border-strong', '#8b949e')
            : brandPrimary;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(node.x, node.y, Math.max(1, baseRadius - 2), 0, 2 * Math.PI);
      ctx.fillStyle =
        isHovered || isNeighbor || isCenterNode
          ? brandPrimary
          : 'rgba(148, 163, 184, 0.6)';
      ctx.fill();

      if (
        node.title &&
        node.group !== 'dummy' &&
        node.id !== '노트-이름' &&
        node.id !== '노트 이름'
      ) {
        // 로컬 그래프: 미호버 시 중심 노드만 라벨 표시하여 텍스트 충돌/겹침 100% 원천 방지
        // 호버 시 해당 호버된 노드만 풀 타이틀과 골든 앰버 칩으로 선명하게 스포트라이트
        const shouldShow = isLocal
          ? isHovered || (isCenterNode && !hoverNode)
          : isHovered || isNeighbor || globalScale > 1.8;

        if (shouldShow) {
          const fontSize = Math.max(11 / globalScale, 3.5);
          ctx.font = `${isHovered || isCenterNode ? 'bold ' : ''}${fontSize}px var(--mds-font-sans, sans-serif)`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';

          // 긴 텍스트 말줄임: 비호버 상태에서는 12자 이내로 콤팩트하게 표시하여 라벨 충돌 방지
          let labelText = node.title;
          if (isLocal && !isHovered && labelText.length > 12) {
            labelText = labelText.slice(0, 11) + '…';
          }

          // 텍스트 가독성을 위한 반투명 배경 칩 (Pill Backdrop)
          const textMetrics = ctx.measureText(labelText);
          const textWidth = textMetrics.width;
          const textHeight = fontSize * 1.25;
          const textY = node.y + baseRadius + 4;
          const padX = 5;
          const padY = 2.5;

          ctx.fillStyle = isHovered
            ? getCssVar('--mds-color-bg-elevated', 'rgba(255,255,255,0.95)')
            : 'color-mix(in srgb, var(--mds-color-bg-surface) 90%, transparent)';
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(
              node.x - textWidth / 2 - padX,
              textY - padY,
              textWidth + padX * 2,
              textHeight + padY * 2,
              4
            );
          } else {
            ctx.rect(
              node.x - textWidth / 2 - padX,
              textY - padY,
              textWidth + padX * 2,
              textHeight + padY * 2
            );
          }
          ctx.fill();

          if (isHovered || (isLocal && isCenterNode)) {
            ctx.strokeStyle = brandPrimary;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.fillStyle =
            isHovered || (isLocal && isCenterNode)
              ? brandPrimary
              : getCssVar('--mds-color-text-primary', '#1e1311');
          ctx.fillText(labelText, node.x, textY);
        }
      }

      ctx.restore();
    },
    [hoverNode, highlightNodes, isLocal, rootSlug]
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
      // 로컬 뷰: 물리적 충돌 방지 및 넉넉한 반발력과 링크 거리 적용
      fgRef.current.d3Force('charge')?.strength(-500);
      fgRef.current.d3Force('link')?.distance(115);
      fgRef.current.d3Force(
        'collide',
        d3.forceCollide().radius(45).iterations(3)
      );
      fgRef.current.d3ReheatSimulation();
    }
  }, [isLocal, data]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: 'var(--mds-radius-lg)',
        overflow: 'hidden',
        border: '2px solid var(--mds-color-border)',
        backgroundColor: 'var(--mds-color-bg-surface)',
      }}
    >
      {dimensions.width > 0 && (
        <ForceGraph2D
          ref={fgRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          nodeLabel="" // We implement custom hover
          nodeVal={(node: any) => node.val || 1}
          nodeRelSize={3}
          warmupTicks={50}
          cooldownTicks={100}
          nodeCanvasObject={drawBotanicalNode}
          nodeCanvasObjectMode={() => 'replace'}
          linkCanvasObject={drawRhizomeLink}
          linkCanvasObjectMode={() => 'replace'}
          onNodeHover={handleNodeHover}
          onNodeClick={(node: any) => {
            if (node.group === 'dummy') return;
            haptics.playDewTap();
            router.push(isLocal ? `/notes/${node.id}` : `/notes/${node.id}`);
          }}
        />
      )}

      {/* 툴팁 오버레이 */}
      {hoverNode && hoverNode.group !== 'dummy' && (
        <div
          className="absolute z-10 p-4 border rounded-[var(--mds-radius-lg)] pointer-events-none transition-opacity duration-200"
          style={{
            left: 16,
            top: 16,
            maxWidth: '300px',
            backgroundColor: 'var(--mds-color-bg-elevated)',
            borderColor: 'var(--mds-color-border-subtle)',
            boxShadow: 'var(--mds-shadow-raised)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-2 py-0.5 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: 'var(--mds-color-bg-base)',
                color: 'var(--mds-color-text-secondary)',
                border: '1px solid var(--mds-color-border-default)',
              }}
            >
              {hoverNode.group || 'note'}
            </span>
            <span
              className="text-xs font-medium"
              style={{
                color:
                  hoverNode.visibility === 'public'
                    ? 'var(--mds-color-state-success)'
                    : 'var(--mds-color-state-warning)',
              }}
            >
              {hoverNode.visibility === 'public' ? 'Published' : 'Private'}
            </span>
          </div>
          <h4
            className="text-sm font-bold mb-1 line-clamp-2"
            style={{ color: 'var(--mds-color-text-primary)' }}
          >
            {hoverNode.title}
          </h4>
          <p
            className="text-xs line-clamp-3 leading-relaxed"
            style={{ color: 'var(--mds-color-text-secondary)' }}
          >
            {hoverNode.summary || 'Summary not available.'}
          </p>
        </div>
      )}
    </div>
  );
}
