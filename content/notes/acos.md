acos()
======

The `acos()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
inverse cosine of a number between `-1` and `1`. The function contains a
single calculation that returns the number of radians representing an
[`<angle>`](angle.md) between `0deg` and `180deg`.

Syntax
------

[css]

```css
/* Single <number> values */
transform: rotate(acos(-0.2));
transform: rotate(acos(2 * 0.125));

/* Other values */
transform: rotate(acos(pi / 5));
transform: rotate(acos(e / 3));
```

### Parameter

The `acos(number)` function accepts only one value as its parameter.

[`number`](#number)

:   A calculation which resolves to a [`<number>`](number.md) between `-1`
    and `1`.

### Return value

The inverse cosine of an `number` will always return an
[`<angle>`](angle.md) between `0deg` and `180deg`.

- If `number` is less than `-1` or greater than `1`, the result is
    `NaN`.
- If `number` is exactly `1`, the result is `0`.

### Formal syntax

```
<acos()> = 
  acos( <calc-sum> )  

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

The `acos()` function can be used to
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
  transform: rotate(acos(1));
}
div.box-2 {
  transform: rotate(acos(0.5));
}
div.box-3 {
  transform: rotate(acos(0));
}
div.box-4 {
  transform: rotate(acos(-0.5));
}
div.box-5 {
  transform: rotate(acos(-1));
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

`acos`

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
- [`atan()`](atan.md)
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/acos>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/acos.md)
[dart:math](../dart-math/dart-math-library){._links-link}

acos function
=============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) acos(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns its
arc cosine in radians.

Returns a value in the range 0..PI, or NaN if `x` is outside the range
-1..1.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double acos(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/acos.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/acos.md)
Math.acos()
===========

 
The `Math.acos()` static method returns the inverse cosine (in radians)
of a number. That is,

$$\forall x \in \lbrack{- 1},1\rbrack,\;{\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{a}\mathtt{c}\mathtt{o}\mathtt{s}}(\mathtt{x})} = \arccos(x) = \text{the\ unique}y \in \lbrack 0,\pi\rbrack\text{such\ that}\cos(y) = x$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.acos(x)
```




 
### Parameters

 

[`x`](#x)

:   A number between -1 and 1, inclusive, representing the angle\'s
    cosine value.



 
### Return value 

 
The inverse cosine (angle in radians between 0 and π, inclusive) of `x`.
If `x` is less than -1 or greater than 1, returns [`NaN`](../nan).



 
Description
-----------

 
Because `acos()` is a static method of `Math`, you always use it as
`Math.acos()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.acos() 

 
 
 
[js]


```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.acos]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.acos)

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

`acos`

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

 
-   [`Math.asin()`](asin)
-   [`Math.atan()`](atan)
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos>

