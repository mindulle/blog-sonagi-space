rotate
======

The `rotate` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property allows you to specify rotation transforms individually and
independently of the [`transform`](transform.md) property. This maps better
to typical user interface usage, and saves having to remember the exact
order of transform functions to specify in the `transform` property.

Try it
------

Syntax
------

[css]

```css
/* Keyword values */
rotate: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;

/* Global values */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

### Values

[angle value](#angle_value)

:   An [`<angle>`](angle.md) specifying the angle to rotate the affected
    element through, around the Z axis. Equivalent to a `rotate()` (2D
    rotation) function.

[x, y, or z axis name plus angle value](#x_y_or_z_axis_name_plus_angle_value)

:   The name of the axis you want to rotate the affected element around
    (`"x"`, \"`y`\", or \"`z"`), plus an [`<angle>`](angle.md) specifying
    the angle to rotate the element through. Equivalent to a
    `rotateX()`/`rotateY()`/`rotateZ()` (3D rotation) function.

[vector plus angle value](#vector_plus_angle_value)

:   Three [`<number>`](number.md)s representing an origin-centered vector
    that defines a line around which you want to rotate the element,
    plus an [`<angle>`](angle.md) specifying the angle to rotate the
    element through. Equivalent to a `rotate3d()` (3D rotation)
    function.

[`none`](#none)

:   Specifies that no rotation should be applied.

Formal definition
-----------------

  ------------------------------------------------------------------------------------------ ------------------------
  [Initial value](initial_value.md)                                                             `none`
  Applies to                                                                                 transformable elements
  [Inherited](inheritance.md)                                                                   no
  [Computed value](computed_value.md)                                                           as specified
  Animation type                                                                             a transform
  Creates [stacking context](stacking_context.md)   yes
  ------------------------------------------------------------------------------------------ ------------------------

Formal syntax
-------------

```
rotate = 
  none                                    |
  <angle>                                 |
  [ x | y | z | <number> ] && <angle>  
```

Examples
--------

### Rotating an element on hover

The following example shows how to use the `rotate` property to rotate
an element along various axes on hover. The first box rotates 90 degrees
on the Z axis hover, the second rotates 180 degrees on the Y axis on
hover, and the third rotates 360 degrees on hover around a vector
defined by coordinates.

#### HTML

[html]

```html
<div class="box" id="box1">rotate Z</div>
<div class="box" id="box2">rotate Y</div>
<div class="box" id="box3">vector & angle</div>
```

#### CSS

[css]

```css
.box {
  display: inline-block;
  margin: 1em;
  min-width: 6.5em;
  line-height: 6.5em;
  text-align: center;
  transition: 1s ease-in-out;
  border: 0.25em dotted;
}

#box1:hover {
  rotate: 90deg;
}

#box2:hover {
  rotate: y 180deg;
}

#box3:hover {
  rotate: 1 2 1 360deg;
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

`rotate`

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

`x_y_z_angle`

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

- [`translate`](_Resources/Markup%20And%20Styling/css/translate.md)
- [`scale`](_Resources/Markup%20And%20Styling/css/scale.md)
- [`transform`](transform.md)

Note: `skew` is not an independent `transform` value

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/rotate>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/transform-function/rotate.md)
rotate()
========

The `rotate()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines a transformation that rotates an
element around a fixed point on the 2D plane, without deforming it. Its
result is a [`<transform-function>`](transform-function.md) data type.

Try it
------

The fixed point that the element rotates around --- mentioned above ---
is also known as the **transform origin**. This defaults to the center
of the element, but you can set your own custom transform origin using
the [`transform-origin`](transform-origin.md) property.

Syntax
------

The amount of rotation created by `rotate()` is specified by an
[`<angle>`](angle.md). If positive, the movement will be clockwise; if
negative, it will be counter-clockwise. A rotation by 180° is called
*point reflection*.

[css]

```css
rotate(a)
```

### Values

[*a*](#a)

:   Is an [`<angle>`](angle.md) representing the angle of the rotation.
    The direction of rotation depends on the writing direction. In a
    left-to-right context, a positive angle denotes a clockwise
    rotation, a negative angle a counter-clockwise one. In a
    right-to-left context, a positive angle denotes a counter-clockwise
    rotation, a negative angle a clockwise one.

[Cartesian coordinates](transform-function.md#cartesian_coordinates) on
[ℝ\^2](https://en.wikipedia.org/wiki/Real_coordinate_space)

[Homogeneous
coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) on
[ℝℙ\^2](https://en.wikipedia.org/wiki/Real_projective_plane)

Cartesian coordinates on
[ℝ\^3](https://en.wikipedia.org/wiki/Real_coordinate_space)

Homogeneous coordinates on
[ℝℙ\^3](https://en.wikipedia.org/wiki/Real_projective_space)

$\begin
 \\
 \\
\end$

$\begin
 & 0 \\
 & 0 \\
0 & 0 & 1 \\
\end$

$\begin
 & 0 \\
 & 0 \\
0 & 0 & 1 \\
\end$

$\begin
 & 0 & 0 \\
 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end$

`[cos(a) sin(a) -sin(a) cos(a) 0 0]`

Examples
--------

### Basic example

#### HTML

[html]

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

[css]

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
```

#### Result

### Combining rotation with another transformation

If you want to apply multiple transformations to an element, be careful
about the order in which you specify your transformations. For example,
if you rotate before translating, the translation will be along the new
axis of rotation!

#### HTML

[html]

```html
<div>Normal</div>
<div class="rotate">Rotated</div>
<div class="rotate-translate">Rotated + Translated</div>
<div class="translate-rotate">Translated + Rotated</div>
```

#### CSS

[css]

```css
div {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  background-color: lightgray;
}

.rotate {
  background-color: transparent;
  outline: 2px dashed;
  transform: rotate(45deg);
}

.rotate-translate {
  background-color: pink;
  transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
  background-color: gold;
  transform: translateX(180px) rotate(45deg);
}
```

#### Result

Specifications
--------------

  -------------------------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 1\
  [\#
  funcdef-transform-rotate]](https://drafts.csswg.org/css-transforms/#funcdef-transform-rotate)

  -------------------------------------------------------------------------------------------------------

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

`rotate`

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

- [`transform`](transform.md) property
- [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md) property
- [`<transform-function>`](transform-function.md)
- [`rotate3d()`](rotate3d.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dommatrixreadonly/rotate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rotate method
=============

::: {.section .multi-line-signature}
[DomMatrix](../dommatrix-class) rotate(

1.  \[[num](../../dart-core/num-class)? rotX,
2.  [num](../../dart-core/num-class)? rotY,
3.  [num](../../dart-core/num-class)? rotZ\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomMatrix rotate([num? rotX, num? rotY, num? rotZ]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomMatrixReadOnly/rotate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/textpositioningelement/rotate.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

rotate property
===============

::: {#getter .section .multi-line-signature}
[AnimatedNumberList](../animatednumberlist-class)? rotate
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedNumberList? get rotate native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TextPositioningElement/rotate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/rotate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rotate method
=============

::: {.section .multi-line-signature}
void rotate(

1.  [num](../../dart-core/num-class) angle

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void rotate(num angle) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/rotate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/matrix/rotate.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

rotate method
=============

::: {.section .multi-line-signature}
[Matrix](../matrix-class) rotate(

1.  [num](../../dart-core/num-class) angle

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Matrix rotate(num angle) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Matrix/rotate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/rotate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rotate method
=============

::: {.section .multi-line-signature}
void rotate(

1.  [num](../../dart-core/num-class) angle

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void rotate(num angle) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/rotate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/rotate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rotate method
=============

::: {.section .multi-line-signature}
void rotate(

1.  [num](../../dart-core/num-class) angle

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void rotate(num angle) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/rotate.html>
:::
