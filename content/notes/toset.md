[dart:async](../../dart-async/dart-async-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Future](../future-class)\<[Set](../../dart-core/set-class)\<T\>\>
toSet()
:::

Collects the data of this stream in a `Set`.

Creates a `Set<T>` and adds all elements of this stream to the set. in
the order they arrive. When this stream ends, the returned future is
completed with that set.

The returned set is the same type as created by `<T>{}`. If another type
of set is needed, either use [forEach](foreach) to add each element to
the set, or use `toList().then((list) => new SomeOtherSet.from(list))`
to create the set.

If this stream emits an error, the returned future is completed with
that error, and processing stops.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Set<T>> toSet() {
  Set<T> result = new Set<T>();
  _Future<Set<T>> future = new _Future<Set<T>>();
  this.listen(
      (T data) {
        result.add(data);
      },
      onError: future._completeError,
      onDone: () {
        future._complete(result);
      },
      cancelOnError: true);
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
inherited
:::
:::

Creates a [Set](../../dart-core/set-class) containing the same elements
as this iterable.

The set may contain fewer elements than the iterable, if the iterable
contains an element more than once, or it contains one or more elements
that are equal. The order of the elements in the set is not guaranteed
to be the same as for the iterable.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final valueSet = planets.values.toSet(); // {Mercury, Venus, Mars}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() {
  Set<E> result = Set<E>();
  for (int i = 0; i < length; i++) {
    result.add(elementAt(i));
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../../dart-core/set-class) containing the same elements
as this iterable.

The set may contain fewer elements than the iterable, if the iterable
contains an element more than once, or it contains one or more elements
that are equal. The order of the elements in the set is not guaranteed
to be the same as for the iterable.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final valueSet = planets.values.toSet(); // {Mercury, Venus, Mars}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() {
  Set<E> result = Set<E>();
  for (int i = 0; i < length; i++) {
    result.add(this[i]);
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../../dart-core/set-class) containing the same elements
as this iterable.

The set may contain fewer elements than the iterable, if the iterable
contains an element more than once, or it contains one or more elements
that are equal. The order of the elements in the set is not guaranteed
to be the same as for the iterable.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final valueSet = planets.values.toSet(); // {Mercury, Venus, Mars}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() => Set<E>.from(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../../dart-core/set-class) containing the same elements
as this iterable.

The set may contain fewer elements than the iterable, if the iterable
contains an element more than once, or it contains one or more elements
that are equal. The order of the elements in the set is not guaranteed
to be the same as for the iterable.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final valueSet = planets.values.toSet(); // {Mercury, Venus, Mars}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() => _clone();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/toset.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../set-class)\<E\> toSet()
:::

Creates a [Set](../set-class) containing the same elements as this
iterable.

The set may contain fewer elements than the iterable, if the iterable
contains an element more than once, or it contains one or more elements
that are equal. The order of the elements in the set is not guaranteed
to be the same as for the iterable.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final valueSet = planets.values.toSet(); // {Mercury, Venus, Mars}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() => Set<E>.of(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/toset.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<[String](../../dart-core/string-class)\>
toSet()

::: {.features}
inherited
:::
:::

Creates a [Set](../../dart-core/set-class) with the same elements and
behavior as this `Set`.

The returned set behaves the same as this set with regard to adding and
removing elements. It initially contains the same elements. If this set
specifies an ordering of the elements, the returned set will have the
same order.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<String> toSet() => readClasses().toSet();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../../dart-core/set-class) with the same elements and
behavior as this `Set`.

The returned set behaves the same as this set with regard to adding and
removing elements. It initially contains the same elements. If this set
specifies an ordering of the elements, the returned set will have the
same order.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet() => _source.toSet();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/toset.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../../dart-core/set-class) with the same elements and
behavior as this `Set`.

The returned set behaves the same as this set with regard to adding and
removing elements. It initially contains the same elements. If this set
specifies an ordering of the elements, the returned set will have the
same order.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/toSet.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/toset.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

toSet method
============

::: {.section .multi-line-signature}
[Set](../set-class)\<E\> toSet()

::: {.features}
override
:::
:::

Creates a [Set](../set-class) with the same elements and behavior as
this `Set`.

The returned set behaves the same as this set with regard to adding and
removing elements. It initially contains the same elements. If this set
specifies an ordering of the elements, the returned set will have the
same order.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<E> toSet();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/toSet.html>
:::
