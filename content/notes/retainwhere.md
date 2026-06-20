[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all elements of this set that fail to satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.retainWhere(
    (element) => element.startsWith('B') || element.startsWith('C'));
print(characters); // {B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  List<Object?> toRemove = [];
  for (E element in this) {
    if (!test(element)) toRemove.add(element);
  }
  removeAll(toRemove);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/retainwhere.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all objects from this list that fail to satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.retainWhere((item) => item.length == 3);
print(numbers); // [one, two]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all objects from this list that fail to satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.retainWhere((item) => item.length == 3);
print(numbers); // [one, two]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  _filter(test, true);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/retainwhere.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) name

    )

)

::: {.features}
inherited
:::
:::

Removes all elements of this set that fail to satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.retainWhere(
    (element) => element.startsWith('B') || element.startsWith('C'));
print(characters); // {B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(String name)) {
  modify((s) => s.retainWhere(test));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/retainwhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../bool-class) test(
    1.  E element

    )

)
:::

Removes all objects from this list that fail to satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.retainWhere((item) => item.length == 3);
print(numbers); // [one, two]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/retainwhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../bool-class) test(
    1.  E element

    )

)
:::

Removes all elements of this set that fail to satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.retainWhere(
    (element) => element.startsWith('B') || element.startsWith('C'));
print(characters); // {B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Remove all elements not matched by `test`.

This method is inefficient since it works by repeatedly removing single
elements, each of which can take linear time.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  _filterWhere(test, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [double](../../dart-core/double-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [double](../../dart-core/double-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [Float32x4](../float32x4-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [Float64x2](../float64x2-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [int](../../dart-core/int-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/retainwhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [Int32x4](../int32x4-class) element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all elements not matched by `test` from the queue.

The `test` function must not throw or modify the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  _filter(test, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element)) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/retainWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/retainwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

retainWhere method
==================

::: {.section .multi-line-signature}
void retainWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)
:::

Removes all elements not matched by `test` from the queue.

The `test` function must not throw or modify the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void retainWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/retainWhere.html>
:::
