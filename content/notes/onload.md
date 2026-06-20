[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onLoad

::: {.features}
override
:::
:::

Stream of `load` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onLoad => loadEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/httprequesteventtarget/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onLoad
:::

Stream of `load` events handled by this
[HttpRequestEventTarget](../httprequesteventtarget-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onLoad => loadEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequestEventTarget/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/bodyelement/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onLoad

::: {.features}
override
:::
:::

Stream of `load` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onLoad => loadEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onLoad

::: {.features}
override
:::
:::

Stream of `load` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onLoad => loadEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onLoad

::: {.features}
override
:::
:::

Stream of `load` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onLoad => Element.loadEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filereader/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onLoad
:::

Stream of `load` events handled by this
[FileReader](../filereader-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onLoad => loadEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileReader/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onLoad
:::

Stream of `load` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onLoad => Element.loadEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onLoad
:::

Stream of `load` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onLoad;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onLoad.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onload.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoad property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onLoad
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onLoad => loadEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onLoad.html>
:::
