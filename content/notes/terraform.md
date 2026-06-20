---
title: Terraform
tags: [roadmap, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform
---

# Terraform

## 요약
terraform에 관한 로드맵 지식입니다. 각 세부 개념은 개별 문서로 관리됩니다.

## 주요 개념 (Atomic Notes)
- [[Mastering Terraform]]
- Find the interactive version of this roadmap and other similar roadmaps
- [[introduction|Introduction]]
- [[What is Terraform|What is Terraform]]
- [[Usecases and Benefits|Usecases and Benefits]]
- [[Installing Terraform|Installing Terraform]]
- [[CaC vs IaC|CaC vs IaC]]
- [[Project Initialization|Project Initialization]]
- [[Providers|Providers]]
- [[Terraform Registry|Terraform Registry]]
- [[Configuring Providers|Configuring Providers]]
- [[Versions|Versions]]
- [[Hashicorp Config. Language (HCL)|Hashicorp Config. Language (HCL)]]
- [[What is Infrastructure as Code|What is Infrastructure as Code]]
- [[What is HCL|What is HCL]]
- [[Basic Syntax|Basic Syntax]]
- [[Make sure to visit DevOps roadmap]]
- [[devops|DevOps Roadmap]]
- [[Resources|Resources]]
- [[Resource Behavior|Resource Behavior]]
- [[Resource Lifecycle|Resource Lifecycle]]
- [[depends_on|depends_on]]
- [[count|count]]
- [[for_each|for_each]]
- [[Provider|provider]]
- [[lifecycle|lifecycle]]
- [[Meta Arguments|Meta Arguments]]
- [[getting-started|Getting Started]]
- [[Variables|Variables]]
- [[Input Variables|Input Variables]]
- [[Type Constraints|Type Constraints]]
- [[Environment Variables|Environment Variables]]
- [[Variable Definition File|Variable Definition File]]
- [[Validation Rules|Validation Rules]]
- [[Local Values|Local Values]]
- [[outputs|Outputs]]
- [[Output Syntax|Output Syntax]]
- [[Sensitive Outputs|Sensitive Outputs]]
- [[Preconditions|Preconditions]]
- [[Format & Validate|Format & Validate]]
- [[terraform fmt|terraform fmt]]
- [[terraform validate|terraform validate]]
- [[TFLint|TFLint]]
- [[Deployment|Deployment]]
- [[terraform plan|terraform plan]]
- [[terraform apply|terraform apply]]
- [[Inspect  Modify State|Inspect  Modify State]]
- [[Graph|Graph]]
- [[list|list]]
- [[output|output]]
- [[Clean Up|Clean Up]]
- [[terraform destroy|terraform destroy]]
- [[State Management|State Management]]
- [[State|State]]
- [[Remote State|Remote State]]
- [[State Locking|State Locking]]
- [[Import Existing Resources|Import Existing Resources]]
- [[Splitting State Files|Splitting State Files]]
- [[Versioning|Versioning]]
- [[Sensitive Data|Sensitive Data]]
- [[Best Practices for State|Best Practices for State]]
- [[-replace option in apply|-replace option in apply]]
- [[show|show]]
- [[rm|rm]]
- [[mv|mv]]
- [[Basic / Advanced Commands]]
- [[Modules|Modules]]
- [[Root vs Child Modules|Root vs Child Modules]]
- [[Published Modules Usage|Published Modules Usage]]
- [[Creating Local Modules|Creating Local Modules]]
- [[Inputs  Outputs|Inputs  Outputs]]
- [[Modules Best Practices|Modules Best Practices]]
- [[Provisioners|Provisioners]]
- [[When to Use|When to Use]]
- [[Creation  Destroy Time|Creation  Destroy Time]]
- [[file provisioner|file provisioner]]
- [[local-exec provisioner|local-exec provisioner]]
- [[remote-exec provisioner|remote-exec provisioner]]
- [[Custom Provisioners|Custom Provisioners]]
- [[Data Sources|Data Sources]]
- [[Template Files|Template Files]]
- [[state pull  push|state pull  push]]
- [[state replace-provider|state replace-provider]]
- [[state force-unlock|state force-unlock]]
- [[Workspaces|Workspaces]]
- [[CI  CD Integration|CI  CD Integration]]
- [[GitHub Actions|GitHub Actions]]
- [[Circle CI|Circle CI]]
- [[GitLab CI|GitLab CI]]
- [[Jenkins|Jenkins]]
- [[Testing|Testing]]
- [[Unit Testing|Unit Testing]]
- [[Contract Testing|Contract Testing]]
- [[Integration Testing|Integration Testing]]
- [[End-to-End Testing|End-to-End Testing]]
- [[Testing Modules|Testing Modules]]
- [[Scaling Terraform|Scaling Terraform]]
- [[Splitting Large State|Splitting Large State]]
- [[Parallelism|Parallelism]]
- [[Deployment Workflow|Deployment Workflow]]
- [[Terragrunt|Terragrunt]]
- [[Infracost|Infracost]]
- [[Secret Management|Secret Management]]
- [[Compliance  Sentinel|Compliance  Sentinel]]
- [[Trivy|Trivy]]
- [[KICS|KICS]]
- [[Security|Security]]
- [[Terrascan|Terrascan]]
- [[Checkov|Checkov]]
- [[HCP|HCP]]
- [[What and when to use HCP|What and when to use HCP]]
- [[Enterprise Features|Enterprise Features]]
- [[Authentication|Authentication]]
- [[Workspaces|Workspaces]]
- [[VCS Integration|VCS Integration]]
- [[Run Tasks|Run Tasks]]
- [[Linux|linux]]
- [[devops|devops]]
- [[Docker|docker]]
- [[Kubernetes|kubernetes]]
- [[Version Management|Version Management]]

## 관련 로드맵
- [[AI Agents|AI Agents]]
- [[ai-engineer|ai-engineer]]
- [[Python|python]]
- [[JavaScript|javascript]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Terraform.md)

# Terraform

Terraform is an open-source infrastructure as code (IaC) tool developed by HashiCorp, used to define, provision, and manage cloud and on-premises infrastructure using declarative configuration files. It supports multiple cloud providers like AWS, Azure, and Google Cloud, as well as various services 
and platforms, enabling infrastructure automation across diverse environments. Terraform's state management and modular structure allow for efficient scaling, reusability, and version control of infra
structure. It is widely used for automating infrastructure provisioning, reducing manual errors, and improving infrastructure consistency and repeatability.

Visit the following resources to learn more:

- [@roadmap@Visit Dedicated Terraform Roadmap](https://roadmap.sh/terraform)
- [@course@Complete Terraform Course](https://www.youtube.com/watch?v=7xngnjfIlK4)
- [@official@Terraform Documentation](https://www.terraform.io/docs)
- [@official@Terraform Tutorials](https://learn.hashicorp.com/terraform)
- [@article@How to Scale Your Terraform Infrastructure](https://thenewstack.io/how-to-scale-your-terraform-infrastructure/)
- [@feed@Explore top posts about Terraform](https://app.daily.dev/tags/terraform?ref=roadmapsh)

## 관련 로드맵
- [[data-engineer|data-engineer]]
