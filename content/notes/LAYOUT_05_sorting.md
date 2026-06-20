---
title: "정렬 (Alignment)"
category: Design
tags: [layout, alignment, ui-ux, fundamentals]
---

# 정렬 (Alignment)

정렬(Alignment)은 화면 위를 떠다니는 무수히 많은 정보들을 **투명한 보조선(Guideline)에 기대어 세우는 작업**입니다. 줄이 완벽하게 맞춰진 레이아웃을 보면 인간의 뇌는 본능적으로 "안정적이고 전문적이다"라고 느낍니다.

## 1. 텍스트 정렬의 3대 방식

<div style="display: flex; gap: 20px; margin: 20px 0;">
  <!-- 좌측 정렬 -->
  <div style="flex: 1; background: #f8fafc; padding: 20px; border-radius: 8px;">
    <strong>↙️ 좌측 정렬 (Left)</strong>
    <div style="border-left: 2px solid #ef4444; padding-left: 10px; margin-top: 10px;">
      <div style="width: 100%; height: 8px; background: #94a3b8; margin-bottom: 6px;"></div>
      <div style="width: 80%; height: 8px; background: #94a3b8; margin-bottom: 6px;"></div>
      <div style="width: 90%; height: 8px; background: #94a3b8; margin-bottom: 6px;"></div>
      <div style="width: 60%; height: 8px; background: #94a3b8;"></div>
    </div>
    <p style="font-size: 12px; color: #64748b; margin-top: 10px;">가장 읽기 편안하며 디지털 UI의 표준입니다. 시선의 시작점이 항상 같아 피로도가 적습니다.</p>
  </div>
  <!-- 중앙 정렬 -->
  <div style="flex: 1; background: #f8fafc; padding: 20px; border-radius: 8px;">
    <strong>↔️ 중앙 정렬 (Center)</strong>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 10px; position: relative;">
      <div style="position: absolute; width: 2px; height: 100%; background: #ef4444; z-index: 0;"></div>
      <div style="width: 100%; height: 8px; background: #94a3b8; margin-bottom: 6px; z-index: 1;"></div>
      <div style="width: 80%; height: 8px; background: #94a3b8; margin-bottom: 6px; z-index: 1;"></div>
      <div style="width: 90%; height: 8px; background: #94a3b8; margin-bottom: 6px; z-index: 1;"></div>
      <div style="width: 60%; height: 8px; background: #94a3b8; z-index: 1;"></div>
    </div>
    <p style="font-size: 12px; color: #64748b; margin-top: 10px;">시작점이 계속 바뀌어 긴 글에는 쥐약입니다. 명언, 인용구, 타이틀 등 3줄 이하의 짧은 텍스트에만 제한적으로 씁니다.</p>
  </div>
</div>

## 2. 옵티컬 정렬 (Optical Alignment / 시각적 정렬)

컴퓨터가 수학적으로 계산해 주는 중앙 정렬(Bounding Box Center)이, 인간의 눈에는 정중앙으로 보이지 않는 착시가 존재합니다. 대표적인 것이 **재생 버튼(Play Button)의 착시**입니다.

<div style="display: flex; gap: 40px; margin: 20px 0; padding: 30px; background: #f8fafc; border-radius: 8px;">
  <!-- 수학적 정렬 -->
  <div style="flex: 1; text-align: center;">
    <strong>❌ 기계적 정렬 (Mathematical)</strong><br><br>
    <div style="position: relative; width: 100px; height: 100px; border-radius: 50%; border: 2px solid #cbd5e1; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <div style="position: absolute; width: 1px; height: 100%; background: #ef4444;"></div>
      <!-- Triangle mathematically centered (bbox) -->
      <svg width="40" height="40" viewBox="0 0 40 40" style="position: relative;">
        <polygon points="0,0 40,20 0,40" fill="#94a3b8"/>
      </svg>
    </div>
    <p style="font-size:12px; color:#64748b; margin-top: 10px;">삼각형의 박스 중앙을 원의 중앙에 맞췄습니다. 하지만 삼각형의 우측 공간이 비어 보이고, 도형이 왼쪽으로 쏠려 보입니다.</p>
  </div>
  <!-- 시각적 정렬 -->
  <div style="flex: 1; text-align: center;">
    <strong>✅ 시각적 정렬 (Optical)</strong><br><br>
    <div style="position: relative; width: 100px; height: 100px; border-radius: 50%; border: 2px solid #3b82f6; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <div style="position: absolute; width: 1px; height: 100%; background: #3b82f6; opacity: 0.3;"></div>
      <!-- Triangle optically nudged to the right -->
      <svg width="40" height="40" viewBox="0 0 40 40" style="position: relative; margin-left: 6px;">
        <polygon points="0,0 40,20 0,40" fill="#3b82f6"/>
      </svg>
    </div>
    <p style="font-size:12px; color:#64748b; margin-top: 10px;">삼각형의 시각적 무게중심(질량)을 고려해 의도적으로 우측으로 살짝(Nudge) 밀어주면 비로소 눈에 완벽한 정중앙으로 보입니다.</p>
  </div>
</div>

## 3. 다른 크기의 요소를 맞추는 법

가장 흔한 실수는 텍스트(글씨)와 이미지(아이콘)를 정렬할 때 발생합니다.
- **아이콘과 텍스트**: 글자 상단이 아니라, 글자의 **기준선(Baseline)이나 수직 중앙(Vertical Center)**에 아이콘을 맞추어야 합니다.
- **표(Table)와 숫자**: 금액이나 통계를 나타내는 숫자는 무조건 **우측 정렬**해야 자릿수를 한눈에 비교할 수 있습니다.

---
**관련 문서**
- [[LAYOUT_04_grouping]] (그룹화와 게슈탈트)
- [[LAYOUT_02_grid_BASIS_]] (그리드 레이아웃)