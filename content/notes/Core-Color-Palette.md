---
title: "소나기 코어 컬러 팔레트 (Core Color Palette)"
version: "2.0.0"
updated: "2026-06-19"
tags: [color, palette, design-system, visual-identity]
category: design
description: "소나기 디자인 시스템 공식 컬러 팔레트 — Sonagi Blue / Deep Blue 기반"
---

# 소나기 코어 컬러 팔레트 (Core Color Palette)

> **v1 → v2 변경:** Eagle 라이브러리 분석 기반의 Gold/Ochre 체계에서
> Sonagi Blue + Deep Blue 체계로 전환. 단정하고 신뢰감 있는 방향으로 확정.
> 상세 토큰 매핑은 [[Foundation-Tokens]] 참조.

---

## 1. 브랜드 컬러

### Primary — Sonagi Blue
- **다크모드**: `#1991B9`
- **라이트모드**: `#1275b5`
- **의미**: 소나기처럼 청명하고 시원한 파란, 신뢰와 활동성.
- **용도**: 버튼, 링크, 포커스 링, 강조 테두리.

### Primary Dark — Deep Blue
- **값**: `#083A64` (모드 공통)
- **의미**: 깊은 밤의 소나기, 전문성, 깊이감.
- **용도**: hover 상태, 헤더 포인트, 로고 배경.

### Logo — Neon Cyan
- **값**: `#00ffcc` (모드 공통, **에셋 전용**)
- **용도**: 로고 SVG, 브랜드 에셋. UI 컴포넌트에서는 사용 금지.

---

## 2. 배경 팔레트

| 단계 | 다크 | 라이트 | 용도 |
|---|---|---|---|
| Base | `#010609` | `#faf9f7` | 최하단 배경 |
| Surface | `#0d1117` | `#fff8f2` | 카드, 패널, 사이드바 |
| Elevated | `#161b22` | `#ffffff` | 모달, 드롭다운 |
| Overlay | `#1c2128` | `#f0ede8` | hover 오버레이 |

라이트모드는 **웜 화이트** 계열 — 차갑지 않고 종이 느낌의 따뜻한 흰색.

---

## 3. 텍스트 팔레트

| 역할 | 다크 | 라이트 |
|---|---|---|
| Primary | `#f0f6fc` | `#0d1117` |
| Secondary | `#c9d1d9` | `#30363d` |
| Muted | `#8b949e` | `#8b949e` |
| Disabled | `#484f58` | `#c9d1d9` |
| Inverse | `#010609` | `#faf9f7` |

---

## 4. 상태 컬러 (공통)

| 역할 | 값 |
|---|---|
| Success | `#2ea043` |
| Warning | `#d29922` |
| Error | `#f85149` |
| Info | primary와 동일 |

---

## 5. 활용 원칙

1. **컴포넌트는 Semantic 토큰만 참조** — 하드코딩 금지. `var(--color-brand-primary)` 형태로.
2. **Neon Cyan은 로고 전용** — UI 버튼, 텍스트, 아이콘에 사용하지 않는다.
3. **접근성** — 텍스트와 배경 간 대비비 4.5:1 이상 준수. Primary/Base 조합은 두 모드 모두 통과.
4. **모드 전환** — `prefers-color-scheme` 자동 반영, `data-theme` 속성으로 수동 오버라이드 가능.

---

## 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| 2.0.0 | 2026-06-19 | Sonagi Blue + Deep Blue 체계로 전면 개편, 라이트/다크 모드 대응 |
| 1.0.0 | 2026-05-19 | Eagle 라이브러리 분석 기반, Deep Blue + Gold/Ochre 체계 (deprecated) |
