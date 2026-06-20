[dart:async](../../dart-async/dart-async-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[Future](../future-class)\<[bool](../../dart-core/bool-class)\> isEmpty
:::

Whether this stream contains any elements.

Waits for the first element of this stream, then completes the returned
future with `false`. If this stream ends without emitting any elements,
the returned future is completed with `true`.

If the first event is an error, the returned future is completed with
that error.

This operation listens to this stream, and a non-broadcast stream cannot
be reused after checking whether it is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<bool> get isEmpty {
  _Future<bool> future = new _Future<bool>();
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    future._complete(true);
  }, cancelOnError: true);
  subscription.onData((_) {
    _cancelAndValue(subscription, future, false);
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => identical(_sentinel._nextLink, _sentinel);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@pragma("vm:prefer-inline")
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => !iterator.moveNext();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => _root == null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => _length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/isempty.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
inherited
:::
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => readClasses().isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => _head == _tail;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/isempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isEmpty
:::

Whether this collection has no elements.

May be computed by checking if `iterator.moveNext()` returns `false`.

Example:

``` {.language-dart data-language="dart"}
final emptyList = <int>[];
print(emptyList.isEmpty); // true;
print(emptyList.iterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => !iterator.moveNext();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty {
  return (_root == null);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/isempty.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => keys.isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/isempty.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => _map.isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/isempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/isempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/isempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/isempty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty

::: {.features}
override
:::
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => _key(0) == null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/stringbuffer/isempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isEmpty
:::

Returns whether the buffer is empty. This is a constant-time operation.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty => length == 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/StringBuffer/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/bytesbuilder/isempty.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) isEmpty
:::

Whether the buffer is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/BytesBuilder/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/isempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isEmpty
:::

Whether there is no key/value pair in the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/isEmpty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/isempty.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

isEmpty property
================

::: {#getter .section .multi-line-signature}
[bool](../bool-class) isEmpty
:::

Whether this string is empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get isEmpty;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/isEmpty.html>
:::
