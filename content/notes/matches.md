[dart:html](../../dart-html/dart-html-library){._links-link}

matches method
==============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) matches(

1.  [String](../../dart-core/string-class) selectors

)
:::

Checks if this element matches the CSS selectors.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool matches(String selectors) {
  if (JS('bool', '!!#.matches', this)) {
    return JS('bool', '#.matches(#)', this, selectors);
  } else if (JS('bool', '!!#.webkitMatchesSelector', this)) {
    return JS('bool', '#.webkitMatchesSelector(#)', this, selectors);
  } else if (JS('bool', '!!#.mozMatchesSelector', this)) {
    return JS('bool', '#.mozMatchesSelector(#)', this, selectors);
  } else if (JS('bool', '!!#.msMatchesSelector', this)) {
    return JS('bool', '#.msMatchesSelector(#)', this, selectors);
  } else if (JS('bool', '!!#.oMatchesSelector', this)) {
    return JS('bool', '#.oMatchesSelector(#)', this, selectors);
  } else {
    throw new UnsupportedError("Not supported on this platform");
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/matches.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementstream/matches.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

matches method
==============

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<T\> matches(

1.  [String](../../dart-core/string-class) selector

)
:::

Return a stream that only fires when the particular event fires for
elements matching the specified CSS selector.

This is the Dart equivalent to jQuery\'s
[delegate](http://api.jquery.com/delegate/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<T> matches(String selector);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementStream/matches.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediaquerylistevent/matches.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

matches property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? matches
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get matches native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaQueryListEvent/matches.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediaquerylist/matches.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

matches property
================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) matches
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get matches native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaQueryList/matches.html>
:::
