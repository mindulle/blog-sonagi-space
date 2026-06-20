Classes
=======

 
<div>

This handbook page has been replaced, [go to the new
page](2/classes)

</div>


Traditional JavaScript uses functions and prototype-based inheritance to
build up reusable components, but this may feel a bit awkward to
programmers more comfortable with an object-oriented approach, where
classes inherit functionality and objects are built from these classes.
Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript
programmers can build their applications using this object-oriented
class-based approach. In TypeScript, we allow developers to use these
techniques now, and compile them down to JavaScript that works across
all major browsers and platforms, without having to wait for the next
version of JavaScript.

Classes 
-------

Let's take a look at a simple class-based example:

```ts
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");
```

The syntax should look familiar if you've used C\# or Java before. We
declare a new class `Greeter`. This class has three members: a property
called `greeting`, a constructor, and a method `greet`.

You'll notice that in the class when we refer to one of the members of
the class we prepend `this.`. This denotes that it's a member access.

In the last line we construct an instance of the `Greeter` class using
`new`. This calls into the constructor we defined earlier, creating a
new object with the `Greeter` shape, and running the constructor to
initialize it.

Inheritance 
-----------

In TypeScript, we can use common object-oriented patterns. One of the
most fundamental patterns in class-based programming is being able to
extend existing classes to create new ones using inheritance.

Let's take a look at an example:

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
 
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}
 
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

This example shows the most basic inheritance feature: classes inherit
properties and methods from base classes. Here, `Dog` is a *derived*
class that derives from the `Animal` *base* class using the `extends`
keyword. Derived classes are often called *subclasses*, and base classes
are often called *superclasses*.

Because `Dog` extends the functionality from `Animal`, we were able to
create an instance of `Dog` that could both `bark()` and `move()`.

Let's now look at a more complex example.

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
 
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
 
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
 
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
 
sam.move();
tom.move(34);
```

This example covers a few other features we didn't previously mention.
Again, we see the `extends` keywords used to create two new subclasses
of `Animal`: `Horse` and `Snake`.

One difference from the prior example is that each derived class that
contains a constructor function *must* call `super()` which will execute
the constructor of the base class. What's more, before we *ever* access
a property on `this` in a constructor body, we *have* to call `super()`.
This is an important rule that TypeScript will enforce.

The example also shows how to override methods in the base class with
methods that are specialized for the subclass. Here both `Snake` and
`Horse` create a `move` method that overrides the `move` from `Animal`,
giving it functionality specific to each class. Note that even though
`tom` is declared as an `Animal`, since its value is a `Horse`, calling
`tom.move(34)` will call the overriding method in `Horse`:

```typescript
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

Public, private, and protected modifiers 
----------------------------------------

### Public by default 

In our examples, we've been able to freely access the members that we
declared throughout our programs. If you're familiar with classes in
other languages, you may have noticed in the above examples we haven't
had to use the word `public` to accomplish this; for instance, C\#
requires that each member be explicitly labeled `public` to be visible.
In TypeScript, each member is `public` by default.

You may still mark a member `public` explicitly. We could have written
the `Animal` class from the previous section in the following way:

```ts
class Animal {
  public name: string;
 
  public constructor(theName: string) {
    this.name = theName;
  }
 
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

### ECMAScript Private Fields 

With TypeScript 3.8, TypeScript supports the new JavaScript syntax for
private fields:

```ts
class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}
 
new Animal("Cat").#name;
```

This syntax is built into the JavaScript runtime and can have better
guarantees about the isolation of each private field. Right now, the
best documentation for these private fields is in the TypeScript 3.8
[release
notes](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#ecmascript-private-fields).

### Understanding TypeScript's `private` 

TypeScript also has its own way to declare a member as being marked
`private`, it cannot be accessed from outside of its containing class.
For example:

```ts
class Animal {
  private name: string;
 
  constructor(theName: string) {
    this.name = theName;
  }
}
 
new Animal("Cat").name;
```

TypeScript is a structural type system. When we compare two different
types, regardless of where they came from, if the types of all members
are compatible, then we say the types themselves are compatible.

However, when comparing types that have `private` and `protected`
members, we treat these types differently. For two types to be
considered compatible, if one of them has a `private` member, then the
other must have a `private` member that originated in the same
declaration. The same applies to `protected` members.

Let's look at an example to better see how this plays out in practice:

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
 
class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}
 
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
 
let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
 
animal = rhino;
animal = employee;
```

In this example, we have an `Animal` and a `Rhino`, with `Rhino` being a
subclass of `Animal`. We also have a new class `Employee` that looks
identical to `Animal` in terms of shape. We create some instances of
these classes and then try to assign them to each other to see what will
happen. Because `Animal` and `Rhino` share the `private` side of their
shape from the same declaration of `private name: string` in `Animal`,
they are compatible. However, this is not the case for `Employee`. When
we try to assign from an `Employee` to `Animal` we get an error that
these types are not compatible. Even though `Employee` also has a
`private` member called `name`, it's not the one we declared in
`Animal`.

### Understanding `protected` 

The `protected` modifier acts much like the `private` modifier with the
exception that members declared `protected` can also be accessed within
deriving classes. For example,

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
 
class Employee extends Person {
  private department: string;
 
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
 
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
 
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
```

Notice that while we can't use `name` from outside of `Person`, we can
still use it from within an instance method of `Employee` because
`Employee` derives from `Person`.

A constructor may also be marked `protected`. This means that the class
cannot be instantiated outside of its containing class, but can be
extended. For example,

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}
 
// Employee can extend Person
class Employee extends Person {
  private department: string;
 
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
 
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
 
let howard = new Employee("Howard", "Sales");
let john = new Person("John");
```

Readonly modifier 
-----------------

You can make properties readonly by using the `readonly` keyword.
Readonly properties must be initialized at their declaration or in the
constructor.

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
 
