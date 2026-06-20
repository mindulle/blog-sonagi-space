---
title: Object-Relational Mapping (ORM)
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/object-relational-mapping-orm@SeqGIfcLuveZ2z5ZSXcOd.md
---

# Object-Relational Mapping (ORM)

Object-Relational Mapping (ORM) is a popular technique used with PHP to convert data between incompatible type systems using an object-oriented programming language. Essentially, it saves PHP developers time by enabling them to work with databases using OOP standards and avoid writing long SQL queri
es. One commonly used ORM in PHP is Doctrine. For instance, to save data into a products table, you don't use SQL but OOP-style code:

    $product = new Product();
    $product->setName('New Product');
    $entityManager->persist($product);
    $entityManager->flush();

Visit the following resources to learn more:

- [@article@What is an Object Relational Mapping (ORM)](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one#answer-1279678)

## 관련 로드맵
- [[PHP|php]]
