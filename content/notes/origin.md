[dart:core](../../dart-core/dart-core-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../string-class) origin
:::

Returns the origin of the URI in the form scheme://host:port for the
schemes http and https.

It is an error if the scheme is not \"http\" or \"https\", or if the
host name is missing or empty.

See: <https://www.w3.org/TR/2011/WD-html5-20110405/origin-0.html#origin>

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get origin;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/location/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get origin {
  if (JS('bool', '("origin" in #)', this)) {
    return JS('String', '#.origin', this);
  }
  return '${this.protocol}//${this.host}';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Location/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/anchorelement/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnchorElement/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/areaelement/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AreaElement/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlhyperlinkelementutils/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlHyperlinkElementUtils/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/extendablemessageevent/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ExtendableMessageEvent/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/foreignfetchevent/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ForeignFetchEvent/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerglobalscope/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerGlobalScope/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlutilsreadonly/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlUtilsReadOnly/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/messageevent/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MessageEvent/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/origin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/url/origin.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

origin property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? origin
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get origin native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Url/origin.html>
:::
