---
title: Pods
tags: [concept, kubernetes]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/kubernetes/content/pods@-d2PIXm0V_Iehe8cws8zK.md
---

# Pods

In Kubernetes, a pod is the smallest deployable unit that represents a single instance of a running process in a cluster. A pod can contain one or more containers that share the same network namespace and can access the same storage volumes. Pods are created and managed by Kubernetes, and they are s
cheduled to run on one of the nodes in the cluster. Pods provide a lightweight and flexible abstraction layer that enables Kubernetes to manage the deployment, scaling, and networking of containerized
 applications. Pods also facilitate the communication and data exchange between containers running in the same pod.

Visit the following resources to learn more:

- [@official@Pods Documentation](https://kubernetes.io/docs/concepts/workloads/pods/)
- [@article@The Kubernetes Way: Pods and Services](https://thenewstack.io/kubernetes-way-part-one/)
- [@article@5 Best Practices for Configuring Kubernetes Pods Running in Production](https://thenewstack.io/5-best-practices-for-configuring-kubernetes-pods-running-in-production/)
- [@video@What is a Pod in kubernetes ? Why do you need it ?](https://www.youtube.com/watch?v=k0fzMZgpp14)

## 관련 로드맵
- [[Kubernetes|kubernetes]]
