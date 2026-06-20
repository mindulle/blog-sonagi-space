[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[Pointer](../pointer-class)\<T\> value
:::

The pointer at [address](../pointer/address).

A [Pointer](../pointer-class) is unboxed before being stored (as if by
`.address`), and the pointer is boxed (as if by `Pointer.fromAddress`)
when loaded.

On 32-bit platforms the [address](../pointer/address) must be 4-byte
aligned, and on 64-bit platforms the [address](../pointer/address) must
be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<T> get value;
```

::: {#setter .section .multi-line-signature}
void value=([Pointer](../pointer-class)\<T\> value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(Pointer<T> value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/PointerPointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int16pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 16-bit two\'s complement integer at [address](../pointer/address).

A Dart integer is truncated to 16 bits (as if by `.toSigned(16)`) before
being stored, and the 16-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 2-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int16Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int32pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 32-bit two\'s complement integer at [address](../pointer/address).

A Dart integer is truncated to 32 bits (as if by `.toSigned(32)`) before
being stored, and the 32-bit value is sign-extended when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int32Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint16pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 16-bit unsigned integer at [address](../pointer/address).

A Dart integer is truncated to 16 bits (as if by `.toUnsigned(16)`)
before being stored, and the 16-bit value is zero-extended when it is
loaded.

The [address](../pointer/address) must be 2-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint16Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint32pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 32-bit unsigned integer at [address](../pointer/address).

A Dart integer is truncated to 32 bits (as if by `.toUnsigned(32)`)
before being stored, and the 32-bit value is zero-extended when it is
loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint32Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/floatpointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[double](../../dart-core/double-class) value
:::

The float at [address](../pointer/address).

A Dart double loses precision before being stored, and the float value
is converted to a double when it is loaded.

The [address](../pointer/address) must be 4-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double get value;
```

::: {#setter .section .multi-line-signature}
void value=([double](../../dart-core/double-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/FloatPointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int8pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 8-bit two\'s complement integer at [address](../pointer/address).

A Dart integer is truncated to 8 bits (as if by `.toSigned(8)`) before
being stored, and the 8-bit value is sign-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int8Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint8pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 8-bit unsigned integer at [address](../pointer/address).

A Dart integer is truncated to 8 bits (as if by `.toUnsigned(8)`) before
being stored, and the 8-bit value is zero-extended when it is loaded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint8Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsocketoption/value.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

value property
==============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) value

::: {.features}
final
:::
:::

The raw data to set, or the array to write the current option value
into.

This list must be the correct length for the expected option. For most
options that take [int](../../dart-core/int-class) or
[bool](../../dart-core/bool-class) values, the length should be 4. For
options that expect a struct (such as an in\_addr\_t), the length should
be the correct length for that struct.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final Uint8List value;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSocketOption/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/int64pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 64-bit two\'s complement integer at [address](../pointer/address).

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Int64Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/doublepointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[double](../../dart-core/double-class) value
:::

The double at [address](../pointer/address).

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double get value;
```

::: {#setter .section .multi-line-signature}
void value=([double](../../dart-core/double-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(double value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DoublePointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/uint64pointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The 64-bit unsigned integer at [address](../pointer/address).

The [address](../pointer/address) must be 8-byte aligned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Uint64Pointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/cookie/value.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

value property
==============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) value

::: {.features}
read / write
:::
:::

The value of the cookie.

Must be a `cookie-value` as specified in RFC 6265.

The allowed characters in a cookie value are the visible ASCII
characters, U+0021 (`!`) through U+007E (`~`) except the characters:
`"`, `,`, `;` and `\`. Cookie values may be wrapped in a single pair of
double quotes (U+0022, `"`).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
late String value;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Cookie/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/gauge/value.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[double](../../dart-core/double-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double get value => _value;
```

::: {#setter .section .multi-line-signature}
void value=([double](../../dart-core/double-class) v)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(double v) {
  if (v < min) {
    v = min;
  } else if (v > max) {
    v = max;
  }
  _value = v;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/Gauge/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/abispecificintegerpointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

The integer at [address](../pointer/address).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get value;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(int value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerPointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/boolpointer/value.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) value
:::

The bool at [address](../pointer/address).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool get value;
```

::: {#setter .section .multi-line-signature}
void value=([bool](../../dart-core/bool-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void set value(bool value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/BoolPointer/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/counter/value.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[double](../../dart-core/double-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double get value => _value;
```

::: {#setter .section .multi-line-signature}
void value=([double](../../dart-core/double-class) v)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(double v) {
  _value = v;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/Counter/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/csskeywordvalue/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssKeywordValue/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/textareaelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextAreaElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/outputelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OutputElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/selectelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SelectElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparam/value.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParam/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domtokenlist/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomTokenList/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dataelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/buttonelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ButtonElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/optionelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OptionElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paramelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get value native;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ParamElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelementbase/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get value;
```

::: {#setter .section .multi-line-signature}
void value=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(String? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElementBase/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssunitvalue/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssUnitValue/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/meterelement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MeterElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/progresselement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ProgressElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/lielement/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get value native;
```

::: {#setter .section .multi-line-signature}
void value=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(int value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/LIElement/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/value.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

value method
============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? value(

1.  [String](../../dart-core/string-class) name

)
:::

Convenience method for the value for a single valued header.

The value must not have more than one value.

Returns `null` if there is no header with the provided name.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? value(String name);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/length/value.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Length/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/number/value.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Number/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/angle/value.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {#setter .section .multi-line-signature}
void value=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set value(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Angle/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/mapentry/value.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

value property
==============

::: {.section .multi-line-signature}
V value

::: {.features}
final
:::
:::

The value associated to [key](key) in the map.

``` {.language-dart data-language="dart"}
final map = {'theKey': 'theValue'};
var entry = map.entries.first;
print(entry.value); // theValue
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final V value;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/MapEntry/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dimension/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) value
:::

Return a unitless, numerical value of this CSS value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get value => this._value;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Dimension/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/cursorwithvalue/value.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
dynamic value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic get value => _convertNativeToDart_IDBAny(this._get_value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/CursorWithValue/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/bluetoothremotegattdescriptor/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[ByteData](../../dart-typed_data/bytedata-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteData? get value native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BluetoothRemoteGattDescriptor/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/observation/value.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[Object](../../dart-core/object-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Object? get value native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Observation/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/headervalue/value.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) value
:::

The value of the header.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get value;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HeaderValue/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/presentationavailability/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get value native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PresentationAvailability/value.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/gamepadbutton/value.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

value property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? value
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get value native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GamepadButton/value.html>
:::
