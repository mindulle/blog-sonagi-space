[dart:html](../../dart-html/dart-html-library){._links-link}

movement property
=================

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
movement

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX)
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.FIREFOX)
Point get movement => new Point(_movementX!, _movementY!);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MouseEvent/movement.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Movement.md)

# Movement

In the context of game development and game API (Application Programming Interface), movement refers to the process of changing the position or orientation of game objects. This involves using programming functions to control objects' movement like walk, run, jump, fly, or any such physical action i
n the game world. Movement is at the core to creating the dynamics of a game and is critical to both game physics and game logic. Different game engines offer different ways for handling movement. In 
some APIs, this process could be as simple as setting a new position directly, such as `object.position = new Vector3(5, 10, 0)`. Meanwhile, in others, more complex methods involving real-world physics are required, such as applying forces or altering velocity.

Visit the following resources to learn more:

- [@article@Movement in Games](https://www.gamedeveloper.com/design/analyzing-core-character-movement-in-3d)


## 관련 로드맵
- [[game-developer|game-developer]]
