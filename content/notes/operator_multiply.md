[dart:math](../../dart-math/dart-math-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[Point](../point-class)\<T\> operator \*(

1.  [num](../../dart-core/num-class) factor

)
:::

Scale this point by `factor` as if it were a vector.

**Important Note**: This function accepts a `num` as its argument only
so that you can scale `Point<double>` objects by an `int` factor.
Because the `*` operator always returns the same type of `Point` as it
is called on, passing in a double `factor` on a `Point<int>` *causes*
*a* *runtime* *error*.

Example:

``` {.language-dart data-language="dart"}
// Integer values.
var point = const Point(10, 100) * 10; // Point(100, 1000)
point = const Point(-10, -100) * 5; // Point(-50, -500)
// Double values.
var doublePoint = Point(10.0, 100.0) * 1.5; // Point(15.0, 150.0)
// Runtime error due the invalid type cast.
var newPoint = const Point(10, 100) * 1.5; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<T> operator *(num /*T|int*/ factor) {
  return Point<T>((x * factor) as T, (y * factor) as T);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Point/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/operator_multiply.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[String](../string-class) operator \*(

1.  [int](../int-class) times

)
:::

Creates a new string by concatenating this string with itself a number
of times.

The result of `str * n` is equivalent to `str + str + ...`(n
times)`... + str`.

``` {.language-dart data-language="dart"}
const string = 'Dart';
final multiplied = string * 3;
print(multiplied); // 'DartDartDart'
```

Returns an empty string if `times` is zero or negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String operator *(int times);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_multiply.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[Duration](../duration-class) operator \*(

1.  [num](../num-class) factor

)
:::

Multiplies this Duration by the given `factor` and returns the result as
a new Duration object.

Note that when `factor` is a double, and the duration is greater than 53
bits, precision is lost because of double-precision arithmetic.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration operator *(num factor) {
  return Duration._microseconds((_duration * factor).round());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/operator_multiply.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[double](../double-class) operator \*(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Multiplies this number by `other`.

The result is an [int](../int-class), as described by
[int.\*](../num/operator_multiply), if both this number and `other` are
integers, otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator *(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_multiply.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[num](../num-class) operator \*(

1.  [num](../num-class) other

)
:::

Multiplies this number by `other`.

The result is an [int](../int-class), as described by
[int.\*](operator_multiply), if both this number and `other` are
integers, otherwise the result is a [double](../double-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num operator *(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_multiply.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator \*(

1.  [BigInt](../bigint-class) other

)
:::

Multiplies `other` by this big integer.

The result is again a big integer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator *(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/operator_multiply.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator \*(

1.  [Float32x4](../float32x4-class) other

)
:::

Multiplication operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 operator *(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/operator_multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/operator_multiply.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \* method
==================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator \*(

1.  [Float64x2](../float64x2-class) other

)
:::

Multiplication operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 operator *(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/operator_multiply.html>
:::
