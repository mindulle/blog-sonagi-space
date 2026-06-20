---
title: Pod Priorities
tags: [concept, kubernetes]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/kubernetes/content/pod-priorities@_Gva1eGcYqpmZNPyV03lt.md
---

# Pod Priorities

Pod priorities in Kubernetes determine the order in which pods are scheduled on nodes when there are competing demands for resources. Each pod is assigned a numeric priority value, with higher values indicating higher priority. The scheduler maximizes the total priority of scheduled pods while also 
considering node suitability, taints and tolerations, and affinity and anti-affinity rules. Priorities can be set manually or automatically based on business logic or application requirements. Priorit
ies help ensure that critical workloads receive necessary resources and are scheduled first, while lower priority workloads are scheduled when resources become available.

Visit the following resources to learn more:

- [@official@Pod priority - Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#pod-priority)
- [@video@Kubernetes Pod Priority (Examples)](https://www.youtube.com/watch?v=sR_Zmvme3-0)

## 관련 로드맵
- [[Kubernetes|kubernetes]]
