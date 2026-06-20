[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skip(

1.  [int](../../dart-core/int-class) count

)

::: {.features}
override
:::
:::

Returns an [Iterable](../../dart-core/iterable-class) that provides all
but the first `count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../../dart-core/list-class). Such iterables are allowed to ignore
the initial skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skip(int count) {
  return SkipIterable<E>(this, count);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/skip.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skip(

1.  [int](../../dart-core/int-class) count

)

::: {.features}
inherited
:::
:::

Returns an [Iterable](../../dart-core/iterable-class) that provides all
but the first `count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../../dart-core/list-class). Such iterables are allowed to ignore
the initial skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skip(int count) => SubListIterable<E>(this, count, null);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/skip.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skip(

1.  [int](../../dart-core/int-class) count

)

::: {.features}
override
:::
:::

Returns an [Iterable](../../dart-core/iterable-class) that provides all
but the first `count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../../dart-core/list-class). Such iterables are allowed to ignore
the initial skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skip(int count) => SubListIterable<E>(this, count, null);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/skip.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
skip(

1.  [int](../../dart-core/int-class) n

)

::: {.features}
inherited
:::
:::

Returns an [Iterable](../../dart-core/iterable-class) that provides all
but the first `count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../../dart-core/list-class). Such iterables are allowed to ignore
the initial skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<String> skip(int n) => readClasses().skip(n);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/skip.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skip(

1.  [int](../../dart-core/int-class) n

)

::: {.features}
override
:::
:::

Returns an [Iterable](../../dart-core/iterable-class) that provides all
but the first `count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../../dart-core/list-class). Such iterables are allowed to ignore
the initial skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skip(int n) {
  return SkipIterable<E>(this, n);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/skip.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<E\> skip(

1.  [int](../int-class) count

)
:::

Returns an [Iterable](../iterable-class) that provides all but the first
`count` elements.

When the returned iterable is iterated, it starts iterating over `this`,
first skipping past the initial `count` elements. If `this` has fewer
than `count` elements, then the resulting Iterable is empty. After that,
the remaining elements are iterated in the same order as in this
iterable.

Some iterables may be able to find later elements without first
iterating through earlier elements, for example when iterating a
[List](../list-class). Such iterables are allowed to ignore the initial
skipped elements.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final result = numbers.skip(4); // (6, 7)
final skipAll = numbers.skip(100); // () - no elements.
```

The `count` must not be negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skip(int count) {
  return SkipIterable<E>(this, count);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/skip.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/skip.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

skip method
===========

::: {.section .multi-line-signature}
[Stream](../stream-class)\<T\> skip(

1.  [int](../../dart-core/int-class) count

)
:::

Skips the first `count` data events from this stream.

Returns a stream that emits the same events as this stream would if
listened to at the same time, except that the first `count` data events
are not emitted. The returned stream is done when this stream is.

If this stream emits fewer than `count` data events before being done,
the returned stream emits no data events.

The returned stream is a broadcast stream if this stream is. For a
broadcast stream, the events are only counted from the time the returned
stream is listened to.

Example:

``` {.language-dart data-language="dart"}
final stream =
    Stream<int>.periodic(const Duration(seconds: 1), (i) => i).skip(7);
stream.forEach(print); // Skips events 0, ..., 6. Outputs events: 7, ...
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<T> skip(int count) {
  return new _SkipStream<T>(this, count);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/skip.html>
:::
