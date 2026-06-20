[dart:async](../../dart-async/dart-async-library){._links-link}

complete method
===============

::: {.section .multi-line-signature}
void complete(

1.  \[[FutureOr](../futureor-class)\<T\>? value\]

)
:::

Completes [future](future) with the supplied values.

The value must be either a value of type `T` or a future of type
`Future<T>`. If the value is omitted or `null`, and `T` is not nullable,
the call to `complete` throws.

If the value is itself a future, the completer will wait for that future
to complete, and complete with the same result, whether it is a success
or an error.

Calling [complete](complete) or [completeError](completeerror) must be
done at most once.

All listeners on the future are informed about the value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void complete([FutureOr<T>? value]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Completer/complete.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paymentresponse/complete.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

complete method
===============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) complete(

1.  \[[String](../../dart-core/string-class)? paymentResult\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future complete([String? paymentResult]) =>
    promiseToFuture(JS("", "#.complete(#)", this, paymentResult));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaymentResponse/complete.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imageelement/complete.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

complete property
=================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? complete
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get complete native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageElement/complete.html>
:::
