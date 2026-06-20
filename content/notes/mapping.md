[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

mapping property
================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)\<[Abi](../abi-class),
[NativeType](../nativetype-class)\> mapping

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final Map<Abi, NativeType> mapping;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/AbiSpecificIntegerMapping/mapping.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/gamepad/mapping.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

mapping property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? mapping
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get mapping native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Gamepad/mapping.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Mapping.md)

# Mapping

"Mapping" in game development, especially in the context of shaders, predominantly refers to Texture Mapping and Normal Mapping. **Texture Mapping** is the application of a texture (an image or colour data) onto a 3D model's surface. It's a process of defining how a 2D surface wraps around a 3D mode
l or the way that a flat image is stretched across a model's surface to paint its appearance. This could be anything from the colour of objects to their roughness or reflectivity. Whereas, **Normal Ma
pping** is a technique used to create the illusion of complexity in the surface of a 3D model without adding any additional geometry. A Normal Map is a special kind of texture that allows the addition of surface details, such as bumps, grooves, and scratches which catch the light as if they are repr
esented by real geometry, making a low-polygon model appear as a much more complex shape.

Visit the following resources to learn more:

- [@article@Designing Maps](https://www.gamedeveloper.com/design/designing-maps-that-complement-game-mechanics)
- [@article@Mapping and Tiles in Game Development](https://code.tutsplus.com/an-introduction-to-creating-a-tile-map-engine--gamedev-10900t)


## 관련 로드맵
- [[game-developer|game-developer]]
