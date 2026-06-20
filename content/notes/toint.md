[dart:core](../../dart-core/dart-core-library){._links-link}

toInt method
============

::: {.section .multi-line-signature}
[int](../int-class) toInt()
:::

Returns this [BigInt](../bigint-class) as an [int](../int-class).

If the number does not fit, clamps to the max (or min) integer.

**Warning:** the clamping behaves differently between the web and native
platforms due to the differences in integer precision.

Example:

``` {.language-dart data-language="dart"}
var bigNumber = BigInt.parse('100000000000000000000000');
print(bigNumber.isValidInt); // false
print(bigNumber.toInt()); // 9223372036854775807
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int toInt();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/toInt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/toint.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

toInt method
============

::: {.section .multi-line-signature}
[int](../int-class) toInt()
:::

Truncates this [num](../num-class) to an integer and returns the result
as an [int](../int-class).

Equivalent to [truncate](truncate).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int toInt();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/toInt.html>
:::
