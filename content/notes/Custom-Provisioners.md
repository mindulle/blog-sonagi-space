---
title: Custom Provisioners
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/custom-provisioners@HEr-BBxE3jRKTqRnguds1.md
---

# Custom Provisioners

Terraform custom provisioners allow developers to extend Terraform's provisioning capabilities beyond the built-in options. These are created using Go programming language and the Terraform plugin SDK. Custom provisioners can perform specialized tasks tailored to specific infrastructure needs or org
anizational requirements. They follow the same lifecycle as built-in provisioners, executing during resource creation or destruction.

Developing custom provisioners requires a deep understanding of Terraform's architecture and Go programming. They're useful for integrating Terraform with proprietary systems or implementing complex, organization-specific provisioning logic. However, custom provisioners should be approached cautious
ly, as they increase maintenance overhead and can complicate Terraform upgrades. In many cases, it's preferable to use existing provisioners or separate configuration management tools unless there's a
 compelling need for custom functionality.

Learn more from the following resources:

- [@official@Terraform Provisioners](https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax)
- [@article@Terraform Provisioners - Why you should avoid them](https://spacelift.io/blog/terraform-provisioners)

## 관련 로드맵
- [[Terraform|terraform]]
