# Blog Redesign V3 — Design Document

> Last updated: 2026-08-29
> Branch: `chore/use-github-packages`
> Figma: `AEoW19jmlUh3rFgzhhV1vH` (Sonagi-Design-System-V3)
> Whiteboard: `draw.sonagi.space/?room=e1d0b3ec`

---

## 1. IA (Information Architecture) Decisions

### Q1. Blog/Garden Relation — (C) Hierarchical

- Garden is SSOT. Blog = published view of polished notes (`published: true` in frontmatter).
- Supports series via `series` / `seriesOrder` fields.
- Fallback: (A) separation if hierarchical proves too hard.

### Q2. Homepage — (B) Landing Page

- Keep as design capability showcase.
- RSS/newsletter handles content feed needs.

### Q3. Projects Page — (A) Lightweight Catalog

- Filter view of `category: project` notes from Garden.
- Persists even after Showroom portfolio site ships.

---

## 2. Route Map

| Route           | Description                                       |
| --------------- | ------------------------------------------------- |
| `/`             | Landing page (keep, redesign target)              |
| `/blog`         | `published: true` notes filtered list             |
| `/blog/[slug]`  | Internally same detail component as notes         |
| `/notes`        | Full Digital Garden                               |
| `/notes/[slug]` | Unified detail (4-section sidebar + series block) |
| `/projects`     | `category: project` filter view                   |
| `/about`        | Keep as-is                                        |
| `/search`       | Keep as-is                                        |
| `/privacy`      | Keep as-is                                        |

---

## 3. Extended Note Data Model

```typescript
// Target type — extends current Note in lib/notes.ts
interface Note {
  // existing
  slug: string;
  title: string;
  tags: string[];
  created: string;
  excerpt: string;

  // new fields
  status: 'seed' | 'sapling' | 'evergreen';
  published?: boolean;
  publishedDate?: string;
  category?: Category; // 'essay' | 'note' | 'project' | 'til' | ...
  coverImage?: string;
  series?: string; // series identifier
  seriesOrder?: number; // position within series
}
```

---

## 4. Blueprint (from whiteboard room e1d0b3ec)

| #   | Item               | Spec                                                                                                                             |
| --- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Layout**         | Responsive. Mobile: 1-col. Desktop: 2-col (70% body / 30% sidebar)                                                               |
| 2   | **Header**         | Title + date + reading time + growth badge. Wiki metadata behind [i] toggle                                                      |
| 3   | **TOC**            | Desktop: sticky right sidebar. Mobile: floating button                                                                           |
| 4   | **Sidebar order**  | TOC -> Graph View -> Backlinks -> Related Posts & Tags                                                                           |
| 5   | **WikiLink Hover** | Text summary only, no metadata                                                                                                   |
| 6   | **Badges**         | Color=status (Warning/amber=Seed, Info/blue=Sapling, Success/green=Evergreen). Shape=context (Pill=maturity, Label=category/tag) |

---

## 5. Reference Board

### Sources

| Source              | URL                       | Key Patterns                                                                       |
| ------------------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Maggie Appleton     | maggieappleton.com/garden | 3-tier growth (Seedling/Budding/Evergreen), type badges, faceted filtering         |
| Andy Matuschak      | notes.andymatuschak.org   | Dense backlinks with excerpt snippets, sliding panes, minimal chrome               |
| Jacky Zhao (Quartz) | jzhao.xyz                 | 2-col layout, TOC+Graph+Backlinks right sidebar, tag maturity (seed/sapling/fruit) |
| Mobbin (18 screens) | —                         | Sticky TOC (Hashnode/Mintlify), lesson nav (Codecademy), doc sidebar (Confluence)  |

### Takeaways per Blueprint Item

**Layout (2-col 70/30)** — VALIDATED. Quartz is canonical reference. No changes.

**Header** — REFINED.

