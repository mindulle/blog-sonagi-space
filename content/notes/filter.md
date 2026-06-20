filter
======

The `filter` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property applies graphical effects like blur or color shift to an
element. Filters are commonly used to adjust the rendering of images,
backgrounds, and borders.

Several [functions](#functions), such as `blur()` and `contrast()`, are
available to help you achieve predefined effects.

Try it
------

Syntax
------

[css]

```css
/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* Multiple filters */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

With a function, use the following:

[css]

```css
filter: <filter-function> [<filter-function>]* | none;
```

You can use `url()` to reference an [SVG filter
element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter).
For a reference to an SVG
[`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
element, use the following syntax:

[css]

```css
filter: url(file.svg#filter-element-id);
```

Functions
---------

The `filter` property is specified as `none` or one or more of the
functions listed below. If the parameter for any function is invalid,
the function returns `none`. Except where noted, the functions that take
a value expressed with a percent sign (as in `34%`) also accept the
value expressed as decimal (as in `0.34`).

When the `filter` property values contains multiple functions, the
filters are applied in order.

[`blur()`](blur.md)

:   Applies a Gaussian blur to the input image.

    [css]

    ```css
    filter: blur(5px);
    ```

[`brightness()`](brightness.md)

:   Applies a linear multiplier to the input image, making it appear
    more or less bright. Values are linear multipliers on the effect,
    with `0%` creating a completely black image, `100%` having no
    effect, and values over `100%` brightening the image.

    [css]

    ```css
    filter: brightness(2);
    ```

[`contrast()`](contrast.md)

:   Adjusts the contrast of the input image. A value of `0%` makes the
    image grey, `100%` has no effect, and values over `100%` create a
    contrast.

    [css]

    ```css
    filter: contrast(200%);
    ```

[`drop-shadow()`](drop-shadow.md)

:   Applies the parameter `<shadow>` as a drop shadow, following the
    contours of the image. The shadow syntax is similar to
    `<box-shadow>` (defined in the [](css_backgrounds_and_borders.md)), with the exception that the
    `inset` keyword and `spread` parameter are not allowed. As with all
    `filter` property values, any filters after the `drop-shadow()` are
    applied to the shadow.

    [css]

    ```css
    filter: drop-shadow(16px 16px 10px black);
    ```

[`grayscale()`](grayscale.md)

:   Converts the image to grayscale. A value of `100%` is completely
    grayscale. The initial value of `0%` leaves the input unchanged.
    Values between `0%` and `100%` produce linear multipliers on the
    effect.

    [css]

    ```css
    filter: grayscale(100%);
    ```

[`hue-rotate()`](hue-rotate.md)

:   Applies a hue rotation. The `<angle>` value defines the number of
    degrees around the hue color circle at which the input samples will
    be adjusted. A value of `0deg` leaves the input unchanged.

    [css]

    ```css
    filter: hue-rotate(90deg);
    ```

[`invert()`](invert.md)

:   Inverts the samples in the input image. A value of `100%` completely
    inverts the image. A value of `0%` leaves the input unchanged.
    Values between `0%` and `100%` have linear multipliers on the
    effect.

    [css]

    ```css
    filter: invert(100%);
    ```

[`opacity()`](_Resources/Markup%20And%20Styling/css/filter-function/opacity.md)

:   Applies transparency. `0%` makes the image completely transparent
    and `100%` leaves the image unchanged.

    [css]

    ```css
    filter: opacity(50%);
    ```

[`saturate()`](saturate.md)

:   Saturates the image, with `0%` being completely unsaturated, `100%`
    leaving the image unchanged, and values of over `100%` increasing
    saturation.

    [css]

    ```css
    filter: saturate(200%);
    ```

[`sepia()`](sepia.md)

:   Converts the image to sepia, with a value of `100%` making the image
    completely sepia and `0%` making no change.

    [css]

    ```css
    filter: sepia(100%);
    ```

Combining functions
-------------------

You may combine any number of functions to manipulate the rendering. The
filters are applied in the order declared. The following example
enhances the contrast and brightness of the image:

[css]

```css
filter: contrast(175%) brightness(103%);
```

### Interpolation

When animated, if both the beginning and end filters have a function
list of the same length without [`url()`](url.md) in the same order, each
of their filter functions is
[interpolated](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation)
according to the filter function\'s specific rules.

If the filter lists are of different lengths, the missing equivalent
filter functions from the longer list are added to the end of the
shorter list. The added functions use their initial, no filter
modification values. All the filters listed are then interpolated
according to the filter function\'s specific rules. Otherwise, discrete
interpolation is used.

Formal definition
-----------------

  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `none`
  Applies to                         all elements; In SVG, it applies to container elements excluding the [`<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) element and all graphics elements
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified
  Animation type                     a [filter function list](filter.md#interpolation)
  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
filter = 
  none                 |
  <filter-value-list>  

<filter-value-list> = 
  [ <filter-function> | <url> ]+  

<filter-function> = 
  <blur()>         |
  <brightness()>   |
  <contrast()>     |
  <drop-shadow()>  |
  <grayscale()>    |
  <hue-rotate()>   |
  <invert()>       |
  <opacity()>      |
  <sepia()>        |
  <saturate()>     

<url> = 
  url( <string> <url-modifier>* )  |
  src( <string> <url-modifier>* )  
```

Examples
--------

### Applying filter functions

The `filter` property is applied to the second image, greying and
blurring both the image and its border.

[css]

```css
img {
  border: 5px solid yellow;
}
/* Gray the second image by 40% and blur by 5px */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

[html]

```html
<img src="pencil.jpg" alt="Original image is sharp" />
<img src="pencil.jpg" alt="The image and border are blurred and muted" />
```

### Repeating filter functions

Filter functions are applied in order of appearance. The same filter
function can be repeated.

[css]

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg) drop-shadow(5px 5px 0
        red);
}
```

The filters are applied in order. This is why the drop shadows are not
the same color: the first drop shadow\'s hue is altered by the
`hue-rotate()` function but the second one is not.

Specifications
--------------

  ----------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------

  [Filter Effects Module Level 1\
  [\#
  FilterProperty]](https://drafts.fxtf.org/filter-effects/#FilterProperty)

  ----------------------------------------------------------------------------------

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

`filter`

53

18In Chrome 18 to 19, the `saturate()` function only takes integers
instead of decimal or percentage values. From Chrome 20, this bug is
fixed.

1212

4935

NoInternet Explorer 4 to 9 implemented a non-standard `filter` property.
The syntax was completely different from this one and is not documented
here.

4015

9.16

534.4

53

4935

4114

9.36

6.0

`svg`

No

No

35

No

No

No

No

No

35

No

No

No

See also
--------

- CSS [`backdrop-filter`](backdrop-filter.md) property
- CSS [compositing and blending](css_compositing_and_blending.md) module,
    including the CSS [`background-blend-mode`](background-blend-mode.md)
    and [`mix-blend-mode`](mix-blend-mode.md) properties.
- The CSS [`mask`](mask.md) property
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), including
    the SVG
    [`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
    element and SVG `filter` attribute.
- [Applying SVG effects to HTML
    content](https://developer.mozilla.org/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/filter>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/array/filter.md)
Array.prototype.filter()
========================


The `filter()` method of [`Array`](../array) instances creates a
[shallow
copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) of
a portion of a given array, filtered down to just the elements from the
given array that pass the test implemented by the provided function.



Try it 
------






Syntax
------




[js]


```js
filter(callbackFn)
filter(callbackFn, thisArg)
```





### Parameters



[`callbackFn`](#callbackfn)

:   A function to execute for each element in the array. It should
    return a
    [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
    value to keep the element in the resulting array, and a
    [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    value otherwise. The function is called with the following
    arguments:

    [`element`](#element)

    :   The current element being processed in the array.

    [`index`](#index)

    :   The index of the current element being processed in the array.

    [`array`](#array)

    :   The array `filter()` was called upon.

[`thisArg`](#thisarg) [Optional]

:   A value to use as `this` when executing `callbackFn`. See [iterative
    methods](../array#iterative_methods).




### Return value 


A [shallow
copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) of
the given array containing just the elements that pass the test. If no
elements pass the test, an empty array is returned.




Description
-----------


The `filter()` method is an [iterative
method](../array#iterative_methods). It calls a provided `callbackFn`
function once for each element in an array, and constructs a new array
of all the values for which `callbackFn` returns a
[truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
value. Array elements which do not pass the `callbackFn` test are not
included in the new array. Read the [iterative
methods](../array#iterative_methods) section for more information about
how these methods work in general.

`callbackFn` is invoked only for array indexes which have assigned
values. It is not invoked for empty slots in [sparse
arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

The `filter()` method is [generic](../array#generic_array_methods). It
only expects the `this` value to have a `length` property and
integer-keyed properties.




Examples
--------



### Filtering out all small values 


The following example uses `filter()` to create a filtered array that
has all elements with values less than 10 removed.



[js]


```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```





### Find all prime numbers in an array 


The following example returns all prime numbers in the array:



[js]


```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```





### Filtering invalid entries from JSON 


The following example uses `filter()` to create a filtered JSON of all
elements with non-zero, numeric `id`.



[js]


```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5
```





### Searching in array 


Following example uses `filter()` to filter array content based on
search criteria.



[js]


```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```





### Using the third argument of callbackFn 


The `array` argument is useful if you want to access another element in
the array, especially when you don\'t have an existing variable that
refers to the array. The following example first uses `map()` to extract
the numerical ID from each name and then uses `filter()` to select the
ones that are greater than its neighbors.



[js]


```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```


The `array` argument is *not* the array that is being built --- there is
no way to access the array being built from the callback function.




### Using filter() on sparse arrays 


`filter()` will skip empty slots.



[js]


```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```





### Calling filter() on non-array objects 


The `filter()` method reads the `length` property of `this` and then
accesses each property whose key is a nonnegative integer less than
`length`.



[js]


```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```




Specifications
--------------


  -----------------------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-array.prototype.filter]](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter)

  -----------------------------------------------------------------------------------------------------------------------------


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

`filter`

1

12

1.5

9.5

3

18

4

10.1

1

1.0

≤37

1.0

0.10.0


See also 
--------


-   [Polyfill of `Array.prototype.filter` in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
-   [Indexed
    collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
    guide
-   [`Array`](../array)
-   [`Array.prototype.forEach()`](foreach)
-   [`Array.prototype.every()`](every)
-   [`Array.prototype.map()`](map)
-   [`Array.prototype.some()`](some)
-   [`Array.prototype.reduce()`](reduce)
-   [`TypedArray.prototype.filter()`](../typedarray/filter)




© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/iterator/filter.md)
Iterator.prototype.filter()
===========================

 
 
**Experimental:** **This is an [experimental
technology](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)**\
Check the [Browser compatibility table](#browser_compatibility)
carefully before using this in production.


The `filter()` method of [`Iterator`](../iterator) instances returns a
new [iterator helper](../iterator#iterator_helpers) that yields only
those elements of the iterator for which the provided callback function
returns `true`.


 
Syntax
------

 
 
 
[js]


```js
filter(callbackFn)
```




 
### Parameters

 

[`callbackFn`](#callbackfn)

:   A function to execute for each element produced by the iterator. It
    should return a
    [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
    value to make the element yielded by the iterator helper, and a
    [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    value otherwise. The function is called with the following
    arguments:

    [`element`](#element)

    :   The current element being processed.

    [`index`](#index)

    :   The index of the current element being processed.



 
### Return value 

 
A new [iterator helper](../iterator#iterator_helpers). Each time the
iterator helper\'s `next()` method is called, it returns the next
element in the iterator for which the callback function returns `true`.
When the underlying iterator is completed, the iterator helper is also
completed (the `next()` method produces
`{ value: undefined, done: true }`).



 
Description
-----------

 
The main advantage of iterator helpers over array methods is their
ability to work with infinite iterators. With infinite iterators,
`filter()` allows you to iterate over only those elements that satisfy a
given condition.



 
Examples
--------


 
### Using filter() 

 
The following example creates an iterator that yields terms in the
Fibonacci sequence, and then reads the first few terms that are even:

 
 
[js]


```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```




 
### Using filter() with a for\...of loop 

 
`filter()` is most convenient when you are not hand-rolling the
iterator. Because iterators are also iterable, you can iterate the
returned helper with a [`for...of`](../../statements/for...of) loop:

 
 
[js]


```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```


This is equivalent to:

 
 
[js]


```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------
  [Iterator Helpers\
  [\#
  sec-iteratorprototype.filter]](https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.filter)

  -----------------------------------------------------------------------------------------------------------------


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

`filter`

117

117

No

103

No

117

No

78

No

No

117

No

No

 
See also 
--------

 
-   [Polyfill of `Iterator.prototype.filter` in
    `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
-   [`Iterator`](../iterator)
-   [`Iterator.prototype.forEach()`](foreach)
-   [`Iterator.prototype.every()`](every)
-   [`Iterator.prototype.map()`](map)
-   [`Iterator.prototype.some()`](some)
-   [`Iterator.prototype.reduce()`](reduce)
-   [`Array.prototype.filter()`](../array/filter)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/filter>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/typedarray/filter.md)
TypedArray.prototype.filter()
=============================

 
The `filter()` method of [`TypedArray`](../typedarray) instances creates
a copy of a portion of a given typed array, filtered down to just the
elements from the given typed array that pass the test implemented by
the provided function. This method has the same algorithm as
[`Array.prototype.filter()`](../array/filter).


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
filter(callbackFn)
filter(callbackFn, thisArg)
```




 
### Parameters

 

[`callbackFn`](#callbackfn)

:   A function to execute for each element in the typed array. It should
    return a
    [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
    value to keep the element in the resulting typed array, and a
    [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    value otherwise. The function is called with the following
    arguments:

    [`element`](#element)

    :   The current element being processed in the typed array.

    [`index`](#index)

    :   The index of the current element being processed in the typed
        array.

    [`array`](#array)

    :   The typed array `filter()` was called upon.

[`thisArg`](#thisarg) [Optional]

:   A value to use as `this` when executing `callbackFn`. See [iterative
    methods](../array#iterative_methods).



 
### Return value 

 
A copy of the given typed array containing just the elements that pass
the test. If no elements pass the test, an empty typed array is
returned.



 
Description
-----------

 
See [`Array.prototype.filter()`](../array/filter) for more details. This
method is not generic and can only be called on typed array instances.



 
Examples
--------


 
### Filtering out all small values 

 
The following example uses `filter()` to create a filtered typed array
that has all elements with values less than 10 removed.

 
 
[js]


```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```




Specifications
--------------

 
  -----------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\# sec-%typedarray%.prototype.filter]](#)

  -----------------------------------------------------------------------


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

`filter`

45

12

38

32

9.1

45

38

32

9.3

5.0

45

1.0

4.0.0

 
See also 
--------

 
-   [Polyfill of `TypedArray.prototype.filter` in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
-   [JavaScript typed
    arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
    guide
-   [`TypedArray`](../typedarray)
-   [`TypedArray.prototype.forEach()`](foreach)
-   [`TypedArray.prototype.every()`](every)
-   [`TypedArray.prototype.map()`](map)
-   [`TypedArray.prototype.some()`](some)
-   [`TypedArray.prototype.reduce()`](reduce)
-   [`Array.prototype.filter()`](../array/filter)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/filter.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

filter property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) filter
:::

Gets the value of \"filter\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get filter => getPropertyValue('filter');
```

::: {#setter .section .multi-line-signature}
void filter=([String](../../dart-core/string-class) value)
:::

Sets the value of \"filter\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set filter(String value) {
  setProperty('filter', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/filter.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/filter.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

filter property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? filter
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get filter native;
```

::: {#setter .section .multi-line-signature}
void filter=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set filter(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/filter.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/filter.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

filter property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? filter
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get filter native;
```

::: {#setter .section .multi-line-signature}
void filter=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set filter(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/filter.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/filter.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

filter property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? filter
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get filter native;
```

::: {#setter .section .multi-line-signature}
void filter=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set filter(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/filter.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/treewalker/filter.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

filter property
===============

::: {#getter .section .multi-line-signature}
[NodeFilter](../nodefilter-class)? filter
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
NodeFilter? get filter native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TreeWalker/filter.html>
:::
