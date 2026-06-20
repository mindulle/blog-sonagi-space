---
title: "로고 마스터 그리드 도감 (Master Grid Arsenal)"
category: Design
tags: [logo, grid, geometry, reverse-engineering, ai-generation, controlnet]
description: "ComfyUI 생성 제어를 위한 표준 기하학 및 브랜드 역설계 뼈대 총망라"
---

# 📐 로고 마스터 그리드 도감 (Master Grid Arsenal)

이 도감은 AI(ComfyUI)가 수학적 비례를 무시하고 형태를 뭉개는 것을 방지하기 위해, **ControlNet에 주입할 완벽한 기하학 뼈대(Wireframe)들을 총망라한 탄약고**입니다.

이곳에 정리된 뼈대 이미지들을 캡처하여 ControlNet (Lineart / Canny)에 입력하면, 무의식적으로 '아름답다'고 느껴지는 황금비율의 변이(Variation) 로고를 무한대로 양산할 수 있습니다.

도감은 두 가지 트랙으로 나뉩니다.
*   **Track A (표준 기하학 그리드)**: 범용적으로 쓰이는 수학적 절대 뼈대.
*   **Track B (역설계 커스텀 그리드)**: 세상을 지배한 전설적인 로고들의 형태를 불리언(Boolean) 교집합으로 역추출한 뼈대.

---

# 🛡️ Track A: 표준 기하학 그리드 (Standard Grids)

## 1. 🔵 유기적 동심원 그리드 (Fibonacci / Circular Grid)
가장 부드럽고 유기적인(Organic) 느낌을 주는 로고를 뽑아낼 때 사용합니다. 새, 구름, 잎사귀, 부드러운 영문 이니셜 등을 생성할 때 이 뼈대 안에서 교집합이 발생하며 완벽한 곡선 로고가 탄생합니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="150" r="120" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="90" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="210" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="90" cy="150" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="210" cy="150" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="150" r="60" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="108" cy="108" r="40" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="192" cy="108" r="40" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">추천 프롬프트 스타일: <code>minimalist logo, flowing curves, negative space, flat vector</code></p>
</div>

## 2. 🔺 아이소메트릭 그리드 (Isometric / Hexagonal Grid)
단단하고 구조적인 테크놀로지, 건축, 블록체인 기업 느낌의 로고를 뽑아낼 때 사용합니다. 정삼각형과 육각형이 겹쳐 3차원 투영 효과를 강제로 부여합니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,30 254,90 254,210 150,270 46,210 46,90" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="150,30 150,150 46,90" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="150,30 254,90 150,150" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="46,210 150,150 254,210" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <line x1="150" y1="150" x2="150" y2="270" stroke="#3b82f6" stroke-width="2"/>
  <line x1="98" y1="60" x2="202" y2="240" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="202" y1="60" x2="98" y2="240" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="46" y1="150" x2="254" y2="150" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">추천 프롬프트 스타일: <code>3D isometric logo, geometric, tech startup, sharp edges, clay render</code></p>
</div>

## 3. ⬛ 모듈러 매트릭스 그리드 (Modular / Golden Grid)
가장 정제되고 모던한 심볼이나 신뢰감 있는 금융/법률 로고를 뽑아낼 때 사용합니다. 스위스 타이포그래피 양식에 기반한 완벽한 8x8 바둑판 구조입니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <pattern id="grid" width="37.5" height="37.5" patternUnits="userSpaceOnUse">
    <path d="M 37.5 0 L 0 0 0 37.5" fill="none" stroke="#3b82f6" stroke-width="1"/>
  </pattern>
  <rect width="300" height="300" fill="url(#grid)" />
  <rect width="300" height="300" fill="none" stroke="#3b82f6" stroke-width="4" />
  <line x1="0" y1="0" x2="300" y2="300" stroke="#3b82f6" stroke-width="2"/>
  <line x1="300" y1="0" x2="0" y2="300" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="150" r="112.5" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <rect x="75" y="75" width="150" height="150" fill="none" stroke="#3b82f6" stroke-width="2" />
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">추천 프롬프트 스타일: <code>bold monogram, corporate symbol, strict geometry, high contrast</code></p>
</div>

