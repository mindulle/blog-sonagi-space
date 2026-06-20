[dart:svg](../../dart-svg/dart-svg-library){._links-link}

doubleClickEvent constant
=========================

::: {.section .multi-line-signature}
[EventStreamProvider](../../dart-html/eventstreamprovider-class)\<[Event](../../dart-html/event-class)\>
const doubleClickEvent

::: {.features}
\@DomName(\'SVGElement.dblclickEvent\')
:::
:::

Static factory designed to expose `doubleclick` events to event handlers
that are not necessarily instances of
[Element](../../dart-html/element-class).

See [EventStreamProvider](../../dart-html/eventstreamprovider-class) for
usage information.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('SVGElement.dblclickEvent')
static const EventStreamProvider<Event> doubleClickEvent =
    const EventStreamProvider<Event>('dblclick');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/doubleClickEvent-constant.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/doubleclickevent-constant.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

doubleClickEvent constant
=========================

::: {.section .multi-line-signature}
[EventStreamProvider](../eventstreamprovider-class)\<[Event](../event-class)\>
const doubleClickEvent

::: {.features}
\@DomName(\'Element.dblclickEvent\')
:::
:::

Static factory designed to expose `doubleclick` events to event handlers
that are not necessarily instances of [Element](../element-class).

See [EventStreamProvider](../eventstreamprovider-class) for usage
information.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('Element.dblclickEvent')
static const EventStreamProvider<Event> doubleClickEvent =
    const EventStreamProvider<Event>('dblclick');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/doubleClickEvent-constant.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/doubleclickevent-constant.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

doubleClickEvent constant
=========================

::: {.section .multi-line-signature}
[EventStreamProvider](../eventstreamprovider-class)\<[Event](../event-class)\>
const doubleClickEvent

::: {.features}
\@DomName(\'GlobalEventHandlers.dblclickEvent\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@DomName('GlobalEventHandlers.dblclickEvent')
static const EventStreamProvider<Event> doubleClickEvent =
    const EventStreamProvider<Event>('dblclick');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/doubleClickEvent-constant.html>
:::
