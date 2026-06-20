[dart:collection](../../dart-collection/dart-collection-library){._links-link}

expand\<T\> method
==================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<T\> expand\<T\>(

1.  [Iterable](../../dart-core/iterable-class)\<T\> toElements(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Expands each element of this [Iterable](../../dart-core/iterable-class)
into zero or more elements.

The resulting Iterable runs through the elements returned by
`toElements` for each element of this, in iteration order.

The returned [Iterable](../../dart-core/iterable-class) is lazy, and
calls `toElements` for each element of this iterable every time the
returned iterable is iterated.

Example:

``` {.language-dart data-language="dart"}
Iterable<int> count(int n) sync* {
  for (var i = 1; i <= n; i++) {
    yield i;
   }
 }

var numbers = [1, 3, 0, 2];
print(numbers.expand(count)); // (1, 1, 2, 3, 1, 2)
```

Equivalent to:

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E e)) sync* {
  for (var value in this) {
    yield* toElements(value);
  }
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E element)) =>
    ExpandIterable<E, T>(this, toElements);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/expand.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

expand\<T\> method
==================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<T\> expand\<T\>(

1.  [Iterable](../../dart-core/iterable-class)\<T\> f(
    1.  [String](../../dart-core/string-class) element

    )

)

::: {.features}
inherited
:::
:::

Expands each element of this [Iterable](../../dart-core/iterable-class)
into zero or more elements.

The resulting Iterable runs through the elements returned by
`toElements` for each element of this, in iteration order.

The returned [Iterable](../../dart-core/iterable-class) is lazy, and
calls `toElements` for each element of this iterable every time the
returned iterable is iterated.

Example:

``` {.language-dart data-language="dart"}
Iterable<int> count(int n) sync* {
  for (var i = 1; i <= n; i++) {
    yield i;
   }
 }

var numbers = [1, 3, 0, 2];
print(numbers.expand(count)); // (1, 1, 2, 3, 1, 2)
```

Equivalent to:

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E e)) sync* {
  for (var value in this) {
    yield* toElements(value);
  }
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> f(String element)) =>
    readClasses().expand<T>(f);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/expand.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

expand\<T\> method
==================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<T\> expand\<T\>(

1.  [Iterable](../../dart-core/iterable-class)\<T\> f(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Expands each element of this [Iterable](../../dart-core/iterable-class)
into zero or more elements.

The resulting Iterable runs through the elements returned by
`toElements` for each element of this, in iteration order.

The returned [Iterable](../../dart-core/iterable-class) is lazy, and
calls `toElements` for each element of this iterable every time the
returned iterable is iterated.

Example:

``` {.language-dart data-language="dart"}
Iterable<int> count(int n) sync* {
  for (var i = 1; i <= n; i++) {
    yield i;
   }
 }

var numbers = [1, 3, 0, 2];
print(numbers.expand(count)); // (1, 1, 2, 3, 1, 2)
```

Equivalent to:

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E e)) sync* {
  for (var value in this) {
    yield* toElements(value);
  }
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> f(E element)) =>
    ExpandIterable<E, T>(this, f);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/expand.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

expand\<T\> method
==================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<T\> expand\<T\>(

1.  [Iterable](../../dart-core/iterable-class)\<T\> f(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Expands each element of this [Iterable](../../dart-core/iterable-class)
into zero or more elements.

The resulting Iterable runs through the elements returned by
`toElements` for each element of this, in iteration order.

The returned [Iterable](../../dart-core/iterable-class) is lazy, and
calls `toElements` for each element of this iterable every time the
returned iterable is iterated.

Example:

``` {.language-dart data-language="dart"}
Iterable<int> count(int n) sync* {
  for (var i = 1; i <= n; i++) {
    yield i;
   }
 }

var numbers = [1, 3, 0, 2];
print(numbers.expand(count)); // (1, 1, 2, 3, 1, 2)
```

Equivalent to:

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E e)) sync* {
  for (var value in this) {
    yield* toElements(value);
  }
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> f(E element)) =>
    ExpandIterable<E, T>(this, f);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/expand.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

expand\<S\> method
==================

::: {.section .multi-line-signature}
[Stream](../stream-class)\<S\> expand\<S\>(

1.  [Iterable](../../dart-core/iterable-class)\<S\> convert(
    1.  T element

    )

)
:::

Transforms each element of this stream into a sequence of elements.

Returns a new stream where each element of this stream is replaced by
zero or more data events. The event values are provided as an
[Iterable](../../dart-core/iterable-class) by a call to `convert` with
the element as argument, and the elements of that iterable is emitted in
iteration order. If calling `convert` throws, or if the iteration of the
returned values throws, the error is emitted on the returned stream and
iteration ends for that element of this stream.

Error events and the done event of this stream are forwarded directly to
the returned stream.

The returned stream is a broadcast stream if this stream is. If a
broadcast stream is listened to more than once, each subscription will
individually call `convert` and expand the events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<S> expand<S>(Iterable<S> convert(T element)) {
  return new _ExpandStream<T, S>(this, convert);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/expand.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

expand\<T\> method
==================

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<T\> expand\<T\>(

1.  [Iterable](../iterable-class)\<T\> toElements(
    1.  E element

    )

)
:::

Expands each element of this [Iterable](../iterable-class) into zero or
more elements.

The resulting Iterable runs through the elements returned by
`toElements` for each element of this, in iteration order.

The returned [Iterable](../iterable-class) is lazy, and calls
`toElements` for each element of this iterable every time the returned
iterable is iterated.

Example:

``` {.language-dart data-language="dart"}
Iterable<int> count(int n) sync* {
  for (var i = 1; i <= n; i++) {
    yield i;
   }
 }

var numbers = [1, 3, 0, 2];
print(numbers.expand(count)); // (1, 1, 2, 3, 1, 2)
```

Equivalent to:

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E e)) sync* {
  for (var value in this) {
    yield* toElements(value);
  }
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<T> expand<T>(Iterable<T> toElements(E element)) =>
    ExpandIterable<E, T>(this, toElements);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/range/expand.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

expand method
=============

::: {.section .multi-line-signature}
void expand(

1.  [String](../../dart-core/string-class)? unit

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void expand(String? unit) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Range/expand.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/expand.md)

# Expand

The `expand` command converts tabs to spaces in text files, useful for consistent formatting across different systems and editors. Default conversion is 8 spaces per tab. Use `expand filename` for basic conversion or `expand -t 4 filename` to specify 4 spaces per tab. Essential for maintaining code 
readability and consistent indentation in shell scripts.

Visit the following resources to learn more:

- [@article@expand — Linux manual page](https://www.man7.org/linux/man-pages/man1/expand.1.html)
- [@article@How to Use the 'expand' Command (with examples)](https://commandmasters.com/commands/expand-common/)

## 관련 로드맵
- [[Linux|linux]]