## 4. 🌸 생명의 꽃 / 만다라 (Flower of Life Grid)
인류 역사상 가장 오래된 기하학적 패턴이자 제너러티브 AI가 폭발적인 결과를 내는 환상적인 뼈대입니다. 7개의 완벽하게 교차하는 원이 중심에 6개의 꽃잎을 만들어냅니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="150" r="50" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="100" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="193.3" cy="125" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="193.3" cy="175" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="200" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="106.7" cy="175" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="106.7" cy="125" r="50" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="100" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">추천 프롬프트 스타일: <code>intricate mandala, stained glass, sacred geometry, floral emblem</code></p>
</div>

## 5. 🌀 황금비율 원형 그리드 (Golden Ratio Circles)
자연계의 피보나치수열(1:1.618) 비례로 커지는 동심원들의 집합입니다. 이 뼈대를 통째로 넣고 컨트롤넷을 돌리면, 이 선들 중 일부를 취사선택하여 완벽한 황금비의 소라껍데기, 태풍, 은하수, 추상적인 나선 로고를 만들어냅니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Golden Ratio Proportioned Circles (Fibonacci approx: 13, 21, 34, 55, 89, 144) -->
  <circle cx="150" cy="150" r="144" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="150" cy="150" r="89" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="150" cy="150" r="55" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="34" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="21" fill="none" stroke="#f59e0b" stroke-width="1"/>
  <circle cx="150" cy="150" r="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
  
  <!-- Diagonal alignments -->
  <line x1="0" y1="150" x2="300" y2="150" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="150" y1="0" x2="150" y2="300" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="48" y1="48" x2="252" y2="252" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="252" y1="48" x2="48" y2="252" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">추천 프롬프트 스타일: <code>golden spiral, cosmic galaxy logo, organic minimal shape, fibonacci nature, nautilus shell</code></p>
</div>

---

# 👑 Track B: 마스터피스 역설계 (Reverse-Engineered Grids)

## 5. 🍎 과일/식물형 유기적 교집합 (The Apple Bite Blueprint)
두 개의 거대한 원이 몸통을 이루고, 측면에서 다른 원이 파고들어 형태를 깎아내며(Negative Space), 상단에 나뭇잎 형태의 렌즈가 얹혀있는 전설적인 역설계 뼈대입니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="160" x2="300" y2="160" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="150" y1="0" x2="150" y2="300" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="120" cy="160" r="75" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="180" cy="160" r="75" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="240" cy="140" r="45" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="2 4"/>
  <circle cx="140" cy="50" r="40" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="170" cy="80" r="40" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="150" cy="225" r="4" fill="#ef4444"/>
  <circle cx="150" cy="95" r="4" fill="#ef4444"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">과일, 열매, 하트, 방패 등 중앙이 오목한 대칭/비대칭 유기물 로고가 완벽한 비율로 쏟아집니다.</p>
</div>

## 6. 🐦 비행/동물형 동적 교집합 (The Bird Flight Blueprint)
크기가 각기 다른 피보나치 원 13개가 겹쳐져 새의 머리, 부리, 가슴, 날개를 이루는 구조입니다. 곡선의 흐름이 한 방향(우상단)으로 솟구치도록 극도의 동세(Dynamics)를 주도록 설계되었습니다.

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="250" x2="250" y2="50" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="210" cy="100" r="30" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="250" cy="100" r="20" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="240" cy="70" r="25" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="140" cy="160" r="80" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="80" cy="110" r="70" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="100" cy="220" r="90" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="50" cy="180" r="40" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="190" cy="122" r="4" fill="#3b82f6"/>
  <circle cx="95" cy="177" r="4" fill="#3b82f6"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">스포츠 브랜드, 동물 심볼, 비행/속도감이 필요한 스타트업 로고 생성에 최적화된 마스터피스입니다.</p>
