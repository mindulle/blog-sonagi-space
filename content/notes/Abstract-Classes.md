---
title: Abstract Classes
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/abstract-classes@RMkEE7c0jdVFqZ4fmjL6Y.md
---

# Abstract Classes

An abstract class is a class in object-oriented programming (OOP) that cannot be instantiated. Instead, it serves as a template or blueprint for other classes to inherit from. An abstract class can contain both abstract and non-abstract methods (abstract methods are methods that do not have any impl
ementation, they just have a signature).

Abstract classes are used to provide a common interface and implementation for a group of related classes. They are also used to define common behavior that must be implemented by all subclasses. A subclass that inherits from an abstract class is called a concrete class, and it must provide an imple
mentation for all the abstract methods declared in the parent class.

Visit the following resources to learn more:

- [@article@What is an Abstract Class in Object Oriented Programming](https://www.theserverside.com/definition/abstract-class)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Abstract classes.md)

# Abstract classes

Abstract classes in PHP are those which cannot be instantiated on their own. They are simply blueprints for other classes, providing a predefined structure. By declaring a class as abstract, you can define methods without having to implement them. Subsequent classes, when inheriting from an abstract
 class, must implement these undefined methods.

Visit the following resources to learn more:

- [@official@Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

## 관련 로드맵
- [[PHP|php]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Develop/Concepts/Abstract classes.md)
# Abstract classes

Abstract classes in PHP are those which cannot be instantiated on their own. They are simply blueprints for other classes, providing a predefined structure. By declaring a class as abstract, you can define methods without having to implement them. Subsequent classes, when inheriting from an abstract class, must implement these undefined methods.

Visit the following resources to learn more:

- [@official@Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

## 관련 로드맵
- [[PHP|php]]