---
title: Design Toolchain (Local AI Strategy)
category: Design
tags: [tools, ai, krita, comfyui, inkscape, workflow]
---

# 🛠️ Design Toolchain: Local AI Strategy

본 문서는 LLM-Wiki 프로젝트의 시각적 자산을 생성하고 관리하기 위한 로컬 AI 중심의 디자인 도구 체계와 워크플로우를 정의합니다. 상용 서비스(Adobe, Midjourney 등)에 의존하지 않고 데이터 주권을 유지하며 높은 품질의 디자인을 생산하는 것을 목표로 합니다.

## 1. 핵심 도구 및 역할 (Core Stack)

### 🎨 Krita (The Creative Hub)
*   **역할**: 아이디어 스케치, 실시간 AI 페인팅, 이미지 합성 및 후보정.
*   **핵심 기능**:
    *   **AI Diffusion**: 로컬 ComfyUI 백엔드와 연동하여 캔버스 위에서 즉각적인 생성 및 변형.
    *   **실시간 레이어 제어**: AI 생성물과 수동 드로잉의 정밀한 결합.
*   **대체 도구**: Adobe Photoshop (Generative Fill), Midjourney.

### ⚙️ ComfyUI (The AI Engine)
*   **역할**: 노드 기반의 강력한 생성형 AI 백엔드.
*   **인프라 최적화**:
    *   **GPU**: NVIDIA RTX 3070 (8GB VRAM).
    *   **Memory**: 시스템 16GB SWAP 설정을 통해 대형 모델(SDXL, Flux) 구동 안정성 확보.
*   **연동**: Krita AI Diffusion 연동 및 `00_System/scripts/comfy_manager.py`를 통한 배치 처리.

### 📐 Inkscape (The Precision Vector)
*   **역할**: 아이콘 벡터화(SVG), 로고 작도, 타이포그래피 정밀 보정.
*   **표준 규격**:
    *   `sonagi_grid_master_v2.svg` 가이드를 기반으로 한 24px / 48px 그리드 시스템 준수.
    *   AI 생성 비트맵 이미지를 벡터 노드로 변환하여 해상도 독립성 확보.
*   **대체 도구**: Adobe Illustrator.

### 🖼️ GIMP (The Utility & Retouch)
*   **역할**: 사진 리터칭, 객체 제거, 텍스처 합성 보조.
*   **확장성**: 오픈소스 AI 플러그인을 활용한 인페인팅/아웃페인팅 작업.

---

## 2. 표준 워크플로우 (Standard Workflow)

### Step 1: 개념 스케치 및 초안 (Krita)
1. 512px 또는 1024px 정방형 캔버스 생성.
2. 기본 구도와 색감을 브러시로 대략적으로 스케치.
3. **AI Diffusion** 패널에서 적절한 프롬프트와 ControlNet(Canny, Depth 등)을 설정하여 초안 생성.

### Step 2: 정교화 및 업스케일 (ComfyUI)
1. Krita에서 생성된 이미지를 ComfyUI 워크플로우로 전송.
2. Tile Upscale 또는 Ultimate SD Upscale 노드를 사용하여 디테일 강화.
3. 특정 스타일(예: Flat Vector, Minimalist Illustration) LoRA를 적용하여 프로젝트 브랜드 아이덴티티 주입.

### 🌟 Krita 디자인 일관성 유지 가이드 (Consistency Rules)
Krita + AI 워크플로우를 사용할 때 파편화를 막고 시스템 일관성을 유지하는 핵심 기법입니다.
1. **Palette Masking (색상 강제)**: Krita 팔레트 독(Dock)에 소나기 공식 디자인 토큰(Hex 코드)만 등록하고 캔버스에 올려둔 뒤, AI가 생성한 초안 위에 해당 색상을 스포이드로 찍어 단색으로 덮어씌웁니다 (Solid Fill).
2. **ControlNet 규격화**: 캐릭터나 아이콘을 생성할 때, 미리 만들어둔 '기본 뼈대 가이드(Stickman 또는 기하학 도형)' 레이어를 기반으로 **ControlNet (Canny / Lineart)**을 걸고 생성합니다. 이렇게 하면 모든 아이콘의 비례와 크기가 강제로 통일됩니다.
3. **프롬프트 네거티브(Negative) 고정**: 그라데이션이나 3D 느낌이 실수로 섞이지 않도록 Krita AI 플러그인의 네거티브 프롬프트 영역에 `3d, realistic, gradients, shadow, pixel art, texture`를 항상 고정값으로 설정해둡니다.

