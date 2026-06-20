resize
======

The `resize` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property sets whether an element is resizable, and if so, in which
directions.

Try it
------

`resize` does not apply to the following:

- Inline elements
- Block elements for which the [`overflow`](overflow.md) property is set
    to `visible`

Syntax
------

[css]

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Global values */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

The `resize` property is specified as a single keyword value from the
list below.

### Values

[`none`](#none)

:   The element offers no user-controllable method for resizing it.

[`both`](#both)

:   The element displays a mechanism for allowing the user to resize it,
    which may be resized both horizontally and vertically.

[`horizontal`](#horizontal)

:   The element displays a mechanism for allowing the user to resize it
    in the *horizontal* direction.

[`vertical`](#vertical)

:   The element displays a mechanism for allowing the user to resize it
    in the *vertical* direction.

[`block`](#block) [Experimental]

:   The element displays a mechanism for allowing the user to resize it
    in the *block* direction (either horizontally or vertically,
    depending on the [`writing-mode`](writing-mode.md) and
    [`direction`](direction.md) value).

[`inline`](#inline) [Experimental]

:   The element displays a mechanism for allowing the user to resize it
    in the *inline* direction (either horizontally or vertically,
    depending on the [`writing-mode`](writing-mode.md) and
    [`direction`](direction.md) value).

Formal definition
-----------------

  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `none`
  Applies to                         elements with [`overflow`](overflow.md) other than `visible`, and optionally replaced elements representing images or videos, and iframes
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified
  Animation type                     discrete
  ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
resize = 
  none        |
  both        |
  horizontal  |
  vertical    |
  block       |
  inline      
```

Examples
--------

### Disabling resizability of textareas

In many browsers,
[`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
elements are resizable by default. You may override this behavior with
the `resize` property.

#### HTML

[html]

```html
<textarea>Type some text here.</textarea>
```

#### CSS

[css]

```css
textarea {
  resize: none; /* Disables resizability */
}
```

#### Result

### Using resize with arbitrary elements

You can use the `resize` property to make any element resizable. In the
example below, a resizable
[`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
contains a resizable paragraph
([`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
element).

#### HTML

[html]

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because the CSS `resize`
    property is set to `both` on this element.
  </p>
</div>
```

#### CSS

[css]

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Basic User Interface Module Level 4\
  [\# resize]](https://drafts.csswg.org/css-ui/#resize)

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

`resize`

1

79

4

No

12.1

3

37

18

4

14

1

1.0

`block_level_support`

4

79

5`resize` doesn\'t have any effect on
[`<iframe>`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe).
See [bug 680823](https://bugzil.la/680823))

No

15

4

37

18

5`resize` doesn\'t have any effect on
[`<iframe>`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe).
See [bug 680823](https://bugzil.la/680823))

14

3.2

1.0

`flow_relative_support`

118

118

63

No

104

16

118

118

63

No

16

No

See also
--------

- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/resize>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/arraybuffer/resize.md)
ArrayBuffer.prototype.resize()
==============================


The `resize()` method of [`ArrayBuffer`](../arraybuffer) instances
resizes the `ArrayBuffer` to the specified size, in bytes.



Try it 
------






Syntax
------




[js]


```js
resize(newLength)
```





### Parameters



[`newLength`](#newlength)

:   The new length, in bytes, to resize the `ArrayBuffer` to.




### Return value 


None ([`undefined`](../undefined)).




### Exceptions



[`TypeError`](../typeerror)

:   Thrown if the `ArrayBuffer` is detached or is not resizable.

[`RangeError`](../rangeerror)

:   Thrown if `newLength` is larger than the
    [`maxByteLength`](maxbytelength) of the `ArrayBuffer`.




Description
-----------


The `resize()` method resizes an `ArrayBuffer` to the size specified by
the `newLength` parameter, provided that the `ArrayBuffer` is
[resizable](resizable) and the new size is less than or equal to the
[`maxByteLength`](maxbytelength) of the `ArrayBuffer`. New bytes are
initialized to 0.

Note that you can use `resize()` to shrink as well as grow an
`ArrayBuffer` --- it is permissible for `newLength` to be smaller than
the `ArrayBuffer`\'s current [`byteLength`](bytelength).




Examples
--------



### Using resize() 


In this example, we create a 8-byte buffer that is resizable to a max
length of 16 bytes, then check its `resizable` property, resizing it if
`resizable` returns `true`:



[js]


```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```




Specifications
--------------


  -------------------------------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-arraybuffer.prototype.resize]](https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer.prototype.resize)

  -------------------------------------------------------------------------------------------------------------------------------------


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

`resize`

111

111

No

97

16.4

111

No

75

16.4

22.0

111

1.33

20.0.0


See also 
--------


-   [`ArrayBuffer`](../arraybuffer)
-   [`ArrayBuffer.prototype.resizable`](resizable)
-   [`ArrayBuffer.prototype.maxByteLength`](maxbytelength)




© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/resize.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

resize property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) resize
:::

Gets the value of \"resize\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get resize => getPropertyValue('resize');
```

::: {#setter .section .multi-line-signature}
void resize=([String](../../dart-core/string-class) value)
:::

Sets the value of \"resize\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set resize(String value) {
  setProperty('resize', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/resize.html>
:::
