# border-image-slice

## Baseline: [Widely supported]

Baseline is determined by this web feature being supported on the
current and the previous major versions of major browsers.

- [Learn
  more](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/)
- [See full compatibility](#browser_compatibility)

The `border-image-slice`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property divides
the image s
pecified by [`border-image-source`](border-image-source.md) into
regions. These regions form the components of an element\'s [](border-image.md).

## Try it

The slicing process creates nine regions in total: four corners, four
edges, and a middle region. Four slice lines, set a given distance from
their respective sides, control the size of the regions.

[![The nine regions defined by the border-image or border-image-slice
properties](/images/wiki/k8AAAAASUVORK5CYII%3D)](border-image-slice/border-image-slice.png)

The above diagram illustrates the location of each region.

- Zones 1-4 are corner regions. Each one is used a single time to form
  the corners of the final border image.
- Zones 5-8 are edge regions. These are [](border-image-repeat.md) in the fin
  al border image
  to match the dimensions of the element.
- Zone 9 is the middle region. It is discarded by default, but is used
  like a background image if the keyword `fill` is set.

The [`border-image-repeat`](border-image-repeat.md),
[`border-image-width`](border-image-width.md), and
[`border-image-outset`](border-image-outset.md) properties determine how
these regions are used to form the final border image.

## Syntax

[css]

```css
/* All sides */
border-image-slice: 30%;

/* top
 and bottom | left and right */
border-image-slice: 10% 30%;

/* top | left and right | bottom */
border-image-slice: 30 30% 45;

/* top | right | bottom | left */
border-image-slice: 7 12 14 5;

/* Using the `fill` keyword */
border-image-slice: 10% fill;
border-image-slice: fill 10%;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: revert-layer;
border-image-slice: unset;
```

The `border-image-slice` property may be
specified using one to four
`<number-percentage>` values to represent the position of each image
slice. Negative values are invalid; values greater than their
corresponding dimension are clamped to `100%`.

- When **one** position is specified, it creates all four slices at
  the same distance from their respective sides.
- When **two** positions are specified, the first value creates slices
  measured from the **top and bottom**, the second creates slices
  measured from the **left and r
  ight**.
- When **three** positions are specified, the first value creates a
  slice measured from the **top**, the second creates slices measured
  from the **left and right**, the third creates a slice measured from
  the **bottom**.
- When **four** positions are specified, they create slices measured
  from the **top**, **right**, **bottom**, and **left** in that order
  (clockwise).

The optional `fill` value, if used, can be placed anywhere in the
declaration.

### Values

[`<numbe
r>`](number.md)

: Represents an edge offset in _pixels_ for raster images and
_coordinates_ for vector images. For vector images, the number is
relative to the element\'s size, not the size of the source image,
so percentages are generally preferable in these cases.

[`<percentage>`](percentage.md)

: Represents an edge offset as a percentage of the source image\'s
size: the width of the image for horizontal offsets, the height for
vertical offsets.

[`fill`](#fill)

:  
 Preserves the middle image region and displays it like a background
image, but stacked above the actual [`background`](background.md). Its
width and height are sized to match the top and left image regions,
respectively.

## Formal definition

---

[Initial value](initial_value.
md) `100%`
Applies to all elements, except internal table elements when [`border-collapse`](border-collapse.md) is `collapse`. It also applies to [`::first-letter`](::first-letter).
[Inherited](inheritance.md) no
Percentages refer to the size of the border image
[Computed value](computed_value.md) one to four percentage(s) (as specified) or absolute length(s), plus the keyword `fill` if specified
Animation type  
 by computed value type

---

## Formal syntax

```
border-image-slice =
  [ <number [0,∞]> | <percentage [0,∞]> ]  &&
  fill?
```

## Examples

### Adjustable border width and slice

The following example shows a simple `<div>` with a border
image set on
it. The source image for the borders is as follows:

![nice multi-colored
diamonds](/images/wiki/N391jxz123GPHPXbcY8c99g1A7me1IHQX%2BQAAAABJRU5ErkJggg%3D%3D)

The diamonds are 30px across, therefore setting 30 pixels as the value
for both [`border-width`](border-width.md) and `border-image-slice` will
get you complete and fairly crisp diamonds in your border:

[css]

```css
border-width: 30px;
border-image-slice: 30;
```

These are the default values we have used i
n this example. However, we
have also provided two sliders to allow you to dynamically change the
values of the above two properties, allowing you to appreciate the
effect they have:

`border-image-slice` Changes the size of the image slice sampled for use
in each border and border corner (and the content area, if the `fill`
keyword is used) --- varying this away from 30 causes the border to look
somewhat irregular, but can have some interesting effects.

`border-width`: Changes the width of the
border. The sampled image size
is scaled to fit inside the border, which means that if the width is
bigger than the slice, the image can start to look somewhat pixelated
(unless of course you use an SVG image).

#### HTML

[html]

```html
<div class="wrapper">
  <div></div>
</div>

<ul>
  <li>
    <label for="width">slide to adjust <code>border-width</code></label>
    <input type="range" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </li>
  <li>
    <label
      for="
slice"
      >slide to adjust <code>border-image-slice</code></label
    >
    <input type="range" min="10" max="45" id="slice" />
    <output id="slice-output">30</output>
  </li>
</ul>
```

#### CSS

[css]

```css
.wrapper {
  width: 400px;
  height: 300px;
}

div > div {
  width: 300px;
  height: 200px;
  border-width: 30px;
  border-style: solid;
  border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
  border-image-slice: 30;
  border-image-repeat: round;
}

li {
  display: flex;
  place-content: center;
}
```

#### JavaScript

[js]

```js
const widthSlider = document.getElementById('width');
const sliceSlider = document.getElementById('slice');
const widthOutput = document.getElementById('width-output');
const sliceOutput = document.getElementById('slice-output');
const divElem = document.querySelector('div > div');

widthSlider.addEventListener('input', () => {
  const newValue = `$px`;
  divElem.style.borderWidth = newValue;
  widthOutput.textC;
  ontent = newValue;
});

sliceSlider.addEventListener('input', () => {
  const newValue = sliceSlider.value;
  divElem.style.borderImageSlice = newValue;
  sliceOutput.textContent = newValue;
});
```

#### Result

## Specifications

---

Specification

---

[CSS Backgrounds and Borders Mod
ule Level 3\
 [\#
the-border-image-slice]](https://drafts.csswg.org/css-backgrounds/#the-border-image-slice)

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

`border-image-slice`

15

12

15\[\"Small SVGs are incorrectly
stretched, because percentages in
[`border-image-slice`](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
are computed to integers instead of floats ([bug
1284797](https://bugzil.la/1284797)).\", \"Until Firefox 47, SVGs
without viewport were not sliced correctly ([bug
619500](https://bugzil.la/619500)).\", \"From Firefox 48 until Firefox
49, SVGs without viewport are displayed the same as SVGs with viewport,
but if the slices are not exactly 50%, they are incorrectly stretched
([
bug 1264809](https://bugzil.la/1264809)).\", \"Until Firefox 57, an
issue persisted for SVGs without viewport when
[e10s](https://wiki.mozilla.org/Electrolysis) was disabled ([bug
1290782](https://bugzil.la/1290782)).\"\]

11

15

6

4.44

18

15\[\"Small SVGs are incorrectly stretched, because percentages in
[`border-image-slice`](https://developer.mozilla.org/docs/Web/CSS/border-image-slice)
are computed to integers instead of floats ([bug
1284797](https://bugzil.la/1284797)).\", \"Until Firef
ox 47, SVGs
without viewport were not sliced correctly ([bug
619500](https://bugzil.la/619500)).\", \"From Firefox 48 until Firefox
49, SVGs without viewport are displayed the same as SVGs with viewport,
but if the slices are not exactly 50%, they are incorrectly stretched
([bug 1264809](https://bugzil.la/1264809)).\", \"Until Firefox 57, an
issue persisted for SVGs without viewport when
[e10s](https://wiki.mozilla.org/Electrolysis) was disabled ([bug
1290782](https://bugzil.la/1290782)).\"\]

1
4

6

1.0

## See also

- [](shorthand_properties.md#tricky_edge_cases)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice>
