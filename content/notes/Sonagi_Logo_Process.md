---
title: "소나기 로고 작도 프로세스 (Iterative Design Process)"
category: Design
tags: [logo, project, sonagi, geometric, boolean, process]
---

# 🌧️ 소나기(Sonagi) 로고 작도: Human-like Process

AI의 확률형 생성(가챠)에 의존하는 것을 멈추고, 인간 디자이너가 실제로 펜과 마우스를 쥐고 기하학을 다루는 **'단계별 불리언(Boolean) 조립 과정'**을 그대로 시뮬레이션합니다. 

소나기의 브랜드 철학인 **"Wild(역동적인 폭우) & Thin(우아하고 얇은 구름)"**을 수학적 도형의 조합으로 천천히 완성해 나갑니다.

---

## [Concept A] 구름과 사선 (The Pierced Cloud)

### Step 1. 기하학적 원시 형태 (Primitives)
모든 마스터피스 로고는 원(Circle)과 선(Line)에서 출발합니다. '우아한 구름(Thin)'을 뜻하는 두 개의 황금비 원형과, '거친 비(Wild)'를 상징하는 예리한 45도 사선을 캔버스에 배치합니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="150" x2="300" y2="150" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <circle cx="120" cy="110" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="190" cy="130" r="40" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <line x1="220" y1="20" x2="80" y2="180" stroke="#ef4444" stroke-width="2"/>
  <line x1="250" y1="50" x2="110" y2="210" stroke="#ef4444" stroke-width="2"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">단순한 도형의 나열: 60px과 40px 반경의 원(1:1.5 비례), 그리고 45도로 떨어지는 평행선 두 개.</p>
</div>

### Step 2. 불리언 결합과 여집합 (Boolean Operations)
도형들을 합치고(Union) 빼는(Subtract) 과정입니다. 인간 디자이너가 일러스트레이터의 '패스파인더(Pathfinder)' 도구를 사용하는 것과 완벽히 동일한 원리입니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="rainCutout">
      <rect width="300" height="200" fill="white" />
      <polygon points="220,20 250,50 110,210 80,180" fill="black" />
    </mask>
  </defs>
  <g mask="url(#rainCutout)">
    <circle cx="120" cy="110" r="60" fill="#bfdbfe" />
    <circle cx="190" cy="130" r="40" fill="#bfdbfe" />
    <rect x="60" y="110" width="170" height="60" fill="#bfdbfe" />
  </g>
  <polygon points="220,20 250,50 110,210 80,180" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">두 원을 합쳐서 구름의 몸통을 만들고(Union), 사선의 영역만큼 구름을 도려내어(Subtract) 번개/소나기가 파고든 빈 공간(Negative Space)을 만듭니다.</p>
</div>

### Step 3. 곡률 정제 및 최종 실루엣 (Refinement)
모서리를 다듬고, 불필요한 부분을 잘라내어 시각적 안정감을 부여합니다. 이게 바로 기계가 단번에 뱉어낼 수 없는 **"인간의 의도가 담긴 실루엣"**입니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="rainCutoutFinal">
      <rect width="300" height="200" fill="white" />
      <polygon points="220,20 250,50 110,210 80,180" fill="black" />
    </mask>
  </defs>
  <g mask="url(#rainCutoutFinal)">
    <path d="M 60 150 A 60 60 0 0 1 171 78.5 A 40 40 0 0 1 230 150 Z" fill="#0f172a" />
  </g>
  <circle cx="165" cy="165" r="8" fill="#3b82f6" />
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">완성된 Concept A: 부드러운 유기적 형태(Thin)를 과감한 45도 사선이 날카롭게 가로지르는(Wild) 모던 미니멀리즘 심볼.</p>
</div>

---

## [Concept B] 분열된 물방울 (The Severed Drop)

대표님과 호흡을 맞추며 떠오른 두 번째 방향성입니다. "소나기(빗방울)"라는 가장 직관적인 아이콘을 가져오되, 거친(Wild) 칼날로 반을 갈라버리는 극단적인 대비를 줍니다.

