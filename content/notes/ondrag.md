[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onDrag

::: {.features}
override
:::
:::

A stream of `drag` events fired when this element currently being
dragged.

A `drag` event is added to this stream as soon as the drag begins. A
`drag` event is also added to this stream at intervals while the drag
operation is still ongoing.

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
ElementStream<MouseEvent> get onDrag => dragEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onDrag.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ondrag.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDrag

::: {.features}
override
:::
:::

A stream of `drag` events fired when this element currently being
dragged.

A `drag` event is added to this stream as soon as the drag begins. A
`drag` event is also added to this stream at intervals while the drag
operation is still ongoing.

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
ElementStream<MouseEvent> get onDrag => dragEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onDrag.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ondrag.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDrag
:::

A stream of `drag` events fired when this element currently being
dragged.

A `drag` event is added to this stream as soon as the drag begins. A
`drag` event is also added to this stream at intervals while the drag
operation is still ongoing.

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
ElementStream<MouseEvent> get onDrag;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onDrag.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ondrag.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrag

::: {.features}
override
:::
:::

Stream of `drag` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrag => Element.dragEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onDrag.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ondrag.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrag
:::

Stream of `drag` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrag => Element.dragEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onDrag.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ondrag.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrag property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrag
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrag => dragEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onDrag.html>
:::
