---
title: Resource Behavior
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/resource-behavior@BgZu7Xao5GjR8StVL7qhM.md
---

# Resource Behavior

Resource behavior encompasses how resources are managed, created, updated, and destroyed according to the configuration specified in Terraform files. Each resource block specifies desired attributes, and Terraform ensures that the real-world infrastructure matches these specifications. If writing a 
configuration for the first time, the resources defined will only exist in the configuration and will not be reflected on the target platform until applied.  When a configuration is applied, Terraform
 generates an execution plan, determining the actions required to reach the desired state, such as creating new resources, updating existing ones, or deleting resources no longer needed.

Learn more from the following resources:

- [@official@Behaviour](https://developer.hashicorp.com/terraform/language/resources/behavior)
- [@article@Terraform Resource Syntax, Behavior and State](https://terraformguru.com/terraform-certification-using-azure-cloud/09-Resource-Syntax-and-Behavior/)

## 관련 로드맵
- [[Terraform|terraform]]
