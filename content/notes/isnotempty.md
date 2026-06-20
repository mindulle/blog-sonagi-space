[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => _root != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => length != 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/isnotempty.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
inherited
:::
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => readClasses().isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/isnotempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isNotEmpty
:::

Whether this collection has at least one element.

May be computed by checking if `iterator.moveNext()` returns `true`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>{1, 2, 3};
print(numbers.isNotEmpty); // true;
print(numbers.iterator.moveNext()); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => keys.isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => _map.isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/isnotempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/isnotempty.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/isnotempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/isnotempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/isnotempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/isnotempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty

::: {.features}
override
:::
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/stringbuffer/isnotempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isNotEmpty
:::

Returns whether the buffer is not empty. This is a constant-time
operation.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty => !isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/StringBuffer/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/bytesbuilder/isnotempty.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isNotEmpty
:::

Whether the buffer is non-empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/BytesBuilder/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/isnotempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isNotEmpty
:::

Whether there is at least one key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/isNotEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/isnotempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isNotEmpty property
===================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isNotEmpty
:::

Whether this string is not empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isNotEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/isNotEmpty.html>
:::
