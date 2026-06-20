[dart:async](../../dart-async/dart-async-library){._links-link}

onPause property
================

::: {.section .multi-line-signature}
(void Function?()?) onPause

::: {.features}
read / write
:::
:::

The callback which is called when the stream is paused.

May be set to `null`, in which case no callback will happen.

Pause related callbacks are not supported on broadcast stream
controllers.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
abstract void Function()? onPause;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesisutterance/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onPause
:::

Stream of `pause` events handled by this
[SpeechSynthesisUtterance](../speechsynthesisutterance-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onPause => pauseEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesisUtterance/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onpause.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onPause

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onPause => pauseEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onPause

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onPause => pauseEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onPause

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onPause => Element.pauseEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onPause
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onPause => pauseEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onPause
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onPause => Element.pauseEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onPause
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onPause => pauseEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/onPause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onpause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onPause property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onPause
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onPause;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onPause.html>
:::