- Show: title + date + reading time + growth badge.
- Keep [i] toggle for wiki metadata (created/modified/word count/links). This is our unique UX.

**TOC** — VALIDATED. Already fully compliant.

**4-Section Sidebar** — VALIDATED + EXTENDED.

- Quartz does 3 sections (TOC/Graph/Backlinks). We add Related Posts & Tags as 4th.
- Backlink items should include excerpt snippets (Andy's pattern).
- Mobile: collapse all 4 behind floating button.

**WikiLink Hover** — VALIDATED. No changes.

**Badges** — REFINED.

- Our naming: Seed / Sapling / Evergreen (keep as-is, shorter than Maggie's "Seedling/Budding").
- Fix: CategoryBadge currently uses pill — should use label shape.
- Nobody else does color-coded maturity badges. This is our differentiator.

**Series Nav** — NEW (no garden precedent).

- No digital garden implements series natively.
- Closest refs: Codecademy lesson progression, Hashnode blog series.
- Build `SeriesNav` component: prev/next + series title + position ("3 of 7").
- Show series TOC in sidebar when viewing a series note.

---

## 6. Audit Scorecard (Step 1)

| Area            | Compliance | Gaps                                                                                             |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| Notes detail    | ~75%       | Sidebar missing "related posts", header missing date, Sapling status missing, maturity hardcoded |
| Blog detail     | ~40%       | Sidebar has TOC only (no Graph/Backlinks/RelatedPosts), CategoryBadge pill vs label              |
| TOC             | 100%       | —                                                                                                |
| WikiLink Hover  | 100%       | —                                                                                                |
| **Biggest gap** | —          | Blog and Notes sidebar structures completely different despite same site                         |

---

## 7. New Components to Build (Figma first)

1. **Unified DetailPage** — single 4-section sidebar layout for both blog and notes
2. **GrowthBadge** — pill shape, color-coded by status (seed/sapling/evergreen)
3. **CategoryLabel** — label shape, for category/tag context
4. **SeriesNav** — prev/next + position indicator + series sidebar TOC
5. **MetadataToggle** — [i] button revealing wiki metadata panel

---

## 8. Independent Code Work (deferred, memo only)

These don't need Figma and can run in parallel later:

1. **Extend Note type** in `lib/notes.ts` — add status, published, category, series, seriesOrder
2. **Content migration** — merge `content/posts/` into `content/notes/`, convert frontmatter
3. **Route unification** — `/blog/[slug]` uses same component as `/notes/[slug]`
4. **Listing pages** — `/blog` filters `published: true`, `/projects` filters `category: project`

---

## 9. Mobile Design Decisions (Step 4d)

| Item                | Desktop                | Mobile (390px)                            | 구현 방식                              |
| ------------------- | ---------------------- | ----------------------------------------- | -------------------------------------- |
| Layout              | 2-col (body + sidebar) | 1-col vertical stack                      | Tailwind `flex-col md:flex-row`        |
| Card grid           | 3-col                  | 1-col                                     | Tailwind `grid-cols-1 md:grid-cols-3`  |
| TOC                 | Sticky right sidebar   | v1: inline scroll / v2: FAB → BottomSheet | v1=CSS, v2=DS 컴포넌트                 |
| Sidebar sections    | Right 400px            | Body 아래 수직 스택 (TOC 제외)            | Tailwind responsive                    |
| HoverPreview        | Hover → popup          | Long press → popup                        | 코드 분기 (`onTouchStart`)             |
| "404" text          | 120px                  | 80px                                      | Tailwind `text-[80px] md:text-[120px]` |
| Page padding        | 24px                   | 16px                                      | Tailwind `px-4 md:px-6`                |
| Container max-width | 1280px                 | 390px (full width)                        | Tailwind `max-w-[1280px]`              |

### v2 백로그 (DS 컴포넌트 필요)

- **FloatingActionButton (FAB)**: 모바일 TOC/Graph 접근용
- **BottomSheet**: FAB 탭 시 `[📑 목차] [🕸️ 그래프]` 탭 전환
- **Accordion**: 사이드바 섹션 접기/펼치기 (선택)

---

## 10. DS Gap Analysis (Step 4f)

**결론: v1에서 신규 DS 컴포넌트 불필요.**

| 기존 DS 컴포넌트      | 블로그 용도               | 반응형 문제?                 |
| --------------------- | ------------------------- | ---------------------------- |
| Card                  | 글 목록, 백링크, 관련 글  | ❌ FILL 모드로 유연          |
| Button                | CTA, 시리즈 네비게이션    | ❌ 고정 크기                 |
| Badge                 | 성장 상태, 카테고리/태그  | ❌ 원래 작음                 |
| Tab                   | Index 페이지 필터링       | ❌ 스크롤 대응               |
| Pagination            | Index 페이지 페이지네이션 | ❌ 이미 존재                 |
| PostHeader (신규)     | 글 헤더                   | ❌ WRAP 모드, 340px까지 검증 |
| SeriesNav (신규)      | 시리즈 전후 이동          | ❌ FILL 대응                 |
| MetadataToggle (신규) | 위키 메타데이터 토글      | ❌ 고정 크기                 |

---

## 11. 반응형 변수 모드 계획 (Breakpoint Collection)

> **구현 시기**: 블로그 코드 구현 이후, Showroom 착수 전
> **근거**: DS가 블로그 외 다수 프로젝트(Showroom, sonagi-draw, anvil 등)를 서빙할 예정

### 모드 구성

| Mode    | 브레이크포인트 | 비고        |
| ------- | -------------- | ----------- |
| Mobile  | 0 ~ 767px      | 초기        |
| Tablet  | 768 ~ 1023px   | v2에서 추가 |
| Desktop | 1024px ~       | 초기        |

### 초기 변수 (3개)

| Variable               | Mobile | Desktop | 용도                      |
| ---------------------- | ------ | ------- | ------------------------- |
| `spacing/page-padding` | 16     | 24      | 프레임 좌우 여백          |
| `sizing/container-max` | 390    | 1280    | 컨테이너 최대 너비        |
| `sizing/font-display`  | 80     | 120     | 히어로/404 등 대형 텍스트 |

### 확장 후보

| Variable               | Mobile | Desktop | 트리거                 |
| ---------------------- | ------ | ------- | ---------------------- |
| `spacing/section-gap`  | 24     | 48      | Showroom 히어로 섹션   |
| `sizing/font-h1`       | 36     | 61      | 프로젝트 간 H1 통일 시 |
| `grid/columns`         | 1      | 3       | 카드 그리드 통일 시    |
| `sizing/sidebar-width` | 0      | 400     | 사이드바 있는 레이아웃 |

### 토큰 파이프라인 반영

```
primitives.json (현행 유지)
    ↓
semantics.json  (현행 유지)
    ↓
breakpoints.json (신규) ← 반응형 변수 추가
    ↓
CSS 출력: @media (min-width: 1024px) { --sng-spacing-page: 24px; }
```

### Figma 반영

- DS 파일(`AEoW19jmlUh3rFgzhhV1vH`)에 Variable Collection "Breakpoint" 추가
- 모드: Desktop / Mobile (추후 Tablet)
- 레이아웃 프레임에 모드 전환으로 자동 반응형 프리뷰 가능

---

## 12. Blockers & Known Issues

| Issue                                | Status                                |
| ------------------------------------ | ------------------------------------- |
| Blog CI 401 (GitHub Packages auth)   | Deferred — needs user action          |
| PAT exposure (`openclaw classic`)    | User advised, not rotated             |
| Prettier crash on `variables.css`    | Unresolved, commits use `--no-verify` |
| Open PR #33 (obsolete token PR)      | Close recommended                     |
| Monorepo `.releaserc` path filtering | Backlog                               |
