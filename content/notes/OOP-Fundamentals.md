---
title: OOP Fundamentals
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/oop-fundamentals@yTviiPFR5b_dr3WyxdxxQ.md
---

# OOP Fundamentals

In PHP, Object-Oriented Programming (OOP) Fundamentals cover critical aspects like classes, objects, properties, and methods. OOP facilitates efficient code reusability and makes it easier to manage and modify code. For example, here's a code snippet that represents a class with a method and a prope
rty in PHP:

    class Hello {
        public $greeting = "Hello, world!";
    
        public function displayGreeting() {
            echo $this->greeting;
        }
    }
    $hello = new Hello();
    $hello->displayGreeting(); // Outputs "Hello, world!"
    

This snippet defines a class `Hello` with a property `$greeting` and a method `displayGreeting()`. Instances of this class can access these methods and properties. OOP Fundamentals in PHP are much more comprehensive, encompassing concepts like inheritance, encapsulation, and polymorphism.

Visit the following resources to learn more:

- [@official@OOP](https://php.net/manual/en/language.oop5.basic.php)

## 관련 로드맵
- [[PHP|php]]
