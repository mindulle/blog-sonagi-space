sign()
======

The `sign()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) contains one calculation, and returns `-1` if
the numeric value of the argument is negative, `+1` if the numeric value
of the argument is positive, `0⁺` if the numeric value of the argument
is 0⁺, and `0⁻` if the numeric value of the argument is 0⁻.

**Note:** While `abs()` returns the absolute value of the argument,
`sign()` returns the sign of the argument.

Syntax
------

[css]

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameters

The `sign(x)` function accepts only one value as its parameter.

[`x`](#x)

:   A calculation which resolves to a number.

### Return value

A number representing the sign of `A`:

- If `x` is positive, returns `1`.
- If `x` is negative, returns `-1`.
- If `x` is positive zero, returns `0`.
- If `x` is negative zero, returns `-0`.
- Otherwise, returns `NaN`.

### Formal syntax

```
<sign()> = 
  sign( <calc-sum> )  

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

### Background image position

For example, in [`background-position`](background-position.md) positive
percentages resolve to a negative length, and vice versa, if the
background image is larger than the background area. Thus `sign(10%)`
might return `1` or `-1`, depending on how the percentage is resolved!
(Or even `0`, if it\'s resolved against a zero length.)

[css]

```css
div {
  background-position: sign(10%);
}
```

### Position direction

Another use case is to control the [`position`](position.md) of the
element. Either a positive or a negative value.

[css]

```css
div {
  position: absolute;
  top: calc(100px * sign(var(--value)));
}
```

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\#
  sign-funcs]](https://drafts.csswg.org/css-values/#sign-funcs)

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

`sign`

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

- [`abs()`](abs.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/sign>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/sign.md)
Math.sign()
===========

 
The `Math.sign()` static method returns 1 or -1, indicating the sign of
the number passed as argument. If the input is 0 or -0, it will be
returned as-is.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.sign(x)
```




 
### Parameters

 

[`x`](#x)

:   A number.



 
### Return value 

 
A number representing the sign of `x`:

-   If `x` is positive, returns `1`.
-   If `x` is negative, returns `-1`.
-   If `x` is positive zero, returns `0`.
-   If `x` is negative zero, returns `-0`.
-   Otherwise, returns [`NaN`](../nan).



 
Description
-----------

 
Because `sign()` is a static method of `Math`, you always use it as
`Math.sign()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.sign() 

 
 
 
[js]


```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.sign]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sign)

  -------------------------------------------------------------------------------------------------


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

`sign`

38

12

25

25

9

38

25

25

9

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [Polyfill of `Math.sign` in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
-   [`Math.abs()`](abs)
-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.round()`](round)
-   [`Math.trunc()`](trunc)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/sign.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

sign property
=============

::: {#getter .section .multi-line-signature}
[num](../num-class) sign
:::

Negative one, zero or positive one depending on the sign and numerical
value of this number.

The value minus one if this number is less than zero, plus one if this
number is greater than zero, and zero if this number is equal to zero.

Returns NaN if this number is a [double](../double-class) NaN value.

Returns a number of the same type as this number. For doubles,
`(-0.0).sign` is `-0.0`.

The result satisfies:

``` {.language-dart data-language="dart"}
n == n.sign * n.abs()
```

for all numbers `n` (except NaN, because NaN isn\'t `==` to itself).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get sign;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/sign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/sign.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

sign property
=============

::: {#getter .section .multi-line-signature}
[double](../double-class) sign

::: {.features}
override
:::
:::

The sign of the double\'s numerical value.

Returns -1.0 if the value is less than zero, +1.0 if the value is
greater than zero, and the value itself if it is -0.0, 0.0 or NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double get sign;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/sign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/sign.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

sign property
=============

::: {#getter .section .multi-line-signature}
[int](../int-class) sign

::: {.features}
override
:::
:::

Returns the sign of this integer.

Returns 0 for zero, -1 for values less than zero and +1 for values
greater than zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get sign;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/sign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/sign.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

sign property
=============

::: {#getter .section .multi-line-signature}
[int](../int-class) sign
:::

Returns the sign of this big integer.

Returns 0 for zero, -1 for values less than zero and +1 for values
greater than zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get sign;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/sign.html>
:::
