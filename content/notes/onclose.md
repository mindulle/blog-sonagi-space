[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

onClose property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../../dart-html/event-class)\>
onClose
:::

Stream of `close` events handled by this [Database](../database-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onClose => closeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Database/onClose.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcdatachannel/onclose.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onClose property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onClose
:::

Stream of `close` events handled by this
[RtcDataChannel](../rtcdatachannel-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onClose => closeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDataChannel/onClose.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/onclose.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onClose property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[CloseEvent](../closeevent-class)\>
onClose
:::

Stream of `close` events handled by this
[WebSocket](../websocket-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<CloseEvent> get onClose => closeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/onClose.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/onclose.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onClose property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onClose
:::

Stream of `close` events handled by this
[Notification](../notification-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onClose => closeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/onClose.html>
:::
