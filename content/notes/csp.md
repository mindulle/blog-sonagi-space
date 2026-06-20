[dart:html](../../dart-html/dart-html-library){._links-link}

csp property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? csp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get csp native;
```

::: {#setter .section .multi-line-signature}
void csp=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set csp(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/IFrameElement/csp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/CSP.md)

# Content Security Policy

CSP (Content Security Policy) prevents XSS and code injection attacks by specifying trusted content sources. Implemented via HTTP headers or meta tags, defining rules for scripts, stylesheets, images, and fonts. Reduces malicious code execution risk but requires careful configuration.

Visit the following resources to learn more:

- [@article@MDN — Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [@article@Google Devs — Content Security Policy (CSP)](https://developers.google.com/web/fundamentals/security/csp)
- [@video@Content Security Policy Explained](https://www.youtube.com/watch?v=-LjPRzFR5f0)
- [@feed@Explore top posts about Security](https://app.daily.dev/tags/security?ref=roadmapsh)

## 관련 로드맵
- [[backend|backend]]
