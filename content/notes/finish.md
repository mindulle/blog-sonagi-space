[dart:developer](../../dart-developer/dart-developer-library){._links-link}

finish method
=============

::: {.section .multi-line-signature}
void finish(

1.  {[Map](../../dart-core/map-class)? arguments}

)
:::

Finish the last synchronous operation that was started. Optionally takes
a [Map](../../dart-core/map-class) of `arguments`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void finish({Map? arguments}) {
  if (!_hasTimeline) {
    return;
  }
  if (_stack.length == 0) {
    throw new StateError('Uneven calls to start and finish');
  }
  if (_filterKey != null) {
    arguments ??= {};
    arguments[_kFilterKey] = _filterKey;
  }
  // Pop top item off of stack.
  var block = _stack.removeLast();
  if (block == null) {
    // Dart stream was disabled when start was called.
    return;
  }
  block._finish(arguments);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/TimelineTask/finish.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext2/finish.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

finish method
=============

::: {.section .multi-line-signature}
void finish()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void finish() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext2/finish.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext/finish.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

finish method
=============

::: {.section .multi-line-signature}
void finish()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void finish() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext/finish.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animation/finish.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

finish method
=============

::: {.section .multi-line-signature}
void finish()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void finish() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Animation/finish.html>
:::
