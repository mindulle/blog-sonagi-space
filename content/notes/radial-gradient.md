# radial-gradient()

The `radial-gradient()`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) creates an image consisting of a
progressive transition between two or more colors that radiate from an
origin. Its shape may be a circle or an ellipse. The function\'s result
is an object of the [`<gradient>`](gradient.md) data type, which is a
special kind of [`<image>`](_Resources/Markup%20And%20Styling/css/image.md).

## Try it

## Syntax

[css]

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)
```

A radial gradient is specified by indicating the center of the gradient
(where the 0% ellipse will be) and the size and shape of the _ending
shape_ (the 100% ellipse).

### Values

[`<position>`](position_value.md)

: The position of the gradient, interpreted in the same way as
[`background-position`](backgroun
d-position.md) or
[`transform-origin`](transform-origin.md). If unspecified, it
defaults to `center`.

[`<ending-shape>`](#ending-shape)

: The gradient\'s ending-shape. The value can be `circle` (meaning
that the gradient\'s shape is a circle with a constant radius) or
`ellipse` (meaning that the shape is an axis-aligned ellipse). If
unspecified, it defaults to `ellipse`.

[`<size>`](#size)

: Determines the size of the gradient\'s ending shape. If omitted it
default
s to farthest-corner. It can be given explicitly or by
keyword. For the purpose of the keyword definitions, consider the
gradient box edges as extending infinitely in both directions,
rather than being finite line segments.

    Both circle and ellipse gradients accept the following keywords for
    their `<size>`:


      Keyword             Description
      ------------------- -----------------------------------------------------------------------------------------------------

---

      `closest-side`      The gradient\'s ending shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses).
      `closest-corner`    The gradient\'s ending shape is sized so that it exactly meets the closest corner of the box from its center.
      `farthest-side`     Similar to `closest-side`, except the ending shape is siz

ed to meet the side of the box farthest from its center (or vertical and horizontal sides).
`farthest-corner` The default value, the gradient\'s ending shape is sized so that it exactly meets the farthest corner of the box from its center.

    If `<ending-shape>` is specified as `circle`, the size may be given
    explicitly as a [`<length>`](../length), which provides an explicit
    circle radius. Negative values are invalid.

    If `<ending-shape>` is specified as `ellipse`, th

e size may be given
as a [`<length-percentage>`](../length-percentage) with two values
to provide an explicit ellipse size. The first value represents the
horizontal radius and the second is the vertical radius. Percentage
values are relative to the corresponding dimension of the gradient
box. Negative values are invalid.

    When the `<ending-shape>` keyword is omitted, the gradient shape is
    determined by the size given. One `<length>` value provides a
    circle, while

two values in `<length-percentage>`units provide an
ellipse. A single `<percentage>` value is not valid.

[`<linear-color-stop>`](#linear-color-stop)

: A color-stop\'s [`<color>`](color_value.md) value, followed by one
or two optional stop positions (either a
[`<percentage>`](percentage.md) or a [`<length>`](length.md) along
the gradient\'s axis). A percentage of `0%`, or a length of `0`,
represents the center of the gradient; the value `100%` represents
the intersect
ion of the ending shape with the virtual gradient ray.
Percentage values in between are linearly positioned on the gradient
ray. Including two stop positions is equivalent to declaring two
color stops with the same color at the two positions.

[`<color-hint>`](#color-hint)

: The color-hint is an interpolation hint defining how the gradient
progresses between adjacent color stops. The length defines at which
point between two color stops the gradient color should reach the

    midpoint of the color transition. If omitted, the midpoint of the
    color transition is the midpoint between two color stops.

## Description

As with any gradient, a radial gradient has [](_Resources/Markup%20And%20Styling/css/image.md#description); i.e., it has no natural or preferred
size, nor a preferred ratio. Its concrete size will match the size of
the element it applies to.

To create a radial gradient that repeats so as to fill its container,
use the [`repeating-radial-gr
adient()`](repeating-radial-gradient.md)
function instead.

Because `<gradient>`s belong to the `<image>` data type, they can only
be used where `<image>`s can be used. For this reason,
`radial-gradient()` won\'t work on
[`background-color`](background-color.md) and other properties that use
the [`<color>`](color_value.md) data type.

### Composition of a radial gradient

![Graph explaining radial gradients: the virtual radiant ray is horizontal starting from the midpoint. The elliptical gradien
t, and therefore the ending shape, has the same aspect ratio as the box upon which it is
declared.](/images/wiki/wNGpJt%2BYBvAGwAAAAASUVORK5CYII%3D)

A radial gradient is defined by a _center point_, an _ending shape_, and
two or more _color-stop points_.

To create a smooth gradient, the `radial-gradient()` function draws a
series of concentric shapes radiating out from the center
to the _ending
shape_ (and potentially beyond). The ending shape may be either a circle
or an ellipse.

Color-stop points are positioned on a _virtual gradient ray_ that
extends horizontally from the center towards the right. Percentage-based
color-stop positions are relative to the intersection between the ending
shape and this gradient ray, which represents `100%`. Each shape is a
single color determined by the color on the gradient ray it intersects.

## Formal syntax

```
<radial-
gradient()> =
  radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )

