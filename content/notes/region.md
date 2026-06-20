[dart:html](../../dart-html/dart-html-library){._links-link}

region property
===============

::: {#getter .section .multi-line-signature}
[VttRegion](../vttregion-class)? region
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
VttRegion? get region native;
```

::: {#setter .section .multi-line-signature}
void region=([VttRegion](../vttregion-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set region(VttRegion? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VttCue/region.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paymentaddress/region.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

region property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? region
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get region native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaymentAddress/region.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mouseevent/region.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

region property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? region
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get region native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MouseEvent/region.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touch/region.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

region property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? region
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get region native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Touch/region.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/locale/region.md)
Intl.Locale.prototype.region
============================

 
The `region` accessor property of [`Intl.Locale`](../locale) instances
returns the region of the world (usually a country) associated with this
locale.


 
Description
-----------

 
The region is an essential part of the locale identifier, as it places
the locale in a specific area of the world. Knowing the locale\'s region
is vital to identifying differences between locales. For example,
English is spoken in the United Kingdom and the United States of
America, but there are differences in spelling and other language
conventions between those two countries. Knowing the locale\'s region
helps JavaScript programmers make sure that the content from their sites
and applications is correctly displayed when viewed from different areas
of the world.



 
Examples
--------


 
### Setting the region in the locale identifier string argument 

 
The region is the third part of a valid Unicode language identifier
string, and can be set by adding it to the locale identifier string that
is passed into the [`Intl.Locale()`](locale) constructor. The region is
a mandatory part of a

 
 
[js]


```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```




 
### Setting the region via the configuration object 

 
The [`Intl.Locale()`](locale) constructor takes a configuration object,
which can be used to set the region subtag and property.

 
 
[js]


```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // Prints "FR"
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-Intl.Locale.prototype.region]](https://tc39.es/ecma402/#sec-Intl.Locale.prototype.region)

  -------------------------------------------------------------------------------------------------------


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

`region`

74

79

75

62

14

74

79

53

14

11.0

74

1.8

12.0.0

 
See also 
--------

 
-   [`Intl.Locale`](../locale)
-   [Unicode region
    chart](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region>

