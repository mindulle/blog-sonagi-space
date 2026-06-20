[dart:async](../../dart-async/dart-async-library){._links-link}

handleUncaughtError method
==========================

::: {.section .multi-line-signature}
void handleUncaughtError(

1.  [Object](../../dart-core/object-class) error,
2.  [StackTrace](../../dart-core/stacktrace-class) stackTrace

)
:::

Handles uncaught asynchronous errors.

There are two kind of asynchronous errors that are handled by this
function:

1.  Uncaught errors that were thrown in asynchronous callbacks, for
    example, a `throw` in the function passed to
    [Timer.run](../timer/run).
2.  Asynchronous errors that are pushed through
    [Future](../future-class) and [Stream](../stream-class) chains, but
    for which nobody registered an error handler. Most asynchronous
    classes, like [Future](../future-class) or [Stream](../stream-class)
    push errors to their listeners. Errors are propagated this way until
    either a listener handles the error (for example with
    [Future.catchError](../future/catcherror)), or no listener is
    available anymore. In the latter case, futures and streams invoke
    the zone\'s [handleUncaughtError](handleuncaughterror).

By default, when handled by the root zone, uncaught asynchronous errors
are treated like uncaught synchronous exceptions.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void handleUncaughtError(Object error, StackTrace stackTrace);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/handleUncaughtError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/handleuncaughterror.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

handleUncaughtError method
==========================

::: {.section .multi-line-signature}
void handleUncaughtError(

1.  [Zone](../zone-class) zone,
2.  [Object](../../dart-core/object-class) error,
3.  [StackTrace](../../dart-core/stacktrace-class) stackTrace

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void handleUncaughtError(Zone zone, Object error, StackTrace stackTrace);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/handleUncaughtError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/handleuncaughterror.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

handleUncaughtError property
============================

::: {#getter .section .multi-line-signature}
[HandleUncaughtErrorHandler](../handleuncaughterrorhandler)?
handleUncaughtError
:::

A custom [Zone.handleUncaughtError](../zone/handleuncaughterror)
implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HandleUncaughtErrorHandler? get handleUncaughtError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/handleUncaughtError.html>
:::
