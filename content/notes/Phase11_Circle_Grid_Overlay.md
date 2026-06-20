---
title: "소나기: Phase 11 — Circle Grid Overlay (방법론 검증)"
category: Design
tags: [circle-grid, overlay, intersection, geometric, automation, llm, pipeline, verification]
---

# 📐 Phase 11: Circle Grid Overlay 파이프라인 검증

> **목표**: 유튜브 영상([Logo Design With Circle Grid](https://www.youtube.com/watch?v=ZY7rZCeVK48))에서 인간 디자이너가 하는 작업을 LLM + 알고리즘으로 재현할 수 있는가를 실제 코드로 검증한다.

---

## 배경: 왜 이 방법론인가?

Phase 10에서 인간 디자이너의 방식을 개념적으로 정리했다면, Phase 11은 그 파이프라인이 **실제로 코드로 동작하는지** 검증하는 단계다.

영상 속 디자이너의 실제 작업 순서:

1. **참고 사진을 캔버스에 깐다** (반투명 배경 레이어)
2. **사진의 굴곡에 맞춰 원(Circle)들을 배치한다** — 이게 핵심 판단
3. **원들의 교점(Intersection)을 기준으로 형태를 작도한다**
4. **Boolean(Union/Subtract)으로 최종 실루엣을 추출한다**

---

## 자동화 가능 여부 분석

| 단계 | 자동화 | 담당 |
|------|--------|------|
| 원 격자 생성 | ✅ 완전 자동 | 알고리즘 |
| 두 원의 교점 계산 | ✅ 완전 자동 | 알고리즘 (수학) |
| SVG/벡터 출력 | ✅ 완전 자동 | 알고리즘 |
| 참고 이미지 오버레이 | ✅ 완전 자동 | 알고리즘 |
| **원의 위치·크기 결정** | ❌ 판단 필요 | **LLM 또는 사람** |
| **어떤 교점을 연결할지** | ❌ 의도 필요 | **LLM 또는 사람** |
| **미적 최종 선택** | ❌ 감각 필요 | **사람** |

**결론**: 반자동(semi-automatic) 파이프라인이 현실적이다. LLM이 원 배치를 제안하고, 알고리즘이 교점을 계산하며, 사람이 최종 선택한다.

---

## 검증 결과

### Step 1+2: 참고 이미지 위에 원 격자 오버레이

원 4개(`C1~C4`)를 구름 형태를 가정해 배치한 결과:

<div style="background: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="500" fill="#f8fafc" />
  <!-- 이미지 placeholder (실제 실행 시 bird_ref.jpg가 들어감) -->
  <rect x="50" y="50" width="400" height="400" fill="#e2e8f0" opacity="0.4" rx="8" />
  <text x="250" y="260" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="monospace">[참고 이미지 — opacity 0.25]</text>
  <text x="250" y="278" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="monospace">bird_ref.jpg (검증용)</text>
  <!-- 원 격자 -->
  <circle cx="180" cy="220" r="100" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.8" />
  <circle cx="180" cy="220" r="3" fill="#3b82f6" opacity="0.6" />
  <text x="185" y="114" fill="#3b82f6" font-size="11" font-family="monospace">C1 r=100</text>
  <circle cx="300" cy="240" r="80" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity="0.8" />
  <circle cx="300" cy="240" r="3" fill="#0ea5e9" opacity="0.6" />
  <text x="305" y="154" fill="#0ea5e9" font-size="11" font-family="monospace">C2 r=80</text>
  <circle cx="370" cy="200" r="55" fill="none" stroke="#38bdf8" stroke-width="1.5" opacity="0.8" />
  <circle cx="370" cy="200" r="3" fill="#38bdf8" opacity="0.6" />
  <text x="375" y="139" fill="#38bdf8" font-size="11" font-family="monospace">C3 r=55</text>
  <circle cx="250" cy="150" r="60" fill="none" stroke="#7dd3fc" stroke-width="1.5" opacity="0.8" />
  <circle cx="250" cy="150" r="3" fill="#7dd3fc" opacity="0.6" />
  <text x="255" y="84" fill="#7dd3fc" font-size="11" font-family="monospace">C4 r=60</text>
  <text x="10" y="20" fill="#64748b" font-size="11" font-family="monospace">Step 1+2: 참고 이미지 + Circle Grid Overlay</text>
</svg>
<p style="font-size:12px; color:#64748b; margin-top:10px;">
C1(r=100), C2(r=80), C3(r=55), C4(r=60) — 구름 형태를 가정한 원 배치. <br>
실제 작업 시 이 원들의 위치·크기가 LLM 또는 사람의 핵심 판단 영역이다.
</p>
</div>

---

### Step 3: 교점(Intersection) 자동 계산

4개의 원에서 **총 8개의 교점**이 수학적으로 계산됐다. 이 교점들이 작도의 기준점이 된다.

<div style="background: #0f172a; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="500" fill="#0f172a" />
  <circle cx="180" cy="220" r="100" fill="none" stroke="#334155" stroke-width="1" />
  <circle cx="300" cy="240" r="80" fill="none" stroke="#334155" stroke-width="1" />
  <circle cx="370" cy="200" r="55" fill="none" stroke="#334155" stroke-width="1" />
  <circle cx="250" cy="150" r="60" fill="none" stroke="#334155" stroke-width="1" />
  <!-- 교점 연결선 (작도 가이드) -->
  <line x1="265.35" y1="167.89" x2="243.84" y2="296.97" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="265.35" y1="167.89" x2="197.21" y2="121.49" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="265.35" y1="167.89" x2="278.51" y2="202.79" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="265.35" y1="167.89" x2="327.64" y2="164.92" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="265.35" y1="167.89" x2="227.72" y2="205.71" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="265.35" y1="167.89" x2="309.07" y2="160.52" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="243.84" y1="296.97" x2="197.21" y2="121.49" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="243.84" y1="296.97" x2="278.51" y2="202.79" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="197.21" y1="121.49" x2="278.51" y2="202.79" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="197.21" y1="121.49" x2="227.72" y2="205.71" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="278.51" y1="202.79" x2="327.64" y2="164.92" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="278.51" y1="202.79" x2="227.72" y2="205.71" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="327.64" y1="164.92" x2="378.71" y2="254.31" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="327.64" y1="164.92" x2="309.07" y2="160.52" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <line x1="227.72" y1="205.71" x2="309.07" y2="160.52" stroke="#1e40af" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 3" />
  <!-- 교점 마커 -->
  <circle cx="265.35" cy="167.89" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="265.35" cy="167.89" r="2" fill="white" />
  <text x="272.35" y="163" fill="#7dd3fc" font-size="9" font-family="monospace">C1∩C2</text>
  <circle cx="243.84" cy="296.97" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="243.84" cy="296.97" r="2" fill="white" />
  <text x="250.84" y="293" fill="#7dd3fc" font-size="9" font-family="monospace">C1∩C2</text>
  <circle cx="197.21" cy="121.49" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="197.21" cy="121.49" r="2" fill="white" />
  <text x="204.21" y="117" fill="#7dd3fc" font-size="9" font-family="monospace">C1∩C4</text>
  <circle cx="278.51" cy="202.79" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="278.51" cy="202.79" r="2" fill="white" />
  <text x="285.51" y="198" fill="#7dd3fc" font-size="9" font-family="monospace">C1∩C4</text>
  <circle cx="327.64" cy="164.92" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="327.64" cy="164.92" r="2" fill="white" />
  <text x="334.64" y="160" fill="#7dd3fc" font-size="9" font-family="monospace">C2∩C3</text>
  <circle cx="378.71" cy="254.31" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="378.71" cy="254.31" r="2" fill="white" />
  <text x="385.71" y="250" fill="#7dd3fc" font-size="9" font-family="monospace">C2∩C3</text>
  <circle cx="227.72" cy="205.71" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="227.72" cy="205.71" r="2" fill="white" />
  <text x="210" y="201" fill="#7dd3fc" font-size="9" font-family="monospace">C2∩C4</text>
  <circle cx="309.07" cy="160.52" r="5" fill="#38bdf8" opacity="0.9" />
  <circle cx="309.07" cy="160.52" r="2" fill="white" />
  <text x="316.07" y="156" fill="#7dd3fc" font-size="9" font-family="monospace">C2∩C4</text>
  <text x="10" y="20" fill="#94a3b8" font-size="11" font-family="monospace">Step 3: 교점 8개 자동 계산 완료</text>
</svg>
<p style="font-size:12px; color:#64748b; margin-top:10px;">
파란 점 = 교점(작도 기준점). 파선 = 교점 간 잠재적 연결선.<br>
<strong>어떤 교점을 연결해서 형태를 만들지</strong>가 다음 단계의 핵심 판단이다.
</p>
</div>

**계산된 교점 좌표:**

| 교점 | x | y |
|------|---|---|
| C1∩C2 | 265.35 | 167.89 |
| C1∩C2 | 243.84 | 296.97 |
| C1∩C4 | 197.21 | 121.49 |
| C1∩C4 | 278.51 | 202.79 |
| C2∩C3 | 327.64 | 164.92 |
| C2∩C3 | 378.71 | 254.31 |
| C2∩C4 | 227.72 | 205.71 |
| C2∩C4 | 309.07 | 160.52 |

---

## 핵심 검증 소스

```python
# 두 원의 교점 계산 — 이게 파이프라인의 수학적 핵심
def circle_intersections(c1, c2):
    x1, y1, r1 = c1
    x2, y2, r2 = c2
    d = math.dist((x1, y1), (x2, y2))
    if d > r1 + r2 or d < abs(r1 - r2) or d == 0:
        return []
    a = (r1**2 - r2**2 + d**2) / (2 * d)
    h = math.sqrt(r1**2 - a**2)
    mx = x1 + a * (x2 - x1) / d
    my = y1 + a * (y2 - y1) / d
    px = h * (y2 - y1) / d
    py = h * (x2 - x1) / d
    return [(mx + px, my - py), (mx - px, my + py)]
```

전체 스크립트: `10_Sources/assets/generated/phase11/circle_grid_overlay.py`

---

## 검증 결론

**파이프라인은 동작한다.** 다음 단계로 넘어갈 준비가 됐다.

```
[자동] 이미지 오버레이 → 원 격자 렌더링 → 교점 계산 → SVG 출력
[판단] 원 배치 (LLM 제안 또는 사람 결정)
[판단] 교점 선택 → Boolean 작도 (LLM 또는 사람)
[선택] 최종 미적 판단 (사람)
```

---

## Next: Phase 12 — 소나기 로고 베리에이션 작도

검증된 파이프라인을 소나기 로고에 실제 적용한다.

- 소나기 참고 이미지(빗방울, 구름) 선정
- LLM이 원 배치를 제안하는 프롬프트 설계
- 교점 기반 Boolean 작도로 로고 베리에이션 생성
