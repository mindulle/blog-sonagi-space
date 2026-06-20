[dart:html](../../dart-html/dart-html-library){._links-link}

addEventListener method
=======================

::: {.section .multi-line-signature}
void addEventListener(

1.  [String](../../dart-core/string-class) type,
2.  [EventListener](../eventlistener)? listener,
3.  \[[bool](../../dart-core/bool-class)? useCapture\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addEventListener(String type, EventListener? listener,
    [bool? useCapture]) {
  // TODO(leafp): This check is avoid a bug in our dispatch code when
  // listener is null.  The browser treats this call as a no-op in this
  // case, so it's fine to short-circuit it, but we should not have to.
  if (listener != null) {
    _addEventListener(type, listener, useCapture);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EventTarget/addEventListener.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/messageport/addeventlistener.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addEventListener method
=======================

::: {.section .multi-line-signature}
void addEventListener(

1.  [String](../../dart-core/string-class) type,
2.  [EventListener](../eventlistener)? listener,
3.  \[[bool](../../dart-core/bool-class)? useCapture\]

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addEventListener(String type, EventListener? listener,
    [bool? useCapture]) {
  // Messages posted to ports are initially paused, allowing listeners to be
  // setup, start() needs to be explicitly invoked to begin handling messages.
  if (type == 'message') {
    _start();
  }

  super.addEventListener(type, listener, useCapture);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MessagePort/addEventListener.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/addeventlistener.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addEventListener method
=======================

::: {.section .multi-line-signature}
void addEventListener(

1.  [String](../../dart-core/string-class) type,
2.  dynamic listener(
    1.  [Event](../event-class) event

    )?,
3.  \[[bool](../../dart-core/bool-class)? useCapture\]

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addEventListener(String type, dynamic listener(Event event)?,
    [bool? useCapture]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/addEventListener.html>
:::
