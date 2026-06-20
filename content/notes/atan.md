atan()
======

The `atan()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is a trigonometric function that returns the
inverse tangent of a number between `-∞` and `+∞`. The function contains
a single calculation that returns the number of radians representing an
[`<angle>`](angle.md) between `-90deg` and `90deg`.

Syntax
------

[css]

```css
/* Single <number> values */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* Other values */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### Parameter

The `atan(number)` function accepts only one value as its parameter.

[`number`](#number)

:   A calculation which resolves to a [`<number>`](number.md) between `-∞`
    and `+∞`.

### Return value

The inverse tangent of an `number` will always return an
[`<angle>`](angle.md) between `-90deg` and `90deg`.

- If `number` is `0⁻`, the result is `0⁻`.
- If `number` is `+∞` the result is `90deg`.
- If `number` is `-∞` the result is `-90deg`.

That is:

- `atan(-infinity)` representing `-90deg`.
- `atan(-1)` representing `-45deg`
- `atan(0)` representing `0deg`
- `atan(1)` representing `45deg`
- `atan(infinity)` representing `90deg`.

### Formal syntax

```
<atan()> = 
  atan( <calc-sum> )  

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

The `atan()` function can be used to
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
  transform: rotate(atan(-99999));
}
div.box-2 {
  transform: rotate(atan(-1));
}
div.box-3 {
  transform: rotate(atan(0));
}
div.box-4 {
  transform: rotate(atan(1));
}
div.box-5 {
  transform: rotate(atan(99999));
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

`atan`

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
- [`atan2()`](atan2.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/atan>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/atan.md)
[dart:math](../dart-math/dart-math-library){._links-link}

atan function
=============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) atan(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns its
arc tangent in radians.

Returns a value in the range -PI/2..PI/2, or NaN if `x` is NaN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double atan(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/atan.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/atan.md)
Math.atan()
===========

 
The `Math.atan()` static method returns the inverse tangent (in radians)
of a number, that is

$${\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{a}\mathtt{t}\mathtt{a}\mathtt{n}}(\mathtt{x})} = \arctan(x) = \text{the\ unique}y \in \left\lbrack {- \frac{\pi}{2},\frac{\pi}{2}} \right\rbrack\text{such\ that}\tan(y) = x$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.atan(x)
```




 
### Parameters

 

[`x`](#x)

:   A number.



 
### Return value 

 
The inverse tangent (angle in radians between $- \frac{\pi}{2}$ and
$\frac{\pi}{2}$, inclusive) of `x`. If `x` is [`Infinity`](../infinity),
it returns $\frac{\pi}{2}$. If `x` is `-Infinity`, it returns
$- \frac{\pi}{2}$.



 
Description
-----------

 
Because `atan()` is a static method of `Math`, you always use it as
`Math.atan()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.atan() 

 
 
 
[js]


```js
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)
Math.atan(-0); // -0
Math.atan(0); // 0
Math.atan(1); // 0.7853981633974483  (π/4)
Math.atan(Infinity); // 1.5707963267948966  (π/2)

// The angle that the line (0,0) -- (x,y) forms with the x-axis in a Cartesian coordinate system
const theta = (x, y) => Math.atan(y / x);
```


Note that you may want to avoid the `theta` function and use
[`Math.atan2()`](atan2) instead, which has a wider range (between -π and
π) and avoids outputting `NaN` for cases such as when `x` is `0`.



Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.atan]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan)

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

`atan`

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
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan>

