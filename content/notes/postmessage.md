[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  [String](../../dart-core/string-class) targetOrigin,
3.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)

::: {.features}
override
:::
:::

Sends a cross-origin message.

Other resources
---------------

-   [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage)
    from MDN.
-   [Cross-document
    messaging](https://html.spec.whatwg.org/multipage/comms.html#web-messaging)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(/*any*/ message, String targetOrigin,
    [List<Object>? transfer]) {
  if (transfer != null) {
    var message_1 = convertDartToNative_SerializedScriptValue(message);
    _postMessage_1(message_1, targetOrigin, transfer);
    return;
  }
  var message_1 = convertDartToNative_SerializedScriptValue(message);
  _postMessage_2(message_1, targetOrigin);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  [String](../../dart-core/string-class) targetOrigin,
3.  \[[List](../../dart-core/list-class)\<[MessagePort](../messageport-class)\>?
    messagePorts\]

)
:::

Sends a cross-origin message.

Other resources
---------------

-   [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage)
    from MDN.
-   [Cross-document
    messaging](https://html.spec.whatwg.org/multipage/comms.html#web-messaging)
    from WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(var message, String targetOrigin,
    [List<MessagePort>? messagePorts]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dedicatedworkerglobalscope/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(/*any*/ message, [List<Object>? transfer]) {
  if (transfer != null) {
    var message_1 = convertDartToNative_SerializedScriptValue(message);
    _postMessage_1(message_1, transfer);
    return;
  }
  var message_1 = convertDartToNative_SerializedScriptValue(message);
  _postMessage_2(message_1);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DedicatedWorkerGlobalScope/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/serviceworker/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(/*any*/ message, [List<Object>? transfer]) {
  if (transfer != null) {
    var message_1 = convertDartToNative_SerializedScriptValue(message);
    _postMessage_1(message_1, transfer);
    return;
  }
  var message_1 = convertDartToNative_SerializedScriptValue(message);
  _postMessage_2(message_1);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ServiceWorker/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/messageport/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(/*any*/ message, [List<Object>? transfer]) {
  if (transfer != null) {
    var message_1 = convertDartToNative_SerializedScriptValue(message);
    _postMessage_1(message_1, transfer);
    return;
  }
  var message_1 = convertDartToNative_SerializedScriptValue(message);
  _postMessage_2(message_1);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MessagePort/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/worker/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  dynamic message,
2.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(/*any*/ message, [List<Object>? transfer]) {
  if (transfer != null) {
    var message_1 = convertDartToNative_SerializedScriptValue(message);
    _postMessage_1(message_1, transfer);
    return;
  }
  var message_1 = convertDartToNative_SerializedScriptValue(message);
  _postMessage_2(message_1);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Worker/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/client/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  [Object](../../dart-core/object-class) message,
2.  \[[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>?
    transfer\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(Object message, [List<Object>? transfer]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Client/postMessage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/broadcastchannel/postmessage.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

postMessage method
==================

::: {.section .multi-line-signature}
void postMessage(

1.  [Object](../../dart-core/object-class) message

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void postMessage(Object message) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BroadcastChannel/postMessage.html>
:::
