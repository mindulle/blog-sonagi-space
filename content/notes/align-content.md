# align-content

The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
`align-content` property sets the distribution of space between and
around content items along a [flexbox](css_flexible_box_layout.md)\'s
cross-axis or a [grid](css_grid_layout.md)\'s block axis.

The interactive example below uses Grid Layout to demonstrate some of
the values of this property.

## Try it

This property has no effect on single line flex containers (i.e. ones
with `flex-wrap: nowrap`).

S
yntax

---

[css]

```css
/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: center; /* Pack items around the center */
align-content: start; /* Pack items from the start */
align-content: end; /* Pack items from the end */
align-content: flex-start; /* Pack flex items from the start */
align-content: flex-end; /* Pack flex items from the end */

/* Normal alignment */
align-content: normal;

/* Baseline alignment */
align-content: baseline;

align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between; /* Distribute items evenly
                                 The first item is flush with the start,
                                 the last is flush with the end */
align-content: space-around; /* Distribute items evenly
                                 Items have a half-size space
                                 on either end */
align-content: space-evenly; /* Distribute i
tems evenly
                                 Items have equal space around them */
align-content: stretch; /* Distribute items evenly
                                 Stretch 'auto'-sized items to fit
                                 the container */

/* Overflow alignment */
align-content: safe center;
align-content: unsafe center;

/* Global values */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Values

[`sta
rt`](#start)

: The items are packed flush to each other against the start edge of
the alignment container in the cross axis.

[`end`](#end)

: The items are packed flush to each other against the end edge of the
alignment container in the cross axis.

[`flex-start`](#flex-start)

: The items are packed flush to each other against the edge of the
alignment container depending on the flex container\'s cross-start
side. This only applies to flex layout items. For items that a
re not
children of a flex container, this value is treated like `start`.

[`flex-end`](#flex-end)

: The items are packed flush to each other against the edge of the
alignment container depending on the flex container\'s cross-end
side. This only applies to flex layout items. For items that are not
children of a flex container, this value is treated like `end`.

[`center`](#center)

: The items are packed flush to each other in the center of the
alignment container along
the cross axis.

[`normal`](#normal)

: The items are packed in their default position as if no
`align-content` value was set.

[`baseline`](#baseline), `first baseline`, `last baseline`

: Specifies participation in first- or last-baseline alignment: aligns
the alignment baseline of the box\'s first or last baseline set with
the corresponding baseline in the shared first or last baseline set
of all the boxes in its baseline-sharing group.

    ![the baseline is the line upon

which most letters \"sit\" and below
which descenders extend.](/images/wiki/Dc%2Bf9JCzMI6huasTKYKDGoqEnaeTMoqgCVSzPwjzYDBg9QMRNk0BiNkEHZzxWWNTccvdgPAwAAqcv6HfkvZNgAAAAASUVORK5CYII%3D)

    The fallback alignment for `first baseline` is `start`, the one for
    `last baseline` is `end`.

[`space-between`](#space-between)

: The items are evenly distributed within the alignment container
along the cross axis. The spacing between each pair of adjacent
items is the same. The first item is flush with the start edge of
the alignment container in the cros
s axis, and the last item is
flush with the end edge of the alignment container in the cross
axis.

[`space-around`](#space-around)

: The items are evenly distributed within the alignment container
along the cross axis. The spacing between each pair of adjacent
items is the same. The empty space before the first and after the
last item equals half of the space between each pair of adjacent
items.

[`space-evenly`](#space-evenly)

: The items are evenly distributed wi
thin the alignment container
along the cross axis. The spacing between each pair of adjacent
items, the start edge and the first item, and the end edge and the
last item, are all exactly the same.

[`stretch`](#stretch)

: If the combined size of the items along the cross axis is less than
the size of the alignment container, any `auto`-sized items have
their size increased equally (not proportionally), while still
respecting the constraints imposed by
[`max-height`
](max-height.md)/[`max-width`](max-width.md) (or equivalent
functionality), so that the combined size exactly fills the
alignment container along the cross axis.

[`safe`](#safe)

: Used alongside an alignment keyword. If the chosen keyword means
that the item overflows the alignment container causing data loss,
the item is instead aligned as if the alignment mode were `start`.

[`unsafe`](#unsafe)

: Used alongside an alignment keyword. Regardless of the relative
sizes o
f the item and alignment container and whether overflow which
causes data loss might happen, the given alignment value is honored.

## Formal definition

---

[Initial value](initial_value.md) `normal`
Applies to multi-line flex containers
[Inherited](inheritance.md) no
[Computed value](computed_value.md) as specified
Animation type discrete

---

---

## Formal syntax

```
align-content =
  normal                                   |
  <baseline-position>                      |
  <content-distribution>                   |
  <overflow-position>? <content-position>

<baseline-position> =
  [ first | last ]?  &&
  baseline

<content-distribution> =
  space-between  |
  space-around   |
  space-evenly   |
  stretch

<overflow-position> =
  unsafe  |

safe

<content-position> =
  center      |
  start       |
  end         |
  flex-start  |
  flex-end
```

## Examples

### CSS

[css]

```css
#container {
  height: 200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

[html]

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-content: </label>
  <
select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</opti
on>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value
="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

### Result

## Specifications

---

Specification

---

[CSS Box Alignment Module Level 3\
 [\# align-justify-content]](https://drafts.csswg.org/css-align/#align-justify-c
ontent)

[CSS Flexible Box Layout Module Level 1\
 [\#
align-content-property]](https://drafts.csswg.org/css-flexbox/#align-content-property)

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

`align-content`

2921

1212

4928

11

1615

97

≤374.4

2925

4928

1614

97

2.01.5

`flex_context`

21

12

28

11

15

9

4.4

25

28

14

9

1.5

`grid_context`

57

16

52

No

44

10.1

57

52

52

43

10.3

6.2

## See also

- CSS Flexbox Guide: _[](basic_concepts_of_flexbox.md)_
- CSS Flexbox Guide: _[](aligning_items_in_a_flex_container.md)_
- CSS Grid Guide: _[](_Resources/Markup%20And%20Styling/css/css_grid_layout/box_alignment_in_grid_layout.md)_
- [CSS Box Alignment](css_box_alignment.md)

© 2005--2023 MDN co
ntributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/align-content>
