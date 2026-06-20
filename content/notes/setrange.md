[dart:collection](../../dart-collection/dart-collection-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
override
:::
:::

Writes some elements of `iterable` into a range of this list.

Copies the objects of `iterable`, skipping `skipCount` objects first,
into the range from `start`, inclusive, to `end`, exclusive, of this
list.

``` {.language-dart data-language="dart"}
final list1 = <int>[1, 2, 3, 4];
final list2 = <int>[5, 6, 7, 8, 9];
// Copies the 4th and 5th items in list2 as the 2nd and 3rd items
// of list1.
const skipCount = 3;
list1.setRange(1, 3, list2, skipCount);
print(list1); // [1, 8, 9, 4]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The `iterable` must have enough objects to fill the range from `start`
to `end` after skipping `skipCount` objects.

If `iterable` is this list, the operation correctly copies the elements
originally in the range from `skipCount` to `skipCount + (end - start)`
to the range `start` to `end`, even if the two ranges overlap.

If `iterable` depends on this list in some other way, no guarantees are
made.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  RangeError.checkValidRange(start, end, this.length);
  int length = end - start;
  if (length == 0) return;
  RangeError.checkNotNegative(skipCount, "skipCount");

  List<E> otherList;
  int otherStart;
  // TODO(floitsch): Make this accept more.
  if (iterable is List<E>) {
    otherList = iterable;
    otherStart = skipCount;
  } else {
    otherList = iterable.skip(skipCount).toList(growable: false);
    otherStart = 0;
  }
  if (otherStart + length > otherList.length) {
    throw IterableElementError.tooFew();
  }
  if (otherStart < start) {
    // Copy backwards to ensure correct copy if [from] is this.
    for (int i = length - 1; i >= 0; i--) {
      this[start + i] = otherList[otherStart + i];
    }
  } else {
    for (int i = 0; i < length; i++) {
      this[start + i] = otherList[otherStart + i];
    }
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/setrange.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
override
:::
:::

Writes some elements of `iterable` into a range of this list.

Copies the objects of `iterable`, skipping `skipCount` objects first,
into the range from `start`, inclusive, to `end`, exclusive, of this
list.

``` {.language-dart data-language="dart"}
final list1 = <int>[1, 2, 3, 4];
final list2 = <int>[5, 6, 7, 8, 9];
// Copies the 4th and 5th items in list2 as the 2nd and 3rd items
// of list1.
const skipCount = 3;
list1.setRange(1, 3, list2, skipCount);
print(list1); // [1, 8, 9, 4]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The `iterable` must have enough objects to fill the range from `start`
to `end` after skipping `skipCount` objects.

If `iterable` is this list, the operation correctly copies the elements
originally in the range from `skipCount` to `skipCount + (end - start)`
to the range `start` to `end`, even if the two ranges overlap.

If `iterable` depends on this list in some other way, no guarantees are
made.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot setRange on immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/setrange.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
override
:::
:::

Writes some elements of `iterable` into a range of this list.

Copies the objects of `iterable`, skipping `skipCount` objects first,
into the range from `start`, inclusive, to `end`, exclusive, of this
list.

``` {.language-dart data-language="dart"}
final list1 = <int>[1, 2, 3, 4];
final list2 = <int>[5, 6, 7, 8, 9];
// Copies the 4th and 5th items in list2 as the 2nd and 3rd items
// of list1.
const skipCount = 3;
list1.setRange(1, 3, list2, skipCount);
print(list1); // [1, 8, 9, 4]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

The `iterable` must have enough objects to fill the range from `start`
to `end` after skipping `skipCount` objects.

If `iterable` is this list, the operation correctly copies the elements
originally in the range from `skipCount` to `skipCount + (end - start)`
to the range `start` to `end`, even if the two ranges overlap.

If `iterable` depends on this list in some other way, no guarantees are
made.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void setRange(int start, int end, Iterable<E> iterable,
    [int skipCount = 0]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/setrange.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../int-class) start,
2.  [int](../int-class) end,
3.  [Iterable](../iterable-class)\<E\> iterable,
4.  \[[int](../int-class) skipCount = 0\]

)
:::

Writes some elements of `iterable` into a range of this list.

Copies the objects of `iterable`, skipping `skipCount` objects first,
into the range from `start`, inclusive, to `end`, exclusive, of this
list.

``` {.language-dart data-language="dart"}
final list1 = <int>[1, 2, 3, 4];
final list2 = <int>[5, 6, 7, 8, 9];
// Copies the 4th and 5th items in list2 as the 2nd and 3rd items
// of list1.
const skipCount = 3;
list1.setRange(1, 3, list2, skipCount);
print(list1); // [1, 8, 9, 4]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

The `iterable` must have enough objects to fill the range from `start`
to `end` after skipping `skipCount` objects.

If `iterable` is this list, the operation correctly copies the elements
originally in the range from `skipCount` to `skipCount + (end - start)`
to the range `start` to `end`, even if the two ranges overlap.

If `iterable` depends on this list in some other way, no guarantees are
made.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Float32x4](../float32x4-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Float64x2](../float64x2-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/setrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Int32x4](../int32x4-class)\>
    iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/setRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/setrange.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

setRange method
===============

::: {.section .multi-line-signature}
void setRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable,
4.  \[[int](../../dart-core/int-class) skipCount = 0\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/setRange.html>
:::
