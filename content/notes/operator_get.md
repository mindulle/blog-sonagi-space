[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
V? operator \[\](

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? operator [](Object? key) {
  if (!_validKey(key)) return null;
  if (_root != null) {
    int comp = _splay(key as dynamic);
    if (comp == 0) {
      return _root!.value;
    }
  }
  return null;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/operator_get.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[String](../string-class) operator \[\](

1.  [int](../int-class) index

)
:::

The character (as a single-code-unit [String](../string-class)) at the
given `index`.

The returned string represents exactly one UTF-16 code unit, which may
be half of a surrogate pair. A single member of a surrogate pair is an
invalid UTF-16 string:

``` {.language-dart data-language="dart"}
var clef = '\u{1D11E}';
// These represent invalid UTF-16 strings.
clef[0].codeUnits;      // [0xD834]
clef[1].codeUnits;      // [0xDD1E]
```

This method is equivalent to
`String.fromCharCode(this.codeUnitAt(index))`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? operator \[\](

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? operator [](Object? key) => _getItem(key as String);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("Rectangle", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/operator_get.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)? operator \[\](

1.  dynamic key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map? operator [](dynamic key) => _getItem(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/operator_get.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
V? operator \[\](

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? operator [](Object? key) => _map[key];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[SpeechGrammar](../speechgrammar-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SpeechGrammar operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("SpeechGrammar", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[SourceBuffer](../sourcebuffer-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceBuffer operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("SourceBuffer", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[TextTrackCue](../texttrackcue-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrackCue operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("TextTrackCue", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/operator_get.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
V? operator \[\](

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? operator [](Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)? operator \[\](

1.  dynamic key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map? operator [](dynamic key) => _getItem(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)? operator \[\](

1.  dynamic key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map? operator [](dynamic key) => _getItem(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)? operator \[\](

1.  dynamic key

)

::: {.features}
override
:::
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map? operator [](dynamic key) => _getItem(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointerpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Pointer](../pointer-class)\<T\> operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Load a Dart value from this location offset by `index`.

A [Pointer](../pointer-class) is unboxed before being stored (as if by
`.address`), and the pointer is boxed (as if by `Pointer.fromAddress`)
when loaded.

On 32-bit platforms the [address](../pointer/address) must be 4-byte
aligned, and on 64-bit platforms the [address](../pointer/address) must
be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<T> operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/PointerPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("String", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[TextTrack](../texttrack-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrack operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("TextTrack", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[MimeType](../mimetype-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MimeType operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("MimeType", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Plugin](../plugin-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Plugin operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("Plugin", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Node](../node-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("Node", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Touch](../touch-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Touch operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("Touch", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/operator_get.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return this.getItem(index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/operator_get.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Transform](../transform-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Transform operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return this.getItem(index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[File](../file-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("File", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Node](../node-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return JS("Node", "#[#]", this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/operator_get.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
dynamic operator \[\](

1.  [Object](../../dart-core/object-class)? key

)
:::

Retrieves the zone-value associated with `key`.

If this zone does not contain the value looks up the same key in the
parent zone. If the `key` is not found returns `null`.

Any object can be used as key, as long as it has compatible
`operator ==` and `hashCode` implementations. By controlling access to
the key, a zone can grant or deny access to the zone value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic operator [](Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/operator_get.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Length](../length-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Length operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return this.getItem(index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/operator_get.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Number](../number-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Number operator [](int index) {
  if (JS("bool", "# >>> 0 !== # || # >= #", index, index, index, length))
    throw new RangeError.index(index, this);
  return this.getItem(index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementevents/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
operator \[\](

1.  [String](../../dart-core/string-class) type

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> operator [](String type) {
  if (webkitEvents.keys.contains(type.toLowerCase())) {
    if (Device.isWebKit) {
      return new _ElementEventStreamImpl(
          _ptr, webkitEvents[type.toLowerCase()], false);
    }
  }
  return new _ElementEventStreamImpl(_ptr, type, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementEvents/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/operator_get.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
V? operator \[\](

1.  [Object](../object-class)? key

)
:::

The value for the given `key`, or `null` if `key` is not in the map.

Some maps allow `null` as a value. For those maps, a lookup using this
operator cannot distinguish between a key not being in the map, and the
key being there with a `null` value. Methods like
[containsKey](containskey) or [putIfAbsent](putifabsent) can be used if
the distinction is important.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? operator [](Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/structpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
T operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Creates a reference to access the fields of this struct backed by native
memory at `address + sizeOf<T>() * index`.

The [address](../pointer/address) must be aligned according to the
struct alignment rules of the platform.

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/StructPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/unionpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
T operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Creates a reference to access the fields of this union backed by native
memory at `address + sizeOf<T>() * index`.

The [address](../pointer/address) must be aligned according to the union
alignment rules of the platform.

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/UnionPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int16pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 16-bit two\'s complement integer at `address + 2 * index`.

A Dart integer is truncated to 16 bits (as if by `.toSigned(16)`) before
being stored, and the 16-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 2-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int16Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int32pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 32-bit two\'s complement integer at `address + 4 * index`.

A Dart integer is truncated to 32 bits (as if by `.toSigned(32)`) before
being stored, and the 32-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int32Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/operator_get.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>?
operator \[\](

1.  [String](../../dart-core/string-class) name

)
:::

The values for the header named `name`.

Returns null if there is no header with the provided name, otherwise
returns a new list containing the current values. Not that modifying the
list does not change the header.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<String>? operator [](String name);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint16pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 16-bit unsigned integer at `address + 2 * index`.

A Dart integer is truncated to 16 bits (as if by `.toUnsigned(16)`)
before being stored, and the 16-bit value is zero-extended when it is
loaded.

The [address](../pointer/address) must be 2-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint16Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint32pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 32-bit unsigned integer at `address + 4 * index`.

A Dart integer is truncated to 32 bits (as if by `.toUnsigned(32)`)
before being stored, and the 32-bit value is zero-extended when it is
loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint32Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/expando/operator_get.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
T? operator \[\](

1.  [Object](../object-class) object

)
:::

Gets the value of this [Expando](../expando-class)\'s property on the
given object.

If the object hasn\'t been expanded, the result is the `null` value.

The object must not be a number, a string, a boolean, `null`, a
`dart:ffi` pointer, a `dart:ffi` struct, or a `dart:ffi` union.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T? operator [](Object object);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Expando/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/operator_get.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
E operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E operator [](int index) => _source.elementAt(index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/floatpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The float at `address + 4 * index`.

A Dart double loses precision before being stored, and the float value
is converted to a double when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/FloatPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int8pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 8-bit two\'s complement integer at `address + index`.

A Dart integer is truncated to 8 bits (as if by `.toSigned(8)`) before
being stored, and the 8-bit value is sign-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int8Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint8pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 8-bit unsigned integer at `address + index`.

A Dart integer is truncated to 8 bits (as if by `.toUnsigned(8)`) before
being stored, and the 8-bit value is zero-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint8Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/operator_get.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
E operator \[\](

1.  [Object](../../dart-core/object-class) index

)

::: {.features}
override
:::
:::

Returns the value associated with `property` from the proxied JavaScript
object.

The type of `property` must be either
[String](../../dart-core/string-class) or
[num](../../dart-core/num-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external E operator [](Object index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/operator_get.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
dynamic operator \[\](

1.  [Object](../../dart-core/object-class) property

)
:::

Returns the value associated with `property` from the proxied JavaScript
object.

The type of `property` must be either
[String](../../dart-core/string-class) or
[num](../../dart-core/num-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external dynamic operator [](Object property);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int64pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 64-bit two\'s complement integer at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int64Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint64pointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The 64-bit unsigned integer at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint64Pointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/operator_get.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
E operator \[\](

1.  [int](../int-class) index

)
:::

The object at the given `index` in the list.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/doublepointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The double at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DoublePointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/match/operator_get.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[String](../string-class)? operator \[\](

1.  [int](../int-class) group

)
:::

The string matched by the given `group`.

If `group` is 0, returns the match of the pattern.

Short alias for [Match.group](group).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? operator [](int group);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Match/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/events/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
operator \[\](

1.  [String](../../dart-core/string-class) type

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> operator [](String type) {
  return new _EventStream(_ptr, type, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Events/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datatransferitemlist/operator_get.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[DataTransferItem](../datatransferitem-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DataTransferItem operator [](int index) {
  return JS('DataTransferItem', '#[#]', this, index);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataTransferItemList/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/structarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
T operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/StructArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/unionarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
T operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/UnionArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/operator_get.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
N operator [](int index) => _list[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/abispecificintegerpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The integer at `address + sizeOf<T>() * index`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/boolpointer/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

The bool at `address + index`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/BoolPointer/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/abispecificintegerarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/doublearray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DoubleArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/floatarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/FloatArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointerarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Pointer](../pointer-class)\<T\> operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<T> operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/PointerArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/boolarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/BoolArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/arrayarray/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[Array](../array-class)\<T\> operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Array<T> operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/ArrayArray/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint16array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint16Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint32array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint32Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint64array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint64Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int16array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int16Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int32array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int32Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int64array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int64Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint8array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint8Array/operator_get.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int8array/operator_get.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\] method
====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) operator \[\](

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int operator [](int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int8Array/operator_get.html>
:::
