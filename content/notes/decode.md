[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) decode(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    codeUnits,
2.  {[bool](../../dart-core/bool-class)? allowMalformed}

)

::: {.features}
override
:::
:::

Decodes the UTF-8 `codeUnits` (a list of unsigned 8-bit integers) to the
corresponding string.

If the `codeUnits` start with the encoding of a
[unicodeBomCharacterRune](../unicodebomcharacterrune-constant), that
character is discarded.

If `allowMalformed` is `true`, the decoder replaces invalid (or
unterminated) character sequences with the Unicode Replacement character
`U+FFFD` (�). Otherwise it throws a
[FormatException](../../dart-core/formatexception-class).

If `allowMalformed` is not given, it defaults to the `allowMalformed`
that was used to instantiate `this`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String decode(List<int> codeUnits, {bool? allowMalformed}) {
  // Switch between const objects to avoid allocation.
  Utf8Decoder decoder = allowMalformed ?? _allowMalformed
      ? const Utf8Decoder(allowMalformed: true)
      : const Utf8Decoder(allowMalformed: false);
  return decoder.convert(codeUnits);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Codec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsoncodec/decode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
dynamic decode(

1.  [String](../../dart-core/string-class) source,
2.  {[Object](../../dart-core/object-class)? reviver(
    1.  [Object](../../dart-core/object-class)? key,
    2.  [Object](../../dart-core/object-class)? value

    )?}

)

::: {.features}
override
:::
:::

Parses the string and returns the resulting Json object.

The optional `reviver` function is called once for each object or list
property that has been parsed during decoding. The `key` argument is
either the integer list index for a list property, the string map key
for object properties, or `null` for the final result.

The default `reviver` (when not provided) is the identity function.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic decode(String source,
    {Object? reviver(Object? key, Object? value)?}) {
  reviver ??= _reviver;
  if (reviver == null) return decoder.convert(source);
  return JsonDecoder(reviver).convert(source);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonCodec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1codec/decode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) decode(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes,
2.  {[bool](../../dart-core/bool-class)? allowInvalid}

)

::: {.features}
override
:::
:::

Decodes the Latin-1 `bytes` (a list of unsigned 8-bit integers) to the
corresponding string.

If `bytes` contains values that are not in the range 0 .. 255, the
decoder will eventually throw a
[FormatException](../../dart-core/formatexception-class).

If `allowInvalid` is not provided, it defaults to the value used to
create this [Latin1Codec](../latin1codec-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String decode(List<int> bytes, {bool? allowInvalid}) {
  if (allowInvalid ?? _allowInvalid) {
    return const Latin1Decoder(allowInvalid: true).convert(bytes);
  } else {
    return const Latin1Decoder(allowInvalid: false).convert(bytes);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Codec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciicodec/decode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) decode(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes,
2.  {[bool](../../dart-core/bool-class)? allowInvalid}

)

::: {.features}
override
:::
:::

Decodes the ASCII `bytes` (a list of unsigned 7-bit integers) to the
corresponding string.

If `bytes` contains values that are not in the range 0 .. 127, the
decoder will eventually throw a
[FormatException](../../dart-core/formatexception-class).

If `allowInvalid` is not provided, it defaults to the value used to
create this [AsciiCodec](../asciicodec-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String decode(List<int> bytes, {bool? allowInvalid}) {
  if (allowInvalid ?? _allowInvalid) {
    return const AsciiDecoder(allowInvalid: true).convert(bytes);
  } else {
    return const AsciiDecoder(allowInvalid: false).convert(bytes);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiCodec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64codec/decode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) decode(

1.  [String](../../dart-core/string-class) encoded

)

::: {.features}
override
:::
:::

Decodes `encoded`.

The input is decoded as if by `decoder.convert`.

The returned [Uint8List](../../dart-typed_data/uint8list-class) contains
exactly the decoded bytes, so the
[Uint8List.length](../../dart-core/list/length) is precisely the number
of decoded bytes. The
[Uint8List.buffer](../../dart-typed_data/typeddata/buffer) may be larger
than the decoded bytes.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List decode(String encoded) => decoder.convert(encoded);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Codec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/systemencoding/decode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) decode(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    encoded

)

::: {.features}
override
:::
:::

Decodes `encoded` data.

The input is decoded as if by `decoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String decode(List<int> encoded) => decoder.convert(encoded);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SystemEncoding/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/codec/decode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
S decode(

1.  T encoded

)
:::

Decodes `encoded` data.

The input is decoded as if by `decoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
S decode(T encoded) => decoder.convert(encoded);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Codec/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imageelement/decode.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) decode()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future decode() => promiseToFuture(JS("", "#.decode()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageElement/decode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/imageelement/decode.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

decode method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) decode()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future decode() => promiseToFuture(JS("", "#.decode()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ImageElement/decode.html>
:::
