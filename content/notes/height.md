height
======

The `height` CSS property specifies the height of an element. By
default, the property defines the height of the [](introduction_to_the_css_box_model.md#content_area). If
[`box-sizing`](box-sizing.md) is set to `border-box`, however, it instead
determines the height of the [](introduction_to_the_css_box_model.md#border_area).

Try it
------

The [`min-height`](min-height.md) and [`max-height`](max-height.md) properties
override `height`.

Syntax
------

[css]

```css
/* <length> values */
height: 120px;
height: 10em;
height: 100vh;

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Global values */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Values

[`<length>`](length.md)

:   Defines the height as a distance value.

[`<percentage>`](percentage.md)

:   Defines the height as a percentage of the [](containing_block.md)\'s height.

[`auto`](#auto)

:   The browser will calculate and select a height for the specified
    element.

[`max-content`](#max-content)

:   The intrinsic preferred height.

[`min-content`](#min-content)

:   The intrinsic minimum height.

[`fit-content`](#fit-content)

:   Box will use the available space, but never more than `max-content`

[`fit-content(`](#fit-content_2)`<length-percentage>`)

:   Uses the fit-content formula with the available space replaced by
    the specified argument, i.e.
    `min(max-content, max(min-content, <length-percentage>))`

[`clamp()`](clamp.md)

:   Enables selecting a middle value within a range of values between a
    defined minimum and maximum

Accessibility concerns
----------------------

Ensure that elements set with a `height` aren\'t truncated and/or don\'t
obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

Formal definition
-----------------

  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         all elements but non-replaced inline elements, table columns, and column groups
  [Inherited](inheritance.md)           no
  Percentages                        The percentage is calculated with respect to the height of the generated box\'s containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value comp
utes to `auto`. A percentage height on the root element is relative to the initial containing block.
  [Computed value](computed_value.md)   a percentage or `auto` or the absolute length
  Animation type                     a [length](length.md#interpolation), [percentage](percentage.md#interpolation) or calc();
  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
height = 
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

### Setting height using pixels and percentages

#### HTML

[html]

```html
<div id="taller">I'm 50 pixels tall.</div>
<div id="shorter">I'm 25 pixels tall.</div>
<div id="parent">
  <div id="child">I'm half the height of my parent.</div>
</div>
```

#### CSS

[css]

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------------------------

  [CSS Box Sizing Module Level 3\
  [\#
  preferred-size-properties]](https://drafts.csswg.org/css-sizing/#preferred-size-properties)

  -----------------------------------------------------------------------------------------------------

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

`height`

1

12

1

4

7

1

4.4

18

4

10.1

1

1.0

`fit-content`

46

79

94

No

33

119

46

46

94

33

119

5.0

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

46

79

663

No

44

11

46

46

664

43

11

5.0

`min-content`

46

79

663

No

44

11

46

46

664

43

11

5.0

`stretch`

28

79

No

No

15

9

4.4

28

No

15

9

5.0

See also
--------

- [The box model](introduction_to_the_css_box_model.md)
- [`width`](_Resources/Markup%20And%20Styling/css/width.md)
- [`box-sizing`](box-sizing.md)
- [`min-height`](min-height.md), [`max-height`](max-height.md)
- The mapped logical properties: [`block-size`](block-size.md),
    [`inline-size`](inline-size.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/height>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/height.md)
height
======

The `height` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[media feature](@media.md#media_features) can be used to apply styles
based on the height of the
[viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)
(or the page box, for [paged media](css_paged_media.md)).

Syntax
------

The `height` feature is specified as a [`<length>`](length.md) value
representing the viewport height. It is a range feature, meaning that
you can also use the prefixed `min-height` and `max-height` variants to
query minimum and maximum values, respectively.

Examples
--------

### HTML

[html]

```html
<div>Watch this element as you resize your viewport's height.</div>
```

### CSS

[css]

```css
/* Exact height */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Minimum height */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Maximum height */
@media (max-height: 40rem) {
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
  [\# height]](https://drafts.csswg.org/mediaqueries/#height)

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

`height`

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
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) height

::: {.features}
override
:::
:::

The height of this rectangle.

This is equivalent to the `height` function in jQuery and the calculated
`height` CSS value, converted to a dimensionless num in pixels. Unlike
[Element.getBoundingClientRect](../element/getboundingclientrect),
`height` will return the same numerical height if the element is hidden
or not.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get height;
```

::: {#setter .section .multi-line-signature}
void height=(dynamic newHeight)
:::

Set the height to `newHeight`.

newHeight can be either a [num](../../dart-core/num-class) representing
the height in pixels or a [Dimension](../dimension-class) object. Values
of newHeight that are less than zero are converted to effectively
setting the height to 0. This is equivalent to the `height` function in
jQuery and the calculated `height` CSS value, converted to a num in
pixels.

Note that only the content height can actually be set via this method.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(dynamic newHeight) {
  throw new UnsupportedError("Can only set height for content rect.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/mutablerectangle/height.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
T height
:::

The height of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T get height => _height;
```

::: {#setter .section .multi-line-signature}
void height=(T height)
:::

Sets the height of the rectangle.

The height must be non-negative. If a negative height is supplied, it is
clamped to zero.

Setting the value will change the bottom edge of the rectangle, but will
not change [top](top).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(T height) {
  if (height < 0) height = _clampToZero<T>(height);
  _height = height;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/MutableRectangle/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) height

::: {.features}
override
:::
:::

Gets the value of \"height\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get height => this._height;
```

::: {#setter .section .multi-line-signature}
void height=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"height\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(String? value) {
  _height = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) height
:::

Gets the value of \"height\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get height => getPropertyValue('height');
```

::: {#setter .section .multi-line-signature}
void height=([String](../../dart-core/string-class) value)
:::

Sets the value of \"height\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(String value) {
  setProperty('height', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvaselement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

The height of this canvas element in CSS pixels.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/iframeelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/IFrameElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/objectelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get height native;
```

::: {#setter .section .multi-line-signature}
void height=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ObjectElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/embedelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get height native;
```

::: {#setter .section .multi-line-signature}
void height=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmbedElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvas/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvas/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imageelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagebuttoninputelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageButtonInputElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/videoelement/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get height native;
```

::: {#setter .section .multi-line-signature}
void height=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(int value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VideoElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/rect/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get height native;
```

::: {#setter .section .multi-line-signature}
void height=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set height(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Rect/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) height

::: {.features}
override
:::
:::

The height of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get height => _height!;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecomponenttransferelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEComponentTransferElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fespecularlightingelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FESpecularLightingElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fediffuselightingelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDiffuseLightingElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fedisplacementmapelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEDisplacementMapElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feconvolvematrixelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEConvolveMatrixElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fegaussianblurelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEGaussianBlurElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecolormatrixelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEColorMatrixElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femorphologyelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMorphologyElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feturbulenceelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETurbulenceElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fecompositeelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FECompositeElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feoffsetelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEOffsetElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feblendelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEBlendElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fefloodelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEFloodElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/feimageelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEImageElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/femergeelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FEMergeElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/fetileelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FETileElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterprimitivestandardattributes/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterPrimitiveStandardAttributes/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/foreignobjectelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ForeignObjectElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/patternelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/PatternElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/filterelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/FilterElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgsvgelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgSvgElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/imageelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ImageElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/maskelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/MaskElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/rectelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/RectElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/useelement/height.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[AnimatedLength](../animatedlength-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AnimatedLength? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/UseElement/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/height.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

height property
===============

::: {.section .multi-line-signature}
T height

::: {.features}
final
:::
:::

The height of the rectangle.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final T height;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/visualviewport/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VisualViewport/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pointerevent/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PointerEvent/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagebitmap/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageBitmap/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintsize/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintSize/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagedata/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageData/height.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/screen/height.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

height property
===============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? height
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get height native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Screen/height.html>
:::
