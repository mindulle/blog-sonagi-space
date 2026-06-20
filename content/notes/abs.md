abs()
=====

The `abs()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) returns the absolute value of the argument, as
the same type as the input.

Syntax
------

[css]

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameters

The `abs(x)` function accepts only one value as its parameter.

[`x`](#x)

:   A calculation which resolves to a number.

### Return value

The absolute value of `x`.

- if `x`\'s numeric value is positive or `0⁺`, return `x`.
- Otherwise, returns `-1 * x`.

### Formal syntax

```
<abs()> = 
  abs( <calc-sum> )  

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

### Positive variables

The `abs()` function can be used to ensure that a value is always
positive. In the following example a CSS custom property `--font-size`
is used as the value of [`font-size`](font-size.md). Wrapping this custom
property in `abs()` will convert a negative value to a positive one.

[css]

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Control gradient angle of direction

You can also control the gradient direction using `abs()` function. In
the following example, with an angle of -45deg the gradient would start
red and transition to blue. By using `abs()` to make the value positive,
the gradient will start blue and transition to red.

[css]

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Backwards compatible fallback

In older browsers that lack the support for CSS `abs()` function, you
can use the CSS [`max()`](max.md) function to achieve the same result, as
shown below:

[css]

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

We use the [`max()`](max.md) function to return the largest (most positive)
value from a list of two values: `var(--lh)` or `-1 * var(--lh)`.
Irrespective of whether `--lh` is positive or negative, the calculated
return value will always be positive, that is, an absolute number.

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

`abs`

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

- [`sign()`](sign.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/abs>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/abs.md)
Math.abs()
==========

 
The `Math.abs()` static method returns the absolute value of a number.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.abs(x)
```




 
### Parameters

 

[`x`](#x)

:   A number.



 
### Return value 

 
The absolute value of `x`. If `x` is negative (including `-0`), returns
`-x`. Otherwise, returns `x`. The result is therefore always a positive
number or `0`.



 
Description
-----------

 
Because `abs()` is a static method of `Math`, you always use it as
`Math.abs()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).



 
Examples
--------


 
### Using Math.abs() 

 
 
 
[js]


```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```




 
### Coercion of parameter 

 
`Math.abs()` [coerces its parameter to a
number](../number#number_coercion). Non-coercible values will become
`NaN`, making `Math.abs()` also return `NaN`.

 
 
[js]


```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.abs]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.abs)

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

`abs`

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

 
-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.round()`](round)
-   [`Math.sign()`](sign)
-   [`Math.trunc()`](trunc)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/abs.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[double](../double-class) abs()

::: {.features}
override
:::
:::

The absolute value of this number.

The absolute value is the value itself, if the value is non-negative,
and `-value` if the value is negative.

Integer overflow may cause the result of `-value` to stay negative.

``` {.language-dart data-language="dart"}
print((2).abs()); // 2
print((-2.5).abs()); // 2.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/abs.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[num](../num-class) abs()
:::

The absolute value of this number.

The absolute value is the value itself, if the value is non-negative,
and `-value` if the value is negative.

Integer overflow may cause the result of `-value` to stay negative.

``` {.language-dart data-language="dart"}
print((2).abs()); // 2
print((-2.5).abs()); // 2.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/abs.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[Duration](../duration-class) abs()
:::

Creates a new [Duration](../duration-class) representing the absolute
length of this [Duration](../duration-class).

The returned [Duration](../duration-class) has the same length as this
one, but is always positive where possible.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration abs() => Duration._microseconds(_duration.abs());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/abs.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[int](../int-class) abs()

::: {.features}
override
:::
:::

Returns the absolute value of this integer.

For any integer `value`, the result is the same as
`value < 0 ? -value : value`.

Integer overflow may cause the result of `-value` to stay negative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/abs.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) abs()
:::

Returns the lane-wise absolute value of this
[Float32x4](../float32x4-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/abs.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) abs()
:::

Returns the lane-wise absolute value of this
[Float64x2](../float64x2-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/abs.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

abs method
==========

::: {.section .multi-line-signature}
[BigInt](../bigint-class) abs()
:::

Returns the absolute value of this integer.

For any integer `x`, the result is the same as `x < 0 ? -x : x`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt abs();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/abs.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/ABS.md)

# ABS

The `ABS()` function in SQL returns the absolute value of a given numeric expression, meaning it converts any negative number to its positive equivalent while leaving positive numbers unchanged. This function is useful when you need to ensure that the result of a calculation or a value stored in a d
atabase column is non-negative, such as when calculating distances, differences, or other metrics where only positive values make sense. For example, `SELECT ABS(-5)` would return `5`.

Visit the following resources to learn more:

- [@article@How to compute an absolute value in SQL](https://www.airops.com/sql-guide/how-to-compute-an-absolute-value-in-sql)
- [@article@ABS](https://www.w3schools.com/sql/func_sqlserver_abs.asp)

## 관련 로드맵
- [[sql|sql]]
