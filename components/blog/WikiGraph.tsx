/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import type { ForceGraphMethods } from 'react-force-graph-2d';

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

export function WikiGraph({
  data,
  height = 0,
}: {
  data: GraphData;
  height?: number;
}) {
  const fgRef = useRef<any>(null);
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoverNode, setHoverNode] = useState<Node | null>(null);

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

  const handleNodeClick = useCallback(
    (node: any) => {
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
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '2px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-surface)',
      }}
    >
      <ForceGraph2D
        ref={fgRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={data}
        nodeLabel="" // We implement custom hover
        nodeRelSize={3} // 노드 기본 크기 축소 (기존 6 -> 3)
        nodeColor={(node: Node | any) => {
          if (node.visibility === 'public') return '#8b5cf6'; // Primary brand color
          if (node.visibility === 'private') return '#64748b'; // Slate for private
          return 'rgba(148, 163, 184, 0.2)'; // Faded for missing/shadow
        }}
        linkColor={() => 'var(--color-border)'}
        linkWidth={1}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        onNodeHover={(node: Node | any | null) => setHoverNode(node || null)}
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
            backgroundColor: 'var(--color-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            boxShadow: '4px 4px 0 var(--color-border)',
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
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              {hoverNode.title}
            </h3>
          </div>
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-secondary)',
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
                color: 'var(--color-brand-primary)',
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
                color: 'var(--color-text-tertiary)',
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
