[dart:io](../dart-io/dart-io-library){._links-link}

exit function
=============

::: {.section .multi-line-signature}
Never exit(

1.  [int](../dart-core/int-class) code

)
:::

Exit the Dart VM process immediately with the given exit code.

This does not wait for any asynchronous operations to terminate nor
execute `finally` blocks. Using [exit](exit) is therefore very likely to
lose data.

While debugging, the VM will not respect the `--pause-isolates-on-exit`
flag if [exit](exit) is called as invoking this method causes the Dart
VM process to shutdown immediately. To properly break on exit, consider
calling [debugger](../dart-developer/debugger) from `dart:developer` or
[Isolate.pause](../dart-isolate/isolate/pause) from `dart:isolate` on
[Isolate.current](../dart-isolate/isolate/current) to pause the isolate
before invoking [exit](exit).

The handling of exit codes is platform specific.

On Linux and OS X an exit code for normal termination will always be in
the range `[0..255]`. If an exit code outside this range is set the
actual exit code will be the lower 8 bits masked off and treated as an
unsigned value. E.g. using an exit code of -1 will result in an actual
exit code of 255 being reported.

On Windows the exit code can be set to any 32-bit value. However some of
these values are reserved for reporting system errors like crashes.

Besides this the Dart executable itself uses an exit code of `254` for
reporting compile time errors and an exit code of `255` for reporting
runtime error (unhandled exception).

Due to these facts it is recommended to only use exit codes in the range
\[0..127\] for communicating the result of running a Dart program to the
surrounding environment. This will avoid any cross-platform issues.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Never exit(int code) {
  ArgumentError.checkNotNull(code, "code");
  if (!_EmbedderConfig._mayExit) {
    throw new UnsupportedError(
        "This embedder disallows calling dart:io's exit()");
  }
  _ProcessUtils._exit(code);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/exit.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/isolate/exit.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

exit method
===========

::: {.section .multi-line-signature}
Never exit(

1.  \[[SendPort](../sendport-class)? finalMessagePort,
2.  [Object](../../dart-core/object-class)? message\]

)
:::

Terminates the current isolate synchronously.

This operation is potentially dangerous and should be used judiciously.
The isolate stops operating *immediately*. It throws if the optional
`message` does not adhere to the limitations on what can be sent from
one isolate to another (see [SendPort.send](../sendport/send) for more
details). It also throws if a `finalMessagePort` is associated with an
isolate spawned outside of current isolate group, spawned via
[spawnUri](spawnuri).

If successful, a call to this method does not return. Pending `finally`
blocks are not executed, control flow will not go back to the event
loop, scheduled asynchronous asks will never run, and even pending
isolate control commands may be ignored. (The isolate will send messages
to ports already registered using
[Isolate.addOnExitListener](addonexitlistener), but no further Dart code
will run in the isolate.)

If `finalMessagePort` is provided, and the `message` can be sent through
it (see [SendPort.send](../sendport/send) for more details), then the
message is sent through that port as the final operation of the current
isolate. The isolate terminates immediately after that
[SendPort.send](../sendport/send) call returns.

If the port is a native port \-- one provided by
[ReceivePort.sendPort](../receiveport/sendport) or
[RawReceivePort.sendPort](../rawreceiveport/sendport) \-- the system may
be able to send this final message more efficiently than normal port
communication between live isolates. In these cases this final message
object graph will be reassigned to the receiving isolate without
copying. Further, the receiving isolate will in most cases be able to
receive the message in constant time.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Never exit([SendPort? finalMessagePort, Object? message]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/exit.html>
:::
