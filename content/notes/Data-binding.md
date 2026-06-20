---
title: Data binding
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/data-binding@yR94uHs0SiSScU4gPBzfr.md
---

# Data binding

SwiftUI data binding is a mechanism that creates a two-way connection between a piece of data and a UI element. It uses the `@Binding` property wrapper to allow child views to share and modify data owned by parent views. Bindings ensure that changes in data are immediately reflected in the UI and vi
ce versa. They are typically created using the `$` prefix on a `@State` property. This approach facilitates the flow of data through an app's view hierarchy, enabling reactive UI updates and maintaini
ng a single source of truth.

Learn more from the following resources:

- [@official@Binding](https://developer.apple.com/documentation/swiftui/binding)
- [@official@Apple Tutorials: Passing data with bindings](https://developer.apple.com/tutorials/app-dev-training/passing-data-with-bindings)
- [@video@How to use @Binding property wrapper in SwiftUI](https://www.youtube.com/watch?v=btDMzB5x2Gs)
- [@video@SwiftUI - @Binding Property Wrapper Explained](https://www.youtube.com/watch?v=lgtB3WLEOYg)

## 관련 로드맵
- [[ios|ios]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Data Binding.md)

# Data Binding

In an Angular template, a binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs). This connection can be used to synchronize the view with the model, to notify th
e model when an event or user action takes place in the view, or both. Angular's Change Detection algorithm is responsible for keeping the view and the model in sync. Bindings always have two parts: a
 target which will receive the bound value, and a template expression which produces a value from the model.

Visit the following resources to learn more:

- [@official@Understand Binding](https://angular.dev/guide/templates/binding)
- [@article@Data Binding in Angular](https://www.angularminds.com/blog/data-binding-in-angular)

## 관련 로드맵
- [[Angular|angular]]
