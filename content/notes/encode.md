[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encode method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) encode(

1.  [Object](../../dart-core/object-class)? value,
2.  {[Object](../../dart-core/object-class)? toEncodable(
    1.  dynamic object

    )?}

)

::: {.features}
override
:::
:::

Converts `value` to a JSON string.

If value contains objects that are not directly encodable to a JSON
string (a value that is not a number, boolean, string, null, list or a
map with string keys), the `toEncodable` function is used to convert it
to an object that must be directly encodable.

If `toEncodable` is omitted, it defaults to a function that returns the
result of calling `.toJson()` on the unencodable object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String encode(Object? value, {Object? toEncodable(dynamic object)?}) {
  toEncodable ??= _toEncodable;
  if (toEncodable == null) return encoder.convert(value);
  return JsonEncoder(toEncodable).convert(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonCodec/encode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/latin1codec/encode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encode method
=============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) encode(

1.  [String](../../dart-core/string-class) source

)

::: {.features}
override
:::
:::

Encodes `input`.

The input is encoded as if by `encoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List encode(String source) => encoder.convert(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Latin1Codec/encode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/systemencoding/encode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

encode method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
encode(

1.  [String](../../dart-core/string-class) input

)

::: {.features}
override
:::
:::

Encodes `input`.

The input is encoded as if by `encoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int> encode(String input) => encoder.convert(input);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SystemEncoding/encode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/asciicodec/encode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encode method
=============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) encode(

1.  [String](../../dart-core/string-class) source

)

::: {.features}
override
:::
:::

Encodes `input`.

The input is encoded as if by `encoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List encode(String source) => encoder.convert(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/AsciiCodec/encode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/codec/encode.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

encode method
=============

::: {.section .multi-line-signature}
T encode(

1.  S input

)
:::

Encodes `input`.

The input is encoded as if by `encoder.convert`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T encode(S input) => encoder.convert(input);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Codec/encode.html>
:::
