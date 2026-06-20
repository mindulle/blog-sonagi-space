[dart:io](../../dart-io/dart-io-library){._links-link}

redirects property
==================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[RedirectInfo](../redirectinfo-class)\>
redirects
:::

Returns the series of redirects this connection has been through. The
list will be empty if no redirects were followed. [redirects](redirects)
will be updated both in the case of an automatic and a manual redirect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<RedirectInfo> get redirects;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/redirects.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/redirectexception/redirects.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

redirects property
==================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[RedirectInfo](../redirectinfo-class)\>
redirects

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final List<RedirectInfo> redirects;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RedirectException/redirects.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Redirects.md)

# Redirects

The shell in Linux provides a robust way of managing input and output streams of a command or program, this mechanism is known as Redirection. Linux being a multi-user and multi-tasking operating system, every process typically has 3 streams opened:

*   Standard Input (stdin) - This is where the process reads its input from. The default is the keyboard.
*   Standard Output (stdout) - The process writes its output to stdout. By default, this means the terminal.
*   Standard Error (stderr) - The process writes error messages to stderr. This also goes to the terminal by default.

Visit the following resources to learn more:

- [@article@Input Output & Error Redirection in Linux](https://linuxhandbook.com/redirection-linux/)
- [@article@Redirections (Bash Reference Manual)](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)
- [@article@Redirections in Linux with Examples](https://linuxopsys.com/redirections-in-linux-with-examples)

## 관련 로드맵
- [[Linux|linux]]
