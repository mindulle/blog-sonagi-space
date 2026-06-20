[dart:svg](../../dart-svg/dart-svg-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) value

    )

)

::: {.features}
inherited
:::
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new
[Iterator](../../dart-core/iterator-class) of the returned iterable
iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<String> skipWhile(bool test(String value)) =>
    readClasses().skipWhile(test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/skipwhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    )

)

::: {.features}
override
:::
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new
[Iterator](../../dart-core/iterator-class) of the returned iterable
iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skipWhile(bool test(E value)) {
  return SkipWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/skipwhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new
[Iterator](../../dart-core/iterator-class) of the returned iterable
iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skipWhile(bool test(E element)) {
  return SkipWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/skipwhile.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Stream](../stream-class)\<T\> skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  T element

    )

)
:::

Skip data events from this stream while they are matched by `test`.

Returns a stream that emits the same events as this stream, except that
data events are not emitted until a data event fails `test`. The test
fails when called with a data event if it returns a non-`true` value or
if the call to `test` throws. If the call throws, the error is emitted
as an error event on the returned stream instead of the data event,
otherwise the event that made `test` return non-true is emitted as the
first data event.

Error and done events are provided by the returned stream unmodified.

The returned stream is a broadcast stream if this stream is. For a
broadcast stream, the events are only tested from the time the returned
stream is listened to.

Example:

``` {.language-dart data-language="dart"}
final stream = Stream<int>.periodic(const Duration(seconds: 1), (i) => i)
    .take(10)
    .skipWhile((x) => x < 5);
stream.forEach(print); // Outputs events: 5, ..., 9.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<T> skipWhile(bool test(T element)) {
  return new _SkipWhileStream<T>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/skipwhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    )

)

::: {.features}
override
:::
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new
[Iterator](../../dart-core/iterator-class) of the returned iterable
iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skipWhile(bool test(E value)) {
  return SkipWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/skipwhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> skipWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
inherited
:::
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new
[Iterator](../../dart-core/iterator-class) of the returned iterable
iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skipWhile(bool test(E element)) => super.skipWhile(test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/skipWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/skipwhile.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

skipWhile method
================

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<E\> skipWhile(

1.  [bool](../bool-class) test(
    1.  E value

    )

)
:::

Returns an `Iterable` that skips leading elements while `test` is
satisfied.

The filtering happens lazily. Every new [Iterator](../iterator-class) of
the returned iterable iterates over all elements of `this`.

The returned iterable provides elements by iterating this iterable, but
skipping over all initial elements where `test(element)` returns true.
If all elements satisfy `test` the resulting iterable is empty,
otherwise it iterates the remaining elements in their original order,
starting with the first element for which `test(element)` returns
`false`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.skipWhile((x) => x < 5); // (5, 6, 7)
result = numbers.skipWhile((x) => x != 3); // (3, 5, 6, 7)
result = numbers.skipWhile((x) => x != 4); // ()
result = numbers.skipWhile((x) => x.isOdd); // (2, 3, 5, 6, 7)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> skipWhile(bool test(E value)) {
  return SkipWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/skipWhile.html>
:::
