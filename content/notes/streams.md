[dart:html](../../dart-html/dart-html-library){._links-link}

streams property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[MediaStream](../mediastream-class)\>?
streams
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<MediaStream>? get streams native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcTrackEvent/streams.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Streams.md)

# Streams

AWS DynamoDB Streams is a time-ordered sequence of item-level modifications in any DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table. The changes are recorded in near real-time and can be set up to trigger AWS Lambd
a functions immediately after an event has occurred. With DynamoDB Streams, applications can access this log and view the data modifications in the order they occurred. The stream records item-level d
ata modifications such as `Insert`, `Modify`, and `Remove`. Each stream record is then organized into a stream view type, where applications can access up to 24 hours of data modification history.

Visit the following resources to learn more:

- [@official@Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html)


## 관련 로드맵
- [[AWS|aws]]
