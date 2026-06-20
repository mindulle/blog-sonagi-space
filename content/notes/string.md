\<string\>
==========

The `<string>` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[data type](css_types.md) represents a sequence of characters. Strings are
used in numerous CSS properties, such as [`content`](content.md),
[`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md), and [`quotes`](quotes.md).

Syntax
------

The `<string>` data type is composed of any number of
[Unicode](https://en.wikipedia.org/wiki/Unicode) characters surrounded
by either double (`"`) or single (`'`) quotes.

Most characters can be represented literally. All characters can also be
represented with their respective [Unicode code
points](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks)
in hexadecimal, in which case they are preceded by a backslash (`\`).
For example, `\22` represents a double quote, `\27` a single quote
(`'`), and `\A9` the copyright symbol (`©`).

Importantly, certain characters which would otherwise be invalid can be
escaped with a backslash. These include double quotes when used inside a
double-quoted string, single quotes when used inside a single-quoted
string, and the backslash itself. For example, `\\` will create a single
backslash.

To output new lines, you must escape them with a line feed character
such as `\A` or `\00000A`. In your code, however, strings can span
multiple lines, in which case each new line must be escaped with a `\`
as the last character of the line.

However, to get new lines, you must also set the
[`white-space`](white-space.md) property to appropriate value.

**Note:** [HTML
entities](https://developer.mozilla.org/en-US/docs/Glossary/Entity)
(such as `&nbsp;` or `&#8212;`) cannot be used in a CSS `<string>`.

Examples
--------

### Examples of valid strings

[css]

```css
/* Simple strings */
"This string is demarcated by double quotes."
'This string is demarcated by single quotes.'

/* Character escaping */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* New line in a string */
"This string has a \Aline break in it."

/* String spanning two lines of code (these two strings will have identical output) */
"A really long \
awesome string"
"A really long awesome string"
```

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\# strings]](https://drafts.csswg.org/css-values/#strings)

  -----------------------------------------------------------------------

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

`string`

1

12

1

3

3.5

1

≤37

18

4

10.1

1

1.0

`unicode_escaped_characters`

1

12

1

6

7

1

≤37

18

4

10.1

1

1.0

See also
--------

- [CSS Units and Values](css_values_and_units.md)
- [CSS Basic Data Types](css_types.md)
- [Introduction to CSS: Values and
    Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/string>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/string.md)
String
======

 
The `String` object is used to represent and manipulate a sequence of
characters.


 
Description
-----------

 
Strings are useful for holding data that can be represented in text
form. Some of the most-used operations on strings are to check their
[`length`](string/length), to build and concatenate them using the [`+`
and `+=` string
operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators),
checking for the existence or location of substrings with the
[`indexOf()`](string/indexof) method, or extracting substrings with the
[`substring()`](string/substring) method.



 
### Creating strings 

 
Strings can be created as primitives, from string literals, or as
objects, using the [`String()`](string/string) constructor:

 
 
[js]


```js
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```


 
 
[js]


```js
const string4 = new String("A String object");
```


String primitives and string objects share many behaviors, but have
other important differences and caveats. See \"[String primitives and
String objects](#string_primitives_and_string_objects)\" below.

String literals can be specified using single or double quotes, which
are treated identically, or using the backtick character [\`].
This last form specifies a [template literal](../template_literals):
with this form you can interpolate expressions. For more information on
the syntax of string literals, see [lexical
grammar](../lexical_grammar#string_literals).



 
### Character access 

 
There are two ways to access an individual character in a string. The
first is the [`charAt()`](string/charat) method:

 
 
[js]


```js
"cat".charAt(1); // gives value "a"
```


The other way is to treat the string as an array-like object, where
individual characters correspond to a numerical index:

 
 
[js]


```js
"cat"[1]; // gives value "a"
```


When using bracket notation for character access, attempting to delete
or assign a value to these properties will not succeed. The properties
involved are neither writable nor configurable. (See
[`Object.defineProperty()`](object/defineproperty) for more
information.)



 
### Comparing strings 

 
Use the [less-than and greater-than
operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
to compare strings:

 
 
[js]


```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
```


Note that all comparison operators, including
[`===`](../operators/strict_equality) and [`==`](../operators/equality),
compare strings case-sensitively. A common way to compare strings
case-insensitively is to convert both to the same case (upper or lower)
before comparing them.

 
 
[js]


```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```


The choice of whether to transform by
[`toUpperCase()`](string/touppercase) or
[`toLowerCase()`](string/tolowercase) is mostly arbitrary, and neither
one is fully robust when extending beyond the Latin alphabet. For
example, the German lowercase letter `ß` and `ss` are both transformed
to `SS` by `toUpperCase()`, while the Turkish letter `ı` would be
falsely reported as unequal to `I` by `toLowerCase()` unless
specifically using
[`toLocaleLowerCase("tr")`](string/tolocalelowercase).

 
 
[js]


```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```


A locale-aware and robust solution for testing case-insensitive equality
is to use the [`Intl.Collator`](intl/collator) API or the string\'s
[`localeCompare()`](string/localecompare) method --- they share the same
interface --- with the
[`sensitivity`](intl/collator/collator#sensitivity) option set to
`"accent"` or `"base"`.

 
 
[js]


```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```


The `localeCompare()` method enables string comparison in a similar
fashion as `strcmp()` --- it allows sorting strings in a locale-aware
manner.



 
### String primitives and String objects 

 
Note that JavaScript distinguishes between `String` objects and
[primitive
string](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
values. (The same is true of [`Boolean`](boolean) and
[`Numbers`](number).)

String literals (denoted by double or single quotes) and strings
returned from `String` calls in a non-constructor context (that is,
called without using the [`new`](../operators/new) keyword) are
primitive strings. In contexts where a method is to be invoked on a
primitive string or a property lookup occurs, JavaScript will
automatically wrap the string primitive and call the method or perform
the property lookup on the wrapper object instead.

 
 
[js]


```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```


 
**Warning:** You should rarely find yourself using `String` as a
constructor.


String primitives and `String` objects also give different results when
using [`eval()`](eval). Primitives passed to `eval` are treated as
source code; `String` objects are treated as all other objects are, by
returning the object. For example:

 
 
[js]


```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```


For these reasons, the code may break when it encounters `String`
objects when it expects a primitive string instead, although generally,
authors need not worry about the distinction.

A `String` object can always be converted to its primitive counterpart
with the [`valueOf()`](string/valueof) method.

 
 
[js]


```js
console.log(eval(s2.valueOf())); // returns the number 4
```




 
### String coercion 

 
Many built-in operations that expect strings first coerce their
arguments to strings (which is largely why `String` objects behave
similarly to string primitives). [The
operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring)
can be summarized as follows:

-   Strings are returned as-is.
-   [`undefined`](undefined) turns into `"undefined"`.
-   [`null`](../operators/null) turns into `"null"`.
-   `true` turns into `"true"`; `false` turns into `"false"`.
-   Numbers are converted with the same algorithm as
    [`toString(10)`](number/tostring).
-   [BigInts](bigint) are converted with the same algorithm as
    [`toString(10)`](bigint/tostring).
-   [Symbols](symbol) throw a [`TypeError`](typeerror).
-   Objects are first [converted to a
    primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion)
    by calling its [`[@@toPrimitive]()`](symbol/toprimitive) (with
    `"string"` as hint), `toString()`, and `valueOf()` methods, in that
    order. The resulting primitive is then converted to a string.

There are several ways to achieve nearly the same effect in JavaScript.

-   [Template literal](../template_literals): `` `${x}` `` does exactly
    the string coercion steps explained above for the embedded
    expression.
-   The [`String()`](string/string) function: `String(x)` uses the same
    algorithm to convert `x`, except that [Symbols](symbol) don\'t throw
    a [`TypeError`](typeerror), but return `"Symbol(description)"`,
    where `description` is the [description](symbol/description) of the
    Symbol.
-   Using the [`+` operator](../operators/addition): `"" + x` coerces
    its operand to a *primitive* instead of a *string*, and, for some
    objects, has entirely different behaviors from normal string
    coercion. See its [reference page](../operators/addition) for more
    details.

Depending on your use case, you may want to use `` `${x}` `` (to mimic
built-in behavior) or `String(x)` (to handle symbol values without
throwing an error), but you should not use `"" + x`.



 
### UTF-16 characters, Unicode code points, and grapheme clusters 

 
Strings are represented fundamentally as sequences of [UTF-16 code
units](https://en.wikipedia.org/wiki/UTF-16). In UTF-16 encoding, every
code unit is exact 16 bits long. This means there are a maximum of
2^16^, or 65536 possible characters representable as single UTF-16 code
units. This character set is called the [basic multilingual plane
(BMP)](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane),
and includes the most common characters like the Latin, Greek, Cyrillic
alphabets, as well as many East Asian characters. Each code unit can be
written in a string with `\u` followed by exactly four hex digits.

However, the entire Unicode character set is much, much bigger than
65536. The extra characters are stored in UTF-16 as *surrogate pairs*,
which are pairs of 16-bit code units that represent a single character.
To avoid ambiguity, the two parts of the pair must be between `0xD800`
and `0xDFFF`, and these code units are not used to encode
single-code-unit characters. (More precisely, leading surrogates, also
called high-surrogate code units, have values between `0xD800` and
`0xDBFF`, inclusive, while trailing surrogates, also called
low-surrogate code units, have values between `0xDC00` and `0xDFFF`,
inclusive.) Each Unicode character, comprised of one or two UTF-16 code
units, is also called a *Unicode code point*. Each Unicode code point
can be written in a string with `\u{xxxxxx}` where `xxxxxx` represents
1--6 hex digits.

A \"lone surrogate\" is a 16-bit code unit satisfying one of the
descriptions below:

-   It is in the range `0xD800`--`0xDBFF`, inclusive (i.e. is a leading
    surrogate), but it is the last code unit in the string, or the next
    code unit is not a trailing surrogate.
-   It is in the range `0xDC00`--`0xDFFF`, inclusive (i.e. is a trailing
    surrogate), but it is the first code unit in the string, or the
    previous code unit is not a leading surrogate.

Lone surrogates do not represent any Unicode character. Although most
JavaScript built-in methods handle them correctly because they all work
based on UTF-16 code units, lone surrogates are often not valid values
when interacting with other systems --- for example,
[`encodeURI()`](encodeuri) will throw a [`URIError`](urierror) for lone
surrogates, because URI encoding uses UTF-8 encoding, which does not
have any encoding for lone surrogates. Strings not containing any lone
surrogates are called *well-formed* strings, and are safe to be used
with functions that do not deal with UTF-16 (such as `encodeURI()` or
[`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)).
You can check if a string is well-formed with the
[`isWellFormed()`](string/iswellformed) method, or sanitize lone
surrogates with the [`toWellFormed()`](string/towellformed) method.

On top of Unicode characters, there are certain sequences of Unicode
characters that should be treated as one visual unit, known as a
*grapheme cluster*. The most common case is emojis: many emojis that
have a range of variations are actually formed by multiple emojis,
usually joined by the \<ZWJ\> (`U+200D`) character.

You must be careful which level of characters you are iterating on. For
example, [`split("")`](string/split) will split by UTF-16 code units and
will separate surrogate pairs. String indexes also refer to the index of
each UTF-16 code unit. On the other hand,
[`@@iterator()`](string/@@iterator) iterates by Unicode code points.
Iterating through grapheme clusters will require some custom code.

 
 
[js]


```js
"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters
```




 
Constructor
-----------

 

[`String()`](string/string)

:   Creates a new `String` object. It performs type conversion when
    called as a function, rather than as a constructor, which is usually
    more useful.



 
Static methods 
--------------

 

[`String.fromCharCode()`](string/fromcharcode)

:   Returns a string created by using the specified sequence of Unicode
    values.

[`String.fromCodePoint()`](string/fromcodepoint)

:   Returns a string created by using the specified sequence of code
    points.

[`String.raw()`](string/raw)

:   Returns a string created from a raw template string.



 
Instance properties 
-------------------

 
These properties are defined on `String.prototype` and shared by all
`String` instances.

[`String.prototype.constructor`](object/constructor)

:   The constructor function that created the instance object. For
    `String` instances, the initial value is the
    [`String`](string/string) constructor.

These properties are own properties of each `String` instance.

[`length`](string/length)

:   Reflects the `length` of the string. Read-only.



 
Instance methods 
----------------

 

[`String.prototype.at()`](string/at)

:   Returns the character (exactly one UTF-16 code unit) at the
    specified `index`. Accepts negative integers, which count back from
    the last string character.

[`String.prototype.charAt()`](string/charat)

:   Returns the character (exactly one UTF-16 code unit) at the
    specified `index`.

[`String.prototype.charCodeAt()`](string/charcodeat)

:   Returns a number that is the UTF-16 code unit value at the given
    `index`.

[`String.prototype.codePointAt()`](string/codepointat)

:   Returns a nonnegative integer Number that is the code point value of
    the UTF-16 encoded code point starting at the specified `pos`.

[`String.prototype.concat()`](string/concat)

:   Combines the text of two (or more) strings and returns a new string.

[`String.prototype.endsWith()`](string/endswith)

:   Determines whether a string ends with the characters of the string
    `searchString`.

[`String.prototype.includes()`](string/includes)

:   Determines whether the calling string contains `searchString`.

[`String.prototype.indexOf()`](string/indexof)

:   Returns the index within the calling [`String`](string) object of
    the first occurrence of `searchValue`, or `-1` if not found.

[`String.prototype.isWellFormed()`](string/iswellformed)

:   Returns a boolean indicating whether this string contains any [lone
    surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters).

[`String.prototype.lastIndexOf()`](string/lastindexof)

:   Returns the index within the calling [`String`](string) object of
    the last occurrence of `searchValue`, or `-1` if not found.

[`String.prototype.localeCompare()`](string/localecompare)

:   Returns a number indicating whether the reference string
    `compareString` comes before, after, or is equivalent to the given
    string in sort order.

[`String.prototype.match()`](string/match)

:   Used to match regular expression `regexp` against a string.

[`String.prototype.matchAll()`](string/matchall)

:   Returns an iterator of all `regexp`\'s matches.

[`String.prototype.normalize()`](string/normalize)

:   Returns the Unicode Normalization Form of the calling string value.

[`String.prototype.padEnd()`](string/padend)

:   Pads the current string from the end with a given string and returns
    a new string of the length `targetLength`.

[`String.prototype.padStart()`](string/padstart)

:   Pads the current string from the start with a given string and
    returns a new string of the length `targetLength`.

[`String.prototype.repeat()`](string/repeat)

:   Returns a string consisting of the elements of the object repeated
    `count` times.

[`String.prototype.replace()`](string/replace)

:   Used to replace occurrences of `searchFor` using `replaceWith`.
    `searchFor` may be a string or Regular Expression, and `replaceWith`
    may be a string or function.

[`String.prototype.replaceAll()`](string/replaceall)

:   Used to replace all occurrences of `searchFor` using `replaceWith`.
    `searchFor` may be a string or Regular Expression, and `replaceWith`
    may be a string or function.

[`String.prototype.search()`](string/search)

:   Search for a match between a regular expression `regexp` and the
    calling string.

[`String.prototype.slice()`](string/slice)

:   Extracts a section of a string and returns a new string.

[`String.prototype.split()`](string/split)

:   Returns an array of strings populated by splitting the calling
    string at occurrences of the substring `sep`.

[`String.prototype.startsWith()`](string/startswith)

:   Determines whether the calling string begins with the characters of
    string `searchString`.

[`String.prototype.substr()`](string/substr) [Deprecated]

:   Returns a portion of the string, starting at the specified index and
    extending for a given number of characters afterwards.

[`String.prototype.substring()`](string/substring)

:   Returns a new string containing characters of the calling string
    from (or between) the specified index (or indices).

[`String.prototype.toLocaleLowerCase()`](string/tolocalelowercase)

:   The characters within a string are converted to lowercase while
    respecting the current locale.

    For most languages, this will return the same as
    [`toLowerCase()`](string/tolowercase).

[`String.prototype.toLocaleUpperCase()`](string/tolocaleuppercase)

:   The characters within a string are converted to uppercase while
    respecting the current locale.

    For most languages, this will return the same as
    [`toUpperCase()`](string/touppercase).

[`String.prototype.toLowerCase()`](string/tolowercase)

:   Returns the calling string value converted to lowercase.

[`String.prototype.toString()`](string/tostring)

:   Returns a string representing the specified object. Overrides the
    [`Object.prototype.toString()`](object/tostring) method.

[`String.prototype.toUpperCase()`](string/touppercase)

:   Returns the calling string value converted to uppercase.

[`String.prototype.toWellFormed()`](string/towellformed)

:   Returns a string where all [lone
    surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters)
    of this string are replaced with the Unicode replacement character
    U+FFFD.

[`String.prototype.trim()`](string/trim)

:   Trims whitespace from the beginning and end of the string.

[`String.prototype.trimEnd()`](string/trimend)

:   Trims whitespace from the end of the string.

[`String.prototype.trimStart()`](string/trimstart)

:   Trims whitespace from the beginning of the string.

[`String.prototype.valueOf()`](string/valueof)

:   Returns the primitive value of the specified object. Overrides the
    [`Object.prototype.valueOf()`](object/valueof) method.

[`String.prototype[@@iterator]()`](string/@@iterator)

:   Returns a new iterator object that iterates over the code points of
    a String value, returning each code point as a String value.



 
### HTML wrapper methods 

 
 
**Warning:** Deprecated. Avoid these methods.

They are of limited use, as they are based on a very old HTML standard
and provide only a subset of the currently available HTML tags and
attributes. Many of them create deprecated or non-standard markup today.
In addition, they do simple string concatenation without any validation
or sanitation, which makes them a potential security threat when
directly inserted using
[`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).
Use [DOM
APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
such as
[`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
instead.


[`String.prototype.anchor()`](string/anchor) [Deprecated]

:   [`<a name="name">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#name)
    (hypertext target)

[`String.prototype.big()`](string/big) [Deprecated]
:   [`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big)

[`String.prototype.blink()`](string/blink) [Deprecated]

:   `<blink>`

[`String.prototype.bold()`](string/bold) [Deprecated]
:   [`<b>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)

[`String.prototype.fixed()`](string/fixed) [Deprecated]
:   [`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt)

[`String.prototype.fontcolor()`](string/fontcolor) [Deprecated]

:   [`<font color="color">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font#color)

[`String.prototype.fontsize()`](string/fontsize) [Deprecated]

:   [`<font size="size">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font#size)

[`String.prototype.italics()`](string/italics) [Deprecated]
:   [`<i>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)

[`String.prototype.link()`](string/link) [Deprecated]

:   [`<a href="url">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href)
    (link to URL)

[`String.prototype.small()`](string/small) [Deprecated]
:   [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)

[`String.prototype.strike()`](string/strike) [Deprecated]
:   [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)

[`String.prototype.sub()`](string/sub) [Deprecated]
:   [`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)

[`String.prototype.sup()`](string/sup) [Deprecated]
:   [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)

Note that these methods do not check if the string itself contains HTML
tags, so it\'s possible to create invalid HTML:

 
 
[js]


```js
"</b>".bold(); // <b></b></b>
```


The only escaping they do is to replace `"` in the attribute value (for
[`anchor()`](string/anchor), [`fontcolor()`](string/fontcolor),
[`fontsize()`](string/fontsize), and [`link()`](string/link)) with
`&quot;`.

 
 
[js]


```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```




 
Examples
--------


 
### String conversion 

 
The `String()` function is a more reliable way of converting values to
strings than calling the `toString()` method of the value, as the former
works when used on [`null`](../operators/null) and
[`undefined`](undefined). For example:

 
 
[js]


```js
// You cannot access properties on null or undefined

const nullVar = null;
nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-string-objects]](https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects)

  ---------------------------------------------------------------------------------------------------------


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

`@@iterator`

38

12

36

27--36A placeholder property named `@@iterator` is used.

17--27A placeholder property named `iterator` is used.

25

9

38

36

27--36A placeholder property named `@@iterator` is used.

17--27A placeholder property named `iterator` is used.

25

9

3.0

38

1.0

0.12.0

`String`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`String`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`anchor`

1

12

1Starting with version 17, the quotation mark (\") is replaced by its
HTML reference character (`"`) in strings supplied for the `name`
parameter.

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`at`

92

92

90

78

15.4

92

90

65

15.4

16.0

92

1.12

16.6.0

`big`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`blink`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`bold`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`charAt`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`charCodeAt`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`codePointAt`

41

12

29

28

9

41

29

28

9

4.0

41

1.0

4.0.0

`concat`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`endsWith`

41

12

17

28

9

36

17

24

9

3.0

37

1.0

4.0.0

`fixed`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`fontcolor`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`fontsize`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`fromCharCode`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`fromCodePoint`

41

12

29

28

9

41

29

28

9

4.0

41

1.0

4.0.0

`includes`

41

12

4018--48

28

9

41

4018--48

28

9

4.0

41

1.0

4.0.0

`indexOf`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`isWellFormed`

111

111

119

97

16.4

111

119

75

16.4

22.0

111

1.32

20.0.0

`italics`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`lastIndexOf`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`length`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`link`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`localeCompare`

1

12

1

7

3

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`match`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`matchAll`

73

79

67

60

13

73

67

52

13

11.0

73

1.0

12.0.0

`normalize`

34

12

31

21

10

34

31

21

10

2.0

37

1.0

0.12.0

`padEnd`

57

15

48

44

10

57

48

43

10

7.0

57

1.0

8.0.0

`padStart`

57

15

48

44

10

57

48

43

10

7.0

57

1.0

8.0.0

`raw`

41

12

34

28

9

41

34

28

9

4.0

41

1.0

4.0.0

`repeat`

41

12

24

28

9

36

24

28

9

3.0

41

1.0

4.0.0

`replace`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`replaceAll`

85

85

77

71

13.1

85

79

60

13.4

14.0

85

1.2

15.0.0

`search`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`slice`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`small`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`split`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`startsWith`

41

12

17

28

9

36

17

24

9

3.0

37

1.0

4.0.0

`strike`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`sub`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`substr`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`substring`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`sup`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toLocaleLowerCase`

1

12

1

4

1.3

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toLocaleUpperCase`

1

12

1

4

1.3

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toLowerCase`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toString`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toUpperCase`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toWellFormed`

111

111

119

97

16.4

111

119

75

16.4

22.0

111

1.32

20.0.0

`trim`

4

12

3.5

10.5

5

18

4

11

5

1.0

≤37

1.0

0.10.0

`trimEnd`

664

7912

613.5

5315

12

6618

614

4714

12

9.01.0

66≤37

1.01.0

10.0.00.12.0

`trimStart`

664

7912

613.5

5315

12

6618

614

4714

12

9.01.0

66≤37

1.01.0

10.0.00.12.0

`unicode_code_point_escapes`

1

12

40

4

1

18

40

10.1

1

1.0

4.4

1.0

0.10.0

`valueOf`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

 
See also 
--------

 
-   [Text
    formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
    guide
-   [`RegExp`](regexp)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/string/string.md)
String() constructor
====================

 
The `String()` constructor creates [`String`](../string) objects. When
called as a function, it returns primitive values of type String.


 
Syntax
------

 
 
 
[js]


```js
new String(thing)
String(thing)
```


 
**Note:** `String()` can be called with or without
[`new`](../../operators/new), but with different effects. See [Return
value](#return_value).




 
### Parameters

 

[`thing`](#thing)

:   Anything to be converted to a string.



 
### Return value 

 
When `String` is called as a constructor (with `new`), it creates a
[`String`](../string) object, which is **not** a primitive.

When `String` is called as a function, it coerces the parameter to a
string primitive. [Symbol](../symbol) values would be converted to
`"Symbol(description)"`, where `description` is the
[description](../symbol/description) of the Symbol, instead of throwing.

 
**Warning:** You should rarely find yourself using `String` as a
constructor.




 
Examples
--------


 
### String constructor and String function 

 
String function and String constructor produce different results:

 
 
[js]


```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```


Here, the function produces a string (the
[primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
type) as promised. However, the constructor produces an instance of the
type String (an object wrapper) and that\'s why you rarely want to use
the String constructor at all.



 
### Using String() to stringify a symbol 

 
`String()` is the only case where a symbol can be converted to a string
without throwing, because it\'s very explicit.

 
 
[js]


```js
const sym = Symbol("example");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```


 
 
[js]


```js
const sym = Symbol("example");
String(sym); // "Symbol(example)"
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-string-constructor]](https://tc39.es/ecma262/multipage/text-processing.html#sec-string-constructor)

  -----------------------------------------------------------------------------------------------------------------


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

`String`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

 
See also 
--------

 
-   [Text
    formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
    guide



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/runes/string.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

string property
===============

::: {.section .multi-line-signature}
[String](../string-class) string

::: {.features}
final
:::
:::

The string that this is the runes of.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String string;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Runes/string.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/runeiterator/string.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

string property
===============

::: {.section .multi-line-signature}
[String](../string-class) string

::: {.features}
final
:::
:::

String being iterated.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final String string;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/RuneIterator/string.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/String.md)

# String

Rust's `String` is a growable, mutable, UTF-8 encoded string type stored on the heap. Unlike string slices (`&str`), `String` owns its data and can be modified. Create with `String::from("text")` or `"text".to_string()`. Common operations include `push_str()`, `push()`, and concatenation with `+` or
 `format!()` macro.

Visit the following resources to learn more:

- [@official@String](https://doc.rust-lang.org/std/string/struct.String.html)
- [@official@str](https://doc.rust-lang.org/std/primitive.str.html)
- [@official@What as a String?](https://doc.rust-lang.org/book/ch08-02-strings.html?highlight=String#what-is-a-string)
- [@article@Rust String (With Examples)](https://www.programiz.com/rust/string)
- [@video@All Rust string types explained](https://www.youtube.com/watch?v=CpvzeyzgQdw&pp=ygUOc3RyaW5nIGluIHJ1c3Q%3D)

## 관련 로드맵
- [[Rust|rust]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/string.md)

# String

String is a primitive type that holds a sequence of characters. String in Javascript is written within a pair of single quotation marks `''`, double quotation marks `""`, or backticks ` `` ` (template literals). All types of quotes can be used to contain a string but only if the starting quote is th
e same as the end quote.

Visit the following resources to learn more:

- [@article@String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [@article@JavaScript Strings](https://javascript.info/string)


## 관련 로드맵
- [[JavaScript|javascript]]
