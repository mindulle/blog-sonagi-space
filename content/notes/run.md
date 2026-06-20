[dart:io](../../dart-io/dart-io-library){._links-link}

run method
==========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[ProcessResult](../processresult-class)\>
run(

1.  [String](../../dart-core/string-class) executable,
2.  [List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>
    arguments,
3.  {[String](../../dart-core/string-class)? workingDirectory,
4.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    [String](../../dart-core/string-class)\>? environment,
5.  [bool](../../dart-core/bool-class) includeParentEnvironment = true,
6.  [bool](../../dart-core/bool-class) runInShell = false,
7.  [Encoding](../../dart-convert/encoding-class)? stdoutEncoding =
    systemEncoding,
8.  [Encoding](../../dart-convert/encoding-class)? stderrEncoding =
    systemEncoding}

)
:::

Starts a process and runs it non-interactively to completion. The
process run is `executable` with the specified `arguments`.

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

If `runInShell` is true, the process will be spawned through a system
shell. On Linux and OS X, `/bin/sh` is used, while
`%WINDIR%\system32\cmd.exe` is used on Windows.

The encoding used for decoding `stdout` and `stderr` into text is
controlled through `stdoutEncoding` and `stderrEncoding`. The default
encoding is [systemEncoding](../systemencoding-constant). If `null` is
used no decoding will happen and the `ProcessResult` will hold binary
data.

Returns a `Future<ProcessResult>` that completes with the result of
running the process, i.e., exit code, standard out and standard in.

The following code uses `Process.run` to grep for `main` in the file
`test.dart` on Linux.

``` {.language-dart data-language="dart"}
var result = await Process.run('grep', ['-i', 'main', 'test.dart']);
stdout.write(result.stdout);
stderr.write(result.stderr);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<ProcessResult> run(
    String executable, List<String> arguments,
    {String? workingDirectory,
    Map<String, String>? environment,
    bool includeParentEnvironment = true,
    bool runInShell = false,
    Encoding? stdoutEncoding = systemEncoding,
    Encoding? stderrEncoding = systemEncoding});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Process/run.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/run.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

run\<R\> method
===============

::: {.section .multi-line-signature}
R run\<R\>(

1.  R action( )

)
:::

Executes `action` in this zone.

By default (as implemented in the [root](root-constant) zone), runs
`action` with [current](current) set to this zone.

If `action` throws, the synchronous exception is not caught by the
zone\'s error handler. Use [runGuarded](runguarded) to achieve that.

Since the root zone is the only zone that can modify the value of
[current](current), custom zones intercepting run should always delegate
to their parent zone. They may take actions before and after the call.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R run<R>(R action());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/run.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/timer/run.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

run method
==========

::: {.section .multi-line-signature}
void run(

1.  void callback( )

)
:::

Runs the given `callback` asynchronously as soon as possible.

This function is equivalent to `new Timer(Duration.zero, callback)`.

Example:

``` {.language-dart data-language="dart"}
Timer.run(() => print('timer run'));
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static void run(void Function() callback) {
  new Timer(Duration.zero, callback);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Timer/run.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/run.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

run property
============

::: {#getter .section .multi-line-signature}
[RunHandler](../runhandler)? run
:::

A custom [Zone.run](../zone/run) implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
RunHandler? get run;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/run.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/run.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

run\<R\> method
===============

::: {.section .multi-line-signature}
R run\<R\>(

1.  [Zone](../zone-class) zone,
2.  R f( )

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R run<R>(Zone zone, R f());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/run.html>
:::
