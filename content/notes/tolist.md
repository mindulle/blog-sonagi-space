[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> toList(

1.  {[bool](../../dart-core/bool-class) growable = true}

)
:::

Creates a [List](../../dart-core/list-class) containing the elements of
this [Iterable](../../dart-core/iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> toList({bool growable = true}) {
  int mask = _table.length - 1;
  int length = (_tail - _head) & mask;
  if (length == 0) return List<E>.empty(growable: growable);

  var list = List<E>.filled(length, first, growable: growable);
  for (int i = 0; i < length; i++) {
    list[i] = _table[(_head + i) & mask] as E;
  }
  return list;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/tolist.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> toList(

1.  {[bool](../../dart-core/bool-class) growable = true}

)

::: {.features}
override
:::
:::

Creates a [List](../../dart-core/list-class) containing the elements of
this [Iterable](../../dart-core/iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> toList({bool growable = true}) {
  if (this.isEmpty) return List<E>.empty(growable: growable);
  var first = this[0];
  var result = List<E>.filled(this.length, first, growable: growable);
  for (int i = 1; i < this.length; i++) {
    result[i] = this[i];
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/tolist.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>
toList(

1.  {[bool](../../dart-core/bool-class) growable = true}

)

::: {.features}
inherited
:::
:::

Creates a [List](../../dart-core/list-class) containing the elements of
this [Iterable](../../dart-core/iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<String> toList({bool growable: true}) =>
    readClasses().toList(growable: growable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/tolist.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> toList(

1.  {[bool](../../dart-core/bool-class) growable = true}

)

::: {.features}
override
:::
:::

Creates a [List](../../dart-core/list-class) containing the elements of
this [Iterable](../../dart-core/iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> toList({bool growable = true}) =>
    List<E>.from(this, growable: growable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/tolist.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> toList(

1.  {[bool](../../dart-core/bool-class) growable = true}

)

::: {.features}
override
:::
:::

Creates a [List](../../dart-core/list-class) containing the elements of
this [Iterable](../../dart-core/iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> toList({bool growable = true}) =>
    List<E>.of(this, growable: growable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/tolist.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[Future](../future-class)\<[List](../../dart-core/list-class)\<T\>\>
toList()
:::

Collects all elements of this stream in a `List`.

Creates a `List<T>` and adds all elements of this stream to the list in
the order they arrive. When this stream ends, the returned future is
completed with that list.

If this stream emits an error, the returned future is completed with
that error, and processing stops.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<List<T>> toList() {
  List<T> result = <T>[];
  _Future<List<T>> future = new _Future<List<T>>();
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
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/toList.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/tolist.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

toList method
=============

::: {.section .multi-line-signature}
[List](../list-class)\<E\> toList(

1.  {[bool](../bool-class) growable = true}

)
:::

Creates a [List](../list-class) containing the elements of this
[Iterable](../iterable-class).

The elements are in iteration order. The list is fixed-length if
`growable` is false.

Example:

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Mars'};
final keysList = planets.keys.toList(growable: false); // [1, 2, 3]
final valuesList =
    planets.values.toList(growable: false); // [Mercury, Venus, Mars]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> toList({bool growable = true}) {
  return List<E>.of(this, growable: growable);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/toList.html>
:::
