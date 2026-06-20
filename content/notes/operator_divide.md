[dart:core](../../dart-core/dart-core-library){._links-link}

operator / method
=================

::: {.section .multi-line-signature}
[double](../double-class) operator /(

1.  [BigInt](../bigint-class) other

)
:::

Double division operator.

Matching the similar operator on [int](../int-class), this operation
first performs [toDouble](todouble) on both this big integer and
`other`, then does [double.operator/](../double/operator_divide) on
those values and returns the result.

**Note:** The initial [toDouble](todouble) conversion may lose
precision.

Example:

``` {.language-dart data-language="dart"}
print(BigInt.from(1) / BigInt.from(2)); // 0.5
print(BigInt.from(1.99999) / BigInt.from(2)); // 0.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator /(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/operator_divide.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator / method
=================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator /(

1.  [Float32x4](../float32x4-class) other

)
:::

Division operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 operator /(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/operator_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/operator_divide.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator / method
=================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator /(

1.  [Float64x2](../float64x2-class) other

)
:::

Division operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 operator /(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/operator_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/operator_divide.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator / method
=================

::: {.section .multi-line-signature}
[double](../double-class) operator /(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Divides this number by `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator /(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_divide.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator / method
=================

::: {.section .multi-line-signature}
[double](../double-class) operator /(

1.  [num](../num-class) other

)
:::

Divides this number by `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double operator /(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_divide.html>
:::
