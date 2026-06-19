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
// ✅ 올바름
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

<Button variant="primary" size="medium">저장</Button>
<Badge variant="success">완료</Badge>

// ❌ 금지 — 직접 구현
<button className="bg-blue-500 px-4 py-2 rounded">저장</button>
```

### Button variants
- `primary` — 주요 액션 (저장, 제출)
- `secondary` — 보조 액션
- `ghost` — 아이콘 버튼, 네비게이션
- `outline` — Wild & Thin 강조 스타일

### Badge variants
- `default` — 일반 태그
- `primary` — 강조 카테고리
- `success` / `warning` / `error` — 상태 표시
- `outline` — 테두리형

### Card variants
- `elevated` — 그림자 있는 카드 (기본)
- `outlined` — 테두리 카드
- `filled` — 배경 채운 카드

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

| 금지 | 이유 |
|---|---|
| Tailwind 색상 클래스 | 토큰 체계 일관성 깨짐 |
| 색상 하드코딩 | 다크모드 대응 불가 |
| `dark:` prefix | CSS 변수가 처리함 |
| `components/ui/` 우회 | 디자인 시스템 무력화 |
| 임의 `z-index` 숫자 | `--z-*` 변수 사용 |
