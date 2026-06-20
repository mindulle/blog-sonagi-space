[dart:io](../../dart-io/dart-io-library){._links-link}

target method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[String](../../dart-core/string-class)\>
target()
:::

Gets the target of the link.

Returns a future that completes with the path to the target.

If the returned target is a relative path, it is relative to the
directory containing the link.

If the link does not exist, or is not a link, the future completes with
a [FileSystemException](../filesystemexception-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<String> target();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Link/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/formelement/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get target native;
```

::: {#setter .section .multi-line-signature}
void target=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set target(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FormElement/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/anchorelement/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get target native;
```

::: {#setter .section .multi-line-signature}
void target=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set target(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnchorElement/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/areaelement/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get target native;
```

::: {#setter .section .multi-line-signature}
void target=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set target(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AreaElement/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/baseelement/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get target native;
```

::: {#setter .section .multi-line-signature}
void target=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set target(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BaseElement/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/weakreference/target.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
T? target
:::

The current object weakly referenced by [this](../weakreference-class),
if any.

The value is either the object supplied in the constructor, or `null` if
the weak reference has been cleared.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T? get target;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/WeakReference/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/versionchangeevent/target.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[OpenDBRequest](../opendbrequest-class) target

::: {.features}
\@JSName(\'target\'), override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('target')
OpenDBRequest get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/VersionChangeEvent/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/event/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[EventTarget](../eventtarget-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
EventTarget? get target => _convertNativeToDart_EventTarget(this._get_target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Event/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touch/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[EventTarget](../eventtarget-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
EventTarget? get target => _convertNativeToDart_EventTarget(this._get_target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Touch/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyevent/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[EventTarget](../eventtarget-class)? target

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
EventTarget? get target => wrapped.target;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/processinginstruction/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ProcessingInstruction/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/intersectionobserverentry/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/IntersectionObserverEntry/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/aelement/target.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class) target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AElement/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/resizeobserverentry/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ResizeObserverEntry/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mutationrecord/target.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

target property
===============

::: {#getter .section .multi-line-signature}
[Node](../node-class)? target
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node? get target native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MutationRecord/target.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Target.md)

# Target-based Goals

These goals specify a clear and quantifiable objective that the product aims to achieve, such as increasing user engagement by 20% within six months.

## 관련 로드맵
- [[product-manager|product-manager]]
