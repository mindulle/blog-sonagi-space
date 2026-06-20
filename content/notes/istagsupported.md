[dart:svg](../../dart-svg/dart-svg-library){._links-link}

isTagSupported method
=====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) isTagSupported(

1.  [String](../../dart-core/string-class) tag

)

::: {.features}
override
:::
:::

Checks to see if the SVG element type is supported by the current
platform.

The tag should be a valid SVG element tag name.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool isTagSupported(String tag) {
  var e = new SvgElement.tag(tag);
  return e is SvgElement && !(e is UnknownElement);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/isTagSupported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/istagsupported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isTagSupported method
=====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) isTagSupported(

1.  [String](../../dart-core/string-class) tag

)
:::

Checks to see if the tag name is supported by the current platform.

The tag should be a valid HTML tag name.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool isTagSupported(String tag) {
  var e = _ElementFactoryProvider.createElement_tag(tag, null);
  return e is Element && !(e is UnknownElement);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/isTagSupported.html>
:::
