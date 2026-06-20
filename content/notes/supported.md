[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if Real Time Communication (RTC) APIs are supported and enabled
on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  // Currently in Firefox some of the RTC elements are defined but throw an
  // error unless the user has specifically enabled them in their
  // about:config. So we have to construct an element to actually test if RTC
  // is supported at the given time.
  try {
    new RtcPeerConnection({
      "iceServers": [
        {"url": "stun:localhost"}
      ]
    });
    return true;
  } catch (_) {
    return false;
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcPeerConnection/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastream/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if the MediaStream APIs are supported on the current platform.

See also:

-   [Navigator.getUserMedia](../navigator/getusermedia)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS(
    'bool',
    '''!!(#.getUserMedia || #.webkitGetUserMedia ||
      #.mozGetUserMedia || #.msGetUserMedia)''',
    window.navigator,
    window.navigator,
    window.navigator,
    window.navigator);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStream/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/idbfactory/supported.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks to see if Indexed DB is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return JS(
      'bool',
      '!!(window.indexedDB || '
          'window.webkitIndexedDB || '
          'window.mozIndexedDB)');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/IdbFactory/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pointerevent/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

PointerEvent used for both touch and mouse. To check if touch is
supported call the property TouchEvent.supported

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  try {
    return PointerEvent('pointerover') is PointerEvent;
  } catch (_) {}
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PointerEvent/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecomponenttransferelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feComponentTransfer') &&
    (new SvgElement.tag('feComponentTransfer') is FEComponentTransferElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEComponentTransferElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fespecularlightingelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feSpecularLighting') &&
    (new SvgElement.tag('feSpecularLighting') is FESpecularLightingElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FESpecularLightingElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fediffuselightingelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feDiffuseLighting') &&
    (new SvgElement.tag('feDiffuseLighting') is FEDiffuseLightingElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDiffuseLightingElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedisplacementmapelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feDisplacementMap') &&
    (new SvgElement.tag('feDisplacementMap') is FEDisplacementMapElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDisplacementMapElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/animatetransformelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('animateTransform') &&
    (new SvgElement.tag('animateTransform') is AnimateTransformElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AnimateTransformElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feconvolvematrixelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feConvolveMatrix') &&
    (new SvgElement.tag('feConvolveMatrix') is FEConvolveMatrixElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEConvolveMatrixElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedistantlightelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feDistantLight') &&
    (new SvgElement.tag('feDistantLight') is FEDistantLightElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDistantLightElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fegaussianblurelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feGaussianBlur') &&
    (new SvgElement.tag('feGaussianBlur') is FEGaussianBlurElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEGaussianBlurElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/animatemotionelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('animateMotion') &&
    (new SvgElement.tag('animateMotion') is AnimateMotionElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AnimateMotionElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecolormatrixelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feColorMatrix') &&
    (new SvgElement.tag('feColorMatrix') is FEColorMatrixElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEColorMatrixElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/foreignobjectelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('foreignObject') &&
    (new SvgElement.tag('foreignObject') is ForeignObjectElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ForeignObjectElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mutationobserver/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks to see if the mutation observer API is supported on the current
platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return JS(
      'bool', '!!(window.MutationObserver || window.WebKitMutationObserver)');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MutationObserver/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fepointlightelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('fePointLight') &&
    (new SvgElement.tag('fePointLight') is FEPointLightElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEPointLightElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feturbulenceelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feTurbulence') &&
    (new SvgElement.tag('feTurbulence') is FETurbulenceElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETurbulenceElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femergenodeelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feMergeNode') &&
    (new SvgElement.tag('feMergeNode') is FEMergeNodeElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMergeNodeElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fespotlightelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feSpotLight') &&
    (new SvgElement.tag('feSpotLight') is FESpotLightElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FESpotLightElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/localdatetimeinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'datetime-local')).type == 'datetime-local';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/LocalDateTimeInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feoffsetelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feOffset') &&
    (new SvgElement.tag('feOffset') is FEOffsetElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEOffsetElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/animateelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('animate') &&
    (new SvgElement.tag('animate') is AnimateElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AnimateElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feblendelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feBlend') &&
    (new SvgElement.tag('feBlend') is FEBlendElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEBlendElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefloodelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feFlood') &&
    (new SvgElement.tag('feFlood') is FEFloodElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFloodElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefuncaelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feFuncA') &&
    (new SvgElement.tag('feFuncA') is FEFuncAElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFuncAElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefuncbelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feFuncB') &&
    (new SvgElement.tag('feFuncB') is FEFuncBElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFuncBElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefuncgelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feFuncG') &&
    (new SvgElement.tag('feFuncG') is FEFuncGElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFuncGElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefuncrelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feFuncR') &&
    (new SvgElement.tag('feFuncR') is FEFuncRElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFuncRElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feimageelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feImage') &&
    (new SvgElement.tag('feImage') is FEImageElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEImageElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femergeelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feMerge') &&
    (new SvgElement.tag('feMerge') is FEMergeElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMergeElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fetileelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('feTile') &&
    (new SvgElement.tag('feTile') is FETileElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETileElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('filter') &&
    (new SvgElement.tag('filter') is FilterElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audiocontext/supported.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    JS('bool', '!!(window.AudioContext || window.webkitAudioContext)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioContext/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchevent/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if touch events supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  try {
    return TouchEvent('touches') is TouchEvent;
  } catch (_) {}

  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchEvent/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechrecognition/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS(
    'bool', '!!(window.SpeechRecognition || window.webkitSpeechRecognition)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechRecognition/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/numberinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'number')).type == 'number';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NumberInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/searchinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'search')).type == 'search';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SearchInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/setelement/supported.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    SvgElement.isTagSupported('set') &&
    (new SvgElement.tag('set') is SetElement);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SetElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/emailinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'email')).type == 'email';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmailInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/monthinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'month')).type == 'month';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MonthInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rangeinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'range')).type == 'range';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RangeInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/telephoneinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'tel')).type == 'tel';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TelephoneInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dateinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'date')).type == 'date';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DateInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/timeinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'time')).type == 'time';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TimeInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/weekinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'week')).type == 'week';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WeekInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlinputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Returns true if this input type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported {
  return (new InputElement(type: 'url')).type == 'url';
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlInputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastreamtrackevent/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    Device.isEventTypeSupported('MediaStreamTrackEvent');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStreamTrackEvent/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/crypto/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    JS('bool', '!!(window.crypto && window.crypto.getRandomValues)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Crypto/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dompoint/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    JS('bool', '!!(window.DOMPoint) || !!(window.WebKitPoint)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomPoint/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext/supported.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.WebGLRenderingContext)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/shadowroot/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS(
    'bool',
    '!!(Element.prototype.createShadowRoot||'
        'Element.prototype.webkitCreateShadowRoot)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ShadowRoot/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    JS('bool', 'typeof window.WebSocket != "undefined"');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastreamevent/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Device.isEventTypeSupported('MediaStreamEvent');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStreamEvent/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/hashchangeevent/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Device.isEventTypeSupported('HashChangeEvent');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HashChangeEvent/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/worker/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported =>
    JS('bool', '(typeof window.Worker != "undefined")');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Worker/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filesystem/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.webkitRequestFileSystem)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileSystem/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/applicationcache/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.applicationCache)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ApplicationCache/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/xsltprocessor/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.XSLTProcessor)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/XsltProcessor/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datalistelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('datalist');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataListElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.Notification)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/progresselement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('progress');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ProgressElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/templateelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('template');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TemplateElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!document.createTouchList');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animation/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(document.body.animate)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Animation/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/contentelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('content');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ContentElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/detailselement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('details');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DetailsElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediasource/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.MediaSource)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaSource/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/performance/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.performance)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Performance/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/objectelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('object');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ObjectElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/outputelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('output');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OutputElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/shadowelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('shadow');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ShadowElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/embedelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('embed');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmbedElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/meterelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('meter');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MeterElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/trackelement/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => Element.isTagSupported('track');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TrackElement/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/formdata/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) supported
:::

Checks if this type is supported on the current platform.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static bool get supported => JS('bool', '!!(window.FormData)');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FormData/supported.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediacapabilitiesinfo/supported.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

supported property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? supported
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get supported native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaCapabilitiesInfo/supported.html>
:::
