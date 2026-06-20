[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[TouchEvent](../../dart-html/touchevent-class)\>
onTouchStart

::: {.features}
override
:::
:::

Stream of `touchstart` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchStart =>
    touchStartEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onTouchStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ontouchstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchStart

::: {.features}
override
:::
:::

Stream of `touchstart` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchStart =>
    touchStartEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onTouchStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ontouchstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchStart

::: {.features}
override
:::
:::

Stream of `touchstart` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchStart =>
    Element.touchStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onTouchStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ontouchstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchStart
:::

Stream of `touchstart` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchStart =>
    Element.touchStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onTouchStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ontouchstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchStart
:::

Stream of `touchstart` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchStart;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onTouchStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ontouchstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchStart property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchStart
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchStart => touchStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onTouchStart.html>
:::
