---
title: Dependency injection
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/dependency-injection@KEE50C6lOS4eX8sAbfhYe.md
---

# Dependency Injection

Dependency injection is a design pattern used mainly for managing class dependencies. Here, instead of a class being responsible for creating its dependencies on its own, an injector (the "client") passes the requirements to the class (the "service"), centralizing control and encouraging code to fol
low the single responsibility principle. As a simple example, consider a situation where class B needs to utilize class A's methods. Instead of creating an object of class A within B, with dependency 
injection, we pass an instance of class A to B.

    class A {
        function display(){
            echo 'Hello, PHP dependency injection!';
        }
    }
    
    class B {
        private $a;
    
        public function __construct(A $classAInstance) {
            $this->a = $classAInstance;
        }
    
        public function callDisplayOwn() {
            $this->a->display();
        }
    }
    
    $instanceA = new A();
    $instanceB = new B($instanceA);
    $instanceB->callDisplayOwn();  // Outputs: "Hello, PHP dependency injection!"

Visit the following resources to learn more:

- [@article@Understand Dependency Injection in PHP](https://php-di.org/doc/understanding-di.html)

## 관련 로드맵
- [[PHP|php]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Dependency Injection.md)

# Dependency Injection

`Dependency Injection` (DI) is a programming technique that makes a class independent of its dependencies. This is achieved by decoupling the use of an object from its creation. In this technique, instead of a class creating an object itself, an object is supplied or "injected" to the class by an ex
ternal entity. The actual creation and binding of dependencies are managed by a 'container', which injects the dependencies into the respective classes. Dependency Injection can be done in three ways:
 Constructor Injection, Setter Injection, and Interface Injection. Each of these methods involves moving the responsibility of the object creation and binding to another class or method.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
