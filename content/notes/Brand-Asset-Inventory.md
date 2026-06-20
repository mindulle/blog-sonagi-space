---
title: "소나기 브랜드 자산 인벤토리 (Brand Asset Inventory)"
date: 2026-05-20
tags: [branding, inventory, assets, management]
category: design
description: "세 가지 브랜드 키트 템플릿(Blueprint, Gallery, Codex)을 채우기 위한 자산 현황 및 관리 대장"
---

# 📦 소나기 브랜드 자산 인벤토리

본 문서는 소나기(Sonagi) 프로젝트의 모든 시각적 자산을 체계적으로 관리하기 위한 목록입니다. 각 자산은 템플릿의 플레이스홀더를 채우는 기준이 됩니다.

---

## 1. 심볼 (Symbols) - [The Thin]
정밀한 기하학적 작도 기반의 핵심 상징물입니다.

| 자산명 | 버전 | 상태 | 파일 경로 | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| **Grid Master V2** | v2.0 | ✅ Ready | `Templates/sonagi_grid_master_v2.svg` | 모든 작도의 기준 |
| **Interlocking Brackets** | v14 | ✅ Ready | `Master/sonagi_symbol_brackets_v14.svg` | 메인 심볼 확정안 |
| **Geometric 'S'** | v13 | 🗑️ Deleted | - | 브라켓 컨셉에 밀려 삭제됨 |
| **Sonagi Drop** | v1.0 | ✅ Ready | - | 심볼 중앙의 다이아몬드 물방울 |

---

## 2. 워드마크 (Logotypes)
심볼과 결합하여 브랜드명을 전달하는 타이포그래피 자산입니다.

| 자산명 | 버전 | 상태 | 파일 경로 | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| **English Wordmark** | v7 | 🛠️ Refining | `generated/logo_wordmark_en_v7.svg` | 잉크 트랩/그리드 보정 필요 |
| **Korean Wordmark** | v7 | 🛠️ Refining | `generated/logo_wordmark_ko_v7.svg` | 잉크 트랩/그리드 보정 필요 |
| **Combination Mark** | v14 | 🧪 Testing | `Combination/sonagi_combo_master_v2.svg` | 가로형(Horizontal) 실험 중 |

---

## 3. 필터 라이브러리 (Style Spectrum) - [The Wild]
각 학파(School)의 미학을 대변하는 기술적 파라미터 셋입니다.

| 학파 (Style) | 필터 ID | 상태 | 기술적 핵심 |
| :--- | :--- | :--- | :--- |
| **Scholar** | (Standard) | ✅ Ready | Pixel Perfect, Crisp Edges |
| **Artist** | `sonagi_ink_bleed` | ✅ Ready | Joseph Gilland 기반 먹 번짐 |
| **Liquid** | `sonagi_gooey_ink` | ✅ Ready | 액체 표면 장력 시뮬레이션 |
| **Material** | `sonagi_frosted_glass`| ✅ Ready | 굴절 및 투과가 있는 유리 질감 |
| **Brutalist** | `sonagi_micro_grain` | ✅ Ready | 초고주파 종이 질감 (0.8 freq) |

---

## 4. 템플릿 (The Containers)
자산을 나열하고 배포하기 위한 마스터 그릇입니다.

| 템플릿명 | 버전 | 용도 | 파일 경로 |
| :--- | :--- | :--- | :--- |
| **The Blueprint** | v1 | 기술 참조 (Eng) | `Templates/template_blueprint_v1.svg` |
| **The Gallery** | v1 | 시각적 선언 (Art) | `Templates/template_gallery_v1.svg` |
| **The Codex** | v1 | 표준 가이드 (Gov) | `Templates/template_codex_v1.svg` |

---

## 🚀 다음 작업 (Action Items)
1.  **[High]** v7 워드마크(영문/한글)를 `Grid Master`에 맞춰 정밀 재작도.
2.  **[Medium]** `Blueprint` 템플릿에 v14 브라켓과 기술 수치 실제 데이터 삽입.
3.  **[Low]** 각 필터가 적용된 자산들을 `Gallery` 템플릿에 예술적으로 나열.

---
*Created by Antigravity CLI - Brand Asset Inventory v1.0*
