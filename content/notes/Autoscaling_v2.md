---
title: Autoscaling
tags: [concept, kubernetes]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/kubernetes/content/autoscaling@03mGA5AyL7mpF6y3EMW7A.md
---

# Autoscaling

Autoscaling in Kubernetes involves adjusting the resources allocated to a deployment or set of pods based on demand. It includes Horizontal Pod Autoscaling (HPA) and Vertical Pod Autoscaling (VPA), which increase or decrease replicas or adjust resource requests and limits, respectively. Autoscaling can be used with Cluster Autoscaling to efficiently allocate resources and ensure application responsiveness. It's useful for handling variable workloads or sudden spikes in traffic.

Visit the following resources to learn more:

- [@official@Autoscaling in Kubernetes](https://kubernetes.io/blog/2016/07/autoscaling-in-kubernetes/)
- [@video@Kubernetes cluster autoscaling for beginners](https://www.youtube.com/watch?v=jM36M39MA3I)

## 관련 로드맵
- [[Kubernetes|kubernetes]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Computing/Concepts/Auto-Scaling_v2.md)
# Auto-Scaling

AWS Auto Scaling is a service that automatically scales resources to meet the demands of your applications. It uses policies, health status, and schedules to determine when to add more instances, ensuring that your application always has the right amount of capacity. AWS Auto Scaling can scale resources across multiple services and manage the scaling process in real time. It optimizes for cost and performance, and with the help of Amazon CloudWatch, it adjusts capacity based on the demand patterns of your workloads.

Visit the following resources to learn more:

- [@official@AWS Autoscaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)


## 관련 로드맵
- [[AWS|aws]]