Generics
========

 
<div>

This handbook page has been replaced, [go to the new
page](2/generics)

</div>


A major part of software engineering is building components that not
only have well-defined and consistent APIs, but are also reusable.
Components that are capable of working on the data of today as well as
the data of tomorrow will give you the most flexible capabilities for
building up large software systems.

In languages like C\# and Java, one of the main tools in the toolbox for
creating reusable components is *generics*, that is, being able to
create a component that can work over a variety of types rather than a
single one. This allows users to consume these components and use their
own types.

Hello World of Generics 
-----------------------

To start off, let's do the "hello world" of generics: the identity
function. The identity function is a function that will return back
whatever is passed in. You can think of this in a similar way to the
`echo` command.

Without generics, we would either have to give the identity function a
specific type:

```ts
function identity(arg: number): number {
  return arg;
}
```

Or, we could describe the identity function using the `any` type:

```ts
function identity(arg: any): any {
  return arg;
}
```

While using `any` is certainly generic in that it will cause the
function to accept any and all types for the type of `arg`, we actually
are losing the information about what that type was when the function
returns. If we passed in a number, the only information we have is that
any type could be returned.

Instead, we need a way of capturing the type of the argument in such a
way that we can also use it to denote what is being returned. Here, we
will use a *type variable*, a special kind of variable that works on
types rather than values.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

We've now added a type variable `T` to the identity function. This `T`
allows us to capture the type the user provides (e.g. `number`), so that
we can use that information later. Here, we use `T` again as the return
type. On inspection, we can now see the same type is used for the
argument and the return type. This allows us to traffic that type
information in one side of the function and out the other.

We say that this version of the `identity` function is generic, as it
works over a range of types. Unlike using `any`, it's also just as
precise (ie, it doesn't lose any information) as the first `identity`
function that used numbers for the argument and return type.

Once we've written the generic identity function, we can call it in one
of two ways. The first way is to pass all of the arguments, including
the type argument, to the function:

```ts
let output = identity<string>("myString");
```

Here we explicitly set `T` to be `string` as one of the arguments to the
function call, denoted using the `<>` around the arguments rather than
`()`.

The second way is also perhaps the most common. Here we use *type
argument inference* --- that is, we want the compiler to set the value
of `T` for us automatically based on the type of the argument we pass
in:

```ts
let output = identity("myString");
```

Notice that we didn't have to explicitly pass the type in the angle
brackets (`<>`); the compiler just looked at the value `"myString"`, and
set `T` to its type. While type argument inference can be a helpful tool
to keep code shorter and more readable, you may need to explicitly pass
in the type arguments as we did in the previous example when the
compiler fails to infer the type, as may happen in more complex
examples.

Working with Generic Type Variables 
-----------------------------------

When you begin to use generics, you'll notice that when you create
generic functions like `identity`, the compiler will enforce that you
use any generically typed parameters in the body of the function
correctly. That is, that you actually treat these parameters as if they
could be any and all types.

Let's take our `identity` function from earlier:

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

What if we want to also log the length of the argument `arg` to the
console with each call? We might be tempted to write this:

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

When we do, the compiler will give us an error that we're using the
`.length` member of `arg`, but nowhere have we said that `arg` has this
member. Remember, we said earlier that these type variables stand in for
any and all types, so someone using this function could have passed in a
`number` instead, which does not have a `.length` member.

Let's say that we've actually intended this function to work on arrays
of `T` rather than `T` directly. Since we're working with arrays, the
`.length` member should be available. We can describe this just like we
would create arrays of other types:

```ts
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
```

You can read the type of `loggingIdentity` as "the generic function
`loggingIdentity` takes a type parameter `T`, and an argument `arg`
which is an array of `T`s, and returns an array of `T`s." If we passed
in an array of numbers, we'd get an array of numbers back out, as `T`
would bind to `number`. This allows us to use our generic type variable
`T` as part of the types we're working with, rather than the whole type,
giving us greater flexibility.

We can alternatively write the sample example this way:

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

You may already be familiar with this style of type from other
languages. In the next section, we'll cover how you can create your own
generic types like `Array<T>`.

Generic Types 
-------------

In previous sections, we created generic identity functions that worked
over a range of types. In this section, we'll explore the type of the
functions themselves and how to create generic interfaces.

The type of generic functions is just like those of non-generic
functions, with the type parameters listed first, similarly to function
declarations:

```ts
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: <T>(arg: T) => T = identity;
```

We could also have used a different name for the generic type parameter
in the type, so long as the number of type variables and how the type
variables are used line up.

```ts
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: <U>(arg: U) => U = identity;
```

We can also write the generic type as a call signature of an object
literal type:

```ts
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: { <T>(arg: T): T } = identity;
```

Which leads us to writing our first generic interface. Let's take the
object literal from the previous example and move it to an interface:

```ts
interface GenericIdentityFn {
  <T>(arg: T): T;
}
 
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;
```

In a similar example, we may want to move the generic parameter to be a
parameter of the whole interface. This lets us see what type(s) we're
generic over (e.g. `Dictionary<string>` rather than just `Dictionary`).
This makes the type parameter visible to all the other members of the
interface.

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}
 
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

