---
title: Internet Gateway
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/internet-gateway@Le8yOJzpzxH1xgd7XEU2B.md
---

# Internet Gateway

An **Internet Gateway** is a redundant, horizontally scalable component in AWS that performs bi-directional routing between a VPC and the Internet. It serves two purposes; routing outbound traffic from the VPC to the internet (NAT), and routing inbound traffic from the Internet to the VPC. It's auto
matically highly available and provides bandwidth and redundancy across all AWS Regions. It becomes associated with a VPC upon creation, and cannot be detached or attached to another VPC once created.
 Security to and from the Internet Gateway can be controlled using route tables and security groups or network ACLs.

Visit the following resources to learn more:

- [@article@Internet Gateway](https://www.cisco.com/c/en/us/products/routers/what-is-a-network-gateway.html)


## 관련 로드맵
- [[AWS|aws]]
