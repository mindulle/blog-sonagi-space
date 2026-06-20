[dart:html](../../dart-html/dart-html-library){._links-link}

options property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[OptionElement](../optionelement-class)\>
options
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<OptionElement> get options {
  dynamic options = this.querySelectorAll<OptionElement>('option');
  return new UnmodifiableListView(options.toList());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SelectElement/options.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datalistelement/options.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

options property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Node](../node-class)\>? options

::: {.features}
\@Returns(\'HtmlCollection\'), \@Creates(\'HtmlCollection\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Returns('HtmlCollection')
@Creates('HtmlCollection')
List<Node>? get options native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataListElement/options.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pushsubscription/options.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

options property
================

::: {#getter .section .multi-line-signature}
[PushSubscriptionOptions](../pushsubscriptionoptions-class)? options
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
PushSubscriptionOptions? get options native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PushSubscription/options.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/pragma/options.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

options property
================

::: {.section .multi-line-signature}
[Object](../object-class)? options

::: {.features}
final
:::
:::

Optional extra data parameterizing the hint.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final Object? options;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/pragma/options.html>
:::
