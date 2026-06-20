[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(Object? value) {
  int initialSplayCount = _splayCount;
  bool visit(_SplayTreeMapNode<K, V>? node) {
    while (node != null) {
      if (node.value == value) return true;
      if (initialSplayCount != _splayCount) {
        throw ConcurrentModificationError(this);
      }
      if (node._right != null && visit(node._right)) {
        return true;
      }
      node = node._left;
    }
    return false;
  }

  return visit(_root);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/containsvalue.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(Object? value) {
  for (K key in keys) {
    if (this[key] == value) return true;
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/containsvalue.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(Object? value) => _map.containsValue(value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/containsvalue.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(Object? value) => values.any((e) => e == value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/containsvalue.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  dynamic value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(dynamic value) => values.any((e) => e == value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/containsvalue.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  dynamic value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(dynamic value) => values.any((e) => e == value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/containsvalue.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  dynamic value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(dynamic value) => values.any((e) => e == value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/containsvalue.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsValue(

1.  dynamic value

)

::: {.features}
override
:::
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(dynamic value) => values.any((e) => e == value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/containsValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/containsvalue.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

containsValue method
====================

::: {.section .multi-line-signature}
[bool](../bool-class) containsValue(

1.  [Object](../object-class)? value

)
:::

Whether this map contains the given `value`.

Returns true if any of the values in the map are equal to `value`
according to the `==` operator.

``` {.language-dart data-language="dart"}
final moonCount = <String, int>{'Mercury': 0, 'Venus': 0, 'Earth': 1,
  'Mars': 2, 'Jupiter': 79, 'Saturn': 82, 'Uranus': 27, 'Neptune': 14 };
final moons3 = moonCount.containsValue(3); // false
final moons82 = moonCount.containsValue(82); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsValue(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/containsValue.html>
:::
