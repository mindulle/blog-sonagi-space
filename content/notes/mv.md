---
title: mv
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/mv@0xVXwjWPFXDGRw_3p6th6.md
---

# mv

The terraform state mv command is used to move resources within a Terraform state or between separate state files. It allows for reorganizing the state without modifying the actual infrastructure. This command is useful when refactoring Terraform configurations, moving resources between modules, or 
splitting a large state file into smaller ones. It takes two arguments: the source and destination addresses of the resource. The command updates all references to the moved resource, ensuring that fu
ture operations correctly target the resource at its new location. This functionality is particularly valuable when restructuring complex projects or adapting to changing organizational needs. However, it should be used cautiously, as incorrect moves can lead to state inconsistencies.

Learn more from the following resources:

- [@official@Terraform State mv](https://developer.hashicorp.com/terraform/cli/commands/state/mv)
- [@official@Moving Resources](https://developer.hashicorp.com/terraform/cli/state/move)
- [@video@Terraform — Terraform State MV ](https://www.youtube.com/watch?v=i10IMXn3l0o)


## 관련 로드맵
- [[Terraform|terraform]]