Notice that our example has changed to be something slightly different.
Instead of describing a generic function, we now have a non-generic
function signature that is a part of a generic type. When we use
`GenericIdentityFn`, we now will also need to specify the corresponding
type argument (here: `number`), effectively locking in what the
underlying call signature will use. Understanding when to put the type
parameter directly on the call signature and when to put it on the
interface itself will be helpful in describing what aspects of a type
are generic.

In addition to generic interfaces, we can also create generic classes.
Note that it is not possible to create generic enums and namespaces.

Generic Classes 
---------------

A generic class has a similar shape to a generic interface. Generic
classes have a generic type parameter list in angle brackets (`<>`)
following the name of the class.

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

This is a pretty literal use of the `GenericNumber` class, but you may
have noticed that nothing is restricting it to only use the `number`
type. We could have instead used `string` or even more complex objects.

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

Just as with interface, putting the type parameter on the class itself
lets us make sure all of the properties of the class are working with
the same type.

As we covered in [our section on classes](classes), a class has two
sides to its type: the static side and the instance side. Generic
classes are only generic over their instance side rather than their
static side, so when working with classes, static members can not use
the class's type parameter.

Generic Constraints 
-------------------

If you remember from an earlier example, you may sometimes want to write
a generic function that works on a set of types where you have some
knowledge about what capabilities that set of types will have. In our
`loggingIdentity` example, we wanted to be able to access the `.length`
property of `arg`, but the compiler could not prove that every type had
a `.length` property, so it warns us that we can't make this assumption.

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

Instead of working with any and all types, we'd like to constrain this
function to work with any and all types that also have the `.length`
property. As long as the type has this member, we'll allow it, but it's
required to have at least this member. To do so, we must list our
requirement as a constraint on what T can be.

To do so, we'll create an interface that describes our constraint. Here,
we'll create an interface that has a single `.length` property and then
we'll use this interface and the `extends` keyword to denote our
constraint:

```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

Because the generic function is now constrained, it will no longer work
over any and all types:

```ts
loggingIdentity(3);
```

Instead, we need to pass in values whose type has all the required
properties:

```ts
loggingIdentity({ length: 10, value: 3 });
```

### Using Type Parameters in Generic Constraints 

You can declare a type parameter that is constrained by another type
parameter. For example, here we'd like to get a property from an object
given its name. We'd like to ensure that we're not accidentally grabbing
a property that does not exist on the `obj`, so we'll place a constraint
between the two types:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
```

### Using Class Types in Generics 

When creating factories in TypeScript using generics, it is necessary to
refer to class types by their constructor functions. For example,

```ts
function create<T>(c: { new (): T }): T {
  return new c();
}
```

A more advanced example uses the prototype property to infer and
constrain relationships between the constructor function and the
instance side of class types.

