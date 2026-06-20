[dart:async](../../dart-async/dart-async-library){._links-link}

runBinary\<R, T1, T2\> method
=============================

::: {.section .multi-line-signature}
R runBinary\<R, T1, T2\>(

1.  R action(
    1.  T1 argument1,
    2.  T2 argument2

    ),
2.  T1 argument1,
3.  T2 argument2

)
:::

Executes the given `action` with `argument1` and `argument2` in this
zone.

As [run](run) except that `action` is called with two arguments instead
of none.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R runBinary<R, T1, T2>(
    R action(T1 argument1, T2 argument2), T1 argument1, T2 argument2);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/runBinary.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/runbinary.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

runBinary\<R, T1, T2\> method
=============================

::: {.section .multi-line-signature}
R runBinary\<R, T1, T2\>(

1.  [Zone](../zone-class) zone,
2.  R f(
    1.  T1 arg1,
    2.  T2 arg2

    ),
3.  T1 arg1,
4.  T2 arg2

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R runBinary<R, T1, T2>(Zone zone, R f(T1 arg1, T2 arg2), T1 arg1, T2 arg2);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/runBinary.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/runbinary.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

runBinary property
==================

::: {#getter .section .multi-line-signature}
[RunBinaryHandler](../runbinaryhandler)? runBinary
:::

A custom [Zone.runBinary](../zone/runbinary) implementation for a new
zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
RunBinaryHandler? get runBinary;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/runBinary.html>
:::
