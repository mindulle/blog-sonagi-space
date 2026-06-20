[dart:html](../../dart-html/dart-html-library){._links-link}

memory property
===============

::: {#getter .section .multi-line-signature}
[MemoryInfo](../memoryinfo-class)? memory
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MemoryInfo? get memory =>
    _isConsoleDefined ? JS('MemoryInfo', 'window.console.memory') : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/memory.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerperformance/memory.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

memory property
===============

::: {#getter .section .multi-line-signature}
[MemoryInfo](../memoryinfo-class)? memory
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MemoryInfo? get memory native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerPerformance/memory.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/performance/memory.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

memory property
===============

::: {#getter .section .multi-line-signature}
[MemoryInfo](../memoryinfo-class)? memory
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MemoryInfo? get memory native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Performance/memory.html>
:::
