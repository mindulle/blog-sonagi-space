[dart:html](../../dart-html/dart-html-library){._links-link}

statusbar property
==================

::: {#getter .section .multi-line-signature}
[BarProp](../barprop-class){.deprecated}? statusbar
:::

This window\'s status bar.

Other resources
---------------

-   [Browser interface
    elements](https://html.spec.whatwg.org/multipage/browsers.html#browser-interface-elements)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BarProp? get statusbar native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/statusbar.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/StatusBar.md)

# StatusBar

The `StatusBar` component is used to control the appearance of the status bar on the top of the screen. It may strike as a bit unusual since, unlike other React Native components, it doesn't render any visible content. Instead, it sets some native properties that can help customize the look of statu
s bars on Android, iOS, or other platforms.

Visit the following resources to learn more:

- [@official@StatusBar](https://reactnative.dev/docs/statusbar)

## 관련 로드맵
- [[React Native|react-native]]
