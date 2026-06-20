Box alignment in grid layout
============================

CSS Grid Layout implements the specification [Box Alignment Level
3](https://drafts.csswg.org/css-align/) which is the same standard
[flexbox](css_flexible_box_layout.md) uses for aligning items in its
flex container. This specification details how alignment should work in
all the different layout methods. Layout methods will conform to the
specification where possible and implement individual behavior based on
their differences (features and constraints). While the specification
currently specifies alignment details for all layout methods, browsers
have not fully implemented all of the specification; however, the CSS
Grid Layout method has been widely adopted.

This guide presents demonstrations of how box alignment in grid layout
works. You will see many similarities in how these properties and values
work in flexbox. Due to grid being two-dimensional and flexbox
one-dimensional there are some small differences that you should watch
out for. So we will start by looking at the two axes that we deal with
when aligning things in a grid.

The two axes of a grid layout
-----------------------------

When working with grid layout you have two axes available to align
things against -- the *block axis* and the *inline axis*. The block axis
is the axis upon which blocks are laid out in block layout. If you have
two paragraphs on your page they display one below the other, so it is
this direction we describe as the block axis.

The *inline axis* runs across the block axis, it is the direction in
which text in regular inline flow runs.

We are able to align the content inside grid areas, and the grid tracks
themselves on these two axes.

Aligning items on the Block Axis
--------------------------------

The [`align-self`](align-self.md) and [`align-items`](align-items.md)
properties control alignment on the block axis. When we use these
properties, we are changing the alignment of the item within the grid
area you have placed it.

### Using align-items

In the following example, I have four grid areas within my grid. I can
use the [`align-items`](align-items.md) property on the grid container,
to align the items using one of the following values:

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

Keep in mind that once you set `align-items: start`, the height of each
child `<div>` will be determined by the contents of the `<div>`. This is
in contrast to omitting [`align-items`](align-items.md) completely, in
which case the height of each `<div>` stretches to fill its grid area.

The [`align-items`](align-items.md) property sets the
[`align-self`](align-self.md) property for all of the child grid items.
This means that you can set the property individually, by using
`align-self` on a grid item.

### Using align-self

In this next example, I am using the `align-self` property, to
demonstrate the different alignment values. The first area, is showing
the default behavior of `align-self`, which is to stretch. The second
item, has an `align-self` value of `start`, the third `end` and the
fourth `center`.

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

### Items with an intrinsic aspect ratio

The specification details that the default behavior in
[`align-self`](align-self.md) is to stretch, except for items which have
an intrinsic aspect ratio, in this case they behave as `start`. The
reason for this, is that if items with an aspect ratio are set to
stretch, this default would distort them.

This behavior has now been clarified in the specification, with browsers
yet to implement the correct behavior. Until that happens, you can
ensure that items do not stretch, such as images, which are direct
children of the grid, by setting [`align-self`](align-self.md) and
[`justify-self`](justify-self.md) to start. This will mimic the correct
behavior once implemented.

Justifying Items on the Inline Axis
-----------------------------------

As [`align-items`](align-items.md) and [`align-self`](align-self.md)
deal with the alignment of items on the block axis,
[`justify-items`](justify-items.md) and
[`justify-self`](justify-self.md) do the same job on the inline axis.
The values you can choose from are the same as for `align-self`.

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

You can see the same example as used for
[`align-items`](align-items.md), below. This time we are applying the
[`justify-self`](justify-self.md) property.

Once again the default is `stretch`, other than for items with an
intrinsic aspect ratio. This means that by default, grid items will
cover their grid area, unless you change that by setting alignment. The
first item in the example demonstrates this default alignment:

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  justify-self: start;
}
.item3 {
  grid-area: c;
  justify-self: end;
}
.item4 {
  grid-area: d;
  justify-self: center;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

As with [`align-self`](align-self.md) and
[`align-items`](align-items.md), you can apply
[`justify-items`](justify-items.md) to the grid container, to set the
[`justify-self`](justify-self.md) value for all items.

The [`justify-self`](justify-self.md) and
[`justify-items`](justify-items.md) properties are not implemented in
flexbox. This is due to the one-dimensional nature of
[flexbox](css_flexible_box_layout.md), and that there may be multiple
items along the axis, making it impossible to justify a single item. To
align items along the main, inline axis in flexbox you use the
[`justify-content`](justify-content.md) property.

### Shorthand properties

The [`place-items`](place-items.md) property is shorthand for
[`align-items`](align-items.md) and [`justify-items`](justify-items.md).

The [`place-self`](place-self.md) property is shorthand for
[`align-self`](align-self.md) and [`justify-self`](justify-self.md).

Center an item in the area
--------------------------

By combining the align and justify properties we can easily center an
item inside a grid area.

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
</div>
```

Aligning the grid tracks on the block axis
------------------------------------------

If you have a situation where your grid tracks use an area that is
smaller than the grid container, then you can align the grid tracks
themselves, inside that container. Once again, this operates on the
block and inline axes, with [`align-content`](align-content.md) aligning
tracks on the block axis, and [`justify-content`](justify-content.md)
performing alignment on the inline axis. The
[`place-content`](place-content.md) property is shorthand for
[`align-content`](align-content.md) and
[`justify-content`](justify-content.md). The values for
[`align-content`](align-content.md),
[`justify-content`](justify-content.md) and
[`place-content`](place-content.md) are:

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`

In the below example I have a grid container of 500 pixels by 500
pixels. I have defined 3 row and column tracks each of 100 pixels with a
10 pixel gutter. This means that there is space inside the grid
container both in the block and inline directions.

The `align-content` property is applied to the grid container as it
works on the entire grid.

### Default alignment

The default behavior in grid layout is `start`, which is why our grid
tracks are in the top left corner of the grid, aligned against the start
grid lines:

[css]

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

### Setting align-content: end

If I add `align-content` to my container, with a value of `end`, the
tracks all move to the end line of the grid container in the block
dimension:

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: end;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

### Setting align-content: space-between

We can also use values for this property that you may be familiar with
from flexbox; the space distribution values of `space-between`,
`space-around` and `space-evenly`. If we update
[`align-content`](align-content.md) to `space-between`, you can see how
the elements on our grid space out:

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

It is worth noting, that using these space distribution values may cause
items on your grid to become larger. If an item spans more than one grid
track, as further space is added between the tracks, that item needs to
become large to absorb the space. We\'re always working in a strict
grid. Therefore, if you decide to use these values, ensure that the
content of your tracks can cope with the extra space, or that you have
used alignment properties on the items, to cause them to move to the
start rather than stretch.

In the below image I have placed the grid with `align-content`, with a
value of `start` alongside the grid when `align-content` has a value of
`space-between`. You can see how items 1 and 2, which span two row
tracks have taken on extra height as they gain the additional space
added to the gap between those two tracks:

Justifying the grid tracks on the inline axis
---------------------------------------------

On the inline axis, we can use [`justify-content`](justify-content.md)
to perform the same type of alignment that we used
[`align-content`](align-content.md) for in the block axis.

Using the same example, I am setting
[`justify-content`](justify-content.md) to `space-around`. This once
again causes tracks which span more than one column track to gain extra
space:

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
  justify-content: space-around;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

Alignment and auto margins
--------------------------

Another way to align items inside their area is to use auto margins. If
you have ever centered your layout in the viewport, by setting the right
and left margin of the container block to `auto`, you know that an auto
margin absorbs all of the available space. By setting the margin to
`auto` on both sides, it pushes the block into the middle as both
margins attempt to take all of the space.

In this next example, I have given item 1 a left margin of `auto`. You
can see how the content is now pushed over to the right side of the
area, as the auto margin takes up remaining space, after room for the
content of that item has been assigned:

[css]

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
  margin-left: auto;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

[html]

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

You can see how the item is aligned by using the [Firefox Grid
Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html):

Alignment and Writing Modes
---------------------------

In all of these examples I have been working in English, which is a
left-to-right language. This means that our start lines are top and left
of our grid when thinking in physical directions.

CSS Grid Layout, and the Box Alignment specification are designed to
work with writing modes in CSS. This means that if you are working in a
right to left language, such as Arabic, the start of the grid would be
the top and right, so the default of `justify-content: start` would be
for grid tracks to start on the right-hand side of the grid.

Setting auto margins, using `margin-right` or `margin-left` however, or
absolutely positioning items using the `top`, `right`, `bottom` and
`left` offsets would not honor writing modes. In the next guide, we will
look further into this interaction between CSS grid layout, box
alignment and writing modes. This will be important to understand, if
you develop sites that are then displayed in multiple languages, or if
you want to mix languages or writing modes in a design.

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/css_box_alignment/box_alignment_in_grid_layout.md)
Box alignment in grid layout
============================

