---
title: Infrastructure Map
category: Computing
visibility: private
tags: [infrastructure, tailscale, server, gpu, networking, paperclip, mem0, central-brain, wsl]
last_modified: 2026-06-09
---

# LLM-Wiki Infrastructure & Environment (Definitive Map)

이 문서는 프로젝트가 구동되는 실제 서버 네트워크와 장치 정보를 기록합니다. 모든 노드는 `oracle_sonagi` SSH 키를 통해 접근 및 서비스 파악이 가능합니다.

## 1. 네트워크 및 연결
- **Tailscale Mesh VPN**: 모든 노드가 100.x.y.z 사설망으로 연결되어 상호 통신 가능.
- **Syncthing**: `llm-wiki` 지식 저장소를 주요 노드 간 실시간 동기화.
- **Monitoring**: `devops` 노드의 Prometheus(Port 9090)가 전 노드 메트릭 수집 중.

## 2. 주요 서버 노드 및 서비스 상세

### mindulle-gp66 (100.81.26.66)
- **역할**: **메인 연산/개발 워크스테이션 (Heavy Compute)**
- **OS**: Windows (WSL2 - Ubuntu)
- **모니터링 (WSL 특이사항)**: Node Exporter가 WSL 내부(172.20.208.56)에서 구동 중. 외부 수집을 위해 Windows 호스트에서 포트 포워딩 필요.
    - **Port Forwarding (Admin PowerShell)**:
      ```powershell
      netsh interface portproxy add v4tov4 listenport=9100 listenaddress=0.0.0.0 connectport=9100 connectaddress=172.20.208.56
      New-NetFirewallRule -DisplayName "Allow Node Exporter" -Direction Inbound -LocalPort 9100 -Protocol TCP -Action Allow
      ```
- **주요 서비스**: Ollama, Docker/Syncthing, Antigravity CLI/Scripts.

### devops (100.82.121.40)
- **역할**: **누리(Nuri/CTO)** 상주 노드 및 인프라 모니터링 허브
- **주요 서비스**: Prometheus, Grafana, Node Exporter.
- **설정 위치**: `/home/mindulle/monitoring-setup/prometheus.yml`

### iac-hub (100.71.163.46)
- **역할**: **Infrastructure as Code (IaC) 및 자동화 실행기**
- **주요 서비스**: Ansible Semaphore (Port 3000), Nginx.
- **자동화 관리**: 
    - 리포지토리: `sonagi-iac-v3` (GitHub 인증: `.gitconfig` 래퍼 방식 적용)
    - 주요 템플릿: Full Maintenance, Security Patch, Backup.

### llmops-instance (100.91.9.83)
- **역할**: **제니(Jenny/CD)** 상주 노드 및 중앙 지식 허브(Central Brain)
- **주요 서비스**:
    - **[[Paperclip/index|Paperclip]]**: AI 에이전트 오케스트레이션 시스템.
    - **Mem0 (Port 8888)**: 에이전트 장기 기억 레이어.
    - **Central VectorDB (Port 8432)**: 모든 에이전트의 공용 벡터 저장소 (`pgvector`).

### ubuntu-s-2vcpu-2gb-sgp1-01 (100.120.186.55)
- **역할**: **마루(Maru/Scholar) 상주 노드 및 메인 위키 서버**
- **주요 서비스**: Paperclip Gateway, Wiki Maintenance Routine, Syncthing.

### mindullemonitor (100.82.184.115)
- **역할**: **머니(Money/PM)** 상주 노드 및 서비스 모니터링/디자인
- **주요 서비스**: OpenDesign (design.sonagi.space).

### n8n-instance (100.113.113.72)
- **역할**: 워크플로우 자동화 (n8n, Nginx).

### p40-worker (100.69.255.15)
- **상태**: **비활성 (Power Off)** - 필요 시에만 가동.

## 4. 핵심 지식 매핑
- **중앙 브레인**: [[Mem0]], [[VectorDB]] (on llmops-instance)
- **오케스트레이션**: [[Paperclip/index|Paperclip]], [[Automation-Routine|Automation Routine & Schedule]]
- **데이터 저장**: [[3-Tier Architecture (LLM-Wiki)|3-Tier Architecture (LLM-Wiki)]]
