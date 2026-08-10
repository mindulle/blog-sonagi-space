# rotate3d()

The `rotate3d()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines a transformation that rotates an
element around a fixed axis in 3D space, without deforming it. Its
result is a [`<transform-function>`](transform-function.md) data type.

## Try it

In 3D space, rotations have three degrees of freedom, which together
describe a single axis of rotation. The axis of rotation is defined by
an \[x, y, z\] vector and pass by the origin (as defined by the
[`transform-origin`](transform-origin.md) property). If, as specified,
the vector is not _normalized_ (i.e., if the sum of the square of its
three coordinates is not 1), the [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)
will normalize it internally. A non-normalizable vector, such as the
null vector, \[0, 0, 0\], will cause the rotation to be ignored, but
without invalidating the whole CSS property.

**Note:** Unlike rotations in the 2D plane, the composition of 3D
rotations is usually not commutative. In other words, the order in which
the rotations are applied impacts the result.

## Syntax

The amount of rotation created by `rotate3d()` is specified by three
[`<number>`](number.md)s and one [`<angle>`](angle.md). The `<number>`s
represent the x-, y-, and z-coordinates of the vector denoting the axis
of rotation. The `<angle>` represents the angle of rotation; if
positive, the movement will be clockwise; if negative, it will be
counter-clockwise.

[css]

```css
rotate3d(x, y, z, a)
```

### Values

[`x`](#x)

: Is a [`<number>`](number.md) describing the x-coordinate of the
vector denoting the axis of rotation which can be a positive or
negative number.

[`y`](#y)

: Is a [`<number>`](number.md) describing the y-coordinate of the
vector denoting the axis of rotation which can be a positive or
negative number.

[`z`](#z)

: Is a [`<number>`](number.md) describing the z-coordinate of the
vector denoting the axis of rotation which can be a positive or
negative number.

[`a`](#a)

: Is an [`<angle>`](angle.md) representing the angle of the rotation.
A positive angle denotes a clockwise rotation, a negative angle a
counter-clockwise one.

![](/images/wiki/kTuFyy99QAAAAASUVORK5CYII%3D)

## Examples

### Rotating on the y-axis

#### HTML

[html]

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

[css]

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### Result

### Rotating on a custom axis

#### HTML

[html]

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

[css]

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### Result

## Specifications

---

Specification

---

[CSS Transforms Module Level 2\
 [\#
funcdef-rotate3d]](https://drafts.csswg.org/css-transforms-2/#funcdef-rotate3d)

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

`rotate3d`

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

## See also

- [`transform`](transform.md) property
- [`rotate`](_Resources/Markup%20And%20Styling/css/rotate.md) property
- [`<transform-function>`](transform-function.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d>
