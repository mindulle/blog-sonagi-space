---
title: "Pixel Agent Prototype Log: Jenny & Nuri"
category: Journal
visibility: private
tags: [agent, pixel-art, research, log]
---

# 🧪 Pixel Agent Prototype Log: Jenny & Nuri

이 문서는 에이전트 **제니(Jenny)**와 **누리(Nuri)**의 픽셀 캐릭터 제작 과정에서 발생하는 문제점과 해결책을 기록하는 연구 일지입니다.
...
## 📅 2026-05-15: Nuri Generation (Tech Explorer)

### 1. 목표 (Goal)
- 제니와 동일한 32x32 템플릿 규격을 사용하여 누리(Nuri) 캐릭터 생성.
- 테크니컬하고 미래지향적인 속성(고글, 태블릿) 표현.

### 2. 사용 프롬프트 (Prompt v1.0)
- **Positive**: `(pixel art:1.5), (by saint11:1.2), cool boy Nuri, tech hoodie, digital tablet, glowing goggles, blue hair, futuristic, standing pose, flat colors, clean clusters, 32x32 pixel style, (matching the exact geometry of input image:1.3)`
- **Negative**: `blur, realistic, 3d, gradient, deformed anatomy, changing body proportions, messy, noisy, highres, masterpiece`

### 3. 결과 (Result)
- `nuri_strict_v1_00001_.png` 생성 완료. 제니와 동일한 위치와 크기로 정렬됨.

## 📅 2026-05-15: Iteration 3 (Advanced Bridge Workflow)

### 1. 목표 (Goal)
- **Animagine XL 3.1** 고급 모델을 사용하여 캐릭터의 세부 특징(베레모, 팔레트, 고글, 태블릿)이 완벽하게 반영된 고해상도 마스터 이미지 생성.
- 생성된 마스터 이미지를 기반으로 픽셀 아트 변환(Bridge)을 수행하여, 저해상도에서도 캐릭터 정체성 유지.

### 2. 해결 전략 (Refinement Strategy)
- **Stage 1 (Master)**: Animagine XL 3.1을 사용하여 1024x1024 고해상도 일러스트 생성.
- **Stage 2 (Pixelation)**: Nearest Neighbor 보간법으로 32x32로 축소 후 다시 512x512로 확대하여 '픽셀 가이드' 생성.
- **Stage 3 (Refinement)**: SD 1.5 + Pixel Art LoRA 조합으로 픽셀 가이드를 재샘플링(Denoise 0.5)하여 최종 픽셀 아트 완성.

### 3. 결과 (Result)
- **Jenny**: `jenny_master_xl_00001_.png` (마스터) -> `jenny_advanced_bridge_00001_.png` (최종 픽셀)
- **Nuri**: `nuri_master_xl_00001_.png` (마스터) -> `nuri_advanced_bridge_00001_.png` (최종 픽셀)
- **Money**: `money_master_xl_00001_.png` (마스터) -> `money_advanced_bridge_00001_.png` (최종 픽셀)
- **Maru**: `maru_master_xl_00001_.png` (마스터) -> `maru_advanced_bridge_00001_.png` (최종 픽셀)
- **평가**: 전체 에이전트 팀(제니, 누리, 머니, 마루)의 시각적 에셋 라인업 완성. 고급 모델의 일관된 화풍을 유지하면서 각 에이전트의 페르소나를 명확히 함.
- **사용자 피드백**: "원본 이미지(Master)는 훌륭하나, 픽셀화 과정에서 일부 어색함이 있음."
- **차후 개선점**: 픽셀화 단계에서 Denoising Strength를 더 낮추거나(0.3~0.4), 수동 보정(Cleaning) 프로세스 검토 필요.





## 📅 2026-05-15: Initial Draft (Standing Pose)

### 1. 목표 (Goal)
- 제니의 기본 스탠딩 포즈 초안 생성.
- "Wild & Thin" 철학 중 "Digital Wild(픽셀)" 감성 확인.

