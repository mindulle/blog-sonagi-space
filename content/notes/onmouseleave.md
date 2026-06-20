[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onMouseLeave

::: {.features}
override
:::
:::

Stream of `mouseleave` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseLeave =>
    mouseLeaveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onMouseLeave.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onmouseleave.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseLeave

::: {.features}
override
:::
:::

Stream of `mouseleave` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseLeave =>
    mouseLeaveEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onMouseLeave.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onmouseleave.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseLeave

::: {.features}
override
:::
:::

Stream of `mouseleave` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseLeave =>
    Element.mouseLeaveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onMouseLeave.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onmouseleave.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseLeave
:::

Stream of `mouseleave` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseLeave =>
    Element.mouseLeaveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onMouseLeave.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onmouseleave.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseLeave
:::

Stream of `mouseleave` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onMouseLeave;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onMouseLeave.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onmouseleave.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onMouseLeave property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onMouseLeave
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onMouseLeave => mouseLeaveEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onMouseLeave.html>
:::
