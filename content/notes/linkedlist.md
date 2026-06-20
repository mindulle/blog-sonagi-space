[dart:collection](../../dart-collection/dart-collection-library){._links-link}

LinkedList\<E extends LinkedListEntry\<E\>\> constructor
========================================================

::: {.section .multi-line-signature}
LinkedList\<E extends LinkedListEntry\<E\>\>()
:::

Constructs a new empty linked list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
LinkedList();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/LinkedList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/LinkedList.md)

# LinkedList

`LinkedList<T>` is a doubly-linked list where each node contains a value and pointers to both next and previous nodes. Provides O(1) insertion/removal at both ends but O(n) indexing. Generally slower than `Vec` and rarely needed; `VecDeque` is usually preferred for queue operations.

Visit the following resources to learn more:

- [@official@LinkedList in std::collections](https://doc.rust-lang.org/std/collections/struct.LinkedList.html)
- [@article@Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)

## 관련 로드맵
- [[Rust|rust]]
