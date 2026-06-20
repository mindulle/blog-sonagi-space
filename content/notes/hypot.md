hypot()
=======

The `hypot()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is an exponential function that returns the
[square root](https://en.wikipedia.org/wiki/Square_root) of the sum of
squares of its parameters.

While [`pow()`](pow.md) and [`sqrt()`](sqrt.md) only work on unitless numbers,
`hypot()` accepts values with units, but they all must have the same
[type](css_types.md).

Syntax
------

[css]

```css
/* A <number> value */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### Parameters

The `hypot(x [, ...]#)` function accepts one or more comma-separated
calculations as its parameters.

[`x`](#x), `x2`, \..., `xN`

:   A calculation that resolves to a [`<number>`](number.md),
    [`<dimension>`](dimension.md), or [`<percentage>`](percentage.md).

### Return value

Returns a [`<number>`](number.md), [`<dimension>`](dimension.md), or
[`<percentage>`](percentage.md) (based on the inputs), which is the square
root of the sum of squares of its parameters.

- If any of the inputs is `infinite`, the result is `+∞`.
- If a single parameter is provided, the result is the absolute value
    of its input. `hypot(2em)` and `hypot(-2em)` both resolve to `2em`.

### Formal syntax

```
<hypot()> = 
  hypot( <calc-sum># )  

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

### Sizes based on hypot function

This example shows how you can use the `hypot()` function to calculate
sizes.

#### HTML

[html]

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](using_css_custom_properties.md)
to define the sizes to be used. First we declare the first size
(`--size-0`) which is then used to calculate the other sizes.

- `--size-1` is calculated with the hypotenuse of `--size-0` (100px).
    This takes the square value and, as there is no other value, returns
    the square root of the value, which results in 100px.
- `--size-2` is calculated with the hypotenuse of `--size-0` (100px),
    twice. This takes the square of the value (100px \* 100px =
    10000px^2^) and adds it to the square of `--size-0` again
    (10000px^2^ + 10000px^2^ = 20000px^2^) and returns the square root
    of the sum (√(20000px^2^)), which results in 141.42px.
- `--size-3` is calculated with the hypotenuse `--size-0` \* 1.5
    (150px) and `--size-0` \* 2 (200px). The result is the square root
    of the sum of their squares: The values are squared (22500px^2^ and
    40000px^2^) and added together (62500px^2^), with the sum
    square-rooted (√(62500px^2^)) being 250px.

[css]

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
}
```

The sizes are then applied as the `width` and `height` values of the
selectors.

[css]

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Result

Specifications
--------------

  -------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\#
  exponent-funcs]](https://drafts.csswg.org/css-values/#exponent-funcs)

  -------------------------------------------------------------------------------

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

`hypot`

No

No

118

No

No

15.4

No

No

118

No

15.4

No

See also
--------

- [`pow()`](pow.md)
- [`sqrt()`](sqrt.md)
- [`log()`](log.md)
- [`exp()`](exp.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/hypot>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/hypot.md)
Math.hypot()
============

 
The `Math.hypot()` static method returns the square root of the sum of
squares of its arguments. That is,

$$\mathtt{\operatorname{Math.hypot}(v_{1},v_{2},\ldots,v_{n})} = \sqrt{\sum\limits_{i = 1}^{n}v_{i}^{2}} = \sqrt{v_{1}^{2} + v_{2}^{2} + \ldots + v_{n}^{2}}$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```




 
### Parameters

 

[`value1`](#value1), ..., `valueN`

:   Numbers.



 
### Return value 

 
The square root of the sum of squares of the given arguments. Returns
[`Infinity`](../infinity) if any of the arguments is ±Infinity.
Otherwise, if at least one of the arguments is or is converted to
[`NaN`](../nan), returns [`NaN`](../nan). Returns `0` if no arguments
are given or all arguments are ±0.



 
Description
-----------

 
Calculating the hypotenuse of a right triangle, or the magnitude of a
complex number, uses the formula `Math.sqrt(v1*v1 + v2*v2)`, where v1
and v2 are the lengths of the triangle\'s legs, or the complex number\'s
real and complex components. The corresponding distance in 2 or more
dimensions can be calculated by adding more squares under the square
root: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

This function makes this calculation easier and faster; you call
`Math.hypot(v1, v2)`, or `Math.hypot(v1, /* …, */, vN)`.

`Math.hypot` also avoids overflow/underflow problems if the magnitude of
your numbers is very large. The largest number you can represent in JS
is [`Number.MAX_VALUE`](../number/max_value), which is around 10^308^.
If your numbers are larger than about 10^154^, taking the square of them
will result in Infinity. For example,
`Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. If you use `hypot()`
instead, you get a better answer:
`Math.hypot(1e200, 1e200) = 1.4142...e+200` . This is also true with
very small numbers. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, but
`Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

With one argument, `Math.hypot()` is equivalent to [`Math.abs()`](abs).
[`Math.hypot.length`](../function/length) is 2, which weakly signals
that it\'s designed to handle at least two parameters.

Because `hypot()` is a static method of `Math`, you always use it as
`Math.hypot()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.hypot() 

 
 
 
[js]


```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.hypot]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.hypot)

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

`hypot`

38

12

27

25

8

38

27

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [Polyfill of `Math.hypot` in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
-   [`Math.abs()`](abs)
-   [`Math.pow()`](pow)
-   [`Math.sqrt()`](sqrt)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot>

