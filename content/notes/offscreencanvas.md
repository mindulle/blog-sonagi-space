[dart:html](../../dart-html/dart-html-library){._links-link}

OffscreenCanvas constructor
===========================

::: {.section .multi-line-signature}
OffscreenCanvas(

1.  [int](../../dart-core/int-class) width,
2.  [int](../../dart-core/int-class) height

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory OffscreenCanvas(int width, int height) {
  return OffscreenCanvas._create_1(width, height);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvas/OffscreenCanvas.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/canvas/offscreencanvas.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

offscreenCanvas property
========================

::: {#getter .section .multi-line-signature}
[OffscreenCanvas](../../dart-html/offscreencanvas-class)?
offscreenCanvas

::: {.features}
\@JSName(\'canvas\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('canvas')
OffscreenCanvas? get offscreenCanvas native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/Canvas/offscreenCanvas.html>
:::
