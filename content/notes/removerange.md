[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
override
:::
:::

Removes a range of elements from the list.

Removes the elements with positions greater than or equal to `start` and
less than `end`, from the list. This reduces the list\'s length by
`end - start`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
print(numbers); // [1, 5]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  RangeError.checkValidRange(start, end, this.length);
  if (end > start) {
    _closeGap(start, end);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/removerange.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
override
:::
:::

Removes a range of elements from the list.

Removes the elements with positions greater than or equal to `start` and
less than `end`, from the list. This reduces the list\'s length by
`end - start`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
print(numbers); // [1, 5]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot removeRange on immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/removerange.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
override
:::
:::

Removes a range of elements from the list.

Removes the elements with positions greater than or equal to `start` and
less than `end`, from the list. This reduces the list\'s length by
`end - start`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
print(numbers); // [1, 5]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void removeRange(int start, int end);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/removerange.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../int-class) start,
2.  [int](../int-class) end

)
:::

Removes a range of elements from the list.

Removes the elements with positions greater than or equal to `start` and
less than `end`, from the list. This reduces the list\'s length by
`end - start`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
print(numbers); // [1, 5]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/removerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/removerange.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(int start, int end) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/removeRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/selection/removerange.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeRange method
==================

::: {.section .multi-line-signature}
void removeRange(

1.  [Range](../range-class) range

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeRange(Range range) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Selection/removeRange.html>
:::