  constructor(theName: string) {
    this.name = theName;
  }
}
 
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit";
```

Parameter properties 
--------------------

In our last example, we had to declare a readonly member `name` and a
constructor parameter `theName` in the `Octopus` class. This is needed
in order to have the value of `theName` accessible after the `Octopus`
constructor is executed. *Parameter properties* let you create and
initialize a member in one place. Here's a further revision of the
previous `Octopus` class using a parameter property:

```ts
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
 
let dad = new Octopus("Man with the 8 strong legs");
dad.name;
```

Notice how we dropped `theName` altogether and just use the shortened
`readonly name: string` parameter on the constructor to create and
initialize the `name` member. We've consolidated the declarations and
assignment into one location.

Parameter properties are declared by prefixing a constructor parameter
with an accessibility modifier or `readonly`, or both. Using `private`
for a parameter property declares and initializes a private member;
likewise, the same is done for `public`, `protected`, and `readonly`.

Accessors 
---------

TypeScript supports getters/setters as a way of intercepting accesses to
a member of an object. This gives you a way of having finer-grained
control over how a member is accessed on each object.

Let's convert a simple class to use `get` and `set`. First, let's start
with an example without getters and setters.

```ts
class Employee {
  fullName: string;
}
 
let employee = new Employee();
employee.fullName = "Bob Smith";
 
if (employee.fullName) {
  console.log(employee.fullName);
}
```

While allowing people to randomly set `fullName` directly is pretty
handy, we may also want enforce some constraints when `fullName` is set.

In this version, we add a setter that checks the length of the `newName`
to make sure it's compatible with the max-length of our backing database
field. If it isn't we throw an error notifying client code that
something went wrong.

To preserve existing functionality, we also add a simple getter that
retrieves `fullName` unmodified.

```ts
const fullNameMaxLength = 10;
 
class Employee {
  private _fullName: string = "";
 
  get fullName(): string {
    return this._fullName;
  }
 
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
 
    this._fullName = newName;
  }
}
 
let employee = new Employee();
employee.fullName = "Bob Smith";
 
if (employee.fullName) {
  console.log(employee.fullName);
}
```

To prove to ourselves that our accessor is now checking the length of
values, we can attempt to assign a name longer than 10 characters and
verify that we get an error.

A couple of things to note about accessors:

First, accessors require you to set the compiler to output ECMAScript 5
or higher. Downleveling to ECMAScript 3 is not supported. Second,
accessors with a `get` and no `set` are automatically inferred to be
`readonly`. This is helpful when generating a `.d.ts` file from your
code, because users of your property can see that they can't change it.

Static Properties 
-----------------

Up to this point, we've only talked about the *instance* members of the
class, those that show up on the object when it's instantiated. We can
also create *static* members of a class, those that are visible on the
class itself rather than on the instances. In this example, we use
`static` on the origin, as it's a general value for all grids. Each
instance accesses this value through prepending the name of the class.
Similarly to prepending `this.` in front of instance accesses, here we
prepend `Grid.` in front of static accesses.

```ts
class Grid {
  static origin = { x: 0, y: 0 };
 
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
 
  constructor(public scale: number) {}
}
 
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
 
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
```

Abstract Classes 
----------------

Abstract classes are base classes from which other classes may be
derived. They may not be instantiated directly. Unlike an interface, an
abstract class may contain implementation details for its members. The
`abstract` keyword is used to define abstract classes as well as
abstract methods within an abstract class.

```ts
abstract class Animal {
  abstract makeSound(): void;
 
  move(): void {
    console.log("roaming the earth...");
  }
}
```

Methods within an abstract class that are marked as abstract do not
contain an implementation and must be implemented in derived classes.
Abstract methods share a similar syntax to interface methods. Both
define the signature of a method without including a method body.
However, abstract methods must include the `abstract` keyword and may
optionally include access modifiers.

```ts
abstract class Department {
  constructor(public name: string) {}
 
  printName(): void {
    console.log("Department name: " + this.name);
  }
 
  abstract printMeeting(): void; // must be implemented in derived classes
}
 
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }
 
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
 
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
 
let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
```

Advanced Techniques 
-------------------

Constructor functions 
---------------------

When you declare a class in TypeScript, you are actually creating
multiple declarations at the same time. The first is the type of the
*instance* of the class.

```ts
class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet()); // "Hello, world"
```

Here, when we say `let greeter: Greeter`, we're using `Greeter` as the
type of instances of the class `Greeter`. This is almost second nature
to programmers from other object-oriented languages.

We're also creating another value that we call the *constructor
function*. This is the function that is called when we `new` up
instances of the class. To see what this looks like in practice, let's
take a look at the JavaScript created by the above example:

```ts
let Greeter = (function () {
  function Greeter(message) {
    this.greeting = message;
  }
 
  Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
  };
 
  return Greeter;
})();
 
let greeter;
greeter = new Greeter("world");
console.log(greeter.greet()); // "Hello, world"
```

Here, `let Greeter` is going to be assigned the constructor function.
When we call `new` and run this function, we get an instance of the
class. The constructor function also contains all of the static members
of the class. Another way to think of each class is that there is an
*instance* side and a *static* side.

Let's modify the example a bit to show this difference:

```ts
class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}
 
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"
 
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
 
let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
 
let greeter3: Greeter;
greeter3 = new Greeter();
console.log(greeter3.greet()); // "Hey there!"
```

In this example, `greeter1` works similarly to before. We instantiate
the `Greeter` class, and use this object. This we have seen before.

Next, we then use the class directly. Here we create a new variable
called `greeterMaker`. This variable will hold the class itself, or said
another way its constructor function. Here we use `typeof Greeter`, that
is "give me the type of the `Greeter` class itself" rather than the
instance type. Or, more precisely, "give me the type of the symbol
called `Greeter`," which is the type of the constructor function. This
type will contain all of the static members of Greeter along with the
constructor that creates instances of the `Greeter` class. We show this
by using `new` on `greeterMaker`, creating new instances of `Greeter`
and invoking them as before. It is also good to mention that changing
static property is frowned upon, here `greeter3` has `"Hey there!"`
instead of `"Hello, there"` on `standardGreeting`.

Using a class as an interface 
-----------------------------

As we said in the previous section, a class declaration creates two
things: a type representing instances of the class and a constructor
function. Because classes create types, you can use them in the same
places you would be able to use interfaces.

```ts
class Point {
  x: number;
  y: number;
}
 
