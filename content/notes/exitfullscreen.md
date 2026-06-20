[dart:html](../../dart-html/dart-html-library){._links-link}

exitFullscreen method
=====================

::: {.section .multi-line-signature}
<div>

1.  \@SupportedBrowser(SupportedBrowser.CHROME)
2.  \@SupportedBrowser(SupportedBrowser.SAFARI)

</div>

void exitFullscreen()

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.SAFARI), override
:::
:::

Returns page to standard layout.

Has no effect if the page is not in fullscreen mode.

Other resources
---------------

-   [Fullscreen
    API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
    from MDN.
-   [Fullscreen specification](http://www.w3.org/TR/fullscreen/) from
    W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.SAFARI)
void exitFullscreen() {
  _webkitExitFullscreen();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlDocument/exitFullscreen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/videoelement/exitfullscreen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

exitFullscreen method
=====================

::: {.section .multi-line-signature}
<div>

1.  \@JSName(\'webkitExitFullscreen\')
2.  \@SupportedBrowser(SupportedBrowser.CHROME)
3.  \@SupportedBrowser(SupportedBrowser.SAFARI)

</div>

void exitFullscreen()

::: {.features}
\@JSName(\'webkitExitFullscreen\'),
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.SAFARI)
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('webkitExitFullscreen')
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.SAFARI)
void exitFullscreen() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VideoElement/exitFullscreen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/exitfullscreen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

exitFullscreen method
=====================

::: {.section .multi-line-signature}
void exitFullscreen()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void exitFullscreen() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/exitFullscreen.html>
:::
