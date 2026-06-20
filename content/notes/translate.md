translate
=========

The `translate` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property allows you to specify translation transforms individually and
independently of the [`transform`](transform.md) property. This maps better
to typical user interface usage, and saves having to remember the exact
order of transform functions to specify in the `transform` value.

Try it
------

Syntax
------

[css]

```css
/* Keyword values */
translate: none;

/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;

/* Three values */
translate: 50% 105px 5rem;

/* Global values */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Values

[Single](#single) [`<length-percentage>`](length-percentage.md) value

:   A [`<length>`](length.md) or [`<percentage>`](percentage.md) that
    specifies a translation along the X-axis. Equivalent to a
    `translate()` (2D translation) function with a single value
    specified.

[Two](#two) [`<length-percentage>`](length-percentage.md) values

:   Two [`<length>`](length.md) or [`<percentage>`](percentage.md) that
    specify the X and Y axis translation values (respectively) of a 2D
    translation. Equivalent to a `translate()` (2D translation) function
    with two values specified.

[Three values](#three_values)

:   Two [`<length-percentage>`](length-percentage.md) and single
    [`<length>`](length.md) values that specify the X, Y, and Z axis
    translation values (respectively) of a 3D translation. Equivalent to
    a `translate3d()` (3D translation) function.

[`none`](#none)

:   Specifies that no translation should be applied.

Formal definition
-----------------

  ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------
  [Initial value](initial_value.md)                                                             `none`
  Applies to                                                                                 transformable elements
  [Inherited](inheritance.md)                                                                   no
  Percentages                                                                                refer to the size of bounding box
  [Computed value](computed_value.md)                                                           as specified, but with relative lengths converted into absolute lengths
  Animation type                                                                             a transform
  Creates [stacking context](stacking_context.md)   yes
  ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------

Formal syntax
-------------

```
translate = 
  none                                                |
  <length-percentage> [ <length-percentage> <length>? ]?  

<length-percentage> = 
  <length>      |
  <percentage>  
```

Examples
--------

### Translating an element on hover

This example shows how to use the `translate` property to move an
element in three axes. The first box is moved along the X axis and the
second box is moved along the X and Y axes. The third box is moved along
the X, Y and Z axes and has the appearance of moving toward the viewer
because of the addition of [`perspective`](_Resources/Markup%20And%20Styling/css/perspective.md) to the parent
element.

#### HTML

[html]

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

[css]

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### Result

Specifications
--------------

  ---------------------------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 2\
  [\#
  individual-transforms]](https://drafts.csswg.org/css-transforms-2/#individual-transforms)

  ---------------------------------------------------------------------------------------------------

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

`translate`

104

104

72

No

90

14.1

104

104

79

71

14.5

20.0

See also
--------

- [`scale`](_Resources/Markup%20And%20Styling/css/scale.md)
- [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md)
- [`transform`](transform.md)

Note: skew is not an independent transform value

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/translate>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/transform-function/translate.md)
translate()
===========

The `translate()`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) repositions an element in the horizontal
and/or vertical directions. Its result is a
[`<transform-function>`](transform-function.md) data type.

Try it
------

This transformation is characterized by a two-dimensional vector \[tx,
ty\]. Its coordinates define how much the element moves in each
direction.

Syntax
------

[css]

```css
/* Single <length-percentage> values */
transform: translate(200px);
transform: translate(50%);

/* Double <length-percentage> values */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### Values

