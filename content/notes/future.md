[dart:async](../../dart-async/dart-async-library){._links-link}

Future\<T\> constructor
=======================

::: {.section .multi-line-signature}
Future\<T\>(

1.  [FutureOr](../futureor-class)\<T\> computation( )

)
:::

Creates a future containing the result of calling `computation`
asynchronously with [Timer.run](../timer/run).

If the result of executing `computation` throws, the returned future is
completed with the error.

If the returned value is itself a [Future](../future-class), completion
of the created future will wait until the returned future completes, and
will then complete with the same result.

If a non-future value is returned, the returned future is completed with
that value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Future(FutureOr<T> computation()) {
  _Future<T> result = new _Future<T>();
  Timer.run(() {
    try {
      result._complete(computation());
    } catch (e, s) {
      _completeWithErrorCallback(result, e, s);
    }
  });
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Future/Future.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/completer/future.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

future property
===============

::: {#getter .section .multi-line-signature}
[Future](../future-class)\<T\> future
:::

The future that is completed by this completer.

The future that is completed when [complete](complete) or
[completeError](completeerror) is called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> get future;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Completer/future.html>
:::
