Symbols
=======

Starting with ECMAScript 2015, `symbol` is a primitive data type, just
like `number` and `string`.

`symbol` values are created by calling the `Symbol` constructor.

```ts
let sym1 = Symbol();

let sym2 = Symbol("key"); // optional string key
```

Symbols are immutable, and unique.

```ts
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols are unique
```

Just like strings, symbols can be used as keys for object properties.

```ts
const sym = Symbol();

let obj = {
  [sym]: "value",
};

console.log(obj[sym]); // "value"
```

Symbols can also be combined with computed property declarations to
declare object properties and class members.

```ts
const getClassNameSymbol = Symbol();

class C {
  [getClassNameSymbol]() {
    return "C";
  }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"
```

`unique symbol` 
---------------

To enable treating symbols as unique literals a special type
`unique symbol` is available. `unique symbol` is a subtype of `symbol`,
and are produced only from calling `Symbol()` or `Symbol.for()`, or from
explicit type annotations. This type is only allowed on `const`
declarations and `readonly static` properties, and in order to reference
a specific unique symbol, you'll have to use the `typeof` operator. Each
reference to a unique symbol implies a completely unique identity that's
tied to a given declaration.

```ts
declare const sym1: unique symbol;
 
// sym2 can only be a constant reference.
let sym2: unique symbol = Symbol();
 
// Works - refers to a unique symbol, but its identity is tied to 'sym1'.
let sym3: typeof sym1 = sym1;
 
// Also works.
class C {
  static readonly StaticSymbol: unique symbol = Symbol();
}
```

Because each `unique symbol` has a completely separate identity, no two
`unique symbol` types are assignable or comparable to each other.

```ts
const sym2 = Symbol();
const sym3 = Symbol();
 
if (sym2 === sym3) {
  // ...
}
```

Well-known Symbols 
------------------

In addition to user-defined symbols, there are well-known built-in
symbols. Built-in symbols are used to represent internal language
behaviors.

Here is a list of well-known symbols:

### `Symbol.asyncIterator` 

A method that returns async iterator for an object, compatible to be
used with for await..of loop.

### `Symbol.hasInstance` 

A method that determines if a constructor object recognizes an object as
one of the constructor's instances. Called by the semantics of the
instanceof operator.

### `Symbol.isConcatSpreadable` 

A Boolean value indicating that an object should be flattened to its
array elements by Array.prototype.concat.

### `Symbol.iterator` 

A method that returns the default iterator for an object. Called by the
semantics of the for-of statement.

### `Symbol.match` 

A regular expression method that matches the regular expression against
a string. Called by the `String.prototype.match` method.

### `Symbol.replace` 

A regular expression method that replaces matched substrings of a
string. Called by the `String.prototype.replace` method.

### `Symbol.search` 

A regular expression method that returns the index within a string that
matches the regular expression. Called by the `String.prototype.search`
method.

### `Symbol.species` 

A function valued property that is the constructor function that is used
to create derived objects.

### `Symbol.split` 

A regular expression method that splits a string at the indices that
match the regular expression. Called by the `String.prototype.split`
method.

### `Symbol.toPrimitive` 

A method that converts an object to a corresponding primitive value.
Called by the `ToPrimitive` abstract operation.

### `Symbol.toStringTag` 

A String value that is used in the creation of the default string
description of an object. Called by the built-in method
`Object.prototype.toString`.

### `Symbol.unscopables` 

An Object whose own property names are property names that are excluded
from the 'with' environment bindings of the associated objects.

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/symbols.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@counter-style/symbols.md)
symbols
=======

The `symbols` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
descriptor is used to specify the symbols that the specified counter
system will use to construct counter representations.

Syntax
------

The `symbols` descriptor is specified as one or more `<symbol>`s.

### Values

