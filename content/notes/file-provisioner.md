---
title: file provisioner
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/file-provisioner@Qch8k6e4pS8OlmG_sI0hH.md
---

# file provisioner

The Terraform file provisioner is used to copy files or directories from the machine running Terraform to a newly created resource. It's useful for tasks like uploading configuration files, scripts, or other necessary data to remote systems. The file provisioner can copy a single file or recursively
 copy directories. It supports both source and content arguments, allowing for either file-based or inline content transfers. This provisioner is often used in conjunction with remote-exec provisioner
s to execute uploaded scripts. While convenient for simple file transfers, it's important to consider security implications, especially when dealing with sensitive data. For more complex or large-scale file management tasks, dedicated configuration management tools are often preferred. The file prov
isioner is best used for small, straightforward file transfers needed to bootstrap or configure newly created resources.

Learn more from the following resources:

- [@official@Terraform File Provisioner](https://developer.hashicorp.com/terraform/language/resources/provisioners/file)
- [@article@The File Provisioner](https://learning-ocean.com/tutorials/terraform/terraform-file-provisioner/)

## 관련 로드맵
- [[Terraform|terraform]]
