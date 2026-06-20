[dart:core](../../dart-core/dart-core-library){._links-link}

group method
============

::: {.section .multi-line-signature}
[String](../string-class)? group(

1.  [int](../int-class) group

)
:::

The string matched by the given [group](group).

If [group](group) is 0, returns the entire match of the pattern.

The result may be `null` if the pattern didn\'t assign a value to it as
part of this match.

``` {.language-dart data-language="dart"}
final string = '[00:13.37] This is a chat message.';
final regExp = RegExp(r'^\[\s*(\d+):(\d+)\.(\d+)\]\s*(.*)$');
final match = regExp.firstMatch(string)!;
final message = jsonEncode(match[0]!); // '[00:13.37] This is a chat message.'
final hours = jsonEncode(match[1]!); // '00'
final minutes = jsonEncode(match[2]!); // '13'
final seconds = jsonEncode(match[3]!); // '37'
final text = jsonEncode(match[4]!); // 'This is a chat message.'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? group(int group);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Match/group.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/console/group.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

group method
============

::: {.section .multi-line-signature}
void group(

1.  [Object](../../dart-core/object-class)? arg

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void group(Object? arg) =>
    _isConsoleDefined ? JS('void', 'window.console.group(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/group.html>
:::