interface Point3d extends Point {
  z: number;
}
 
let point3d: Point3d = { x: 1, y: 2, z: 3 };
```

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/classes.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/classes.md)
Classes
=======

Baseline [Widely available]
--------------------------------------

 
This feature is well established and works across many devices and
browser versions. It's been available across browsers since March 2017.

-   [Learn
    more](https://developer.mozilla.org/en-US/blog/baseline-evolution-on-mdn/)
-   [See full compatibility](#browser_compatibility)
-   [Report
    feedback](https://survey.alchemer.com/s3/7634825/MDN-baseline-feedback?page=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FClasses&level=high)


 
Classes are a template for creating objects. They encapsulate data with
code to work on that data. Classes in JS are built on
[prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
but also have some syntax and semantics that are unique to classes.

For more examples and explanations, see the [Using
classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
guide.


 
Description
-----------


 
### Defining classes 

 
Classes are in fact \"special [functions](functions)\", and just as you
can define [function expressions](operators/function) and [function
declarations](statements/function), a class can be defined in two ways:
a [class expression](operators/class) or a [class
declaration](statements/class).

 
 
[js]


```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```


Like function expressions, class expressions may be anonymous, or have a
name that\'s different from the variable that it\'s assigned to.
However, unlike function declarations, class declarations have the same
[temporal dead zone](statements/let#temporal_dead_zone_tdz) restrictions
as `let` or `const` and behave as if they are [not
hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting).



 
### Class body 

 
The body of a class is the part that is in curly braces `{}`. This is
where you define class members, such as methods or constructor.

The body of a class is executed in [strict mode](strict_mode) even
without the `"use strict"` directive.

A class element can be characterized by three aspects:

-   Kind: Getter, setter, method, or field
-   Location: Static or instance
-   Visibility: Public or private

Together, they add up to 16 possible combinations. To divide the
reference more logically and avoid overlapping content, the different
elements are introduced in detail in different pages:

[Method definitions](functions/method_definitions)

:   Public instance method

[getter](functions/get)

:   Public instance getter

[setter](functions/set)

:   Public instance setter

[Public class fields](publicClassFields.md)

:   Public instance field

[`static`](classes/static)

:   Public static method, getter, setter, and field

[Private properties](privateProperties.md)

:   Everything that\'s private

 
**Note:** Private features have the restriction that all property names
declared in the same class must be unique. All other public properties
do not have this restriction --- you can have multiple public properties
with the same name, and the last one overwrites the others. This is the
same behavior as in [object
initializers](operators/object_initializer#duplicate_property_names).


In addition, there are two special class element syntaxes:
[`constructor`](#constructor) and [static initialization
blocks](#static_initialization_blocks), with their own references.

#### Constructor

The [`constructor`](cnstr.md) method is a special method for
creating and initializing an object created with a class. There can only
be one special method with the name \"constructor\" in a class --- a
[`SyntaxError`](global_objects/syntaxerror) is thrown if the class
contains more than one occurrence of a `constructor` method.

A constructor can use the [`super`](operators/super) keyword to call the
constructor of the super class.

You can create instance properties inside the constructor:

 
 
[js]


```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```


Alternatively, if your instance properties\' values do not depend on the
constructor\'s arguments, you can define them as [class
fields](#field_declarations).

#### Static initialization blocks 

[Static initialization blocks](classes/static_initialization_blocks)
allow flexible initialization of [static
properties](#static_methods_and_fields), including the evaluation of
statements during initialization, while granting access to the private
scope.

Multiple static blocks can be declared, and these can be interleaved
with the declaration of static fields and methods (all static items are
evaluated in declaration order).

#### Methods

Methods are defined on the prototype of each class instance and are
shared by all instances. Methods can be plain functions, async
functions, generator functions, or async generator functions. For more
information, see [method definitions](functions/method_definitions).

 
 
[js]


```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```


#### Static methods and fields 

The [`static`](classes/static) keyword defines a static method or field
for a class. Static properties (fields and methods) are defined on the
class itself instead of each instance. Static methods are often used to
create utility functions for an application, whereas static fields are
useful for caches, fixed-configuration, or any other data that doesn\'t
need to be replicated across instances.

 
 
[js]


```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```


#### Field declarations 

With the class field declaration syntax, the [constructor](#constructor)
example can be written as:

 
 
[js]


```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```


Class fields are similar to object properties, not variables, so we
don\'t use keywords such as `const` to declare them. In JavaScript,
[private features](#private_class_features) use a special identifier
syntax, so modifier keywords like `public` and `private` should not be
used either.

As seen above, the fields can be declared with or without a default
value. Fields without default values default to `undefined`. By
declaring fields up-front, class definitions become more
self-documenting, and the fields are always present, which help with
optimizations.

See [public class fields](publicClassFields.md) for more
information.

#### Private properties 

Using private fields, the definition can be refined as below.

 
 
[js]


```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```


It\'s an error to reference private fields from outside of the class;
they can only be read or written within the class body. By defining
things that are not visible outside of the class, you ensure that your
classes\' users can\'t depend on internals, which may change from
version to version.

Private fields can only be declared up-front in a field declaration.
They cannot be created later through assigning to them, the way that
normal properties can.

For more information, see [](privateProperties.md).



 
### Inheritance

 
The [`extends`](classes/extends) keyword is used in *class declarations*
or *class expressions* to create a class as a child of another
constructor (either a class or a function).

 
 
[js]


```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```


If there is a constructor present in the subclass, it needs to first
call `super()` before using `this`. The [`super`](operators/super)
keyword can also be used to call corresponding methods of super class.

 
 
[js]


```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```




 
### Evaluation order 

 
When a [`class` declaration](statements/class) or [`class`
expression](operators/class) is evaluated, its various components are
evaluated in the following order:

1.  The [`extends`](classes/extends) clause, if present, is first
    evaluated. It must evaluate to a valid constructor function or
    `null`, or a [`TypeError`](global_objects/typeerror) is thrown.
2.  The [`constructor`](cnstr.md) method is extracted,
    substituted with a default implementation if `constructor` is not
    present. However, because the `constructor` definition is only a
    method definition, this step is not observable.
3.  The class elements\' property keys are evaluated in the order of
    declaration. If the property key is computed, the computed
    expression is evaluated, with the `this` value set to the `this`
    value surrounding the class (not the class itself). None of the
    property values are evaluated yet.
4.  Methods and accessors are installed in the order of declaration.
    Instance methods and accessors are installed on the `prototype`
    property of the current class, and static methods and accessors are
    installed on the class itself. Private instance methods and
    accessors are saved to be installed on the instance directly later.
    This step is not observable.
5.  The class is now initialized with the prototype specified by
    `extends` and implementation specified by `constructor`. For all
    steps above, if an evaluated expression tries to access the name of
    the class, a [`ReferenceError`](global_objects/referenceerror) is
    thrown because the class is not initialized yet.
6.  The class elements\' values are evaluated in the order of
    declaration:
    -   For each [instance field](publicClassFields.md) (public
        or private), its initializer expression is saved. The
        initializer is evaluated during instance creation, at the start
        of the constructor (for base classes) or immediately before the
        `super()` call returns (for derived classes).
    -   For each [static field](classes/static) (public or private), its
        initializer is evaluated with `this` set to the class itself,
        and the property is created on the class.
    -   [Static initialization
        blocks](classes/static_initialization_blocks) are evaluated with
        `this` set to the class itself.
7.  The class is now fully initialized and can be used as a constructor
    function.

For how instances are created, see the
[`constructor`](cnstr.md) reference.



 
Examples
--------


 
### Binding this with instance and static methods 

 
When a static or instance method is called without a value for
[`this`](operators/this), such as by assigning the method to a variable
and then calling it, the `this` value will be `undefined` inside the
method. This behavior is the same even if the
[`"use strict"`](strict_mode) directive isn\'t present, because code
within the `class` body is always executed in strict mode.

 
 
[js]


```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined
```


If we rewrite the above using traditional function-based syntax in
non--strict mode, then `this` method calls are automatically bound to
[`globalThis`](global_objects/globalthis). In strict mode, the value of
`this` remains as `undefined`.

 
 
[js]


```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-class-definitions]](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-class-definitions)

  -----------------------------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`Classes`

