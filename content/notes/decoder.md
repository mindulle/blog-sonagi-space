[dart:io](../../dart-io/dart-io-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../../dart-convert/converter-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>,
[String](../../dart-core/string-class)\> decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `List<int>` to `String`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<List<int>, String> get decoder {
  if (Platform.operatingSystem == "windows") {
    return const _WindowsCodePageDecoder();
  } else {
    return const Utf8Decoder();
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SystemEncoding/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8codec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Utf8Decoder](../utf8decoder-class) decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `List<int>` to `String`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Utf8Decoder get decoder {
  // Switch between const objects to avoid allocation.
  return _allowMalformed
      ? const Utf8Decoder(allowMalformed: true)
      : const Utf8Decoder(allowMalformed: false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Codec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/encoding/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../converter-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>,
[String](../../dart-core/string-class)\> decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `List<int>` to `String`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<List<int>, String> get decoder;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Encoding/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1codec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Latin1Decoder](../latin1decoder-class) decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `List<int>` to `String`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Latin1Decoder get decoder => _allowInvalid
    ? const Latin1Decoder(allowInvalid: true)
    : const Latin1Decoder(allowInvalid: false);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Codec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciicodec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[AsciiDecoder](../asciidecoder-class) decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `List<int>` to `String`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AsciiDecoder get decoder => _allowInvalid
    ? const AsciiDecoder(allowInvalid: true)
    : const AsciiDecoder(allowInvalid: false);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiCodec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsoncodec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[JsonDecoder](../jsondecoder-class) decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `T` to `S`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
JsonDecoder get decoder {
  if (_reviver == null) return const JsonDecoder();
  return JsonDecoder(_reviver);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonCodec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/gzipcodec/decoder.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[ZLibDecoder](../zlibdecoder-class) decoder

::: {.features}
override
:::
:::

Get a [ZLibDecoder](../zlibdecoder-class) for decoding `GZip` compressed
data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ZLibDecoder get decoder =>
    new ZLibDecoder(windowBits: windowBits, dictionary: dictionary, raw: raw);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/GZipCodec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibcodec/decoder.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[ZLibDecoder](../zlibdecoder-class) decoder

::: {.features}
override
:::
:::

Get a [ZLibDecoder](../zlibdecoder-class) for decoding `ZLib` compressed
data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ZLibDecoder get decoder =>
    new ZLibDecoder(windowBits: windowBits, dictionary: dictionary, raw: raw);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibCodec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64codec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Base64Decoder](../base64decoder-class) decoder

::: {.features}
override
:::
:::

Returns the decoder of `this`, converting from `T` to `S`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Base64Decoder get decoder => const Base64Decoder();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Codec/decoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/codec/decoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

decoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../converter-class)\<T, S\> decoder
:::

Returns the decoder of `this`, converting from `T` to `S`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<T, S> get decoder;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Codec/decoder.html>
:::
