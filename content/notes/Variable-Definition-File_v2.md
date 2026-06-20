---
title: Variable Definition File
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/variable-definition-file@rdphcVd-Vq972y4H8CxIj.md
---

# Variable Definition File

A Terraform `variables.tf` file centralizes input variable declarations for a module or configuration. It typically contains multiple variable blocks, each defining a single input variable with its name, type constraint, optional default value, and description. This file serves as a single reference point for all variables used in the configuration, enhancing readability and maintainability. While not mandatory, using `variables.tf` is a common practice to organize and document a module's expected inputs.

Learn more from the following resources:

- [@official@Parameterize Your Configuration](https://developer.hashicorp.com/terraform/tutorials/configuration-language/variables#parameterize-your-configuration)
- [@video@You should be using tfvars vs variables in Terraform](https://www.youtube.com/watch?v=BHWM4D2GJvI)

## 관련 로드맵
- [[Terraform|terraform]]