49

42--49Strict mode is required.

13

45

36

29--36Strict mode is required.

9

49

42--49Strict mode is required.

45

36

29--36Strict mode is required.

9

5.0

4.0--5.0Strict mode is required.

49

42--49Strict mode is required.

1.0

6.0.0

`constructor`

49

42--49Strict mode is required.

13

45

36

29--36Strict mode is required.

9

49

42--49Strict mode is required.

45

36

29--36Strict mode is required.

9

5.0

4.0--5.0Strict mode is required.

49

42--49Strict mode is required.

1.0

6.0.0

`extends`

49

42--49Strict mode is required.

13

45

36

29--36Strict mode is required.

9

49

42--49Strict mode is required.

45

36

29--36Strict mode is required.

9

5.0

4.0--5.0Strict mode is required.

49

42--49Strict mode is required.

1.0

6.0.0

`private_class_fields`

74

79

90

62

14.1

74

90

53

14.5

11.0

74

1.0

12.0.0

`private_class_fields_in`

91

91

90

77

15

91

90

64

15

16.0

91

1.9

16.4.0

`private_class_methods`

84

84

90

70

15

84

90

60

15

14.0

84

1.0

14.6.0

`public_class_fields`

72

79

69

60

14.1

14--14.1Doesn\'t support public static fields. See [bug
194095](https://webkit.org/b/194095).

72

79

51

14.5

14--14.5Doesn\'t support public static fields. See [bug
194095](https://webkit.org/b/194095).

11.0

72

1.0

12.0.0

`static`

49

42--49Strict mode is required.

13

45

36

29--36Strict mode is required.

9

49

42--49Strict mode is required.

45

36

29--36Strict mode is required.

9

5.0

4.0--5.0Strict mode is required.

49

42--49Strict mode is required.

1.0

6.0.0

`static_class_fields`

72

79

75

60

14.1

72

79

51

14.5

11.0

72

1.0

12.0.0

`static_initialization_blocks`

94

94

93

80

16.4

94

93

66

16.4

17.0

94

1.14

16.11.0

 
See also 
--------

 
-   [Using
    classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
    guide
-   [`class`](statements/class)
-   [`class` expression](operators/class)
-   [Functions](functions)
-   [ES6 In Depth:
    Classes](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) on
    hacks.mozilla.org (2015)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/typescript/2/classes.md)
Classes
=======

> Background Reading:\
> [Classes
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

TypeScript offers full support for the `class` keyword introduced in
ES2015.

As with other JavaScript language features, TypeScript adds type
annotations and other syntax to allow you to express relationships
between classes and other types.

Class Members 
-------------

Here's the most basic class - an empty one:

```ts
class Point {}
```

This class isn't very useful yet, so let's start adding some members.

### Fields 

A field declaration creates a public writeable property on a class:

```ts
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

As with other locations, the type annotation is optional, but will be an
implicit `any` if not specified.

Fields can also have *initializers*; these will run automatically when
the class is instantiated:

```ts
class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);
```

Just like with `const`, `let`, and `var`, the initializer of a class
property will be used to infer its type:

```ts
const pt = new Point();
pt.x = "0";
```

#### `--strictPropertyInitialization` 

The
[`strictPropertyInitialization`](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization)
setting controls whether class fields need to be initialized in the
constructor.

```ts
class BadGreeter {
  name: string;
}
```

```ts
class GoodGreeter {
  name: string;
 
  constructor() {
    this.name = "hello";
  }
}
```

Note that the field needs to be initialized *in the constructor itself*.
TypeScript does not analyze methods you invoke from the constructor to
detect initializations, because a derived class might override those
methods and fail to initialize the members.

If you intend to definitely initialize a field through means other than
the constructor (for example, maybe an external library is filling in
part of your class for you), you can use the *definite assignment
assertion operator*, `!`:

```ts
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```

### `readonly` 

Fields may be prefixed with the `readonly` modifier. This prevents
assignments to the field outside of the constructor.

```ts
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok";
  }
}
const g = new Greeter();
g.name = "also not ok";
```

### Constructors 

> Background Reading:\
> [Constructor
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)\

Class constructors are very similar to functions. You can add parameters
with type annotations, default values, and overloads:

```ts
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

