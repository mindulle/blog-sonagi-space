[dart:html](../../dart-html/dart-html-library){._links-link}

contentEdge property
====================

::: {#getter .section .multi-line-signature}
[CssRect](../cssrect-class) contentEdge
:::

Access this element\'s content position.

This returns a rectangle with the dimensions actually available for
content in this element, in pixels, regardless of this element\'s
box-sizing property. Unlike
[getBoundingClientRect](getboundingclientrect), the dimensions of this
rectangle will return the same numerical height if the element is hidden
or not.

*Important* *note*: use of this method *will* perform CSS calculations
that can trigger a browser reflow. Therefore, use of this property
*during* an animation frame is discouraged. See also: [Browser
Reflow](https://developers.google.com/speed/articles/reflow)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssRect get contentEdge => new _ContentCssRect(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/contentEdge.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/contentedge.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

contentEdge property
====================

::: {#getter .section .multi-line-signature}
[CssRect](../cssrect-class) contentEdge
:::

Access dimensions and position of the [Element](../element-class)s in
this list.

Setting the height or width properties will set the height or width
property for all elements in the list. This returns a rectangle with the
dimensions actually available for content in this element, in pixels,
regardless of this element\'s box-sizing property. Getting the height or
width returns the height or width of the first Element in this list.

Unlike
[Element.getBoundingClientRect](../element/getboundingclientrect), the
dimensions of this rectangle will return the same numerical height if
the element is hidden or not.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssRect get contentEdge;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/contentEdge.html>
:::
