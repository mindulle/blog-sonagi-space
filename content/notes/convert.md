[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [Object](../../dart-core/object-class)? object

)

::: {.features}
override
:::
:::

Converts `object` to a JSON [String](../../dart-core/string-class).

Directly serializable values are [num](../../dart-core/num-class),
[String](../../dart-core/string-class),
[bool](../../dart-core/bool-class), and
[Null](../../dart-core/null-class), as well as some
[List](../../dart-core/list-class) and [Map](../../dart-core/map-class)
values. For [List](../../dart-core/list-class), the elements must all be
serializable. For [Map](../../dart-core/map-class), the keys must be
[String](../../dart-core/string-class) and the values must be
serializable.

If a value of any other type is attempted to be serialized, the
`toEncodable` function provided in the constructor is called with the
value as argument. The result, which must be a directly serializable
value, is serialized instead of the original value.

If the conversion throws, or returns a value that is not directly
serializable, a
[JsonUnsupportedObjectError](../jsonunsupportedobjecterror-class)
exception is thrown. If the call throws, the error is caught and stored
in the
[JsonUnsupportedObjectError](../jsonunsupportedobjecterror-class)\'s
`cause` field.

If a [List](../../dart-core/list-class) or
[Map](../../dart-core/map-class) contains a reference to itself,
directly or through other lists or maps, it cannot be serialized and a
[JsonCyclicError](../jsoncyclicerror-class) is thrown.

`object` should not change during serialization.

