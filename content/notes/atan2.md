atan2()
=======

The `atan2()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
inverse tangent of two values between `-infinity` and `infinity`. The
function accepts two arguments and returns the number of radians
representing an [`<angle>`](angle.md) between `-180deg` and `180deg`.

Syntax
------

[css]

```css
/* Two <number> values */
transform: rotate(atan2(3, 2));

/* Two <dimension> values */
transform: rotate(atan2(1rem, -0.5rem));

/* Two <percentage> values */
transform: rotate(atan2(20%, -30%));

/* Other values */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Parameters

The `atan2(y, x)` function accepts two comma-separated values as its
parameters. Each value can be a [`<number>`](number.md), a
[`<dimension>`](dimension.md), or a [`<percentage>`](percentage.md). Both
values must be of the same type, although if they are
[`<dimension>`](dimension.md) they can be of different units (example:
`atan2(100px, 5vw)` is valid).

[`y`](#y)

:   The y-coordinate of the point. A calculation which resolves to a
    [`<number>`](number.md), a [`<dimension>`](dimension.md), or a
    [`<percentage>`](percentage.md).

[`x`](#x)

:   The x-coordinate of the point. A calculation which resolves to a
    [`<number>`](number.md), a [`<dimension>`](dimension.md), or a
    [`<percentage>`](percentage.md).

### Return value

Given two values `x` and `y`, the function `atan2(y, x)` calculates and
returns the [`<angle>`](angle.md) between the positive x-axis and the ray
from the origin to the point `(x, y)`.

### Formal syntax

```
<atan2()> = 
  atan2( <calc-sum> , <calc-sum> )  

<calc-sum> = 
  <calc-product> [ [ '+' | '-' ] <calc-product> ]*  

<calc-product> = 
  <calc-value> [ [ '*' | '/' ] <calc-value> ]*  

<calc-value> = 
  <number>         |
  <dimension>      |
  <percentage>     |
  <calc-constant>  |
  ( <calc-sum> )   

<calc-constant> = 
  e          |
  pi         |
  infinity   |
  -infinity  |
  NaN        
```

Examples
--------

### Rotate elements

The `atan2()` function can be used to
[`rotate`](_Resources/Markup%20And%20Styling/css/transform-function/rotate.md) elements as it return an
[`<angle>`](angle.md).

#### HTML

[html]

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

[css]

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\#
  trig-funcs]](https://drafts.csswg.org/css-values/#trig-funcs)

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

`atan2`

111

111

108

No

97

15.4

111

111

108

No

15.4

22.0

See also
--------

- [`sin()`](sin.md)
- [`cos()`](cos.md)
- [`tan()`](tan.md)
- [`asin()`](asin.md)
- [`acos()`](acos.md)
- [`atan()`](atan.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/atan2>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/atan2.md)
[dart:math](../dart-math/dart-math-library){._links-link}

atan2 function
==============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) atan2(

1.  [num](../dart-core/num-class) a,
2.  [num](../dart-core/num-class) b

)
:::

A variant of [atan](atan).

Converts both arguments to [double](../dart-core/double-class)s.

Returns the angle in radians between the positive x-axis and the vector
(`b`,`a`). The result is in the range -PI..PI.

If `b` is positive, this is the same as `atan(a/b)`.

The result is negative when `a` is negative (including when `a` is the
double -0.0).

If `a` is equal to zero, the vector (`b`,`a`) is considered parallel to
the x-axis, even if `b` is also equal to zero. The sign of `b`
determines the direction of the vector along the x-axis.

Returns NaN if either argument is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double atan2(num a, num b);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/atan2.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/atan2.md)
Math.atan2()
============

 
The `Math.atan2()` static method returns the angle in the plane (in
radians) between the positive x-axis and the ray from (0, 0) to the
point (x, y), for `Math.atan2(y, x)`.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.atan2(y, x)
```




 
### Parameters

 

[`y`](#y)

:   The y coordinate of the point.

[`x`](#x)

:   The x coordinate of the point.



 
### Return value 

 
The angle in radians (between -π and π, inclusive) between the positive
x-axis and the ray from (0, 0) to the point (x, y).



 
Description
-----------

 
The `Math.atan2()` method measures the counterclockwise angle θ, in
radians, between the positive x-axis and the point `(x, y)`. Note that
the arguments to this function pass the y-coordinate first and the
x-coordinate second.



`Math.atan2()` is passed separate `x` and `y` arguments, while
[`Math.atan()`](atan) is passed the ratio of those two arguments.
`Math.atan2(y, x)` differs from `Math.atan(y / x)` in the following
cases:

 
  `x`                     `y`           `Math.atan2(y, x)`   `Math.atan(y / x)`
  ----------------------- ------------- -------------------- --------------------
  `Infinity`              `Infinity`    π / 4                `NaN`
  `Infinity`              `-Infinity`   -π / 4               `NaN`
  `-Infinity`             `Infinity`    3π / 4               `NaN`
  `-Infinity`             `-Infinity`   -3π / 4              `NaN`
  0                       0             0                    `NaN`
  0                       -0            -0                   `NaN`
  \< 0 (including `-0`)   0             π                    0
  \< 0 (including `-0`)   -0            -π                   0
  `-Infinity`             \> 0          π                    -0
  -0                      \> 0          π / 2                -π / 2
  `-Infinity`             \< 0          -π                   0
  -0                      \< 0          -π / 2               π / 2


In addition, for points in the second and third quadrants (`x < 0`),
`Math.atan2()` would output an angle less than $- \frac{\pi}{2}$ or
greater than $\frac{\pi}{2}$.

Because `atan2()` is a static method of `Math`, you always use it as
`Math.atan2()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.atan2() 

 
 
 
[js]


```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```




 
### Difference between Math.atan2(y, x) and Math.atan(y / x) 

 
The following script prints all inputs that produce a difference between
`Math.atan2(y, x)` and `Math.atan(y / x)`.

 
 
[js]


```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : formattedNumbers.get(num) ?? String(num)
      ).padEnd(5),
    ),
  );
}

| console.log(` | x   | y   | atan2 | atan |
| ------------- | --- | --- | ----- |`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```


The output is:

```text
| x   | y   | atan2 | atan |
| --- | --- | ----- | ---- |
| -∞  | -∞  | -3π/4 | NaN  |
| -∞  | -1  | -π    | 0    |
| -∞  | -0  | -π    | 0    |
| -∞  | 0   | π     | -0   |
| -∞  | 1   | π     | -0   |
| -∞  | ∞   | 3π/4  | NaN  |
| -1  | -∞  | -π/2  | π/2  |
| -1  | -1  | -3π/4 | π/4  |
| -1  | -0  | -π    | 0    |
| -1  | 0   | π     | -0   |
| -1  | 1   | 3π/4  | -π/4 |
| -1  | ∞   | π/2   | -π/2 |
| -0  | -∞  | -π/2  | π/2  |
| -0  | -1  | -π/2  | π/2  |
| -0  | -0  | -π    | NaN  |
| -0  | 0   | π     | NaN  |
| -0  | 1   | π/2   | -π/2 |
| -0  | ∞   | π/2   | -π/2 |
| 0   | -0  | -0    | NaN  |
| 0   | 0   | 0     | NaN  |
| ∞   | -∞  | -π/4  | NaN  |
| ∞   | ∞   | π/4   | NaN  |
```



Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.atan2]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan2)

  ---------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`atan2`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

 
See also 
--------

 
-   [`Math.acos()`](acos)
-   [`Math.asin()`](asin)
-   [`Math.atan()`](atan)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2>

