---
title: "사진과 화상의 기본 (Photography & Image Composition)"
category: Design
tags: [photography, composition, ui-ux, img2img, fundamentals]
source: "Pictorial Composition (Henry R. Poore), Composition (Arthur W. Dow)"
---

# 사진과 화상의 기본 (Photography & Image Composition)

UI/UX 디자인에서 사진(Image)은 텍스트보다 훨씬 빠르고 강렬하게 사용자의 감정과 시선을 움직입니다. 단순히 예쁜 이미지를 고르는 것을 넘어, **구도의 법칙으로 시선을 유도**하고, **AI 기술을 활용해 사진을 디자인의 뼈대로 역추출(Reverse-extraction)**하는 현대적인 실무 지식을 다룹니다.

---

## 1. 구도와 트리밍의 법칙 (Composition & Trimming)

사진을 지면에 배치할 때는 대상이 가진 방향성과 무게 중심을 철저히 계산해야 합니다.

### 1.1 3분할 법칙 (Rule of Thirds)
- **개념**: 화면을 가로세로 각각 3등분 하는 4개의 선을 긋고, 그 선들이 교차하는 4개의 점(교차점)에 가장 중요한 피사체를 배치하는 기법입니다.
- **효과**: 피사체가 정중앙에 있을 때의 답답함을 없애고, 화면에 동적인 여백과 세련미를 줍니다.

<div style="position: relative; width: 100%; max-width: 600px; aspect-ratio: 3/2; background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'); background-size: cover; border-radius: 8px; overflow: hidden; margin: 20px 0;">
  <!-- Rule of Thirds Grid -->
  <div style="position: absolute; top: 33.33%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.7); box-shadow: 0 1px 3px rgba(0,0,0,0.5);"></div>
  <div style="position: absolute; top: 66.66%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.7); box-shadow: 0 1px 3px rgba(0,0,0,0.5);"></div>
  <div style="position: absolute; top: 0; left: 33.33%; width: 1px; height: 100%; background: rgba(255,255,255,0.7); box-shadow: 0 1px 3px rgba(0,0,0,0.5);"></div>
  <div style="position: absolute; top: 0; left: 66.66%; width: 1px; height: 100%; background: rgba(255,255,255,0.7); box-shadow: 0 1px 3px rgba(0,0,0,0.5);"></div>
  <!-- Focal Point Highlight -->
  <div style="position: absolute; top: 66.66%; left: 33.33%; width: 20px; height: 20px; background: #3b82f6; border: 2px solid white; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>
</div>

### 1.2 시선 유도와 동선 (Visual Path)
- **개념**: 헨리 랭킨 푸어(Henry R. Poore)가 강조했듯, 그림(사진) 속에는 관객의 눈동자가 흘러가는 보이지 않는 길이 있습니다.
- **실무 적용**: **인물 사진의 시선이나 피사체가 향하는 방향은 반드시 '텍스트'나 '중요 버튼(CTA)'을 향해야 합니다.** 인물이 화면 바깥을 쳐다보고 있으면, 사용자의 시선도 화면 밖으로 이탈해 버립니다.

---

## 2. 사진과 텍스트의 결합 (Typography on Images)

배경이 복잡한 사진 위에 텍스트를 그냥 얹으면 가독성이 심각하게 훼손됩니다. 아서 웨슬리 다우가 강조한 '농담(Notan)'의 밸런스를 맞춰야 합니다.

