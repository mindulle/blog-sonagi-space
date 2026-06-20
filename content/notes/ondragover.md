[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onDragOver

::: {.features}
override
:::
:::

A stream of `dragover` events fired when a dragged object is currently
being dragged over this element.

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
ElementStream<MouseEvent> get onDragOver => dragOverEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onDragOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ondragover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDragOver

::: {.features}
override
:::
:::

A stream of `dragover` events fired when a dragged object is currently
being dragged over this element.

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
ElementStream<MouseEvent> get onDragOver => dragOverEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onDragOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ondragover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDragOver
:::

A stream of `dragover` events fired when a dragged object is currently
being dragged over this element.

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
ElementStream<MouseEvent> get onDragOver;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onDragOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ondragover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragOver

::: {.features}
override
:::
:::

Stream of `dragover` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragOver => Element.dragOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onDragOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ondragover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragOver
:::

Stream of `dragover` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragOver => Element.dragOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onDragOver.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ondragover.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDragOver property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDragOver
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDragOver => dragOverEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onDragOver.html>
:::