```ts
class BeeKeeper {
  hasMask: boolean;
}
 
class ZooKeeper {
  nametag: string;
}
 
class Animal {
  numLegs: number;
}
 
class Bee extends Animal {
  keeper: BeeKeeper;
}
 
class Lion extends Animal {
  keeper: ZooKeeper;
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/generics.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/typescript/2/generics.md)
Generics
========

A major part of software engineering is building components that not
only have well-defined and consistent APIs, but are also reusable.
Components that are capable of working on the data of today as well as
the data of tomorrow will give you the most flexible capabilities for
building up large software systems.

In languages like C\# and Java, one of the main tools in the toolbox for
creating reusable components is *generics*, that is, being able to
create a component that can work over a variety of types rather than a
single one. This allows users to consume these components and use their
own types.

Hello World of Generics 
-----------------------

To start off, let's do the "hello world" of generics: the identity
function. The identity function is a function that will return back
whatever is passed in. You can think of this in a similar way to the
`echo` command.

Without generics, we would either have to give the identity function a
specific type:

```ts
function identity(arg: number): number {
  return arg;
}
```

Or, we could describe the identity function using the `any` type:

```ts
function identity(arg: any): any {
  return arg;
}
```

While using `any` is certainly generic in that it will cause the
function to accept any and all types for the type of `arg`, we actually
are losing the information about what that type was when the function
returns. If we passed in a number, the only information we have is that
any type could be returned.

Instead, we need a way of capturing the type of the argument in such a
way that we can also use it to denote what is being returned. Here, we
will use a *type variable*, a special kind of variable that works on
types rather than values.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

We've now added a type variable `Type` to the identity function. This
`Type` allows us to capture the type the user provides (e.g. `number`),
so that we can use that information later. Here, we use `Type` again as
the return type. On inspection, we can now see the same type is used for
the argument and the return type. This allows us to traffic that type
information in one side of the function and out the other.

We say that this version of the `identity` function is generic, as it
works over a range of types. Unlike using `any`, it's also just as
precise (i.e., it doesn't lose any information) as the first `identity`
function that used numbers for the argument and return type.

Once we've written the generic identity function, we can call it in one
of two ways. The first way is to pass all of the arguments, including
the type argument, to the function:

```ts
let output = identity<string>("myString");
```

Here we explicitly set `Type` to be `string` as one of the arguments to
the function call, denoted using the `<>` around the arguments rather
than `()`.

The second way is also perhaps the most common. Here we use *type
argument inference* --- that is, we want the compiler to set the value
of `Type` for us automatically based on the type of the argument we pass
in:

```ts
let output = identity("myString");
```

Notice that we didn't have to explicitly pass the type in the angle
brackets (`<>`); the compiler just looked at the value `"myString"`, and
set `Type` to its type. While type argument inference can be a helpful
tool to keep code shorter and more readable, you may need to explicitly
pass in the type arguments as we did in the previous example when the
compiler fails to infer the type, as may happen in more complex
examples.

Working with Generic Type Variables 
-----------------------------------

When you begin to use generics, you'll notice that when you create
generic functions like `identity`, the compiler will enforce that you
use any generically typed parameters in the body of the function
correctly. That is, that you actually treat these parameters as if they
could be any and all types.

Let's take our `identity` function from earlier:

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

What if we want to also log the length of the argument `arg` to the
console with each call? We might be tempted to write this:

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

When we do, the compiler will give us an error that we're using the
`.length` member of `arg`, but nowhere have we said that `arg` has this
member. Remember, we said earlier that these type variables stand in for
any and all types, so someone using this function could have passed in a
`number` instead, which does not have a `.length` member.

Let's say that we've actually intended this function to work on arrays
of `Type` rather than `Type` directly. Since we're working with arrays,
the `.length` member should be available. We can describe this just like
we would create arrays of other types:

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

You can read the type of `loggingIdentity` as "the generic function
`loggingIdentity` takes a type parameter `Type`, and an argument `arg`
which is an array of `Type`s, and returns an array of `Type`s." If we
passed in an array of numbers, we'd get an array of numbers back out, as
`Type` would bind to `number`. This allows us to use our generic type
variable `Type` as part of the types we're working with, rather than the
whole type, giving us greater flexibility.

We can alternatively write the sample example this way:

```ts
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

You may already be familiar with this style of type from other
languages. In the next section, we'll cover how you can create your own
generic types like `Array<Type>`.

Generic Types 
-------------

In previous sections, we created generic identity functions that worked
over a range of types. In this section, we'll explore the type of the
functions themselves and how to create generic interfaces.

The type of generic functions is just like those of non-generic
functions, with the type parameters listed first, similarly to function
declarations:

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: <Type>(arg: Type) => Type = identity;
```

We could also have used a different name for the generic type parameter
in the type, so long as the number of type variables and how the type
variables are used line up.

```ts
function identity<Input>(arg: Input): Input {
  return arg;
}
 
let myIdentity: <Input>(arg: Input) => Input = identity;
```

We can also write the generic type as a call signature of an object
literal type:

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

Which leads us to writing our first generic interface. Let's take the
object literal from the previous example and move it to an interface:

```ts
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;
```

In a similar example, we may want to move the generic parameter to be a
parameter of the whole interface. This lets us see what type(s) we're
generic over (e.g. `Dictionary<string>` rather than just `Dictionary`).
This makes the type parameter visible to all the other members of the
interface.

```ts
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

Notice that our example has changed to be something slightly different.
Instead of describing a generic function, we now have a non-generic
function signature that is a part of a generic type. When we use
`GenericIdentityFn`, we now will also need to specify the corresponding
type argument (here: `number`), effectively locking in what the
underlying call signature will use. Understanding when to put the type
parameter directly on the call signature and when to put it on the
interface itself will be helpful in describing what aspects of a type
are generic.

In addition to generic interfaces, we can also create generic classes.
Note that it is not possible to create generic enums and namespaces.

Generic Classes 
---------------

A generic class has a similar shape to a generic interface. Generic
classes have a generic type parameter list in angle brackets (`<>`)
following the name of the class.

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

This is a pretty literal use of the `GenericNumber` class, but you may
have noticed that nothing is restricting it to only use the `number`
type. We could have instead used `string` or even more complex objects.

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

Just as with interface, putting the type parameter on the class itself
lets us make sure all of the properties of the class are working with
the same type.

As we cover in [our section on classes](classes), a class has two sides
to its type: the static side and the instance side. Generic classes are
only generic over their instance side rather than their static side, so
when working with classes, static members can not use the class's type
parameter.

