[dart:io](../../dart-io/dart-io-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../../dart-convert/converter-class)\<[String](../../dart-core/string-class),
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
encoder

::: {.features}
override
:::
:::

Returns the encoder from `String` to `List<int>`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<String, List<int>> get encoder {
  if (Platform.operatingSystem == "windows") {
    return const _WindowsCodePageEncoder();
  } else {
    return const Utf8Encoder();
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SystemEncoding/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/zlibcodec/encoder.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[ZLibEncoder](../zlibencoder-class) encoder

::: {.features}
override
:::
:::

Get a [ZLibEncoder](../zlibencoder-class) for encoding to `ZLib`
compressed data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ZLibEncoder get encoder => new ZLibEncoder(
    gzip: false,
    level: level,
    windowBits: windowBits,
    memLevel: memLevel,
    strategy: strategy,
    dictionary: dictionary,
    raw: raw);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ZLibCodec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/gzipcodec/encoder.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[ZLibEncoder](../zlibencoder-class) encoder

::: {.features}
override
:::
:::

Get a [ZLibEncoder](../zlibencoder-class) for encoding to `GZip`
compressed data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ZLibEncoder get encoder => new ZLibEncoder(
    gzip: true,
    level: level,
    windowBits: windowBits,
    memLevel: memLevel,
    strategy: strategy,
    dictionary: dictionary,
    raw: raw);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/GZipCodec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/encoding/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../converter-class)\<[String](../../dart-core/string-class),
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
encoder

::: {.features}
override
:::
:::

Returns the encoder from `String` to `List<int>`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<String, List<int>> get encoder;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Encoding/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsoncodec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[JsonEncoder](../jsonencoder-class) encoder

::: {.features}
override
:::
:::

Returns the encoder from `S` to `T`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
JsonEncoder get encoder {
  if (_toEncodable == null) return const JsonEncoder();
  return JsonEncoder(_toEncodable);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonCodec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1codec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Latin1Encoder](../latin1encoder-class) encoder

::: {.features}
override
:::
:::

Returns the encoder from `String` to `List<int>`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Latin1Encoder get encoder => const Latin1Encoder();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Codec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciicodec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[AsciiEncoder](../asciiencoder-class) encoder

::: {.features}
override
:::
:::

Returns the encoder from `String` to `List<int>`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AsciiEncoder get encoder => const AsciiEncoder();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiCodec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8codec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Utf8Encoder](../utf8encoder-class) encoder

::: {.features}
override
:::
:::

Returns the encoder from `String` to `List<int>`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Utf8Encoder get encoder => const Utf8Encoder();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Codec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/base64codec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Base64Encoder](../base64encoder-class) encoder

::: {.features}
override
:::
:::

Returns the encoder from `S` to `T`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Base64Encoder get encoder => _encoder;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Base64Codec/encoder.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/codec/encoder.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encoder property
================

::: {#getter .section .multi-line-signature}
[Converter](../converter-class)\<S, T\> encoder
:::

Returns the encoder from `S` to `T`.

It may be stateful and should not be reused.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<S, T> get encoder;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Codec/encoder.html>
:::