If an object is serialized more than once, [convert](convert) may cache
the text for it. In other words, if the content of an object changes
after it is first serialized, the new values may not be reflected in the
result.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(Object? object) =>
    _JsonStringStringifier.stringify(object, _toEncodable, indent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonEncoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8encoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) convert(

1.  [String](../../dart-core/string-class) string,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Converts `string` to its UTF-8 code units (a list of unsigned 8-bit
integers).

If `start` and `end` are provided, only the substring
`string.substring(start, end)` is converted.

Any unpaired surrogate character (`U+D800`-`U+DFFF`) in the input string
is encoded as a Unicode Replacement character `U+FFFD` (�).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List convert(String string, [int start = 0, int? end]) {
  var stringLength = string.length;
  end = RangeError.checkValidRange(start, end, stringLength);
  var length = end - start;
  if (length == 0) return Uint8List(0);
  // Create a new encoder with a length that is guaranteed to be big enough.
  // A single code unit uses at most 3 bytes, a surrogate pair at most 4.
  var encoder = _Utf8Encoder.withBufferSize(length * 3);
  var endPosition = encoder._fillBuffer(string, start, end);
  assert(endPosition >= end - 1);
  if (endPosition != end) {
    // Encoding skipped the last code unit.
    // That can only happen if the last code unit is a leadsurrogate.
    // Force encoding of the lead surrogate by itself.
    var lastCodeUnit = string.codeUnitAt(end - 1);
    assert(_isLeadSurrogate(lastCodeUnit));
    // Write a replacement character to represent the unpaired surrogate.
    encoder._writeReplacementCharacter();
  }
  return encoder._buffer.sublist(0, encoder._bufferIndex);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Encoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsonutf8encoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
convert(

1.  [Object](../../dart-core/object-class)? object

)

::: {.features}
override
:::
:::

Convert `object` into UTF-8 encoded JSON.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int> convert(Object? object) {
  var bytes = <List<int>>[];
  // The `stringify` function always converts into chunks.
  // Collect the chunks into the `bytes` list, then combine them afterwards.
  void addChunk(Uint8List chunk, int start, int end) {
    if (start > 0 || end < chunk.length) {
      var length = end - start;
      chunk =
          Uint8List.view(chunk.buffer, chunk.offsetInBytes + start, length);
    }
    bytes.add(chunk);
  }

  _JsonUtf8Stringifier.stringify(
      object, _indent, _toEncodable, _bufferSize, addChunk);
  if (bytes.length == 1) return bytes[0];
  var length = 0;
  for (var i = 0; i < bytes.length; i++) {
    length += bytes[i].length;
  }
  var result = Uint8List(length);
  for (var i = 0, offset = 0; i < bytes.length; i++) {
    var byteList = bytes[i];
    int end = offset + byteList.length;
    result.setRange(offset, end, byteList);
    offset = end;
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonUtf8Encoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsondecoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
dynamic convert(

1.  [String](../../dart-core/string-class) input

)

::: {.features}
override
:::
:::

Converts the given JSON-string `input` to its corresponding object.

Parsed JSON values are of the types [num](../../dart-core/num-class),
[String](../../dart-core/string-class),
[bool](../../dart-core/bool-class), [Null](../../dart-core/null-class),
[List](../../dart-core/list-class)s of parsed JSON values or
[Map](../../dart-core/map-class)s from
[String](../../dart-core/string-class) to parsed JSON values.

If `this` was initialized with a reviver, then the parsing operation
invokes the reviver on every object or list property that has been
parsed. The arguments are the property name
([String](../../dart-core/string-class)) or list index
([int](../../dart-core/int-class)), and the value is the parsed value.
The return value of the reviver is used as the value of that property
instead the parsed value.

Throws [FormatException](../../dart-core/formatexception-class) if the
input is not valid JSON text.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic convert(String input) => _parseJson(input, _reviver);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonDecoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64decoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) convert(

1.  [String](../../dart-core/string-class) input,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Decodes the characters of `input` from `start` to `end` as base64.

If `start` is omitted, it defaults to the start of `input`. If `end` is
omitted, it defaults to the end of `input`.

The returned [Uint8List](../../dart-typed_data/uint8list-class) contains
exactly the decoded bytes, so the
[Uint8List.length](../../dart-core/list/length) is precisely the number
of decoded bytes. The
[Uint8List.buffer](../../dart-typed_data/typeddata/buffer) may be larger
than the decoded bytes.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List convert(String input, [int start = 0, int? end]) {
  end = RangeError.checkValidRange(start, end, input.length);
  if (start == end) return Uint8List(0);
  var decoder = _Base64Decoder();
  var buffer = decoder.decode(input, start, end)!;
  decoder.close(input, end);
  return buffer;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Decoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8decoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    codeUnits,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
override
:::
:::

Converts the UTF-8 `codeUnits` (a list of unsigned 8-bit integers) to
the corresponding string.

Uses the code units from `start` to, but not including, `end`. If `end`
is omitted, it defaults to `codeUnits.length`.

If the `codeUnits` start with the encoding of a
[unicodeBomCharacterRune](../unicodebomcharacterrune-constant), that
character is discarded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(List<int> codeUnits, [int start = 0, int? end]) {
  // Allow the implementation to intercept and specialize based on the type
  // of codeUnits.
  var result = _convertIntercepted(_allowMalformed, codeUnits, start, end);
  if (result != null) {
    return result;
  }

  return _Utf8Decoder(_allowMalformed).convertSingle(codeUnits, start, end);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Decoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1encoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) convert(

1.  [String](../../dart-core/string-class) string,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Converts the [String](../../dart-core/string-class) into a list of its
code units.

If `start` and `end` are provided, only the substring
`string.substring(start, end)` is used as input to the conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List convert(String string, [int start = 0, int? end]) {
  var stringLength = string.length;
  end = RangeError.checkValidRange(start, end, stringLength);
  var length = end - start;
  var result = Uint8List(length);
  for (var i = 0; i < length; i++) {
    var codeUnit = string.codeUnitAt(start + i);
    if ((codeUnit & ~_subsetMask) != 0) {
      throw ArgumentError.value(
          string, "string", "Contains invalid characters.");
    }
    result[i] = codeUnit;
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Encoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciiencoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) convert(

1.  [String](../../dart-core/string-class) string,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Converts the [String](../../dart-core/string-class) into a list of its
code units.

If `start` and `end` are provided, only the substring
`string.substring(start, end)` is used as input to the conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List convert(String string, [int start = 0, int? end]) {
  var stringLength = string.length;
  end = RangeError.checkValidRange(start, end, stringLength);
  var length = end - start;
  var result = Uint8List(length);
  for (var i = 0; i < length; i++) {
    var codeUnit = string.codeUnitAt(start + i);
    if ((codeUnit & ~_subsetMask) != 0) {
      throw ArgumentError.value(
          string, "string", "Contains invalid characters.");
    }
    result[i] = codeUnit;
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiEncoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1decoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Converts the `bytes` (a list of unsigned 7- or 8-bit integers) to the
corresponding string.

If `start` and `end` are provided, only the sub-list of bytes from
`start` to `end` (`end` not inclusive) is used as input to the
conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(List<int> bytes, [int start = 0, int? end]) {
  end = RangeError.checkValidRange(start, end, bytes.length);
  for (var i = start; i < end; i++) {
    var byte = bytes[i];
    if ((byte & ~_subsetMask) != 0) {
      if (!_allowInvalid) {
        throw FormatException("Invalid value in input: $byte");
      }
      return _convertInvalid(bytes, start, end);
    }
  }
  return String.fromCharCodes(bytes, start, end);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Decoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciidecoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes,
2.  \[[int](../../dart-core/int-class) start = 0,
3.  [int](../../dart-core/int-class)? end\]

)

::: {.features}
inherited
:::
:::

Converts the `bytes` (a list of unsigned 7- or 8-bit integers) to the
corresponding string.

If `start` and `end` are provided, only the sub-list of bytes from
`start` to `end` (`end` not inclusive) is used as input to the
conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(List<int> bytes, [int start = 0, int? end]) {
  end = RangeError.checkValidRange(start, end, bytes.length);
  for (var i = start; i < end; i++) {
    var byte = bytes[i];
    if ((byte & ~_subsetMask) != 0) {
      if (!_allowInvalid) {
        throw FormatException("Invalid value in input: $byte");
      }
      return _convertInvalid(bytes, start, end);
    }
  }
  return String.fromCharCodes(bytes, start, end);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiDecoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/linesplitter/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>
convert(

1.  [String](../../dart-core/string-class) data

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<String> convert(String data) {
  var lines = <String>[];
  var end = data.length;
  var sliceStart = 0;
  var char = 0;
  for (var i = 0; i < end; i++) {
    var previousChar = char;
    char = data.codeUnitAt(i);
    if (char != _CR) {
      if (char != _LF) continue;
      if (previousChar == _CR) {
        sliceStart = i + 1;
        continue;
      }
    }
    lines.add(data.substring(sliceStart, i));
    sliceStart = i + 1;
  }
  if (sliceStart < end) {
    lines.add(data.substring(sliceStart, end));
  }
  return lines;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/LineSplitter/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibdecoder/convert.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes

)

::: {.features}
override
:::
:::

Convert a list of bytes using the options given to the
[ZLibDecoder](../zlibdecoder-class) constructor.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int> convert(List<int> bytes) {
  _BufferSink sink = new _BufferSink();
  startChunkedConversion(sink)
    ..add(bytes)
    ..close();
  return sink.builder.takeBytes();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibDecoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64encoder/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    input

)

::: {.features}
override
:::
:::

Converts `input` and returns the result of the conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(List<int> input) {
  if (input.isEmpty) return "";
  var encoder = _Base64Encoder(_urlSafe);
  var buffer = encoder.encode(input, 0, input.length, true)!;
  return String.fromCharCodes(buffer);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Encoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibencoder/convert.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
convert(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes

)

::: {.features}
override
:::
:::

Convert a list of bytes using the options given to the ZLibEncoder
constructor.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int> convert(List<int> bytes) {
  _BufferSink sink = new _BufferSink();
  startChunkedConversion(sink)
    ..add(bytes)
    ..close();
  return sink.builder.takeBytes();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibEncoder/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/htmlescape/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) convert(

1.  [String](../../dart-core/string-class) text

)

::: {.features}
override
:::
:::

Converts `input` and returns the result of the conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String convert(String text) {
  var val = _convert(text, 0, text.length);
  return val == null ? text : val;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/HtmlEscape/convert.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/converter/convert.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

convert method
==============

::: {.section .multi-line-signature}
T convert(

1.  S input

)
:::

Converts `input` and returns the result of the conversion.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T convert(S input);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Converter/convert.html>
:::
