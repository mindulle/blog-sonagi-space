[dart:io](../../dart-io/dart-io-library){._links-link}

start method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Process](../process-class)\>
start(

1.  [String](../../dart-core/string-class) executable,
2.  [List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>
    arguments,
3.  {[String](../../dart-core/string-class)? workingDirectory,
4.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    [String](../../dart-core/string-class)\>? environment,
5.  [bool](../../dart-core/bool-class) includeParentEnvironment = true,
6.  [bool](../../dart-core/bool-class) runInShell = false,
7.  [ProcessStartMode](../processstartmode-class) mode =
    ProcessStartMode.normal}

)
:::

Starts a process running the `executable` with the specified
`arguments`.

Returns a `Future<Process>` that completes with a `Process` instance
when the process has been successfully started. That `Process` object
can be used to interact with the process. If the process cannot be
started the returned [Future](../../dart-async/future-class) completes
with an exception.

Use `workingDirectory` to set the working directory for the process.
Note that the change of directory occurs before executing the process on
some platforms, which may have impact when using relative paths for the
executable and the arguments.

Use `environment` to set the environment variables for the process. If
not set the environment of the parent process is inherited. Currently,
only US-ASCII environment variables are supported and errors are likely
to occur if an environment variable with code-points outside the
US-ASCII range is passed in.

If `includeParentEnvironment` is `true`, the process\'s environment will
include the parent process\'s environment, with `environment` taking
precedence. Default is `true`.

If `runInShell` is `true`, the process will be spawned through a system
shell. On Linux and OS X, `/bin/sh` is used, while
`%WINDIR%\system32\cmd.exe` is used on Windows.

Users must read all data coming on the [stdout](stdout) and
[stderr](stderr) streams of processes started with `Process.start`. If
the user does not read all data on the streams the underlying system
resources will not be released since there is still pending data.

The following code uses `Process.start` to grep for `main` in the file
`test.dart` on Linux.

``` {.language-dart data-language="dart"}
var process = await Process.start('grep', ['-i', 'main', 'test.dart']);
stdout.addStream(process.stdout);
stderr.addStream(process.stderr);
```

If `mode` is
[ProcessStartMode.normal](../processstartmode/normal-constant) (the
default) a child process will be started with `stdin`, `stdout` and
`stderr` connected.

If `mode` is
[ProcessStartMode.detached](../processstartmode/detached-constant) a
detached process will be created. A detached process has no connection
to its parent, and can keep running on its own when the parent dies. The
only information available from a detached process is its `pid`. There
is no connection to its `stdin`, `stdout` or `stderr`, nor will the
process\' exit code become available when it terminates.

If `mode` is
[ProcessStartMode.detachedWithStdio](../processstartmode/detachedwithstdio-constant)
a detached process will be created where the `stdin`, `stdout` and
`stderr` are connected. The creator can communicate with the child
through these. The detached process will keep running even if these
communication channels are closed. The process\' exit code will not
become available when it terminated.

The default value for `mode` is `ProcessStartMode.normal`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<Process> start(
    String executable, List<String> arguments,
    {String? workingDirectory,
    Map<String, String>? environment,
    bool includeParentEnvironment = true,
    bool runInShell = false,
    ProcessStartMode mode = ProcessStartMode.normal});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Process/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/timelinetask/start.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start(

1.  [String](../../dart-core/string-class) name,
2.  {[Map](../../dart-core/map-class)? arguments}

)
:::

Start a synchronous operation within this task named `name`. Optionally
takes a [Map](../../dart-core/map-class) of `arguments`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start(String name, {Map? arguments}) {
  if (!_hasTimeline) return;
  // TODO: When NNBD is complete, delete the following line.
  ArgumentError.checkNotNull(name, 'name');
  if (!_isDartStreamEnabled()) {
    // Push a null onto the stack and return.
    _stack.add(null);
    return;
  }
  var block = new _AsyncBlock._(name, _taskId);
  _stack.add(block);
  // TODO(39115): Spurious error about collection literal ambiguity.
  // TODO(39117): Spurious error about typing of `...?arguments`.
  // TODO(39120): Spurious error even about `...arguments`.
  // When these TODOs are done, we can use spread and if elements.
  var map = <Object?, Object?>{};
  if (arguments != null) {
    for (var key in arguments.keys) {
      map[key] = arguments[key];
    }
  }
  if (_parent != null) map['parentId'] = _parent!._taskId.toRadixString(16);
  if (_filterKey != null) map[_kFilterKey] = _filterKey;
  block._start(map);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/TimelineTask/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/stopwatch/start.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start()
:::

Starts the [Stopwatch](../stopwatch-class).

The [elapsed](elapsed) count increases monotonically. If the
[Stopwatch](../stopwatch-class) has been stopped, then calling start
again restarts it without resetting the [elapsed](elapsed) count.

If the [Stopwatch](../stopwatch-class) is currently running, then
calling start does nothing.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start() {
  int? stop = _stop;
  if (stop != null) {
    // (Re)start this stopwatch.
    // Don't count the time while the stopwatch has been stopped.
    _start += _now() - stop;
    _stop = null;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Stopwatch/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/olistelement/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start property
==============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) start
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get start native;
```

::: {#setter .section .multi-line-signature}
void start=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set start(int value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OListElement/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/presentationrequest/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[PresentationConnection](../presentationconnection-class)\>
start()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<PresentationConnection> start() =>
    promiseToFuture<PresentationConnection>(
        JS("creates:PresentationConnection;", "#.start()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PresentationRequest/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audiobuffersourcenode/start.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start(

1.  \[[num](../../dart-core/num-class)? when,
2.  [num](../../dart-core/num-class)? grainOffset,
3.  [num](../../dart-core/num-class)? grainDuration\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start([num? when, num? grainOffset, num? grainDuration]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioBufferSourceNode/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/underlyingsourcebase/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) start(

1.  [Object](../../dart-core/object-class) stream

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future start(Object stream) =>
    promiseToFuture(JS("", "#.start(#)", this, stream));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UnderlyingSourceBase/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/indexerror/start.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

start property
==============

::: {#getter .section .multi-line-signature}
[int](../int-class) start

::: {.features}
override
:::
:::

The minimum value that [value](../argumenterror/argumenterror.value) is
allowed to assume.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get start => 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/IndexError/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/rangeerror/start.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

start property
==============

::: {.section .multi-line-signature}
[num](../num-class)? start

::: {.features}
final
:::
:::

The minimum value that [value](rangeerror.value) is allowed to assume.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final num? start;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/RangeError/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/timeranges/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) start(

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double start(int index) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TimeRanges/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start(

1.  \[[int](../../dart-core/int-class)? timeslice\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start([int? timeslice]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/match/start.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

start property
==============

::: {#getter .section .multi-line-signature}
[int](../int-class) start
:::

The index in the string where the match starts.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get start;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Match/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechrecognition/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechRecognition/start.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sensor/start.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

start method
============

::: {.section .multi-line-signature}
void start()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void start() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Sensor/start.html>
:::