[Single](#single) `<length-percentage>` values

:   This value is a [`<length>`](length.md) or
    [`<percentage>`](percentage.md) representing the abscissa
    (horizontal, x-component) of the translating vector \[tx, 0\]. The
    ordinate (vertical, y-component) of the translating vector will be
    set to `0`. For example, `translate(2px)` is equivalent to
    `translate(2px, 0)`. A percentage value refers to the width of the
    reference box defined by the [`transform-box`](transform-box.md)
    property.

[Double](#double) `<length-percentage>` values

:   This value describes two [`<length>`](length.md) or
    [`<percentage>`](percentage.md) values representing both the
    abscissa (horizontal, x-component) and the ordinate (vertical,
    y-component) of the translating vector \[tx, ty\]. A percentage as
    first value refers to the width, as second part to the height of the
    reference box defined by the [`transform-box`](transform-box.md)
    property.

[Cartesian coordinates](transform-function.md#cartesian_coordinates) on
[ℝ\^2](https://en.wikipedia.org/wiki/Real_coordinate_space)

[Homogeneous
coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) on
[ℝℙ\^2](https://en.wikipedia.org/wiki/Real_projective_plane)

Cartesian coordinates on
[ℝ\^3](https://en.wikipedia.org/wiki/Real_coordinate_space)

Homogeneous coordinates on
[ℝℙ\^3](https://en.wikipedia.org/wiki/Real_projective_space)

A translation is not a linear transformation in ℝ\^2 and can\'t be
represented using a Cartesian-coordinate matrix.

$\begin
1 & 0 &  \\
0 & 1 &  \\
0 & 0 & 1 \\
\end$

$\begin
1 & 0 &  \\
0 & 1 &  \\
0 & 0 & 1 \\
\end$

$\begin
1 & 0 & 0 &  \\
0 & 1 & 0 &  \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end$

`[1 0 0 1 tx ty]`

### Formal syntax

[css]

```css
translate(<length-percentage>, <length-percentage>?)
```

Examples
--------

### Using a single-axis translation

#### HTML

[html]

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

[css]

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Equal to: translateX(10px) or translate(10px, 0) */
  transform: translate(10px);
  background-color: pink;
}
```

#### Result

### Combining y-axis and x-axis translation

#### HTML

[html]

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

[css]

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Result

Specifications
--------------

  -------------------------------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 1\
  [\#
  funcdef-transform-translate]](https://drafts.csswg.org/css-transforms/#funcdef-transform-translate)

  -------------------------------------------------------------------------------------------------------------

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

`translate`

1

12

3.5

9

10.5

3.1

2

18

4

11

3.2

1.0

See also
--------

- [`transform`](transform.md)
- [`<transform-function>`](transform-function.md)
- [`translate`](_Resources/Markup%20And%20Styling/css/translate.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/global_attributes/translate.md)
translate
=========

The `translate` [global attribute](_Resources/Markup%20And%20Styling/html/global_attributes/index.md) is an
[enumerated](https://developer.mozilla.org/en-US/docs/Glossary/Enumerated)
attribute that is used to specify whether an element\'s *translatable
attribute* values and its
[`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) node
children should be translated when the page is localized, or whether to
leave them unchanged.

It can have the following values:

- empty string or `yes`, which indicates that the element should be
    translated when the page is localized.
- `no`, which indicates that the element must not be translated.

Although not all browsers recognize this attribute, it is respected by
automatic translation systems such as Google Translate, and may also be
respected by tools used by human translators. As such it\'s important
that web authors use this attribute to mark content that should not be
translated.

Examples
--------

In this example, the `translate` attribute is used to ask translation
tools not to translate the company\'s brand name in the footer.

[html]

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

Specifications
--------------

  ------------------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  attr-translate]](https://html.spec.whatwg.org/multipage/dom.html#attr-translate)

  ------------------------------------------------------------------------------------------

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

`translate`

19

79

111

No

15

6

4.4

25

111

14

6

1.5

See also
--------

- All [global attributes](_Resources/Markup%20And%20Styling/html/global_attributes/index.md).
- The [`HTMLElement.translate`] property that
    reflects this attribute.
- [Using HTML\'s translate
    attribute](https://www.w3.org/International/questions/qa-translate-flag).
- HTML [`lang`](_Resources/Markup%20And%20Styling/html/global_attributes/index.md#lang) attribute

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/translate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

translate property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? translate
:::

Specifies whether this element\'s text content changes when the page is
localized.

Other resources
---------------

-   [The translate
    attribute](https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get translate native;
```

::: {#setter .section .multi-line-signature}
void translate=([bool](../../dart-core/bool-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set translate(bool? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/translate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dommatrixreadonly/translate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

translate method
================

::: {.section .multi-line-signature}
[DomMatrix](../dommatrix-class) translate(

1.  \[[num](../../dart-core/num-class)? tx,
2.  [num](../../dart-core/num-class)? ty,
3.  [num](../../dart-core/num-class)? tz\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomMatrix translate([num? tx, num? ty, num? tz]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomMatrixReadOnly/translate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/translate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

translate method
================

::: {.section .multi-line-signature}
void translate(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void translate(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/translate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/matrix/translate.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

translate method
================

::: {.section .multi-line-signature}
[Matrix](../matrix-class) translate(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Matrix translate(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Matrix/translate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/translate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

translate method
================

::: {.section .multi-line-signature}
void translate(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void translate(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/translate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/translate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

translate method
================

::: {.section .multi-line-signature}
void translate(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void translate(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/translate.html>
:::
