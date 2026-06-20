left
====

The `left` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property participates in specifying the horizontal position of a
[positioned element](position.md). It has no effect on non-positioned
elements.

Try it
------

Syntax
------

[css]

```css
/* <length> values */
left: 3px;
left: 2.4em;

/* <percentage>s of the width of the containing block */
left: 10%;

/* Keyword value */
left: auto;

/* Global values */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### Values

[`<length>`](length.md)

:   A negative, null, or positive [`<length>`](length.md) that represents:

    -   for *absolutely positioned elements*, the distance to the left
        edge of the containing block.
    -   for *relatively positioned elements*, the distance that the
        element is moved to the right of its normal position.

[`<percentage>`](percentage.md)

:   A [`<percentage>`](percentage.md) of the containing block\'s width.

[`auto`](#auto)

:   Specifies that:

    -   for *absolutely positioned elements*, the position of the
        element is based on the [`right`](right) property, while
        `width: auto` is treated as a width based on the content; or if
        `right` is also `auto`, the element is positioned where it
        should horizontally be positioned if it were a static element.
    -   for *relatively positioned elements*, the distance of the
        element from its normal position is based on the
        [`right`](right) property; or if `right` is also `auto`, the
        element is not moved horizontally at all.

[`inherit`](#inherit)

:   Specifies that the value is the same as the computed value from its
    parent element (which might not be its containing block). This
    computed value is then handled as if it were a [`<length>`](length.md),
    [`<percentage>`](percentage.md), or the `auto` keyword.

Description
-----------

The effect of `left` depends on how the element is positioned (i.e., the
value of the [`position`](position.md) property):

- When `position` is set to `absolute` or `fixed`, the `left` property
    specifies the distance between the element\'s outer margin of left
    edge and the inner border of left edge of its containing block. (The
    containing block is the ancestor to which the element is relatively
    positioned.)
- When `position` is set to `relative`, the `left` property specifies
    the distance the element\'s left edge is moved to the right from its
    normal position.
- When `position` is set to `sticky`, the `left` property is used to
    compute the sticky-constraint rectangle.
- When `position` is set to `static`, the `left` property has *no
    effect*.

When both `left` and [`right`](right.md) are defined, and width constraints
don\'t prevent it, the element will stretch to satisfy both. If the
element cannot stretch to satisfy both, the position of the element is
*overspecified*. When this is the case, the `left` value has precedence
when the container is left-to-right; the `right` value has precedence
when the container is right-to-left.

Formal definition
-----------------

  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         positioned elements
  [Inherited](inheritance.md)           no
  Percentages                        refer to the width of the containing block
  [Computed value](computed_value.md)   if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto`
  Animation type                     a [length](length.md#interpolation), [percentage](percentage.md#interpolation) or calc();
  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
left = 
  auto                 |
  <length-percentage>  

<length-percentage> = 
  <length>      |
  <percentage>  
```

Examples
--------

### Positioning elements

#### HTML

[html]

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      The only containing element for this div is the main window, so it
      positions itself in relation to it.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative position in relation to its siblings.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relative to its sibling div above, but removed from flow of content.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute position inside of a parent with relative position</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Absolute position with both left and right declared</p>
    </div>
  </div>
</div>
```

#### CSS

[css]

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#example_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### Result

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

`left`

1

12

1

5.5

5

1

4.4

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
https://developer.mozilla.org/en-US/docs/Web/CSS/left>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/left.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

left property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) left

::: {.features}
override
:::
:::

Gets the value of \"left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get left => this._left;
```

::: {#setter .section .multi-line-signature}
void left=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set left(String? value) {
  _left = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/left.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/left.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

left property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) left
:::

Gets the value of \"left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get left => getPropertyValue('left');
```

::: {#setter .section .multi-line-signature}
void left=([String](../../dart-core/string-class) value)
:::

Sets the value of \"left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set left(String value) {
  setProperty('left', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/left.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/mutablerectangle/left.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

left property
=============

::: {.section .multi-line-signature}
T left

::: {.features}
read / write
:::
:::

The x-coordinate of the left edge.

Setting the value will move the rectangle without changing its width.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T left;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/MutableRectangle/left.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/left.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

left property
=============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) left

::: {.features}
override
:::
:::

The x-coordinate of the left edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get left => _left!;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/left.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/left.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

left property
=============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) left

::: {.features}
override
:::
:::

The x-coordinate of the left edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get left;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/left.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/left.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

left property
=============

::: {.section .multi-line-signature}
T left

::: {.features}
final
:::
:::

The x-coordinate of the left edge.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final T left;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/left.html>
:::
