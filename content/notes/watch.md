[dart:io](../../dart-io/dart-io-library){._links-link}

watch method
============

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[FileSystemEvent](../filesystemevent-class)\>
watch(

1.  {[int](../../dart-core/int-class) events = FileSystemEvent.all,
2.  [bool](../../dart-core/bool-class) recursive = false}

)
:::

Start watching the [FileSystemEntity](../filesystementity-class) for
changes.

The implementation uses platform-dependent event-based APIs for
receiving file-system notifications, thus behavior depends on the
platform.

-   `Windows`: Uses `ReadDirectoryChangesW`. The implementation only
    supports watching directories. Recursive watching is supported.
-   `Linux`: Uses `inotify`. The implementation supports watching both
    files and directories. Recursive watching is not supported. Note:
    When watching files directly, delete events might not happen as
    expected.
-   `OS X`: Uses `FSEvents`. The implementation supports watching both
    files and directories. Recursive watching is supported.

The system will start listening for events once the returned
[Stream](../../dart-async/stream-class) is being listened to, not when
the call to [watch](watch) is issued.

The returned value is an endless broadcast
[Stream](../../dart-async/stream-class), that only stops when one of the
following happens:

-   The [Stream](../../dart-async/stream-class) is canceled, e.g. by
    calling `cancel` on the
    [StreamSubscription](../../dart-async/streamsubscription-class).
-   The [FileSystemEntity](../filesystementity-class) being watched is
    deleted.
-   System Watcher exits unexpectedly. e.g. On `Windows` this happens
    when buffer that receive events from `ReadDirectoryChangesW`
    overflows.

Use `events` to specify what events to listen for. The constants in
`FileSystemEvent` can be or\'ed together to mix events. Default is
[FileSystemEvent.all](../filesystemevent/all-constant).

A move event may be reported as separate delete and create events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<FileSystemEvent> watch(
    {int events = FileSystemEvent.all, bool recursive = false}) {
  // FIXME(bkonyi): find a way to do this using the raw path.
  final String trimmedPath = _trimTrailingPathSeparators(path);
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return _FileSystemWatcher._watch(trimmedPath, events, recursive);
  }
  return overrides.fsWatch(trimmedPath, events, recursive);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/watch.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/processsignal/watch.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

watch method
============

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProcessSignal](../processsignal-class)\>
watch()
:::

Watch for process signals.

The following `ProcessSignal`s can be listened to:

-   [ProcessSignal.sighup](sighup-constant).
-   [ProcessSignal.sigint](sigint-constant). Signal sent by e.g. CTRL-C.
-   [ProcessSignal.sigterm](sigterm-constant). Not available on Windows.
-   [ProcessSignal.sigusr1](sigusr1-constant). Not available on Windows.
-   [ProcessSignal.sigusr2](sigusr2-constant). Not available on Windows.
-   [ProcessSignal.sigwinch](sigwinch-constant). Not available on
    Windows.

Other signals are disallowed, as they may be used by the VM.

A signal can be watched multiple times, from multiple isolates, where
all callbacks are invoked when signaled, in no specific order.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProcessSignal> watch() => _ProcessUtils._watchSignal(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ProcessSignal/watch.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/WATCH.md)

# WATCH

The WATCH command marks the given keys to be watched for conditional execution of a transaction. It's a critical component of Redis's approach to handling race conditions in multi-key transactions.

Learn more from the following resources:

- [@official@WATCH](https://redis.io/docs/latest/commands/watch/)

## 관련 로드맵
- [[Redis|redis]]