### Step 1. 기하학적 원시 형태 (Primitives)
<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <line x1="150" y1="0" x2="150" y2="200" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <!-- Raindrop Base (Circle + Triangle) -->
  <circle cx="150" cy="130" r="50" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="100,130 200,130 150,30" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <!-- Slash Line -->
  <line x1="80" y1="180" x2="220" y2="40" stroke="#ef4444" stroke-width="20" opacity="0.5"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">완벽한 원(Circle)과 정삼각형(Triangle)을 겹쳐 정직한 물방울 형태를 만들고, 그 한가운데를 관통하는 두꺼운 사선을 배치합니다.</p>
</div>

### Step 2. 불리언 결합과 여집합 (Boolean Operations)
<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Slash Mask -->
    <mask id="slashCutout">
      <rect width="300" height="200" fill="white" />
      <line x1="80" y1="180" x2="220" y2="40" stroke="black" stroke-width="15" />
    </mask>
  </defs>
  <!-- Combined Raindrop with Mask -->
  <g mask="url(#slashCutout)">
    <circle cx="150" cy="130" r="50" fill="#bfdbfe" />
    <polygon points="104,115 196,115 150,30" fill="#bfdbfe" />
  </g>
  <line x1="80" y1="180" x2="220" y2="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">원과 삼각형을 합친 뒤(Union), 두꺼운 사선의 형태만큼 중앙을 아예 날려버립니다(Subtract). 물방울이 날카롭게 두 동강 났습니다.</p>
</div>

### Step 3. 곡률 정제 및 최종 실루엣 (Refinement)
<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="slashCutoutFinal">
      <rect width="300" height="200" fill="white" />
      <!-- Sharp dynamic slash -->
      <polygon points="80,180 220,40 220,55 80,195" fill="black" />
    </mask>
  </defs>
  <!-- Offset the top part slightly to add tension -->
  <g mask="url(#slashCutoutFinal)">
    <!-- Top fragment (shifted left) -->
    <path d="M 150 20 Q 180 80 196 115 L 104 115 Q 120 80 150 20 Z" fill="#0f172a" transform="translate(-5, -5)"/>
    <!-- Bottom fragment (shifted right) -->
    <path d="M 100 130 A 50 50 0 0 0 200 130 Z" fill="#3b82f6" transform="translate(5, 5)"/>
  </g>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">완성된 Concept B: 절단된 두 조각의 위치를 살짝 어긋나게(Offset) 배치하여, 엄청난 속도로 베이는 듯한 긴장감을 부여했습니다.</p>
</div>

---

## [Concept C] 모듈러 그리드 기반 작도 (Grid-Driven 'S')

우리가 모아둔 마스터 그리드 도감(`LOGO_00_Master_Grid_Arsenal`) 중 **'모듈러 매트릭스(바둑판)'**를 백그라운드에 깔고, 철저하게 그리드의 간격과 교차점에 스냅(Snap)하여 소나기의 이니셜 'S'를 조각해 내는 방식입니다. 

### Step 1. 그리드 종속 기하학 (Grid Snapping)
가로세로 30px 단위의 모듈러 그리드 위에, 정확히 4칸(120px)의 지름을 가진 원 두 개를 위아래로 배치하여 완벽한 수학적 '8'자를 만듭니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" stroke-width="1"/>
    </pattern>
  </defs>
  <!-- Background Grid -->
  <rect width="300" height="240" fill="url(#grid30)" />
  
  <!-- Grid-snapped Circles -->
  <circle cx="150" cy="90" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="150" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  
  <circle cx="150" cy="90" r="30" fill="none" stroke="#ef4444" stroke-width="2"/>
  <circle cx="150" cy="150" r="30" fill="none" stroke="#ef4444" stroke-width="2"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">파란색 큰 원(R=60)과 붉은색 작은 원(r=30) 사이의 공간이, 정확히 그리드 1칸(30px)의 두께를 가진 로고의 뼈대가 됩니다.</p>
