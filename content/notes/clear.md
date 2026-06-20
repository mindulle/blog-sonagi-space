clear
=====

The `clear` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property sets whether an element must be moved below (cleared)
[floating](float.md) elements that precede it. The `clear` property applies
to floating and non-floating elements.

Try it
------

When applied to non-floating blocks, it moves the [](introduction_to_the_css_box_model.md#border_area) of
the element down until it is below the [](introduction_to_the_css_box_model.md#margin_area) of
all relevant floats. The non-floated block\'s top margin collapses.

Vertical margins between two floated elements on the other hand will not
collapse. When applied to floating elements, the margin edge of the
bottom element is moved below the margin edge of all relevant floats.
This affects the position of later floats, since later floats cannot be
positioned higher than earlier ones.

The floats that are relevant to be cleared are the earlier floats within
the same [block formatting
context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context).

**Note:** If an element contains only floated elements, its height
collapses to nothing. If you want it to always be able to resize, so
that it contains floating elements inside it, set the value of the
element\'s [`display`](display.md) property to
[`flow-root`](display.md#flow-root).

[css]

```css
#container {
  display: flow-root;
}
```

Syntax
------

[css]

```css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### Values

[`none`](#none)

:   Is a keyword indicating that the element is *not* moved down to
    clear past floating elements.

[`left`](#left)

:   Is a keyword indicating that the element is moved down to clear past
    *left* floats.

[`right`](#right)

:   Is a keyword indicating that the element is moved down to clear past
    *right* floats.

[`both`](#both)

:   Is a keyword indicating that the element is moved down to clear past
    *both* left and right floats.

[`inline-start`](#inline-start)

:   Is a keyword indicating that the element is moved down to clear
    floats on *start side of its containing block*, that is the *left*
    floats on ltr scripts and the *right* floats on rtl scripts.

[`inline-end`](#inline-end)

:   Is a keyword indicating that the element is moved down to clear
    floats on *end side of its containing block*, that is the *right*
    floats on ltr scripts and the *left* floats on rtl scripts.

Formal definition
-----------------

  ---------------------------------- ----------------------
  [Initial value](initial_value.md)     `none`
  Applies to                         block-level elements
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified
  Animation type                     discrete
  ---------------------------------- ----------------------

Formal syntax
-------------

```
clear = 
  inline-start  |
  inline-end    |
  block-start   |
  block-end     |
  left          |
  right         |
  top           |
  bottom        |
  none          
```

Examples
--------

### clear: left

#### HTML

[html]

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

[css]

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

### clear: right

#### HTML

[html]

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

[css]

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

### clear: both

#### HTML

[html]

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

[css]

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

Specifications
--------------

  --------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------

  [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification\
  [\# propdef-clear]](https://drafts.csswg.org/css2/#propdef-clear)

[CSS Logical Properties and Values Level 1\
  [\#
  float-clear]](https://drafts.csswg.org/css-logical/#float-clear)
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

`clear`

1

12

1

4

3.5

1

4.4

18

4

10.1

1

1.0

`flow_relative_values`

118

118

55

No

104

15

118

118

55

No

15

No

See also
--------

- [](introduction_to_the_css_box_model.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/clear>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/set/clear.md)
Set.prototype.clear()
=====================

 
The `clear()` method of [`Set`](../set) instances removes all elements
from this set.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
clear()
```




 
### Parameters

 
None.



 
### Return value 

 
None ([`undefined`](../undefined)).



 
Examples
--------


 
### Using the clear() method 

 
 
 
[js]


```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-set.prototype.clear]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.clear)

  ---------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`clear`

38

12

19

25

8

38

19

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [`Set`](../set)
-   [`Set.prototype.delete()`](delete)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/map/clear.md)
Map.prototype.clear()
=====================

 
The `clear()` method of [`Map`](../map) instances removes all elements
from this map.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
clear()
```




 
### Parameters

 
None.



 
### Return value 

 
None ([`undefined`](../undefined)).



 
Examples
--------


 
### Using clear() 

 
 
 
[js]


```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-map.prototype.clear]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.clear)

  ---------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`clear`

38

12

19

25

8

38

19

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [`Map`](../map)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all elements in the queue. The size of the queue becomes zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  var cursor = _sentinel._nextLink!;
  while (true) {
    var entry = cursor._asNonSentinelEntry();
    if (entry == null) break;
    cursor = cursor._nextLink!;
    entry
      .._nextLink = null
      .._previousLink = null
      .._queue = null;
  }
  _sentinel._nextLink = _sentinel;
  _sentinel._previousLink = _sentinel;
  _elementCount = 0;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) clear

::: {.features}
override
:::
:::

Gets the value of \"clear\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get clear => this._clear;
```

::: {#setter .section .multi-line-signature}
void clear=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"clear\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set clear(String? value) {
  _clear = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) clear
:::

Gets the value of \"clear\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get clear => getPropertyValue('clear');
```

::: {#setter .section .multi-line-signature}
void clear=([String](../../dart-core/string-class) value)
:::

Sets the value of \"clear\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set clear(String value) {
  setProperty('clear', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  this.length = 0;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Remove all elements from this linked list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  _modificationCount++;
  if (isEmpty) return;

  E next = _first!;
  do {
    E entry = next;
    next = entry._next!;
    entry._next = entry._previous = entry._list = null;
  } while (!identical(next, _first));

  _first = null;
  _length = 0;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/clear.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all elements in the queue. The size of the queue becomes zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  if (_head != _tail) {
    for (int i = _head; i != _tail; i = (i + 1) & (_table.length - 1)) {
      _table[i] = null;
    }
    _head = _tail = 0;
    _modificationCount++;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  _clear();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  _map.clear();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

Removes all elements from the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  // TODO(sra): Do this without reading the classes.
  modify((s) => s.clear());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() => _clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/clear.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Removes all objects from this list; the length of the list becomes zero.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.clear();
print(numbers.length); // 0
print(numbers); // []
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all elements from the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  removeAll(toList());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
override
:::
:::

Removes all elements from the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  _clear();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/clear.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Removes all entries from the map.

After this, the map is empty.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
planets.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/clear.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Removes all headers.

Some headers have system supplied values which cannot be removed. All
other header values are removed, and header names with not remaining
values are no longer considered present.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw new UnsupportedError("Cannot clear an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/objectstore/clear.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) clear()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future clear() {
  try {
    return _completeRequest(_clear());
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/ObjectStore/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/clear.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Removes all elements from the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.clear(); // {}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/console/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear(

1.  \[[Object](../../dart-core/object-class)? arg\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear([Object? arg]) =>
    _isConsoleDefined ? JS('void', 'window.console.clear(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/bytesbuilder/clear.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Clears the contents of this builder.

The current contents are discarded and this builder becomes empty.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/BytesBuilder/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/clear.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Removes all elements in the queue. The size of the queue becomes zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paymentinstruments/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) clear()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future clear() => promiseToFuture(JS("", "#.clear()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaymentInstruments/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext2/clear.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear(

1.  [int](../../dart-core/int-class) mask

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear(int mask) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext2/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext/clear.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear(

1.  [int](../../dart-core/int-class) mask

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear(int mask) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/stringbuffer/clear.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Clears the string buffer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void clear();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/StringBuffer/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datatransferitemlist/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataTransferItemList/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/fontfaceset/clear.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FontFaceSet/clear.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/pointlist/clear.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

clear method
============

::: {.section .multi-line-signature}
void clear()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void clear() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/PointList/clear.html>
:::
