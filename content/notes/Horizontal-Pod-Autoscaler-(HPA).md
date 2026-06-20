---
title: Horizontal Pod Autoscaler (HPA)
tags: [concept, kubernetes]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/kubernetes/content/horizontal-pod-autoscaler-hpa@044IUUCgZP4oQ9UxUG2iy.md
---

# Horizontal Pod Autoscaler

It is a feature in Kubernetes that automatically scales the number of replicas of a pod based on the current demand for the workload it is running. The HPA controller monitors the CPU utilization or other metrics of the pod and adjusts the number of replicas of the pod to meet the specified target. 
This helps to ensure that the workload can handle increases in traffic and demand without overloading the resources of the cluster.

Visit the following resources to learn more:

- [@official@Horizontal Pod Autoscaling - Documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

## 관련 로드맵
- [[Kubernetes|kubernetes]]
