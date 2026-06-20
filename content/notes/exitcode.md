[dart:io](../dart-io/dart-io-library){._links-link}

exitCode top-level property
===========================

::: {#getter .section .multi-line-signature}
[int](../dart-core/int-class) exitCode
:::

Get the global exit code for the Dart VM.

The exit code is global for the Dart VM and the last assignment to
exitCode from any isolate determines the exit code of the Dart VM on
normal termination.

See [exit](exit) for more information on how to chose a value for the
exit code.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get exitCode => _ProcessUtils._getExitCode();
```

::: {#setter .section .multi-line-signature}
void exitCode=([int](../dart-core/int-class) code)
:::

Set the global exit code for the Dart VM.

The exit code is global for the Dart VM and the last assignment to
exitCode from any isolate determines the exit code of the Dart VM on
normal termination.

Default value is `0`.

See [exit](exit) for more information on how to chose a value for the
exit code.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set exitCode(int code) {
  ArgumentError.checkNotNull(code, "code");
  _ProcessUtils._setExitCode(code);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/exitCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/process/exitcode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

exitCode property
=================

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class)\<[int](../../dart-core/int-class)\>
exitCode
:::

A `Future` which completes with the exit code of the process when the
process completes.

The handling of exit codes is platform specific.

On Linux and OS X a normal exit code will be a positive value in the
range `[0..255]`. If the process was terminated due to a signal the exit
code will be a negative value in the range `[-255..-1]`, where the
absolute value of the exit code is the signal number. For example, if a
process crashes due to a segmentation violation the exit code will be
-11, as the signal SIGSEGV has the number 11.

On Windows a process can report any 32-bit value as an exit code. When
returning the exit code this exit code is turned into a signed value.
Some special values are used to report termination due to some system
event. E.g. if a process crashes due to an access violation the 32-bit
exit code is `0xc0000005`, which will be returned as the negative number
`-1073741819`. To get the original 32-bit value use
`(0x100000000 + exitCode) & 0xffffffff`.

There is no guarantee that [stdout](stdout) and [stderr](stderr) have
finished reporting the buffered output of the process when the returned
future completes. To be sure that all output is captured, wait for the
done event on the streams.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<int> get exitCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Process/exitCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/processresult/exitcode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

exitCode property
=================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) exitCode

::: {.features}
final
:::
:::

Exit code for the process.

See [Process.exitCode](../process/exitcode) for more information in the
exit code value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int exitCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ProcessResult/exitCode.html>
:::
