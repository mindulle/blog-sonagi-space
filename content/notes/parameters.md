[dart:core](../../dart-core/dart-core-library){._links-link}

parameters property
===================

::: {#getter .section .multi-line-signature}
[Map](../map-class)\<[String](../string-class),
[String](../string-class)\> parameters
:::

A map representing the parameters of the media type.

A data URI may contain parameters between the MIME type and the data.
This converts these parameters to a map from parameter name to parameter
value. The map only contains parameters that actually occur in the URI.
The `charset` parameter has a default value even if it doesn\'t occur in
the URI, which is reflected by the [charset](charset) getter. This means
that [charset](charset) may return a value even if
`parameters["charset"]` is `null`.

If the values contain non-ASCII values or percent escapes, they are
decoded as UTF-8.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<String, String> get parameters {
  var result = <String, String>{};
  for (int i = 3; i < _separatorIndices.length; i += 2) {
    var start = _separatorIndices[i - 2] + 1;
    var equals = _separatorIndices[i - 1];
    var end = _separatorIndices[i];
    String key = _Uri._uriDecode(_text, start, equals, utf8, false);
    String value = _Uri._uriDecode(_text, equals + 1, end, utf8, false);
    result[key] = value;
  }
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/UriData/parameters.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/headervalue/parameters.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

parameters property
===================

::: {#getter .section .multi-line-signature}
[Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
[String](../../dart-core/string-class)?\> parameters
:::

A map of parameters.

This map cannot be modified.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<String, String?> get parameters;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HeaderValue/parameters.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/functiontypemirror/parameters.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

parameters property
===================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[ParameterMirror](../parametermirror-class)\>
parameters
:::

Returns a list of the parameter types of the reflectee.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<ParameterMirror> get parameters;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/FunctionTypeMirror/parameters.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/methodmirror/parameters.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

parameters property
===================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[ParameterMirror](../parametermirror-class)\>
parameters
:::

A list of mirrors on the parameters for the reflectee.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<ParameterMirror> get parameters;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/MethodMirror/parameters.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioworkletnode/parameters.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

parameters property
===================

::: {#getter .section .multi-line-signature}
[AudioParamMap](../audioparammap-class)? parameters
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AudioParamMap? get parameters native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioWorkletNode/parameters.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Parameters.md)

# Parameters Utility Type

The `Parameters` utility type in TypeScript extracts the parameter types of a function type into a tuple. This allows you to programmatically determine the expected arguments of a function and use them in other type definitions, providing type safety and flexibility when working with function signat
ures. The result is a tuple type where each element represents the type of a parameter in the function.

## 관련 로드맵
- [[TypeScript|typescript]]