Generic Constraints 
-------------------

If you remember from an earlier example, you may sometimes want to write
a generic function that works on a set of types where you have *some*
knowledge about what capabilities that set of types will have. In our
`loggingIdentity` example, we wanted to be able to access the `.length`
property of `arg`, but the compiler could not prove that every type had
a `.length` property, so it warns us that we can't make this assumption.

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

Instead of working with any and all types, we'd like to constrain this
function to work with any and all types that *also* have the `.length`
property. As long as the type has this member, we'll allow it, but it's
required to have at least this member. To do so, we must list our
requirement as a constraint on what `Type` can be.

To do so, we'll create an interface that describes our constraint. Here,
we'll create an interface that has a single `.length` property and then
we'll use this interface and the `extends` keyword to denote our
constraint:

```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

Because the generic function is now constrained, it will no longer work
over any and all types:

```ts
loggingIdentity(3);
```

Instead, we need to pass in values whose type has all the required
properties:

```ts
loggingIdentity({ length: 10, value: 3 });
```

Using Type Parameters in Generic Constraints 
--------------------------------------------

You can declare a type parameter that is constrained by another type
parameter. For example, here we'd like to get a property from an object
given its name. We'd like to ensure that we're not accidentally grabbing
a property that does not exist on the `obj`, so we'll place a constraint
between the two types:

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
```

Using Class Types in Generics 
-----------------------------

When creating factories in TypeScript using generics, it is necessary to
refer to class types by their constructor functions. For example,

```ts
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
```

A more advanced example uses the prototype property to infer and
constrain relationships between the constructor function and the
instance side of class types.

```ts
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

This pattern is used to power the [mixins](../mixins) design pattern.

Generic Parameter Defaults 
--------------------------

By declaring a default for a generic type parameter, you make it
optional to specify the corresponding type argument. For example, a
function which creates a new `HTMLElement`. Calling the function with no
arguments generates a `HTMLDivElement`; calling the function with an
element as the first argument generates an element of the argument's
type. You can optionally pass a list of children as well. Previously you
would have to define the function as:

```ts
declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;
```

With generic parameter defaults we can reduce it to:

```ts
declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
 
const div = create();
 
const p = create(new HTMLParagraphElement());
```

A generic parameter default follows the following rules:

-   A type parameter is deemed optional if it has a default.
-   Required type parameters must not follow optional type parameters.
-   Default types for a type parameter must satisfy the constraint for
    the type parameter, if it exists.
-   When specifying type arguments, you are only required to specify
    type arguments for the required type parameters. Unspecified type
    parameters will resolve to their default types.
-   If a default type is specified and inference cannot choose a
    candidate, the default type is inferred.
-   A class or interface declaration that merges with an existing class
    or interface declaration may introduce a default for an existing
    type parameter.
-   A class or interface declaration that merges with an existing class
    or interface declaration may introduce a new type parameter as long
    as it specifies a default.

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/2/generics.html>



---
## 상세 내용 (Merged from 20_Wiki/_concepts/Generics.md)

# Generics

Generics are a way to write code that can work with a variety of types without knowing those types ahead of time. They allow you to define type variables that can be used to represent the specific type that will be used when the code is actually executed. This makes your code more reusable and type-
safe by preventing errors that could occur if you were to use `any` or other less specific types.

Visit the following resources to learn more:

- [@official@Hello World of Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics)

## 관련 로드맵
- [[TypeScript|typescript]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/fruit/Testing/go/fundamentals/generics.md)
# Generics

**[You can find all the code for this chapter here](https://github.com/quii/learn-go-with-tests/tree/main/generics)**

This chapter will give you an introduction to generics, dispel reservations you may have about them, and give you an idea how to simplify some of your code in the future. After reading this you'll know how to write:

- A function that takes generic arguments
- A generic data-structure


## Our own test helpers (`AssertEqual`, `AssertNotEqual`)

To explore generics we'll write some test helpers.

### Assert on integers

Let's start with something basic and iterate toward our goal

```go
import "testing"

func TestAssertFunctions(t *testing.T) {
	t.Run("asserting on integers", func(t *testing.T) {
		AssertEqual(t, 1, 1)
		AssertNotEqual(t, 1, 2)
	})
}

func AssertEqual(t *testing.T, got, want int) {
	t.Helper()
	if got != want {
		t.Errorf("got %d, want %d", got, want)
	}
}

