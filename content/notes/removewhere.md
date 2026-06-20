[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  K key,
    2.  V value

    )

)

::: {.features}
override
:::
:::

Removes all entries of this map that satisfy the given `test`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.removeWhere((key, value) => value.startsWith('E'));
print(terrestrial); // {1: Mercury, 2: Venus}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(K key, V value)) {
  var keysToRemove = <K>[];
  for (var key in keys) {
    if (test(key, this[key] as V)) keysToRemove.add(key);
  }
  for (var key in keysToRemove) {
    this.remove(key);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/removewhere.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all objects from this list that satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.removeWhere((item) => item.length == 3);
print(numbers); // [three, four]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all elements of this set that satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeWhere((element) => element.startsWith('B'));
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element)) {
  List<Object?> toRemove = [];
  for (E element in this) {
    if (test(element)) toRemove.add(element);
  }
  removeAll(toRemove);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all objects from this list that satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.removeWhere((item) => item.length == 3);
print(numbers); // [three, four]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element)) {
  _filter(test, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  K key,
    2.  V value

    )

)

::: {.features}
override
:::
:::

Removes all entries of this map that satisfy the given `test`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.removeWhere((key, value) => value.startsWith('E'));
print(terrestrial); // {1: Mercury, 2: Venus}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(K key, V value)) {
  _map.removeWhere(test);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/removewhere.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) name

    )

)

::: {.features}
inherited
:::
:::

Removes all elements of this set that satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeWhere((element) => element.startsWith('B'));
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(String name)) {
  modify((s) => s.removeWhere(test));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/removewhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../bool-class) test(
    1.  E element

    )

)
:::

Removes all objects from this list that satisfy `test`.

An object `o` satisfies `test` if `test(o)` is true.

``` {.language-dart data-language="dart"}
final numbers = <String>['one', 'two', 'three', 'four'];
numbers.removeWhere((item) => item.length == 3);
print(numbers); // [three, four]
```

The list must be growable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/removewhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../bool-class) test(
    1.  K key,
    2.  V value

    )

)
:::

Removes all entries of this map that satisfy the given `test`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.removeWhere((key, value) => value.startsWith('E'));
print(terrestrial); // {1: Mercury, 2: Venus}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(K key, V value));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Remove all elements matched by `test`.

This method is inefficient since it works by repeatedly removing single
elements, each of which can take linear time.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element)) {
  _filterWhere(test, true);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/removewhere.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/removewhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../bool-class) test(
    1.  E element

    )

)
:::

Removes all elements of this set that satisfy `test`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeWhere((element) => element.startsWith('B'));
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  K key,
    2.  V value

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(K key, V value)) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  K key,
    2.  V value

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(K key, V value)) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)

::: {.features}
override
:::
:::

Removes all elements matched by `test` from the queue.

The `test` function must not throw or modify the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element)) {
  _filter(test, true);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

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
void removeWhere(bool test(E element)) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/removeWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/removewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeWhere method
==================

::: {.section .multi-line-signature}
void removeWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    )

)
:::

Removes all elements matched by `test` from the queue.

The `test` function must not throw or modify the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeWhere(bool test(E element));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/removeWhere.html>
:::
