[dart:html](../../dart-html/dart-html-library){._links-link}

acceleration property
=====================

::: {#getter .section .multi-line-signature}
[DeviceAcceleration](../deviceacceleration-class)? acceleration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DeviceAcceleration? get acceleration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DeviceMotionEvent/acceleration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Acceleration.md)

# Acceleration

**Acceleration** refers to the rate of change in velocity per unit time. This physical concept is translated into game dynamics where it impacts the movement and speed of game characters or objects. For example, when a character starts moving, there is usually a slight delay before they reach their 
top speed, which then continues as long as the move button is held down. This is caused by acceleration. Conversely, when the button is released, the character doesn't stop instantly but slows down gr
adually - this is due to deceleration, which is negative acceleration. By mastering acceleration and deceleration, game developers can create more realistic and interesting movements for their characters.

Visit the following resources to learn more:

- [@article@Simple Acceleration in Games](http://earok.net/sections/articles/game-dev/theory/simplified-acceleration-games)


## 관련 로드맵
- [[game-developer|game-developer]]
