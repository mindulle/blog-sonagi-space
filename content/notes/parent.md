[dart:html](../../dart-html/dart-html-library){._links-link}

parent property
===============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? parent

::: {.features}
\@JSName(\'parentElement\')
:::
:::

The parent element of this node.

Returns null if this node either does not have a parent or its parent is
not an element.

Other resources
---------------

-   [Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node.parentElement)
    from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('parentElement')

/**
 * The parent element of this node.
 *
 * Returns null if this node either does not have a parent or its parent is
 * not an element.
 *
 * ## Other resources
 *
 * * [Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node.parentElement)
 *   from W3C.
 */

Element? get parent native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Node/parent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/parent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

parent property
===============

::: {#getter .section .multi-line-signature}
[WindowBase](../windowbase-class)? parent

::: {.features}
override
:::
:::

A reference to the parent of this window.

If this [WindowBase](../windowbase-class) has no parent,
[parent](parent) will return a reference to the
[WindowBase](../windowbase-class) itself.

``` {.language-dart data-language="dart"}
IFrameElement myIFrame = new IFrameElement();
window.document.body.elements.add(myIFrame);
print(myIframe.contentWindow.parent == window) // 'true'

print(window.parent == window) // 'true'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WindowBase? get parent => _convertNativeToDart_Window(this._get_parent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/parent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/parent.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

parent property
===============

::: {#getter .section .multi-line-signature}
[WindowBase](../windowbase-class)? parent
:::

A reference to the parent of this window.

If this [WindowBase](../windowbase-class) has no parent,
[parent](parent) will return a reference to the
[WindowBase](../windowbase-class) itself.

``` {.language-dart data-language="dart"}
IFrameElement myIFrame = new IFrameElement();
window.document.body.elements.add(myIFrame);
print(myIframe.contentWindow.parent == window) // 'true'

print(window.parent == window) // 'true'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WindowBase? get parent;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/parent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/parent.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

parent property
===============

::: {#getter .section .multi-line-signature}
[Zone](../zone-class)? parent
:::

The parent zone of the this zone.

Is `null` if `this` is the [root](root-constant) zone.

Zones are created by [fork](fork) on an existing zone, or by
[runZoned](../runzoned) which forks the [current](current) zone. The new
zone\'s parent zone is the zone it was forked from.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Zone? get parent;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/parent.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/parent.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

parent property
===============

::: {#getter .section .multi-line-signature}
[Directory](../directory-class) parent
:::

The parent directory of this entity.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Directory get parent => new Directory(parentOf(path));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/parent.html>
:::
