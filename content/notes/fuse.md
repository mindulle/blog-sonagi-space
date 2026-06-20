[dart:convert](../../dart-convert/dart-convert-library){._links-link}

fuse\<R\> method
================

::: {.section .multi-line-signature}
[Codec](../codec-class)\<S, R\> fuse\<R\>(

1.  [Codec](../codec-class)\<T, R\> other

)
:::

Fuses `this` with `other`.

When encoding, the resulting codec encodes with `this` before encoding
with `other`.

When decoding, the resulting codec decodes with `other` before decoding
with `this`.

In some cases one needs to use the [inverted](inverted) codecs to be
able to fuse them correctly. That is, the output type of `this` (`T`)
must match the input type of the second codec `other`.

Examples:

``` {.language-dart data-language="dart"}
final jsonToBytes = json.fuse(utf8);
List<int> bytes = jsonToBytes.encode(["json-object"]);
var decoded = jsonToBytes.decode(bytes);
assert(decoded is List && decoded[0] == "json-object");

var inverted = json.inverted;
var jsonIdentity = json.fuse(inverted);
var jsonObject = jsonIdentity.encode(["1", 2]);
assert(jsonObject is List && jsonObject[0] == "1" && jsonObject[1] == 2);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
// TODO(floitsch): use better example with line-splitter once that one is
// in this library.
Codec<S, R> fuse<R>(Codec<T, R> other) {
  return _FusedCodec<S, T, R>(this, other);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Codec/fuse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/jsonencoder/fuse.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

fuse\<T\> method
================

::: {.section .multi-line-signature}
[Converter](../converter-class)\<[Object](../../dart-core/object-class)?,
T\> fuse\<T\>(

1.  [Converter](../converter-class)\<[String](../../dart-core/string-class),
    T\> other

)

::: {.features}
override
:::
:::

Fuses `this` with `other`.

Encoding with the resulting converter is equivalent to converting with
`this` before converting with `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<Object?, T> fuse<T>(Converter<String, T> other) {
  if (other is Utf8Encoder) {
    // The instance check guarantees that `T` is (a subtype of) List<int>,
    // but the static type system doesn't know that, and so we cast.
    return JsonUtf8Encoder(indent, _toEncodable) as Converter<Object?, T>;
  }
  return super.fuse<T>(other);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/JsonEncoder/fuse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/utf8decoder/fuse.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

fuse\<T\> method
================

::: {.section .multi-line-signature}
[Converter](../converter-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>,
T\> fuse\<T\>(

1.  [Converter](../converter-class)\<[String](../../dart-core/string-class),
    T\> next

)

::: {.features}
override
:::
:::

Fuses `this` with `other`.

Encoding with the resulting converter is equivalent to converting with
`this` before converting with `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Converter<List<int>, T> fuse<T>(Converter<String, T> next);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Utf8Decoder/fuse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/converter/fuse.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

fuse\<TT\> method
=================

::: {.section .multi-line-signature}
[Converter](../converter-class)\<S, TT\> fuse\<TT\>(

1.  [Converter](../converter-class)\<T, TT\> other

)
:::

Fuses `this` with `other`.

Encoding with the resulting converter is equivalent to converting with
`this` before converting with `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<S, TT> fuse<TT>(Converter<T, TT> other) {
  return _FusedConverter<S, T, TT>(this, other);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Converter/fuse.html>
:::
