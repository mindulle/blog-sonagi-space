[dart:io](../../dart-io/dart-io-library){._links-link}

destination property
====================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? destination

::: {.features}
final
:::
:::

The destination path of the file being moved.

The destination is `null` if the underlying implementation is unable to
identify the destination of the moved file.

The source path is available as [path](../filesystemevent/path).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String? destination;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemMoveEvent/destination.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/baseaudiocontext/destination.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

destination property
====================

::: {#getter .section .multi-line-signature}
[AudioDestinationNode](../audiodestinationnode-class)? destination
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AudioDestinationNode? get destination native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/BaseAudioContext/destination.html>
:::
