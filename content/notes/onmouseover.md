[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onMouseOver

::: {.features}
override
:::
:::

Stream of `mouseover` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseOver => mouseOverEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onMouseOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onmouseover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseOver

::: {.features}
override
:::
:::

Stream of `mouseover` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseOver => mouseOverEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onMouseOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onmouseover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseOver

::: {.features}
override
:::
:::

Stream of `mouseover` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseOver => Element.mouseOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onMouseOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onmouseover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseOver
:::

Stream of `mouseover` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseOver => Element.mouseOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onMouseOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onmouseover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseOver
:::

Stream of `mouseover` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseOver;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onMouseOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onmouseover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseOver property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseOver
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseOver => mouseOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onMouseOver.html>
:::
