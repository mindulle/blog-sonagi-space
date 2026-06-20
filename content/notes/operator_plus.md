[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<E\> operator +(

1.  [List](../../dart-core/list-class)\<E\> other

)

::: {.features}
override
:::
:::

Returns the concatenation of this list and `other`.

Returns a new list containing the elements of this list followed by the
elements of `other`.

The default behavior is to return a normal growable list. Some list
types may choose to return a list of the same type as themselves (see
[Uint8List.+](../../dart-typed_data/uint8list/operator_plus));

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> operator +(List<E> other) => [...this, ...other];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/uint8list/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
operator +(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    other

)

::: {.features}
override
:::
:::

Returns a concatenation of this list and `other`.

If `other` is also a typed-data list, then the return list will be a
typed data list capable of holding both unsigned 8-bit integers and the
elements of `other`, otherwise it\'ll be a normal list of integers.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int> operator +(List<int> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Uint8List/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4list/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[Float32x4](../float32x4-class)\>
operator +(

1.  [List](../../dart-core/list-class)\<[Float32x4](../float32x4-class)\>
    other

)

::: {.features}
override
:::
:::

Returns the concatenation of this list and `other`.

If `other` is also a [Float32x4List](../float32x4list-class), the result
is a new [Float32x4List](../float32x4list-class), otherwise the result
is a normal growable `List<Float32x4>`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Float32x4> operator +(List<Float32x4> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4List/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2list/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[Float64x2](../float64x2-class)\>
operator +(

1.  [List](../../dart-core/list-class)\<[Float64x2](../float64x2-class)\>
    other

)

::: {.features}
override
:::
:::

Returns the concatenation of this list and `other`.

If `other` is also a [Float64x2List](../float64x2list-class), the result
is a new [Float64x2List](../float64x2list-class), otherwise the result
is a normal growable `List<Float64x2>`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Float64x2> operator +(List<Float64x2> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2List/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4list/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[Int32x4](../int32x4-class)\>
operator +(

1.  [List](../../dart-core/list-class)\<[Int32x4](../int32x4-class)\>
    other

)

::: {.features}
override
:::
:::

Returns the concatenation of this list and `other`.

If `other` is also a [Int32x4List](../int32x4list-class), the result is
a new [Int32x4List](../int32x4list-class), otherwise the result is a
normal growable `List<Int32x4>`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Int32x4> operator +(List<Int32x4> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4List/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/point/operator_plus.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[Point](../point-class)\<T\> operator +(

1.  [Point](../point-class)\<T\> other

)
:::

Add `other` to `this`, as if both points were vectors.

Returns the resulting \"vector\" as a Point.

Example:

``` {.language-dart data-language="dart"}
var point = const Point(10, 100) + const Point(10, 10); // Point(20, 110)
point = const Point(-10, -20) + const Point(10, 100); // Point(0, 80)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<T> operator +(Point<T> other) {
  return Point<T>((x + other.x) as T, (y + other.y) as T);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Point/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[List](../list-class)\<E\> operator +(

1.  [List](../list-class)\<E\> other

)
:::

Returns the concatenation of this list and `other`.

Returns a new list containing the elements of this list followed by the
elements of `other`.

The default behavior is to return a normal growable list. Some list
types may choose to return a list of the same type as themselves (see
[Uint8List.+](../../dart-typed_data/uint8list/operator_plus));

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<E> operator +(List<E> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[double](../double-class) operator +(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Adds `other` to this number.

The result is an [int](../int-class), as described by
[int.+](../num/operator_plus), if both this number and `other` is an
integer, otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator +(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[num](../num-class) operator +(

1.  [num](../num-class) other

)
:::

Adds `other` to this number.

The result is an [int](../int-class), as described by
[int.+](operator_plus), if both this number and `other` is an integer,
otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num operator +(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[String](../string-class) operator +(

1.  [String](../string-class) other

)
:::

Creates a new string by concatenating this string with `other`.

Example:

``` {.language-dart data-language="dart"}
const string = 'dart' + 'lang'; // 'dartlang'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String operator +(String other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[Duration](../duration-class) operator +(

1.  [Duration](../duration-class) other

)
:::

Adds this Duration and `other` and returns the sum as a new Duration
object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration operator +(Duration other) {
  return Duration._microseconds(_duration + other._duration);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_plus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator +(

1.  [BigInt](../bigint-class) other

)
:::

Adds `other` to this big integer.

The result is again a big integer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator +(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator +(

1.  [Float32x4](../float32x4-class) other

)
:::

Addition operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 operator +(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator +(

1.  [Float64x2](../float64x2-class) other

)
:::

Addition operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 operator +(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/operator_plus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4/operator_plus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator + method
=================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) operator +(

1.  [Int32x4](../int32x4-class) other

)
:::

Addition operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4 operator +(Int32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4/operator_plus.html>
:::
