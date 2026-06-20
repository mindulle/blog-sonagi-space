[dart:core](../../dart-core/dart-core-library){._links-link}

compare method
==============

::: {.section .multi-line-signature}
[int](../int-class) compare(

1.  [Comparable](../comparable-class) a,
2.  [Comparable](../comparable-class) b

)
:::

A [Comparator](../comparator) that compares one comparable to another.

It returns the result of `a.compareTo(b)`. The call may fail at run-time
if `a` is not comparable to the type of `b`.

This utility function is used as the default comparator for ordering
collections, for example in the [List](../list-class) sort function.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static int compare(Comparable a, Comparable b) => a.compareTo(b);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Comparable/compare.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/collator/compare.md)
Intl.Collator.prototype.compare()
=================================

 
The `compare()` method of [`Intl.Collator`](../collator) instances
compares two strings according to the sort order of this collator
object.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
compare(string1, string2)
```




 
### Parameters

 

[`string1`](#string1), `string2`

:   The strings to compare against each other.



 
### Return value 

 
A number indicating how `string1` and `string2` compare to each other
according to the sort order of this [`Intl.Collator`](../collator)
object:

-   A negative value if `string1` comes before `string2`;
-   A positive value if `string1` comes after `string2`;
-   0 if they are considered equal.



 
Examples
--------


 
### Using compare for array sort 

 
Use the `compare` function for sorting arrays. Note that the function is
bound to the collator from which it was obtained, so it can be passed
directly to [`Array.prototype.sort()`](../../array/sort).

 
 
[js]


```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```




 
### Using compare for array search 

 
Use the `compare` function for finding matching strings in arrays:

 
 
[js]


```js
const a = ["Congrès", "congres", "Assemblée", "poisson"];
const collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
const s = "congres";
const matches = a.filter((v) => collator.compare(v, s) === 0);
console.log(matches.join(", ")); // "Congrès, congres"
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-intl.collator.prototype.compare]](https://tc39.es/ecma402/#sec-intl.collator.prototype.compare)

  -------------------------------------------------------------------------------------------------------------


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

`compare`

24

12

29

15

10

25

56

14

10

1.5

4.4

1.8

0.12.0Before version 13.0.0, only the locale data for `en-US` is
available by default. See [the `Collator()`
constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)
for more details.

 
See also 
--------

 
-   [`Intl.Collator`](../collator)
-   [`String.prototype.localeCompare()`](../../string/localecompare)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare>