```ts
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

There are just a few differences between class constructor signatures
and function signatures:

-   Constructors can't have type parameters - these belong on the outer
    class declaration, which we'll learn about later
-   Constructors can't have return type annotations - the class instance
    type is always what's returned

#### Super Calls 

Just as in JavaScript, if you have a base class, you'll need to call
`super();` in your constructor body before using any `this.` members:

```ts
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
    super();
  }
}
```

Forgetting to call `super` is an easy mistake to make in JavaScript, but
TypeScript will tell you when it's necessary.

### Methods 

> Background Reading:\
> [Method
> definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)\

A function property on a class is called a *method*. Methods can use all
the same type annotations as functions and constructors:

```ts
class Point {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

Other than the standard type annotations, TypeScript doesn't add
anything else new to methods.

Note that inside a method body, it is still mandatory to access fields
and other methods via `this.`. An unqualified name in a method body will
always refer to something in the enclosing scope:

```ts
let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";
  }
}
```

### Getters / Setters 

Classes can also have *accessors*:

```ts
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

> Note that a field-backed get/set pair with no extra logic is very
> rarely useful in JavaScript. It's fine to expose public fields if you
> don't need to add additional logic during the get/set operations.

TypeScript has some special inference rules for accessors:

-   If `get` exists but no `set`, the property is automatically
    `readonly`
-   If the type of the setter parameter is not specified, it is inferred
    from the return type of the getter
-   Getters and setters must have the same [Member
    Visibility](#member-visibility)

Since [TypeScript
4.3](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/),
it is possible to have accessors with different types for getting and
setting.

```ts
class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}
```

### Index Signatures 

Classes can declare index signatures; these work the same as [Index
Signatures for other object types](objects#index-signatures):

```ts
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}
```

Because the index signature type needs to also capture the types of
methods, it's not easy to usefully use these types. Generally it's
better to store indexed data in another place instead of on the class
instance itself.

Class Heritage 
--------------

Like other languages with object-oriented features, classes in
JavaScript can inherit from base classes.

### `implements` Clauses 

You can use an `implements` clause to check that a class satisfies a
particular `interface`. An error will be issued if a class fails to
correctly implement it:

```ts
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}
```

Classes may also implement multiple interfaces, e.g.
`class C implements A, B {`.

#### Cautions 

It's important to understand that an `implements` clause is only a check
that the class can be treated as the interface type. It doesn't change
the type of the class or its methods *at all*. A common source of error
is to assume that an `implements` clause will change the class type - it
doesn't!

```ts
interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  check(s) {
    // Notice no error here
    return s.toLowerCase() === "ok";
  }
}
```

In this example, we perhaps expected that `s`'s type would be influenced
by the `name: string` parameter of `check`. It is not - `implements`
clauses don't change how the class body is checked or its type inferred.

Similarly, implementing an interface with an optional property doesn't
create that property:

```ts
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
```

### `extends` Clauses 

> Background Reading:\
> [extends keyword
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)\

Classes may `extend` from a base class. A derived class has all the
properties and methods of its base class, and can also define additional
members.

```ts
class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

#### Overriding Methods 

> Background Reading:\
> [super keyword
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)\

A derived class can also override a base class field or property. You
can use the `super.` syntax to access base class methods. Note that
because JavaScript classes are a simple lookup object, there is no
notion of a "super field".

TypeScript enforces that a derived class is always a subtype of its base
class.

For example, here's a legal way to override a method:

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");
```

It's important that a derived class follow its base class contract.
Remember that it's very common (and always legal!) to refer to a derived
class instance through a base class reference:

```ts
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

What if `Derived` didn't follow `Base`'s contract?

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  // Make this parameter required
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
```

If we compiled this code despite the error, this sample would then
crash:

```ts
const b: Base = new Derived();
// Crashes because "name" will be undefined
b.greet();
```

#### Type-only Field Declarations 

When `target >= ES2022` or
[`useDefineForClassFields`](https://www.typescriptlang.org/tsconfig#useDefineForClassFields)
is `true`, class fields are initialized after the parent class
constructor completes, overwriting any value set by the parent class.
This can be a problem when you only want to re-declare a more accurate
type for an inherited field. To handle these cases, you can write
`declare` to indicate to TypeScript that there should be no runtime
effect for this field declaration.

```ts
interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}
 
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
 
class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
```

#### Initialization Order 

The order that JavaScript classes initialize can be surprising in some
cases. Let's consider this code:

```ts
class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}
 
class Derived extends Base {
  name = "derived";
}
 
