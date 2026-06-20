opacity
=======

The `opacity` CSS property sets the opacity of an element. Opacity is
the degree to which content behind an element is hidden, and is the
opposite of transparency.

Try it
------

Syntax
------

[css]

```css
opacity: 0.9;
opacity: 90%;

/* Global values */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### Values

[`<alpha-value>`](#alpha-value)

:   A [`<number>`](number.md) in the range `0.0` to `1.0`, inclusive, or a
    [`<percentage>`](percentage.md) in the range `0%` to `100%`, inclusive,
    representing the opacity of the channel (that is, the value of its
    alpha channel). Any value outside the interval, though valid, is
    clamped to the nearest limit in the range.

      Value                                                   Meaning
      ------------------------------------------------------- -------------------------------------------------------------------------------
      `0`                                                     The element is fully transparent (that is, invisible).
      Any [`<number>`](number) strictly between `0` and `1`   The element is translucent (that is, content behind the element can be seen).
      `1` (default value)                                     The element is fully opaque (visually solid).

Description
-----------

`opacity` applies to the element as a whole, including its contents,
even though the value is not inherited by child elements. Thus, the
element and its children all have the same opacity relative to the
element\'s background, even if they have different opacities relative to
one another.

Using `opacity` with a value other than `1` places the element in a new
[](stacking_context.md).

When `opacity` value is set to `0`, the element and all of its children
are not visible; however, they still register [pointer
events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).
This can be controlled with the CSS [`pointer-events`](pointer-events.md)
property.

To change the opacity of a background only, use the
[`background`](background.md) property with a [`color value`](color_value.md)
that allows for an alpha channel. For example:

[css]

```css
background: rgba(0, 0, 0, 0.4);
```

Accessibility concerns
----------------------

If text opacity is adjusted, it is important to ensure that the contrast
ratio between the color of the text and the background the text is
placed over is high enough that people experiencing low vision
conditions will be able to read the content of the page.

Color contrast ratio is determined by comparing the luminosity of the
opacity-adjusted text and background color values. In order to meet
current [Web Content Accessibility Guidelines
(WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of
4.5:1 is required for text content and 3:1 for larger text such as
headings. Large text is defined as 18.66px and [bold](_Resources/Markup%20And%20Styling/css/font-weight.md) or
larger, or 24px or larger.

- [WebAIM: Color Contrast
    Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Formal definition
-----------------

  ---------------------------------- ----------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `1`
  Applies to                         all elements
  [Inherited](inheritance.md)           no
  Percentages                        map to the range `[0,1]`
  [Computed value](computed_value.md)   The same as the specified value after clipping the [`<number>`](number.md) to the range \[0.0, 1.0\].
  Animation type                     by computed value type
  ---------------------------------- ----------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
opacity = 
  <alpha-value>  

<alpha-value> = 
  <number>      |
  <percentage>  
```

Examples
--------

### Setting opacity

The following example demonstrates how the `opacity` property changes
the opacity of the entire element and content, thus making the text very
hard to read.

#### HTML

[html]

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

#### CSS

[css]

```css
div {
  background-color: yellow;
  font-weight: bold;
  font-size: 130%;
}
.light {
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```

#### Result

### Setting opacity on hover

In the following example opacity is changed on hover, so the striped
background image on the parent element shows through the image.

#### HTML

[html]

```html
<div class="wrapper">
  <img
    src="//interactive-examples.mdn.mozilla.net/media/dino.svg"
    alt="MDN Dino"
    width="128"
    height="146"
    class="opacity" />
</div>
```

#### CSS

[css]

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
}

.wrapper {
  width: 200px;
  height: 160px;
  background-color: #f03cc3;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%
  );
  background-size: 20px 20px;
}
```

#### Result

Specifications
--------------

  --------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------

  [CSS Color Module Level 4\
  [\#
  transparency]](https://drafts.csswg.org/css-color/#transparency)

  --------------------------------------------------------------------------

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

`opacity`

1

12

11--3.5

9

9

21.1--2

4.4

18

4

10.1

1

1.0

`percentages`

78

79

70

No

65

13.1

78

78

79

56

13.4

12.0

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/opacity>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/filter-function/opacity.md)
opacity()
=========

The `opacity()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) applies transparency to the samples in the
input image. Its result is a [`<filter-function>`](filter-function.md).

Try it
------

**Note:** This function is similar to the more established
[`opacity`](_Resources/Markup%20And%20Styling/css/opacity.md) property. The difference is that with filters,
some browsers provide hardware acceleration for better performance.

Syntax
------

[css]

```css
opacity(amount)
```

### Parameters

[`amount`](#amount)

:   The amount of the conversion, specified as a [`<number>`](number.md)
    or a [`<percentage>`](percentage.md). A value of `0%` is completely
    transparent, while a value of `100%` leaves the input unchanged.
    Values between `0%` and `100%` are linear multipliers on the effect.
    The initial value for
    [interpolation](https://developer.mozilla.org/en-US/docs/Glossary/Interpolation)
    is `1`.

Examples
--------

### Examples of correct values for opacity()

[css]

```css
opacity(0%)   /* Completely transparent */
opacity(50%)  /* 50% transparent */
opacity(1)    /* No effect */
```

Specifications
--------------

  --------------------------------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------------------------------

  [Filter Effects Module Level 1\
  [\#
  funcdef-filter-opacity]](https://drafts.fxtf.org/filter-effects/#funcdef-filter-opacity)

  --------------------------------------------------------------------------------------------------

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

`opacity`

18

12

35

No

15

6

4.4

53

35

14

6

6.0

See also
--------

- The other [`<filter-function>`](filter-function.md) functions
    available to be used in values of the [`filter`](filter.md) and
    [`backdrop-filter`](backdrop-filter.md) properties include:
  - [`blur()`](blur.md)
  - [`brightness()`](brightness.md)
  - [`contrast()`](contrast.md)
  - [`drop-shadow()`](drop-shadow.md)
  - [`grayscale()`](grayscale.md)
  - [`hue-rotate()`](hue-rotate.md)
  - [`invert()`](invert.md)
  - [`saturate()`](saturate.md)
  - [`sepia()`](sepia.md)
- The CSS [`opacity`](_Resources/Markup%20And%20Styling/css/opacity.md) property

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/opacity.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

opacity property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) opacity
:::

Gets the value of \"opacity\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get opacity => getPropertyValue('opacity');
```

::: {#setter .section .multi-line-signature}
void opacity=([String](../../dart-core/string-class) value)
:::

Sets the value of \"opacity\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set opacity(String value) {
  setProperty('opacity', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/opacity.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Opacity.md)

# Opacity

Opacity is a Flutter widget that allows you to control the transparency of its child widget. It takes a single opacity argument, which is a value between 0.0 and 1.0, where 0.0 represents complete transparency and 1.0 represents complete opacity. The child widget is drawn with the specified opacity,
 making it appear translucent or transparent, depending on the value of the opacity argument. This can be useful for creating visual effects such as fading in or out, or to create partially transparen
t backgrounds or overlays. By using Opacity in combination with other widgets and animations, you can create sophisticated visual effects in your Flutter app.

Visit the following resources to learn more:

- [@official@Fade a Widget in and out](https://docs.flutter.dev/cookbook/animation/opacity-animation)
- [@article@AnimatedOpacity widget](https://docs.flutter.dev/codelabs/implicit-animations#animate-opacity-with-animatedopacity-widgets)

## 관련 로드맵
- [[Flutter|flutter]]
