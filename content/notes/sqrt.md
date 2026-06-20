sqrt()
======

The `sqrt()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is an exponential function that returns the
[square root](https://en.wikipedia.org/wiki/Square_root) of a number.

The function `pow(x, 0.5)` is equivalent to `sqrt(x)`.

Syntax
------

[css]

```css
/* A <number> value */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### Parameters

The `sqrt(x)` function accepts only one value as its parameter.

[`x`](#x)

:   A calculation which resolves to a [`<number>`](number.md) greater than
    or equal to 0.

### Return value

Returns a [`<number>`](number.md) which is the square root of `x`.

- if `x` is `+∞`, the result is `+∞`.
- If `x` is `0⁻`, the result is `0⁻`.
- If `x` is less than `0`, the result is `NaN`.

### Formal syntax

```
<sqrt()> = 
  sqrt( <calc-sum> )  

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

### Scale sizes based on square root

This example shows how you can use the `sqrt()` function to calculate
sizes.

#### HTML

[html]

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](using_css_custom_properties.md)
to define the sizes to be used. First, we declare the first size
(`--size-0`), which is then used to calculate the other sizes.

- `--size-1` is calculated by multiplying the value of `--size-0`
    (50px) by the square root of 4 (2), which results in 100px.
- `--size-2` is calculated by multiplying the value of `--size-0`
    (50px) by the square root of 9 (3), which results in 150px.
- `--size-3` is calculated by multiplying the value of `--size-0`
    (50px) by the square root of 16 (4), which results in 200px.

[css]

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /*  100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /*  150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /*  200px */
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

`sqrt`

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
- [`hypot()`](hypot.md)
- [`log()`](log.md)
- [`exp()`](exp.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/sqrt>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/sqrt.md)
[dart:math](../dart-math/dart-math-library){._links-link}

sqrt function
=============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) sqrt(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns the
positive square root of the value.

Returns -0.0 if `x` is -0.0, and NaN if `x` is otherwise negative or
NaN.

``` {.language-dart data-language="dart"}
var result = sqrt(9.3);
print(result); // 3.0495901363953815
result = sqrt(2);
print(result); // 1.4142135623730951
result = sqrt(0);
print(result); // 0.0
result = sqrt(-2.2);
print(result); // NaN
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double sqrt(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/sqrt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/sqrt.md)
Math.sqrt()
===========

 
The `Math.sqrt()` static method returns the square root of a number.
That is

$$\forall x \geq 0,\;{\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{s}\mathtt{q}\mathtt{r}\mathtt{t}}(\mathtt{x})} = \sqrt{x} = \text{the\ unique}y \geq 0\text{such\ that}y^{2} = x$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.sqrt(x)
```




 
### Parameters

 

[`x`](#x)

:   A number greater than or equal to 0.



 
### Return value 

 
The square root of `x`, a nonnegative number. If `x < 0`, returns
[`NaN`](../nan).



 
Description
-----------

 
Because `sqrt()` is a static method of `Math`, you always use it as
`Math.sqrt()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.sqrt() 

 
 
 
[js]


```js
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
Math.sqrt(Infinity); // Infinity
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.sqrt]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sqrt)

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

`sqrt`

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
-   [`Math.pow()`](pow)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/sqrt.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sqrt method
===========

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) sqrt()
:::

Returns the lane-wise square root of [this](../float64x2-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 sqrt();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/sqrt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/sqrt.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

sqrt method
===========

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) sqrt()
:::

Returns the square root of [this](../float32x4-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 sqrt();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/sqrt.html>
:::
