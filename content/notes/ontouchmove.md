[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[TouchEvent](../../dart-html/touchevent-class)\>
onTouchMove

::: {.features}
override
:::
:::

Stream of `touchmove` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchMove => touchMoveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onTouchMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ontouchmove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchMove

::: {.features}
override
:::
:::

Stream of `touchmove` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchMove => touchMoveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onTouchMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ontouchmove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchMove

::: {.features}
override
:::
:::

Stream of `touchmove` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchMove => Element.touchMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onTouchMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ontouchmove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchMove
:::

Stream of `touchmove` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchMove => Element.touchMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onTouchMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ontouchmove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchMove
:::

Stream of `touchmove` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchMove;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onTouchMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ontouchmove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchMove
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchMove => touchMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onTouchMove.html>
:::
