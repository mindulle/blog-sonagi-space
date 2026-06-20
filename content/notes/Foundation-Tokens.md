---
title: Foundation Design Tokens
version: "1.1.0"
updated: "2026-06-19"
category: Design
tags: [tokens, variables, css, design-system]
---

# Foundation Design Tokens (Sonagi Design System)

소나기 디자인 시스템의 시각적 뼈대를 구성하는 토큰 규격입니다.
실제 구현 파일: `10_Sources/assets/brand-kit/tokens/`

---

## 구조 (2-레이어)

```
Primitive  →  원시 색상값 (직접 사용 금지)
Semantic   →  용도별 매핑 — 컴포넌트는 이것만 참조
```

모드 전환 방식:
- **기본**: `prefers-color-scheme` 미디어쿼리로 OS 설정 자동 반영
- **수동 오버라이드**: `<html data-theme="dark|light">`

---

## 1. Primitive 색상 (원시값)

### Blue Scale
| 단계 | 값 | 용도 |
|---|---|---|
| 900 | `#051520` | 가장 어두운 Blue |
| 800 | `#083A64` | Deep Blue (Brand) |
| 600 | `#1275b5` | 라이트모드 Primary |
| 500 | `#1991B9` | **Sonagi Blue (다크모드 Primary)** |
| 400 | `#3aadd1` | 다크모드 hover |
| 300 | `#6cc6e0` | |
| 100 | `#d9f0f7` | |
| 50  | `#eef8fb` | |

### Neutral Scale
| 단계 | 값 | |
|---|---|---|
| 950 | `#010609` | Cyber Black |
| 900 | `#0d1117` | 다크 Surface |
| 850 | `#161b22` | 다크 Elevated |
| 800 | `#1c2128` | 다크 Overlay |
| 700 | `#30363d` | 다크 Border |
| 500 | `#8b949e` | Muted (공통) |
| 200 | `#f0ede8` | 라이트 Overlay |
| 150 | `#f6f3ee` | |
| 100 | `#faf9f7` | 라이트 Base (웜 화이트) |
| 50  | `#fff8f2` | 라이트 Surface |

---

## 2. Semantic 색상 (용도별)

컴포넌트는 아래 토큰만 참조합니다. 모드에 따라 값이 자동으로 바뀝니다.

### Brand
| CSS 변수 | 다크 | 라이트 |
|---|---|---|
| `--color-brand-primary` | `#1991B9` | `#1275b5` |
| `--color-brand-primary-dark` | `#083A64` | `#083A64` |
| `--color-brand-primary-hover` | `#3aadd1` | `#0d5a94` |
| `--color-brand-logo` | `#00ffcc` | `#00ffcc` (에셋 전용) |

### Background
| CSS 변수 | 다크 | 라이트 |
|---|---|---|
| `--color-bg-base` | `#010609` | `#faf9f7` |
| `--color-bg-surface` | `#0d1117` | `#fff8f2` |
| `--color-bg-elevated` | `#161b22` | `#ffffff` |
| `--color-bg-overlay` | `#1c2128` | `#f0ede8` |

### Text
| CSS 변수 | 다크 | 라이트 |
|---|---|---|
| `--color-text-primary` | `#f0f6fc` | `#0d1117` |
| `--color-text-secondary` | `#c9d1d9` | `#30363d` |
| `--color-text-muted` | `#8b949e` | `#8b949e` |
| `--color-text-disabled` | `#484f58` | `#c9d1d9` |
| `--color-text-inverse` | `#010609` | `#faf9f7` |

### Border
| CSS 변수 | 다크 | 라이트 |
|---|---|---|
| `--color-border-default` | `#30363d` | `#e6eaef` |
| `--color-border-subtle` | `#1c2128` | `#f0ede8` |
| `--color-border-strong` | `#1991B9` | `#1275b5` |

### State (공통)
| CSS 변수 | 값 |
|---|---|
| `--color-state-success` | `#2ea043` |
| `--color-state-warning` | `#d29922` |
| `--color-state-error` | `#f85149` |
| `--color-state-info` | primary와 동일 |

---

## 3. 타이포그래피

### Font Family
| CSS 변수 | 값 | 용도 |
|---|---|---|
| `--font-sans` | Pretendard, Inter | UI 기본 |
| `--font-serif` | Noto Serif KR, Merriweather | 위키 본문 |
| `--font-mono` | JetBrains Mono, Fira Code | 코드 |

### Font Size
`xs(12)` → `sm(14)` → `base(16)` → `lg(18)` → `xl(20)` → `2xl(24)` → `3xl(30)` → `4xl(36)`

---

## 4. 파일 위치

```
10_Sources/assets/brand-kit/tokens/
├── design-tokens.json   # W3C Design Tokens 포맷 (Primitive + Semantic)
└── variables.css        # CSS Custom Properties (라이트/다크 모드 대응)
```

## 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| 1.1.0 | 2026-06-19 | Primitive/Semantic 2-레이어 구조로 재편, 라이트모드 추가 (웜 화이트) |
| 1.0.0 | 2026-06-19 | 초기 작성, 다크모드 전용 |
