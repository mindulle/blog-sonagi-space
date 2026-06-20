top
===

The `top` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property participates in specifying the vertical position of a
[positioned element](position.md). It has no effect on non-positioned
elements.

Try it
------

The effect of `top` depends on how the element is positioned (i.e., the
value of the [`position`](position.md) property):

- When `position` is set to `absolute` or `fixed`, the `top` property
    specifies the distance between the element\'s outer margin of top
    edge and the inner border of the top edge of its containing block.
- When `position` is set to `relative`, the `top` property specifies
    the distance the element\'s top edge is moved below its normal
    position.
- When `position` is set to `sticky`, the `top` property is used to
    compute the sticky-constraint rectangle.
- When `position` is set to `static`, the `top` property has *no
    effect*.

When both `top` and [`bottom`](bottom.md) are specified, `position` is set
to `absolute` or `fixed`, *and* [`height`](_Resources/Markup%20And%20Styling/css/height.md) is unspecified
(either `auto` or `100%`) both the `top` and `bottom` distances are
respected. In all other situations, if [`height`](_Resources/Markup%20And%20Styling/css/height.md) is constrained
in any way or `position` is set to `relative`, the `top` property takes
precedence and the `bottom` property is ignored.

Syntax
------

[css]

```css
/* <length> values */
top: 3px;
top: 2.4em;

/* <percentage>s of the height of the containing block */
top: 10%;

/* Keyword value */
top: auto;

/* Global values */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### Values

[`<length>`](length.md)

:   A negative, null, or positive [`<length>`](length.md) that represents:

    -   for *absolutely positioned elements*, the distance to the top
        edge of the containing block.
    -   for *relatively positioned elements*, the distance that the
        element is moved below its normal position.

[`<percentage>`](percentage.md)

:   A [`<percentage>`](percentage.md) of the containing block\'s height.

[`auto`](#auto)

:   Specifies that:

    -   for *absolutely positioned elements*, the position of the
        element is based on the [`bottom`](bottom) property, while
        `height: auto` is treated as a height based on the content; or
        if `bottom` is also `auto`, the element is positioned where it
        should vertically be positioned if it were a static element.
    -   for *relatively positioned elements*, the distance of the
        element from its normal position is based on the
        [`bottom`](bottom) property; or if `bottom` is also `auto`, the
        element is not moved vertically at all.

[`inherit`](#inherit)

:   Specifies that the value is the same as the computed value from its
    parent element (which might not be its containing block). This
    computed value is then handled as if it were a [`<length>`](length.md),
    [`<percentage>`](percentage.md), or the `auto` keyword.

Formal definition
-----------------

  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         positioned elements
  [Inherited](inheritance.md)           no
  Percentages                        refer to the height of the containing block
  [Computed value](computed_value.md)   if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto`
  Animation type                     a [length](length.md#interpolation), [percentage](percentage.md#interpolation) or calc();
  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
top = 
  auto                 |
  <length-percentage>  

<length-percentage> = 
  <length>      |
  <percentage>  
```

Examples
--------

### A positioned element set 10% from the top

[css]

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

[html]

```html
<div>The size of this content is determined by the position of its edges.</div>
```

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Positioned Layout Module Level 3\
  [\# insets]](https://drafts.csswg.org/css-position/#insets)

  -----------------------------------------------------------------------

Browser compatibility
---------------------

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`top`

1

12

1

5In Internet Explorer versions before 7, when both `top` and `bottom`
are specified, the element position is overconstrained and the `top`
property has precedence; the computed value of `bottom` is set to
`-top`, while its specified value is ignored.

6

1

≤37

18

4

14

1

1.0

See also
--------

- [`inset`](_Resources/Markup%20And%20Styling/css/inset.md), the shorthand for all related properties:
    [`top`](top.md), [`bottom`](bottom.md), [`left`](left.md), and
    [`right`](right.md)
- The mapped logical properties:
    [`inset-block-start`](inset-block-start.md),
    [`inset-block-end`](inset-block-end.md),
    [`inset-inline-start`](inset-inline-start.md), and
    [`inset-inline-end`](inset-inline-end.md) and the shorthands
    [`inset-block`](inset-block.md) and [`inset-inline`](inset-inline.md)
- [`position`](position.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/top>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[WindowBase](../windowbase-class)? top

::: {.features}
override
:::
:::

A reference to the topmost window in the window hierarchy.

If this [WindowBase](../windowbase-class) is the topmost
[WindowBase](../windowbase-class), [top](top) will return a reference to
the [WindowBase](../windowbase-class) itself.

``` {.language-dart data-language="dart"}
// Add an IFrame to the current window.
IFrameElement myIFrame = new IFrameElement();
window.document.body.elements.add(myIFrame);

// Add an IFrame inside of the other IFrame.
IFrameElement innerIFrame = new IFrameElement();
myIFrame.elements.add(innerIFrame);

print(myIframe.contentWindow.top == window) // 'true'
print(innerIFrame.contentWindow.top == window) // 'true'

print(window.top == window) // 'true'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WindowBase? get top => _convertNativeToDart_Window(this._get_top);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[WindowBase](../windowbase-class)? top
:::

A reference to the topmost window in the window hierarchy.

If this [WindowBase](../windowbase-class) is the topmost
[WindowBase](../windowbase-class), [top](top) will return a reference to
the [WindowBase](../windowbase-class) itself.

``` {.language-dart data-language="dart"}
// Add an IFrame to the current window.
IFrameElement myIFrame = new IFrameElement();
window.document.body.elements.add(myIFrame);

// Add an IFrame inside of the other IFrame.
IFrameElement innerIFrame = new IFrameElement();
myIFrame.elements.add(innerIFrame);

print(myIframe.contentWindow.top == window) // 'true'
print(innerIFrame.contentWindow.top == window) // 'true'

print(window.top == window) // 'true'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WindowBase? get top;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) top

::: {.features}
override
:::
:::

Gets the value of \"top\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get top => this._top;
```

::: {#setter .section .multi-line-signature}
void top=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"top\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set top(String? value) {
  _top = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) top
:::

Gets the value of \"top\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get top => getPropertyValue('top');
```

::: {#setter .section .multi-line-signature}
void top=([String](../../dart-core/string-class) value)
:::

Sets the value of \"top\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set top(String value) {
  setProperty('top', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/mutablerectangle/top.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

top property
============

::: {.section .multi-line-signature}
T top

::: {.features}
read / write
:::
:::

The y-coordinate of the left edge.

Setting the value will move the rectangle without changing its height.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T top;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/MutableRectangle/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) top

::: {.features}
override
:::
:::

The y-coordinate of the top edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get top => _top!;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/top.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

top property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) top

::: {.features}
override
:::
:::

The y-coordinate of the top edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get top;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/top.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

top property
============

::: {.section .multi-line-signature}
T top

::: {.features}
final
:::
:::

The y-coordinate of the top edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final T top;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/top.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/top.md)

# Top Command in PostgreSQL

`top` is a command-line utility that comes pre-installed on most Unix-based operating systems such as Linux, macOS, and BSD. It provides a dynamic, real-time view of the processes running on a system, displaying valuable information like process ID, user, CPU usage, memory usage, and more.

Learn more from the following resources:

- [@article@How to Use the top Command in Linux](https://phoenixnap.com/kb/top-command-in-linux)
- [@article@top man page](https://man7.org/linux/man-pages/man1/top.1.html)
- [@video@Demystifying the Top Command in Linux](https://www.youtube.com/watch?v=WsR11EGF9PA)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
