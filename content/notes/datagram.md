[dart:io](../../dart-io/dart-io-library){._links-link}

Datagram constructor
====================

::: {.section .multi-line-signature}
Datagram(

1.  [Uint8List](../../dart-typed_data/uint8list-class) data,
2.  [InternetAddress](../internetaddress-class) address,
3.  [int](../../dart-core/int-class) port

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Datagram(this.data, this.address, this.port);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Datagram/Datagram.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Datagram.md)

# Datagram

A **Datagram** is the basic unit of data transfer in network communication using protocols such as User Datagram Protocol (UDP). Each datagram operates independently of each other, meaning they may be received in a different order than they were sent, or they might not be received at all. Therefore,
 unlike TCP (Transmission Control Protocol), UDP does not guarantee that datagrams are delivered in the same order that they were sent, or even at all - hence known as connectionless protocol. However
, it is faster and more efficient for applications that do not require delivery guarantees, such as voice over IP, live video broadcasts, and other real-time applications. Each datagram contains information about the sender, the intended recipient, and the data that it is intended to communicate alo
ng with its size and other specifications.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