### 2.1 스크림 (Scrim) 기법
- **개념**: 사진과 텍스트 사이에 부드러운 그라데이션 형태의 어두운 투명 레이어를 끼워 넣는 기법.
- **실용**: 사진의 핵심 피사체는 살리면서, 텍스트가 들어가는 부분(주로 사진의 하단이나 상단)의 명도만 강제로 낮춰서 WCAG 가독성 기준(4.5:1)을 충족시킵니다.

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
  <!-- Bad Example -->
  <div style="flex: 1; min-width: 250px; height: 200px; position: relative; border-radius: 8px; overflow: hidden; background-image: url('https://images.unsplash.com/photo-1506744626753-1fa44df14c28?auto=format&fit=crop&w=600&q=80'); background-size: cover;">
    <div style="position: absolute; bottom: 20px; left: 20px; color: white; font-size: 24px; font-weight: bold;">Bad: No Scrim</div>
    <div style="position: absolute; bottom: 5px; left: 20px; color: white; font-size: 14px;">텍스트가 배경에 묻혀서 전혀 읽히지 않습니다.</div>
  </div>
  <!-- Good Example (With Scrim) -->
  <div style="flex: 1; min-width: 250px; height: 200px; position: relative; border-radius: 8px; overflow: hidden; background-image: url('https://images.unsplash.com/photo-1506744626753-1fa44df14c28?auto=format&fit=crop&w=600&q=80'); background-size: cover;">
    <!-- Scrim Layer -->
    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 60%; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);"></div>
    <div style="position: absolute; bottom: 20px; left: 20px; color: white; font-size: 24px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Good: With Scrim</div>
    <div style="position: absolute; bottom: 5px; left: 20px; color: white; font-size: 14px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">스크림 덕분에 가독성이 완벽하게 살아납니다.</div>
  </div>
</div>

### 2.2 틴트 (Tint) / 컬러 오버레이
- **개념**: 사진 전체에 브랜드 코어 컬러를 반투명하게 덮어버리는 기법.
- **실용**: 출처가 제각각인 여러 장의 사진을 썼을 때 발생하는 '톤이 붕 뜨는' 현상을 방지하고, 단숨에 **브랜드 아이덴티티**를 하나로 통일할 수 있습니다. (예: 스포티파이의 브랜드 캠페인)

---

## 3. 🤖 AI 시대의 사진 활용법 (Image-to-Image / ControlNet)

현대의 디자인 파이프라인에서 사진은 단순히 보여주기용(View)이 아니라 **'생성을 위한 뼈대(Structure)'**로 진화했습니다.

### 3.1 형태의 역추출 (ControlNet Extraction)
- **개념**: 자연물(나뭇잎, 조개껍데기)이나 거리에 있는 멋진 건축물 사진을 찍은 뒤, 이를 ComfyUI나 Stable Diffusion의 **Canny / Depth / Lineart ControlNet**에 밀어 넣습니다.
- **효과**: 사진의 사실적인 질감은 모두 증발하고, 오직 **'가장 완벽한 비율의 기하학적 외곽선(Wireframe)'**만 AI가 인식하게 됩니다.
- **활용**: 이 추출된 뼈대(Grid) 위에 '미니멀 로고', '플랫 아이콘' 등의 프롬프트를 씌워 돌리면, 현실 세계의 완벽한 비례를 가진 새로운 기하학적 에셋이 무한대로 생성됩니다.

---

## 4. 📸 관련 퍼블릭 도메인 마스터피스 (로컬 라이브러리)

사진 구도학과 시선의 흐름을 지배하는 저작권 만료(Public Domain) 전설의 명저들입니다.

### 🏛️ 헨리 랭킨 푸어의 《회화적 구도와 사진 비평 (Pictorial Composition)》 (1903)
- **가치**: 사진과 회화에서 무게 중심(Balance)을 어떻게 잡고, 관객의 시선을 어떻게 프레임 안에서 계속 순환하게(Circular Path) 만들 것인지 수학적으로 분석한 바이블입니다. 현대 카메라 UI와 트리밍(Crop) 툴의 사상적 근원입니다.
- 👉 [[Henry Rankin Poore - Pictorial Composition (1903).pdf|로컬 PDF 열기 (15MB)]]

### ⬛ 아서 웨슬리 다우의 《컴포지션 (Composition)》 (1899)
- **가치**: (레이아웃 파트에서 다루었듯) 사진 위에 글씨를 쓸 때 흑과 백의 매스(Mass)가 이루는 밸런스(Notan)를 파악하는 데 최고의 훈련 지침서입니다.
- 👉 [[Arthur Wesley Dow - Composition (1899).pdf|로컬 PDF 열기 (8MB)]]

---
**관련 문서**
- [[BASIS_01_laws]] (디자인의 법칙)
- [[LAYOUT_01_artboard_and_margin]] (판면과 여백)
- [[AI-Hybrid-Design-Strategy]] (AI 하이브리드 디자인 전략)