func AssertNotEqual(t *testing.T, got, want int) {
	t.Helper()
	if got == want {
		t.Errorf("didn't want %d", got)
	}
}
```


### Assert on strings

Being able to assert on the equality of integers is great but what if we want to assert on `string` ?

```go
t.Run("asserting on strings", func(t *testing.T) {
	AssertEqual(t, "hello", "hello")
	AssertNotEqual(t, "hello", "Grace")
})
```

You'll get an error

```
# github.com/quii/learn-go-with-tests/generics [github.com/quii/learn-go-with-tests/generics.test]
./generics_test.go:12:18: cannot use "hello" (untyped string constant) as int value in argument to AssertEqual
./generics_test.go:13:21: cannot use "hello" (untyped string constant) as int value in argument to AssertNotEqual
./generics_test.go:13:30: cannot use "Grace" (untyped string constant) as int value in argument to AssertNotEqual
```

If you take your time to read the error, you'll see the compiler is complaining that we're trying to pass a `string` to a function that expects an `integer`.

#### Recap on type-safety

If you've read the previous chapters of this book, or have experience with statically typed languages, this should not surprise you. The Go compiler expects you to write your functions, structs e.t.c. by describing what types you wish to work with.

You can't pass a `string` to a function that expects an `integer`.

Whilst this can feel like ceremony, it can be extremely helpful. By describing these constraints you,

- Make function implementation simpler. By describing to the compiler what types you work with, you **constrain the number of possible valid implementations**. You can't "add" a `Person` and a `BankAccount`. You can't capitalise an `integer`. In software, constraints are often extremely helpful.
- Are prevented from accidentally passing data to a function you didn't mean to.

Go offers you a way to be more abstract with your types with [interfaces](structs-methods-and-interfaces.md), so that you can design functions that do not take concrete types but instead, types that offer the behaviour you need. This gives you some flexibility whilst maintaining type-safety.

### A function that takes a string or an integer? (or indeed, other things)

Another option Go has to make your functions more flexible is by declaring the type of your argument as `interface{}` which means "anything".

Try changing the signatures to use this type instead.

```go
func AssertEqual(got, want interface{})

func AssertNotEqual(got, want interface{})

```

The tests should now compile and pass. If you try making them fail you'll see the output is a bit ropey because we're using the integer `%d` format string to print our messages, so change them to the general `%+v` format for a better output of any kind of value.

### The problem with `interface{}`

Our `AssertX` functions are quite naive but conceptually aren't too different to how other [popular libraries offer this functionality](https://github.com/matryer/is/blob/master/is.go#L150)

```go
func (is *I) Equal(a, b interface{})
```

So what's the problem?

By using `interface{}` the compiler can't help us when writing our code, because we're not telling it anything useful about the types of things passed to the function. Try comparing two different types.

```go
AssertEqual(1, "1")
```

In this case, we get away with it; the test compiles, and it fails as we'd hope, although the error message `got 1, want 1` is unclear; but do we want to be able to compare strings with integers? What about comparing a `Person` with an `Airport`?

Writing functions that take `interface{}` can be extremely challenging and bug-prone because we've _lost_ our constraints, and we have no information at compile time as to what kinds of data we're dealing with.

This means **the compiler can't help us** and we're instead more likely to have **runtime errors** which could affect our users, cause outages, or worse.

Often developers have to use reflection to implement these *ahem* generic functions, which can get complicated to read and write, and can hurt the performance of your program.

## Our own test helpers with generics

Ideally, we don't want to have to make specific `AssertX` functions for every type we ever deal with. We'd like to be able to have _one_ `AssertEqual` function that works with _any_ type but does not let you compare [apples and oranges](https://en.wikipedia.org/wiki/Apples_and_oranges).

Generics offer us a way to make abstractions (like interfaces) by letting us **describe our constraints**. They allow us to write functions that have a similar level of flexibility that `interface{}` offers but retain type-safety and provide a better developer experience for callers.

```go
func TestAssertFunctions(t *testing.T) {
	t.Run("asserting on integers", func(t *testing.T) {
		AssertEqual(t, 1, 1)
		AssertNotEqual(t, 1, 2)
	})

	t.Run("asserting on strings", func(t *testing.T) {
		AssertEqual(t, "hello", "hello")
		AssertNotEqual(t, "hello", "Grace")
	})

	// AssertEqual(t, 1, "1") // uncomment to see the error
}

func AssertEqual[T comparable](t *testing.T, got, want T) {
	t.Helper()
	if got != want {
		t.Errorf("got %v, want %v", got, want)
	}
}

