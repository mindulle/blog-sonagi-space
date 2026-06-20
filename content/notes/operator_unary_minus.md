[dart:core](../../dart-core/dart-core-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[double](../double-class) operator unary-()

::: {.features}
override
:::
:::

The negation of this value.

The negation of a number is a number of the same kind (`int` or
`double`) representing the negation of the numbers numerical value (the
result of subtracting the number from zero), if that value *exists*.

Negating a double gives a number with the same magnitude as the original
value (`number.abs() == (-number).abs()`), and the opposite sign
(`-(number.sign) == (-number).sign`).

Negating an integer, `-number`, is equivalent to subtracting it from
zero, `0 - number`.

(Both properties generally also hold for the other type, but with a few
edge case exceptions).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_unary_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[num](../num-class) operator unary-()
:::

The negation of this value.

The negation of a number is a number of the same kind (`int` or
`double`) representing the negation of the numbers numerical value (the
result of subtracting the number from zero), if that value *exists*.

Negating a double gives a number with the same magnitude as the original
value (`number.abs() == (-number).abs()`), and the opposite sign
(`-(number.sign) == (-number).sign`).

Negating an integer, `-number`, is equivalent to subtracting it from
zero, `0 - number`.

(Both properties generally also hold for the other type, but with a few
edge case exceptions).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_unary_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[Duration](../duration-class) operator unary-()
:::

Creates a new [Duration](../duration-class) with the opposite direction
of this [Duration](../duration-class).

The returned [Duration](../duration-class) has the same length as this
one, but will have the opposite sign (as reported by
[isNegative](isnegative)) as this one where possible.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
// Using subtraction helps dart2js avoid negative zeros.
Duration operator -() => Duration._microseconds(0 - _duration);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/operator_unary_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[int](../int-class) operator unary-()

::: {.features}
override
:::
:::

Return the negative value of this integer.

The result of negating an integer always has the opposite sign, except
for zero, which is its own negation.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_unary_minus.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator unary-()
:::

Return the negative value of this integer.

The result of negating an integer always has the opposite sign, except
for zero, which is its own negation.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/operator_unary_minus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator unary-()
:::

Negate operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/operator_unary_minus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/operator_unary_minus.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator unary- method
======================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator unary-()
:::

Negate operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 operator -();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/operator_unary_minus.html>
:::
