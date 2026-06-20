---
title: Sonagi Input
tags: [component, design-system, form]
created: 2026-06-01
updated: 2026-06-19
status: stable
---

# Sonagi Input

사용자로부터 텍스트 정보를 입력받는 필드 컴포넌트입니다.

## 1. 디자인 컨셉
- **Wild**: 입력 필드 전체에 2px의 두꺼운 보더(`--color-border-strong`)를 사용하여 입력 영역의 물리적 존재감을 강조합니다. 포커스 시 보더 색상이 `var(--color-brand-primary)`로 변경되어 강렬한 피드백을 줍니다.
- **Thin**: 8px 단위의 정교한 패딩과 `Pretendard` 서체를 사용하여 입력된 텍스트의 가독성을 최우선으로 합니다.

## 2. 기술적 명세 (Implementation)
브라우저 기본 포커스 링을 제거하고, 시스템의 `ring` 토큰을 사용하여 일관된 시각적 언어를 유지합니다.

### CSS (Standard)
```css
.s-input {
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-2);
  background: var(--color-bg-surface);
  border: 2px solid var(--color-border-strong); /* 2px Wild Border */
  border-radius: var(--radius-base);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.s-input:focus {
  outline: none;
  border-color: var(--color-brand-primary);
  /* shadow 대신 subtle ring 효과 (optional) */
  box-shadow: var(--shadow-focus);
}

.s-input::placeholder {
  color: var(--color-text-muted);
}
```

## 3. 토큰 매핑 확인
| 속성 | 사용된 토큰 | 효과 |
| :--- | :--- | :--- |
| 테두리 두께 | `--border-base` | 2px의 굵은 선 |
| 테두리 색상 (기본) | `--color-border-strong` | Sonagi Blue |
| 테두리 색상 (포커스) | `--color-brand-primary` | Sonagi Blue (Indigo) |
| 라운딩 | `--radius-base` | 4px |

## 4. 사용 가이드
- **언제 사용하는가?**: 검색창, 로그인 폼, 설정 페이지 등 모든 텍스트 입력 상황에 사용합니다.
- **주의사항**: 입력 필드가 여러 개 나열될 경우, 수직 간격을 `var(--spacing-4)` (16px 또는 32px Elastic) 이상 확보하여 답답함을 방지하십시오.

---
## 관련 문서
- [[design-system-codex|디자인 시스템 코덱스]]
- [[Sonagi-Button|Sonagi Button]]
