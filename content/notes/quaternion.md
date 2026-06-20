[dart:html](../../dart-html/dart-html-library){._links-link}

quaternion property
===================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[num](../../dart-core/num-class)\>?
quaternion
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<num>? get quaternion native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OrientationSensor/quaternion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Quaternion.md)

# Quaternion

The **quaternion** is a complex number system that extends the concept of rotations in three dimensions. It involves four components: one real and three imaginary parts. Quaternions are used in game development for efficient and accurate calculations of rotations and orientation. They are particular
ly useful over other methods, such as Euler angles, due to their resistance to problems like Gimbal lock. Despite their complex nature, understanding and implementing quaternions can greatly enhance a
 game's 3D rotational mechanics and accuracy.

Visit the following resources to learn more:

- [@article@Understanding Quaternions](https://www.3dgep.com/understanding-quaternions/)
- [@article@Unity docs - Quaternions](https://docs.unity3d.com/ScriptReference/Quaternion.html)
- [@video@Quaternions and 3d rotation,explained interactively](https://youtu.be/zjMuIxRvygQ?si=ANmFr5k8JMUzBCUC)


## 관련 로드맵
- [[game-developer|game-developer]]
