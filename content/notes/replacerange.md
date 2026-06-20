[dart:collection](../../dart-collection/dart-collection-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> newContents

)

::: {.features}
override
:::
:::

Replaces a range of elements with the elements of `replacements`.

Removes the objects in the range from `start` to `end`, then inserts the
elements of `replacements` at `start`.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
final replacements = [6, 7];
numbers.replaceRange(1, 4, replacements);
print(numbers); // [1, 6, 7, 5]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The operation `list.replaceRange(start, end, replacements)` is roughly
equivalent to:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
final replacements = [6, 7];
numbers.insertAll(1, replacements);
print(numbers); // [1, 6, 7, 5]
```

but may be more efficient.

The list must be growable. This method does not work on fixed-length
lists, even when `replacements` has the same number of elements as the
replaced range. In that case use [setRange](setrange) instead.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void replaceRange(int start, int end, Iterable<E> newContents) {
  RangeError.checkValidRange(start, end, this.length);
  if (start == this.length) {
    addAll(newContents);
    return;
  }
  if (newContents is! EfficientLengthIterable) {
    newContents = newContents.toList();
  }
  int removeLength = end - start;
  int insertLength = newContents.length;
  if (removeLength >= insertLength) {
    int insertEnd = start + insertLength;
    this.setRange(start, insertEnd, newContents);
    if (removeLength > insertLength) {
      _closeGap(insertEnd, end);
    }
  } else if (end == this.length) {
    int i = start;
    for (E element in newContents) {
      if (i < end) {
        this[i] = element;
      } else {
        add(element);
      }
      i++;
    }
  } else {
    int delta = insertLength - removeLength;
    int oldLength = this.length;
    int insertEnd = start + insertLength; // aka. end + delta.
    for (int i = oldLength - delta; i < oldLength; ++i) {
      add(this[i > 0 ? i : 0]);
    }
    if (insertEnd < oldLength) {
      this.setRange(insertEnd, oldLength, this, end);
    }
    this.setRange(start, insertEnd, newContents);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/replacerange.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Replaces a range of elements with the elements of `replacements`.

Removes the objects in the range from `start` to `end`, then inserts the
elements of `replacements` at `start`.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
final replacements = [6, 7];
numbers.replaceRange(1, 4, replacements);
print(numbers); // [1, 6, 7, 5]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](../../dart-core/list/length). An empty range (with
`end == start`) is valid.

The operation `list.replaceRange(start, end, replacements)` is roughly
equivalent to:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
final replacements = [6, 7];
numbers.insertAll(1, replacements);
print(numbers); // [1, 6, 7, 5]
```

but may be more efficient.

The list must be growable. This method does not work on fixed-length
lists, even when `replacements` has the same number of elements as the
replaced range. In that case use [setRange](setrange) instead.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot modify an immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/replacerange.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../int-class) start,
2.  [int](../int-class) end,
3.  [Iterable](../iterable-class)\<E\> replacements

)
:::

Replaces a range of elements with the elements of `replacements`.

Removes the objects in the range from `start` to `end`, then inserts the
elements of `replacements` at `start`.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
final replacements = [6, 7];
numbers.replaceRange(1, 4, replacements);
print(numbers); // [1, 6, 7, 5]
```

The provided range, given by `start` and `end`, must be valid. A range
from `start` to `end` is valid if 0 ≤ `start` ≤ `end` ≤
[length](length). An empty range (with `end == start`) is valid.

The operation `list.replaceRange(start, end, replacements)` is roughly
equivalent to:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.removeRange(1, 4);
final replacements = [6, 7];
numbers.insertAll(1, replacements);
print(numbers); // [1, 6, 7, 5]
```

but may be more efficient.

The list must be growable. This method does not work on fixed-length
lists, even when `replacements` has the same number of elements as the
replaced range. In that case use [setRange](setrange) instead.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void replaceRange(int start, int end, Iterable<E> replacements);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/replacerange.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
[String](../string-class) replaceRange(

1.  [int](../int-class) start,
2.  [int](../int-class)? end,
3.  [String](../string-class) replacement

)
:::

Replaces the substring from `start` to `end` with `replacement`.

Creates a new string equivalent to:

``` {.language-dart data-language="dart"}
this.substring(0, start) + replacement + this.substring(end)
```

Example:

``` {.language-dart data-language="dart"}
const string = 'Dart is fun';
final result = string.replaceRange(8, null, 'open source');
print(result); // Dart is open source
```

The `start` and `end` indices must specify a valid range of this string.
That is `0 <= start <= end <= this.length`. If `end` is `null`, it
defaults to [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String replaceRange(int start, int? end, String replacement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Float32x4](../float32x4-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Float64x2](../float64x2-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/replacerange.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<[Int32x4](../int32x4-class)\>
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
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/replaceRange.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/replacerange.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

replaceRange method
===================

::: {.section .multi-line-signature}
void replaceRange(

1.  [int](../../dart-core/int-class) start,
2.  [int](../../dart-core/int-class) end,
3.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void replaceRange(int start, int end, Iterable<E> iterable) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/replaceRange.html>
:::