// Prints "base", not "derived"
const d = new Derived();
```

What happened here?

The order of class initialization, as defined by JavaScript, is:

-   The base class fields are initialized
-   The base class constructor runs
-   The derived class fields are initialized
-   The derived class constructor runs

This means that the base class constructor saw its own value for `name`
during its own constructor, because the derived class field
initializations hadn't run yet.

#### Inheriting Built-in Types 

> Note: If you don't plan to inherit from built-in types like `Array`,
> `Error`, `Map`, etc. or your compilation target is explicitly set to
> `ES6`/`ES2015` or above, you may skip this section

In ES2015, constructors which return an object implicitly substitute the
value of `this` for any callers of `super(...)`. It is necessary for
generated constructor code to capture any potential return value of
`super(...)` and replace it with `this`.

As a result, subclassing `Error`, `Array`, and others may no longer work
as expected. This is due to the fact that constructor functions for
`Error`, `Array`, and the like use ECMAScript 6's `new.target` to adjust
the prototype chain; however, there is no way to ensure a value for
`new.target` when invoking a constructor in ECMAScript 5. Other
downlevel compilers generally have the same limitation by default.

For a subclass like the following:

```ts
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
```

you may find that:

-   methods may be `undefined` on objects returned by constructing these
    subclasses, so calling `sayHello` will result in an error.
-   `instanceof` will be broken between instances of the subclass and
    their instances, so `(new MsgError()) instanceof MsgError` will
    return `false`.

As a recommendation, you can manually adjust the prototype immediately
after any `super(...)` calls.

```ts
class MsgError extends Error {
  constructor(m: string) {
    super(m);
 
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError.prototype);
  }
 
  sayHello() {
    return "hello " + this.message;
  }
}
```

However, any subclass of `MsgError` will have to manually set the
prototype as well. For runtimes that don't support
[`Object.setPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf),
you may instead be able to use
[`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

Unfortunately, [these workarounds will not work on Internet Explorer 10
and
prior](https://msdn.microsoft.com/en-us/library/s4esdbwz(v=vs.94).aspx).
One can manually copy methods from the prototype onto the instance
itself (i.e. `MsgError.prototype` onto `this`), but the prototype chain
itself cannot be fixed.

Member Visibility 
-----------------

You can use TypeScript to control whether certain methods or properties
are visible to code outside the class.

### `public` 

The default visibility of class members is `public`. A `public` member
can be accessed anywhere:

```ts
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
```

Because `public` is already the default visibility modifier, you don't
ever *need* to write it on a class member, but might choose to do so for
style/readability reasons.

### `protected` 

`protected` members are only visible to subclasses of the class they're
declared in.

```ts
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();
```

#### Exposure of `protected` members 

Derived classes need to follow their base class contracts, but may
choose to expose a subtype of base class with more capabilities. This
includes making `protected` members `public`:

```ts
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```

Note that `Derived` was already able to freely read and write `m`, so
this doesn't meaningfully alter the "security" of this situation. The
main thing to note here is that in the derived class, we need to be
careful to repeat the `protected` modifier if this exposure isn't
intentional.

#### Cross-hierarchy `protected` access 

Different OOP languages disagree about whether it's legal to access a
`protected` member through a base class reference:

```ts
class Base {
  protected x: number = 1;
}
class Derived1 extends Base {
  protected x: number = 5;
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Derived1) {
    other.x = 10;
  }
}
```

Java, for example, considers this to be legal. On the other hand, C\#
and C++ chose that this code should be illegal.

TypeScript sides with C\# and C++ here, because accessing `x` in
`Derived2` should only be legal from `Derived2`'s subclasses, and
`Derived1` isn't one of them. Moreover, if accessing `x` through a
`Derived1` reference is illegal (which it certainly should be!), then
accessing it through a base class reference should never improve the
situation.

See also [Why Can't I Access A Protected Member From A Derived
Class?](https://blogs.msdn.microsoft.com/ericlippert/2005/11/09/why-cant-i-access-a-protected-member-from-a-derived-class/)
which explains more of C\#'s reasoning.

### `private` 

`private` is like `protected`, but doesn't allow access to the member
even from subclasses:

```ts
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
```

```ts
class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
  }
}
```

Because `private` members aren't visible to derived classes, a derived
class can't increase their visibility:

```ts
class Base {
  private x = 0;
}
class Derived extends Base {
  x = 1;
}
```

#### Cross-instance `private` access 

Different OOP languages disagree about whether different instances of
the same class may access each others' `private` members. While
languages like Java, C\#, C++, Swift, and PHP allow this, Ruby does not.

TypeScript does allow cross-instance `private` access:

```ts
class A {
  private x = 10;
 
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
```

#### Caveats 

Like other aspects of TypeScript's type system, `private` and
`protected` [are only enforced during type
checking](https://www.typescriptlang.org/play?removeComments=true&target=99&ts=4.3.4#code/PTAEGMBsEMGddAEQPYHNQBMCmVoCcsEAHPASwDdoAXLUAM1K0gwQFdZSA7dAKWkoDK4MkSoByBAGJQJLAwAeAWABQIUH0HDSoiTLKUaoUggAW+DHorUsAOlABJcQlhUy4KpACeoLJzrI8cCwMGxU1ABVPIiwhESpMZEJQTmR4lxFQaQxWMm4IZABbIlIYKlJkTlDlXHgkNFAAbxVQT
IAjfABrAEEC5FZOeIBeUAAGAG5mmSw8WAroSFIqb2GAIjMiIk8VieVJ8Ar01ncAgAoASkaAXxVr3dUwGoQAYWpMHBgCYn1rekZmNg4eUi0Vi2icoBWJCsNBWoA6WE8AHcAiEwmBgTEtDovtDaMZQLM6PEoQZbA5wSk0q5SO4vD4-AEghZoJwLGYEIRwNBoqAzFRwCZCF
UIlFMXECdSiAhId8YZgclx0PsiiVqOVOAAaUAFLAsxWgKiC35MFigfC0FKgSAVVDTSyk+W5dB4fplHVVR6gF7xJrKFotEk-HXIRE9PoDUDDcaTAPTWaceaLZYQlmoPBbHYx-KcQ7HPDnK43FQqfY5+IMDDISPJLCIuqoc47UsuUCofAME3Vzi1r3URvF5QV5A2STtPDdXqunZDgDaYlHnTDrrEAF0dm28B3mDZg6HJwN1+2-hg57ulwNV2NQGoZbjYfNrYiENBwEFaojFiZQK08C-4fFKTVCozWfTgfFgLke
T5AUqiAA).

This means that JavaScript runtime constructs like `in` or simple
property lookup can still access a `private` or `protected` member:

```ts
class MySafe {
  private secretKey = 12345;
}
```

```js
// In a JavaScript file...
const s = new MySafe();
// Will print 12345
console.log(s.secretKey);
```

`private` also allows access using bracket notation during type
checking. This makes `private`-declared fields potentially easier to
access for things like unit tests, with the drawback that these fields
are *soft private* and don't strictly enforce privacy.

```ts
class MySafe {
  private secretKey = 12345;
}
 
const s = new MySafe();
 
// Not allowed during type checking
console.log(s.secretKey);
 
// OK
console.log(s["secretKey"]);
```

Unlike TypeScripts's `private`, JavaScript's [private
fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
(`#`) remain private after compilation and do not provide the previously
mentioned escape hatches like bracket notation access, making them *hard
private*.

```ts
class Dog {
  #barkAmount = 0;
  personality = "happy";
 
  constructor() {}
}
```

```ts
"use strict";
class Dog {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}
 
```

When compiling to ES2021 or less, TypeScript will use WeakMaps in place
of `#`.

```ts
"use strict";
var _Dog_barkAmount;
class Dog {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
_Dog_barkAmount = new WeakMap();
 
```

If you need to protect values in your class from malicious actors, you
should use mechanisms that offer hard runtime privacy, such as closures,
WeakMaps, or private fields. Note that these added privacy checks during
runtime could affect performance.

Static Members 
--------------

> Background Reading:\
> [Static Members
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)\

Classes may have `static` members. These members aren't associated with
a particular instance of the class. They can be accessed through the
class constructor object itself:

```ts
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

Static members can also use the same `public`, `protected`, and
`private` visibility modifiers:

```ts
class MyClass {
  private static x = 0;
}
console.log(MyClass.x);
```

Static members are also inherited:

```ts
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
```

### Special Static Names 

It's generally not safe/possible to overwrite properties from the
`Function` prototype. Because classes are themselves functions that can
be invoked with `new`, certain `static` names can't be used. Function
properties like `name`, `length`, and `call` aren't valid to define as
`static` members:

```ts
class S {
  static name = "S!";
}
```

### Why No Static Classes? 

TypeScript (and JavaScript) don't have a construct called `static class`
the same way as, for example, C\# does.

Those constructs *only* exist because those languages force all data and
functions to be inside a class; because that restriction doesn't exist
in TypeScript, there's no need for them. A class with only a single
instance is typically just represented as a normal *object* in
JavaScript/TypeScript.

For example, we don't need a "static class" syntax in TypeScript because
a regular object (or even top-level function) will do the job just as
well:

```ts
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}
 
