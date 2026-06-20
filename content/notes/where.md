[dart:svg](../../dart-svg/dart-svg-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
where(

1.  [bool](../../dart-core/bool-class) f(
    1.  [String](../../dart-core/string-class) element

    )

)

::: {.features}
inherited
:::
:::

Returns a new lazy [Iterable](../../dart-core/iterable-class) with all
elements that satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../../dart-core/iterable-class) is not iterated
over, the supplied function `test` will not be invoked. Iterating will
not cache results, and thus iterating multiple times over the returned
[Iterable](../../dart-core/iterable-class) may invoke the supplied
function `test` multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<String> where(bool f(String element)) => readClasses().where(f);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/where.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> where(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Returns a new lazy [Iterable](../../dart-core/iterable-class) with all
elements that satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](../../dart-core/iterable/iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../../dart-core/iterable-class) is not iterated
over, the supplied function `test` will not be invoked. Iterating will
not cache results, and thus iterating multiple times over the returned
[Iterable](../../dart-core/iterable-class) may invoke the supplied
function `test` multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> where(bool test(E element)) => WhereIterable<E>(this, test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/where.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> where(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Returns a new lazy [Iterable](../../dart-core/iterable-class) with all
elements that satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../../dart-core/iterable-class) is not iterated
over, the supplied function `test` will not be invoked. Iterating will
not cache results, and thus iterating multiple times over the returned
[Iterable](../../dart-core/iterable-class) may invoke the supplied
function `test` multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> where(bool test(E element)) => WhereIterable<E>(this, test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/where.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> where(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
inherited
:::
:::

Returns a new lazy [Iterable](../../dart-core/iterable-class) with all
elements that satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../../dart-core/iterable-class) is not iterated
over, the supplied function `test` will not be invoked. Iterating will
not cache results, and thus iterating multiple times over the returned
[Iterable](../../dart-core/iterable-class) may invoke the supplied
function `test` multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> where(bool test(E element)) => super.where(test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/where.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> where(

1.  [bool](../../dart-core/bool-class) f(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Returns a new lazy [Iterable](../../dart-core/iterable-class) with all
elements that satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../../dart-core/iterable-class) is not iterated
over, the supplied function `test` will not be invoked. Iterating will
not cache results, and thus iterating multiple times over the returned
[Iterable](../../dart-core/iterable-class) may invoke the supplied
function `test` multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> where(bool f(E element)) => WhereIterable<E>(this, f);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/where.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<E\> where(

1.  [bool](../bool-class) test(
    1.  E element

    )

)
:::

Returns a new lazy [Iterable](../iterable-class) with all elements that
satisfy the predicate `test`.

The matching elements have the same order in the returned iterable as
they have in [iterator](iterator).

This method returns a view of the mapped elements. As long as the
returned [Iterable](../iterable-class) is not iterated over, the
supplied function `test` will not be invoked. Iterating will not cache
results, and thus iterating multiple times over the returned
[Iterable](../iterable-class) may invoke the supplied function `test`
multiple times on the same element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.where((x) => x < 5); // (1, 2, 3)
result = numbers.where((x) => x > 5); // (6, 7)
result = numbers.where((x) => x.isEven); // (2, 6)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> where(bool test(E element)) => WhereIterable<E>(this, test);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/where.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

where method
============

::: {.section .multi-line-signature}
[Stream](../stream-class)\<T\> where(

1.  [bool](../../dart-core/bool-class) test(
    1.  T event

    )

)
:::

Creates a new stream from this stream that discards some elements.

The new stream sends the same error and done events as this stream, but
it only sends the data events that satisfy the `test`.

If the `test` function throws, the data event is dropped and the error
is emitted on the returned stream instead.

The returned stream is a broadcast stream if this stream is. If a
broadcast stream is listened to more than once, each subscription will
individually perform the `test`.

Example:

``` {.language-dart data-language="dart"}
final stream =
    Stream<int>.periodic(const Duration(seconds: 1), (count) => count)
        .take(10);

final customStream = stream.where((event) => event > 3 && event <= 6);
customStream.listen(print); // Outputs event values: 4,5,6.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<T> where(bool test(T event)) {
  return new _WhereStream<T>(this, test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/where.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/WHERE.md)

# WHERE Clause in SELECT Statements

The WHERE clause is a fundamental part of the SELECT statement in SQL. It filters the rows returned by a query based on a specified condition.  Essentially, it allows you to retrieve only the data that meets certain criteria, enabling you to focus on specific subsets of information within your datab
ase tables.

Visit the following resources to learn more:

- [@article@WHERE Clause](https://www.w3schools.com/sql/sql_where.asp)
- [@video@How to filter with the WHERE clause in SQL](https://www.youtube.com/watch?v=4Uv0o8IBqw0)

## 관련 로드맵
- [[sql|sql]]
