[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(Object? key) => _containsKey(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/containskey.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(Object? key) => _map.containsKey(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/containskey.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(Object? key) => keys.contains(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/containskey.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(Object? key) => _getItem(key as String) != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/containskey.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  dynamic key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(dynamic key) => _getItem(key) != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/containskey.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  dynamic key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(dynamic key) => _getItem(key) != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/containskey.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  dynamic key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(dynamic key) => _getItem(key) != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/containskey.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsKey(

1.  dynamic key

)

::: {.features}
override
:::
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(dynamic key) => _getItem(key) != null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/containsKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/containskey.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

containsKey method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) containsKey(

1.  [Object](../object-class)? key

)
:::

Whether this map contains the given `key`.

Returns true if any of the keys in the map are equal to `key` according
to the equality used by the map.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final containsUranus = moonCount.containsKey('Uranus'); // true
final containsPluto = moonCount.containsKey('Pluto'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsKey(Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/containsKey.html>
:::
