[dart:html](../../dart-html/dart-html-library){._links-link}

onCopy property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ClipboardEvent](../clipboardevent-class)\>
onCopy
:::

Stream of `copy` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ClipboardEvent> get onCopy => Element.copyEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onCopy.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/oncopy.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onCopy property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[ClipboardEvent](../clipboardevent-class)\>
onCopy
:::

Stream of `copy` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<ClipboardEvent> get onCopy => copyEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onCopy.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/oncopy.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onCopy property
===============

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[ClipboardEvent](../clipboardevent-class)\>
onCopy
:::

Stream of `copy` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<ClipboardEvent> get onCopy;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onCopy.html>
:::