func AssertNotEqual[T comparable](t *testing.T, got, want T) {
	t.Helper()
	if got == want {
		t.Errorf("didn't want %v", got)
	}
}
```

To write generic functions in Go, you need to provide "type parameters" which is just a fancy way of saying "describe your generic type and give it a label".

In our case the type of our type parameter is `comparable` and we've given it the label of `T`. This label then lets us describe the types for the arguments to our function (`got, want T`).

We're using `comparable` because we want to describe to the compiler that we wish to use the `==` and `!=` operators on things of type `T` in our function, we want to compare! If you try changing the type to `any`,

```go
func AssertNotEqual[T any](got, want T)
```

You'll get the following error:

```
prog.go2:15:5: cannot compare got != want (operator != not defined for T)
```

Which makes a lot of sense, because you can't use those operators on every (or `any`) type.

### Is a generic function with [`T any`](https://go.googlesource.com/proposal/+/refs/heads/master/design/go2draft-type-parameters.md#the-constraint) the same as `interface{}` ?

Consider two functions

```go
func GenericFoo[T any](x, y T)
```

```go
func InterfaceyFoo(x, y interface{})
```

What's the point of generics here? Doesn't `any` describe... anything?

In terms of constraints, `any` does mean "anything" and so does `interface{}`. In fact, `any` was added in 1.18 and is _just an alias for `interface{}`_.

The difference with the generic version is _you're still describing a specific type_ and what that means is we've still constrained this function to only work with _one_ type.

What this means is you can call `InterfaceyFoo` with any combination of types (e.g `InterfaceyFoo(apple, orange)`). However `GenericFoo` still offers some constraints because we've said that it only works with _one_ type, `T`.

Valid:

- `GenericFoo(apple1, apple2)`
- `GenericFoo(orange1, orange2)`
- `GenericFoo(1, 2)`
- `GenericFoo("one", "two")`

Not valid (fails compilation):

- `GenericFoo(apple1, orange1)`
- `GenericFoo("1", 1)`

If your function returns the generic type, the caller can also use the type as it was, rather than having to make a type assertion because when a function returns `interface{}` the compiler cannot make any guarantees about the type.

## Next: Generic data types

We're going to create a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) data type. Stacks should be fairly straightforward to understand from a requirements point of view. They're a collection of items where you can `Push` items to the "top" and to get items back again you `Pop` it
ems from the top (LIFO - last in, first out).

For the sake of brevity I've omitted the TDD process that arrived me at the following code for a stack of `int`s, and a stack of `string`s.

```go
type StackOfInts struct {
	values []int
}

func (s *StackOfInts) Push(value int) {
	s.values = append(s.values, value)
}

func (s *StackOfInts) IsEmpty() bool {
	return len(s.values) == 0
}

func (s *StackOfInts) Pop() (int, bool) {
	if s.IsEmpty() {
		return 0, false
	}

	index := len(s.values) - 1
	el := s.values[index]
	s.values = s.values[:index]
	return el, true
}

type StackOfStrings struct {
	values []string
}

func (s *StackOfStrings) Push(value string) {
	s.values = append(s.values, value)
}

func (s *StackOfStrings) IsEmpty() bool {
	return len(s.values) == 0
}

func (s *StackOfStrings) Pop() (string, bool) {
	if s.IsEmpty() {
		return "", false
	}

	index := len(s.values) - 1
	el := s.values[index]
	s.values = s.values[:index]
	return el, true
}
```

I've created a couple of other assertion functions to help out

```go
func AssertTrue(t *testing.T, got bool) {
	t.Helper()
	if !got {
		t.Errorf("got %v, want true", got)
	}
}

func AssertFalse(t *testing.T, got bool) {
	t.Helper()
	if got {
		t.Errorf("got %v, want false", got)
	}
}
```

And here's the tests

```go
func TestStack(t *testing.T) {
	t.Run("integer stack", func(t *testing.T) {
		myStackOfInts := new(StackOfInts)

		// check stack is empty
		AssertTrue(t, myStackOfInts.IsEmpty())

		// add a thing, then check it's not empty
		myStackOfInts.Push(123)
		AssertFalse(t, myStackOfInts.IsEmpty())

		// add another thing, pop it back again
		myStackOfInts.Push(456)
		value, _ := myStackOfInts.Pop()
		AssertEqual(t, value, 456)
		value, _ = myStackOfInts.Pop()
		AssertEqual(t, value, 123)
		AssertTrue(t, myStackOfInts.IsEmpty())
	})

	t.Run("string stack", func(t *testing.T) {
		myStackOfStrings := new(StackOfStrings)

		// check stack is empty
		AssertTrue(t, myStackOfStrings.IsEmpty())

		// add a thing, then check it's not empty
		myStackOfStrings.Push("123")
		AssertFalse(t, myStackOfStrings.IsEmpty())

		// add another thing, pop it back again
		myStackOfStrings.Push("456")
		value, _ := myStackOfStrings.Pop()
		AssertEqual(t, value, "456")
		value, _ = myStackOfStrings.Pop()
		AssertEqual(t, value, "123")
		AssertTrue(t, myStackOfStrings.IsEmpty())
	})
}
```

### Problems

- The code for both `StackOfStrings` and `StackOfInts` is almost identical. Whilst duplication isn't always the end of the world, it's more code to read, write and maintain.
- As we're duplicating the logic across two types, we've had to duplicate the tests too.

We really want to capture the _idea_ of a stack in one type, and have one set of tests for them. We should be wearing our refactoring hat right now which means we should not be changing the tests because we want to maintain the same behaviour.

Without generics, this is what we _could_ do

```go
type StackOfInts = Stack
type StackOfStrings = Stack

