[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[WheelEvent](../../dart-html/wheelevent-class)\>
onMouseWheel

::: {.features}
override
:::
:::

Stream of `mousewheel` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onMouseWheel =>
    mouseWheelEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onMouseWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onmousewheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[WheelEvent](../wheelevent-class)\>
onMouseWheel

::: {.features}
override
:::
:::

Stream of `mousewheel` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onMouseWheel =>
    mouseWheelEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onMouseWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onmousewheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[WheelEvent](../wheelevent-class)\>
onMouseWheel

::: {.features}
override
:::
:::

Stream of `mousewheel` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<WheelEvent> get onMouseWheel =>
    Element.mouseWheelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onMouseWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onmousewheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[WheelEvent](../wheelevent-class)\>
onMouseWheel
:::

Stream of `mousewheel` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<WheelEvent> get onMouseWheel =>
    Element.mouseWheelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onMouseWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onmousewheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[WheelEvent](../wheelevent-class)\>
onMouseWheel
:::

Stream of `mousewheel` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<WheelEvent> get onMouseWheel;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onMouseWheel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onmousewheel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseWheel property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[WheelEvent](../wheelevent-class)\>
onMouseWheel
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<WheelEvent> get onMouseWheel => mouseWheelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onMouseWheel.html>
:::
