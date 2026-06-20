---
title: XCFramework
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/xcframework@MaHtZSIPxDzrnB33_9OdV.md
---

# XCFramework

XCFramework is an advanced packaging format introduced by Apple for distributing binary frameworks in iOS, macOS, tvOS, and watchOS development. It addresses limitations of traditional .framework bundles by supporting multiple architectures and platforms within a single package. XCFrameworks can con
tain binary code for different platforms and architectures, including simulators and devices, making them ideal for distributing cross-platform libraries. They simplify the integration process, elimin
ating the need for manual management of different framework versions for various platforms. XCFrameworks support both static and dynamic libraries and can include resources like headers, assets, and documentation. This format is particularly beneficial for library developers, as it allows them to di
stribute a single package that works across different Apple platforms and architectures. For app developers, XCFrameworks offer smoother integration of third-party dependencies, reducing compatibility
 issues and simplifying the build process in Xcode projects.

Learn more from the following resources:

- [@official@Creating a multiplatform binary framework bundle](https://developer.apple.com/documentation/xcode/creating-a-multi-platform-binary-framework-bundle)
- [@official@Distributing binary frameworks as Swift packages](https://developer.apple.com/documentation/xcode/distributing-binary-frameworks-as-swift-packages)
- [@article@Creating an XCFramework](https://rhonabwy.com/2023/02/10/creating-an-xcframework/)

## 관련 로드맵
- [[ios|ios]]
