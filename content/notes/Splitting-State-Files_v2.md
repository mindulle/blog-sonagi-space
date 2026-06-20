---
title: Splitting State Files
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/splitting-state-files@a0rUMnYluVUGhyhlDK5S8.md
---

# Splitting State Files

Splitting Terraform state files involves dividing a large state into smaller, more manageable parts. This is typically done using Terraform workspaces or by organizing resources into separate modules with their own state files. The process helps manage complex infrastructures, improves performance, and allows for more granular access control. To split an existing state, you can use `terraform state mv` to move resources between states, or `terraform state rm` followed by `terraform import` in a new configuration. This approach is beneficial for large projects, enabling teams to work on different parts of infrastructure independently. However, it requires careful planning to manage dependencies between split states. Proper state splitting can lead to more efficient workflows, easier troubleshooting, and better alignment with organizational structures in large-scale Terraform deployments.

Learn more from the following resources:

- [@video@Organizing Terraform with multiple states](https://www.youtube.com/watch?v=5TfgdKXr45I)
- [@article@How to split state files](https://support.hashicorp.com/hc/en-us/articles/7955227415059-How-to-Split-State-Files)
- [@article@Introducing terraform-state-split](https://www.shebanglabs.io/moving-terraform-resources-between-different-states/)

## 관련 로드맵
- [[Terraform|terraform]]
