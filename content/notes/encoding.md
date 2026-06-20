[dart:io](../../dart-io/dart-io-library){._links-link}

encoding property
=================

::: {#getter .section .multi-line-signature}
[Encoding](../../dart-convert/encoding-class) encoding

::: {.features}
inherited
:::
:::

The [Encoding](../../dart-convert/encoding-class) used when writing
strings.

Depending on the underlying consumer, this property might be mutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Encoding get encoding => _sink.encoding;
```

::: {#setter .section .multi-line-signature}
void encoding=([Encoding](../../dart-convert/encoding-class) encoding)

::: {.features}
inherited
:::
:::

The [Encoding](../../dart-convert/encoding-class) used when writing
strings.

Depending on the underlying consumer, this property might be mutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set encoding(Encoding encoding) {
  _sink.encoding = encoding;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/encoding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/csscharsetrule/encoding.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

encoding property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? encoding
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get encoding native;
```

::: {#setter .section .multi-line-signature}
void encoding=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set encoding(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssCharsetRule/encoding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/formelement/encoding.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

encoding property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? encoding
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get encoding native;
```

::: {#setter .section .multi-line-signature}
void encoding=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set encoding(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FormElement/encoding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iosink/encoding.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

encoding property
=================

::: {.section .multi-line-signature}
[Encoding](../../dart-convert/encoding-class) encoding

::: {.features}
read / write
:::
:::

The [Encoding](../../dart-convert/encoding-class) used when writing
strings.

Depending on the underlying consumer, this property might be mutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
late Encoding encoding;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOSink/encoding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/encoding/encoding.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

Encoding constructor
====================

::: {.section .multi-line-signature}
const Encoding()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
const Encoding();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Encoding/Encoding.html>
:::
