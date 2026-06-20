[dart:collection](../../dart-collection/dart-collection-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) index,
2.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Inserts all objects of `iterable` at position `index` in this list.

This increases the length of the list by the length of `iterable` and
shifts all later objects towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](../../dart-core/list/length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
final insertItems = [10, 11];
numbers.insertAll(2, insertItems);
print(numbers); // [1, 2, 10, 11, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int index, Iterable<E> iterable) {
  RangeError.checkValueInInterval(index, 0, length, "index");
  if (index == length) {
    addAll(iterable);
    return;
  }
  if (iterable is! EfficientLengthIterable || identical(iterable, this)) {
    iterable = iterable.toList();
  }
  int insertionLength = iterable.length;
  if (insertionLength == 0) {
    return;
  }
  // There might be errors after the length change, in which case the list
  // will end up being modified but the operation not complete. Unless we
  // always go through a "toList" we can't really avoid that.
  int oldLength = length;
  for (int i = oldLength - insertionLength; i < oldLength; ++i) {
    add(this[i > 0 ? i : 0]);
  }
  if (iterable.length != insertionLength) {
    // If the iterable's length is linked to this list's length somehow,
    // we can't insert one in the other.
    this.length -= insertionLength;
    throw ConcurrentModificationError(iterable);
  }
  int oldCopyStart = index + insertionLength;
  if (oldCopyStart < oldLength) {
    setRange(oldCopyStart, oldLength, this, index);
  }
  setAll(index, iterable);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/insertall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) index,
2.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Inserts all objects of `iterable` at position `index` in this list.

This increases the length of the list by the length of `iterable` and
shifts all later objects towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](../../dart-core/list/length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
final insertItems = [10, 11];
numbers.insertAll(2, insertItems);
print(numbers); // [1, 2, 10, 11, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int index, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/insertall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../int-class) index,
2.  [Iterable](../iterable-class)\<E\> iterable

)
:::

Inserts all objects of `iterable` at position `index` in this list.

This increases the length of the list by the length of `iterable` and
shifts all later objects towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
final insertItems = [10, 11];
numbers.insertAll(2, insertItems);
print(numbers); // [1, 2, 10, 11, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int index, Iterable<E> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[Float32x4](../float32x4-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[Float64x2](../float64x2-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/insertall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<[Int32x4](../int32x4-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/insertAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/insertall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

insertAll method
================

::: {.section .multi-line-signature}
void insertAll(

1.  [int](../../dart-core/int-class) at,
2.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insertAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/insertAll.html>
:::
