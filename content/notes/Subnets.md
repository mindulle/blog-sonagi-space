---
title: Subnets
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/subnets@Y64TE0U20kllmykjdfhHp.md
---

# Subnets

Subnets or subnetworks in Amazon VPC (Virtual Private Cloud) are divisions of a VPC's IP address range. You can launch Amazon Elastic Compute Cloud (Amazon EC2) instances into a selected subnet. When you create a subnet, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR bl
ock. Each subnet must be associated with a route table, which controls the traffic flow between the subnets. There are two types of subnets: public and private. A public subnet is one in which the ass
ociated route table directs the subnet to the Internet Gateway (IGW) of the VPC. A private subnet does not have a route to the IGW and hence has no direct route to the internet.

Visit the following resources to learn more:

- [@official@Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)


## 관련 로드맵
- [[AWS|aws]]
