[dart:html](../../dart-html/dart-html-library){._links-link}

persisted method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[bool](../../dart-core/bool-class)\>
persisted()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<bool> persisted() =>
    promiseToFuture<bool>(JS("", "#.persisted()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/StorageManager/persisted.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pagetransitionevent/persisted.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

persisted property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? persisted
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get persisted native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PageTransitionEvent/persisted.html>
:::
