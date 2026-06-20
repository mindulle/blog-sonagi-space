orientation
===========

The `orientation`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [](@media.md#media_features) can be used to test the orientation
of the
[viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)
(or the page box, for [paged media](css_paged_media.md)).

**Note:** This feature does not correspond to *device* orientation.
Opening the soft keyboard on many devices in portrait orientation will
cause the viewport to become wider than it is tall, thereby causing the
browser to use landscape styles instead of portrait.

Syntax
------

The `orientation` feature is specified as a keyword value chosen from
the list below.

### Keyword values

[`portrait`](#portrait)

:   The viewport is in a portrait orientation, i.e., the height is
    greater than or equal to the width.

[`landscape`](#landscape)

:   The viewport is in a landscape orientation, i.e., the width is
    greater than the height.

Examples
--------

### Portrait orientation

In this example we have three boxes in the HTML, and use the
`orientation` media feature to switch between a row layout (in
landscape) and a column layout (in portrait).

The example output is embedded in an
[`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
whose height is greater than its width, so the boxes get a column
layout.

#### HTML

[html]

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

[css]

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

#### Result

### Landscape orientation

This example has exactly the same code as the previous example: it has
three boxes in the HTML, and uses the `orientation` media feature to
switch between a row layout (in landscape) and a column layout (in
portrait).

However, in this example, the example output is embedded in an
[`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
whose height is less than its width, so the boxes get a row layout.

#### HTML

[html]

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

[css]

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

Specifications
--------------

  ---------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------

  [Media Queries Level 4\
  [\#
  orientation]](https://drafts.csswg.org/mediaqueries/#orientation)

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

`orientation`

3

12

2

9

10.6

5

≤37

18

4

11

4.2

1.0

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) orientation
:::

Gets the value of \"orientation\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get orientation => getPropertyValue('orientation');
```

::: {#setter .section .multi-line-signature}
void orientation=([String](../../dart-core/string-class) value)
:::

Sets the value of \"orientation\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set orientation(String value) {
  setProperty('orientation', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/accessiblenode/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get orientation native;
```

::: {#setter .section .multi-line-signature}
void orientation=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set orientation(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNode/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/gamepadpose/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[Float32List](../../dart-typed_data/float32list-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32List? get orientation native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GamepadPose/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/vrpose/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[Float32List](../../dart-typed_data/float32list-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32List? get orientation native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VRPose/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/screen/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[ScreenOrientation](../screenorientation-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ScreenOrientation? get orientation native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Screen/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/scrolltimeline/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get orientation native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ScrollTimeline/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/orientation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

orientation property
====================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? orientation
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get orientation native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/orientation.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Orientation.md)

# Orientation

In the context of game development, **Orientation** refers to the aspect or direction in which an object is pointed in a 3D space. To determine an object's orientation in 3D space, we typically use three angles namely: pitch, yaw, and roll collectively known as Euler's angles. **Pitch** is the rotat
ion around the X-axis, **Yaw** around the Y-axis and **Roll** around the Z-axis. Alternatively, orientation can also be represented using a Quaternion. Quaternions have the advantage of avoiding a pro
blem known as Gimbal lock (a loss of one degree of freedom in 3D space), present when using Euler's angles.

Visit the following resources to learn more:

- [@article@Orientation of Character](https://medium.com/@dev.szabo.endre/a-bit-e-of-game-dev-math-01-character-movement-with-vectors-effc862a1e4f)
- [@article@Vector Maths for Game Developers](https://www.gamedeveloper.com/programming/vector-maths-for-game-dev-beginners)


## 관련 로드맵
- [[game-developer|game-developer]]
