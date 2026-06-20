tan()
=====

The `tan()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
tangent of a number, which is a value between `−infinity` and
`infinity`. The function contains a single calculation that must resolve
to either a [`<number>`](number.md) or an [`<angle>`](angle.md) by
interpreting the result of the argument as radians.

Syntax
------

[css]

```css
/* Single <angle> values */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* Single <number> values */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 - 1));

/* Other values */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

### Parameter

The `tan(angle)` function accepts only one value as its parameter.

[`angle`](#angle)

:   A calculation which resolves to a [`<number>`](number.md) or an
    [`<angle>`](angle.md). When specifying unitless numbers they are
    interpreted as a number of radians, representing an
    [`<angle>`](angle.md).

### Return value

The tangent of an `angle` will always return a number between `−∞` and
`+∞`.

- If `angle` is `infinity`, `-infinity`, or `NaN`, the result is
    `NaN`.
- If `angle` is `0⁻`, the result is `0⁻`.
- If `angle` is one of the asymptote values (such as `90deg`,
    `270deg`, etc.), the result is *explicitly undefined*. Authors *must
    not* rely on `tan()` returning any particular value for these
    inputs.

### Formal syntax

```
<tan()> = 
  tan( <calc-sum> )  

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

### Drawing parallelograms

The `tan()` function can be used to draw a parallelogram with a given
bounding box.

#### HTML

[html]

```html
<div class="parallelogram"></div>
```

#### CSS

[css]

```css
.parallelogram {
  --w: 400;
  --h: 200;
  --angle: 30deg;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skewX(calc(0deg - var(--angle)));
  background-color: red;
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

`tan`

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
- [`asin()`](asin.md)
- [`acos()`](acos.md)
- [`atan()`](atan.md)
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/tan>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/tan.md)
[dart:math](../dart-math/dart-math-library){._links-link}

tan function
============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) tan(

1.  [num](../dart-core/num-class) radians

)
:::

Converts `radians` to a [double](../dart-core/double-class) and returns
the tangent of the value.

The tangent function is equivalent to `sin(radians)/cos(radians)` and
may be infinite (positive or negative) when `cos(radians)` is equal to
zero. If `radians` is not a finite number, the result is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double tan(num radians);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/tan.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/tan.md)
Math.tan()
==========

 
The `Math.tan()` static method returns the tangent of a number in
radians.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.tan(x)
```




 
### Parameters

 

[`x`](#x)

:   A number representing an angle in radians.



 
### Return value 

 
The tangent of `x`. If `x` is [`Infinity`](../infinity), `-Infinity`, or
[`NaN`](../nan), returns [`NaN`](../nan).

 
**Note:** Due to floating point precision, it\'s not possible to obtain
the exact value π/2, so the result is always finite if not `NaN`.




 
Description
-----------

 
Because `tan()` is a static method of `Math`, you always use it as
`Math.tan()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.tan() 

 
 
 
[js]


```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Floating point error)
Math.tan(Infinity); // NaN
```




 
### Math.tan() and π/2 

 
It\'s not possible to calculate `tan(π/2)` exactly.

 
 
[js]


```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```




 
### Using Math.tan() with a degree value 

 
Because the `Math.tan()` function accepts radians, but it is often
easier to work with degrees, the following function accepts a value in
degrees, converts it to radians and returns the tangent.

 
 
[js]


```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.tan]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.tan)

  -----------------------------------------------------------------------------------------------


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

`tan`

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
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan>

