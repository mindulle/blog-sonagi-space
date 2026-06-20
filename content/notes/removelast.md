[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
override
:::
:::

Removes and returns the last object in this list.

The list must be growable and non-empty.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeLast(); // toes
print(parts); // [head, shoulder, knees]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  if (length == 0) {
    throw IterableElementError.noElement();
  }
  E result = this[length - 1];
  length--;
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/removelast.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
override
:::
:::

Removes and returns the last object in this list.

The list must be growable and non-empty.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeLast(); // toes
print(parts); // [head, shoulder, knees]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/removelast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
override
:::
:::

Removes and returns the last element of the queue.

The queue must not be empty when this method is called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  if (_head == _tail) throw IterableElementError.noElement();
  _modificationCount++;
  _tail = (_tail - 1) & (_table.length - 1);
  E result = _table[_tail] as E;
  _table[_tail] = null;
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/removelast.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
override
:::
:::

Removes and returns the last object in this list.

The list must be growable and non-empty.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeLast(); // toes
print(parts); // [head, shoulder, knees]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external E removeLast();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/removelast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
override
:::
:::

Removes and returns the last element of the queue.

The queue must not be empty when this method is called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  // Hits sentinel's `_remove` if queue is empty.
  E result = _sentinel._previousLink!._remove();
  _elementCount--;
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/removelast.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()
:::

Removes and returns the last object in this list.

The list must be growable and non-empty.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulder', 'knees', 'toes'];
final retVal = parts.removeLast(); // toes
print(parts); // [head, shoulder, knees]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/removelast.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/removelast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast() {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/removeLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/removelast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeLast method
=================

::: {.section .multi-line-signature}
E removeLast()
:::

Removes and returns the last element of the queue.

The queue must not be empty when this method is called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E removeLast();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/removeLast.html>
:::
