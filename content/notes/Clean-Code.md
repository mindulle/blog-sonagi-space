---
title: Clean Code
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/clean-code@TJZgsxpfOmltUUChMzlEM.md
---

# Clean Code Principles

Clean code is code that is easy to read, understand, and maintain. It follows a set of principles that are designed to make the code more readable, testable, and less error-prone. Some of the key principles of clean code include:

*   Clarity: The code should be easy to read and understand.
*   Simplicity: The code should be as simple as possible, avoiding unnecessary complexity.
*   Comments: Comments should be used sparingly and only when necessary to explain complex or non-obvious code.
*   Naming: Variables, functions, and classes should have meaningful and descriptive names.
*   Formatting: The code should be consistently formatted to improve readability.
*   Functionality: The code should be organized into small, single-purpose functions and classes.
*   Error handling: The code should handle errors in a consistent and predictable way.
*   Testing: The code should be testable and have a high test coverage.
*   Reusability: The code should be designed to be reusable and modular.
*   Performance: The code should be designed to be efficient and performant.

Visit the following resources to learn more:

- [@article@Introduction to Clean Code & Software Design Principles](https://workat.tech/machine-coding/tutorial/introduction-clean-code-software-design-principles-nwu4qqc63e09)
- [@feed@Explore top posts about General Programming](https://app.daily.dev/tags/general-programming?ref=roadmapsh)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/fruit/Refactoring/what-is-refactoring/Clean code.md)
# Clean code

The main purpose of refactoring is **to fight technical debt.** It
transforms a mess into clean code and simple design.

Nice! But what's clean code, anyway? Here are some of its features:

####  Clean code is obvious for other programmers.

And I'm not talking about super sophisticated algorithms. Poor variable naming, bloated classes and methods, magic numbers -you name it- all of that makes code sloppy and difficult to grasp.

####  Clean code doesn't contain duplication.

**Each time you have to make a change in a duplicate code, you have to remember to make the same change to every instance.** This increases the cognitive load and slows down the progress.

####  Clean code contains a *minimal number of classes* and other moving parts.

Less code is less stuff to keep in your head. Less code is less
maintenance. Less code is fewer bugs. Code is liability, keep it short
and simple.

####  Clean code *passes all tests.*

You know your code is dirty when only 95% of your tests passed. You know
you're screwed when your test coverage is 0%.

####  Clean code is easier and cheaper to maintain!
