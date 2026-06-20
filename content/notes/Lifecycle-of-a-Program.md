---
title: Lifecycle of a Program
tags: [concept, java]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/java/content/lifecycle-of-a-program@QgWalJLIb6Fw0HhN1wb02.md
---

# Lifecycle of a Program

In Java, the program lifecycle consists of several distinct phases that work together to execute code. The process begins with developers writing Java source code in `.java` files using an IDE or text editor. This code is then compiled by the Java compiler (javac) into bytecode stored in `.class` fi
les, with syntax and type checking performed during compilation. When the program runs, the Java Virtual Machine (JVM) loads these compiled class files into memory through a process involving loading 
of binary data, linking for verification and preparation, and initialization of class elements. The JVM then verifies the bytecode's security compliance, performs Just-In-Time (JIT) compilation to translate bytecode into native machine code for better performance, and executes the program instructio
ns while managing system resources. Throughout execution, the JVM handles garbage collection by reclaiming memory from unused objects, and finally releases all resources upon program termination. This
 architecture enables Java's "write once, run anywhere" capability since the bytecode can execute on any device with a compatible JVM.

Visit the following resources to learn more:

- [@article@Life Cycle of a Java Program](https://www.startertutorials.com/corejava/life-cycle-java-program.html)
- [@article@How the JVM Executes Java Code](https://www.cesarsotovalero.net/blog/how-the-jvm-executes-java-code.html)
- [@article@JIT vs. AOT Compilation in Java](https://bell-sw.com/blog/compilation-in-java-jit-vs-aot/)

## 관련 로드맵
- [[Java|java]]
