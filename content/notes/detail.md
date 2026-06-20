[dart:html](../../dart-html/dart-html-library){._links-link}

detail property
===============

::: {#getter .section .multi-line-signature}
dynamic detail
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
get detail {
  if (_dartDetail != null) {
    return _dartDetail;
  }
  return _detail;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CustomEvent/detail.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyevent/detail.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

detail property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) detail

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get detail => _parent.detail!;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/detail.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/uievent/detail.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

detail property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? detail
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get detail native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UIEvent/detail.html>
:::
