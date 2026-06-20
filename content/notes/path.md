path()
======

The `path()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) accepts an SVG path string, and is used in
[CSS Shapes](css_shapes.md) and CSS Motion Path to enable a shape to be
drawn.

Try it
------

Syntax
------

When used in [`offset-path`](offset-path.md) or `d`:

[css]

```css
path(<string>)
```

When used in [`clip-path`](clip-path.md):

[css]

```css
path([<'fill-rule'>,]?<string>)
```

### Parameters

[`<'fill-rule'>`](#fill-rule)

:   The filling rule for the interior of the path. Possible values are
    `nonzero` or `evenodd`. The default value is `nonzero`. See
    [fill-rule](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule)
    for more details.

[`<string>`](#string)

:   The string is a [data
    string](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
    for defining an [SVG
    path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path).

Examples
--------

### Examples of correct values for path()

[css]

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Use as the value of offset-path

The `path()` function is used to create a path for the item to travel
round. Changing any of the values will cause the path to not neatly run
round the circle.

### Modify the value of the SVG path d attribute

The `path()` can be used to modify the value of the SVG [`d`
attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d),
which can also be set to `none` in your CSS.

The \"V\" symbol will flip vertically when you hover over it, if `d` is
supported as a CSS property.

#### CSS

[css]

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

[html]

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### Result

Specifications
--------------

  ---------------------------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------------------------

  [CSS Shapes Module Level 1\
  [\#
  funcdef-basic-shape-path]](https://drafts.csswg.org/css-shapes/#funcdef-basic-shape-path)

  ---------------------------------------------------------------------------------------------------

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

`path`

88

46Only supported on the `offset-path` property.

88

79Only supported on the `offset-path` property.

97Only supported on the `d` SVG presentation attribute and the
`clip-path` and `offset-path` CSS properties. Not supported on the
`shape-outside` CSS property.

71Only supported on the `clip-path` and `offset-path` properties.

63Only supported on the `offset-path` property.

No

74

33Only supported on the `offset-path` property.

No

88

46Only supported on the `offset-path` property.

88

46Only supported on the `offset-path` property.

97Only supported on the `d` SVG presentation attribute and the
`clip-path` and `offset-path` CSS properties. Not supported on the
`shape-outside` CSS property.

79Only supported on the `clip-path` and `offset-path` properties.

63Only supported on the `offset-path` property.

63

33Only supported on the `offset-path` property.

No

15.0

5.0Only supported on the `offset-path` property.

See also
--------

- [`<shape-outside>`](shape-outside.md)
- [CSS Shapes](css_shapes.md)
- [Overview of CSS Shapes](overview_of_shapes.md)
- [SVG Path Syntax Illustrated
    Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/path>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyevent/path.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Node](../node-class)\> path

::: {.features}
inherited
:::
:::

This event\'s path, taking into account shadow DOM.

Other resources
---------------

-   [Shadow DOM extensions to
    Event](http://w3c.github.io/webcomponents/spec/shadow/#extensions-to-event)
    from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
// https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html#extensions-to-event
List<Node> get path => wrapped.path as List<Node>;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uri/path.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[String](../string-class) path
:::

The path component.

The path is the actual substring of the URI representing the path, and
it is encoded where necessary. To get direct access to the decoded path,
use [pathSegments](pathsegments).

The path value is the empty string if there is no path component.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystemevent/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) path

::: {.features}
final
:::
:::

The path that triggered the event.

Depending on the platform and the
[FileSystemEntity](../filesystementity-class), the path may be relative.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEvent/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystemexception/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? path

::: {.features}
final
:::
:::

The file system path on which the error occurred.

Can be `null` if the exception does not relate directly to a file system
path.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String? path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemException/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/event/path.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[EventTarget](../eventtarget-class)\>
path
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<EventTarget> get path =>
    JS<bool>('bool', '!!#.composedPath', this) ? composedPath() : [];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Event/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/cookie/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? path

::: {.features}
read / write
:::
:::

The path within the [domain](domain) that the cookie applies to.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Cookie/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/randomaccessfile/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) path
:::

The path of the file underlying this random access file.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RandomAccessFile/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/directory/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) path

::: {.features}
override
:::
:::

Gets the path of this directory.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/file/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) path

::: {.features}
override
:::
:::

Get the path of the file.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/path.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/path.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

path property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) path
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get path;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/path.html>
:::
