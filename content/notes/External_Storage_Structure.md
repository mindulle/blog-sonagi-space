---
tags:
  - infrastructure
  - storage
  - architecture
date: '2026-07-25'
---

# External Storage (devops-instance /mnt/monitoring) Structure

본 문서는 사내 인프라의 디스크 용량 한계를 극복하기 위해 구성된 `devops-instance` (100.82.121.40)의 외장하드(`/mnt/monitoring`) 디렉토리 구조 및 오프로딩 파이프라인 명세서입니다.

## 1. Directory Structure

- `/mnt/monitoring` (1TB External Drive)
  - `/@GP66_D드라이브 백업/`
    - 기존 로컬 윈도우 환경에서 넘어온 레거시 백업본.
    - 14만 개의 이미지가 포함된 무거운 Eagle Library 등 포함.
    - _상태: 서비스 볼륨 의존성 제거 완료. 아카이브 용도로만 보존._
  - `/sonagi-eagle-gallery/`
    - `Design.library/`: 신규 빈 깡통 갤러리 볼륨. K3s(`eagle-gallery-web`)에 마운트되어 서비스 중.
  - `/llmops_backup/`
    - `logs_archive/`: `llmops-instance`에서 매일 새벽 4시 크론잡으로 넘어오는 압축 로그(`.gz`) 파일들이 쌓이는 곳.
  - `/(MinIO Bucket)/` (예: `sonagi-draw` 등)
    - K3s에 띄워진 MinIO(`minio-666c89f575-*`) 파드의 PVC.
    - Sonagi Draw 등에서 붙여넣은 이미지, 에셋들이 API를 통해 다이렉트로 저장되는 공간.

## 2. Offloading Pipeline (Cronjob)

메인 서버(`llmops-instance`)가 터지는 것을 막기 위해 아래 2가지 파이프라인이 매일 동작합니다.

1. **Garbage Collection (Delete)**
   - 매일 04:00에 Docker 빌더 캐시, 7일 이상 된 컨테이너/이미지 일괄 프루닝(`docker system prune`).
   - GitHub Actions Runner `_diag` 로그 (7일 초과) 삭제 (`devops-instance` 내부 크론잡).
2. **Log Backup (Move)**
   - 매일 04:00에 100MB가 넘는 로그 파일을 찾아 `gzip` 압축 후 `/mnt/monitoring/llmops_backup/logs_archive/` 로 SCP 전송.
   - 전송 성공 시 원본 로그는 Truncate(비우기) 처리.

## 3. MinIO (S3) 연동 구조

- Endpoint: `https://cdn.sonagi.space`
- 백엔드(`sync-server` 등)에서 AWS S3 SDK를 사용해 로컬 디스크를 거치지 않고 다이렉트로 외장하드(MinIO)로 에셋을 쏘는 구조 채택.
