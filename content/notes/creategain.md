[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

createGain method
=================

::: {.section .multi-line-signature}
[GainNode](../gainnode-class) createGain()

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
GainNode createGain() {
  if (JS('bool', '#.createGain !== undefined', this)) {
    return JS('GainNode', '#.createGain()', this);
  } else {
    return JS('GainNode', '#.createGainNode()', this);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioContext/createGain.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/baseaudiocontext/creategain.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

createGain method
=================

::: {.section .multi-line-signature}
[GainNode](../gainnode-class) createGain()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
GainNode createGain() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/BaseAudioContext/createGain.html>
:::
