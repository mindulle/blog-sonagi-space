---
title: Protobuf
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/protobuf@w2zbab_6Gxw6AWS0N759U.md
---

# Protobuf

`Protobuf`, or Protocol Buffers, is a method developed by Google for serializing structured data. It's both language-neutral and platform-neutral. Google designed it to be smaller and faster than XML. You design your data structures in `.proto` files, then use the Protobuf compiler `protoc` to gener
ate data access classes in your chosen language. Google provides support for several languages including: Java, C++, Python, Objective-C, and C#. Community developed support for even more languages is
 also available. This gives `protobuf` a great deal of versatility, making it a popular choice for data storage and communication between services.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/protobuf.md)

# Protobuf

Protobuf (Protocol Buffers) is a language-neutral, platform-neutral, extensible mechanism for serializing structured data. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of da
ta streams, using a variety of languages. Think of it as a more efficient and flexible alternative to XML or JSON.

Visit the following resources to learn more:

- [@opensource@protobuf](https://github.com/protocolbuffers/protobuf)
- [@article@Protocol Buffer Basics: C++](https://protobuf.dev/getting-started/cpptutorial/)

## 관련 로드맵
- [[cpp|cpp]]
