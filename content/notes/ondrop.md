[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[MouseEvent](../../dart-html/mouseevent-class)\>
onDrop

::: {.features}
override
:::
:::

A stream of `drop` events fired when a dragged object is dropped on this
element.

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
ElementStream<MouseEvent> get onDrop => dropEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onDrop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ondrop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDrop

::: {.features}
override
:::
:::

A stream of `drop` events fired when a dragged object is dropped on this
element.

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
ElementStream<MouseEvent> get onDrop => dropEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onDrop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ondrop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[MouseEvent](../mouseevent-class)\>
onDrop
:::

A stream of `drop` events fired when a dragged object is dropped on this
element.

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
ElementStream<MouseEvent> get onDrop;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onDrop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ondrop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrop

::: {.features}
override
:::
:::

Stream of `drop` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrop => Element.dropEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onDrop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ondrop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrop
:::

Stream of `drop` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrop => Element.dropEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onDrop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ondrop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onDrop property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[MouseEvent](../mouseevent-class)\>
onDrop
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<MouseEvent> get onDrop => dropEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onDrop.html>
:::
