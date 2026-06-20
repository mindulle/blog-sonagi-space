---
title: "Legendary Grid Blueprints (Master Grid Arsenal)"
description: "전설적인 폰트와 브랜드 로고의 시각적 밸런스를 수학적 변수로 역설계하여 추출한 기하학 그리드 도감"
---

# 🏛️ Legendary Grid Blueprints (마스터 그리드 도감)

이 문서는 역사적으로 완벽한 시각적 밸런스를 검증받은 명작 폰트와 마스터피스 로고들의 **'숨겨진 뼈대(Grid & Proportions)'**를 수학적으로 역설계(Reverse Engineering)하여 저장한 데이터베이스입니다. 

소나기(Sonagi)의 OpenSCAD 파이프라인에서 레터링이나 로고를 제작할 때, 언제든 이 변수들을 호출하여 완벽한 황금비와 광학적 보정을 상속받을 수 있습니다.

---

## 🔠 1. Typography Grids (전설의 폰트 뼈대)

폰트의 뼈대는 단순히 선을 긋는 것이 아니라, 대문자 높이(`Cap Height`)와 소문자 높이(`X-height`), 그리고 글자 굵기(`Stem`)의 치밀한 비율 게임입니다. (기준치: Cap Height = 100 유닛)

### 🔴 A. Futura (기하학의 절대 군주)
1927년 폴 레너(Paul Renner)가 디자인한 폰트로, 완전한 원과 삼각형, 직선만으로 이루어진 기하학적 폰트의 시초입니다. 소나기의 'Wild'한 도형 조립 방식에 가장 적합한 베이스입니다.

*   **Grid DNA (수학적 특징):**
    *   `O`, `C`, `Q` 등은 타원이 아닌 **완벽한 정원(Perfect Circle)**.
    *   `A`, `V`, `N`의 꼭짓점은 뭉툭하지 않고 완벽하게 날카로운 삼각형의 정점을 가짐.
    *   어센더(b, d, h의 위쪽 뻗음)가 대문자보다 더 높게 솟아오름.
*   **OpenSCAD 변수 데이터:**
    ```openscad
    // Futura Grid Variables
    futura_cap_height = 100;
    futura_x_height = 54;    // 소문자가 대문자의 절반 수준으로 작아 기하학적 대비가 큼
    futura_ascender = 110;   // 대문자보다 10% 더 높음
    futura_descender = -30;
    futura_stem_width = 12;  // 극도로 일정한 선 두께
    futura_overshoot = 2;    // 둥근 글자가 시각적으로 작아보이지 않게 2% 더 크게 그림
    ```

### ⬛ B. Helvetica (중립성과 가독성의 왕)
1957년 스위스에서 탄생. 현대 UI/UX 디자인의 사실상 표준 뼈대. 기하학적이기보단 '인간의 눈에 가장 편안하게' 착시를 보정한 마스터피스입니다.

*   **Grid DNA (수학적 특징):**
    *   모든 글자의 끝(Terminal)이 완벽하게 **수평 또는 수직**으로 잘림. (사선으로 잘리지 않음)
    *   네거티브 스페이스(글자 안의 빈 공간)가 글자의 먹물 면적과 동일한 무게감을 가짐.
*   **OpenSCAD 변수 데이터:**
    ```openscad
    // Helvetica Grid Variables
    helv_cap_height = 100;
    helv_x_height = 72;      // 소문자가 매우 커서 작은 화면(UI)에서도 가독성이 압도적
    helv_stem_width = 16;
    helv_terminal_angle = [0, 90]; // 절단면은 오직 수평/수직
    ```

---

## 🍎 2. Masterpiece Logo Grids (브랜드 로고 뼈대)

글로벌 IT 기업들이 시각적 찌그러짐을 막기 위해 철저한 수식으로 깎아낸(Boolean) 마스터 로고들의 작도 원리입니다.

### 🌀 A. The Fibonacci Grid (황금비 원형 그리드)
애플, 트위터(구), 펩시 등 역사적인 로고들이 채택한 작도법. 프리핸드(Pen tool) 곡선을 완전히 배제하고, 피보나치 수열을 따르는 '원(Circle)들의 교집합'만으로 곡선을 만들어냅니다.

*   **Grid DNA (수학적 특징):**
    *   모든 곡률은 오직 1, 1, 2, 3, 5, 8, 13의 지름을 가진 원들의 조합으로만 이루어짐.
*   **OpenSCAD 활용 논리 (하트/사과 곡선 등):**
    ```openscad
    // Fibonacci Circle Arsenal
    fib_1 = 10;
    fib_2 = 20;
    fib_3 = 30;
    fib_5 = 50;
    fib_8 = 80;
    
    // 이 원들을 교차시키고 difference() 연산으로 깎아내면
    // 인간의 뇌가 무의식적으로 "아름답다"고 느끼는 황금비 곡선이 도출됨.
    ```

### 📐 B. The Bauhaus Grid (바우하우스 절대 구조)
모든 형태를 정사각형 캔버스 안에서 45도, 90도 선과 정원(Circle)만으로 쪼개버리는 1920년대 바우하우스의 극단적 기하학 뼈대.

*   **Grid DNA (수학적 특징):**
    *   디자인을 3x3 또는 4x4의 절대적인 정사각형 그리드에 가둠.
    *   대각선은 무조건 45도. 곡선은 무조건 1/4 원호(Arc).
*   **소나기(Sonagi) 적용 포인트:** 
    *   소나기의 '2px Wild Stroke' 철학과 가장 궁합이 잘 맞는 뼈대. 이 그리드 위에서 선을 그으면 로고와 아이콘이 극도로 기계적이고 단단해 보임.

---

> **🚀 아키텍트의 활용 팁 (How to use)**
> 피그마나 스케치에서 프리핸드로 스케치한 아이디어를 가져오십시오. 이 도감에 있는 `futura_x_height`나 `fib_8` 같은 변수들을 SCAD 엔진에 먹여 조립하면, 애매했던 스케치가 수백 년간 검증된 '마스터피스의 뼈대'를 덮어쓰고 완벽한 소나기 에셋으로 재탄생합니다.
