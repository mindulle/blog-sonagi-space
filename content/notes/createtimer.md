[dart:async](../../dart-async/dart-async-library){._links-link}

createTimer method
==================

::: {.section .multi-line-signature}
[Timer](../timer-class) createTimer(

1.  [Duration](../../dart-core/duration-class) duration,
2.  void callback( )

)
:::

Creates a [Timer](../timer-class) where the callback is executed in this
zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Timer createTimer(Duration duration, void Function() callback);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/createTimer.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/createtimer.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

createTimer method
==================

::: {.section .multi-line-signature}
[Timer](../timer-class) createTimer(

1.  [Zone](../zone-class) zone,
2.  [Duration](../../dart-core/duration-class) duration,
3.  void f( )

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Timer createTimer(Zone zone, Duration duration, void f());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/createTimer.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/createtimer.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

createTimer property
====================

::: {#getter .section .multi-line-signature}
[CreateTimerHandler](../createtimerhandler)? createTimer
:::

A custom [Zone.createTimer](../zone/createtimer) implementation for a
new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CreateTimerHandler? get createTimer;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/createTimer.html>
:::
