[dart:core](../../dart-core/dart-core-library){._links-link}

operator \>= method
===================

::: {.section .multi-line-signature}
[bool](../bool-class) operator \>=(

1.  [num](../num-class) other

)
:::

Whether this number is numerically greater than or equal to `other`.

Returns `true` if this number is greater than or equal to `other`.
Returns `false` if this number is smaller than `other` or if either
value is a NaN value like [double.nan](../double/nan-constant).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator >=(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_greater_equal.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_greater_equal.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \>= method
===================

::: {.section .multi-line-signature}
[bool](../bool-class) operator \>=(

1.  [Duration](../duration-class) other

)
:::

Whether this [Duration](../duration-class) is longer than or equal to
`other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator >=(Duration other) => this._duration >= other._duration;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_greater_equal.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/operator_greater_equal.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \>= method
===================

::: {.section .multi-line-signature}
[bool](../bool-class) operator \>=(

1.  [BigInt](../bigint-class) other

)
:::

Whether `other` is numerically smaller than this big integer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator >=(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/operator_greater_equal.html>
:::