The [box alignment](css_box_alignment.md) specification details how
alignment works in various layout methods. On this page we explore how
box alignment works in the context of [](css_grid_layout.md).

As this page aims to detail things which are specific to CSS Grid Layout
and Box Alignment, it should be read in conjunction with the main [](css_box_alignment.md) page which details the common features
of box alignment across layout methods.

Basic example
-------------

In this example using grid layout, there is extra space in the grid
container after laying out the fixed width tracks on the inline (main)
axis. This space is distributed using `justify-content`. On the block
(cross) axis the alignment of the items inside their grid areas is
controlled with `align-items`. The first item overrides the
`align-items` value set on the group by setting `align-self` to
`center`.

Grid axes
---------

As a two-dimensional layout method, when working with grid layout we
always have two axes on which to align our items. We have access to all
of the box alignment properties to help us achieve this.

The inline axis is the axis that corresponds to the direction that words
in a sentence would run in the writing mode used. Therefore, in a
horizontal language such as English or Arabic the inline direction runs
horizontally. Should you be in a vertical writing mode the inline axis
will run vertically.

To align things on the inline axis you use the properties that start
with `justify-`, [`justify-content`](justify-content.md),
[`justify-items`](justify-items.md) and
[`justify-self`](justify-self.md).

The block axis crosses the inline axis in the direction that blocks are
displayed down the page --- for example paragraphs in English are
displayed one below the other vertically. This, therefore is the block
dimension.