### Step 3: 벡터화 및 최종 규격화 (Inkscape)
1. 생성된 이미지를 Inkscape로 임포트.
2. `Trace Bitmap` 기능을 사용하여 벡터 패스로 변환.
3. **Sonagi Grid Master**에 맞춰 노드를 정리하고 색상을 시스템 컬러(`Core-Color-Palette.md`)로 치환.

---

## 3. 레퍼런스 관리 (Eagle Hybrid Workflow)

14만 개 이상의 방대한 시각 레퍼런스(`Design.library`)를 효율적으로 관리하고 아이데이션 단계에 매끄럽게 통합하기 위해 **로컬 앱의 편리함**과 **클라우드 API의 개방성**을 결합한 하이브리드 구조를 사용합니다.

### Step 1: 수집 및 태깅 (Eagle Desktop App)
1.  **DevOps 머신(Samba)**의 1TB 스토리지를 윈도우 로컬 PC에 **네트워크 드라이브(Z:)**로 연결합니다.
2.  Eagle 데스크톱 앱을 통해 로컬 하드처럼 빠르고 쾌적하게 핀터레스트, 비핸스 등의 이미지를 수집하고 태그를 관리합니다.

### Step 2: 초고속 인덱싱 및 갤러리 서빙 (FastAPI + SQLite)
1.  **자동 동기화 (Cron)**: 매시간 정각마다 DevOps 머신의 백그라운드 스크립트(`build_eagle_gallery.py`)가 14만 개의 폴더를 스캔하여 45MB 크기의 단일 SQLite DB로 압축합니다.
2.  **경량 갤러리 API**: FastAPI 기반의 초경량 웹 서버(`eagle_gallery_app.py`)가 무한 스크롤 및 지연 로딩(Lazy Loading) 방식을 통해 서버 부하 없이 레퍼런스 썸네일을 시각적으로 서빙합니다.

### Step 3: 기획 및 AI 워크플로우로의 주입 (Integration)
1.  **Excalidraw 기획**: 갤러리 웹(`http://[devops-ip]:34920`)에서 찾은 레퍼런스 이미지 URL을 복사하여 Excalidraw 캔버스에 직접 붙여넣어 시각적 기획을 진행합니다.
2.  **Krita/ComfyUI 연동**: 갤러리 API를 통해 도출된 핵심 레퍼런스(태그, 색상 등)를 기반으로 ComfyUI의 `IP-Adapter`나 Krita의 AI 프롬프트 입력값으로 사용하여 실시간 아이데이션을 실무 디자인으로 전환합니다.

---

## 4. 로컬 AI 디자인의 이점
*   **비용 절감**: 고가의 월간 구독료(Adobe CC, Midjourney) 없음.
*   **데이터 주권**: 모든 작업물이 로컬 환경에서 생성되어 외부 유출 차단.
*   **무한 커스텀**: 프로젝트 전용 LoRA 모델과 워크플로우를 직접 설계하여 독창적인 스타일 유지.

## 🔗 관련 문서
*   [[art-style-atlas|Art Style Atlas: 5대 핵심 스타일]]
*   [[Core-Color-Palette|공식 컬러 시스템]]
*   [[Inkscape-Technical-Specs|Inkscape 기술 명세]]
*   [[00_System/scripts/comfy_manager.py|ComfyUI 매니저 스크립트]]
