---
title: Sonagi Navigation Header
tags: [component, design-system, layout]
created: 2026-06-01
updated: 2026-06-19
status: stable
---

# Sonagi Navigation Header

서비스의 최상단에서 브랜드 정체성과 핵심 내비게이션을 제공하는 컴포넌트입니다.

## 1. 디자인 컨셉
- **Wild**: 하단에 2px의 강한 보더(`--color-border-strong`)를 배치하여 페이지의 상단 경계를 명확히 정의합니다.
- **Thin**: `Classic Serif` 서체로 구현된 로고와 넓은 좌우 패딩(`var(--spacing-8)`)을 통해 고급스러운 정밀함을 표현합니다.

## 2. 기술적 명세 (Implementation)
스크롤 시 상단에 고정되는 `sticky` 속성을 기본으로 하며, 화면 크기에 따라 패딩과 높이가 조절되는 `Elastic` 전략을 따릅니다.

### CSS (Standard)
```css
.s-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: clamp(64px, 10vh, 80px);
  padding: 0 var(--spacing-8);
  background: var(--color-bg-surface);
  border-bottom: 2px solid var(--color-border-strong);
  position: sticky;
  top: 0;
  z-index: 100;
}

.s-header-logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
}
```

## 3. 토큰 매핑 확인
| 속성 | 사용된 토큰 | 효과 |
| :--- | :--- | :--- |
| 높이 | `64px` ~ `80px` | 반응형 높이 조절 |
| 하단 테두리 | `--color-border-strong` | 2px Ink Black 선 |
| 로고 서체 | `--font-serif` | Classic Serif |
| 좌우 여백 | `--spacing-8` | 데스크탑 64px, 모바일 32px (Elastic) |

## 4. 사용 가이드
- **언제 사용하는가?**: 모든 페이지의 최상단 레이아웃 컴포넌트로 사용합니다.
- **주의사항**: 로고 텍스트는 시스템의 'Thin'한 면모를 보여주는 핵심 요소이므로, 자간(`-0.03em`) 설정을 준수해야 합니다.

---
## 관련 문서
- [[design-system-codex|디자인 시스템 코덱스]]
- [[variables.css|디자인 토큰]]
- [[Sonagi-Button|Sonagi Button]]
