exp()
=====

The `exp()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is an exponential function that takes an
number as an argument and returns the mathematical constant `e` raised
to the power of the given number.

The mathematical constant
[e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) is the base
of natural logarithms, and is approximately `2.718281828459045`.

The `exp(number)` function contains a calculation which returns the same
value as [`pow(e, number)`](pow.md).

Syntax
------

[css]

```css
/* A <number> value */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### Parameter

The `exp(number)` function accepts only one value as its parameter.

[`number`](#number)

:   A calculation which resolves to a [`<number>`](number.md). Representing
    the value to be raised by a power of `e`.

### Return value

Returns a non-negative [`<number>`](number.md) representing e^number^,
which is the result of calculating `e` raised to the power of `number`.

- If `number` is `-Infinity`, the result is `0`.
- If `number` is `0`, the result is `1`.
- If `number` is `1`, the result is `e` (i.e. `2.718281828459045`).
- If `number` is `Infinity`, the result is `Infinity`.

### Formal syntax

```
<exp()> = 
  exp( <calc-sum> )  

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

The `exp()` function can be used to
[`rotate`](_Resources/Markup%20And%20Styling/css/transform-function/rotate.md) elements as it return a
[`<number>`](number.md).

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
  transform: rotate(calc(1turn * exp(-1))); // 0.3678794411714423turn
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); // 0.4723665527410147turn
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); // 0.6065306597126334turn
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); // 0.7788007830714049turn
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); // 1turn
}
```

#### Result

### Scale headings by fixed ratio

The `exp()` function can be useful for strategies like CSS modular
scale, which relates all the font-sizes on a page to each other by a
fixed ratio.

#### HTML

[html]

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

[css]

```css
h1 {
  font-size: calc(1rem * exp(1.25)); // 3.4903429574618414rem
}
h2 {
  font-size: calc(1rem * exp(1)); // 2.718281828459045rem
}
h3 {
  font-size: calc(1rem * exp(0.75)); // 2.117000016612675rem
}
h4 {
  font-size: calc(1rem * exp(0.5)); // 1.6487212707001282rem
}
h5 {
  font-size: calc(1rem * exp(0.25)); // 1.2840254166877414rem
}
h6 {
  font-size: calc(1rem * exp(0)); // 1rem
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

`exp`

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
- [`hypot()`](hypot.md)
- [`log()`](log.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/exp>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/exp.md)
[dart:math](../dart-math/dart-math-library){._links-link}

exp function
============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) exp(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns the
natural exponent, [e](e-constant), to the power `x`.

Returns NaN if `x` is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double exp(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/exp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/exp.md)
Math.exp()
==========

 
The `Math.exp()` static method returns [e](e) raised to the power of a
number. That is

$${\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{e}\mathtt{x}\mathtt{p}}(\mathtt{x})} = e^{x}$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.exp(x)
```




 
### Parameters

 

[`x`](#x)

:   A number.



 
### Return value 

 
A nonnegative number representing e^x^, where e is [the base of the
natural logarithm](e).



 
Description
-----------

 
Because `exp()` is a static method of `Math`, you always use it as
`Math.exp()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).

Beware that `e` to the power of a number very close to 0 will be very
close to 1 and suffer from loss of precision. In this case, you may want
to use [`Math.expm1`](expm1) instead, and obtain a much higher-precision
fractional part of the answer.



 
Examples
--------


 
### Using Math.exp() 

 
 
 
[js]


```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.exp]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.exp)

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

`exp`

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

 
-   [`Math.E`](e)
-   [`Math.expm1()`](expm1)
-   [`Math.log()`](log)
-   [`Math.log10()`](log10)
-   [`Math.log1p()`](log1p)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp>

