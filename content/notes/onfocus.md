[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onFocus

::: {.features}
override
:::
:::

Stream of `focus` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onFocus => focusEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/bodyelement/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onFocus

::: {.features}
override
:::
:::

Stream of `focus` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onFocus => focusEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onFocus

::: {.features}
override
:::
:::

Stream of `focus` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onFocus => focusEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onFocus

::: {.features}
override
:::
:::

Stream of `focus` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onFocus => Element.focusEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onFocus
:::

Stream of `focus` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onFocus => Element.focusEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onFocus
:::

Stream of `focus` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onFocus;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onFocus
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onFocus => focusEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onFocus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/vrsession/onfocus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onFocus property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onFocus
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onFocus => focusEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VRSession/onFocus.html>
:::
