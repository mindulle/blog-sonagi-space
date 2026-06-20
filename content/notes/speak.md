[dart:html](../../dart-html/dart-html-library){._links-link}

speak property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) speak
:::

Gets the value of \"speak\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get speak => getPropertyValue('speak');
```

::: {#setter .section .multi-line-signature}
void speak=([String](../../dart-core/string-class) value)
:::

Sets the value of \"speak\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set speak(String value) {
  setProperty('speak', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/speak.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesis/speak.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

speak method
============

::: {.section .multi-line-signature}
void speak(

1.  [SpeechSynthesisUtterance](../speechsynthesisutterance-class)
    utterance

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void speak(SpeechSynthesisUtterance utterance) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesis/speak.html>
:::