type Stack struct {
	values []interface{}
}

func (s *Stack) Push(value interface{}) {
	s.values = append(s.values, value)
}

func (s *Stack) IsEmpty() bool {
	return len(s.values) == 0
}

func (s *Stack) Pop() (interface{}, bool) {
	if s.IsEmpty() {
		var zero interface{}
		return zero, false
	}

	index := len(s.values) - 1
	el := s.values[index]
	s.values = s.values[:index]
	return el, true
}
```

- We're aliasing our previous implementations of `StackOfInts` and `StackOfStrings` to a new unified type `Stack`
- We've removed the type safety from the `Stack` by making it so `values` is a [slice](https://github.com/quii/learn-go-with-tests/blob/main/arrays-and-slices.md) of `interface{}`

To try this code, you'll have to remove the type constraints from our assert functions:

```go
func AssertEqual(t *testing.T, got, want interface{})
```

If you do this, our tests still pass. Who needs generics?

### The problem with throwing out type safety

The first problem is the same as we saw with our `AssertEquals` - we've lost type safety. I can now `Push` apples onto a stack of oranges.

Even if we have the discipline not to do this, the code is still unpleasant to work with because when methods **return `interface{}` they are horrible to work with**.

Add the following test,

```go
t.Run("interface stack DX is horrid", func(t *testing.T) {
	myStackOfInts := new(StackOfInts)

	myStackOfInts.Push(1)
	myStackOfInts.Push(2)
	firstNum, _ := myStackOfInts.Pop()
	secondNum, _ := myStackOfInts.Pop()
	AssertEqual(t, firstNum+secondNum, 3)
})
```

You get a compiler error, showing the weakness of losing type-safety:

```
invalid operation: operator + not defined on firstNum (variable of type interface{})
```

When `Pop` returns `interface{}` it means the compiler has no information about what the data is and therefore severely limits what we can do. It can't know that it should be an integer, so it does not let us use the `+` operator.

To get around this, the caller has to do a [type assertion](https://golang.org/ref/spec#Type_assertions) for each value.

```go
t.Run("interface stack dx is horrid", func(t *testing.T) {
	myStackOfInts := new(StackOfInts)

	myStackOfInts.Push(1)
	myStackOfInts.Push(2)
	firstNum, _ := myStackOfInts.Pop()
	secondNum, _ := myStackOfInts.Pop()

	// get our ints from out interface{}
	reallyFirstNum, ok := firstNum.(int)
	AssertTrue(t, ok) // need to check we definitely got an int out of the interface{}

	reallySecondNum, ok := secondNum.(int)
	AssertTrue(t, ok) // and again!

	AssertEqual(t, reallyFirstNum+reallySecondNum, 3)
})
```

The unpleasantness radiating from this test would be repeated for every potential user of our `Stack` implementation, yuck.

### Generic data structures to the rescue

Just like you can define generic arguments to functions, you can define generic data structures.

Here's our new `Stack` implementation, featuring a generic data type.

```go
type Stack[T any] struct {
	values []T
}

func (s *Stack[T]) Push(value T) {
	s.values = append(s.values, value)
}

func (s *Stack[T]) IsEmpty() bool {
	return len(s.values) == 0
}