[`<symbol>`](#symbol)

:   Represents a symbol used within the counter system. This must be one
    of the following data types:

    -   [`<string>`](../string)
    -   [`<image>`](../image) (Note: This value is \"at risk\" and may
        be removed from the specification. It is not yet implemented.)
    -   [`<custom-ident>`](../custom-ident)

Description
-----------

A symbol can be a string, image, or identifier. It is used within the
[`@counter-style`](@counter-style.md) [at-rule](at-rule.md).

[css]

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

The `symbols` descriptor must be specified when the value of the
[`system`](system.md) descriptor is `cyclic`, `numeric`, `alphabetic`,
`symbolic`, or `fixed`. When the `additive` system is used, use the
[`additive-symbols`](additive-symbols.md) descriptor instead to specify the
symbols.

While a space between quoted symbols is not required, it makes the CSS
more legible. To use a quote as a symbol, either escape the quote
character or enclose the character is using different quotes, such as
`"'"`.

Formal definition
-----------------

  ------------------------------------- ---------------------------------------
  Related [at-rule](at-rule.md)         [`@counter-style`](@counter-style.md)
  [Initial value](initial_value.md)     `n/a (required)`
  [Computed value](computed_value.md)   as specified
  ------------------------------------- ---------------------------------------

Formal syntax
-------------

```
symbols = 
  <symbol>+  

<symbol> = 
  <string>        |
  <image>         |
  <custom-ident>  

<image> = 
  <url>       |
  <gradient>  

<url> = 
  url( <string> <url-modifier>* )  |
  src( <string> <url-modifier>* )  
```

Examples
--------

### Setting counter symbols

#### HTML

[html]

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

[css]

```css
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------------------------

  [CSS Counter Styles Level 3\
  [\#
  counter-style-symbols]](https://drafts.csswg.org/css-counter-styles/#counter-style-symbols)

  -----------------------------------------------------------------------------------------------------

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

`symbols`

91Does not support `<image>` as a value for the `symbols` descriptor.

91Does not support `<image>` as a value for the `symbols` descriptor.

33Does not support `<image>` as a value for the `symbols` descriptor.

No

77Does not support `<image>` as a value for the `symbols` descriptor.

17

91Does not support `<image>` as a value for the `symbols` descriptor.

91Does not support `<image>` as a value for the `symbols` descriptor.

33Does not support `<image>` as a value for the `symbols` descriptor.

64Does not support `<image>` as a value for the `symbols` descriptor.

17

16.0Does not support `<image>` as a value for the `symbols` descriptor.

See also
--------

- The `symbols` descriptor is used within the
    [`@counter-style`](@counter-style.md) at-rule.
- [`list-style`](list-style.md),
    [`list-style-image`](list-style-image.md),
    [`list-style-position`](list-style-position.md)
- [`symbols()`](symbols.md), the functional notation creating anonymous
    counter styles
- [`url()`](url.md) function
- [CSS counter styles](css_counter_styles.md) module

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/symbols>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/mirrorsused/symbols.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

symbols property
================

::: {.section .multi-line-signature}
dynamic symbols

::: {.features}
final
:::
:::

The list of strings passed to new
[Symbol](../../dart-core/symbol-class), and symbols that might be passed
to [MirrorSystem.getName](../mirrorsystem/getname).

Combined with the names of [targets](targets),
[metaTargets](metatargets) and their members, this forms the complete
list of strings passed to new [Symbol](../../dart-core/symbol-class),
and symbols that might be passed to
[MirrorSystem.getName](../mirrorsystem/getname) by the library to which
this metadata applies.

The following text is non-normative:

Dart2js currently supports the following formats to specify symbols:

-   A constant [List](../../dart-core/list-class) of
    [String](../../dart-core/string-class) constants representing symbol
    names, e.g., `const ['foo', 'bar']`.
-   A single [String](../../dart-core/string-class) constant whose value
    is a comma-separated list of symbol names, e.g., `"foo, bar"`.

Specifying the `symbols` field turns off the following warnings emitted
by dart2js:

-   Using \"MirrorSystem.getName\" may result in larger output.
-   Using \"new Symbol\" may result in larger output.

For example, if you\'re using
[noSuchMethod](../../dart-core/object/nosuchmethod) to interact with a
database, extract all the possible column names and include them in this
list. Similarly, if you\'re using
[noSuchMethod](../../dart-core/object/nosuchmethod) to interact with
another language (JavaScript, for example) extract all the identifiers
from the API you use and include them in this list.

Note that specifying a symbol only ensures that the symbol will be
available under that name at runtime. It does not mark targets with that
name as available for reflection. See [targets](targets) and
[metaTargets](metatargets) for that purpose.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final symbols;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/MirrorsUsed/symbols.html>
:::
