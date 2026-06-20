[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp method
==============

::: {.section .multi-line-signature}
[CustomStream](../customstream-class)\<[KeyEvent](../keyevent-class)\>
onKeyUp(

1.  [EventTarget](../eventtarget-class) target

)
:::

Named constructor to produce a stream for onKeyUp events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static CustomStream<KeyEvent> onKeyUp(EventTarget target) =>
    new _KeyboardEventHandler('keyup').forTarget(target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyboardEventStream/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onkeyup.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[KeyboardEvent](../../dart-html/keyboardevent-class)\>
onKeyUp

::: {.features}
override
:::
:::

Stream of `keyup` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyUp => keyUpEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onkeyup.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyUp

::: {.features}
override
:::
:::

Stream of `keyup` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyUp => keyUpEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onkeyup.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyUp

::: {.features}
override
:::
:::

Stream of `keyup` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyUp => Element.keyUpEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onkeyup.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyUp
:::

Stream of `keyup` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyUp => Element.keyUpEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onkeyup.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyUp
:::

Stream of `keyup` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyUp;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onKeyUp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onkeyup.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyUp property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyUp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyUp => keyUpEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onKeyUp.html>
:::
