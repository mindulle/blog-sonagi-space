[dart:async](../dart-async/dart-async-library){._links-link}

scheduleMicrotask function
==========================

::: {.section .multi-line-signature}
void scheduleMicrotask(

1.  void callback( )

)
:::

Runs a function asynchronously.

Callbacks registered through this function are always executed in order
and are guaranteed to run before other asynchronous events (like
[Timer](timer-class) events, or DOM events).

**Warning:** it is possible to starve the DOM by registering
asynchronous callbacks through this method. For example the following
program runs the callbacks without ever giving the Timer callback a
chance to execute:

``` {.language-dart data-language="dart"}
main() {
  Timer.run(() { print("executed"); });  // Will never be executed.
  foo() {
    scheduleMicrotask(foo);  // Schedules [foo] in front of other events.
  }
  foo();
}
```

Other resources
---------------

-   [The Event Loop and Dart](https://dart.dev/articles/event-loop/):
    Learn how Dart handles the event queue and microtask queue, so you
    can write better asynchronous code with fewer surprises.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@pragma('vm:entry-point', 'call')
void scheduleMicrotask(void Function() callback) {
  _Zone currentZone = Zone._current;
  if (identical(_rootZone, currentZone)) {
    // No need to bind the callback. We know that the root's scheduleMicrotask
    // will be invoked in the root zone.
    _rootScheduleMicrotask(null, null, _rootZone, callback);
    return;
  }
  _ZoneFunction implementation = currentZone._scheduleMicrotask;
  if (identical(_rootZone, implementation.zone) &&
      _rootZone.inSameErrorZone(currentZone)) {
    _rootScheduleMicrotask(
        null, null, currentZone, currentZone.registerCallback(callback));
    return;
  }
  Zone.current.scheduleMicrotask(Zone.current.bindCallbackGuarded(callback));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/scheduleMicrotask.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/schedulemicrotask.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

scheduleMicrotask method
========================

::: {.section .multi-line-signature}
void scheduleMicrotask(

1.  void callback( )

)
:::

Runs `callback` asynchronously in this zone.

The global `scheduleMicrotask` delegates to the [current](current)
zone\'s [scheduleMicrotask](schedulemicrotask). The root zone\'s
implementation interacts with the underlying system to schedule the
given callback as a microtask.

Custom zones may intercept this operation (for example to wrap the given
`callback`), or to implement their own microtask scheduler. In the
latter case, they will usually still use the parent zone\'s
[ZoneDelegate.scheduleMicrotask](../zonedelegate/schedulemicrotask) to
attach themselves to the existing event loop.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scheduleMicrotask(void Function() callback);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/scheduleMicrotask.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/schedulemicrotask.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

scheduleMicrotask property
==========================

::: {#getter .section .multi-line-signature}
[ScheduleMicrotaskHandler](../schedulemicrotaskhandler)?
scheduleMicrotask
:::

A custom [Zone.scheduleMicrotask](../zone/schedulemicrotask)
implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ScheduleMicrotaskHandler? get scheduleMicrotask;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/scheduleMicrotask.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/schedulemicrotask.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

scheduleMicrotask method
========================

::: {.section .multi-line-signature}
void scheduleMicrotask(

1.  [Zone](../zone-class) zone,
2.  void f( )

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scheduleMicrotask(Zone zone, void f());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/scheduleMicrotask.html>
:::
