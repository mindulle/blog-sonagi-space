asin()
======

The `asin()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
inverse sine of a number between `-1` and `1`. The function contains a
single calculation that returns the number of radians representing an
[`<angle>`](angle.md) between `-90deg` and `90deg`.

Syntax
------

[css]

```css
/* Single <number> values */
transform: rotate(asin(-0.2));
transform: rotate(asin(2 * 0.125));

/* Other values */
transform: rotate(asin(pi / 5));
transform: rotate(asin(e / 3));
```

### Parameter

The `asin(number)` function accepts only one value as its parameter.

[`number`](#number)

:   A calculation which resolves to a [`<number>`](number.md) between `-1`
    and `1`.

### Return value

The inverse sine of an `number` will always return an [`<angle>`](angle.md)
between `-90deg` and `90deg`.

- If `number` is less than `-1` or greater than `1`, the result is
    `NaN`.
- If `number` is `0⁻`, the result is `0⁻`.

### Formal syntax

```
<asin()> = 
  asin( <calc-sum> )  

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

The `asin()` function can be used to
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
  transform: rotate(asin(1));
}
div.box-2 {
  transform: rotate(asin(0.5));
}
div.box-3 {
  transform: rotate(asin(0));
}
div.box-4 {
  transform: rotate(asin(-0.5));
}
div.box-5 {
  transform: rotate(asin(-1));
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

`asin`

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
- [`acos()`](acos.md)
- [`atan()`](atan.md)
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/asin>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/asin.md)
[dart:math](../dart-math/dart-math-library){._links-link}

asin function
=============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) asin(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns its
arc sine in radians.

Returns a value in the range -PI/2..PI/2, or NaN if `x` is outside the
range -1..1.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double asin(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/asin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/asin.md)
Math.asin()
===========

 
The `Math.asin()` static method returns the inverse sine (in radians) of
a number. That is,

$$\forall x \in \lbrack{- 1},1\rbrack,\;{\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{a}\mathtt{s}\mathtt{i}\mathtt{n}}(\mathtt{x})} = \arcsin(x) = \text{the\ unique}y \in \left\lbrack {- \frac{\pi}{2},\frac{\pi}{2}} \right\rbrack\text{such\ that}\sin(y) = x$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.asin(x)
```




 
### Parameters

 

[`x`](#x)

:   A number between -1 and 1, inclusive, representing the angle\'s sine
    value.



 
### Return value 

 
The inverse sine (angle in radians between $- \frac{\pi}{2}$ and
$\frac{\pi}{2}$, inclusive) of `x`. If `x` is less than -1 or greater
than 1, returns [`NaN`](../nan).



 
Description
-----------

 
Because `asin()` is a static method of `Math`, you always use it as
`Math.asin()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.asin() 

 
 
 
[js]


```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-π/2)
Math.asin(-0); // -0
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989 (π/6)
Math.asin(1); // 1.5707963267948966 (π/2)
Math.asin(2); // NaN
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.asin]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.asin)

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

`asin`

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
-   [`Math.atan()`](atan)
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin>