<position> =
  [ left | center | right ] || [ top | center | bottom ]  |
  [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]?  |
  [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ]

<color-stop-list> =
  <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]#

<length-percentage> =
  <leng
th>      |
  <percentage>

<linear-color-stop> =
  <color>               &&
  <length-percentage>?

<linear-color-hint> =
  <length-percentage>
```

## Examples

### Simple gradient

[css]

```css
.radial-gradient {
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

### Non-centered gradient

[css]

```css
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  );
}
```

### More radial-gr

adient examples

Please see [Using CSS gradients](using_css_gradients.md) for
more examples.

## Specifications

---

Specification

---

[CSS Images Module Level 3\
 [\#
radial-gradients]](https://drafts.csswg.org/css-images/#radial-gradients)

---

---

## Browser compatibility

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

`radial-gradient`

2613

12

49

16Before Firefox 36, gradients weren\'t applied on the pre-multiplied
color space, leading to shades of grey unexpectedly appearing when used
with transparency.

3.6Since Firefox 42, the prefixed version of gradients can be disabled

by setting `layout.css.prefixes.gradients` to `false`.

10Internet Explorer 5.5 through 9.0 supported gradients via a
proprietary filter:
`-ms-filter: progid:DXImageTransform.Microsoft.Gradient()`.

1512.111.6--15

7

5.1Safari 4 was supporting an experimental `-webkit-gradient(radial,…)`
function. This old outdated syntax is still supported for compatibility
purposes.

≤37≤37

2618

49

16Before Firefox 36, gradients weren\'t applied on the pre-multiplied
color space, leading to shades of grey
unexpectedly appearing when used
with transparency.

4Since Firefox 42, the prefixed version of gradients can be disabled by
setting `layout.css.prefixes.gradients` to `false`.

1412.112--14

7

5Safari 4 was supporting an experimental `-webkit-gradient(radial,…)`
function. This old outdated syntax is still supported for compatibility
purposes.

1.51.0

`at`

26

12

49

16Before Firefox 36, gradients weren\'t applied on the pre-multiplied
color space, leading to shades of grey unexpectedly appe
aring when used
with transparency.

10Since Firefox 42, the prefixed version of gradients can be disabled by
setting `layout.css.prefixes.gradients` to `false`.

10

1511.6--15

7

4.4

26

1610

1412--14

7

1.5

`doubleposition`

71

79

64

No

58

12.1

71

71

64

50

12.2

10.0

`hue_interpolation_method`

111

111

No

No

97

16.2

111

111

No

No

16.2

22.0

`interpolation_color_space`

111

111

No

No

97

16.2

111

111

No

No

16.2

22.0

`interpolation_hints`

40

79

36

No

27

7

40

40

36

27

7

4.0

## See also

- [Using CSS gradients](using_css_gradients.md)
- Other gradient functions:
  [`repeating-radial-gradient()`](repeating-radial-gradient.md),
  [`linear-gradient()`](linear-gradient.md),
  [`repeating-linear-gradient()`](repeating-linear-gradient.md),
  [`conic-gradient()`](conic-gradient.md),
  [`repeating-conic-gradient()`](repeating-conic-gradient.md)
- [`<image>`](_Resources/Markup%20And%20Styling/css/image.md)
- [`image()`](\_Resources
  /Markup%20And%20Styling/css/image/image.md)
- [`element()`](<element().md>)
- [`image-set()`](image-set.md)
- [`cross-fade()`](cross-fade.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient>
