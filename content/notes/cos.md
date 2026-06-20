cos()
=====

The `cos()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
cosine of a number, which is a value between `-1` and `1`. The function
contains a single calculation that must resolve to either a
[`<number>`](number.md) or an [`<angle>`](angle.md) by interpreting the result
of the argument as radians. That is, `cos(45deg)`, `cos(0.125turn)`, and
`cos(3.14159 / 4)` all represent the same value, approximately `0.707`.

Syntax
------

[css]

```css
/* Single <angle> values */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Single <number> values */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Other values */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### Parameter

The `cos(angle)` function accepts only one value as its parameter.

[`angle`](#angle)

:   A calculation which resolves to a [`<number>`](number.md) or an
    [`<angle>`](angle.md). When specifying unitless numbers they are
    interpreted as a number of radians, representing an
    [`<angle>`](angle.md).

### Return value

The cosine of an `angle` will always return a number between `−1` and
`1`.

- If `angle` is `infinity`, `-infinity`, or `NaN`, the result is
    `NaN`.

### Formal syntax

```
<cos()> = 
  cos( <calc-sum> )  

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

### Keep the size of a rotated box

The `cos()` function can be used to keep the size of a rotated box.

When the element is rotated using
[`rotate()`](_Resources/Markup%20And%20Styling/css/transform-function/rotate.md), it goes beyond its initial
size. To fix this, we will use `cos()` to update the element size.

For example, if you rotate a `100px`/`100px` square `45deg`, the diamond
it creates will be wider and taller than the original square. To shrink
the diamond into the box allotted for the original square, you would
have to scale down the diamond using this formula:
`width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. You need
to also adjust the [`transform-origin`](transform-origin.md) and add
[`translate()`](_Resources/Markup%20And%20Styling/css/transform-function/translate.md) to correct the position:

#### HTML

[html]

```html
<div class="original-square"></div>
<div class="rotated-diamond"></div>
<div class="rotated-scaled-diamond"></div>
```

#### CSS

[css]

```css
div.original-square {
  width: 100px;
  height: 100px;
  background-color: blue;
}
div.rotated-diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}
div.rotated-scaled-diamond {
  width: calc(100px * cos(45deg));
  height: calc(100px * cos(45deg));
  margin: calc(100px / 4 * cos(45deg));
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
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

`cos`

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
- [`tan()`](tan.md)
- [`asin()`](asin.md)
- [`acos()`](acos.md)
- [`atan()`](atan.md)
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/cos>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/cos.md)
[dart:math](../dart-math/dart-math-library){._links-link}

cos function
============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) cos(

1.  [num](../dart-core/num-class) radians

)
:::

Converts `radians` to a [double](../dart-core/double-class) and returns
the cosine of the value.

If `radians` is not a finite number, the result is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double cos(num radians);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/cos.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/cos.md)
Math.cos()
==========

 
The `Math.cos()` static method returns the cosine of a number in
radians.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.cos(x)
```




 
### Parameters

 

[`x`](#x)

:   A number representing an angle in radians.



 
### Return value 

 
The cosine of `x`, between -1 and 1, inclusive. If `x` is
[`Infinity`](../infinity), `-Infinity`, or [`NaN`](../nan), returns
[`NaN`](../nan).



 
Description
-----------

 
Because `cos()` is a static method of `Math`, you always use it as
`Math.cos()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.cos() 

 
 
 
[js]


```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.cos]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.cos)

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

`cos`

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
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos>

