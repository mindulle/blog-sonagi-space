perspective
===========

The `perspective`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property
determines the distance between the z=0 plane and the user in order to
give a 3D-positioned element some perspective.

Try it
------

Syntax
------

[css]

```css
/* Keyword value */
perspective: none;

/* <length> values */
perspective: 20px;
perspective: 3.5em;

/* Global values */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Values

[`none`](#none)

:   Indicates that no perspective transform is to be applied.

[`<length>`](#length)

:   A [`<length>`](length.md) giving the distance from the user to the z=0
    plane. It is used to apply a perspective transform to the children
    of the element. Negative values are syntax errors. If the value is
    smaller than `1px`, it is clamped to `1px`.

Description
-----------

Each 3D element with z\>0 becomes larger; each 3D-element with z\<0
becomes smaller. The strength of the effect is determined by the value
of this property. Large values of `perspective` cause a small
transformation; small values of `perspective` cause a large
transformation.

The parts of the 3D elements that are behind the user --- i.e. their
z-axis coordinates are greater than the value of the `perspective` CSS
property --- are not drawn.

The *vanishing point* is by default placed at the center of the element,
but its position can be changed using the
[`perspective-origin`](perspective-origin.md) property.

Using this property with a value other than `none` creates a new
[](stacking_context.md).
Also, in that case, the object will act as a containing block for
`position: fixed` elements that it contains.

Formal definition
-----------------

  ------------------------------------------------------------------------------------------ ----------------------------------
  [Initial value](initial_value.md)                                                             `none`
  Applies to                                                                                 transformable elements
  [Inherited](inheritance.md)                                                                   no
  [Computed value](computed_value.md)                                                           the absolute length or `none`
  Animation type                                                                             a [length](length.md#interpolation)
  Creates [stacking context](stacking_context.md)   yes
  ------------------------------------------------------------------------------------------ ----------------------------------

Formal syntax
-------------

```
perspective = 
  none            |
  <length [0,∞]>  
```

Examples
--------

### Setting perspective

An example showing how a cube varies if the `perspective` is set at
different positions is given in [](using_css_transforms.md#setting_perspective).

Specifications
--------------

  -------------------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 2\
  [\#
  perspective-property]](https://drafts.csswg.org/css-transforms-2/#perspective-property)

  -------------------------------------------------------------------------------------------------

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

`perspective`

3612

1212

491610

10

2315

94

4.43

3618

491610

2414

92

3.01.0

See also
--------

- [Using CSS Transforms](using_css_transforms.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/perspective>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/transform-function/perspective.md)
perspective()
=============

The `perspective()`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines a transformation that sets the
distance between the user and the z=0 plane, the perspective from which
the viewer would be if the 2-dimensional interface were 3-dimensional.
Its result is a [`<transform-function>`](transform-function.md) data
type.

Try it
------

The `perspective()` transform function is part of the
[`transform`](transform.md) value applied on the element being
transformed. This differs from the [`perspective`](_Resources/Markup%20And%20Styling/css/perspective.md) and
[`perspective-origin`](perspective-origin.md) properties which are
attached to the parent of a child transformed in 3-dimensional space.

Syntax
------

The perspective distance used by `perspective()` is specified by a
[`<length>`](length.md) value, which represents the distance between the
user and the z=0 plane, or by `none`. The z=0 plane is the plane where
everything appears in a 2-dimensional view, or the screen. Negative
values are syntax errors. Values smaller than `1px` (including zero) are
clamped to `1px`. Values other than `none` cause elements with positive
z positions to appear larger, and elements with negative z positions to
appear smaller. Elements with z positions equal to or larger than the
perspective value disappear as though they are behind the user. Large
values of perspective represent a small transformation; small values of
`perspective()` represent a large transformation; `perspective(none)`
represents perspective from infinite distance and no transformation.

[css]

```css
perspective(d)
```

### Values

[*d*](#d)

:   Is a [`<length>`](length.md) representing the distance from the user
    to the z=0 plane. If it is 0 or a negative value, no perspective
    transform is applied.

[Cartesian coordinates](transform-function.md#cartesian_coordinates) on
[ℝ\^2](https://en.wikipedia.org/wiki/Real_coordinate_space)

[Homogeneous
coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) on
[ℝℙ\^2](https://en.wikipedia.org/wiki/Real_projective_plane)

Cartesian coordinates on
[ℝ\^3](https://en.wikipedia.org/wiki/Real_coordinate_space)

Homogeneous coordinates on
[ℝℙ\^3](https://en.wikipedia.org/wiki/Real_projective_space)

This transformation applies to the 3D space and can\'t be represented on
the plane.

This transformation is not a linear transformation in ℝ\^3, and can\'t
be represented using a Cartesian-coordinate matrix.

$\begin
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 &  & 1 \\
\end$

Examples
--------

### HTML

[html]

```html
<p>Without perspective:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (9cm):</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (4cm):</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

[css]

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

### Result

Specifications
--------------

  -----------------------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 2\
  [\#
  funcdef-perspective]](https://drafts.csswg.org/css-transforms-2/#funcdef-perspective)

  -----------------------------------------------------------------------------------------------

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

`perspective`

12

12

10

10

15

4

3

18

10

14

3.2

1.0

See also
--------

- [`transform`](transform.md)
- [`<transform-function>`](transform-function.md)
- Individual transform properties:
  - [`translate`](_Resources/Markup%20And%20Styling/css/translate.md)
  - [`scale`](_Resources/Markup%20And%20Styling/css/scale.md)
  - [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/perspective.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

perspective property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) perspective
:::

Gets the value of \"perspective\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get perspective => getPropertyValue('perspective');
```

::: {#setter .section .multi-line-signature}
void perspective=([String](../../dart-core/string-class) value)
:::

Sets the value of \"perspective\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set perspective(String value) {
  setProperty('perspective', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/perspective.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Perspective.md)

# Perspective

In game development, **Perspective** plays a significant role in creating a three-dimensional world on a two-dimensional space. It mimics the way our eyes perceive distance and depth, with objects appearing smaller as they go farther away. Essentially, this is achieved by projecting 3D co-ordinates 
on a virtual screen. Perspective projection is done in two types - one-point where only one axis displays a change in size with depth and two-point where both axis display a change. It creates more re
alistic views, enhancing game visualization and immersion. An important aspect is the player's viewpoint, which is the vanishing point where parallel lines converge in the distance.

Visit the following resources to learn more:

- [@article@Perspective in Games](https://www.gamedeveloper.com/design/making-the-most-out-of-the-first-person-perspectives)


## 관련 로드맵
- [[game-developer|game-developer]]
