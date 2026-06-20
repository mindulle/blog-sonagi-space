[dart:io](../../dart-io/dart-io-library){._links-link}

level property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) level
:::

A platform specific value used to determine the kind of control message.

Together with [type](type), these two integers identify the kind of
control message in a platform specific way. For example, on Linux
certain combinations of these values indicate that this is a control
message that carries [ResourceHandle](../resourcehandle-class)s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get level;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SocketControlMessage/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibencoder/level.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

level property
==============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) level

::: {.features}
final
:::
:::

The compression-[level](level) can be set in the range of `-1..9`, with
`6` being the default compression level. Levels above `6` will have
higher compression rates at the cost of more CPU and memory usage.
Levels below `6` will use less CPU and memory at the cost of lower
compression rates.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int level;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibEncoder/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/gzipcodec/level.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

level property
==============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) level

::: {.features}
final
:::
:::

The compression-[level](level) can be set in the range of `-1..9`, with
`6` being the default compression level. Levels above `6` will have
higher compression rates at the cost of more CPU and memory usage.
Levels below `6` will use less CPU and memory at the cost of lower
compression rates.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int level;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/GZipCodec/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibcodec/level.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

level property
==============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) level

::: {.features}
final
:::
:::

The compression-[level](level) can be set in the range of `-1..9`, with
`6` being the default compression level. Levels above `6` will have
higher compression rates at the cost of more CPU and memory usage.
Levels below `6` will use less CPU and memory at the cost of lower
compression rates.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int level;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibCodec/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsocketoption/level.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

level property
==============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) level

::: {.features}
final
:::
:::

The level for the option to set or get.

See also:

-   [RawSocketOption.levelSocket](levelsocket)
-   [RawSocketOption.levelIPv4](levelipv4)
-   [RawSocketOption.levelIPv6](levelipv6)
-   [RawSocketOption.levelTcp](leveltcp)
-   [RawSocketOption.levelUdp](leveludp)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int level;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSocketOption/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/accessiblenode/level.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

level property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? level
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get level native;
```

::: {#setter .section .multi-line-signature}
void level=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set level(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNode/level.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/batterymanager/level.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

level property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? level
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get level native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BatteryManager/level.html>
:::
