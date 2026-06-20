---
title: Core Component Mapping - Phase A
tags: [analysis, reverse-engineering, shadcn-ui, mapping]
created: 2026-05-20
updated: 2026-05-20
---

# Phase A: Core Component Mapping (Button, Input, Card)

이 문서는 shadcn/ui의 핵심 컴포넌트 3종(Button, Input, Card)이 사용하는 기술적 명세를 분석하고, 이를 우리 '소나기(Sonagi)' 디자인 토큰에 어떻게 매핑할지 정의합니다.

## 1. 토큰 매핑 매트릭스 (Shadcn vs Sonagi)

| Shadcn Variable | Sonagi Variable (Mapping) | 비고 |
| :--- | :--- | :--- |
| `--primary` | `--s-action-primary` | 핵심 액션 컬러 (소나기 블루) |
| `--primary-foreground` | `--s-action-on-primary` | 버튼 등 기본 액션 위의 텍스트 |
| `--background` | `--s-surface-base` | 페이지 및 컨테이너 배경 |
| `--card` | `--s-surface-base` | 카드 배경 (필요시 `--s-surface-subtle`와 혼합) |
| `--foreground` | `--s-text-main` | 기본 텍스트 |
| `--muted-foreground` | `--s-text-muted` | 부가 설명 및 Placeholder |
| `--border` | `--s-border-subtle` | 일반 컴포넌트 테두리 |
| `--input` | `--s-border-strong` | 폼 입력창 테두리 (Wild & Thin 아이덴티티 강조) |
| `--ring` | `--s-action-primary` | 포커스 시 링 컬러 |

## 2. 컴포넌트별 분석 및 적용 전략

### 🔘 Button (버튼)
- **Shadcn 방식**: `cva`를 통해 `variant`별로 `bg-primary`, `bg-secondary` 등을 할당.
- **소나기 적용**:
    - `variant="primary"`: `--s-action-primary` 배경 + `--s-font-body` 적용.
    - `variant="outline"`: `--s-border-width-standard` (2px) 적용하여 로고와 일체감 형성.
    - **Hover**: shadcn의 단순 명도 변경 대신, 우리만의 `transition` 효과와 미세한 `scale` 변화 주입.

### ⌨️ Input (입력창)
- **Shadcn 방식**: `border-input`을 기본으로 하며 포커스 시 `ring` 효과.
- **소나기 적용**:
    - **테두리**: `--s-border-width-thin` 대신 `--s-border-width-standard`를 사용하여 'Wild'한 느낌 강조 가능.
    - **Placeholder**: `--s-text-muted` 적용.
    - **Focus**: `--s-action-primary` 색상의 링과 함께 테두리 색상 변화.

### 🗂️ Card (카드)
- **Shadcn 방식**: `CardHeader`, `CardContent` 등 합성 컴포넌트 구조.
- **소나기 적용**:
    - **외곽선**: `.s-card-thin` 클래스의 로직을 따라 `--s-border-subtle` 적용.
    - **타이포그래피**: `CardTitle`에 `--s-font-heading` (Classic Serif)을 강제 적용하여 위키 특유의 '기록물' 느낌 강화.

## 3. 리서치 인사이트 (Live Audit 결과)
- **합성 컴포넌트의 유연성**: Card처럼 여러 조각으로 나뉜 구조는 LLM이 특정 부분(예: Footer만 수정)을 고치기에 매우 유리함.
- **상태 관리**: `disabled` 상태에서 `opacity-50`을 쓰는 shadcn의 방식을 유지하되, `--s-text-muted`로 가독성을 보완할 필요가 있음.

---
## 다음 단계
- [[variables.css 리팩토링|Phase B: Design Token Advancement]] 진행 시 위 매핑 테이블을 기준으로 변수명 정리.
