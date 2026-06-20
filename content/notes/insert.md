[dart:collection](../../dart-collection/dart-collection-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  E element

)

::: {.features}
override
:::
:::

Inserts `element` at position `index` in this list.

This increases the length of the list by one and shifts all objects at
or after the index towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](../../dart-core/list/length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
const index = 2;
numbers.insert(index, 10);
print(numbers); // [1, 2, 10, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  checkNotNullable(index, "index");
  var length = this.length;
  RangeError.checkValueInInterval(index, 0, length, "index");
  add(element);
  if (index != length) {
    setRange(index + 1, length + 1, this, index);
    this[index] = element;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/insert.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  E element

)

::: {.features}
override
:::
:::

Inserts `element` at position `index` in this list.

This increases the length of the list by one and shifts all objects at
or after the index towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](../../dart-core/list/length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
const index = 2;
numbers.insert(index, 10);
print(numbers); // [1, 2, 10, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/insert.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  E element

)

::: {.features}
override
:::
:::

Inserts `element` at position `index` in this list.

This increases the length of the list by one and shifts all objects at
or after the index towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
const index = 2;
numbers.insert(index, 10);
print(numbers); // [1, 2, 10, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void insert(int index, E element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/insert.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../int-class) index,
2.  E element

)
:::

Inserts `element` at position `index` in this list.

This increases the length of the list by one and shifts all objects at
or after the index towards the end of the list.

The list must be growable. The `index` value must be non-negative and no
greater than [length](length).

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4];
const index = 2;
numbers.insert(index, 10);
print(numbers); // [1, 2, 10, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [Float32x4](../float32x4-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [Float64x2](../float64x2-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/insert.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  [Int32x4](../int32x4-class) element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/insert.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

insert method
=============

::: {.section .multi-line-signature}
void insert(

1.  [int](../../dart-core/int-class) index,
2.  E element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void insert(int index, E element) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/insert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/INSERT.md)

# INSERT Statement

The INSERT statement in SQL is used to add new rows of data into a table. It specifies the table to which you want to add data, and the values you want to insert into each column of that table. You can insert a single row at a time or multiple rows in a single statement. It's a fundamental command f
or populating your database tables with information.

Visit the following resources to learn more:

- [@video@SQL INSERT Statement](https://www.youtube.com/watch?v=Yp1MKeIG-M4)

## 관련 로드맵
- [[sql|sql]]
