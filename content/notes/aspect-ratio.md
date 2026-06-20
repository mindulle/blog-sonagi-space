aspect-ratio
============

The `aspect-ratio`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows
you to define the desired width-to-height ratio of an element\'s box.
This means that even if the parent container or viewport size changes,
the browser will adjust the element\'s dimensions to maintain the
specified width-to-height ratio. The specified aspect ratio is used in
the calculation of auto sizes and some other layout functions.

At least one of the box\'s sizes needs to be automatic in order for
`aspect-ratio` to have any effect. If neither the width nor height is an
automatic size, then the provided aspect ratio has no effect on the
box\'s preferred sizes.

Try it
------

Syntax
------

[css]

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* fallback to 'auto' for replaced elements */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

This property is specified as one or both of the keyword auto or a
`<ratio>`. If both are given, then If the element is a [](replaced_element.md), such as
[`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img),
then the given ratio is used until the content is loaded. After the
content is loaded, the `auto` value is applied, so the intrinsic aspect
ratio of the loaded content is used.

If the element is not a replaced element, then the given `ratio` is
used.

### Values

[`auto`](#auto)

:   [Replaced elements](replaced_element.md) with an intrinsic aspect ratio
    use *that* aspect ratio, otherwise the box has no preferred aspect
    ratio. Size calculations involving intrinsic aspect ratio always
    work with the content box dimensions.

[`<ratio>`](ratio.md)

:   The box\'s preferred aspect ratio is the specified ratio of `width`
    / `height`. If `height` and the preceding slash character are
    omitted, `height` defaults to `1`. Size calculations involving
    preferred aspect ratio work with the dimensions of the box specified
    by `box-sizing`.

Formal definition
-----------------

  ---------------------------------- -------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         all elements except inline boxes and internal ruby or table boxes
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified
  Animation type                     by computed value type
  ---------------------------------- -------------------------------------------------------------------

Formal syntax
-------------

```
aspect-ratio = 
  auto     ||
  <ratio>  

<ratio> = 
  <number [0,∞]> [ / <number [0,∞]> ]?  
```

Examples
--------

### Exploring aspect-ratio effects with fixed width

In this example, the width of the `<div>` elements has been set to
`100px` and height to `auto`. Since the width value is fixed here, the
`aspect-ratio` property affects only the height of the `<div>` elements
to maintain the specified width-to-height ratio.

[css]

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

### Fallback to natural aspect ratio

In this example we are using two`<img>` elements. The first element does
not have its `src` attribute set to an image file.

[html]

```html
<img src="" /> <img src="plumeria.jpg" />
```

The following code sets `3/2` as the preferred aspect ratio and `auto`
as a fallback.

[css]

```css
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;

  aspect-ratio: 3/2 auto;
}
```

Note how the first image without replaced content keeps the `3/2` aspect
ratio, while the second image after the content is loaded uses the
image\'s natural aspect ratio.

Specifications
--------------

  -----------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------

  [CSS Box Sizing Module Level 4\
  [\#
  aspect-ratio]](https://drafts.csswg.org/css-sizing-4/#aspect-ratio)

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

`aspect-ratio`

88

88

89

No

74

15

88

88

89

63

15

15.0

See also
--------

- [Image aspect-ratio: preventing
    jank](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Designing an aspect ratio unit for
    CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important
    Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/aspect-ratio.md)
aspect-ratio
============

The `aspect-ratio`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [](@media.md#media_features) can be used to test the aspect ratio
of the
[viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport).

Syntax
------

The `aspect-ratio` feature is specified as a [`<ratio>`](ratio.md) value
representing the width-to-height aspect ratio of the viewport. It is a
range feature, meaning you can also use the prefixed `min-aspect-ratio`
and `max-aspect-ratio` variants to query minimum and maximum values,
respectively.

Examples
--------

The example below is contained in an
[`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe),
which creates its own viewport. Resize the `<iframe>` to see
`aspect-ratio` in action.

Note that, when none of the media query conditions are true, the
background will turn white because none of the below rules will be
applied to the `<div>` inside the `<iframe>`. See if you can find which
width and height values trigger this!

### HTML

[html]

```html
<div id="inner">
  Watch this element as you resize your viewport's width and height.
</div>
```

### CSS

```css
[css]

```css

/*Minimum aspect ratio */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue*/
  }
}

/*Maximum aspect ratio */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* cyan*/
  }
}

/*Exact aspect ratio, put it at the bottom to avoid override*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /*red*/
  }
}

```

### Result

Specifications
--------------

  -----------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------

  [Media Queries Level 4\
  [\#
  aspect-ratio]](https://drafts.csswg.org/mediaqueries/#aspect-ratio)

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

`aspect-ratio`

3

12

3.5

9

10

5

≤37

18

4

10.1

4.2

1.0

See also
--------

- [Using Media Queries](using_media_queries.md)
- [\@media](@media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio>
