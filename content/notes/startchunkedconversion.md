[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ChunkedConversionSink](../chunkedconversionsink-class)\<[Object](../../dart-core/object-class)?\>
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[StringConversionSink](../stringconversionsink-class).

Returns a chunked-conversion sink that accepts at most one object. It is
an error to invoke `add` more than once on the returned sink.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ChunkedConversionSink<Object?> startChunkedConversion(Sink<String> sink) {
  if (sink is _Utf8EncoderSink) {
    return _JsonUtf8EncoderSink(
        sink._sink,
        _toEncodable,
        JsonUtf8Encoder._utf8Encode(indent),
        JsonUtf8Encoder._defaultBufferSize);
  }
  return _JsonEncoderSink(
      sink is StringConversionSink ? sink : StringConversionSink.from(sink),
      _toEncodable,
      indent);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonEncoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciidecoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[StringConversionSink](../stringconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<String> sink) {
  StringConversionSink stringSink;
  if (sink is StringConversionSink) {
    stringSink = sink;
  } else {
    stringSink = StringConversionSink.from(sink);
  }
  // TODO(lrn): Use asUtf16Sink when it becomes available. It
  // works just as well, is likely to have less decoding overhead,
  // and make adding U+FFFD easier.
  // At that time, merge this with _Latin1DecoderSink;
  if (_allowInvalid) {
    return _ErrorHandlingAsciiDecoderSink(stringSink.asUtf8Sink(false));
  } else {
    return _SimpleAsciiDecoderSink(stringSink);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiDecoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibencoder/startchunkedconversion.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../../dart-convert/byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
override
:::
:::

Start a chunked conversion using the options given to the
[ZLibEncoder](../zlibencoder-class) constructor.

Accepts any `Sink<List<int>>`, but prefers a
[ByteConversionSink](../../dart-convert/byteconversionsink-class), and
converts any other sink to a
[ByteConversionSink](../../dart-convert/byteconversionsink-class) before
using it.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<List<int>> sink) {
  if (sink is! ByteConversionSink) {
    sink = new ByteConversionSink.from(sink);
  }
  return new _ZLibEncoderSink._(
      sink, gzip, level, windowBits, memLevel, strategy, dictionary, raw);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibEncoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsonutf8encoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ChunkedConversionSink](../chunkedconversionsink-class)\<[Object](../../dart-core/object-class)?\>
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
override
:::
:::

Start a chunked conversion.

Only one object can be passed into the returned sink.

The argument `sink` will receive byte lists in sizes depending on the
`bufferSize` passed to the constructor when creating this encoder.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ChunkedConversionSink<Object?> startChunkedConversion(Sink<List<int>> sink) {
  ByteConversionSink byteSink;
  if (sink is ByteConversionSink) {
    byteSink = sink;
  } else {
    byteSink = ByteConversionSink.from(sink);
  }
  return _JsonUtf8EncoderSink(byteSink, _toEncodable, _indent, _bufferSize);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonUtf8Encoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1decoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[StringConversionSink](../stringconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<String> sink) {
  StringConversionSink stringSink;
  if (sink is StringConversionSink) {
    stringSink = sink;
  } else {
    stringSink = StringConversionSink.from(sink);
  }
  // TODO(lrn): Use stringSink.asUtf16Sink() if it becomes available.
  if (!_allowInvalid) return _Latin1DecoderSink(stringSink);
  return _Latin1AllowInvalidDecoderSink(stringSink);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Decoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibdecoder/startchunkedconversion.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../../dart-convert/byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
override
:::
:::

Start a chunked conversion.

Accepts any `Sink<List<int>>`, but prefers a
[ByteConversionSink](../../dart-convert/byteconversionsink-class), and
converts any other sink to a
[ByteConversionSink](../../dart-convert/byteconversionsink-class) before
using it.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<List<int>> sink) {
  if (sink is! ByteConversionSink) {
    sink = new ByteConversionSink.from(sink);
  }
  return new _ZLibDecoderSink._(sink, windowBits, dictionary, raw);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibDecoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8decoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[StringConversionSink](../stringconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<String> sink) {
  StringConversionSink stringSink;
  if (sink is StringConversionSink) {
    stringSink = sink;
  } else {
    stringSink = StringConversionSink.from(sink);
  }
  return stringSink.asUtf8Sink(_allowMalformed);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Decoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1encoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
inherited
:::
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[ByteConversionSink](../byteconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<List<int>> sink) {
  return _UnicodeSubsetEncoderSink(_subsetMask,
      sink is ByteConversionSink ? sink : ByteConversionSink.from(sink));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Encoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciiencoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
inherited
:::
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[ByteConversionSink](../byteconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<List<int>> sink) {
  return _UnicodeSubsetEncoderSink(_subsetMask,
      sink is ByteConversionSink ? sink : ByteConversionSink.from(sink));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiEncoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64encoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[ByteConversionSink](../byteconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The returned sink serves as input for the long-running conversion. The
given `sink` serves as output.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteConversionSink startChunkedConversion(Sink<String> sink) {
  if (sink is StringConversionSink) {
    return _Utf8Base64EncoderSink(sink.asUtf8Sink(false), _urlSafe);
  }
  return _AsciiBase64EncoderSink(sink, _urlSafe);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Encoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8encoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The converter works more efficiently if the given `sink` is a
[ByteConversionSink](../byteconversionsink-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<List<int>> sink) {
  return _Utf8EncoderSink(
      sink is ByteConversionSink ? sink : ByteConversionSink.from(sink));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Encoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/htmlescape/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The returned sink serves as input for the long-running conversion. The
given `sink` serves as output.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<String> sink) {
  return _HtmlEscapeSink(this,
      sink is StringConversionSink ? sink : StringConversionSink.from(sink));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/HtmlEscape/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64decoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    sink

)

::: {.features}
override
:::
:::

Starts a chunked conversion.

The returned sink serves as input for the long-running conversion. The
given `sink` serves as output.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<List<int>> sink) {
  return _Base64DecoderSink(sink);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Decoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsondecoder/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[Object](../../dart-core/object-class)?\>
    sink

)

::: {.features}
override
:::
:::

Starts a conversion from a chunked JSON string to its corresponding
object.

The output `sink` receives exactly one decoded element through `add`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external StringConversionSink startChunkedConversion(Sink<Object?> sink);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonDecoder/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/converter/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[Sink](../../dart-core/sink-class)\<S\> startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<T\> sink

)
:::

Starts a chunked conversion.

The returned sink serves as input for the long-running conversion. The
given `sink` serves as output.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Sink<S> startChunkedConversion(Sink<T> sink) {
  throw UnsupportedError(
      "This converter does not support chunked conversions: $this");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Converter/startChunkedConversion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/linesplitter/startchunkedconversion.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

startChunkedConversion method
=============================

::: {.section .multi-line-signature}
[StringConversionSink](../stringconversionsink-class)
startChunkedConversion(

1.  [Sink](../../dart-core/sink-class)\<[String](../../dart-core/string-class)\>
    sink

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StringConversionSink startChunkedConversion(Sink<String> sink) {
  return _LineSplitterSink(
      sink is StringConversionSink ? sink : StringConversionSink.from(sink));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/LineSplitter/startChunkedConversion.html>
:::
