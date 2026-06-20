[dart:async](../../dart-async/dart-async-library){._links-link}

runUnary\<R, T\> method
=======================

::: {.section .multi-line-signature}
R runUnary\<R, T\>(

1.  R action(
    1.  T argument

    ),
2.  T argument

)
:::

Executes the given `action` with `argument` in this zone.

As [run](run) except that `action` is called with one `argument` instead
of none.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R runUnary<R, T>(R action(T argument), T argument);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/runUnary.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/rununary.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

runUnary property
=================

::: {#getter .section .multi-line-signature}
[RunUnaryHandler](../rununaryhandler)? runUnary
:::

A custom [Zone.runUnary](../zone/rununary) implementation for a new
zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
RunUnaryHandler? get runUnary;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/runUnary.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/rununary.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

runUnary\<R, T\> method
=======================

::: {.section .multi-line-signature}
R runUnary\<R, T\>(

1.  [Zone](../zone-class) zone,
2.  R f(
    1.  T arg

    ),
3.  T arg

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R runUnary<R, T>(Zone zone, R f(T arg), T arg);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/runUnary.html>
:::
