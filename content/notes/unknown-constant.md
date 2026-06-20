[dart:convert](../../dart-convert/dart-convert-library){._links-link}

unknown constant
================

::: {.section .multi-line-signature}
[HtmlEscapeMode](../htmlescapemode-class) const unknown
:::

Default escaping mode, which escapes all characters.

The result of such an escaping is usable both in element content and in
any attribute value.

The escaping only works for elements with normal HTML content, and not,
for example, for script or style element content, which require escapes
matching their particular content syntax.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static const HtmlEscapeMode unknown =
    HtmlEscapeMode._('unknown', true, true, true, true);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/HtmlEscapeMode/unknown-constant.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keycode/unknown-constant.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

UNKNOWN constant
================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) const UNKNOWN
:::

A sentinel value if the keycode could not be determined.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static const int UNKNOWN = -1;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyCode/UNKNOWN-constant.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domexception/unknown-constant.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

UNKNOWN constant
================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) const UNKNOWN
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static const String UNKNOWN = 'UnknownError';
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomException/UNKNOWN-constant.html>
:::