</div>

### Step 2. 그리드 절단 (Boolean Cutouts)
그리드 선을 톱날처럼 이용하여, 위쪽 원의 우측을 자르고 아랫쪽 원의 좌측을 잘라내어 S자의 통로를 엽니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30_2" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" stroke-width="1"/>
    </pattern>
    <mask id="sMask">
      <rect width="300" height="240" fill="white" />
      <!-- Cut top right -->
      <rect x="150" y="30" width="60" height="60" fill="black" />
      <!-- Cut bottom left -->
      <rect x="90" y="150" width="60" height="60" fill="black" />
    </mask>
  </defs>
  <!-- Background Grid -->
  <rect width="300" height="240" fill="url(#grid30_2)" />
  
  <!-- Thick Rings cut by Mask -->
  <g mask="url(#sMask)">
    <circle cx="150" cy="90" r="45" fill="none" stroke="#bfdbfe" stroke-width="30"/>
    <circle cx="150" cy="150" r="45" fill="none" stroke="#bfdbfe" stroke-width="30"/>
  </g>
  
  <!-- Show cutout areas in red lines -->
  <rect x="150" y="30" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
  <rect x="90" y="150" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">그리드 박스(붉은 점선)를 이용해 덩어리를 잘라냅니다(Subtract). 수학적으로 한 치의 오차도 없는 30px 두께의 통로가 만들어집니다.</p>
</div>

### Step 3. 최종 심볼 (The Masterpiece)
그리드 위에 안착된 최종결과물입니다. 1픽셀의 오차도 허용하지 않는 현대적이고 견고한 타이포그래피 심볼(S)이 탄생했습니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30_3" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    </pattern>
    <mask id="sMaskFinal">
      <rect width="300" height="240" fill="white" />
      <rect x="150" y="30" width="60" height="60" fill="black" />
      <rect x="90" y="150" width="60" height="60" fill="black" />
    </mask>
  </defs>
  <!-- Background Grid (Faint) -->
  <rect width="300" height="240" fill="url(#grid30_3)" />
  
  <!-- Final S Shape -->
  <g mask="url(#sMaskFinal)">
    <circle cx="150" cy="90" r="45" fill="none" stroke="#0f172a" stroke-width="30"/>
    <circle cx="150" cy="150" r="45" fill="none" stroke="#0f172a" stroke-width="30"/>
  </g>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">그리드의 규칙을 완벽하게 따르기 때문에, 이 로고를 명함, 앱 아이콘, 간판 어디에 배치해도 절대 비율이 깨지지 않는 압도적인 안정감을 줍니다.</p>
</div>

---

## [Concept C] 모듈러 그리드 기반 작도 (Grid-Driven 'S')

우리가 모아둔 마스터 그리드 도감(`LOGO_00_Master_Grid_Arsenal`) 중 **'모듈러 매트릭스(바둑판)'**를 백그라운드에 깔고, 철저하게 그리드의 간격과 교차점에 스냅(Snap)하여 소나기의 이니셜 'S'를 조각해 내는 방식입니다. 

### Step 1. 그리드 종속 기하학 (Grid Snapping)
가로세로 30px 단위의 모듈러 그리드 위에, 정확히 4칸(120px)의 지름을 가진 원 두 개를 위아래로 배치하여 완벽한 수학적 '8'자를 만듭니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" stroke-width="1"/>
    </pattern>
  </defs>
  <!-- Background Grid -->
  <rect width="300" height="240" fill="url(#grid30)" />
  
  <!-- Grid-snapped Circles -->
  <circle cx="150" cy="90" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="150" cy="150" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  
  <circle cx="150" cy="90" r="30" fill="none" stroke="#ef4444" stroke-width="2"/>
  <circle cx="150" cy="150" r="30" fill="none" stroke="#ef4444" stroke-width="2"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">파란색 큰 원(R=60)과 붉은색 작은 원(r=30) 사이의 공간이, 정확히 그리드 1칸(30px)의 두께를 가진 로고의 뼈대가 됩니다.</p>
