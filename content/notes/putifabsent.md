[dart:collection](../../dart-collection/dart-collection-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent()) {
  int comp = _splay(key);
  if (comp == 0) {
    return _root!.value;
  }
  int modificationCount = _modificationCount;
  int splayCount = _splayCount;
  V value = ifAbsent();
  if (modificationCount != _modificationCount) {
    throw ConcurrentModificationError(this);
  }
  if (splayCount != _splayCount) {
    comp = _splay(key);
    // Key is still not there, otherwise _modificationCount would be changed.
    assert(comp != 0);
  }
  _addNewRoot(_SplayTreeMapNode(key, value), comp);
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/putifabsent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) putIfAbsent(

1.  [String](../../dart-core/string-class) key,
2.  [String](../../dart-core/string-class) ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String putIfAbsent(String key, String ifAbsent()) {
  if (!containsKey(key)) this[key] = ifAbsent();
  return this[key] as String;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/putifabsent.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
dynamic putIfAbsent(

1.  [String](../../dart-core/string-class) key,
2.  dynamic ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic putIfAbsent(String key, dynamic ifAbsent()) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/putifabsent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
dynamic putIfAbsent(

1.  [String](../../dart-core/string-class) key,
2.  dynamic ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic putIfAbsent(String key, dynamic ifAbsent()) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/putifabsent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
dynamic putIfAbsent(

1.  [String](../../dart-core/string-class) key,
2.  dynamic ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic putIfAbsent(String key, dynamic ifAbsent()) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/putifabsent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
dynamic putIfAbsent(

1.  [String](../../dart-core/string-class) key,
2.  dynamic ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic putIfAbsent(String key, dynamic ifAbsent()) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/putifabsent.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent()) {
  if (containsKey(key)) {
    return this[key] as V;
  }
  return this[key] = ifAbsent();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/putifabsent.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)

::: {.features}
override
:::
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent()) => _map.putIfAbsent(key, ifAbsent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/putifabsent.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)
:::

Look up the value of `key`, or add a new entry if it isn\'t there.

Returns the value associated to `key`, if there is one. Otherwise calls
`ifAbsent` to get a new value, associates `key` to that value, and then
returns the new value.

``` {.language-dart data-language="dart"}
final diameters = <num, String>{1.0: 'Earth'};
final otherDiameters = <double, String>{0.383: 'Mercury', 0.949: 'Venus'};

for (final item in otherDiameters.entries) {
  diameters.putIfAbsent(item.key, () => item.value);
}
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}

// If the key already exists, the current value is returned.
final result = diameters.putIfAbsent(0.383, () => 'Random');
print(result); // Mercury
print(diameters); // {1.0: Earth, 0.383: Mercury, 0.949: Venus}
```

Calling `ifAbsent` must not add or remove keys from the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/putifabsent.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent()) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/putIfAbsent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/putifabsent.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

putIfAbsent method
==================

::: {.section .multi-line-signature}
V putIfAbsent(

1.  K key,
2.  V ifAbsent( )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V putIfAbsent(K key, V ifAbsent()) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/putIfAbsent.html>
:::
