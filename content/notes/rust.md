---
title: Rust
tags: [roadmap, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust
---

# Rust

## 요약
rust에 관한 로드맵 지식입니다. 각 세부 개념은 개별 문서로 관리됩니다.

## 주요 개념 (Atomic Notes)
- [[Rust|rust]]
- Find the interactive version of this roadmap and more roadmaps at
- [[introduction|Introduction]]
- [[What is Rust|What is Rust]]
- [[Continue learning with following roadmaps]]
- [[backend|backend]]
- [[devops|devops]]
- [[Why use Rust|Why use Rust]]
- [[Environment Setup|Environment Setup]]
- [[Installing Rust and Cargo|Installing Rust and Cargo]]
- [[IDEs and Rust Toolchains|IDEs and Rust Toolchains]]
- [[Rust REPL (Rust Playground)|Rust REPL (Rust Playground)]]
- [[Language Basics|Language Basics]]
- [[Syntax and Semantics]]
- [[Variables, DataTypes and Constants|Variables, DataTypes and Constants]]
- [[Control Flow and Constructs|Control Flow and Constructs]]
- [[Functions and Method Syntax|Functions and Method Syntax]]
- [[Pattern Matching & Destructuring|Pattern Matching & Destructuring]]
- [[construct|Constructs]]
- [[Enums|Enums]]
- [[Structs|Structs]]
- [[Traits|Traits]]
- [[Impl Blocks|Impl Blocks]]
- [[Data Structures|Data Structures]]
- [[Integers|Integers]]
- [[boolean|Boolean]]
- [[Floats|Floats]]
- [[Character|Character]]
- [[Tuple|Tuple]]
- [[string|String]]
- [[Array|Array]]
- [[Hashmap|Hashmap]]
- [[Vector|Vector]]
- [[Hashset|Hashset]]
- [[LinkedList|LinkedList]]
- [[Stack|Stack]]
- [[queue|Queue]]
- [[Binary Heap|Binary Heap]]
- [[Ownership System]]
- [[Ownership Rules & Memory Safety|Ownership Rules & Memory Safety]]
- [[Borrowing, References and Slices|Borrowing, References and Slices]]
- [[Deep Dive Stack vs Heap|Deep Dive Stack vs Heap]]
- [[Advanced Data Structures|Advanced Data Structures]]
- [[BTreeMap|BTreeMap]]
- [[BTreeSet|BTreeSet]]
- [[RC|RC]]
- [[Arc|Arc]]
- [[Mutex|Mutex]]
- [[RwLock|RwLock]]
- [[Channels|Channels]]
- [[Error Handling|Error Handling]]
- [[Option and Result Enumerations|Option and Result Enumerations]]
- [[Propagating Errors and `` Operator|Propagating Errors and `` Operator]]
- [[Custom Error Types and Traits|Custom Error Types and Traits]]
- [[Modules & Crates|Modules & Crates]]
- [[Code Organization & Namespacing|Code Organization & Namespacing]]
- [[Dependency Management with Cargo|Dependency Management with Cargo]]
- [[Publishing on Crates.io|Publishing on Crates.io]]
- [[Concurrency & Parallelism|Concurrency & Parallelism]]
- [[Threads, Channels and Message Passing|Threads, Channels and Message Passing]]
- [[Atomic Operations & Memory Barriers|Atomic Operations & Memory Barriers]]
- [[Futures and AsyncAwait Paradigm|Futures and AsyncAwait Paradigm]]
- [[Testing|Testing]]
- [[Unit & Integration Testing|Unit & Integration Testing]]
- [[Mocking & Property Based Testing|Mocking & Property Based Testing]]
- [[Traits & Generics|Traits & Generics]]
- [[Trait Definitions & Implementations|Trait Definitions & Implementations]]
- [[Trait Bounds and Associated Types|Trait Bounds and Associated Types]]
- [[Generics & Type-Level Programming|Generics & Type-Level Programming]]
- [[Lifetimes & Borrow Checker|Lifetimes & Borrow Checker]]
- [[Explicit Lifetime Annotations|Explicit Lifetime Annotations]]
- [[Lifetime Elision Rules|Lifetime Elision Rules]]
- [[Covariant & Contravariant Lifetimes|Covariant & Contravariant Lifetimes]]
- [[Macros & Metaprogramming|Macros & Metaprogramming]]
- [[Declarative Macros with macro_rules!|Declarative Macros with macro_rules!]]
- [[Procedural Macros & Custom Derive|Procedural Macros & Custom Derive]]
- [[Domain Specific Languages (DSLs)|Domain Specific Languages (DSLs)]]
- [[Web Development|Web Development]]
- [[Ecosystem and Libraries]]
- [[Axum|Axum]]
- [[Actix|Actix]]
- [[Leptos|Leptos]]
- [[Loco|Loco]]
- [[Rocket|Rocket]]
- [[Asynchronous Programming|Asynchronous Programming]]
- [[Tokio|Tokio]]
- [[async-std|async-std]]
- [[smol|smol]]
- [[Personal recommendation: Axum]]
- [[Networking|Networking]]
- [[reqwest|reqwest]]
- [[hyper|hyper]]
- [[quinn|quinn]]
- [[Serialization  Deserialization|Serialization  Deserialization]]
- [[Serde|Serde]]
- [[json-rust|json-rust]]
- [[toml-rs|toml-rs]]
- [[Database and ORM|Database and ORM]]
- [[Diesel|Diesel]]
- [[sqlx|sqlx]]
- [[rusqlite|rusqlite]]
- [[Cryptography|Cryptography]]
- [[rust-crypto|rust-crypto]]
- [[sodiumoxide|sodiumoxide]]
- [[Ring|Ring]]
- [[CLI Utilities|CLI Utilities]]
- [[clap|clap]]
- [[structopt|structopt]]
- [[termion|termion]]
- [[Game Development|Game Development]]
- [[bevy|bevy]]
- [[fyrox|fyrox]]
- [[ggez|ggez]]
- [[macroquad|macroquad]]
- [[wgpu-rs|wgpu-rs]]
- [[GUI Development|GUI Development]]
- [[Tauri|Tauri]]
- [[gtk-rs|gtk-rs]]
- [[relm|relm]]
- [[Embedded and Systems|Embedded and Systems]]
- [[embedded-hal|embedded-hal]]
- [[rppal|rppal]]
- [[nrf-hal|nrf-hal]]
- [[WebAssembly (WASM)|WebAssembly (WASM)]]
- [[wasm-bindgen|wasm-bindgen]]
- [[wasm-pack|wasm-pack]]
- [[wasmer|wasmer]]
- [[Debugging|Debugging]]
- [[rust-gdb|rust-gdb]]
- [[rust-lldb|rust-lldb]]
- [[Documenting with `rustdoc`|Documenting with `rustdoc`]]
- [[Performance and Profiling|Performance and Profiling]]
- [[Criterion.rs|Criterion.rs]]

## 관련 로드맵
- [[AI Agents|AI Agents]]
- [[ai-engineer|ai-engineer]]
- [[Python|python]]
- [[JavaScript|javascript]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Rust.md)

# Rust

Rust is a systems programming language focused on safety, performance, and concurrency. Provides memory safety without garbage collection through ownership model preventing null pointers and data races. Strong type system with modern features suitable for systems programming to web servers.

Visit the following resources to learn more:

- [@roadmap@Visit Dedicated Rust Roadmap](https://roadmap.sh/rust)
- [@official@The Rust Programming Language - Book](https://doc.rust-lang.org/book/)
- [@article@Rust vs. Go: Why They’re Better Together](https://thenewstack.io/rust-vs-go-why-theyre-better-together/)
- [@article@Rust by the Numbers: The Rust Programming Language in 2021](https://thenewstack.io/rust-by-the-numbers-the-rust-programming-language-in-2021/)
- [@video@Learn Rust Programming](https://www.youtube.com/watch?v=BpPEoZW5IiY)
- [@feed@Explore top posts about Rust](https://app.daily.dev/tags/rust?ref=roadmapsh)

## 관련 로드맵
- [[backend|backend]]
