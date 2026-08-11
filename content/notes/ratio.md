# \<ratio\>

The `<ratio>` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[data type](css_types.md), used for describing [](_Resources/Markup%20And%20Styling/css/@media/aspect-ratio.md) in [media queries](css_media_queries.md),
denotes the proportion between two unitless values.

## Syntax

In Media Queries Level 3, the `<ratio>` data type consisted of a
strictly positive [`<integer>`](integer.md) followed by a forward slash
(\'/\', Unicode `U+002F SOLIDUS`) and a second strictly positive
[`<integer>`](integer.md). Spaces before and after the slash are optional.
The first number represents the width, while the second represents the
height.

In Media Queries Level 4, the `<ratio>` date type is updated to consist
of a strictly positive [`<number>`](number.md) followed by a forward slash
(\'/\', Unicode `U+002F SOLIDUS`) and a second strictly positive
[`<number>`](number.md). In addition a single [`<number>`](number.md) as a
value is allowable.

## Formal syntax

```
<ratio> =
  <number [0,∞]> [ / <number [0,∞]> ]?
```

## Examples

### Use in a media query

[css]

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### Common aspect ratios

![](/images/wiki/6A9Fbtqcp2UvrAAAAAElFTkSuQmCC)

## Specifications

---

Specification

---

[Media Queries Level 4\
 [\# values]](https://drafts.csswg.org/mediaqueries/#values)

---

## Browser compatibility

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

`ratio`

3

12

3.5

9

9.5

5

≤37

18

4

14

4.2

1.0

`number_value`

No

No

70

No

No

No

No

No

No

No

No

No

## See also

- [`aspect-ratio`](_Resources/Markup%20And%20Styling/css/@media/aspect-ratio.md) media feature

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/ratio>

---

## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/dynamicscompressornode/ratio.md)

[dart:web_audio](../../dart-web_audio/dart-web_audio-library){.\_links-link}

# ratio property

::: {#getter .section .multi-line-signature}
[AudioParam](../audioparam-class)? ratio
:::

## Implementation {#source}

```{.language-dart data-language="dart"}
AudioParam? get ratio native;
```

::: {.\_attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/DynamicsCompressorNode/ratio.html>
:::
