[dart:collection](../../dart-collection/dart-collection-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

1.  [int](../../dart-core/int-class) index,
2.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Overwrites elements with the objects of `iterable`.

The elements of `iterable` are written into this list, starting at
position `index`. This operation does not increase the length of the
list.

The `index` must be non-negative and no greater than
[length](../../dart-core/list/length).

The `iterable` must not have more elements than what can fit from
`index` to [length](../../dart-core/list/length).

If `iterable` is based on this list, its values may change *during* the
`setAll` operation.

``` {.language-dart data-language="dart"}
final list = <String>['a', 'b', 'c', 'd'];
list.setAll(1, ['bee', 'sea']);
print(list); // [a, bee, sea, d]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setAll(int index, Iterable<E> iterable) {
  if (iterable is List) {
    setRange(index, index + iterable.length, iterable);
  } else {
    for (E element in iterable) {
      this[index++] = element;
    }
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/setall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

1.  [int](../../dart-core/int-class) index,
2.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Overwrites elements with the objects of `iterable`.

The elements of `iterable` are written into this list, starting at
position `index`. This operation does not increase the length of the
list.

The `index` must be non-negative and no greater than
[length](../../dart-core/list/length).

The `iterable` must not have more elements than what can fit from
`index` to [length](../../dart-core/list/length).

If `iterable` is based on this list, its values may change *during* the
`setAll` operation.

``` {.language-dart data-language="dart"}
final list = <String>['a', 'b', 'c', 'd'];
list.setAll(1, ['bee', 'sea']);
print(list); // [a, bee, sea, d]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setAll(int index, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/setall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

1.  [int](../int-class) index,
2.  [Iterable](../iterable-class)\<E\> iterable

)
:::

Overwrites elements with the objects of `iterable`.

The elements of `iterable` are written into this list, starting at
position `index`. This operation does not increase the length of the
list.

The `index` must be non-negative and no greater than [length](length).

The `iterable` must not have more elements than what can fit from
`index` to [length](length).

If `iterable` is based on this list, its values may change *during* the
`setAll` operation.

``` {.language-dart data-language="dart"}
final list = <String>['a', 'b', 'c', 'd'];
list.setAll(1, ['bee', 'sea']);
print(list); // [a, bee, sea, d]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setAll(int index, Iterable<E> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/setall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/setAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/setall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

setAll method
=============

::: {.section .multi-line-signature}
void setAll(

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
void setAll(int at, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/setAll.html>
:::
