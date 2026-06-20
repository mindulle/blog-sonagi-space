[dart:html](../../dart-html/dart-html-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[Object](../../dart-core/object-class)? result
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Object? get result {
  var res = JS('Null|String|NativeByteBuffer', '#.result', this);
  if (res is ByteBuffer) {
    return new Uint8List.view(res);
  }
  return res;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileReader/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/serviceextensionresponse/result.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

result property
===============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? result

::: {.features}
final
:::
:::

The result of a successful service protocol extension RPC.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String? result;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/ServiceExtensionResponse/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsresponse/result.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

result method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[RtcLegacyStatsReport](../rtclegacystatsreport-class)\>
result()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<RtcLegacyStatsReport> result() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsResponse/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecomponenttransferelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEComponentTransferElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fespecularlightingelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FESpecularLightingElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fediffuselightingelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDiffuseLightingElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedisplacementmapelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDisplacementMapElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feconvolvematrixelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEConvolveMatrixElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fegaussianblurelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEGaussianBlurElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecolormatrixelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEColorMatrixElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femorphologyelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMorphologyElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feturbulenceelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETurbulenceElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecompositeelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FECompositeElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feoffsetelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEOffsetElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feblendelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEBlendElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefloodelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFloodElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feimageelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEImageElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femergeelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMergeElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fetileelement/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETileElement/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/request/result.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
dynamic result
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
dynamic get result => _convertNativeToDart_IDBAny(this._get_result);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Request/result.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterprimitivestandardattributes/result.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

result property
===============

::: {#getter .section .multi-line-signature}
[AnimatedString](../animatedstring-class)? result
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedString? get result native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterPrimitiveStandardAttributes/result.html>
:::
