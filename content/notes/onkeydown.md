[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown method
================

::: {.section .multi-line-signature}
[CustomStream](../customstream-class)\<[KeyEvent](../keyevent-class)\>
onKeyDown(

1.  [EventTarget](../eventtarget-class) target

)
:::

Named constructor to produce a stream for onKeyDown events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static CustomStream<KeyEvent> onKeyDown(EventTarget target) =>
    new _KeyboardEventHandler('keydown').forTarget(target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyboardEventStream/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onkeydown.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[KeyboardEvent](../../dart-html/keyboardevent-class)\>
onKeyDown

::: {.features}
override
:::
:::

Stream of `keydown` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyDown => keyDownEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onkeydown.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyDown

::: {.features}
override
:::
:::

Stream of `keydown` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyDown => keyDownEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onkeydown.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyDown

::: {.features}
override
:::
:::

Stream of `keydown` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyDown => Element.keyDownEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onkeydown.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyDown
:::

Stream of `keydown` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyDown => Element.keyDownEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onkeydown.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyDown
:::

Stream of `keydown` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyDown;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onKeyDown.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onkeydown.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyDown property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyDown
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyDown => keyDownEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onKeyDown.html>
:::
