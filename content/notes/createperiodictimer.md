[dart:async](../../dart-async/dart-async-library){._links-link}

createPeriodicTimer method
==========================

::: {.section .multi-line-signature}
[Timer](../timer-class) createPeriodicTimer(

1.  [Duration](../../dart-core/duration-class) period,
2.  void callback(
    1.  [Timer](../timer-class) timer

    )

)
:::

Creates a periodic [Timer](../timer-class) where the callback is
executed in this zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Timer createPeriodicTimer(Duration period, void callback(Timer timer));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/createPeriodicTimer.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/createperiodictimer.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

createPeriodicTimer method
==========================

::: {.section .multi-line-signature}
[Timer](../timer-class) createPeriodicTimer(

1.  [Zone](../zone-class) zone,
2.  [Duration](../../dart-core/duration-class) period,
3.  void f(
    1.  [Timer](../timer-class) timer

    )

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Timer createPeriodicTimer(Zone zone, Duration period, void f(Timer timer));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/createPeriodicTimer.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/createperiodictimer.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

createPeriodicTimer property
============================

::: {#getter .section .multi-line-signature}
[CreatePeriodicTimerHandler](../createperiodictimerhandler)?
createPeriodicTimer
:::

A custom [Zone.createPeriodicTimer](../zone/createperiodictimer)
implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CreatePeriodicTimerHandler? get createPeriodicTimer;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/createPeriodicTimer.html>
:::
