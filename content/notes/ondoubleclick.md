[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'SVGElement.ondblclick\'), override
:::
:::

Stream of `doubleclick` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('SVGElement.ondblclick')
ElementStream<Event> get onDoubleClick => doubleClickEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onDoubleClick.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ondoubleclick.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'Element.ondblclick\'), override
:::
:::

Stream of `doubleclick` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('Element.ondblclick')
ElementStream<Event> get onDoubleClick => doubleClickEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onDoubleClick.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ondoubleclick.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'Document.ondblclick\')
:::
:::

Stream of `doubleclick` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('Document.ondblclick')
Stream<Event> get onDoubleClick => Element.doubleClickEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onDoubleClick.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ondoubleclick.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'Window.ondblclick\'), override
:::
:::

Stream of `doubleclick` events handled by this
[Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('Window.ondblclick')
Stream<Event> get onDoubleClick => Element.doubleClickEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onDoubleClick.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ondoubleclick.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'Element.ondblclick\')
:::
:::

Stream of `doubleclick` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('Element.ondblclick')
ElementStream<Event> get onDoubleClick;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onDoubleClick.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ondoubleclick.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDoubleClick property
======================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onDoubleClick

::: {.features}
\@DomName(\'GlobalEventHandlers.ondblclick\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('GlobalEventHandlers.ondblclick')
Stream<Event> get onDoubleClick => doubleClickEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onDoubleClick.html>
:::
