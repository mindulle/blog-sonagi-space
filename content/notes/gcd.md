[dart:core](../../dart-core/dart-core-library){._links-link}

gcd method
==========

::: {.section .multi-line-signature}
[BigInt](../bigint-class) gcd(

1.  [BigInt](../bigint-class) other

)
:::

Returns the greatest common divisor of this big integer and `other`.

If either number is non-zero, the result is the numerically greatest
integer dividing both `this` and `other`.

The greatest common divisor is independent of the order, so `x.gcd(y)`
is always the same as `y.gcd(x)`.

For any integer `x`, `x.gcd(x)` is `x.abs()`.

If both `this` and `other` is zero, the result is also zero.

Example:

``` {.language-dart data-language="dart"}
print(BigInt.from(4).gcd(BigInt.from(2))); // 2
print(BigInt.from(8).gcd(BigInt.from(4))); // 4
print(BigInt.from(10).gcd(BigInt.from(12))); // 2
print(BigInt.from(10).gcd(BigInt.from(10))); // 10
print(BigInt.from(-2).gcd(BigInt.from(-3))); // 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
BigInt gcd(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/gcd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/gcd.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

gcd method
==========

::: {.section .multi-line-signature}
[int](../int-class) gcd(

1.  [int](../int-class) other

)
:::

Returns the greatest common divisor of this integer and `other`.

If either number is non-zero, the result is the numerically greatest
integer dividing both `this` and `other`.

The greatest common divisor is independent of the order, so `x.gcd(y)`
is always the same as `y.gcd(x)`.

For any integer `x`, `x.gcd(x)` is `x.abs()`.

If both `this` and `other` is zero, the result is also zero.

Example:

``` {.language-dart data-language="dart"}
print(4.gcd(2)); // 2
print(8.gcd(4)); // 4
print(10.gcd(12)); // 2
print(10.gcd(0)); // 10
print((-2).gcd(-3)); // 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int gcd(int other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/gcd.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/GCD.md)

# GCD

Grand Central Dispatch (GCD) is a powerful concurrency framework in iOS that simplifies the execution of parallel code. It abstracts the complexities of thread management, allowing developers to focus on the tasks to be performed rather than the underlying threading details. GCD uses a queue-based m
odel where tasks are submitted to dispatch queues and executed by a managed pool of threads. It offers both serial and concurrent queues, enabling fine-grained control over task execution order and pa
rallelism. The framework provides global queues with different quality of service levels, allowing prioritization of tasks based on their importance. GCD's dispatch groups facilitate the coordination of multiple asynchronous operations, while dispatch semaphores help manage access to shared resource
s. By leveraging GCD, iOS developers can efficiently distribute work across multiple cores, improve app responsiveness, and avoid common pitfalls associated with manual thread management, making it an
 essential tool for building high-performance, concurrent applications.

Learn more from the following resources:

- [@official@Dispatch@](https://developer.apple.com/documentation/DISPATCH)
- [@article@Grand Central Dispatch (GCD) in iOS: The Developer's Guide](https://hackernoon.com/grand-central-dispatch-gcd-in-ios-the-developers-guide)
- [@article@Grand Central Dispatch in iOS](https://medium.com/@knoo/gcd-grand-central-dispatch-in-ios-b2dd665cabd5)

## 관련 로드맵
- [[ios|ios]]
