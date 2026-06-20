[dart:html](../../dart-html/dart-html-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) language

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get language =>
    JS('String', '#.language || #.userLanguage', this, this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Navigator/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audiotrack/language.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? language
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get language native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioTrack/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/navigatorlanguage/language.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? language
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get language native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NavigatorLanguage/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/trackdefault/language.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? language
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get language native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TrackDefault/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/videotrack/language.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? language
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get language native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VideoTrack/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrack/language.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

language property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) language
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get language native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrack/language.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/locale/language.md)
Intl.Locale.prototype.language
==============================

 
The `language` accessor property of [`Intl.Locale`](../locale) instances
returns the language associated with this locale.


 
Description
-----------

 
Language is one of the core features of a locale. The Unicode
specification treats the language identifier of a locale as the language
and the region together (to make a distinction between dialects and
variations, e.g. British English vs. American English). The `language`
property of a [`Intl.Locale`](../locale) returns strictly the locale\'s
language subtag.



 
Examples
--------


 
### Setting the language in the locale identifier string argument 

 
In order to be a valid Unicode locale identifier, a string must start
with the language subtag. The main argument to the
[`Intl.Locale()`](locale) constructor must be a valid Unicode locale
identifier, so whenever the constructor is used, it must be passed an
identifier with a language subtag.

 
 
[js]


```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```




 
### Overriding language via the configuration object 

 
While the language subtag must be specified, the
[`Intl.Locale()`](locale) constructor takes a configuration object,
which can override the language subtag.

 
 
[js]


```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // Prints "es"
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-Intl.Locale.prototype.language]](https://tc39.es/ecma402/#sec-Intl.Locale.prototype.language)

  -----------------------------------------------------------------------------------------------------------


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

`language`

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
-   [Unicode language
    subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)
    in the Unicode locale data markup language spec



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language>

