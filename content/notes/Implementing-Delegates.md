---
title: Implementing Delegates
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/implementing-delegates@z3AUN9u7EEqeKOqvLxf7D.md
---

# Implementing Delegates

Implementing delegates in Swift involves creating a protocol that defines the methods the delegate should implement, and then using this protocol to establish a communication channel between objects. The process typically begins with defining a protocol that outlines the required and optional method
s. Next, a weak delegate property is declared in the delegating class to avoid retain cycles. The delegating class then calls the delegate methods at appropriate times, often in response to specific e
vents or state changes. On the delegate side, the class conforms to the protocol and implements the required methods, providing custom behavior as needed. This implementation allows for flexible and reusable code, as the delegating object doesn't need to know the specific type of its delegate, only 
that it conforms to the protocol.

Learn more from the following resources:

- [@article@Delegates in Swift](https://medium.com/@muhammad.cse11/delegates-in-swift-ios-application-6dfb37897f9b)
- [@article@What is a delegate in Swift](https://www.hackingwithswift.com/example-code/language/what-is-a-delegate-in-ios)
- [@video@Delegate protocol - Swift example](https://www.youtube.com/watch?v=Z9eSUE-lzig)

## 관련 로드맵
- [[ios|ios]]
