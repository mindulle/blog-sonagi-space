[dart:core](../../dart-core/dart-core-library){._links-link}

toDouble method
===============

::: {.section .multi-line-signature}
[double](../double-class) toDouble()
:::

Returns this [BigInt](../bigint-class) as a [double](../double-class).

If the number is not representable as a [double](../double-class), an
approximation is returned. For numerically large integers, the
approximation may be infinite.

Example:

``` {.language-dart data-language="dart"}
var bigNumber = BigInt.parse('100000000000000000000000');
print(bigNumber.toDouble()); // 1e+23
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double toDouble();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/toDouble.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/todouble.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

toDouble method
===============

::: {.section .multi-line-signature}
[double](../double-class) toDouble()
:::

This number as a [double](../double-class).

If an integer number is not precisely representable as a
[double](../double-class), an approximation is returned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double toDouble();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/toDouble.html>
:::
