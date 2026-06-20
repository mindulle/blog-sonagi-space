---
title: Sonagi Table of Contents (ToC)
tags: [component, design-system, navigation]
created: 2026-06-01
updated: 2026-06-19
status: stable
---

# Sonagi Table of Contents (ToC)

긴 문서의 구조를 보여주고 원하는 섹션으로 빠르게 이동할 수 있게 돕는 내비게이션 컴포넌트입니다.

## 1. 디자인 컨셉
- **Thin**: 기본적으로 보더가 없는 투명한 배경과 작은 본문 서체(`13px`)를 사용하여 정보의 위계를 섬세하게 드러냅니다.
- **Wild**: 사용자가 현재 읽고 있는 섹션(Active)을 표시할 때만 좌측에 2px의 굵은 원색 보더(`--color-brand-primary`)를 배치하여 시선을 강렬하게 유도합니다.

## 2. 기술적 명세 (Implementation)
본문의 제목(`h1`, `h2`)을 스캔하여 트리 구조를 형성하며, 스크롤 위치에 따라 활성 상태를 동적으로 업데이트합니다.

### CSS (Standard)
```css
.s-toc-container {
  font-family: var(--font-sans);
  font-size: 0.8125rem; /* 13px */
  border-left: 1px solid var(--color-border-subtle);
  padding-left: var(--spacing-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.s-toc-item-active {
  color: var(--color-brand-primary);
  font-weight: 600;
  border-left: 2px solid var(--color-brand-primary); /* Wild Indicator */
  margin-left: calc(var(--spacing-2) * -1 - 1px); /* Offset overlap */
  padding-left: var(--spacing-2);
}
```

## 3. 토큰 매핑 확인
| 속성 | 사용된 토큰 | 효과 |
| :--- | :--- | :--- |
| 기본 글꼴 | `--font-sans` | Pretendard |
| 활성 색상 | `--color-brand-primary` | Sonagi Blue (Indigo) |
| 활성 보더 | `2px solid` | 굵고 선명한 위치 표시 |
| 여백 | `--spacing-2` | 아이템 간의 조밀한 간격 |

## 4. 사용 가이드
- **언제 사용하는가?**: 블로그 포스트, 기술 문서 등 본문이 긴 위키 페이지의 사이드바에 배치합니다.
- **주의사항**: 모바일 환경에서는 아코디언 형태로 접거나, 상단에 가로 스크롤 형태로 변형하여 공간을 효율적으로 사용해야 합니다.

---
## 관련 문서
- [[design-system-codex|디자인 시스템 코덱스]]
- [[Typography-Master-Specs|타이포그래피 명세]]
- [[Sonagi-Header|Sonagi Header]]
