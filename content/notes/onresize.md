[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onResize

::: {.features}
override
:::
:::

Stream of `resize` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onResize => resizeEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onResize

::: {.features}
override
:::
:::

Stream of `resize` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onResize => Element.resizeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onresize.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onResize

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onResize => resizeEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onResize

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onResize => resizeEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onResize
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onResize => resizeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onResize
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onResize => Element.resizeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/visualviewport/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onResize
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onResize => resizeEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VisualViewport/onResize.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onresize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onResize property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onResize
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onResize;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onResize.html>
:::
