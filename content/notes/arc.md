[dart:html](../../dart-html/dart-html-library){._links-link}

arc method
==========

::: {.section .multi-line-signature}
void arc(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y,
3.  [num](../../dart-core/num-class) radius,
4.  [num](../../dart-core/num-class) startAngle,
5.  [num](../../dart-core/num-class) endAngle,
6.  \[[bool](../../dart-core/bool-class) anticlockwise = false\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void arc(num x, num y, num radius, num startAngle, num endAngle,
    [bool anticlockwise = false]) {
  // TODO(terry): This should not be needed: dartbug.com/20939.
  JS('void', '#.arc(#, #, #, #, #, #)', this, x, y, radius, startAngle,
      endAngle, anticlockwise);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/arc.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/arc.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

arc method
==========

::: {.section .multi-line-signature}
void arc(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y,
3.  [num](../../dart-core/num-class) radius,
4.  [num](../../dart-core/num-class) startAngle,
5.  [num](../../dart-core/num-class) endAngle,
6.  [bool](../../dart-core/bool-class)? anticlockwise

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void arc(num x, num y, num radius, num startAngle, num endAngle,
    bool? anticlockwise) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/arc.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/arc.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

arc method
==========

::: {.section .multi-line-signature}
void arc(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y,
3.  [num](../../dart-core/num-class) radius,
4.  [num](../../dart-core/num-class) startAngle,
5.  [num](../../dart-core/num-class) endAngle,
6.  [bool](../../dart-core/bool-class)? anticlockwise

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void arc(num x, num y, num radius, num startAngle, num endAngle,
    bool? anticlockwise) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/arc.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/path2d/arc.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

arc method
==========

::: {.section .multi-line-signature}
void arc(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y,
3.  [num](../../dart-core/num-class) radius,
4.  [num](../../dart-core/num-class) startAngle,
5.  [num](../../dart-core/num-class) endAngle,
6.  [bool](../../dart-core/bool-class)? anticlockwise

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void arc(num x, num y, num radius, num startAngle, num endAngle,
    bool? anticlockwise) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Path2D/arc.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Arc.md)

# Arc

`Arc<T>` (Atomic Reference Counting) is a thread-safe smart pointer for sharing immutable data across multiple threads. It uses atomic operations to track reference counts, allowing multiple ownership of heap-allocated data. When the reference count reaches zero, the data is automatically cleaned up
.

Visit the following resources to learn more:

- [@official@Arc in std::sync](https://doc.rust-lang.org/std/sync/struct.Arc.html)
- [@official@Arc in Rust Lang](https://doc.rust-lang.org/rust-by-example/std/arc.html)

## 관련 로드맵
- [[Rust|rust]]
