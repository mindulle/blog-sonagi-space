# AGENTS.md — blog-sonagi-space

이 파일은 이 프로젝트에서 AI가 코드를 작성하거나 수정할 때 반드시 따라야 할 규칙을 정의합니다.
규칙을 어기면 안 됩니다. 불확실하면 작업을 멈추고 사람에게 확인하세요.

---

## 1. 색상 규칙 (가장 중요)

**색상은 반드시 CSS 변수로만 참조합니다.**

```tsx
// ✅ 올바름
style={{ color: 'var(--color-brand-primary)' }}
className="text-[var(--color-text-primary)]"

// ❌ 금지 — Tailwind 색상 클래스
className="text-blue-500 bg-neutral-800"

// ❌ 금지 — 하드코딩
style={{ color: '#1991B9' }}
```

사용 가능한 CSS 변수 목록:

```
--color-brand-primary        (주 브랜드 색상, 모드별 자동 전환)
--color-brand-primary-dark   (브랜드 딥 블루)
--color-brand-primary-hover  (hover 상태)

--color-bg-base              (페이지 최하단 배경)
--color-bg-surface           (카드, 패널)
--color-bg-elevated          (모달, 드롭다운)
--color-bg-overlay           (hover 오버레이, 인라인 코드 배경)

--color-text-primary         (본문, 제목)
--color-text-secondary       (보조 텍스트)
--color-text-muted           (placeholder, 메타)
--color-text-disabled        (비활성)
--color-text-inverse         (primary 버튼 내부 텍스트)

--color-border-default       (일반 테두리)
--color-border-subtle        (구분선)
--color-border-strong        (포커스, 강조 테두리)

--color-state-success
--color-state-warning
--color-state-error
--color-state-info
```

---

## 2. 컴포넌트 규칙

**UI 컴포넌트는 `components/ui/`의 것만 사용합니다. 직접 HTML 요소로 구현하지 마세요.**

```tsx
// ✅ 올바름 — 반드시 components/ui 배럴을 통해 import (내부적으로 @mindulle/ui를 통과시킴)
import { Button, Badge, Card } from '@/components/ui';

<Button variant="primary" size="md">저장</Button>
<Badge variant="pill" color="success">완료</Badge>
<Card elevation="raised">...</Card>

// ❌ 금지 — 직접 구현
<button className="bg-blue-500 px-4 py-2 rounded">저장</button>

// ❌ 금지 — components/ui 배럴을 우회하고 @mindulle/ui를 직접 import
import { Button } from '@mindulle/ui';
```

> Button/Badge/Card는 로컬 재구현이 아니라 실제 디자인 시스템 패키지(`@mindulle/ui`)를
> `components/ui/index.ts`에서 그대로 재수출한 것입니다. API는 항상 설치된
> `@mindulle/ui` 버전의 실제 타입 정의(`node_modules/@mindulle/ui/dist/index.d.ts`)를
> 기준으로 삼으세요 — 아래 표는 참고용 스냅샷이며 패키지가 업데이트되면 달라질 수 있습니다.

### Button

- `variant`: `primary` / `secondary` / `danger`
- `size`: `sm` / `md` / `lg`
- `state`: `default` / `hover` / `active` / `disabled` (보통 직접 지정할 필요 없음)

### Badge

- `variant`: `pill`(상태/성숙도 메타데이터 전용) / `label`(카테고리·태그·경고)
- `color`: `info` / `success` / `warning` / `danger` / `error`

### Card

- `elevation`: `flat`(그림자 없음) / `raised`(기본, `shadow-sm`) / `floating`(`shadow-md`)
- `clickable`: `boolean` — true면 hover 시 떠오르는 효과 + cursor-pointer
- 배경(`bg-bg-surface`), 테두리, radius, padding(`p-5`), 자식 간 간격(`gap-3`)은 모두 내장되어 있어
  별도 서브컴포넌트(Header/Body/Footer) 없이 자식을 바로 렌더링합니다.

---

## 3. Tailwind 사용 범위

레이아웃 유틸리티만 허용합니다.

```
✅ 허용: flex, grid, gap, p-*, m-*, w-*, h-*, hidden, block,
         items-*, justify-*, space-*, overflow-*, sticky, z-*,
         text-sm / text-base / text-lg (크기만), font-medium, font-bold,
         rounded-* (radius), animate-spin, transition-*

❌ 금지: 색상 관련 모든 클래스
         bg-*, text-{color}-*, border-{color}-*, ring-*, shadow-*
         (단, shadow-[var(--shadow-*)] 형태는 허용)
```

---

## 4. 파일 구조 규칙

```
components/
  ui/          ← 디자인 시스템 기본 컴포넌트 (Button, Badge, Card 등)
  blog/        ← 블로그 도메인 컴포넌트
  layout/      ← 레이아웃 컴포넌트 (Header, Footer)
  common/      ← 공통 유틸리티 컴포넌트 (ThemeToggle 등)
```

- `components/ui/`에 새 컴포넌트를 추가할 때는 variant/size API 패턴을 따릅니다.
- 도메인 컴포넌트(`blog/`)는 `ui/` 컴포넌트를 조합해서 만듭니다.

---

## 5. 다크모드 규칙

- 다크모드는 `<html>` 요소의 `.dark` 클래스로 제어합니다.
- CSS 변수가 자동으로 모드별 값으로 전환되므로, **컴포넌트에서 `dark:` prefix를 쓰지 않아도 됩니다.**

```tsx
// ✅ 올바름 — 변수가 자동으로 전환됨
style={{ color: 'var(--color-text-primary)' }}

// ❌ 불필요
className="text-neutral-900 dark:text-neutral-100"
```

---

## 6. 금지 사항 요약

| 금지                  | 이유                  |
| --------------------- | --------------------- |
| Tailwind 색상 클래스  | 토큰 체계 일관성 깨짐 |
| 색상 하드코딩         | 다크모드 대응 불가    |
| `dark:` prefix        | CSS 변수가 처리함     |
| `components/ui/` 우회 | 디자인 시스템 무력화  |
| 임의 `z-index` 숫자   | `--z-*` 변수 사용     |