</div>

## 7. 👁️ 완벽한 교차와 시선 (The Vesica Piscis / Eye Blueprint)
두 개의 동일한 원이 정확히 서로의 중심을 지나가도록 겹쳤을 때 생기는 아몬드(눈동자) 형태입니다. 역사상 가장 신성하게 여겨진 기하학입니다. (CBS, 마스터카드 로고 뼈대)

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="150" x2="300" y2="150" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <line x1="150" y1="0" x2="150" y2="300" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <circle cx="100" cy="150" r="100" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 4"/>
  <circle cx="200" cy="150" r="100" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 4"/>
  <path d="M 150 63.4 A 100 100 0 0 1 200 150 A 100 100 0 0 1 150 236.6 A 100 100 0 0 1 100 150 A 100 100 0 0 1 150 63.4" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <circle cx="150" cy="150" r="40" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <circle cx="150" cy="150" r="4" fill="#10b981"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">카메라 렌즈, 미디어, 극미니멀리즘 로고를 뽑아낼 때 무조건 성공하는 마법의 뼈대입니다.</p>
</div>

## 8. 🌅 방사형 쉘 기하학 (The Radiating Scallop Blueprint)
중심점에서 밖으로 뻗어 나가는 방사형 직선들과, 이를 감싸는 반원(Arch)으로 구성됩니다. 일출(Sunrise)이나 조개껍데기, 날개 짓을 연상시킵니다. (Shell 로고 뼈대)

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path d="M 30 180 A 120 120 0 0 1 270 180" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
  <line x1="30" y1="180" x2="270" y2="180" stroke="#8b5cf6" stroke-width="2.5"/>
  <line x1="150" y1="260" x2="30" y2="180" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="60" y2="110" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="110" y2="66" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="150" y2="50" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="190" y2="66" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="240" y2="110" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="150" y1="260" x2="270" y2="180" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="150" cy="260" r="6" fill="#8b5cf6"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">에너지, 확장, 성장, 자연을 모티브로 하는 브랜드에 폭발적인 베리에이션을 제공합니다.</p>
</div>

## 9. 💎 다이아몬드 프랙탈 구조 (The Penrose Matrix Blueprint)
세 개의 마름모(Rhombus)가 결합하여 거대한 정삼각형을 이루는 착시 구조입니다. (미쓰비시, 르노 로고 뼈대)

<div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="165" r="110" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2 4"/>
  <polygon points="150,55 200,141.6 150,199.3 100,141.6" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="100,141.6 150,199.3 100,257 50,199.3" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="200,141.6 250,199.3 200,257 150,199.3" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">보석, 큐브, 기계 부품, 테크 하드웨어를 다룰 때 완벽한 무기가 됩니다. 3D 재질 렌더링 프롬프트와 찰떡궁합입니다.</p>
</div>

---

## 🚀 파이프라인 가이드 (How to use with AI)

1. 위 SVG 렌더링 화면을 **스크린샷으로 캡처**하거나 `.png`로 저장합니다.
2. ComfyUI 또는 Stable Diffusion 웹UI의 **`ControlNet` (Lineart 또는 Canny 모델)** 에 뼈대 이미지로 입력합니다.
3. 강도(Control Weight)를 `0.75 ~ 0.9` 사이로 두어 전체 형태는 엄격히 유지하되, 내부 질감은 AI가 상상할 여지를 줍니다.
4. [[art-style-atlas]] 에 기록된 20가지 화풍 프롬프트(예: 3D Clay, Minimalist Vector, Watercolor 등)를 섞어가며 **배치 제너레이션(Batch Generation)**을 무한정 돌립니다.
5. 수확한 결과물 중 가장 아름다운 형태를 일러스트레이터로 가져와 벡터화(Tracing)하여 최종 로고로 사용합니다.