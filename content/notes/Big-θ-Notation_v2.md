---
title: Big-θ Notation
tags: [concept, datastructures-and-algorithms]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/datastructures-and-algorithms/content/big--notation@Ex6tzu6gwrarWm1CNFufO.md
---

# Big-θ Notation

Big Theta (θ) notation is used in computer science to describe an asymptotic tight bound on a function. This essentially means it provides both an upper and lower bound for a function. When we say a function f(n) is θ(g(n)), we mean that the growth rate of f(n) is both bounded above and below by the function g(n) after a certain point. This is more precise than Big O and Big Omega notation, which provide only an upper and a lower bound, respectively. Big Theta notation tells us exactly how a function behaves for large input values. For example, if an algorithm has a time complexity of θ(n^2), it means the running time will increase quadratically with the input size.

## 관련 로드맵
- [[datastructures-and-algorithms|datastructures-and-algorithms]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Computing/Concepts/Big-Ω Notation_v2.md)
# Big-Ω Notation

The Big Omega (Ω) notation is used in computer science to describe an algorithm's lower bound. Essentially, it provides a best-case analysis of an algorithm's efficiency, giving us a lower limit of the performance. If we say a function f(n) is Ω(g(n)), it means that from a certain point onwards (n0 for some constant n0), the value of g(n) is a lower bound on f(n). It implies that f(n) is at least as fast as g(n) past a certain threshold. This means that the algorithm won't perform more efficiently than the Ω time complexity suggests.

## 관련 로드맵
- [[datastructures-and-algorithms|datastructures-and-algorithms]]