[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onDragStart

::: {.features}
override
:::
:::

A stream of `dragstart` events fired when this element starts being
dragged.

Other resources
---------------

-   [Drag and drop
    sample](https://github.com/dart-lang/dart-samples/tree/master/html5/web/dnd/basics)
    based on [the
    tutorial](http://www.html5rocks.com/en/tutorials/dnd/basics/) from
    HTML5Rocks.
-   [Drag and drop
    specification](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onDragStart => dragStartEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onDragStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ondragstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDragStart

::: {.features}
override
:::
:::

A stream of `dragstart` events fired when this element starts being
dragged.

Other resources
---------------

-   [Drag and drop
    sample](https://github.com/dart-lang/dart-samples/tree/master/html5/web/dnd/basics)
    based on [the
    tutorial](http://www.html5rocks.com/en/tutorials/dnd/basics/) from
    HTML5Rocks.
-   [Drag and drop
    specification](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onDragStart => dragStartEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onDragStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ondragstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDragStart
:::

A stream of `dragstart` events fired when this element starts being
dragged.

Other resources
---------------

-   [Drag and drop
    sample](https://github.com/dart-lang/dart-samples/tree/master/html5/web/dnd/basics)
    based on [the
    tutorial](http://www.html5rocks.com/en/tutorials/dnd/basics/) from
    HTML5Rocks.
-   [Drag and drop
    specification](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<MouseEvent> get onDragStart;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onDragStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ondragstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragStart

::: {.features}
override
:::
:::

Stream of `dragstart` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragStart => Element.dragStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onDragStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ondragstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragStart
:::

Stream of `dragstart` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragStart => Element.dragStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onDragStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ondragstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragStart
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragStart => dragStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onDragStart.html>
:::
