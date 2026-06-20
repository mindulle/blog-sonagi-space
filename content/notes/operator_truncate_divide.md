[dart:core](../../dart-core/dart-core-library){._links-link}

operator \~/ method
===================

::: {.section .multi-line-signature}
[int](../int-class) operator \~/(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Truncating division operator.

Performs truncating division of this number by `other`. Truncating
division is division where a fractional result is converted to an
integer by rounding towards zero.

If both operands are [int](../int-class)s, then `other` must not be
zero. Then `a ~/ b` corresponds to `a.remainder(b)` such that
`a == (a ~/ b) * b + a.remainder(b)`.

If either operand is a [double](../double-class), then the other operand
is converted to a double before performing the division and truncation
of the result. Then `a ~/ b` is equivalent to `(a / b).truncate()`. This
means that the intermediate result of the double division must be a
finite integer (not an infinity or [double.nan](nan-constant)).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int operator ~/(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/operator_truncate_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/operator_truncate_divide.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \~/ method
===================

::: {.section .multi-line-signature}
[int](../int-class) operator \~/(

1.  [num](../num-class) other

)
:::

Truncating division operator.

Performs truncating division of this number by `other`. Truncating
division is division where a fractional result is converted to an
integer by rounding towards zero.

If both operands are [int](../int-class)s, then `other` must not be
zero. Then `a ~/ b` corresponds to `a.remainder(b)` such that
`a == (a ~/ b) * b + a.remainder(b)`.

If either operand is a [double](../double-class), then the other operand
is converted to a double before performing the division and truncation
of the result. Then `a ~/ b` is equivalent to `(a / b).truncate()`. This
means that the intermediate result of the double division must be a
finite integer (not an infinity or
[double.nan](../double/nan-constant)).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int operator ~/(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_truncate_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_truncate_divide.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \~/ method
===================

::: {.section .multi-line-signature}
[BigInt](../bigint-class) operator \~/(

1.  [BigInt](../bigint-class) other

)
:::

Truncating integer division operator.

Performs a truncating integer division, where the remainder is
discarded.

The remainder can be computed using the [remainder](remainder) method.

Examples:

``` {.language-dart data-language="dart"}
var seven = BigInt.from(7);
var three = BigInt.from(3);
seven ~/ three;    // => 2
(-seven) ~/ three; // => -2
seven ~/ -three;   // => -2
seven.remainder(three);    // => 1
(-seven).remainder(three); // => -1
seven.remainder(-three);   // => 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt operator ~/(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_truncate_divide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_truncate_divide.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \~/ method
===================

::: {.section .multi-line-signature}
[Duration](../duration-class) operator \~/(

1.  [int](../int-class) quotient

)
:::

Divides this Duration by the given `quotient` and returns the truncated
result as a new Duration object.

Throws an
[IntegerDivisionByZeroException](../integerdivisionbyzeroexception-class){.deprecated}
if `quotient` is `0`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration operator ~/(int quotient) {
  // By doing the check here instead of relying on "~/" below we get the
  // exception even with dart2js.
  if (quotient == 0) throw IntegerDivisionByZeroException();
  return Duration._microseconds(_duration ~/ quotient);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_truncate_divide.html>
:::
