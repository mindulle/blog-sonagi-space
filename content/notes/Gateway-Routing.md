---
title: Gateway Routing
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/gateway-routing@LXH_mDlILqcyIKtMYTWqy.md
---

# Gateway Routing

Route requests to multiple services or multiple service instances using a single endpoint. The pattern is useful when you want to:

*   Expose multiple services on a single endpoint and route to the appropriate service based on the request
*   Expose multiple instances of the same service on a single endpoint for load balancing or availability purposes
*   Expose differing versions of the same service on a single endpoint and route traffic across the different versions

Visit the following resources to learn more:

- [@article@Gateway Routing pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-routing)

## 관련 로드맵
- [[System Design|System Design]]
