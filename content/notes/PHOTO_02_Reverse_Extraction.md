---
title: "사진 역추출 그리드 작도법 (Reverse Grid Extraction)"
category: Design
tags: [photography, grid, reverse-engineering, ai-generation, tools]
description: "현실의 사물/사진에서 완벽한 수학적 그리드를 역추출해 내는 파이프라인"
---

# 📸 사진 역추출 그리드 작도법 (Reverse Grid Extraction)

대표님의 아이디어("자연물이나 사진에서 역으로 그리드를 따오기")는 현재 하이엔드 제너러티브 디자인(Generative Design)에서 사용하는 가장 진보된 형태의 뼈대 수집 기법입니다.

우리가 아무리 수학적으로 완벽한 그리드(아이소메트릭, 만다라)를 그린다 해도, 실제 '나뭇잎의 잎맥', '나팔조개의 황금나선', '거미줄의 텐션'이 가진 압도적인 유기적 아름다움(Organic Beauty)을 100% 흉내 내긴 어렵습니다.

따라서, **현실의 사진을 스캔하여 거기서 벡터(SVG) 그리드를 역추출해 내는 파이프라인**을 위키의 정식 도구로 구축했습니다.

---

## 🛠️ 1. 파이썬 기반 추출 자동화 도구 (Python Tool)

위키 시스템(`00_System/scripts`) 내부에 사진을 넣으면 자동으로 벡터 그리드로 깎아내는 스크립트를 심어두었습니다.

*   **도구 위치**: `00_System/scripts/photo_to_grid.py`
*   **작동 원리**: 사진을 입력받으면 흑백 음영(Grayscale)으로 전환한 뒤, 외곽선 검출(Edge Detection) 알고리즘을 사용해 피사체의 뼈대만을 사이버틱한 SVG 도트 매트릭스로 뽑아냅니다.
*   **실행 명령어**:
    ```bash
    python photo_to_grid.py <원본사진.jpg> <출력할그리드.svg>
    ```

---

## 🤖 2. ComfyUI Canny ControlNet 기법

파이썬 스크립트를 거치지 않고, AI 렌더링 서버(`p40-worker`)에서 직접 사진을 뼈대로 삼는 방법입니다.

1. **레퍼런스 사진 준비**: 거북이 등껍질, 나뭇잎, 건축물의 뼈대 등 질감이 뚜렷한 사진을 구합니다.
2. **Canny Node 연결**: 사진을 ComfyUI의 `ControlNet (Canny)` 노드에 넣습니다. Canny 모델은 사진의 명도 차이를 추적하여 **모든 사물을 하얀색 선(Wireframe)으로 벗겨냅니다.**
3. **Threshold 조절**: 선이 너무 많으면 지저분해지므로, High Threshold 값을 올려 굵직한 핵심 뼈대 선만 남깁니다.
4. **스타일 덮어쓰기**: 추출된 자연물의 뼈대 위에 `modern minimalist vector logo` 프롬프트를 먹여 로고로 승화시킵니다.

---

## 👁️ 3. 역추출 시뮬레이션 (Visual Demo)

사진에서 그리드를 따오는 과정이 시각적으로 어떻게 이루어지는지 보여주는 시뮬레이션입니다. (자연의 나뭇잎 잎맥 ➔ 기하학 벡터 그리드 ➔ 최종 로고)

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px 0;">
  <!-- Step 1: Origin -->
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1; text-align: center;">
      <svg width="150" height="150" viewBox="0 0 300 300">
        <!-- Faking a real leaf photo shape -->
        <path d="M 150 40 Q 260 100 150 260 Q 40 100 150 40 Z" fill="#64748b"/>
        <path d="M 150 40 L 150 260" stroke="#94a3b8" stroke-width="4"/>
        <line x1="150" y1="100" x2="200" y2="70" stroke="#94a3b8" stroke-width="4"/>
        <line x1="150" y1="150" x2="100" y2="120" stroke="#94a3b8" stroke-width="4"/>
      </svg>
    </div>
    <div style="flex: 2;">
      <h3 style="margin:0 0 10px 0;">Step 1. 원본 사진 (Nature Image)</h3>
      <p style="font-size: 14px; color: #475569; margin:0;">복잡한 질감과 색상을 가진 자연물의 사진입니다.</p>
    </div>
  </div>

  <!-- Step 2: Edge Extraction -->
  <div style="background: #0f172a; padding: 20px; border-radius: 8px; border: 1px solid #334155; display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1; text-align: center;">
      <svg width="150" height="150" viewBox="0 0 300 300">
        <path d="M 150 40 Q 260 100 150 260 Q 40 100 150 40 Z" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M 150 40 L 150 260" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="150" y1="100" x2="200" y2="70" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="150" y1="150" x2="100" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
      </svg>
    </div>
    <div style="flex: 2;">
      <h3 style="margin:0 0 10px 0; color: #38bdf8;">Step 2. 뼈대 역추출 (Canny/Edge Extracted Grid)</h3>
      <p style="font-size: 14px; color: #94a3b8; margin:0;">파이썬 툴이나 Canny 알고리즘이 질감을 날려버리고 기하학적 궤적(Grid)만 형광색 선으로 추출해 냅니다.</p>
    </div>
  </div>

  <!-- Step 3: Final Logo -->
  <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1; text-align: center;">
      <svg width="150" height="150" viewBox="0 0 300 300">
        <g opacity="0.3">
          <path d="M 150 40 Q 260 100 150 260 Q 40 100 150 40 Z" fill="none" stroke="#94a3b8" stroke-width="2"/>
          <path d="M 150 40 L 150 260" stroke="#94a3b8" stroke-width="2"/>
        </g>
        <!-- The snapped logo -->
        <path d="M 150 40 Q 260 100 150 260 Z" fill="#0f172a"/>
        <path d="M 150 40 Q 40 100 150 260 Z" fill="none" stroke="#0f172a" stroke-width="15"/>
      </svg>
    </div>
    <div style="flex: 2;">
      <h3 style="margin:0 0 10px 0;">Step 3. 최종 디자인 (Perfect Snap)</h3>
      <p style="font-size: 14px; color: #475569; margin:0;">역추출된 투명한 뼈대 위에 우리의 <b>수학적 불리언(Boolean) 작도법</b>을 씌워 완벽한 모던 로고를 깎아냅니다.</p>
    </div>
  </div>
</div>

---
**관련 문서**
- [[PHOTO_01_basics]] (사진과 화상의 기본)
- [[AI-Hybrid-Design-Strategy]] (AI 활용 전략)