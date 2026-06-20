[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[E? fill\]

)

::: {.features}
override
:::
:::

Overwrites a range of elements with `fillValue`.

Sets the positions greater than or equal to `start` and less than `end`,
to `fillValue`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

If the element type is not nullable, the `fillValue` must be provided
and must be non-`null`.

Example:

``` {.language-dart data-language="dart"}
final words = List.filled(5, 'old');
print(words); // [old, old, old, old, old]
words.fillRange(1, 3, 'new');
print(words); // [old, new, new, old, old]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fill]) {
  // Hoist the case to fail eagerly if the user provides an invalid `null`
  // value (or omits it) when E is a non-nullable type.
  E value = fill as E;
  RangeError.checkValidRange(start, end, this.length);
  for (int i = start; i < end; i++) {
    this[i] = value;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/fillrange.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[E? fillValue\]

)

::: {.features}
override
:::
:::

Overwrites a range of elements with `fillValue`.

Sets the positions greater than or equal to `start` and less than `end`,
to `fillValue`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

If the element type is not nullable, the `fillValue` must be provided
and must be non-`null`.

Example:

``` {.language-dart data-language="dart"}
final words = List.filled(5, 'old');
print(words); // [old, old, old, old, old]
words.fillRange(1, 3, 'new');
print(words); // [old, new, new, old, old]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/fillrange.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../int-class) start,
2.  [int](../int-class) end,
3.  \[E? fillValue\]

)
:::

Overwrites a range of elements with `fillValue`.

Sets the positions greater than or equal to `start` and less than `end`,
to `fillValue`.

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

If the element type is not nullable, the `fillValue` must be provided
and must be non-`null`.

Example:

``` {.language-dart data-language="dart"}
final words = List.filled(5, 'old');
print(words); // [old, old, old, old, old]
words.fillRange(1, 3, 'new');
print(words); // [old, new, new, old, old]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[double](../../dart-core/double-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[double](../../dart-core/double-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[Float32x4](../float32x4-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[Float64x2](../float64x2-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[int](../../dart-core/int-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/fillrange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[[Int32x4](../int32x4-class)? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/fillRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/fillrange.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fillRange method
================

::: {.section .multi-line-signature}
void fillRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  \[E? fillValue\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void fillRange(int start, int end, [E? fillValue]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/fillRange.html>
:::