func (s *Stack[T]) Pop() (T, bool) {
	if s.IsEmpty() {
		var zero T
		return zero, false
	}

	index := len(s.values) - 1
	el := s.values[index]
	s.values = s.values[:index]
	return el, true
}
```

Here's the tests, showing them working how we'd like them to work, with full type-safety.

```go
func TestStack(t *testing.T) {
	t.Run("integer stack", func(t *testing.T) {
		myStackOfInts := new(Stack[int])

		// check stack is empty
		AssertTrue(t, myStackOfInts.IsEmpty())

		// add a thing, then check it's not empty
		myStackOfInts.Push(123)
		AssertFalse(t, myStackOfInts.IsEmpty())

		// add another thing, pop it back again
		myStackOfInts.Push(456)
		value, _ := myStackOfInts.Pop()
		AssertEqual(t, value, 456)
		value, _ = myStackOfInts.Pop()
		AssertEqual(t, value, 123)
		AssertTrue(t, myStackOfInts.IsEmpty())

		// can get the numbers we put in as numbers, not untyped interface{}
		myStackOfInts.Push(1)
		myStackOfInts.Push(2)
		firstNum, _ := myStackOfInts.Pop()
		secondNum, _ := myStackOfInts.Pop()
		AssertEqual(t, firstNum+secondNum, 3)
	})
}
```

You'll notice the syntax for defining generic data structures is consistent with defining generic arguments to functions.

```go
type Stack[T any] struct {
	values []T
}
```

It's _almost_ the same as before, it's just that what we're saying is the **type of the stack constrains what type of values you can work with**.

Once you create a `Stack[Orange]` or a `Stack[Apple]` the methods defined on our stack will only let you pass in and will only return the particular type of the stack you're working with:

```go
func (s *Stack[T]) Pop() (T, bool)
```

You can imagine the types of implementation being somehow generated for you, depending on what type of stack you create:

```go
func (s *Stack[Orange]) Pop() (Orange, bool)
```

```go
func (s *Stack[Apple]) Pop() (Apple, bool)
```

Now that we have done this refactoring, we can safely remove the string stack test because we don't need to prove the same logic over and over.

Using a generic data type we have:

- Reduced duplication of important logic.
- Made `Pop` return `T` so that if we create a `Stack[int]` we in practice get back `int` from `Pop`; we can now use `+` without the need for type assertion gymnastics.
- Prevented misuse at compile time. You cannot `Push` oranges to an apple stack.

## Wrapping up

This chapter should have given you a taste of generics syntax, and some ideas as to why generics might be helpful. We've written our own `Assert` functions which we can safely re-use to experiment with other ideas around generics, and we've implemented a simple data structure to store any type of da
ta we wish, in a type-safe manner.

### Generics are simpler than using `interface{}` in most cases

If you're inexperienced with statically-typed languages, the point of generics may not be immediately obvious, but I hope the examples in this chapter have illustrated where the Go language isn't as expressive as we'd like. In particular using `interface{}` makes your code:

- Less safe (mix apples and oranges), requires more error handling
- Less expressive, `interface{}` tells you nothing about the data
- More likely to rely on [reflection](https://github.com/quii/learn-go-with-tests/blob/main/reflection.md), type-assertions etc which makes your code more difficult to work with and more error prone as it pushes checks from compile-time to runtime

Using statically typed languages is an act of describing constraints. If you do it well, you create code that is not only safe and simple to use but also simpler to write because the possible solution space is smaller.

Generics gives us a new way to express constraints in our code, which as demonstrated will allow us to consolidate and simplify code that was not possible until Go 1.18.

### Will generics turn Go into Java?

- No.

There's a lot of [FUD (fear, uncertainty and doubt)](https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt) in the Go community about generics leading to nightmare abstractions and baffling code bases. This is usually caveatted with "they must be used carefully".

Whilst this is true, it's not especially useful advice because this is true of any language feature.

Not many people complain about our ability to define interfaces which, like generics is a way of describing constraints within our code. When you describe an interface you are making a design choice that _could be poor_, generics are not unique in their ability to make confusing, annoying to use cod
e.

### You're already using generics

When you consider that if you've used arrays, slices or maps; you've _already been a consumer of generic code_.

```
var myApples []Apples
// You cant do this!
append(myApples, Orange{})
```

### Abstraction is not a dirty word

It's easy to dunk on [AbstractSingletonProxyFactoryBean](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/framework/AbstractSingletonProxyFactoryBean.html) but let's not pretend a code base with no abstraction at all isn't also bad. It's your job to _gather_ r
elated concepts when appropriate, so your system is easier to understand and change; rather than being a collection of disparate functions and types with a lack of clarity.

### [Make it work, make it right, make it fast](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast#:~:text=%22Make%20it%20work%2C%20make%20it,to%20DesignForPerformance%20ahead%20of%20time.)

People run in to problems with generics when they're abstracting too quickly without enough information to make good design decisions.

The TDD cycle of red, green, refactor means that you have more guidance as to what code you _actually need_ to deliver your behaviour, **rather than imagining abstractions up front**; but you still need to be careful.

There's no hard and fast rules here but resist making things generic until you can see that you have a useful generalisation. When we created the various `Stack` implementations we importantly started with _concrete_ behaviour like `StackOfStrings` and `StackOfInts` backed by tests. From our _real_ 
code we could start to see real patterns, and backed by our tests, we could explore refactoring toward a more general-purpose solution.

People often advise you to only generalise when you see the same code three times, which seems like a good starting rule of thumb.

A common path I've taken in other programming languages has been:

- One TDD cycle to drive some behaviour
- Another TDD cycle to exercise some other related scenarios

> Hmm, these things look similar - but a little duplication is better than coupling to a bad abstraction

- Sleep on it
- Another TDD cycle

> OK, I'd like to try to see if I can generalise this thing. Thank goodness I am so smart and good-looking because I use TDD, so I can refactor whenever I wish, and the process has helped me understand what behaviour I actually need before designing too much.

- This abstraction feels nice! The tests are still passing, and the code is simpler
- I can now delete a number of tests, I've captured the _essence_ of the behaviour and removed unnecessary detail
