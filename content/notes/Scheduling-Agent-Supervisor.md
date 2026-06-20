---
title: Scheduling Agent Supervisor
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/scheduling-agent-supervisor@uR1fU6pm7zTtdBcNgSRi4.md
---

# Scheduling Agent Supervisor

Coordinate a set of distributed actions as a single operation. If any of the actions fail, try to handle the failures transparently, or else undo the work that was performed, so the entire operation succeeds or fails as a whole. This can add resiliency to a distributed system, by enabling it to reco
ver and retry actions that fail due to transient exceptions, long-lasting faults, and process failures.

Visit the following resources to learn more:

- [@article@Scheduler Agent Supervisor pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor)

## 관련 로드맵
- [[System Design|System Design]]
