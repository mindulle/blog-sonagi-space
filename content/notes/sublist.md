[dart:collection](../../dart-collection/dart-collection-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `List<E>` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
final colors = <String>['red', 'green', 'blue', 'orange', 'pink'];
print(colors.sublist(1, 3)); // [green, blue]
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
final colors = <String>['red', 'green', 'blue', 'orange', 'pink'];
print(colors.sublist(3)); // [orange, pink]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ [length](../../dart-core/list/length). If `end` is equal to
`start`, then the returned list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> sublist(int start, [int? end]) {
  int listLength = this.length;
  end ??= listLength;
  if (end == null) throw "!"; // TODO(38493): The `??=` should promote.

  RangeError.checkValidRange(start, end, listLength);
  return List.from(getRange(start, end));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint8clampedlist/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint8ClampedList](../uint8clampedlist-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Uint8ClampedList` containing the elements of this
list at positions greater than or equal to `start` and less than `end`
in the same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Uint8ClampedList.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Uint8ClampedList
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8ClampedList sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint8ClampedList/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float32x4List](../float32x4list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Float32x4List` containing the elements of this list
at positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Float32x4List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Float32x4List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float64x2List](../float64x2list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Float64x2List` containing the elements of this list
at positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Float64x2List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Float64x2List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int32x4List](../int32x4list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is an `Int32x4list` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Int32x4list.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Int32x4list
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float32List](../float32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Float32List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Float32List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Float32List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float64List](../float64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Float64List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Float64List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Float64List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint16list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint16List](../uint16list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Uint16List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Uint16List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Uint16List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint16List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint16List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint32list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint32List](../uint32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Uint32List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Uint32List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Uint32List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint32List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint32List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint64list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint64List](../uint64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Uint64List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Uint64List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Uint64List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint64List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint64List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int16list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int16List](../int16list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is an `Int16List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Int16List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Int16List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int16List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int16List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int32List](../int32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is an `Int32List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Int32List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Int32List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int64list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int64List](../int64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is an `Int64List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Int64List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Int64List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int64List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int64List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint8list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint8List](../uint8list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `Uint8List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Uint8List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Uint8List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint8List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int8list/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int8List](../int8list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Returns a new list containing the elements between `start` and `end`.

The new list is an `Int8List` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
var numbers = Int8List.fromList([0, 1, 2, 3, 4]);
print(numbers.sublist(1, 3)); // [1, 2]
print(numbers.sublist(1, 3).runtimeType); // Int8List
```

If `end` is omitted, it defaults to the
[length](../../dart-core/list/length) of this list.

``` {.language-dart data-language="dart"}
print(numbers.sublist(1)); // [1, 2, 3, 4]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ `this.length` If `end` is equal to `start`, then the returned
list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int8List sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int8List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/sublist.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[List](../list-class)\<E\> sublist(

1.  [int](../int-class) start,
2.  \[[int](../int-class)? end\]

)
:::

Returns a new list containing the elements between `start` and `end`.

The new list is a `List<E>` containing the elements of this list at
positions greater than or equal to `start` and less than `end` in the
same order as they occur in this list.

``` {.language-dart data-language="dart"}
final colors = <String>['red', 'green', 'blue', 'orange', 'pink'];
print(colors.sublist(1, 3)); // [green, blue]
```

If `end` is omitted, it defaults to the [length](length) of this list.

``` {.language-dart data-language="dart"}
final colors = <String>['red', 'green', 'blue', 'orange', 'pink'];
print(colors.sublist(3)); // [orange, pink]
```

The `start` and `end` positions must satisfy the relations 0 ≤ `start` ≤
`end` ≤ [length](length). If `end` is equal to `start`, then the
returned list is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> sublist(int start, [int? end]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint8ClampedList](../uint8clampedlist-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float32x4List](../float32x4list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float64x2List](../float64x2list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float32List](../float32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Float64List](../float64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int32x4List](../int32x4list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint16List](../uint16list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint32List](../uint32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint64List](../uint64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int16List](../int16list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int32List](../int32list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int64List](../int64list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Uint8List](../uint8list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/sublist.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/sublist.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sublist method
==============

::: {.section .multi-line-signature}
[Int8List](../int8list-class) sublist(

1.  [int](../../dart-core/int-class) start,
2.  \[[int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
L sublist(int start, [int? end]) {
  // NNBD: Spurious error at `end`, `checkValidRange` is legacy.
  int endIndex = RangeError.checkValidRange(start, end!, length);
  int sublistLength = endIndex - start;
  L result = _createList(sublistLength);
  result.setRange(0, sublistLength, _list, start);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/sublist.html>
:::
