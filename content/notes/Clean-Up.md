---
title: Clean Up
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/clean-up@inbTto9Qukdj6egRJ0Zh9.md
---

# Clean Up

Cleaning up after using Terraform involves removing the infrastructure resources created and managing the associated state. The primary command for this is `terraform destroy`, which deletes all resources managed by the current Terraform configuration. It shows a destruction plan and requires confir
mation before proceeding. After destruction, you should remove or archive the state files if they're no longer needed. For partial cleanup, you can remove specific resources from the state using `terr
aform state rm` and then run `terraform apply` to delete them. It's crucial to ensure all resources are properly removed to avoid unnecessary costs and security risks. Always review the destruction plan carefully, especially in shared or production environments, to prevent accidental deletion of cri
tical resources.

Learn more from the following resources:

- [@article@How to Destroy Terraform Resources](https://spacelift.io/blog/how-to-destroy-terraform-resources)

## 관련 로드맵
- [[Terraform|terraform]]
