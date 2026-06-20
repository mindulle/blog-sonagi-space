[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onSelect

::: {.features}
override
:::
:::

Stream of `select` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onSelect => selectEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onSelect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onselect.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onSelect

::: {.features}
override
:::
:::

Stream of `select` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onSelect => selectEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onSelect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onselect.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onSelect

::: {.features}
override
:::
:::

Stream of `select` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onSelect => Element.selectEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onSelect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onselect.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onSelect
:::

Stream of `select` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onSelect => Element.selectEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onSelect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onselect.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onSelect
:::

Stream of `select` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onSelect;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onSelect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onselect.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onSelect property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onSelect
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onSelect => selectEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onSelect.html>
:::
