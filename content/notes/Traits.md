---
title: Traits
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/traits@GR09ns9B-0cONQaQ_uj-7.md
---

# Traits

Traits is a concept in PHP that allows code reusability by enabling developers to create reusable pieces of code which can be used in classes to extend functionality. They are a way to reduce intricacies of single inheritance by enabling a developer to reuse sets of methods freely in several indepen
dent classes.

Here's an example how to use a Trait:

    trait Greeting {
        public function sayHello() {
            return "Hello";
        }
    }
    class User {
        use Greeting;
    }
    $user = new User();
    echo $user->sayHello(); // Outputs: Hello
    

In the above code snippet, the `Greeting` trait is being used in the `User` class, and we are able to use its methods as if they were defined in the `User` class.

Visit the following resources to learn more:

- [@official@Traits](https://www.php.net/manual/en/language.oop5.traits.php)

## 관련 로드맵
- [[PHP|php]]
