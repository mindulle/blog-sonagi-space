scale
=====

The `scale` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property allows you to specify scale transforms individually and
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
scale: none;

/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;

/* Three values */
scale: 200% 50% 200%;

/* Global values */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Values

[Single value](#single_value)

:   A [`<number>`](number.md) or [`<percentage>`](percentage.md) specifying a
    scale factor to make the affected element scale by the same factor
    along both the X and Y axes. Equivalent to a `scale()` (2D scaling)
    function with a single value specified.

[Two values](#two_values)

:   Two [`<number>`](number.md) or [`<percentage>`](percentage.md) values that
    specify the X and Y axis scaling values (respectively) of a 2D
    scale. Equivalent to a `scale()` (2D scaling) function with two
    values specified.

[Three values](#three_values)

:   Three [`<number>`](number.md) or [`<percentage>`](percentage.md) values
    that specify the X, Y, and Z axis scaling values (respectively) of a
    3D scale. Equivalent to a `scale3d()` (3D scaling) function.

[`none`](#none)

:   Specifies that no scaling should be applied.

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
scale = 
  none                              |
  [ <number> | <percentage> ]  
```

Examples
--------

### Scaling an element on hover

The following example shows how to scale an element on hover. Two boxes
are shown, one with a single `scale` value which scales the element
along both axes. The second box has two `scale` values which scales the
element along the X and Y axes independently.

#### HTML

[html]

```html
<div class="box" id="box1">single value</div>
<div class="box" id="box2">two values</div>
```

#### CSS

[css]

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
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

`scale`

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
- [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md)
- [`transform`](transform.md)

Note: skew is not an independent transform value

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/scale>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/transform-function/scale.md)
scale()
=======

The `scale()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines a transformation that resizes an
element on the 2D plane. Because the amount of scaling is defined by a
vector \[sx, sy\], it can resize the horizontal and vertical dimensions
at different scales. Its result is a
[`<transform-function>`](transform-function.md) data type.

Try it
------

This scaling transformation is characterized by a two-dimensional
vector. Its coordinates define how much scaling is done in each
direction. If both coordinates are equal, the scaling is uniform
(*isotropic*) and the aspect ratio of the element is preserved (this is
a [homothetic
transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

When a coordinate value is outside the \[-1, 1\] range, the element
grows along that dimension; when inside, it shrinks. A negative value
results in a [point
reflection](https://en.wikipedia.org/wiki/Point_reflection) in that
dimension. The value `1` has no effect.

**Note:** The `scale()` function only scales in 2D. To scale in 3D, use
[`scale3d()`](scale3d.md) instead.

Syntax
------

The `scale()` function is specified with either one or two values, which
represent the amount of scaling to be applied in each direction.

[css]

```css
scale(sx)

scale(sx, sy)
```

### Values

[`sx`](#sx)

:   A [`<number>`](number.md) or [`<percentage>`](percentage.md)
    representing the abscissa (horizontal, x-component) of the scaling
    vector.

[`sy`](#sy)

:   A [`<number>`](number.md) or [`<percentage>`](percentage.md)
    representing the ordinate (vertical, y-component) of the scaling
    vector. If not defined, its default value is `sx`, resulting in a
    uniform scaling that preserves the element\'s aspect ratio.

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
 & 0 \\
0 &  \\
\end$

$\begin
 & 0 & 0 \\
0 &  & 0 \\
0 & 0 & 1 \\
\end$

$\begin
 & 0 & 0 \\
0 &  & 0 \\
0 & 0 & 1 \\
\end$

$\begin
 & 0 & 0 & 0 \\
0 &  & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end$

`[sx 0 0 sy 0 0]`

Accessibility concerns
----------------------

Scaling/zooming animations are problematic for accessibility, as they
are a common trigger for certain types of migraine. If you need to
include such animations on your website, you should provide a control to
allow users to turn off animations, preferably site-wide.

Also, consider making use of the
[`prefers-reduced-motion`](prefers-reduced-motion.md) media
feature --- use it to write a [media query](css_media_queries.md) that
will turn off animations if the user has reduced animation specified in
their system preferences.

Find out more:

- [MDN Understanding WCAG, Guideline 2.3
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 \| W3C Understanding WCAG
    2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

Examples
--------

### Scaling the X and Y dimensions together

#### HTML

[html]

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

[css]

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* Equal to scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Result

### Scaling X and Y dimensions separately, and translating the origin

#### HTML

[html]

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

[css]

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* Equal to scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 1\
  [\#
  funcdef-transform-scale]](https://drafts.csswg.org/css-transforms/#funcdef-transform-scale)

  -----------------------------------------------------------------------------------------------------

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

`scale`

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
- [`scale`](_Resources/Markup%20And%20Styling/css/scale.md)
- [`<transform-function>`](transform-function.md)
- [`scale3d()`](scale3d.md)
- Other individual transform properties [`translate`](_Resources/Markup%20And%20Styling/css/translate.md)
    and [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dommatrixreadonly/scale.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
[DomMatrix](../dommatrix-class) scale(

1.  \[[num](../../dart-core/num-class)? scaleX,
2.  [num](../../dart-core/num-class)? scaleY,
3.  [num](../../dart-core/num-class)? scaleZ,
4.  [num](../../dart-core/num-class)? originX,
5.  [num](../../dart-core/num-class)? originY,
6.  [num](../../dart-core/num-class)? originZ\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomMatrix scale(
    [num? scaleX,
    num? scaleY,
    num? scaleZ,
    num? originX,
    num? originY,
    num? originZ]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomMatrixReadOnly/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/scale.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) scale(

1.  [double](../../dart-core/double-class) s

)
:::

Returns a copy of [this](../float32x4-class) each lane being scaled by
`s`. Equivalent to this \* new Float32x4.splat(s)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 scale(double s);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/scale.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) scale(

1.  [double](../../dart-core/double-class) s

)
:::

Returns a copy of [this](../float64x2-class) each lane being scaled by
`s`. Equivalent to this \* new Float64x2.splat(s)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 scale(double s);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/scale.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
void scale(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scale(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/scale.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
void scale(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scale(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/scale.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
void scale(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scale(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/matrix/scale.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

scale method
============

::: {.section .multi-line-signature}
[Matrix](../matrix-class) scale(

1.  [num](../../dart-core/num-class) scaleFactor

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Matrix scale(num scaleFactor) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Matrix/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedisplacementmapelement/scale.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

scale property
==============

::: {#getter .section .multi-line-signature}
[AnimatedNumber](../animatednumber-class)? scale
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedNumber? get scale native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDisplacementMapElement/scale.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/visualviewport/scale.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scale property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? scale
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get scale native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VisualViewport/scale.html>
:::
