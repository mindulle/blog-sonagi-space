---
title: "Sonagi 시각적 자산 아틀라스 (Visual Asset Atlas)"
date: 2026-05-13
tags: [branding, assets, atlas, visual]
category: design
description: "소나기 브랜드 자산을 시각적으로 탐색하고 즉시 활용하기 위한 도감 (물리 구조 동기화 완료)"
---

# 🖼️ Sonagi Visual Asset Atlas

이 문서는 `10_Sources/assets/branding`에 저장된 로고와 그래픽 요소들을 시각적으로 한눈에 파악하기 위한 도감입니다. 모든 파일은 **[Final / Motifs / Archive]** 체계에 따라 물리적으로 정리되었습니다.

> [!IMPORTANT]
> **현재 동기화 상태 점검**: 로컬 환경에 실제 에셋 파일(`*.svg`, `*.png`)이 존재하지 않을 경우 아래 미리보기가 엑박으로 표시될 수 있습니다. 이 경우 `00_System/scripts/external/cloudinary/pull.sh`를 실행하여 최신 자산을 동기화하십시오.

---

## 💎 1. 마스터 자산 (Master Assets)
브랜드의 정수가 담긴 핵심 통합 파일입니다.
- **경로**: `10_Sources/assets/branding/Final/Master/`

|                  미리보기                  | 에셋 명칭                                            | 용도 및 특징                           |
| :------------------------------------: | :----------------------------------------------- | :-------------------------------- |
| ![[sonagi_brand_kit_v2_wild_thin.svg]] | `Final/Master/sonagi_brand_kit_v2_wild_thin.svg` | **[최상위 마스터]** 모든 심볼과 워드마크, 조합형 포함 |

---

## 🖋️ 2. 단독형 로고 (Standalone)
상황에 따라 심볼 또는 워드마크만 단독으로 사용할 때의 자산입니다.
- **경로**: `10_Sources/assets/branding/Final/Standalone/`

### 2.1 The Thin (Geometric Symbol)
|                  미리보기                  | 에셋 명칭                                                | 활용 가이드                          |
| :------------------------------------: | :--------------------------------------------------- | :------------------------------ |
| ![[sonagi_symbol_geometric_final.svg]] | `Final/Standalone/sonagi_symbol_geometric_final.svg` | **[최종 심볼]** 파비콘, 앱 아이콘, 프로필 이미지 |

### 2.2 The Wild (Calligraphy Wordmark)
|                   미리보기                   | 에셋 명칭                                                  | 활용 가이드                        |
| :--------------------------------------: | :----------------------------------------------------- | :---------------------------- |
| ![[sonagi_lettering_refined_rabbit.svg]] | `Final/Standalone/sonagi_lettering_refined_rabbit.svg` | **[최종 워드마크]** 감성적 타이틀, 엔딩 크레딧 |

---

## 🧩 3. 조합 및 배치 (Combinations)
매체 레이아웃에 최적화된 조합형 에셋입니다.
- **경로**: `10_Sources/assets/branding/Final/Combination/`

| 미리보기 | 에셋 명칭 | 최적 활용 매체 |
| :---: | :--- | :--- |
| ![[sonagi_wild_thin_horizontal.svg]] | `Final/Combination/sonagi_wild_thin_horizontal.svg` | 웹사이트 GNB, 상단 헤더, 이메일 서명 |
| ![[sonagi_wild_thin_vertical.svg]] | `Final/Combination/sonagi_wild_thin_vertical.svg` | 포스터 중앙, 배너, 패키지 디자인 |

---

## 🎨 4. 그래픽 모티프 & 텍스처 (Graphic Motifs)
브랜드 무드를 강화하는 보조 그래픽 요소입니다.
- **경로**: `10_Sources/assets/branding/Motifs/`

|                미리보기                | 에셋 명칭                                  | 활용 방법               |
| :--------------------------------: | :------------------------------------- | :------------------ |
| ![[sonagi_brush_simulations.svg]]  | `Motifs/sonagi_brush_simulations.svg`  | 배경용 먹 번짐 텍스처        |
| ![[sonagi_symbols_wild_brush.svg]] | `Motifs/sonagi_symbols_wild_brush.svg` | 유기적인 붓 터치 아이콘 및 구분선 |

---

## 📁 5. 아카이브 (Archive)
최종 결정 전의 아이디어 및 이전 버전 파일들입니다.
- **경로**: `10_Sources/assets/branding/Archive/` 및 `Archive/Sketches/`
- *내용은 파일 탐색기를 통해 확인하십시오.*

---

> **Note**: 물리적 파일이 누락된 경우, Cloudinary 저장소와의 연결 상태를 확인하고 `pull.sh` 스크립트를 통해 자산을 복구하십시오. 파일 경로가 대규모 개편되었으므로, 이전 경로를 참조하는 외부 문서가 있다면 본 아틀라스의 경로로 업데이트가 필요합니다.
