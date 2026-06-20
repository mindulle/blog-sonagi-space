[dart:html](../../dart-html/dart-html-library){._links-link}

addTrackEvent constant
======================

::: {.section .multi-line-signature}
[EventStreamProvider](../eventstreamprovider-class)\<[TrackEvent](../trackevent-class)\>
const addTrackEvent
:::

Static factory designed to expose `addtrack` events to event handlers
that are not necessarily instances of
[TextTrackList](../texttracklist-class).

See [EventStreamProvider](../eventstreamprovider-class) for usage
information.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static const EventStreamProvider<TrackEvent> addTrackEvent =
    const EventStreamProvider<TrackEvent>('addtrack');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/addTrackEvent-constant.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastream/addtrackevent-constant.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addTrackEvent constant
======================

::: {.section .multi-line-signature}
[EventStreamProvider](../eventstreamprovider-class)\<[Event](../event-class)\>
const addTrackEvent
:::

Static factory designed to expose `addtrack` events to event handlers
that are not necessarily instances of
[MediaStream](../mediastream-class).

See [EventStreamProvider](../eventstreamprovider-class) for usage
information.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static const EventStreamProvider<Event> addTrackEvent =
    const EventStreamProvider<Event>('addtrack');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStream/addTrackEvent-constant.html>
:::
