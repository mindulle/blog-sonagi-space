[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
E removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Removes the object at position `index` from this list.

This method reduces the length of `this` by one and moves all later
objects down by one position.

Returns the removed value.

The `index` must be in the range `0 ≤ index < length`. The list must be
growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeAt(2); // knees
print(parts); // [head, shoulder, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  E result = this[index];
  _closeGap(index, index + 1);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/removeat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
E removeAt(

1.  [int](../../dart-core/int-class) pos

)

::: {.features}
override
:::
:::

Removes the object at position `index` from this list.

This method reduces the length of `this` by one and moves all later
objects down by one position.

Returns the removed value.

The `index` must be in the range `0 ≤ index < length`. The list must be
growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeAt(2); // knees
print(parts); // [head, shoulder, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int pos) {
  throw new UnsupportedError("Cannot remove from immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/removeat.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
E removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Removes the object at position `index` from this list.

This method reduces the length of `this` by one and moves all later
objects down by one position.

Returns the removed value.

The `index` must be in the range `0 ≤ index < length`. The list must be
growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeAt(2); // knees
print(parts); // [head, shoulder, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external E removeAt(int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/removeat.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
E removeAt(

1.  [int](../int-class) index

)
:::

Removes the object at position `index` from this list.

This method reduces the length of `this` by one and moves all later
objects down by one position.

Returns the removed value.

The `index` must be in the range `0 ≤ index < length`. The list must be
growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeAt(2); // knees
print(parts); // [head, shoulder, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/removeat.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/removeAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/removeat.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeAt method
===============

::: {.section .multi-line-signature}
E removeAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeAt(int index) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/removeAt.html>
:::
