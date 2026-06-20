[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress method
=================

::: {.section .multi-line-signature}
[CustomStream](../customstream-class)\<[KeyEvent](../keyevent-class)\>
onKeyPress(

1.  [EventTarget](../eventtarget-class) target

)
:::

Named constructor to produce a stream for onKeyPress events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static CustomStream<KeyEvent> onKeyPress(EventTarget target) =>
    new _KeyboardEventHandler('keypress').forTarget(target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyboardEventStream/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onkeypress.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[KeyboardEvent](../../dart-html/keyboardevent-class)\>
onKeyPress

::: {.features}
override
:::
:::

Stream of `keypress` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyPress => keyPressEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onkeypress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyPress

::: {.features}
override
:::
:::

Stream of `keypress` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyPress => keyPressEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onkeypress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyPress

::: {.features}
override
:::
:::

Stream of `keypress` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyPress => Element.keyPressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onkeypress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyPress
:::

Stream of `keypress` events handled by this
[Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyPress => Element.keyPressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onkeypress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyPress
:::

Stream of `keypress` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<KeyboardEvent> get onKeyPress;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onKeyPress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onkeypress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onKeyPress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[KeyboardEvent](../keyboardevent-class)\>
onKeyPress
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<KeyboardEvent> get onKeyPress => keyPressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onKeyPress.html>
:::
