width
=====

The `width` CSS property sets an element\'s width. By default, it sets
the width of the [](introduction_to_the_css_box_model.md#content_area), but
if [`box-sizing`](box-sizing.md) is set to `border-box`, it sets the width
of the [](introduction_to_the_css_box_model.md#border_area).

Try it
------

The specified value of `width` applies to the content area so long as
its value remains within the values defined by [`min-width`](min-width.md)
and [`max-width`](max-width.md).

- If the value for `width` is less than the value for `min-width`,
    then `min-width` overrides `width`.
- If the value for `width` is greater than the value for `max-width`,
    then `max-width` overrides `width`.

Syntax
------

[css]

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Values

[`<length>`](length.md)

:   Defines the width as a distance value.

[`<percentage>`](percentage.md)

:   Defines the width as a percentage of the [](containing_block.md)\'s width.

[`auto`](#auto)

:   The browser will calculate and select a width for the specified
    element.

[`max-content`](#max-content)

:   The intrinsic preferred width.

[`min-content`](#min-content)

:   The intrinsic minimum width.

[`fit-content(`](#fit-content)`<length-percentage>`)

:   Uses the fit-content formula with the available space replaced by
    the specified argument, i.e.
    `min(max-content, max(min-content, <length-percentage>))`.

Accessibility concerns
----------------------

Ensure that elements set with a `width` aren\'t truncated and/or don\'t
obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

Formal definition
-----------------

  ---------------------------------- -------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         all elements but non-replaced inline elements, table rows, and row groups
  [Inherited](inheritance.md)           no
  Percentages                        refer to the width of the containing block
  [Computed value](computed_value.md)   a percentage or `auto` or the absolute length
  Animation type                     a [length](length.md#interpolation), [percentage](percentage.md#interpolation) or calc();
  ---------------------------------- -------------------------------------------------------------------------------------

Formal syntax
-------------

```
width = 
  auto                                      |
  <length-percentage [0,∞]>                 |
  min-content                               |
  max-content                               |
  fit-content( <length-percentage [0,∞]> )  

<length-percentage> = 
  <length>      |
  <percentage>  
```

Examples
--------

### Default width

[css]

```css
p.goldie {
  background: gold;
}
```

[html]

```html
<p class="goldie">The Mozilla community produces a lot of great software.</p>
```

### Example using pixels and ems

[css]

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

[html]

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

### Example with percentage

[css]

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

[html]

```html
<div class="percent">Width in percentage</div>
```

### Example using \"max-content\"

[css]

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

[html]

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

### Example using \"min-content\"

[css]

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

[html]

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

Specifications
--------------

  -----------------------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------------------

  [CSS Box Sizing Module Level 4\
  [\#
  width-height-keywords]](https://drafts.csswg.org/css-sizing-4/#width-height-keywords)

  -----------------------------------------------------------------------------------------------

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

`width`

1

12

1

4

3.5

1

4.4

18

4

10.1

1

1.0

`animatable`

26

12

16

11

15

7

4.4

26

16

14

7

1.5

`fit-content`

46221--48

7979

943

No

331515--35

1172

464.44.4--48

462518--48

944

331414--35

1171

5.01.51.0--5.0

`fit-content_function`

No

No

91

No

No

No

No

No

No

No

No

No

`max-content`

4622

7979

663

No

44

112

46

46

664

43

111

5.0

`min-content`

461--48

79

663

No

3315--35

112

464.4--48

4618--48

664

3314--35

111

5.01.0--5.0

`stretch`

22

79

3

No

15

7

4.4

25

4

14

7

5.0

See also
--------

- [The box model](introduction_to_the_css_box_model.md)
- [`height`](_Resources/Markup%20And%20Styling/css/height.md)
- [`box-sizing`](box-sizing.md)
- [`min-width`](min-width.md), [`max-width`](max-width.md)
- The mapped logical properties: [`block-size`](block-size.md),
    [`inline-size`](inline-size.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/width>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/width.md)
width
=====

The `width` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[media feature](@media.md#media_features) can be used to test the width
of the
[viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)
(or the page box, for [paged media](css_paged_media.md)).

Syntax
------

The `width` feature is specified as a [`<length>`](length.md) value
representing the viewport width. It is a range feature, meaning that you
can also use the prefixed `min-width` and `max-width` variants to query
minimum and maximum values, respectively.

Examples
--------

### HTML

[html]

```html
<div>Watch this element as you resize your viewport's width.</div>
```

### CSS

```css

[css]

```css

/*Exact width*/
@media (width: 360px) {
  div {
    color: red;
  }
}

/*Minimum width*/
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/*Maximum width*/
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}

```

### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [Media Queries Level 4\
  [\# width]](https://drafts.csswg.org/mediaqueries/#width)

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

`width`

1

12

2

9

10

3

≤37

18

4

10.1

1

1.0

See also
--------

- [Using media queries](using_media_queries.md)
- [\@media](@media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) width

::: {.features}
override
:::
:::

The width of this rectangle.

This is equivalent to the `width` function in jQuery and the calculated
`width` CSS value, converted to a dimensionless num in pixels. Unlike
[Element.getBoundingClientRect](../element/getboundingclientrect),
`width` will return the same numerical width if the element is hidden or
not.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get width;
```

::: {#setter .section .multi-line-signature}
void width=(dynamic newWidth)
:::

Set the current computed width in pixels of this element.

newWidth can be either a [num](../../dart-core/num-class) representing
the width in pixels or a [Dimension](../dimension-class) object. This is
equivalent to the `width` function in jQuery and the calculated `width`
CSS value, converted to a dimensionless num in pixels.

Note that only the content width can be set via this method.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(dynamic newWidth) {
  throw new UnsupportedError("Can only set width for content rect.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/mutablerectangle/width.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
T width
:::

The width of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T get width => _width;
```

::: {#setter .section .multi-line-signature}
void width=(T width)
:::

Sets the width of the rectangle.

The width must be non-negative. If a negative width is supplied, it is
clamped to zero.

Setting the value will change the right edge of the rectangle, but will
not change [left](left).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(T width) {
  if (width < 0) width = _clampToZero<T>(width);
  _width = width;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/MutableRectangle/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) width

::: {.features}
override
:::
:::

Gets the value of \"width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get width => this._width;
```

::: {#setter .section .multi-line-signature}
void width=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(String? value) {
  _width = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) width
:::

Gets the value of \"width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get width => getPropertyValue('width');
```

::: {#setter .section .multi-line-signature}
void width=([String](../../dart-core/string-class) value)
:::

Sets the value of \"width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(String value) {
  setProperty('width', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvaselement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

The width of this canvas element in CSS pixels.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/iframeelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/IFrameElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/objectelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get width native;
```

::: {#setter .section .multi-line-signature}
void width=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ObjectElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/embedelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get width native;
```

::: {#setter .section .multi-line-signature}
void width=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmbedElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvas/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvas/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imageelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagebuttoninputelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageButtonInputElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/vttregion/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VttRegion/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/videoelement/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get width native;
```

::: {#setter .section .multi-line-signature}
void width=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(int value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VideoElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/rect/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {#setter .section .multi-line-signature}
void width=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set width(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Rect/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) width

::: {.features}
override
:::
:::

The width of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get width => _width!;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecomponenttransferelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEComponentTransferElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fespecularlightingelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FESpecularLightingElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fediffuselightingelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDiffuseLightingElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedisplacementmapelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDisplacementMapElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feconvolvematrixelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEConvolveMatrixElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fegaussianblurelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEGaussianBlurElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecolormatrixelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEColorMatrixElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femorphologyelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMorphologyElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feturbulenceelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETurbulenceElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecompositeelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FECompositeElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feoffsetelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEOffsetElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feblendelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEBlendElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefloodelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFloodElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feimageelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEImageElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femergeelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMergeElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fetileelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETileElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterprimitivestandardattributes/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterPrimitiveStandardAttributes/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/foreignobjectelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ForeignObjectElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/patternelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/PatternElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgsvgelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgSvgElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/imageelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ImageElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/maskelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/MaskElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/rectelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/RectElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/useelement/width.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/UseElement/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/width.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

width property
==============

::: {.section .multi-line-signature}
T width

::: {.features}
final
:::
:::

The width of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final T width;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/visualviewport/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VisualViewport/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pointerevent/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PointerEvent/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagebitmap/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageBitmap/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/textmetrics/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextMetrics/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintsize/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintSize/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagedata/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageData/width.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/screen/width.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

width property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? width
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get width native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Screen/width.html>
:::
