import noteSummaries from '../public/note-summaries.json';

/**
 * 시리즈 조회 헬퍼.
 *
 * lib/notes.ts 와 분리한 이유: notes.ts 는 `fs` 와 remark 파이프라인을 import 하므로
 * 클라이언트 컴포넌트에서 값을 import 하면 번들이 깨진다. 이 모듈은
 * public/note-summaries.json 정적 import 만 사용하므로 어디서든 안전하다.
 *
 * 요약 JSON 이 낡으면 시리즈도 낡는다 — docs/generated-artifacts.md 참조.
 */

export interface SeriesEntry {
  slug: string;
  title: string;
  seriesOrder: number;
}

export interface SeriesContext {
  /** 시리즈 식별자 (frontmatter 의 `series` 값) */
  series: string;
  /** 시리즈 내 현재 글의 순번 (1-based, 정렬 후 실제 위치) */
  seriesOrder: number;
  /** 시리즈에 속한 글 총 개수 */
  total: number;
  prev?: SeriesEntry;
  next?: SeriesEntry;
  /** 시리즈 전체 목록 (사이드바 패널용) */
  entries: SeriesEntry[];
}

interface SummaryShape {
  slug?: unknown;
  title?: unknown;
  series?: unknown;
  seriesOrder?: unknown;
}

const SUMMARIES = noteSummaries as unknown as Record<string, SummaryShape>;

/**
 * 같은 `series` 에 속한 글을 `seriesOrder` 오름차순으로 반환.
 *
 * seriesOrder 가 없는 글은 목록 끝으로 밀고, 그 안에서는 제목순으로 안정 정렬한다.
 * (순번을 빼먹은 글이 조용히 1번으로 올라오는 것을 막기 위함)
 */
export function getSeriesNotes(series: string): SeriesEntry[] {
  if (!series) return [];

  return Object.values(SUMMARIES)
    .filter((s) => typeof s.series === 'string' && s.series === series)
    .map((s) => ({
      slug: String(s.slug ?? ''),
      title: String(s.title ?? s.slug ?? ''),
      seriesOrder:
        typeof s.seriesOrder === 'number' ? s.seriesOrder : Number.NaN,
    }))
    .filter((e) => e.slug !== '')
    .sort((a, b) => {
      const ao = Number.isNaN(a.seriesOrder)
        ? Number.MAX_SAFE_INTEGER
        : a.seriesOrder;
      const bo = Number.isNaN(b.seriesOrder)
        ? Number.MAX_SAFE_INTEGER
        : b.seriesOrder;
      if (ao !== bo) return ao - bo;
      return a.title.localeCompare(b.title);
    })
    .map((e) => ({
      ...e,
      seriesOrder: Number.isNaN(e.seriesOrder) ? 0 : e.seriesOrder,
    }));
}

/**
 * 상세 페이지용 시리즈 문맥. 시리즈가 없거나 현재 글을 찾지 못하면 null.
 *
 * `seriesOrder` 는 frontmatter 값이 아니라 **정렬 후 실제 위치**를 쓴다.
 * frontmatter 순번에 구멍이 있어도 "3 of 5" 가 깨지지 않는다.
 */
export function getSeriesContext(
  series: string | undefined,
  currentSlug: string
): SeriesContext | null {
  if (!series) return null;

  const entries = getSeriesNotes(series);
  if (entries.length === 0) return null;

  const index = entries.findIndex((e) => e.slug === currentSlug);
  if (index === -1) return null;

  return {
    series,
    seriesOrder: index + 1,
    total: entries.length,
    prev: index > 0 ? entries[index - 1] : undefined,
    next: index < entries.length - 1 ? entries[index + 1] : undefined,
    entries,
  };
}

export interface SeriesSummary {
  series: string;
  total: number;
  entries: SeriesEntry[];
}

/**
 * 전체 시리즈 목록. `/series` 인덱스 페이지용.
 */
export function getAllSeries(): SeriesSummary[] {
  const names = new Set<string>();

  for (const s of Object.values(SUMMARIES)) {
    if (typeof s.series === 'string' && s.series !== '') names.add(s.series);
  }

  return Array.from(names)
    .sort((a, b) => a.localeCompare(b))
    .map((series) => {
      const entries = getSeriesNotes(series);
      return { series, total: entries.length, entries };
    });
}