// Preferred (alternative 1)
function doSomething() {}
 
// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};
```

`static` Blocks in Classes 
--------------------------

Static blocks allow you to write a sequence of statements with their own
scope that can access private fields within the containing class. This
means that we can write initialization code with all the capabilities of
writing statements, no leakage of variables, and full access to our
class's internals.

```ts
class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}
```

Generic Classes 
---------------

Classes, much like interfaces, can be generic. When a generic class is
instantiated with `new`, its type parameters are inferred the same way
as in a function call:

```ts
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!");
```

Classes can use generic constraints and defaults the same way as
interfaces.

### Type Parameters in Static Members 

This code isn't legal, and it may not be obvious why:

```ts
class Box<Type> {
  static defaultValue: Type;
}
```

Remember that types are always fully erased! At runtime, there's only
*one* `Box.defaultValue` property slot. This means that setting
`Box<string>.defaultValue` (if that were possible) would *also* change
`Box<number>.defaultValue` - not good. The `static` members of a generic
class can never refer to the class's type parameters.

`this` at Runtime in Classes 
----------------------------

> Background Reading:\
> [this keyword
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)\

It's important to remember that TypeScript doesn't change the runtime
behavior of JavaScript, and that JavaScript is somewhat famous for
having some peculiar runtime behaviors.

JavaScript's handling of `this` is indeed unusual:

```ts
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
 
// Prints "obj", not "MyClass"
console.log(obj.getName());
```

Long story short, by default, the value of `this` inside a function
depends on *how the function was called*. In this example, because the
function was called through the `obj` reference, its value of `this` was
`obj` rather than the class instance.

This is rarely what you want to happen! TypeScript provides some ways to
mitigate or prevent this kind of error.

### Arrow Functions 

> Background Reading:\
> [Arrow functions
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\

If you have a function that will often be called in a way that loses its
`this` context, it can make sense to use an arrow function property
instead of a method definition:

```ts
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
```

This has some trade-offs:

-   The `this` value is guaranteed to be correct at runtime, even for
    code not checked with TypeScript
-   This will use more memory, because each class instance will have its
    own copy of each function defined this way
-   You can't use `super.getName` in a derived class, because there's no
    entry in the prototype chain to fetch the base class method from

### `this` parameters 

In a method or function definition, an initial parameter named `this`
has special meaning in TypeScript. These parameters are erased during
compilation:

```ts
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) {
  /* ... */
}
```

```js
// JavaScript output
function fn(x) {
  /* ... */
}
```

TypeScript checks that calling a function with a `this` parameter is
done so with a correct context. Instead of using an arrow function, we
can add a `this` parameter to method definitions to statically enforce
that the method is called correctly:

```ts
class MyClass {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();
 
// Error, would crash
const g = c.getName;
console.log(g());
```

This method makes the opposite trade-offs of the arrow function
approach:

-   JavaScript callers might still use the class method incorrectly
    without realizing it
-   Only one function per class definition gets allocated, rather than
    one per class instance
-   Base method definitions can still be called via `super`.

`this` Types 
------------

In classes, a special type called `this` refers *dynamically* to the
type of the current class. Let's see how this is useful:

```ts
class Box {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}
```

Here, TypeScript inferred the return type of `set` to be `this`, rather
than `Box`. Now let's make a subclass of `Box`:

```ts
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}
 
const a = new ClearableBox();
const b = a.set("hello");
```

You can also use `this` in a parameter type annotation:

```ts
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
```

This is different from writing `other: Box` --- if you have a derived
class, its `sameAs` method will now only accept other instances of that
same derived class:

```ts
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
 
class DerivedBox extends Box {
  otherContent: string = "?";
}
 
