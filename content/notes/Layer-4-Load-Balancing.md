---
title: Layer 4 Load Balancing
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/layer-4-load-balancing@MpM9rT1-_LGD7YbnBjqOk.md
---

# Layer 4 Load Balancing

Layer 4 load balancers look at info at the transport layer to decide how to distribute requests. Generally, this involves the source, destination IP addresses, and ports in the header, but not the contents of the packet. Layer 4 load balancers forward network packets to and from the upstream server,
 performing Network Address Translation (NAT).

Visit the following resources to learn more:

- [@article@Layer 4 Load Balancing](https://www.f5.com/glossary/layer-4-load-balancing)

## 관련 로드맵
- [[System Design|System Design]]
