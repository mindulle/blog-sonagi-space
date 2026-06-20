[dart:html](../../dart-html/dart-html-library){._links-link}

TitleElement constructor
========================

::: {.section .multi-line-signature}
TitleElement()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory TitleElement() => JS<TitleElement>(
    'returns:TitleElement;creates:TitleElement;new:true',
    '#.createElement(#)',
    document,
    "title");
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TitleElement/TitleElement.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/titleelement/titleelement.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

TitleElement constructor
========================

::: {.section .multi-line-signature}
TitleElement()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory TitleElement() =>
    _SvgElementFactoryProvider.createSvgElement_tag("title") as TitleElement;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TitleElement/TitleElement.html>
:::
