\<image\>
=========

The `<image>` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[data type](css_types.md) represents a two-dimensional image.

Syntax
------

The `<image>` data type can be represented with any of the following:

- An image denoted by the [`url()`](url.md) data type
- A [`<gradient>`](gradient.md) data type
- A part of the webpage, defined by the [`element()`](element().md)
    function
- An image, image fragment or solid patch of color, defined by the
    [`image()`](_Resources/Markup%20And%20Styling/css/image/image.md) function
- A blending of two or more images defined by the
    [`cross-fade()`](cross-fade.md) function.
- A selection of images chosen based on resolution defined by the
    [`image-set()`](image-set.md) function.

Description
-----------

CSS can handle the following kinds of images:

- Images with *intrinsic dimensions* (a natural size), like a JPEG,
    PNG, or other [raster
    format](https://en.wikipedia.org/wiki/Raster_graphics).
- Images with *multiple intrinsic dimensions*, existing in multiple
    versions inside a single file, like some .ico formats. (In this
    case, the intrinsic dimensions will be those of the image largest in
    area and the aspect ratio most similar to the containing box.)
- Images with no intrinsic dimensions but with *an intrinsic aspect
    ratio* between its width and height, like an SVG or other [vector
    format](https://en.wikipedia.org/wiki/Vector_graphics).
- Images with *neither intrinsic dimensions, nor an intrinsic aspect
    ratio*, like a CSS gradient.

CSS determines an object\'s *concrete size* using (1) its *intrinsic
dimensions*; (2) its *specified size*, defined by CSS properties like
[`width`](_Resources/Markup%20And%20Styling/css/width.md), [`height`](_Resources/Markup%20And%20Styling/css/height.md), or
[`background-size`](background-size.md); and (3) its *default size*,
determined by the kind of property the image is used with:

  Kind of Object (CSS Property)                                                             Default object size
  ----------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------
  [`background-image`](background-image.md)                                                    The size of the element\'s background positioning area
  [`list-style-image`](list-style-image.md)                                                    The size of a `1em` character
  [`border-image-source`](border-image-source.md)                                              The size of the element\'s border image area
  [`cursor`](cursor.md)                                                                        The browser-defined size matching the usual cursor size on the client\'s system
  [`mask-image`](mask-image.md)                                                                ?
  [`shape-outside`](shape-outside.md)                                                          ?
  [`mask-border-source`](mask-border-source.md)                                                ?
  [`symbols()`](symbols.md) for \@counter-style                                 At risk feature. If supported, the browser-defined size matching the usual cursor size on the client\'s system
  [`content`](content.md) for a pseudo-element ([`::after`](::after)/[`::before`](::before))   A 300px × 150px rectangle

The concrete object size is calculated using the following algorithm:

- If the specified size defines *both the width and the height*, these
    values are used as the concrete object size.
- If the specified size defines *only the width or only the height*,
    the missing value is determined using the intrinsic ratio, if there
    is any, the intrinsic dimensions if the specified value matches, or
    the default object size for that missing value.
- If the specified size defines *neither the width nor the height*,
    the concrete object size is calculated so that it matches the
    intrinsic aspect ratio of the image but without exceeding the
    default object size in any dimension. If the image has no intrinsic
    aspect ratio, the intrinsic aspect ratio of the object it applies to
    is used; if this object has none, the missing width or height are
    taken from the default object size.

**Note:** Not all browsers support every type of image on every
property. See the [browser compatibility
section](#browser_compatibility) for details.

Accessibility concerns
----------------------

Browsers do not provide any special information on background images to
assistive technology. This is important primarily for screen readers, as
a screen reader will not announce its presence and therefore convey
nothing to its users. If the image contains information critical to
understanding the page\'s overall purpose, it is better to describe it
semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%E2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Formal syntax
-------------

```
<image> = 
  <url>       |
  <gradient>  

<url> = 
  url( <string> <url-modifier>* )  |
  src( <string> <url-modifier>* )  
```

Examples
--------

### Valid images

[css]

```css
url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */
linear-gradient(blue, red)  /* A <gradient> */
element(#realid)            /* A part of the webpage, referenced with the element() function,
                               if "realid" is an existing ID on the page */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* A section 16x16 section of <url>, starting from the top, left of the original
                               image as long as arrow.png is a supported image, otherwise a solid
                               red swatch. If language is rtl, the image will be horizontally flipped. */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* cross faded images, with twenty being 20% opaque
                               and eighty being 80% opaque. */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* a selection of images with varying resolutions */
```

### Invalid images

[css]

```css
nourl.jpg            /* An image file must be defined using the url() function. */
url(report.pdf)      /* A file pointed to by the url() function must be an image. */
element(#fakeid)     /* An element ID must be an existing ID on the page. */
image(z.jpg#xy=0,0)  /* The spatial fragment must be written in the format of xywh=#,#,#,# */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* every image in an image set must have a different resolutions */
```

Specifications
--------------

  ---------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------

  [CSS Images Module Level 3\
  [\#
  image-values]](https://drafts.csswg.org/css-images/#image-values)

  ---------------------------------------------------------------------------

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

`image`

1

12

1

10

2

1

4.4

18

4

11

1

1.0

`cross-fade`

17\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

79\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

No

No

15\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

10Supports the original dual-image with percentage implementation only.

5.1Supports the original dual-image with percentage implementation only.

4.4\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

18\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

No

14\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

9.3Support for the original dual-image with percentage implementation
only.

5Supports the original dual-image with percentage implementation only.

1.0\[\"Supports the original dual-image with percentage implementation
only.\", \"See [bug 614906](https://crbug.com/614906) for supporting the
unprefixed `cross-fade()` function.\"\]

`element`

No

No

57

29--57`-moz-element()` is limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image),
[`background`](https://developer.mozilla.org/docs/Web/CSS/background),
[`border-image`](https://developer.mozilla.org/docs/Web/CSS/border-image)
and
[`border-image-source`](https://developer.mozilla.org/docs/Web/CSS/border-image-source).

4--29`-moz-element()` is limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image)
and
[`background`](https://developer.mozilla.org/docs/Web/CSS/background).

No

No

No

No

No

60

29--60`-moz-element()` is limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image),
[`background`](https://developer.mozilla.org/docs/Web/CSS/background),
[`border-image`](https://developer.mozilla.org/docs/Web/CSS/border-image)
and
[`border-image-source`](https://developer.mozilla.org/docs/Web/CSS/border-image-source).

4--29`-moz-element()` is limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image)
and
[`background`](https://developer.mozilla.org/docs/Web/CSS/background).

No

No

No

`gradient`

2610

12

3.6Gradients are limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image),
[`border-image`](https://developer.mozilla.org/docs/Web/CSS/border-image),
and
[`mask-image`](https://developer.mozilla.org/docs/Web/CSS/mask-image).

10

1512.111--15

75.1

≤37≤37

2618

4Gradients are limited to
[`background-image`](https://developer.mozilla.org/docs/Web/CSS/background-image),
[`border-image`](https://developer.mozilla.org/docs/Web/CSS/border-image),
and
[`mask-image`](https://developer.mozilla.org/docs/Web/CSS/mask-image).

1412.111--14

75

1.51.0

`image`

No

No

No\[\"See [bug 703217](https://bugzil.la/703217).\", \"The
[`-moz-image-rect()`](https://developer.mozilla.org/docs/Web/CSS/-moz-image-rect)
function supports fragments as of Firefox 4.\"\]

No

No

No

No

No

NoThe
[`-moz-image-rect()`](https://developer.mozilla.org/docs/Web/CSS/-moz-image-rect)
function supports fragments as of Firefox 4.

No

No

No

`image-set`

11321

11379

90

88\[\"In `cursor` and `content` properties, gradients are not supported
as arguments to `image-set()`. See [bug
1696314](https://bugzil.la/1696314).\", \"Before Firefox 89, the
`type()` function is not supported as an argument to `image-set()`.\"\]

No

9915

14

6Support for `url` images only and `x` is the only supported resolution
unit.

1134.4

11325

90

88\[\"In `cursor` and `content` properties, gradients are not supported
as arguments to `image-set()`. See [bug
1696314](https://bugzil.la/1696314).\", \"Before Firefox 89, the
`type()` function is not supported as an argument to `image-set()`.\"\]

14

14

6Support for `url` images only and `x` is the only supported resolution
unit.

1.5

`paint`

65

79

No

No

52

No

65

65

No

47

No

9.2

See also
--------

- [`<gradient>`](gradient.md)
- [`element()`](element().md) [Experimental]
- [`image()`](_Resources/Markup%20And%20Styling/css/image/image.md)
- [`image-set()`](image-set.md)
- [`cross-fade()`](cross-fade.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/image>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/image/image.md)
image()
=======

The `image()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) defines an [`<image>`](_Resources/Markup%20And%20Styling/css/image.md) in a
similar fashion to the [`url()`](url.md) function, but with added
functionality including specifying the image\'s directionality,
displaying just a part of that image defined by a media fragment, and
specifying a solid color as a fallback in case none of the specified
images are able to be rendered.

**Note:** The CSS `image()` function should not confused with
[`Image()`, the `HTMLImageElement`
constructor](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image).

Syntax
------

```
<image()> = 
  image( <image-tags>? [ <image-src>? , <color>? ]! )  

<image-tags> = 
  ltr  |
  rtl  

<image-src> = 
  <url>     |
  <string>  

<url> = 
  url( <string> <url-modifier>* )  |
  src( <string> <url-modifier>* )  
```

where:

[`image-tags`](#image-tags) [Optional]

:   The directionality of the image, either `ltr` for left-to-right or
    `rtl` for right-to-left.

[`image-src`](#image-src) [Optional]

:   Zero or more [`url()`](url.md)s or [`<string>`](string.md)s
    specifying the image sources, with optional image fragment
    identifiers.

[`color`](#color) [Optional]

:   A color, specifying a solid background color to use as a fallback if
    no `image-src` is found, supported, or declared.

### Bi-directional awareness

The first, optional parameter of the `image()` notation is the
directionality of the image. If included, and the image is used on an
element with opposite directionality, the image will be flipped
horizontally in horizontal writing modes. If the directionality is
omitted, the image won\'t be flipped if the language direction is
changed.

### Image fragments

One key difference between `url()` and `image()` is the ability to add a
media fragment identifier --- a starting point along the x and y axis,
along with a width and height --- onto the image source to display only
a section of the source image. The section of the image defined in the
parameter becomes a standalone image. The syntax looks like so:

[css]

```css
background-image: image("myimage.webp#xywh=0,20,40,60");
```

The background image of the element will be the portion of the image
*myImage.webp* that starts at the coordinate 0px, 20px (the top
left-hand corner) and is 40px wide and 60px tall.

The `#xywh=#,#,#,#` media fragment syntax takes four comma separated
numeric values. The first two represent the X and Y coordinates for the
starting point of the box that will be created. The third value is the
width of the box, and the last value is the height. By default, these
are pixel values. The [spacial dimension definition in the media
specification](https://www.w3.org/TR/media-frags/#naming-space)
indicates that percentages will be supported as well:

[css]

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

The image fragments can be used in `url()` notation as well. The
`#xywh=#,#,#,#` media fragment syntax is \'backwards compatible\' in
that a media fragment will be ignored if not understood, and won\'t
break the source call when used with `url()`. If the browser doesn\'t
understand the media fragments notation, it ignores the fragment,
displaying the entire image.

Browsers that understand `image()` also understand the fragment
notation. Therefore, if the fragment is not understood within `image()`,
the image will be considered invalid.

### Color fallback

If a color is specified in `image()` along with your image sources, it
acts as a fallback if the images are invalid and do not appear. In such
cases, the `image()` function renders as if no image were included,
generating a solid-color image. As a use case, consider a dark image
being used as a background for some white text. A dark background color
may be needed for foreground text to be legible, if the image does not
render.

Omitting image sources while including a color is valid and creates a
color swatch. Unlike declaring a
[`background-color`](background-color.md), which is placed under or
behind all the background images, this can be used to put (generally
semi-transparent) colors over other images.

The size of the color swatch can be set with the
[`background-size`](background-size.md) property. This is different from
the `background-color`, which sets a color to cover the entire element.
Both `image(color)` and `background-color` placements are impacted by
the [`background-clip`](background-clip.md) and
[`background-origin`](background-origin.md) properties.

Accessibility concerns
----------------------

Browsers do not provide any special information on background images to
assistive technology. This is important primarily for screen readers, as
a screen reader will not announce its presence and therefore convey
nothing to its users. If the image contains information critical to
understanding the page\'s overall purpose, it is better to describe it
semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%E2%80%94_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

This feature can help improve accessibility by providing a fallback
color when an image fails to load. While this can and should be done by
including a background-color on every background image, the CSS
`image()` function allows adding allows only including background colors
should an image fail to load, which means you can add a fall back color
should a transparent PNG/GIF/WebP not load.

Examples
--------

### Directionally-sensitive images

[html]

```html
<ul>
  <li dir="ltr">Bullet is a right facing arrow on the left</li>
  <li dir="rtl">Bullet is the same arrow, flipped to point left.</li>
</ul>
```

[css]

```css
ul {
  list-style-image: image(ltr "rightarrow.png");
}
```

In the left-to-right list items --- those with `dir="ltr"` set on the
element itself or inheriting the directionality from an ancestor or
default value for the page --- the image will be used as-is. List items
with `dir="rtl"` set on the `<li>` or inheriting the right-to-left
directionality from an ancestor, such as documents set to Arabic or
Hebrew, will have the bullet display on the right, horizontally flipped,
as if `transform: scaleX(-1)` had been set. The text will also be
displayed left-to-right.

### Displaying a section of the background image

[html]

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

[css]

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

When the user hovers over the box, the cursor will change to display the
16x16 px section of the sprite image, starting at x=32 and y=64.

### Putting color on top of a background image

[css]

```css
.quarterlogo {
  background-image: image(rgba(0, 0, 0, 0.25)), url("firefox.png");
  background-size: 25%;
  background-repeat: no-repeat;
}
```

[html]

```html
<div class="quarterlogo">
  If supported, a quarter of this div has a darkened logo
</div>
```

The above will put a semi-transparent black mask over the Firefox logo
background image. Had we used the
[`background-color`](background-color.md) property instead, the color
would have appeared behind the logo image instead of on top of it.
Additionally, the entire container would have had the same background
color. Because we used `image()` along with the
[`background-size`](background-size.md) property (and prevented the
image from repeating with the
[`background-repeat`](background-repeat.md) property, the color swatch
will only cover a quarter of the container.

Specifications
--------------

  ---------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------

  [CSS Images Module Level 4\
  [\#
  image-notation]](https://drafts.csswg.org/css-images-4/#image-notation)

  ---------------------------------------------------------------------------------

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

`image`

No

No

No\[\"See [bug 703217](https://bugzil.la/703217).\", \"The
[`-moz-image-rect()`](https://developer.mozilla.org/docs/Web/CSS/-moz-image-rect)
function supports fragments as of Firefox 4.\"\]

No

No

No

No

No

NoThe
[`-moz-image-rect()`](https://developer.mozilla.org/docs/Web/CSS/-moz-image-rect)
function supports fragments as of Firefox 4.

No

No

No

See also
--------

- [`<image>`](_Resources/Markup%20And%20Styling/css/image.md)
- [`element()`](element().md)
- [`url()`](url.md)
- [`clip-path`](clip-path.md)
- [`-moz-image-rect()`](-moz-image-rect.md)
- [`<gradient>`](gradient.md)
- [`image-set()`](image-set.md)
- [`cross-fade()`](cross-fade.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/image/image>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/image.md)
\<image\>: The Image element
============================

**Deprecated:** This feature is no longer recommended. Though some
browsers might still support it, it may have already been removed from
the relevant web standards, may be in the process of being dropped, or
may only be kept for compatibility purposes. Avoid using it, and update
existing code if possible; see the [compatibility
table](#browser_compatibility) at the bottom of this page to guide your
decision. Be aware that this feature may cease to work at any time.

**Non-standard:** This feature is non-standard and is not on a standards
track. Do not use it on production sites facing the Web: it will not
work for every user. There may also be large incompatibilities between
implementations and the behavior may change in the future.

The `<image>` [HTML](../index) element is an ancient and poorly
supported precursor to the [`<img>`](img) element. **It should not be
used**.

Some browsers will attempt to automatically convert this into an
[`<img>`](img) element, and may succeed if the [`src`](img#src)
attribute is specified as well.

Specifications
--------------

This does not appear to have been part of any formal specification. It
was mentioned in [HTML+ Discussion Document - Dave Raggett, November 8,
1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_21.html) (Section 5.9

- Images), but was not part of the first revision of [HyperText Markup
Language Specification -
2.0](https://datatracker.ietf.org/doc/html/draft-ietf-html-spec-00) in

1994.

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

`image`

1

79

1Before Firefox 22, creating an \<image\> element incorrectly resulted
in an `HTMLSpanElement` object, instead of the expected `HTMLElement`.

No

15

1

4.4

18

4Before Firefox 22, creating an \<image\> element incorrectly resulted
in an `HTMLSpanElement` object, instead of the expected `HTMLElement`.

14

1

1.0

See also
--------

- [`<img>`](img): The correct way to display an image in a document
- [`<picture>`](picture): A more powerful correct way to display an
    image in a document

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/input/image.md)
\<input type=\"image\"\>
========================

[`<input>`](../input) elements of type `image` are used to create
graphical submit buttons, i.e. submit buttons that take the form of an
image rather than text.

Try it
------

Value
-----

`<input type="image">` elements do not accept `value` attributes. The
path to the image to be displayed is specified in the `src` attribute.

Additional attributes
---------------------

In addition to the attributes shared by all [`<input>`](../input)
elements, `image` button inputs support the following attributes.

### alt

The `alt` attribute provides an alternate string to use as the button\'s
label if the image cannot be shown (due to error, a [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)
that cannot or is configured not to show images, or if the user is using
a screen reading device). If provided, it must be a non-empty string
appropriate as a label for the button.

For example, if you have a graphical button that shows an image with an
icon and/or image text \"Login Now\", you should also set the `alt`
attribute to something like `Login Now`.

**Note:** While the `alt` attribute is technically optional, you should
always include one to maximize the usability of your content.

Functionally, the `alt` attribute of the `<input type="image">` element
works just like the [`alt`](../img#alt) attribute on [`<img>`](../img)
elements.

### formaction

A string indicating the URL to which to submit the data. This takes
precedence over the [`action`](../form#action) attribute on the
[`<form>`](../form) element that owns the [`<input>`](../input).

This attribute is also available on [`<input type="submit">`](submit)
and [`<button>`](../button) elements.

### formenctype

A string that identifies the encoding method to use when submitting the
form data to the server. There are three permitted values:

[`application/x-www-form-urlencoded`](#applicationx-www-form-urlencoded)

:   This, the default value, sends the form data as a string after [URL
    encoding](https://en.wikipedia.org/wiki/URL_encoding) the text using
    an algorithm such as
    [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).

[`multipart/form-data`](#multipartform-data)

:   Uses the
    [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
    API to manage the data, allowing for files to be submitted to the
    server. You *must* use this encoding type if your form includes any
    [`<input>`](../input) elements of [`type`](../input#type) `file`
    ([`<input type="file">`](file)).

[`text/plain`](#textplain)

:   Plain text; mostly useful only for debugging, so you can easily see
    the data that\'s to be submitted.

If specified, the value of the `formenctype` attribute overrides the
owning form\'s [`action`](../form#action) attribute.

This attribute is also available on [`<input type="submit">`](submit)
and [`<button>`](../button) elements.

### formmethod

A string indicating the HTTP method to use when submitting the form\'s
data; this value overrides any [`method`](../form#method) attribute
given on the owning form. Permitted values are:

[`get`](#get)

:   A URL is constructed by starting with the URL given by the
    `formaction` or [`action`](../form#action) attribute, appending a
    question mark (\"?\") character, then appending the form\'s data,
    encoded as described by `formenctype` or the form\'s
    [`enctype`](../form#enctype) attribute. This URL is then sent to the
    server using an HTTP
    [`get`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
    request. This method works well for simple forms that contain only
    [ASCII](https://developer.mozilla.org/en-US/docs/Glossary/ASCII)
    characters and have no side effects. This is the default value.

[`post`](#post)

:   The form\'s data is included in the body of the request that is sent
    to the URL given by the `formaction` or [`action`](../form#action)
    attribute using an HTTP
    [`post`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
    request. This method supports complex data and file attachments.

[`dialog`](#dialog)

:   This method is used to indicate that the button closes the dialog
    with which the input is associated, and does not transmit the form
    data at all.

This attribute is also available on [`<input type="submit">`](submit)
and [`<button>`](../button) elements.

### formnovalidate

A Boolean attribute which, if present, specifies that the form should
not be validated before submission to the server. This overrides the
value of the [`novalidate`](../form#novalidate) attribute on the
element\'s owning form.

This attribute is also available on [`<input type="submit">`](submit)
and [`<button>`](../button) elements.

### formtarget

A string which specifies a name or keyword that indicates where to
display the response received after submitting the form. The string must
be the name of a **browsing context** (that is, a tab, window, or
[`<iframe>`](../iframe). A value specified here overrides any target
given by the [`target`](../form#target) attribute on the
[`<form>`](../form) that owns this input.

In addition to the actual names of tabs, windows, or inline frames,
there are a few special keywords that can be used:

[`_self`](#_self)

:   Loads the response into the same browsing context as the one that
    contains the form. This will replace the current document with the
    received data. This is the default value used if none is specified.

[`_blank`](#_blank)

:   Loads the response into a new, unnamed, browsing context. This is
    typically a new tab in the same window as the current document, but
    may differ depending on the configuration of the [user
    agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent).

[`_parent`](#_parent)

:   Loads the response into the parent browsing context of the current
    one. If there is no parent context, this behaves the same as
    `_self`.

[`_top`](#_top)

:   Loads the response into the top-level browsing context; this is the
    browsing context that is the topmost ancestor of the current
    context. If the current context is the topmost context, this behaves
    the same as `_self`.

This attribute is also available on [`<input type="submit">`](submit)
and [`<button>`](../button) elements.

### height

A number specifying the height, in CSS pixels, at which to draw the
image specified by the `src` attribute.

### src

A string specifying the URL of the image file to display to represent
the graphical submit button. When the user interacts with the image, the
input is handled like any other button input.

### width

A number indicating the width at which to draw the image, in CSS pixels.

Obsolete attributes
-------------------

The following attribute was defined by HTML 4 for `image` inputs, but
was not implemented by all browsers and has since been deprecated.

### usemap

If `usemap` is specified, it must be the name of an image map element,
[`<map>`](../map), that defines an image map to use with the image. This
usage is obsolete; you should switch to using the [`<img>`](../img)
element when you want to use image maps.

Using image inputs
------------------

The `<input type="image">` element is a [replaced
element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
(an element whose content isn\'t generated or directly managed by the
CSS layer), behaving in much the same way as a regular [`<img>`](../img)
element, but with the capabilities of a [submit button](submit).

### Essential image input features

Let\'s look at a basic example that includes all the essential features
you\'d need to use (These work exactly the same as they do on the
`<img>` element.):

[html]

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

- The [`src`](../input#src) attribute is used to specify the path to
    the image you want to display in the button.
- The [`alt`](../input#alt) attribute provides alt text for the image,
    so screen reader users can get a better idea of what the button is
    used for. It will also display if the image can\'t be shown for any
    reason (for example if the path is misspelled). If possible, use
    text which matches the label you\'d use if you were using a standard
    submit button.
- The [`width`](../input#width) and [`height`](../input#height)
    attributes are used to specify the width and height the image should
    be shown at, in pixels. The button is the same size as the image; if
    you need the button\'s hit area to be bigger than the image, you
    will need to use CSS (e.g.
    [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)).
    Also, if you specify only one dimension, the other is automatically
    adjusted so that the image maintains its original aspect ratio.

### Overriding default form behaviors

`<input type="image">` elements --- like regular [submit
buttons](submit) --- can accept a number of attributes that override the
default form behavior:

[`formaction`](#formaction_2)

:   The URI of a program that processes the information submitted by the
    input element; overrides the [`action`](../form#action) attribute of
    the element\'s form owner.

[`formenctype`](#formenctype_2)

:   Specifies the type of content that is used to submit the form to the
    server. Possible values are:

    -   `application/x-www-form-urlencoded`: The default value if the
        attribute is not specified.
    -   `text/plain`.

    If this attribute is specified, it overrides the
    [`enctype`](../form#enctype) attribute of the element\'s form owner.

[`formmethod`](#formmethod_2)

:   Specifies the HTTP method that the browser uses to submit the form.
    Possible values are:

    -   `post`: The data from the form is included in the body of the
        form and is sent to the server.
    -   `get`: The data from the form is appended to the `form`
        attribute URI, with a \'?\' as a separator, and the resulting
        URI is sent to the server. Use this method when the form has no
        side effects and contains only ASCII characters.

    If specified, this attribute overrides the
    [`method`](../form#method) attribute of the element\'s form owner.

[`formnovalidate`](#formnovalidate_2)

:   A Boolean attribute specifying that the form is not to be validated
    when it is submitted. If this attribute is specified, it overrides
    the [`novalidate`](../form#novalidate) attribute of the element\'s
    form owner.

[`formtarget`](#formtarget_2)

:   A name or keyword indicating where to display the response that is
    received after submitting the form. This is a name of, or keyword
    for, a *browsing context* (for example, tab, window, or inline
    frame). If this attribute is specified, it overrides the
    [`target`](../form#target) attribute of the element\'s form owner.
    The following keywords have special meanings:

    -   \_`self`: Load the response into the same browsing context as
        the current one. This value is the default if the attribute is
        not specified.
    -   `_blank`: Load the response into a new unnamed browsing context.
    -   `_parent`: Load the response into the parent browsing context of
        the current one. If there is no parent, this option behaves the
        same way as `_self`.
    -   `_top`: Load the response into the top-level browsing context
        (that is, the browsing context that is an ancestor of the
        current one, and has no parent). If there is no parent, this
        option behaves the same as `_self`.

### Using the x and y data points

When you submit a form using a button created with
`<input type="image">`, two extra data points are submitted to the
server automatically by the browser --- `x` and `y`. You can see this in
action in our [X Y coordinates
example](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html).

When you click on the image to submit the form, you\'ll see the data
appended to the URL as parameters, for example `?x=52&y=55`. If the
image input has a [`name`](../input#name) attribute, then keep in mind
that the specified name is prefixed on every attribute, so if the `name`
is `position`, then the returned coordinates would be formatted in the
URL as `?position.x=52&position.y=55`. This, of course, applies to all
other attributes as well.

These are the X and Y coordinates of the image that the mouse clicked on
to submit the form, where (0,0) is the top-left of the image and the
default in case submission happens without a click on the image. These
can be used when the position the image was clicked on is significant,
for example you might have a map that when clicked, sends the
coordinates that were clicked to the server. The server-side code then
works out what location was clicked on, and returns information about
places nearby.

In our above example, we could write server-side code that works out
what color was clicked on by the coordinates submitted, and keeps a
tally of the favorite colors people voted for.

### Adjusting the image\'s position and scaling algorithm

You can use the
[`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
property to adjust the positioning of the image within the `<input>`
element\'s frame, and the
[`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
property to control how the image\'s size is adjusted to fit within the
frame. This allows you to specify a frame for the image using the
`width` and `height` attributes to set aside space in the layout, then
adjust where within that space the image is located and how (or if) it
is scaled to occupy that space.

Examples
--------

### A login form

The following example shows the same button as before, but included in
the context of a typical login form.

#### HTML

[html]

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

And now some simple CSS to make the basic elements sit more neatly:

[css]

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

```

### Adjusting the image position and scaling

In this example, we adapt the previous example to set aside more space
for the image and then adjust the actual image\'s size and positioning
using
[`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
and
[`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).

#### HTML

[html]

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

[css]

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

# image {

  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}

```

Here, `object-position` is configured to draw the image in the top-right
corner of the element, while `object-fit` is set to `contain`, which
indicates that the image should be drawn at the largest size that will
fit within the element\'s box without altering its aspect ratio. Note
the visible grey background of the element still visible in the area not
covered by the image.

Technical summary
-----------------

  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------
  **[Value](#value)**               None --- the `value` attribute should not be specified.
  **Events**                        None.
  **Supported common attributes**   [`alt`](../input#alt), [`src`](../input#src), [`width`](../input#width), [`height`](../input#height), [`formaction`](../input#formaction), [`formenctype`](../input#formenctype), [`formmethod`](../input#formmethod), [`formnovalidate`](../input#formmethod), [`formta
rget`](../input#formtarget)
  **IDL attributes**                None.
  **DOM interface**                 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
  **Methods**                       None.
  **Implicit ARIA Role**            [`button`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------

Specifications
--------------

  ------------------------------------------------------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  image-button-state-(type=image)]](https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image))

  ------------------------------------------------------------------------------------------------------------------------------

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

`image`

1

12

1

Yes

15

1

4.4

18

4

14

1

1.0

See also
--------

- [`<input>`](../input) and the
    [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
    interface which implements it.
- The HTML [`<img>`](../img) element
- Positioning and sizing the image within the `<input>` element\'s
    frame:
    [`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
    and
    [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [Compatibility of CSS
    properties](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/image.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

image property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? image
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get image native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/image.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Image.md)

# Image

The `Image` component is used to display images in a React Native application. It allows you to load and display local as well as remote images, providing essential props and methods for better image handling and customization.

Visit the following resources to learn more:

- [@official@Image](https://reactnative.dev/docs/image)

## 관련 로드맵
- [[React Native|react-native]]
