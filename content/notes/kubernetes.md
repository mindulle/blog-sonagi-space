---
title: Kubernetes
tags: [roadmap, kubernetes]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/kubernetes
---

# Kubernetes

## 요약
kubernetes에 관한 로드맵 지식입니다. 각 세부 개념은 개별 문서로 관리됩니다.

## 주요 개념 (Atomic Notes)
- [[Kubernetes|kubernetes]]
- [[introduction|Introduction]]
- [[Overview of Kubernetes|Overview of Kubernetes]]
- [[Why use Kubernetes|Why use Kubernetes]]
- [[Key Concepts and Terminologies|Key Concepts and Terminologies]]
- [[Kubernetes Alternatives|Kubernetes Alternatives]]
- [[Containers|Containers]]
- [[Setting up Kubernetes|Setting up Kubernetes]]
- [[Deploying your First Application|Deploying your First Application]]
- [[Choosing a Managed Provider|Choosing a Managed Provider]]
- [[Installing a Local Cluster|Installing a Local Cluster]]
- [[Running Applications|Running Applications]]
- [[Pods|Pods]]
- [[Replicasets|Replicasets]]
- [[Deployments|Deployments]]
- [[StatefulSets|StatefulSets]]
- [[Jobs|Jobs]]
- [[Services and Networking|Services and Networking]]
- [[External Access to Services|External Access to Services]]
- [[Load Balancing|Load Balancing]]
- [[Networking & Pod-to-Pod Communication|Networking & Pod-to-Pod Communication]]
- [[Configuration Management|Configuration Management]]
- [[Injecting Pod Config with ConfigMaps|Injecting Pod Config with ConfigMaps]]
- [[Using Secrets for Sensitive Data|Using Secrets for Sensitive Data]]
- [[Resource Management|Resource Management]]
- [[Setting Resource Requests and Limits|Setting Resource Requests and Limits]]
- [[Assigning Quotas to Namespaces|Assigning Quotas to Namespaces]]
- [[Monitoring & Optimizing Resource Usage|Monitoring & Optimizing Resource Usage]]
- [[Security|Security]]
- [[Role Based Access Control (RBAC)|Role Based Access Control (RBAC)]]
- [[Network Security|Network Security]]
- [[Container and Pod Security|Container and Pod Security]]
- [[Container and Pod Security|Container and Pod Security]]
- [[Monitoring and Logging|Monitoring and Logging]]
- [[Logs|Logs]]
- [[metrics|Metrics]]
- [[Traces|Traces]]
- [[Resource Health|Resource Health]]
- [[Observability Engines|Observability Engines]]
- [[Autoscaling|Autoscaling]]
- [[Horizontal Pod Autoscaler (HPA)|Horizontal Pod Autoscaler (HPA)]]
- [[Vertical Pod Autoscaler (VPA)|Vertical Pod Autoscaler (VPA)]]
- [[Cluster Autoscaling|Cluster Autoscaling]]
- [[Scheduling|Scheduling]]
- [[basics|Basics]]
- [[Taints and Tolerations|Taints and Tolerations]]
- [[Topology Spread Constraints|Topology Spread Constraints]]
- [[Pod Priorities|Pod Priorities]]
- [[Evictions|Evictions]]
- [[Storage and Volumes|Storage and Volumes]]
- [[CSI Drivers|CSI Drivers]]
- [[Stateful Applications|Stateful Applications]]
- [[Deployment Patterns|Deployment Patterns]]
- [[CI  CD Integration|CI  CD Integration]]
- [[GitOps|GitOps]]
- [[Helm Charts|Helm Charts]]
- [[Canary Deployments|Canary Deployments]]
- [[Rolling Updates  Rollbacks|Rolling Updates  Rollbacks]]
- [[Advanced Topics|Advanced Topics]]
- [[Creating Custom Controllers|Creating Custom Controllers]]
- [[Custom Schedulers and Extenders|Custom Schedulers and Extenders]]
- [[Custom Resource Definitions (CRDs)|Custom Resource Definitions (CRDs)]]
- [[Kubernetes Extensions and APIs|Kubernetes Extensions and APIs]]
- [[Should you manage your own Cluster|Should you manage your own Cluster]]
- [[Installing the Control Plane|Installing the Control Plane]]
- [[Adding and Managing Worker Nodes|Adding and Managing Worker Nodes]]
- [[Multi-Cluster Management|Multi-Cluster Management]]
- [[Cluster Operations]]
- [[Continue learning with following roadmaps]]
- [[devops|devops]]
- [[backend|backend]]
- [[Docker|docker]]
- Find the interactive version of this roadmap and more roadmaps at
- [[Blue-Green Deployments|Blue-Green Deployments]]

## 관련 로드맵
- [[AI Agents|AI Agents]]
- [[ai-engineer|ai-engineer]]
- [[Python|python]]
- [[JavaScript|javascript]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Kubernetes.md)

# Kubernetes

Kubernetes, often referred to as K8s, is an open-source platform designed to automate deploying, scaling, and operating application containers. It organizes containers into clusters to provide a flexible, powerful foundation for distributed systems. The platform was originally developed by Google, d
rawing on their long experience with managing containerized applications. It groups an application's containers into logical units for easy management and discovery. Kubernetes offers features like au
tomatic bin packing, horizontal scaling, automated rollouts and rollbacks, and storage orchestration, among many others. It supports a variety of underlying infrastructures, from physical servers to virtual machines and cloud-based deployments, allowing you to run your apps wherever and however you 
choose.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
