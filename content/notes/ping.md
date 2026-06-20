[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

ping method
===========

::: {.section .multi-line-signature}
void ping(

1.  [SendPort](../sendport-class) responsePort,
2.  {[Object](../../dart-core/object-class)? response,
3.  [int](../../dart-core/int-class) priority = immediate}

)
:::

Requests that the isolate send `response` on the `responsePort`.

The `response` object must follow the same restrictions as enforced by
[SendPort.send](../sendport/send). It is recommended to only use simple
values that can be sent to all isolates, like `null`, booleans, numbers
or strings.

If the isolate is alive, it will eventually send `response` (defaulting
to `null`) on the response port.

The `priority` must be one of [immediate](immediate-constant) or
[beforeNextEvent](beforenextevent-constant). The response is sent at
different times depending on the ping type:

-   `immediate`: The isolate responds as soon as it receives the control
    message. This is after any previous control message from the same
    isolate has been received and processed, but may be during execution
    of another event.
-   `beforeNextEvent`: The response is scheduled for the next time
    control returns to the event loop of the receiving isolate, after
    the current event, and any already scheduled control events, are
    completed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void ping(SendPort responsePort,
    {Object? response, int priority = immediate});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/ping.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/ping.md)

# ping

**Ping** is a network utility used to test the reachability and responsiveness of a device on a network. It sends Internet Control Message Protocol (ICMP) echo request packets to a target host and measures the time it takes for an echo reply to be received. Ping is commonly used to diagnose network 
connectivity issues, determine network latency, and check if a specific server or device is online. A successful ping response indicates that the target device is reachable, while failures or delays m
ay suggest network problems, such as packet loss or routing issues.

Visit the following resources to learn more:

- [@article@What is ping?](https://www.solarwinds.com/resources/it-glossary/ping)
- [@video@Ping command explained](https://www.youtube.com/watch?v=7sv5pL-XgSg)

## 관련 로드맵
- [[cyber-security|cyber-security]]