### 2. 사용 프롬프트 (Prompt v1.0)
- **Positive**: `(pixel art:1.3), (by saint11:1.1), (by pixel-grimoire:1.1), full body standing sprite of a cute girl named Jenny, artistic muse persona, front view, wearing a purple beret, holding a wooden palette, oversized sweater, playful expression, clean clusters, limited color palette, high contrast, white background, integer scaled`
- **Negative**: `blur, anti-aliasing, gradient, noisy pixels, orphan pixels, 3d, realistic, watermark, deformed`

### 3. 검토 체크리스트 (Heuristic Evaluation)
- [ ] **재기(Jaggies)**: 곡선이나 대각선이 부자연스럽게 계단 현상이 생기지 않는가?
- [ ] **오펀 픽셀(Orphan Pixels)**: 외따로 떨어진 노이즈성 픽셀이 없는가?
- [ ] **밴딩(Banding)**: 셰이딩 시 평행한 선이 나타나 부자연스럽지 않은가?
- [ ] **컬러 클러스터**: 색상들이 덩어리감 있게 뭉쳐져 가독성이 좋은가?
- [ ] **캐릭터성**: 베레모와 팔레트가 64x64 해상도에서도 명확히 식별되는가?

## 📅 2026-05-15: Iteration 1 (Feedback & Refinement)

### 1. 피드백 (Feedback from User)
- **문제점**: "너무 고해상도임" - 픽셀 아트라기보다 일반 일러스트에 가까운 느낌.
- **원인**: 512x512 해상도에서 직접 생성되어 픽셀 격자가 너무 조밀함.

### 2. 해결 전략 (Refinement Strategy)
- **Pixelation Bridge 도입**: 생성된 512px 이미지를 **64x64px**로 강제 축소(Nearest Neighbor)한 뒤, 다시 512px로 확대하여 '블록감'을 확보.
- **프롬프트 단순화**: 세밀한 묘사보다는 굵직한 색상 덩어리(Clusters)가 생기도록 텍스트 수정.

### 3. 사용 프롬프트 (Prompt v1.1)
- **Positive**: `(pixel art:1.5), (by saint11:1.2), simple 8-bit sprite of Jenny, purple beret, wooden palette, cute chibi character, flat colors, clean bold lines, limited palette, high contrast, white background`
- **Negative**: `blur, gradient, realistic, 3d, complex details, tiny dots, noisy, masterpiece, highres` (masterpiece/highres 제거하여 고해상도 성향 억제)

## 📅 2026-05-15: Iteration 2 (Strict Geometry Adherence)

### 1. 목표 (Goal)
- 사전에 정의된 32x32 픽셀 템플릿(`sonagi_master_template_32x32.png`)의 실루엣을 엄격하게 준수.
- 에이전트 간의 크기 및 위치 일관성 확보.

### 2. 해결 전략 (Refinement Strategy)
- **ControlNet (Canny)** 도입: 템플릿 이미지의 외곽선을 추출하여 생성 가이드로 사용.
- **LoRA (pixel_art_v1)**: 픽셀 아트 스타일을 강화하기 위해 전용 LoRA 사용.
- **Denoising Strength 조절**: 0.45 수준으로 설정하여 템플릿의 구조는 유지하되 제니의 특성(베레모, 팔레트)이 입혀지도록 유도.

### 3. 기술적 이슈 (Technical Issues)
- **OOM (Out Of Memory)**: ControlNet과 LoRA를 동시에 로드하면서 시스템 메모리 부족 발생. -> 스왑 메모리(9Gi) 확충으로 해결 시도.
- **Workflow Validation**: Canny 노드의 임계값 설정 오류(0~255가 아닌 0~1 범위 기대) 수정.

### 4. 사용 프롬프트 (Prompt v1.2)
- **Positive**: `(pixel art:1.5), (by saint11:1.2), character Jenny, purple beret, holding wooden palette, oversized sweater, standing pose, flat colors, clean clusters, 32x32 pixel style, (matching the exact geometry of input image:1.3)`
- **Negative**: `blur, realistic, 3d, gradient, deformed anatomy, changing body proportions, messy, noisy, highres, masterpiece`
