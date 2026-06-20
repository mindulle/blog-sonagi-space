---
title: Zone Pollution
tags: [concept, angular]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/angular/content/zone-pollution@pRSR5PEbkJXAJ1LPyK-EE.md
---

# Zone Pollution

`Zone.js` is a signaling mechanism that Angular uses to detect when an application state might have changed. In some cases, scheduled tasks or microtasks don’t make any changes in the data model, which makes running change detection unnecessary. Common examples are `requestAnimationFrame`, `setTimeo
ut` and `setInterval`. You can identify change detection with Angular DevTools, and you can run code outside the Angular zone to avoid unnecessary change detection calls.

Visit the following resources to learn more:

- [@official@Zone Pollution](https://angular.dev/best-practices/zone-pollution)
- [@official@Angular DevTools](https://angular.dev/tools/devtools)
- [@video@NgZone in Angular - Improve Performance by Running Code Outside Angular](https://www.youtube.com/watch?v=7duYY9IFIuw)
- [@video@4 Runtime Performance Optimizations](https://www.youtube.com/watch?v=f8sA-i6gkGQ)

## 관련 로드맵
- [[Angular|angular]]
