[dart:html](../../dart-html/dart-html-library){._links-link}

onOpen property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onOpen
:::

Stream of `open` events handled by this
[RtcDataChannel](../rtcdatachannel-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onOpen => openEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDataChannel/onOpen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/eventsource/onopen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onOpen property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onOpen
:::

Stream of `open` events handled by this
[EventSource](../eventsource-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onOpen => openEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EventSource/onOpen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/onopen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onOpen property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onOpen
:::

Stream of `open` events handled by this [WebSocket](../websocket-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onOpen => openEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/onOpen.html>
:::
