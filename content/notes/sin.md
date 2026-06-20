sin()
=====

The `sin()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
sine of a number, which is a value between `-1` and `1`. The function
contains a single calculation that must resolve to either a
[`<number>`](number.md) or an [`<angle>`](angle.md) by interpreting the result
of the argument as radians. That is, `sin(45deg)`, `sin(0.125turn)`, and
`sin(3.14159 / 4)` all represent the same value, approximately `0.707`.

Syntax
------

[css]

```css
/* Single <angle> values */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Single <number> values */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Other values */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Parameter

The `sin(angle)` function accepts only one value as its parameter.

[`angle`](#angle)

:   A calculation which resolves to a [`<number>`](number.md) or an
    [`<angle>`](angle.md). When specifying unitless numbers they are
    interpreted as a number of radians, representing an
    [`<angle>`](angle.md)

### Return value

The sine of an `angle` will always return a number between `−1` and `1`.

- If `angle` is `infinity`, `-infinity`, or `NaN`, the result is
    `NaN`.
- If `angle` is `0⁻`, the result is `0⁻`.

### Formal syntax

```
<sin()> = 
  sin( <calc-sum> )  

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

### Changing box sizes

In this example, `sin(30deg)` will return `0.5`, making the box have a
`50px` width and a `50px` height.

[css]

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Controlling animation duration

Another use case is to control the
[`animation-duration`](animation-duration.md), reducing the duration based
on the sine value. In this case, the animation duration will be `1s`.

[css]

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

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

`sin`

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

- [`cos()`](cos.md)
- [`tan()`](tan.md)
- [`asin()`](asin.md)
- [`acos()`](acos.md)
- [`atan()`](atan.md)
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/sin>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/sin.md)
[dart:math](../dart-math/dart-math-library){._links-link}

sin function
============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) sin(

1.  [num](../dart-core/num-class) radians

)
:::

Converts `radians` to a [double](../dart-core/double-class) and returns
the sine of the value.

If `radians` is not a finite number, the result is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double sin(num radians);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/sin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/sin.md)
Math.sin()
==========

 
The `Math.sin()` static method returns the sine of a number in radians.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.sin(x)
```




 
### Parameters

 

[`x`](#x)

:   A number representing an angle in radians.



 
### Return value 

 
The sine of `x`, between -1 and 1, inclusive. If `x` is
[`Infinity`](../infinity), `-Infinity`, or [`NaN`](../nan), returns
[`NaN`](../nan).



 
Description
-----------

 
Because `sin()` is a static method of `Math`, you always use it as
`Math.sin()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.sin() 

 
 
 
[js]


```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.sin]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sin)

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

`sin`

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
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin>

