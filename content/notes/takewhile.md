[dart:async](../../dart-async/dart-async-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Stream](../stream-class)\<T\> takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  T element

    )

)
:::

Forwards data events while `test` is successful.

Returns a stream that provides the same events as this stream until
`test` fails for a data event. The returned stream is done when either
this stream is done, or when this stream first emits a data event that
fails `test`.

The `test` call is considered failing if it returns a non-`true` value
or if it throws. If the `test` call throws, the error is emitted as the
last event on the returned streams.

Stops listening to this stream after the accepted elements.

Internally the method cancels its subscription after these elements.
This means that single-subscription (non-broadcast) streams are closed
and cannot be reused after a call to this method.

The returned stream is a broadcast stream if this stream is. For a
broadcast stream, the events are only tested from the time the returned
stream is listened to.

Example:

``` {.language-dart data-language="dart"}
final stream = Stream<int>.periodic(const Duration(seconds: 1), (i) => i)
    .takeWhile((event) => event < 6);
stream.forEach(print); // Outputs events: 0, ..., 5.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<T> takeWhile(bool test(T element)) {
  return new _TakeWhileStream<T>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/takewhile.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) value

    )

)

::: {.features}
inherited
:::
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through [iterator](iterator)
until an element is found where `test(element)` is false. At that point,
the returned iterable stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<String> takeWhile(bool test(String value)) =>
    readClasses().takeWhile(test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/takewhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    )

)

::: {.features}
override
:::
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through
[iterator](../../dart-core/iterable/iterator) until an element is found
where `test(element)` is false. At that point, the returned iterable
stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> takeWhile(bool test(E value)) {
  return TakeWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/takewhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through [iterator](iterator)
until an element is found where `test(element)` is false. At that point,
the returned iterable stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> takeWhile(bool test(E element)) {
  return TakeWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/takewhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    )

)

::: {.features}
override
:::
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through [iterator](iterator)
until an element is found where `test(element)` is false. At that point,
the returned iterable stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> takeWhile(bool test(E value)) {
  return TakeWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/takewhile.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> takeWhile(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
inherited
:::
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through [iterator](iterator)
until an element is found where `test(element)` is false. At that point,
the returned iterable stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> takeWhile(bool test(E element)) => super.takeWhile(test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/takeWhile.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/takewhile.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

takeWhile method
================

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<E\> takeWhile(

1.  [bool](../bool-class) test(
    1.  E value

    )

)
:::

Returns a lazy iterable of the leading elements satisfying `test`.

The filtering happens lazily. Every new iterator of the returned
iterable starts iterating over the elements of `this`.

The elements can be computed by stepping through [iterator](iterator)
until an element is found where `test(element)` is false. At that point,
the returned iterable stops (its `moveNext()` returns false).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.takeWhile((x) => x < 5); // (1, 2, 3)
result = numbers.takeWhile((x) => x != 3); // (1, 2)
result = numbers.takeWhile((x) => x != 4); // (1, 2, 3, 5, 6, 7)
result = numbers.takeWhile((x) => x.isOdd); // (1)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> takeWhile(bool test(E value)) {
  return TakeWhileIterable<E>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/takeWhile.html>
:::
