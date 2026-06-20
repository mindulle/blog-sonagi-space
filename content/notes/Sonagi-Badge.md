---
title: Sonagi Badge
tags: [component, design-system, atomic]
created: 2026-06-01
updated: 2026-06-19
status: stable
---

# Sonagi Badge

상태 정보, 태그, 카테고리 등을 나타내는 작은 정보 칩 컴포넌트입니다.

## 1. 디자인 컨셉
- **Wild**: 크기가 작음에도 불구하고 1px 또는 2px의 보더를 명확히 사용하여 시각적으로 묻히지 않게 합니다.
- **Thin**: 대문자(Uppercase) 사용과 약간 넓은 자간(Letter-spacing 0.05em)을 통해 전문적인 인상을 줍니다.

## 2. 기술적 명세 (Implementation)
내용에 따라 가로 너비가 유동적으로 변하며, 상태(Success, Warning, Error)에 따른 시맨틱 컬러를 적극 활용합니다.

### CSS (Standard)
```css
.s-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px; /* 완전한 둥근 형태 */
  font-family: var(--font-sans);
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.s-badge-outline {
  background: transparent;
  border: 1px solid var(--color-text-primary);
  color: var(--color-text-primary);
}

.s-badge-primary {
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
  border: none;
}
```

## 3. 토큰 매핑 확인
| 속성 | 사용된 토큰 | 효과 |
| :--- | :--- | :--- |
| 배경 (Primary) | `--color-brand-primary` | Sonagi Blue |
| 글꼴 | `--font-sans` | Pretendard |
| 테두리 | `--border-thin` | 1px (소형 요소용) |

## 4. 사용 가이드
- **언제 사용하는가?**: 문서의 태그, 진행 상태(Doing, Done), 아티클 카드의 카테고리 표시 시 사용합니다.
- **주의사항**: 배지는 장식 요소가 아닌 '정보' 전달이 목적이므로, 한 영역에 너무 많은 색상을 혼용하지 마십시오.

---
## 관련 문서
- [[design-system-codex|디자인 시스템 코덱스]]
- [[Sonagi-Card|Sonagi Article Card]]
