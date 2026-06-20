---
title: Import Existing Resources
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/import-existing-resources@L7wAMGi_yU-Bbc9fXlmxZ.md
---

# Import Existing Resources

Terraform state import is a command used to bring existing resources under Terraform management. It allows you to add resources that were created outside of Terraform (e.g., manually or by other tools) into your Terraform state. The command takes two main arguments: the Terraform resource address an
d the real-world resource identifier. When executed, it adds the resource to the state file without modifying the actual infrastructure. This is useful for adopting Terraform in environments with exis
ting resources, or for recovering from scenarios where state and reality have diverged. After importing, you need to write the corresponding configuration in your Terraform files to match the imported resource.

In Terraform v1.5.0 and later you can also create `import` blocks in any Terraform configuration file.

Learn more from the following resources:

- [@official@Terraform import command](https://developer.hashicorp.com/terraform/cli/import)
- [@article@Terraform Import: What it is and how to use it](https://terrateam.io/blog/terraform-import)
- [@video@Exploring the Import Block in Terraform 1.5](https://www.youtube.com/watch?v=znfh_00EDZ0)

## 관련 로드맵
- [[Terraform|terraform]]
