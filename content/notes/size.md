size
====

The `size` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[at-rule](at-rule.md) descriptor, used with the [`@page`](@page.md)
at-rule, defines the size and orientation of the box which is used to
represent a page. Most of the time, this size corresponds to the target
size of the printed page if applicable.

Size may either be defined with a \"scalable\" keyword (in this case the
page will fill the available dimensions) or with absolute dimensions.

Syntax
------

[css]

```css
/* Keyword values for scalable size */
size: auto;
size: portrait;
size: landscape;

/* <length> values */
/* 1 value: height = width */
size: 6in;

/* 2 values: width then height */
size: 4in 6in;

/* Keyword values for absolute size */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Mixing size and orientation */
size: A4 portrait;
```

### Values

[`auto`](#auto)

:   The user agent decides the size of the page. In most cases, the
    dimensions and orientation of the target sheet are used.

[`landscape`](#landscape)

:   The content of the page is displayed in landscape mode (i.e. the
    longest side of the box is horizontal).

[`portrait`](#portrait)

:   The content of the page is displayed in portrait mode (i.e. the
    longest side of the box is vertical). This is the default
    orientation.

[`<length>`](#length)

:   Any length value (see [`<length>`](length.md)). The first value
    corresponds to the width of the page box and the second one
    corresponds to its height. If only one value is provided, it is used
    for both width and height.

[`<page-size>`](#page-size)

:   A keyword which may be any of the following values:

    [A5](#a5)

    :   This matches the standard, ISO dimensions: 148mm x 210mm.

    [A4](#a4)

    :   This matches the standard, ISO dimensions: 210mm x 297mm. (most
        frequently used dimensions for personal printing.)

    [A3](#a3)

    :   This matches the standard, ISO dimensions: 297mm x 420mm.

    [B5](#b5)

    :   This matches the standard, ISO dimensions: 176mm x 250mm.

    [B4](#b4)

    :   This matches the standard, ISO dimensions: 250mm x 353mm.

    [JIS-B5](#jis-b5)

    :   This correspond to the JIS standard dimensions: 182mm x 257mm.

    [JIS-B4](#jis-b4)

    :   This correspond to the JIS standard dimensions: 257mm x 364mm.

    [letter](#letter)

    :   This keyword is an equivalent to the dimensions of letter paper
        in North America i.e. 8.5in x 11in.

    [legal](#legal)

    :   This keyword is an equivalent to the dimensions of legal papers
        in North America i.e. 8.5in x 14in.

    [ledger](#ledger)

    :   This keyword is an equivalent to the dimensions of ledger pages
        in North America i.e. 11in x 17in.

Formal definition
-----------------

  ------------------------------------- -------------------------------------------------------------------------
  Related [at-rule](at-rule.md)         [`@page`](@page.md)
  [Initial value](initial_value.md)     `auto`
  [Computed value](computed_value.md)   as specified, but with relative lengths converted into absolute lengths
  ------------------------------------- -------------------------------------------------------------------------

Formal syntax
-------------

```
size = 
  <length>                                |
  auto                                         |
  [ <page-size> || [ portrait | landscape ] ]  
```

Examples
--------

### Specifying size and orientation

[css]

```css
@page {
  size: A4 landscape;
}
```

### Specifying a custom size

[css]

```css
@page {
  size: 4in 6in;
}
```

### Nesting inside a \@media rule

[css]

```css
@media print {
  @page {
    size: 50mm 150mm;
  }
}
```

Specifications
--------------

  -----------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------

  [CSS Paged Media Module Level 3\
  [\#
  page-size-prop]](https://drafts.csswg.org/css-page/#page-size-prop)

  -----------------------------------------------------------------------------

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

`size`

15

79

95

No

15

≤13.1

37

18

95

14

≤13.4

1.5

`jis-b4`

83

83

95

No

69

No

83

83

95

59

No

13.0

`jis-b5`

83

83

95

No

69

No

83

83

95

59

No

13.0

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/attributes/size.md)
HTML attribute: size
====================

The `size` attribute defines the width of the
[`<input>`](../element/input) and the height of the
[`<select>`](../element/select) element. For the `input`, if the `type`
attribute is [text](../element/input/text) or
[password](../element/input/password) then it\'s the number of
characters. This must be an integer value of 0 or higher. If no `size`
is specified, or an invalid value is specified, the input has no size
declared, and the form control will be the default width based on the
user agent. If CSS targets the element with properties impacting the
width, CSS takes precedence.

The `size` attribute has no impact on constraint validation.

Try it
------

Examples
--------

By adding `size` on some input types, the width of the input can be
controlled. Adding size on a select changes the height, defining how
many options are visible in the closed state.

[html]

```html
<label for="fruit">Enter a fruit</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Enter a vegetable</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>banana</option>
  <option>cherry</option>
  <option>strawberry</option>
  <option>durian</option>
  <option>blueberry</option>
</select>

<select name="vegetables" size="5">
  <option>carrot</option>
  <option>cucumber</option>
  <option>cauliflower</option>
  <option>celery</option>
  <option>collard greens</option>
</select>
```

Specifications
--------------

**No specification found**

No specification data found for `html.elements.attribute.size`.\
[Check for problems with this page](#on-github) or contribute a missing
`spec_url` to
[mdn/browser-compat-data](https://github.com/mdn/browser-compat-data).
Also make sure the specification is included in
[w3c/browser-specs](https://github.com/w3c/browser-specs).

Browser compatibility
---------------------

See also
--------

- [`maxlength`](maxlength)
- [`minlength`](minlength)
- [`pattern`](pattern)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/map/size.md)
Map.prototype.size
==================

 
The `size` accessor property of [`Map`](../map) instances returns the
number of elements in this map.


 
Try it 
------

 



 
Description
-----------

 
The value of `size` is an integer representing how many entries the
`Map` object has. A set accessor function for `size` is `undefined`; you
can not change this property.



 
Examples
--------


 
### Using size 

 
 
 
[js]


```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-get-map.prototype.size]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-map.prototype.size)

  ---------------------------------------------------------------------------------------------------------------------------


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

`size`

38

12

19From Firefox 13 to Firefox 18, the `size` property was implemented as
a `Map.prototype.size()` method, this has been changed to a property in
later versions conform to the ECMAScript 2015 specification.

25

8

38

19From Firefox 13 to Firefox 18, the `size` property was implemented as
a `Map.prototype.size()` method, this has been changed to a property in
later versions conform to the ECMAScript 2015 specification.

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [`Map`](../map)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/set/size.md)
Set.prototype.size
==================

 
The `size` accessor property of [`Set`](../set) instances returns the
number of (unique) elements in this set.


 
Try it 
------

 



 
Description
-----------

 
The value of `size` is an integer representing how many entries the
`Set` object has. A set accessor function for `size` is `undefined`; you
cannot change this property.



 
Examples
--------


 
### Using size 

 
 
 
[js]


```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-get-set.prototype.size]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size)

  ---------------------------------------------------------------------------------------------------------------------------


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

`size`

38

12

19From Firefox 13 to Firefox 18, the `size` property was implemented as
a `Set.prototype.size()` method, this has been changed to a property in
later versions conform to the ECMAScript 2015 specification.

25

8

38

19From Firefox 13 to Firefox 18, the `size` property was implemented as
a `Set.prototype.size()` method, this has been changed to a property in
later versions conform to the ECMAScript 2015 specification.

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [`Set`](../set)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) size
:::

Gets the value of \"size\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get size => getPropertyValue('size');
```

::: {#setter .section .multi-line-signature}
void size=([String](../../dart-core/string-class) value)
:::

Sets the value of \"size\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(String value) {
  setProperty('size', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size native;
```

::: {#setter .section .multi-line-signature}
void size=([int](../../dart-core/int-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/emailinputelement/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size;
```

::: {#setter .section .multi-line-signature}
void size=([int](../../dart-core/int-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(int? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmailInputElement/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/selectelement/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size native;
```

::: {#setter .section .multi-line-signature}
void size=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SelectElement/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/textinputelementbase/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size;
```

::: {#setter .section .multi-line-signature}
void size=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(int? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextInputElementBase/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/vttcue/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get size native;
```

::: {#setter .section .multi-line-signature}
void size=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set size(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VttCue/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filestat/size.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

size property
=============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) size

::: {.features}
final
:::
:::

The size of the file system object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int size;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileStat/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediakeystatusmap/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaKeyStatusMap/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/activeinfo/size.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get size native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/ActiveInfo/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/metadata/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get size native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Metadata/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/blob/size.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

size property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) size
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get size native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Blob/size.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/size/size.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

Size constructor
================

::: {.section .multi-line-signature}
const Size()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
const Size();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Size/Size.html>
:::
