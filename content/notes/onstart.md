[dart:html](../../dart-html/dart-html-library){._links-link}

onStart property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[SpeechSynthesisEvent](../speechsynthesisevent-class)\>
onStart
:::

Stream of `start` events handled by this
[SpeechSynthesisUtterance](../speechsynthesisutterance-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<SpeechSynthesisEvent> get onStart => startEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesisUtterance/onStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechrecognition/onstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onStart property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onStart
:::

Stream of `start` events handled by this
[SpeechRecognition](../speechrecognition-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onStart => startEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechRecognition/onStart.html>
:::
