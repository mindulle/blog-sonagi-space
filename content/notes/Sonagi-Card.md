---
title: Sonagi Article Card
tags: [component, design-system, content]
created: 2026-06-01
updated: 2026-06-19
status: stable
---

# Sonagi Article Card

위키 문서나 포스트의 메타데이터를 요약하여 보여주는 리스트형 카드 컴포넌트입니다.

## 1. 디자인 컨셉
- **Wild**: 2px의 굵은 테두리(`--color-border-strong`)를 사용하여 카드 각각을 하나의 독립된 '오브젝트'로 강조합니다. 호버 시 나타나는 그림자는 부드러운 그라데이션 대신 **Hard Shadow**를 사용하여 브루탈리즘 느낌을 극대화합니다.
- **Thin**: 카드 내부의 제목은 세리프 서체를, 메타데이터와 요약문은 정교하게 정렬된 산세리프 서체를 사용하여 시각적 균형을 잡습니다.

## 2. 기술적 명세 (Implementation)
그리드 레이아웃에서 주로 사용되며, 호버 시 위치 이동(`translate`)과 그림자 효과를 통해 즉각적인 피드백을 제공합니다.

### CSS (Standard)
```css
.s-article-card {
  background: var(--color-bg-surface);
  border: 2px solid var(--color-border-strong); /* 2px Wild Border */
  border-radius: var(--radius-base);
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.s-article-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0px var(--color-text-primary); /* Brutalist Hard Shadow */
}
```

## 3. 토큰 매핑 확인
| 속성 | 사용된 토큰 | 효과 |
| :--- | :--- | :--- |
| 테두리 | `--color-border-strong` | 2px의 굵은 Ink Black 선 |
| 제목 서체 | `--font-serif` | Classic Serif |
| 라운딩 | `--radius-base` | 4px의 정교한 모서리 |
| 그림자 색상 | `--color-text-primary` | 불투명한 검은색 그림자 |

## 4. 사용 가이드
- **언제 사용하는가?**: 인덱스 페이지, 검색 결과, 관련 문서 추천 섹션 등에서 문서를 나열할 때 사용합니다.
- **주의사항**: 여러 카드가 나열될 때 그림자가 서로 겹치지 않도록 충분한 `gap`(`var(--spacing-8)`)을 확보해야 합니다.

---
## 관련 문서
- [[design-system-codex|디자인 시스템 코덱스]]
- [[Core-Color-Palette|코어 컬러 팔레트]]
- [[Sonagi-ToC|Sonagi Table of Contents]]
