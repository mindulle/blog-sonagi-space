matrix()
========

The `matrix()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines a homogeneous 2D transformation
matrix. Its result is a [`<transform-function>`](transform-function.md)
data type.

Try it
------

**Note:** `matrix(a, b, c, d, tx, ty)` is a shorthand for
`matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

Syntax
------

The `matrix()` function is specified with six values. The constant
values are implied and not passed as parameters; the other parameters
are described in the column-major order.

[css]

```css
matrix(a, b, c, d, tx, ty)
```

### Values

[*a*](#a) *b* *c* *d*

:   Are [`<number>`](number.md)s describing the linear transformation.

[*tx*](#tx) *ty*

:   Are [`<number>`](number.md)s describing the translation to apply.

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
a & c \\
b & d \\
\end$

$\begin
a & c &  \\
b & d &  \\
0 & 0 & 1 \\
\end$

$\begin
a & c &  \\
b & d &  \\
0 & 0 & 1 \\
\end$

$\begin
a & c & 0 &  \\
b & d & 0 &  \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end$

`[a b c d tx ty]`

The values represent the following functions:
`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

Examples
--------

### HTML

[html]

```html
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

[css]

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### Result

Specifications
--------------

  -------------------------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------------------------

  [CSS Transforms Module Level 1\
  [\#
  funcdef-transform-matrix]](https://drafts.csswg.org/css-transforms/#funcdef-transform-matrix)

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

`matrix`

1

12

3.5Before Firefox 16, the translation values of `matrix()` could be
[`<length>`](https://developer.mozilla.org/docs/Web/CSS/length)s, in
addition to the standard
[`<number>`](https://developer.mozilla.org/docs/Web/CSS/number).

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
- Individual transform properties:
  - [`translate`](_Resources/Markup%20And%20Styling/css/translate.md)
  - [`scale`](_Resources/Markup%20And%20Styling/css/scale.md)
  - [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md)
- [`<transform-function>`](transform-function.md)
- [`matrix3d()`](matrix3d.md)
- [Understanding the CSS Transforms
    Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssmatrixcomponent/matrix.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

matrix property
===============

::: {#getter .section .multi-line-signature}
[DomMatrix](../dommatrix-class)? matrix
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomMatrix? get matrix native;
```

::: {#setter .section .multi-line-signature}
void matrix=([DomMatrix](../dommatrix-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set matrix(DomMatrix? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssMatrixComponent/matrix.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transform/matrix.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

matrix property
===============

::: {#getter .section .multi-line-signature}
[Matrix](../matrix-class)? matrix
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Matrix? get matrix native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Transform/matrix.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Matrix.md)

# Matrix

In game development, a **matrix** is a fundamental part of game mathematics. It's a grid of numbers arranged into rows and columns that's particularly important in 3D game development. These matrices are typically 4x4, meaning they contain 16 floating point numbers, and they're used extensively for 
transformations. They allow for the scaling, rotation, and translation (moving) of 3D vertices in space. With matrices, these transformations can be combined, and transformed vertices can be used to d
raw the replicas of 3D models into 2D screen space for rendering.

Visit the following resources to learn more:

- [@article@Matrix Algebra and Game Programming](https://www.gameludere.com/2019/12/21/matrix-algebra-and-game-programming/)
- [@article@Matrices in Game Development](https://dev.to/fkkarakurt/matrices-and-vectors-in-game-development-67h)


## 관련 로드맵
- [[game-developer|game-developer]]
