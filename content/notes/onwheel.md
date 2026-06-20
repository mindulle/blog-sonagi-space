[dart:html](../../dart-html/dart-html-library){._links-link}

onWheel property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[WheelEvent](../wheelevent-class)\>
onWheel

::: {.features}
override
:::
:::

Stream of `wheel` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<WheelEvent> get onWheel => Element.wheelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onwheel.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onWheel property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[WheelEvent](../../dart-html/wheelevent-class)\>
onWheel

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onWheel => wheelEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onwheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onWheel property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[WheelEvent](../wheelevent-class)\>
onWheel

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onWheel => wheelEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onwheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onWheel property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[WheelEvent](../wheelevent-class)\>
onWheel
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<WheelEvent> get onWheel => wheelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onwheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onWheel property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[WheelEvent](../wheelevent-class)\>
onWheel
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onWheel;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onWheel.html>
:::
