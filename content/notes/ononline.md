[dart:html](../../dart-html/dart-html-library){._links-link}

onOnline property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onOnline

::: {.features}
override
:::
:::

Stream of `online` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onOnline => onlineEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onOnline.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ononline.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onOnline property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onOnline

::: {.features}
override
:::
:::

Stream of `online` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onOnline => onlineEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onOnline.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windoweventhandlers/ononline.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onOnline property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onOnline
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onOnline => onlineEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowEventHandlers/onOnline.html>
:::
