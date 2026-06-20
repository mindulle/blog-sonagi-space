[dart:html](../../dart-html/dart-html-library){._links-link}

onBeforeCopy property
=====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onBeforeCopy
:::

Stream of `beforecopy` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onBeforeCopy => Element.beforeCopyEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onBeforeCopy.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onbeforecopy.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onBeforeCopy property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onBeforeCopy
:::

Stream of `beforecopy` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onBeforeCopy => beforeCopyEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onBeforeCopy.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onbeforecopy.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onBeforeCopy property
=====================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onBeforeCopy
:::

Stream of `beforecopy` events handled by this
[Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onBeforeCopy;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onBeforeCopy.html>
:::
