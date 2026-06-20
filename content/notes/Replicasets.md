---
title: Replicasets
tags: [concept, mongodb]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/mongodb/content/replicasets@QrHT-H12AV4-V-y_nzmNk.md
---

# Replica Sets

Replica Sets in MongoDB provide high availability and data redundancy through a group of mongod instances that maintain identical data copies. The primary node handles write operations while secondary nodes replicate data and can serve read operations. Automatic failover ensures continuous service i
f the primary becomes unavailable, with secondary nodes electing a new primary to maintain database availability.

Visit the following resources to learn more:

- [@official@Replication](https://www.mongodb.com/docs/manual/replication/)
- [@official@Replication in MongoDB](https://learn.mongodb.com/learn/course/replication-in-mongodb/lesson-5-read-and-write-concerns-with-mongodb-deployments/learn?client=customer&page=2)
- [@article@Replica Sets and Shards in MongoDB: Architecture and Benefits](https://dev-aditya.medium.com/replica-sets-and-shards-in-mongodb-architecture-and-benefits-a3c83f39e4f0)
- [@course@Cluster Reliability Skill Badge](https://learn.mongodb.com/courses/cluster-reliability)
- [@course@Data Resilience: Self-Managed Skill Badge](https://learn.mongodb.com/courses/data-resilience-self-managed)

## 관련 로드맵
- [[MongoDB|mongodb]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/ReplicaSets.md)

# ReplicaSets

A ReplicaSet is a controller that ensures a specified number of replicas (identical copies) of a pod are running in a cluster at all times. ReplicaSets help to ensure high availability and scalability by automatically scaling the number of pod replicas up or down in response to changes in demand or 
hardware failures. They are defined by a YAML file that specifies the desired number of replicas, the pod template to use, and other settings. They are responsible for monitoring the status of pods an
d creating or deleting replicas as necessary to meet the desired state.

Visit the following resources to learn more:

- [@official@ReplicaSet Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
- [@article@Strategies for Running Stateful Workloads in Kubernetes: Pet Sets](https://thenewstack.io/strategies-running-stateful-applications-kubernetes-pet-sets/)
- [@video@ReplicaSet in Kubernetes](https://www.youtube.com/watch?v=1WM-LsH6tKc)

## 관련 로드맵
- [[Kubernetes|kubernetes]]
