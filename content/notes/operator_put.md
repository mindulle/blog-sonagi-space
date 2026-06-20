[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(K key, V value) {
  // Splay on the key to move the last node on the search path for
  // the key to the root of the tree.
  int comp = _splay(key);
  if (comp == 0) {
    _root = _root!._replaceValue(value);
    // To represent structure change, in case someone caches the old node.
    _splayCount += 1;
    return;
  }
  _addNewRoot(_SplayTreeMapNode(key, value), comp);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointerpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Pointer](../pointer-class)\<T\> value

)
:::

Store a Dart value into this location offset by `index`.

A [Pointer](../pointer-class) is unboxed before being stored (as if by
`.address`), and the pointer is boxed (as if by
[Pointer.fromAddress](../pointer/pointer.fromaddress)) when loaded.

On 32-bit platforms the [address](../pointer/address) must be 4-byte
aligned, and on 64-bit platforms the [address](../pointer/address) must
be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, Pointer<T> value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/PointerPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectlist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
    value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Rectangle value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [SpeechGrammar](../speechgrammar-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, SpeechGrammar value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [SourceBuffer](../sourcebuffer-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, SourceBuffer value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [TextTrackCue](../texttrackcue-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, TextTrackCue value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [String](../../dart-core/string-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, String value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [TextTrack](../texttrack-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, TextTrack value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [MimeType](../mimetype-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, MimeType value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/operator_put.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [String](../../dart-core/string-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, String value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/operator_put.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Transform](../transform-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Transform value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Plugin](../plugin-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Plugin value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Node](../node-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Node value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Touch](../touch-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Touch value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/operator_put.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Length](../length-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Length value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/operator_put.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Number](../number-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Number value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [File](../file-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, File value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Node](../node-class) value

)

::: {.features}
override
:::
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, Node value) {
  throw new UnsupportedError("Cannot assign element of immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int16pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 16-bit two\'s complement integer at `address + 2 * index`.

A Dart integer is truncated to 16 bits (as if by `.toSigned(16)`) before
being stored, and the 16-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 2-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int16Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int32pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 32-bit two\'s complement integer at `address + 4 * index`.

A Dart integer is truncated to 32 bits (as if by `.toSigned(32)`) before
being stored, and the 32-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int32Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/expando/operator_put.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [Object](../object-class) object,
2.  T? value

)
:::

Sets this [Expando](../expando-class)\'s property value on the given
object to `value`.

Properties can effectively be removed again by setting their value to
`null`.

The object must not be a number, a string, a boolean, `null`, a
`dart:ffi` pointer, a `dart:ffi` struct, or a `dart:ffi` union.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(Object object, T? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Expando/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint16pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

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
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint16Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint32pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

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
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint32Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/operator_put.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [String](../../dart-core/string-class) key,
2.  dynamic value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(String key, dynamic value) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [String](../../dart-core/string-class) key,
2.  dynamic value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(String key, dynamic value) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [String](../../dart-core/string-class) key,
2.  [String](../../dart-core/string-class) value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(String key, String value) {
  _setItem(key, value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [String](../../dart-core/string-class) key,
2.  dynamic value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(String key, dynamic value) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/operator_put.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [String](../../dart-core/string-class) key,
2.  dynamic value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(String key, dynamic value) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/floatpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)
:::

The float at `address + 4 * index`.

A Dart double loses precision before being stored, and the float value
is converted to a double when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/FloatPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int8pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 8-bit two\'s complement integer at `address + index`.

A Dart integer is truncated to 8 bits (as if by `.toSigned(8)`) before
being stored, and the 8-bit value is sign-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int8Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint8pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 8-bit unsigned integer at `address + index`.

A Dart integer is truncated to 8 bits (as if by `.toUnsigned(8)`) before
being stored, and the 8-bit value is zero-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint8Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Float32x4](../float32x4-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Float64x2](../float64x2-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/operator_put.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Int32x4](../int32x4-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/structpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  T value

)
:::

Copies the `value` struct into native memory, starting at
`address * sizeOf<T>() * index`.

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, T value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/StructPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/unionpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  T value

)
:::

Copies the `value` union into native memory, starting at
`address * sizeOf<T>() * index`.

This extension method must be invoked on a receiver of type `Pointer<T>`
where `T` is a compile-time constant type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, T value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/UnionPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/operator_put.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(K key, V value) {
  _map[key] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/operator_put.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  E value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/operator_put.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)

::: {.features}
override
:::
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
operator []=(K key, V value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/operator_put.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../int-class) index,
2.  E value

)
:::

Sets the value at the given `index` in the list to `value`.

The `index` must be a valid index of this list, which means that `index`
must be non-negative and less than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(int index, E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int64pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 64-bit two\'s complement integer at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int64Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint64pointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The 64-bit unsigned integer at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint64Pointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/operator_put.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(K key, V value) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/operator_put.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(K key, V value) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/doublepointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)
:::

The double at `address + 8 * index`.

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DoublePointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/operator_put.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  K key,
2.  V value

)
:::

Associates the `key` with the given `value`.

If the key was already in the map, its associated value is changed.
Otherwise the key/value pair is added to the map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void operator []=(K key, V value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/abispecificintegerpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

The integer at `address + sizeOf<T>() * index`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/boolpointer/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [bool](../../dart-core/bool-class) value

)
:::

The bool at `address + index`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, bool value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/BoolPointer/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/operator_put.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [Object](../../dart-core/object-class) property,
2.  [Object](../../dart-core/object-class)? value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(Object property, Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/abispecificintegerarray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/doublearray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DoubleArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/floatarray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [double](../../dart-core/double-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/FloatArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointerarray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Pointer](../pointer-class)\<T\> value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, Pointer<T> value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/PointerArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/boolarray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [bool](../../dart-core/bool-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, bool value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/BoolArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/arrayarray/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [Array](../array-class)\<T\> value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, Array<T> value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/ArrayArray/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint16array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint16Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint32array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint32Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint64array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint64Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int16array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int16Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int32array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int32Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int64array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int64Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint8array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint8Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int8array/operator_put.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [int](../../dart-core/int-class) index,
2.  [int](../../dart-core/int-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(int index, int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int8Array/operator_put.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/operator_put.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

operator \[\]= method
=====================

::: {.section .multi-line-signature}
void operator \[\]=(

1.  [Object](../../dart-core/object-class) index,
2.  E value

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void operator []=(Object index, E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/operator_put.html>
:::
