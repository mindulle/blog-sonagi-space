[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onMouseMove

::: {.features}
override
:::
:::

Stream of `mousemove` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseMove => mouseMoveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onMouseMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onmousemove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseMove

::: {.features}
override
:::
:::

Stream of `mousemove` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseMove => mouseMoveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onMouseMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onmousemove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseMove

::: {.features}
override
:::
:::

Stream of `mousemove` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseMove => Element.mouseMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onMouseMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onmousemove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseMove
:::

Stream of `mousemove` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseMove => Element.mouseMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onMouseMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onmousemove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseMove
:::

Stream of `mousemove` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseMove;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onMouseMove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onmousemove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseMove property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseMove
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseMove => mouseMoveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onMouseMove.html>
:::
