[dart:async](../../dart-async/dart-async-library){._links-link}

closeSync method
================

::: {.section .multi-line-signature}
void closeSync()
:::

Closes the controller and delivers a done event.

Closes the controller like [close](../streamcontroller/close) and
attempts to deliver a \"done\" event immediately. Delivery can be
delayed if other previously added events are still pending delivery, if
the subscription is paused, or if the subscription isn\'t listening yet.
If it\'s necessary to know whether the \"done\" event has been
delivered, [done](../streamcontroller/done) future will complete when
that has happened.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void closeSync();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/MultiStreamController/closeSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsynchronoussocket/closesync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

closeSync method
================

::: {.section .multi-line-signature}
void closeSync()
:::

Closes the [RawSynchronousSocket](../rawsynchronoussocket-class).

Once [closeSync](closesync) has been called, attempting to call
[readSync](readsync), [readIntoSync](readintosync),
[writeFromSync](writefromsync), [remoteAddress](remoteaddress), and
[remotePort](remoteport) will cause a
[SocketException](../socketexception-class) to be thrown.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void closeSync();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSynchronousSocket/closeSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/randomaccessfile/closesync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

closeSync method
================

::: {.section .multi-line-signature}
void closeSync()
:::

Synchronously closes the file.

Throws a [FileSystemException](../filesystemexception-class) if the
operation fails.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void closeSync();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RandomAccessFile/closeSync.html>
:::
