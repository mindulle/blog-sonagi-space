---
title: Setting Up the Client
tags: [concept, angular]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/angular/content/setting-up-the-client@AKPhbg10xXjccO7UBh5eJ.md
---

# Setting Up the Client

Before you can use `HttpClient` in your app, you must configure it using dependency injection. `HttpClient` is provided using the `provideHttpClient` helper function, which most apps include in the application providers in `app.config.ts`. If your app is using NgModule-based bootstrap instead, you c
an include `provideHttpClient` in the providers of your app's `NgModule`.

Visit the following resources to learn more:

- [@official@Setting up HttpClient](https://angular.dev/guide/http/setup)
- [@video@Setting up HttpClient in Angular (NgModule)](https://www.youtube.com/watch?v=hBFtim1vO3M)

## 관련 로드맵
- [[Angular|angular]]
