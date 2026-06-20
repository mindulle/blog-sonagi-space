[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[TouchEvent](../../dart-html/touchevent-class)\>
onTouchEnd

::: {.features}
override
:::
:::

Stream of `touchend` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchEnd => touchEndEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onTouchEnd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/ontouchend.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchEnd

::: {.features}
override
:::
:::

Stream of `touchend` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchEnd => touchEndEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onTouchEnd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/ontouchend.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchEnd

::: {.features}
override
:::
:::

Stream of `touchend` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchEnd => Element.touchEndEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onTouchEnd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/ontouchend.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchEnd
:::

Stream of `touchend` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchEnd => Element.touchEndEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onTouchEnd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/ontouchend.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[TouchEvent](../touchevent-class)\>
onTouchEnd
:::

Stream of `touchend` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<TouchEvent> get onTouchEnd;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onTouchEnd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/ontouchend.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onTouchEnd property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[TouchEvent](../touchevent-class)\>
onTouchEnd
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<TouchEvent> get onTouchEnd => touchEndEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onTouchEnd.html>
:::
