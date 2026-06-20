---
title: "Sonagi Core Icon Set"
version: "2.0.0"
updated: "2026-06-19"
status: stable
tags: [component, design-system, icons]
description: "소나기 디자인 시스템 아이콘 스펙 — Lucide 기반 v2.0"
---

# Sonagi Core Icon Set (v2.0)

## 기술 스펙

| 항목 | 값 |
|---|---|
| 소스 | [Lucide Icons](https://lucide.dev) (MIT License) |
| Grid | 24×24px |
| Stroke Width | 2px |
| Fill | none |
| Stroke Cap / Join | round / round |
| Color | `currentColor` |

## 아이콘 목록 (18종)

| 이름 | 카테고리 | Lucide 원본명 |
|---|---|---|
| `arrow-right` | 네비게이션 | arrow-right |
| `chevron-down` | 네비게이션 | chevron-down |
| `home` | 네비게이션 | house |
| `menu` | 네비게이션 | menu |
| `link` | 네비게이션 | link |
| `search` | 액션 | search |
| `plus` | 액션 | plus |
| `close` | 액션 | x |
| `edit` | 액션 | pencil |
| `trash` | 액션 | trash-2 |
| `gear` | 설정 | settings |
| `clock` | 상태 | clock |
| `heart` | 상태 | heart |
| `camera` | 미디어 | camera |
| `cloud` | 미디어 | cloud |
| `folder` | 파일 | folder |
| `folder-open` | 파일 | folder-open |
| `user` | 사람 | user |

## 파일 위치

```
10_Sources/assets/icons/icon-{name}.svg   ← SVG 마스터
10_Sources/assets/icons/SonagiIcon.tsx    ← React 컴포넌트
```

## React 사용법

```tsx
import { SonagiIcon } from './SonagiIcon';

// 기본 (24px)
<SonagiIcon name="home" />

// 크기 지정
<SonagiIcon name="search" size={16} />
<SonagiIcon name="gear" size={48} />

// 색상 — currentColor 상속
<div style={{ color: 'var(--color-brand-primary)' }}>
  <SonagiIcon name="heart" />
</div>
```

## 아이콘 추가 가이드

새 아이콘이 필요할 때:

1. [lucide.dev](https://lucide.dev)에서 먼저 탐색
2. MIT 라이선스 확인 후 SVG 다운로드
3. `icon-{name}.svg`로 저장
4. `SonagiIcon.tsx`의 `SonagiIconName` 타입과 `iconPaths`에 추가
5. 이 문서 아이콘 목록에 추가

Lucide에 없는 아이콘은 Inkscape로 직접 제작 (24×24, 2px stroke, round cap 준수)

## 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v2.0.0 | 2026-06-19 | SCAD/수동 파이프라인 폐기, Lucide 기반으로 전면 교체 |
| v1.0.0 | 2026-06 | OpenSCAD + Raw SVG 수동 제작 파이프라인 (deprecated) |
