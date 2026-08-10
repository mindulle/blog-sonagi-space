# Sonagi Observability Architecture

## 개요

Sonagi 시스템은 인프라 안정성을 보장하고 신속한 디버깅을 위해 글로벌 표준 수준의 3대 옵저버빌리티 기둥(Metrics, Logs, Traces)과 상태 감시(Synthetic Monitoring) 시스템을 완벽하게 분리하여 구축했습니다.

## 1. 아키텍처 개략도

핵심은 **관제탑(mindullemonitor)**과 **작업 엔진(llmops-instance/devops/n8n)**을 완벽히 분리한 것입니다.

- **`mindullemonitor` (관제탑 허브 - 100.82.184.115)**
  - AdGuard Home (로컬 DNS, \`\*.sonagi.space\` 라우팅)
  - Nginx Proxy Manager (로컬 리버스 프록시)
  - **Uptime Kuma** (\`status.sonagi.space\`)
  - **Grafana** (\`grafana.sonagi.space\`)
  - **Prometheus** (중앙 메트릭 수집기)
  - **Loki** (중앙 로그 수집기)
- **`devops` / `llmops-instance` / `n8n-instance` (작업 엔진)**
  - Paperclip, OpenClaw, Sonagi-draw, Spells-bot, n8n 등 실행
  - **Node Exporter**: 머신 메트릭을 Prometheus로 송신
  - **Promtail**: Docker 및 K3s 로그를 Loki로 송신
  - **Sentry SDK**: 앱 단의 에러 트레이싱 및 Session Replay를 Sentry SaaS로 송신

## 2. 모니터링 상세 구성

### A. 상태 감시 및 알림 (Synthetic Monitoring)

- **도구:** Uptime Kuma ➡️ Discord Webhook
- **방식:** 외부망(Cloudflare) 및 내부망(K3s ClusterIP/NodePort) 엔드포인트를 60초 간격으로 찌르며 Health Check를 수행.
- **모니터링 대상:**
  - 외부 서비스: \`chat\`, \`draw\`, \`n8n\`, \`api.github.com\`
  - 내부 서비스: Nginx Proxy Manager, AdGuard Home, Piston
  - 특수 서비스: MinIO (보안 규칙상 400 에러를 뱉는 루트 대신 \`/minio/health/live\` 엔드포인트 감시)

### B. 하드웨어 메트릭 (Metrics)

- **도구:** Node Exporter ➡️ Prometheus ➡️ Grafana
- **방식:** 전 서버(1GB 소형 노드부터 24GB 메인 코어까지)에 배포된 Node Exporter가 CPU, Memory, Disk I/O 데이터를 수집.

### C. 로그 중앙화 (Logs)

- **도구:** Promtail ➡️ Loki ➡️ Grafana
- **방식:**
  - K3s 및 Docker 컨테이너에서 뿜어내는 \`/var/lib/docker/containers/_\` 및 \`/var/log/containers/_\` 로그를 Promtail이 수집해 Loki로 중앙 전송.
  - Grafana의 \`Explore\` 탭에서 \`{job="docker"}\` 또는 \`{job="kubernetes-pods"}\` 로 전체 서버의 로그를 한 번에 검색 가능.

### D. 애플리케이션 에러 및 분산 추적 (Exceptions & Traces)

- **도구:** Sentry SaaS + Sentry SDK
- **방식:**
  - \`spells-bot\`, \`paperclip\`, \`sonagi-draw\`, \`openclaw\` 등 자체 개발 핵심 앱에 적용.
  - **쿼터 보호:** \`tracesSampleRate = 0.1\` 설정으로 불필요한 비용(성능 트랜잭션 한도) 누수 방지.
  - **보안 마스킹(PII):** \`beforeSend\` 훅을 통해 Discord Token, API Key 등의 민감 정보가 Sentry 서버로 유출되지 않도록 \`[FILTERED_TOKEN]\`으로 치환.
  - **Session Replay:** 프론트엔드(\`sonagi-draw\`)에서 에러 발생 시 유저의 화면 동작을 녹화하여 원인 분석을 용이하게 함.

## 3. 향후 발전 과제 (Next Steps)

- **Trace ID Injection:** Sentry 에러의 Trace ID를 로거(Logger)에 함께 기록하여, Sentry 에러 카드와 Grafana(Loki)의 전체 로그를 1:1로 매칭.
- **Semantic Monitoring:** 단순 HTTP 200 응답 체크를 넘어, LLM 에이전트가 실제로 올바른 답변을 내놓는지 n8n 크론잡을 통해 행동 기반 모니터링 구성.
