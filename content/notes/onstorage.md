[dart:html](../../dart-html/dart-html-library){._links-link}

onStorage property
==================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[StorageEvent](../storageevent-class)\>
onStorage

::: {.features}
override
:::
:::

Stream of `storage` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<StorageEvent> get onStorage => storageEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onStorage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onstorage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onStorage property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[StorageEvent](../storageevent-class)\>
onStorage

::: {.features}
override
:::
:::

Stream of `storage` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<StorageEvent> get onStorage => storageEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onStorage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windoweventhandlers/onstorage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onStorage property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[StorageEvent](../storageevent-class)\>
onStorage
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<StorageEvent> get onStorage => storageEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowEventHandlers/onStorage.html>
:::
