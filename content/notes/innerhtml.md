[dart:svg](../../dart-svg/dart-svg-library){._links-link}

innerHtml property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? innerHtml

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get innerHtml {
  final container = new DivElement();
  final SvgElement cloned = this.clone(true) as SvgElement;
  container.children.addAll(cloned.children);
  return container.innerHtml;
}
```

::: {#setter .section .multi-line-signature}
void innerHtml=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Parses the HTML fragment and sets it as the contents of this element.

This uses the default sanitization behavior to sanitize the HTML
fragment, use [setInnerHtml](../../dart-html/element/setinnerhtml) to
override the default behavior.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set innerHtml(String? value) {
  this.setInnerHtml(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/innerHtml.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/innerhtml.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

innerHtml property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? innerHtml
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get innerHtml => _innerHtml;
```

::: {#setter .section .multi-line-signature}
void innerHtml=([String](../../dart-core/string-class)? html)
:::

Parses the HTML fragment and sets it as the contents of this element.

This uses the default sanitization behavior to sanitize the HTML
fragment, use [setInnerHtml](setinnerhtml) to override the default
behavior.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set innerHtml(String? html) {
  this.setInnerHtml(html);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/innerHtml.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/shadowroot/innerhtml.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

innerHtml property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? innerHtml

::: {.features}
\@JSName(\'innerHTML\'), override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('innerHTML')
String? get innerHtml native;
```

::: {#setter .section .multi-line-signature}
void innerHtml=([String](../../dart-core/string-class)? value)

::: {.features}
\@JSName(\'innerHTML\'), override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('innerHTML')
set innerHtml(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ShadowRoot/innerHtml.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/documentfragment/innerhtml.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

innerHtml property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? innerHtml
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get innerHtml {
  final e = new DivElement();
  e.append(this.clone(true));
  return e.innerHtml;
}
```

::: {#setter .section .multi-line-signature}
void innerHtml=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set innerHtml(String? value) {
  this.setInnerHtml(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DocumentFragment/innerHtml.html>
:::
