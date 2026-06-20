---
title: "디자인 에셋 Git 관리 워크플로우 (Design Asset Git Workflow)"
date: 2026-05-19
tags: [git, design-ops, workflow, version-control, asset-management]
category: design
description: "디자이너와 개발자가 Git을 통해 디자인 자산을 효율적으로 공유하고 관리하는 방법"
---

# 🛠️ 디자인 에셋 Git 관리 워크플로우

디자인 에셋(`*.svg`, `*.png`, `*.ai`)은 바이너리 파일이 많아 코드처럼 완벽한 Diff를 확인하기 어렵지만, Git을 활용하면 **버전 히스토리 추적**과 **개발 환경과의 즉각적인 동기화**가 가능해집니다.

---

## 🏗️ 1. 에셋 저장소 구조 (Directory Structure)

`10_Sources/assets/branding` 경로를 기준으로 다음과 같은 구조를 권장합니다.

```text
branding/
├── Final/             # 확정된 최종 자산 (Main Branch와 동기화)
│   ├── Master/        # 통합 마스터 파일
│   ├── Standalone/    # 단독형 로고 및 심볼
│   └── Combination/   # 조합형 로고
├── Motifs/            # 그래픽 모티프 및 소스
└── Archive/           # 작업 이력 및 스케치 (LFS 권장)
```

---

## 🔄 2. 디자인-개발 동기화 프로세스

1.  **디자이너 (Local)**:
    *   Figma 또는 Illustrator에서 작업을 완료합니다.
    *   최종 에셋을 정해진 경로(`10_Sources/assets/branding/Final/...`)에 내보냅니다.
2.  **커밋 메시지 규칙**:
    *   `design: update logo symbol with new geometric correction`
    *   `asset: add sns profile icons for discord`
3.  **PR 및 리뷰**:
    *   에셋의 시각적 변경 사항은 PR 본문에 미리보기 이미지를 첨부하여 개발자가 즉시 확인할 수 있도록 합니다.
4.  **자동화 (Optional)**:
    *   Git Push 시 Cloudinary 등의 CDN으로 자동 업로드되도록 CI/CD를 구성합니다. (현재 소나기 프로젝트는 `pull.sh` 스크립트 활용)

---

## ⚠️ 3. Git LFS (Large File Storage) 활용

용량이 큰 원본 파일(`*.psd`, `*.ai`, `*.fig` 백업 등)은 Git 저장소의 크기를 급격히 키울 수 있습니다.
- **설정**: `.gitattributes` 파일에 바이너리 확장자 등록.
- **대상**: 5MB 이상의 대용량 그래픽 파일.

---

## 🔗 4. 디자인 시스템과의 연동

Git에 등록된 에셋은 디자인 시스템(`variables.css` 또는 `design-tokens.json`)에서 경로로 참조됩니다.
- 예: `--logo-url: url('/10_Sources/assets/branding/Final/Standalone/sonagi_symbol_final.svg');`

---
*Created by Antigravity CLI - Design Asset Git Workflow v1.0*
