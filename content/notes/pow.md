pow()
=====

The `pow()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is an exponential function that returns the
value of a base raised to the power of a number.

The [`exp()`](exp.md) function is a special case of `pow()` where the value
of the base is the mathematical constant
[e](https://en.wikipedia.org/wiki/E_(mathematical_constant)).

Syntax
------

[css]

```css
/* A <number> value */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### Parameters

The `pow(base, number)` function accepts two comma-separated values as
its parameters.

[`base`](#base)

:   A calculation that resolves to a [`<number>`](number.md), representing
    the base.

[`number`](#number)

:   A calculation that resolves to a [`<number>`](number.md), representing
    the exponent.

### Return value

Returns a [`<number>`](number.md) representing base^number^, that is,
`base` raised to the power of `number`.

Formal syntax
-------------

```
<pow()> = 
  pow( <calc-sum> , <calc-sum> )  

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

### Scale headings by fixed ratio

The `pow()` function can be useful for strategies like CSS Modular
Scale, which relates all the font-sizes on a page to each other by a
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
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
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

`pow`

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

- [`sqrt()`](sqrt.md)
- [`hypot()`](hypot.md)
- [`exp()`](exp.md)
- [`log()`](log.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/pow>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/pow.md)
[dart:math](../dart-math/dart-math-library){._links-link}

pow function
============

::: {.section .multi-line-signature}
[num](../dart-core/num-class) pow(

1.  [num](../dart-core/num-class) x,
2.  [num](../dart-core/num-class) exponent

)
:::

Returns `x` to the power of `exponent`.

If `x` is an [int](../dart-core/int-class) and `exponent` is a
non-negative [int](../dart-core/int-class), the result is an
[int](../dart-core/int-class), otherwise both arguments are converted to
doubles first, and the result is a [double](../dart-core/double-class).

For integers, the power is always equal to the mathematical result of
`x` to the power `exponent`, only limited by the available memory.

For doubles, `pow(x, y)` handles edge cases as follows:

-   if `y` is zero (0.0 or -0.0), the result is always 1.0.
-   if `x` is 1.0, the result is always 1.0.
-   otherwise, if either `x` or `y` is NaN, then the result is NaN.
-   if `x` is negative (but not -0.0) and `y` is a finite non-integer,
    the result is NaN.
-   if `x` is Infinity and `y` is negative, the result is 0.0.
-   if `x` is Infinity and `y` is positive, the result is Infinity.
-   if `x` is 0.0 and `y` is negative, the result is Infinity.
-   if `x` is 0.0 and `y` is positive, the result is 0.0.
-   if `x` is -Infinity or -0.0 and `y` is an odd integer, then the
    result is `-pow(-x ,y)`.
-   if `x` is -Infinity or -0.0 and `y` is not an odd integer, then the
    result is the same as `pow(-x , y)`.
-   if `y` is Infinity and the absolute value of `x` is less than 1, the
    result is 0.0.
-   if `y` is Infinity and `x` is -1, the result is 1.0.
-   if `y` is Infinity and the absolute value of `x` is greater than 1,
    the result is Infinity.
-   if `y` is -Infinity, the result is `1/pow(x, Infinity)`.

This corresponds to the `pow` function defined in the IEEE Standard
754-2008.

Notice that the result may overflow. If integers are represented as
64-bit numbers, an integer result may be truncated, and a double result
may overflow to positive or negative
[double.infinity](../dart-core/double/infinity-constant).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external num pow(num x, num exponent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/pow.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/pow.md)
Math.pow()
==========

 
The `Math.pow()` static method returns the value of a base raised to a
power. That is

$${\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{p}\mathtt{o}\mathtt{w}}(\mathtt{x},\mathtt{y})} = x^{y}$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.pow(base, exponent)
```




 
### Parameters

 

[`base`](#base)

:   The base number.

[`exponent`](#exponent)

:   The exponent number.



 
### Return value 

 
A number representing `base` taken to the power of `exponent`. Returns
[`NaN`](../nan) in one of the following cases:

-   `exponent` is `NaN`.
-   `base` is `NaN` and `exponent` is not `0`.
-   `base` is ±1 and `exponent` is ±`Infinity`.
-   `base < 0` and `exponent` is not an integer.



 
Description
-----------

 
`Math.pow()` is equivalent to the [`**`](../../operators/exponentiation)
operator, except `Math.pow()` only accepts numbers.

`Math.pow(NaN, 0)` (and the equivalent `NaN ** 0`) is the only case
where [`NaN`](../nan) doesn\'t propagate through mathematical operations
--- it returns `1` despite the operand being `NaN`. In addition, the
behavior where `base` is 1 and `exponent` is non-finite (±Infinity or
`NaN`) is different from IEEE 754, which specifies that the result
should be 1, whereas JavaScript returns `NaN` to preserve backward
compatibility with its original behavior.

Because `pow()` is a static method of `Math`, use it as `Math.pow()`,
rather than as a method of a `Math` object you created (`Math` is not a
constructor).



 
Examples
--------


 
### Using Math.pow() 

 
 
 
[js]


```js
// Simple cases
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Fractional exponents
Math.pow(4, 0.5); // 2 (square root of 4)
Math.pow(8, 1 / 3); // 2 (cube root of 8)
Math.pow(2, 0.5); // 1.4142135623730951 (square root of 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (cube root of 2)

// Signed exponents
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signed bases
Math.pow(-7, 2); // 49 (squares are positive)
Math.pow(-7, 3); // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

// Zero and infinity
Math.pow(0, 0); // 1 (anything ** ±0 is 1)
Math.pow(Infinity, 0.1); // Infinity (positive exponent)
Math.pow(Infinity, -1); // 0 (negative exponent)
Math.pow(-Infinity, 1); // -Infinity (positive odd integer exponent)
Math.pow(-Infinity, 1.5); // Infinity (positive exponent)
Math.pow(-Infinity, -1); // -0 (negative odd integer exponent)
Math.pow(-Infinity, -1.5); // 0 (negative exponent)
Math.pow(0, 1); // 0 (positive exponent)
Math.pow(0, -1); // Infinity (negative exponent)
Math.pow(-0, 1); // -0 (positive odd integer exponent)
Math.pow(-0, 1.5); // 0 (positive exponent)
Math.pow(-0, -1); // -Infinity (negative odd integer exponent)
Math.pow(-0, -1.5); // Infinity (negative exponent)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: only Math.pow(NaN, 0) does not result in NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.pow]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.pow)

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

`pow`

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

 
-   [`Math.cbrt()`](cbrt)
-   [`Math.exp()`](exp)
-   [`Math.log()`](log)
-   [`Math.sqrt()`](sqrt)
-   [Exponentiation (`**`)](../../operators/exponentiation)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/pow.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

pow method
==========

::: {.section .multi-line-signature}
[BigInt](../bigint-class) pow(

1.  [int](../int-class) exponent

)
:::

Returns `this` to the power of `exponent`.

Returns [one](one) if the `exponent` equals 0.

The `exponent` must otherwise be positive.

The result is always equal to the mathematical result of this to the
power `exponent`, only limited by the available memory.

Example:

``` {.language-dart data-language="dart"}
var value = BigInt.from(1000);
print(value.pow(0)); // 1
print(value.pow(1)); // 1000
print(value.pow(2)); // 1000000
print(value.pow(3)); // 1000000000
print(value.pow(4)); // 1000000000000
print(value.pow(5)); // 1000000000000000
print(value.pow(6)); // 1000000000000000000
print(value.pow(7)); // 1000000000000000000000
print(value.pow(8)); // 1000000000000000000000000
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt pow(int exponent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/pow.html>
:::