To align things on the block axis you use the properties that start with
`align-`, [`align-content`](align-content.md),
[`align-items`](align-items.md) and [`align-self`](align-self.md).

Self alignment
--------------

- [`justify-self`](justify-self.md)
- [`align-self`](align-self.md)
- [`place-self`](place-self.md)
- [`justify-items`](justify-items.md)
- [`align-items`](align-items.md)
- [`place-items`](place-items.md)

These properties deal with aligning the item inside the grid area it is
placed into. The properties `align-items` and `justify-items` are
applied to the grid container and set the `align-self` and
`justify-self` properties as a group. This means that you can set
alignment for all of your grid Items at once, then override any items
that need a different alignment by applying the `align-self` or
`justify-self` property to the rules for the individual grid Items.

The initial value for `align-self` and `justify-self` is `stretch` so
the item will stretch over the entire grid area. The exception to this
rule is where the item has an intrinsic aspect ratio, for example an
image. In this case the item will be aligned to `start` in both
dimensions in order that the image is not distorted.

Content alignment
-----------------

- [`justify-content`](justify-content.md)
- [`align-content`](align-content.md)
- [`place-content`](place-content.md)

These properties deal with aligning the tracks of the grid when there is
extra space to distribute. This scenario will occur if the tracks that
you have defined total less than the total width of the grid container.

Gap and legacy grid-gap properties
----------------------------------

- [`row-gap`](row-gap.md)
- [`column-gap`](column-gap.md)
- [`gap`](gap.md)

The Grid specification originally contained the definition for the
properties [`grid-row-gap`](row-gap.md),
[`grid-column-gap`](column-gap.md) and [`grid-gap`](gap.md). These have
since been moved into the Box Alignment specification and renamed to
[`row-gap`](row-gap.md), [`column-gap`](column-gap.md), and
[`gap`](gap.md). This allows them to be used for other layout methods
where a gap between items makes sense.

The updated properties have not yet been implemented in all browsers.
Therefore, to use the gap properties in grid layout, you should use the
`grid-row-gap`, `grid-column-gap` and `grid-gap` versions to ensure full
compatibility. You could double up the properties and use both as you
would for vendor prefixes.

Reference
---------

### CSS Properties

- [`justify-content`](justify-content.md)
- [`align-content`](align-content.md)
- [`place-content`](place-content.md)
- [`justify-items`](justify-items.md)
- [`align-items`](align-items.md)
- [`place-items`](place-items.md)
- [`justify-self`](justify-self.md)
- [`align-self`](align-self.md)
- [`place-self`](place-self.md)
- [`row-gap`](row-gap.md)
- [`column-gap`](column-gap.md)
- [`gap`](gap.md)

### Glossary Entries

- [Cross
    Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis)
- [Main
    Axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis)

Guides
------

- [](_Resources/Markup%20And%20Styling/css/css_grid_layout/box_alignment_in_grid_layout.md)

External Resources
------------------

- [CSS Grid, Flexbox and Box
    Alignment](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Thoughts on partial implementations of Box
    Alignment](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout>
