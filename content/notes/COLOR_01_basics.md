---
title: "배색의 기본 (Color Theory)"
category: Design
tags: [concept, color-theory, ui-ux, fundamentals]
source: "Graphic Design: The New Basics (Ellen Lupton), Color & Mood Codex"
---

# 배색의 기본 (Color Theory & Harmony)

색상은 디자인에서 가장 직관적으로 감정과 분위기를 전달하는 강력한 도구입니다. Ellen Lupton의 《Graphic Design: The New Basics》와 현업 실무의 지침을 바탕으로, 추상적인 색상을 수학적이고 시스템적으로 통제하는 방법을 다룹니다.

## 1. 색의 3속성 (HSB 시스템)
UI/UX 디자인에서는 인쇄물(CMYK)이 아닌 빛의 삼원색(RGB)을 다루며, 실무에서는 이를 가장 직관적으로 통제할 수 있는 **HSB(Hue, Saturation, Brightness)** 모델을 주로 사용합니다.

<div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0; background: #f8fafc; padding: 20px; border-radius: 8px;">
  <div><strong>Hue (색상)</strong>: 빨강에서 보라까지의 색 종류 (0~360도)
    <div style="height: 20px; border-radius: 4px; background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);"></div>
  </div>
  <div><strong>Saturation (채도)</strong>: 맑음(100%)과 탁함/무채색(0%)
    <div style="height: 20px; border-radius: 4px; background: linear-gradient(to right, #808080, #3b82f6);"></div>
  </div>
  <div><strong>Brightness (명도)</strong>: 밝음(100%)과 어두움(0%)
    <div style="height: 20px; border-radius: 4px; background: linear-gradient(to right, #000000, #3b82f6, #ffffff);"></div>
  </div>
</div>

- **색상 (Hue, H)**: 빨강, 파랑 등 색의 종류. 0~360도의 컬러 휠(Color Wheel)로 표현됩니다.
- **채도 (Saturation, S)**: 색의 맑고 탁한 정도. (100%에 가까울수록 원색, 0%에 가까울수록 무채색/회색). 실무에서 *"쨍하다"*, *"탁하다"*를 결정짓는 핵심 수치입니다.
- **명도 (Brightness/Value, B)**: 색의 밝고 어두운 정도. (100%는 흰색 빛, 0%는 검은색). 글자의 가독성(접근성)을 결정하는 가장 중요한 요소입니다.

## 2. 톤 (Tone)의 이해와 실무 활용
색상(Hue)보다 분위기(Mood)를 결정짓는 것은 명도와 채도가 결합된 **'톤(Tone)'**입니다.

### 톤온톤 (Tone on Tone)
- **개념**: **동일한 색상(Hue)** 내에서 명도와 채도만 다르게 조합하는 배색.
- **실무 효과**: *"차분하게, 실패 없이 세련되게"* 
- **예시**: 네이비 배경 + 스카이블루 버튼 + 연한 파스텔블루 텍스트

<div style="display: flex; gap: 0; margin-bottom: 20px; border-radius: 8px; overflow: hidden; height: 60px;">
  <div style="flex: 1; background: #eff6ff; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1e3a8a;">Light</div>
  <div style="flex: 1; background: #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1e3a8a;">Medium</div>
  <div style="flex: 1; background: #3b82f6; display: flex; align-items: center; justify-content: center; font-size: 12px; color: white;">Primary</div>
  <div style="flex: 1; background: #1e3a8a; display: flex; align-items: center; justify-content: center; font-size: 12px; color: white;">Dark</div>
</div>

### 톤인톤 (Tone in Tone)
- **개념**: 색상(Hue)은 다양하게 쓰되, **동일한 명도와 채도(톤)**를 맞추는 배색.
- **실무 효과**: *"다채롭고 조화롭게"*
- **예시**: 파스텔 핑크, 파스텔 블루, 파스텔 옐로우의 조합 (모두 채도가 낮고 명도가 높은 파스텔 톤으로 일치시킴)

<div style="display: flex; gap: 0; margin-bottom: 20px; border-radius: 8px; overflow: hidden; height: 60px;">
  <div style="flex: 1; background: #fecaca; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #7f1d1d;">Pastel Pink</div>
  <div style="flex: 1; background: #bfdbfe; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #1e3a8a;">Pastel Blue</div>
  <div style="flex: 1; background: #fef08a; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #713f12;">Pastel Yellow</div>
  <div style="flex: 1; background: #bbf7d0; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #14532d;">Pastel Green</div>
</div>

## 3. 실무 UI 배색의 황금 비율: 60-30-10 룰
공간 디자인과 UI 디자인에서 가장 안정적으로 시각적 밸런스를 맞추는 색상 분할 공식입니다.

<div style="display: flex; height: 30px; border-radius: 8px; overflow: hidden; margin: 20px 0;">
  <div style="width: 60%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #475569;">60% (배경)</div>
  <div style="width: 30%; background: #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 12px; color: white;">30% (보조)</div>
  <div style="width: 10%; background: #3b82f6; display: flex; align-items: center; justify-content: center; font-size: 12px; color: white;">10% (포인트)</div>
</div>

1. **배경색 (Dominant Color) - 60%**: 화면의 뼈대를 이루는 베이스 컬러. 주로 화이트, 라이트 그레이, 또는 아주 어두운 다크 톤이 쓰입니다.
2. **보조색 (Secondary Color) - 30%**: 배경색을 보조하며 컨텐츠를 구분해 주는 색상. 카드의 배경이나 서브 헤더 등에 사용됩니다.
3. **포인트색 (Accent Color) - 10%**: 시선을 강력하게 끌어당겨야 하는 CTA(Call To Action) 버튼이나 알림 뱃지 등에 사용되는 고채도 색상.

## 4. 실전 배색: 대비와 접근성 (Contrast & Accessibility)
디자인은 예술이 아니라 기능입니다. 색상은 아름다움 이전에 **'가독성'**을 보장해야 합니다.

- **WCAG 접근성 기준**: 글자색과 배경색의 명도 대비는 최소 **4.5 : 1**을 넘겨야 합니다. (큰 폰트는 3:1). 

<div style="display: flex; gap: 20px; margin: 20px 0;">
  <div style="flex: 1; background: #3b82f6; color: #60a5fa; padding: 20px; border-radius: 8px; text-align: center;">
    <strong>❌ 나쁜 명도 대비 (1.5:1)</strong><br>
    눈이 아프고 글씨가 배경에 묻힙니다.
  </div>
  <div style="flex: 1; background: #3b82f6; color: #ffffff; padding: 20px; border-radius: 8px; text-align: center;">
    <strong>✅ 좋은 명도 대비 (4.5:1 이상)</strong><br>
    글씨가 쨍하게 튀어나와 가독성이 확보됩니다.
  </div>
</div>

- **현업 은어 해석** (자세한 내용은 [[01_Color_and_Mood]] 참고):
  - *"색이 묻힌다"* 👉 명도 대비(Contrast Ratio)가 부족한 상태. 배경이나 텍스트 중 하나의 명도(B)를 확 올려주거나 낮춰야 함.
  - *"눈이 시리다"* 👉 채도(S)가 너무 높은 야광색을 넓게 썼거나, 보색(Complementary Color)끼리 명도가 비슷할 때 경계면에서 일어나는 착시(Vibrating Boundaries).

---
**관련 문서**
- [[COLOR_02_public_domain_masterpieces]] (저작권 만료 색채학 전설의 명저 도감)
- [[01_Color_and_Mood]] (디자이너 실무 컬러 은어 도감)
- [[Core-Color-Palette]] (소나기 프로젝트 코어 팔레트)