const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
```

### `this`-based type guards 

You can use `this is Type` in the return position for methods in classes
and interfaces. When mixed with a type narrowing (e.g. `if` statements)
the type of the target object would be narrowed to the specified `Type`.

```ts
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}
```

A common use-case for a this-based type guard is to allow for lazy
validation of a particular field. For example, this case removes an
`undefined` from the value held inside box when `hasValue` has been
verified to be true:

```ts
class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box();
box.value = "Gameboy";
 
box.value;
 
if (box.hasValue()) {
  box.value;
}
```

Parameter Properties 
--------------------

TypeScript offers special syntax for turning a constructor parameter
into a class property with the same name and value. These are called
*parameter properties* and are created by prefixing a constructor
argument with one of the visibility modifiers `public`, `private`,
`protected`, or `readonly`. The resulting field gets those modifier(s):

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);
console.log(a.z);
```

Class Expressions 
-----------------

> Background Reading:\
> [Class expressions
> (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)\

Class expressions are very similar to class declarations. The only real
difference is that class expressions don't need a name, though we can
refer to them via whatever identifier they ended up bound to:

```ts
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
 
const m = new someClass("Hello, world");
```

Constructor Signatures 
----------------------

JavaScript classes are instantiated with the `new` operator. Given the
type of a class itself, the
[InstanceType](../utility-types#instancetypetype) utility type models
this operation.

```ts
class Point {
  createdAt: number;
  x: number;
  y: number
  constructor(x: number, y: number) {
    this.createdAt = Date.now()
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>
 
function moveRight(point: PointInstance) {
  point.x += 5;
}
 
const point = new Point(3, 4);
moveRight(point);
point.x; // => 8
```

`abstract` Classes and Members 
------------------------------

Classes, methods, and fields in TypeScript may be *abstract*.

An *abstract method* or *abstract field* is one that hasn't had an
implementation provided. These members must exist inside an *abstract
class*, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses
which do implement all the abstract members. When a class doesn't have
any abstract members, it is said to be *concrete*.

Let's look at an example:

```ts
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
const b = new Base();
```

We can't instantiate `Base` with `new` because it's abstract. Instead,
we need to make a derived class and implement the abstract members:

```ts
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
```

Notice that if we forget to implement the base class's abstract members,
we'll get an error:

```ts
class Derived extends Base {
  // forgot to do anything
}
```

### Abstract Construct Signatures 

Sometimes you want to accept some class constructor function that
produces an instance of a class which derives from some abstract class.

For example, you might want to write this code:

```ts
function greet(ctor: typeof Base) {
  const instance = new ctor();
  instance.printName();
}
```

TypeScript is correctly telling you that you're trying to instantiate an
abstract class. After all, given the definition of `greet`, it's
perfectly legal to write this code, which would end up constructing an
abstract class:

```ts
// Bad!
greet(Base);
```

Instead, you want to write a function that accepts something with a
construct signature:

```ts
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);
```

Now TypeScript correctly tells you about which class constructor
functions can be invoked - `Derived` can because it's concrete, but
`Base` cannot.

Relationships Between Classes 
-----------------------------

In most cases, classes in TypeScript are compared structurally, the same
as other types.

For example, these two classes can be used in place of each other
because they're identical:

```ts
class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p: Point1 = new Point2();
```

Similarly, subtype relationships between classes exist even if there's
no explicit inheritance:

```ts
class Person {
  name: string;
  age: number;
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const p: Person = new Employee();
```

This sounds straightforward, but there are a few cases that seem
stranger than others.

Empty classes have no members. In a structural type system, a type with
no members is generally a supertype of anything else. So if you write an
empty class (don't!), anything can be used in place of it:

```ts
class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
fn(window);
fn({});
fn(fn);
```

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/2/classes.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/classes.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

classes property
================

::: {#getter .section .multi-line-signature}
[CssClassSet](../../dart-html/cssclassset-class) classes

::: {.features}
override
:::
:::

The set of CSS classes applied to this element.

This set makes it easy to add, remove or toggle the classes applied to
this element.

``` {.language-dart data-language="dart"}
element.classes.add('selected');
element.classes.toggle('isOnline');
element.classes.remove('selected');
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssClassSet get classes => new AttributeClassSet(this);
```

::: {#setter .section .multi-line-signature}
void
classes=([Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
value)

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set classes(Iterable<String> value) {
  // TODO(sra): Do this without reading the classes in clear() and addAll(),
  // or writing the classes in clear().
  CssClassSet classSet = classes;
  classSet.clear();
  classSet.addAll(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/classes.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/classes.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

classes property
================

::: {#getter .section .multi-line-signature}
[CssClassSet](../cssclassset-class) classes
:::

The set of CSS classes applied to this element.

This set makes it easy to add, remove or toggle the classes applied to
this element.

``` {.language-dart data-language="dart"}
element.classes.add('selected');
element.classes.toggle('isOnline');
element.classes.remove('selected');
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssClassSet get classes => new _ElementCssClassSet(this);
```

::: {#setter .section .multi-line-signature}
void
classes=([Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set classes(Iterable<String> value) {
  // TODO(sra): Do this without reading the classes in clear() and addAll(),
  // or writing the classes in clear().
  CssClassSet classSet = classes;
  classSet.clear();
  classSet.addAll(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/classes.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/classes.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

classes property
================

::: {#getter .section .multi-line-signature}
[CssClassSet](../cssclassset-class) classes
:::

The union of all CSS classes applied to the elements in this list.

This set makes it easy to add, remove or toggle (add if not present,
remove if present) the classes applied to a collection of elements.

``` {.language-dart data-language="dart"}
htmlList.classes.add('selected');
htmlList.classes.toggle('isOnline');
htmlList.classes.remove('selected');
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssClassSet get classes;
```

::: {#setter .section .multi-line-signature}
void
classes=([Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
value)
:::

Replace the classes with `value` for every element in this list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set classes(Iterable<String> value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/classes.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Classes.md)

# Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but have some syntax and semantics that are not shared with ES5 class-like semantics.

Visit the following resources to learn more:

- [@article@Classes in JavaScript](https://javascript.info/classes)
- [@article@JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)


## 관련 로드맵
- [[JavaScript|javascript]]