</div>

### Step 2. 그리드 절단 (Boolean Cutouts)
그리드 선을 톱날처럼 이용하여, 위쪽 원의 우측을 자르고 아랫쪽 원의 좌측을 잘라내어 S자의 통로를 엽니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30_2" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" stroke-width="1"/>
    </pattern>
    <mask id="sMask">
      <rect width="300" height="240" fill="white" />
      <!-- Cut top right -->
      <rect x="150" y="30" width="60" height="60" fill="black" />
      <!-- Cut bottom left -->
      <rect x="90" y="150" width="60" height="60" fill="black" />
    </mask>
  </defs>
  <!-- Background Grid -->
  <rect width="300" height="240" fill="url(#grid30_2)" />
  
  <!-- Thick Rings cut by Mask -->
  <g mask="url(#sMask)">
    <circle cx="150" cy="90" r="45" fill="none" stroke="#bfdbfe" stroke-width="30"/>
    <circle cx="150" cy="150" r="45" fill="none" stroke="#bfdbfe" stroke-width="30"/>
  </g>
  
  <!-- Show cutout areas in red lines -->
  <rect x="150" y="30" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
  <rect x="90" y="150" width="60" height="60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">그리드 박스(붉은 점선)를 이용해 덩어리를 잘라냅니다(Subtract). 수학적으로 한 치의 오차도 없는 30px 두께의 통로가 만들어집니다.</p>
</div>

### Step 3. 최종 심볼 (The Masterpiece)
그리드 위에 안착된 최종결과물입니다. 1픽셀의 오차도 허용하지 않는 현대적이고 견고한 타이포그래피 심볼(S)이 탄생했습니다.

<div style="background-color: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
<svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid30_3" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    </pattern>
    <mask id="sMaskFinal">
      <rect width="300" height="240" fill="white" />
      <rect x="150" y="30" width="60" height="60" fill="black" />
      <rect x="90" y="150" width="60" height="60" fill="black" />
    </mask>
  </defs>
  <!-- Background Grid (Faint) -->
  <rect width="300" height="240" fill="url(#grid30_3)" />
  
  <!-- Final S Shape -->
  <g mask="url(#sMaskFinal)">
    <circle cx="150" cy="90" r="45" fill="none" stroke="#0f172a" stroke-width="30"/>
    <circle cx="150" cy="150" r="45" fill="none" stroke="#0f172a" stroke-width="30"/>
  </g>
</svg>
<p style="font-size:12px; color:#64748b; margin-top: 15px;">그리드의 규칙을 완벽하게 따르기 때문에, 이 로고를 명함, 앱 아이콘, 간판 어디에 배치해도 절대 비율이 깨지지 않는 압도적인 안정감을 줍니다.</p>
</div>

---

### 🛠️ Next Step (조율 및 방향성 결정)

대표님, 이제 가챠 머신(생성형 AI)을 돌릴 때의 답답함이 완벽히 사라지셨을 겁니다. 
코드를 통해 인간 디자이너의 작도 과정(Ideation -> Shape -> Boolean -> Refine)을 투명하게 통제할 수 있게 되었으니까요.

현재 2가지 방향성이 도출되었습니다.
1. **[Concept A] 구름과 사선 (The Pierced Cloud)**: 수평적이고 안정적인 구름을 파고드는 사선.
2. **[Concept B] 분열된 물방울 (The Severed Drop)**: 수직적인 물방울이 날카롭게 두 동강 나는 역동적인 형태.

어떤 방향성이 소나기의 철학에 더 가깝다고 느껴지시나요? 하나를 골라주시면, 이 뼈대를 가지고 모서리 둥글기(Border Radius), 사선의 각도, 색상을 미세하게 조각(Sculpting)해 보겠습니다!