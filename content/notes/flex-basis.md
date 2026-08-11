# flex-basis

## Baseline: [Widely supported]

Baseline is determined by this web feature being supported on the
current and the previous major versions of major browsers.

- [Learn
  more](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/)
- [See full compatibility](#browser_compatibility)

The `flex-basis` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property sets the initial main size of a flex item.
It sets the size of
the content box unless otherwise set with [`box-sizing`](box-sizing.md).

## Try it

In this example, the [`flex-grow`](flex-grow.md) and
[`flex-shrink`](flex-shrink.md) properties are both set to `1` on all three
items, indicating that the flex item can grow and shrink from the
initial `flex-basis`.

The demo then changes the `flex-basis` on the first item. It will then
grow and shrink from that flex-basis. This means that, for example, when
the `flex-basis` of the first
item is `200px`, it will start out at
200px but then shrink to fit the space available with the other items
being at least `min-content` sized.

The image below shows how the Firefox [Flexbox Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
helps you understand the size items become:

![The Firefox Flexbox Inspector showing the size of the item once it has
shrunk.](/images/wiki/AerG77DInhpxwAAAAB%0AJRU5ErkJggg%3D%3D)

**Note:** In case both `flex-basis` (other than `auto`) and `width` (or
`height` in case of `flex-direction: column`) are set for an element,
`flex-basis` has priority.

## Syntax

[css]

```css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item's content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

The `flex-basis` property is specified as either the keyword `content`

or a `<'width'>`.

### Values

[`<'width'>`](#width)

: Any of the following units:

    -   [`<length>`](length) sets an absolute value
    -   [`<percentage>`](percentage) sets a percentage of the width or
        height of a containing block\'s content area
    -   `auto` uses the value of the
        [width](https://drafts.csswg.org/css2/#the-width-property) in
        horizontal writing mode, and the value of the
        [height](https://drafts.csswg.org/css2/#the-height-property) in

     vertical writing mode; when the corresponding value is also
        `auto`, the `content` value is used instead
    -   `max-content` sets the intrinsic preferred width
    -   `min-content` sets the intrinsic minimum width
    -   `fit-content` sets the maximum possible size of a containing
        block\'s content area, bounded by the `min-content` and
        `max-content` values, and calculated based on the content of the
        current element

[`content`](#content)

: Indicates aut
omatic sizing, based on the flex item\'s content.

    **Note:** This value was not present in the initial release of
    Flexible Box Layout, and thus some older implementations will not
    support it. The equivalent effect can be had by using `auto`
    together with a main size
    ([width](https://drafts.csswg.org/css2/#the-width-property) or
    [height](https://drafts.csswg.org/css2/#the-height-property)) of
    `auto`.

    -   Originally, `flex-basis:auto` meant \"look at my `width` or

        `height` property\".
    -   Then, `flex-basis:auto` was changed to mean automatic sizing,
        and \"main-size\" was introduced as the \"look at my `width` or
        `height` property\" keyword. It was implemented in [Firefox bug
        1032922](https://bugzil.la/1032922).
    -   Then, that change was reverted in [Firefox bug
        1093316](https://bugzil.la/1093316), so `auto` once again means
        \"look at my `width` or `height` property\"; and a new `content`
        keyw

ord is being introduced to trigger automatic sizing.
([Firefox bug 1105111](https://bugzil.la/1105111) covers adding
that keyword).

## Formal definition

---

[Initial value](initial_value.md) `auto`
Applies to flex items, including in-flow pseudo-elements
[Inherited](inheritance.md) no
Percentages  
 refer to the flex container\'s inner main size
[Computed value](computed_value.md) as specified, but with relative lengths converted into absolute lengths
Animation type a [length](length.md#interpolation), [percentage](percentage.md#interpolation) or calc();

---

## Formal syntax

```
flex-basis =
  content    |
  <'width
'>
```

## Examples

### Setting flex item initial sizes

#### HTML

[html]

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

[css]

```css
.container {
  font-famil
y: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content:
 "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Results

## Specifications

---

Specification

-

---

[CSS Flexible Box Layout Module Level 1\
 [\#
flex-basis-property]](https://drafts.csswg.org/css-flexbox/#flex-basis-property)

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

Opera And
roid

Safari on IOS

Samsung Internet

`flex-basis`

2922

1212

49

22Since Firefox 28, multi-line flexbox is supported.

11When a non-`auto` `flex-basis` is specified, Internet Explorer 10 and
11 always uses a `content-box` box model to calculate the size of a flex
item, even if
[`box-sizing: border-box`](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
is applied to the element. See [Flexbug
\#7](https://github.com/philipwalton/flexbugs#7-flex-basis-doesnt-account-for-box-sizingborder-b
ox)
for more info.

1512.1

97

≤374.4

2925

49

22Since Firefox 28, multi-line flexbox is supported.

1412.1

97

2.01.5

`auto`

22

12

22

11

12.1

97

4.4

25

22

12.1

97

1.5

`content`

94

9412--79

61

No

80

15.4

94

94

61

66

15.4

17.0

`fit-content`

94

94

9422

No

80

16

94

94

9422

66

16

17.0

`max-content`

94

94

6622

No

80

16

94

94

6622

66

16

17.0

`min-content`

94

94

6622

No

80

16

94

94

6622

66

16

17.0

## See also

- CSS Flexbox Gui
  de: _[](basic_concepts_of_flexbox.md)_
- CSS Flexbox Guide: _[](controlling_ratios_of_flex_items_along_the_main_axis.md)_
- [`width`](_Resources/Markup%20And%20Styling/css/width.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis>
