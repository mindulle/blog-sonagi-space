[dart:core](../../dart-core/dart-core-library){._links-link}

operator \| method
==================

::: {.section .multi-line-signature}
[int](../int-class) operator \|(

1.  [int](../int-class) other

)
:::

Bit-wise or operator.

Treating both `this` and `other` as sufficiently large two\'s component
integers, the result is a number with the bits set that are set in
either of `this` and `other`

If both operands are non-negative, the result is non-negative, otherwise
the result is negative.

Example:

``` {.language-dart data-language="dart"}
print((2 | 1).toRadixString(2)); // 0010 | 0001 -> 0011
print((3 | 1).toRadixString(2)); // 0011 | 0001 -> 0011
print((10 | 2).toRadixString(2)); // 1010 | 0010 -> 1010
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int operator |(int other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/operator_bitwise_or.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_bitwise_or.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \| method
==================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator \|(

1.  [BigInt](../bigint-class) other

)
:::

Bit-wise or operator.

Treating both `this` and `other` as sufficiently large two\'s component
integers, the result is a number with the bits set that are set in
either of `this` and `other`

If both operands are non-negative, the result is non-negative, otherwise
the result is negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator |(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_bitwise_or.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bool/operator_bitwise_or.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \| method
==================

::: {.section .multi-line-signature}
<div>

1.  \@Since(\"2.1\")

</div>

[bool](../bool-class) operator \|(

1.  [bool](../bool-class) other

)

::: {.features}
\@Since(\"2.1\")
:::
:::

The logical disjunction (\"inclusive or\") of this and `other`.

Returns `true` if either this or `other` is `true`, and `false`
otherwise.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Since("2.1")
bool operator |(bool other) => other || this;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/bool/operator_bitwise_or.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4/operator_bitwise_or.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \| method
==================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) operator \|(

1.  [Int32x4](../int32x4-class) other

)
:::

The bit-wise or operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4 operator |(Int32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4/operator_bitwise_or.html>
:::
