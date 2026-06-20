[dart:math](../../dart-math/dart-math-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[Point](../point-class)\<T\> operator -(

1.  [Point](../point-class)\<T\> other

)
:::

Subtract `other` from `this`, as if both points were vectors.

Returns the resulting \"vector\" as a Point.

Example:

``` {.language-dart data-language="dart"}
var point = const Point(10, 100) - const Point(10, 10); // Point(0, 90)
point = const Point(-10, -20) - const Point(10, 100); // Point(-110, -120)
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<T> operator -(Point<T> other) {
  return Point<T>((x - other.x) as T, (y - other.y) as T);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Point/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/operator_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[double](../double-class) operator -(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Subtracts `other` from this number.

The result is an [int](../int-class), as described by
[int.-](../num/operator_minus), if both this number and `other` is an
integer, otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator -(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[num](../num-class) operator -(

1.  [num](../num-class) other

)
:::

Subtracts `other` from this number.

The result is an [int](../int-class), as described by
[int.-](operator_minus), if both this number and `other` is an integer,
otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num operator -(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[Duration](../duration-class) operator -(

1.  [Duration](../duration-class) other

)
:::

Subtracts `other` from this Duration and returns the difference as a new
Duration object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration operator -(Duration other) {
  return Duration._microseconds(_duration - other._duration);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator -(

1.  [BigInt](../bigint-class) other

)
:::

Subtracts `other` from this big integer.

The result is again a big integer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator -(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/operator_minus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator -(

1.  [Float32x4](../float32x4-class) other

)
:::

Subtraction operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 operator -(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/operator_minus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator -(

1.  [Float64x2](../float64x2-class) other

)
:::

Subtraction operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 operator -(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/operator_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4/operator_minus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator - method
=================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) operator -(

1.  [Int32x4](../int32x4-class) other

)
:::

Subtraction operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4 operator -(Int32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4/operator_minus.html>
:::
