---
title: Setting up a New Project
tags: [concept, angular]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/angular/content/setting-up-a-new-project@EbFRcy4s6yzzIApBqU77Y.md
---

# Setting up a New Project

Setting up a new Angular project is streamlined by the **Angular CLI**, a command-line interface that automates the initial setup. First, ensure Node.js and npm are installed, then globally install the CLI itself via `npm install -g @angular/cli`. With the CLI in place, navigate to your desired dire
ctory and initiate a new project using `ng new your-project-name`, where you'll be prompted to configure options like routing and stylesheet format, with the `--standalone` flag being a common additio
n for modern projects. Once the project is scaffolded and dependencies are installed, change into your new project directory (`cd your-project-name`) and launch the development server with `ng serve`, making your new Angular application accessible in your browser, typically at `http://localhost:4200
/`.

Visit the following resources to learn more:

- [@official@Installation](https://angular.dev/installation)
- [@official@Setting up the local environment and workspace](https://angular.dev/tools/cli/setup-local)
- [@official@Build your first Angular app](https://angular.dev/tutorials/first-app)


## 관련 로드맵
- [[Angular|angular]]
