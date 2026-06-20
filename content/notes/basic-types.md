Basic Types
===========

 
<div>

This handbook page has been replaced, [go to the new
page](2/everyday-types)

</div>


For programs to be useful, we need to be able to work with some of the
simplest units of data: numbers, strings, structures, boolean values,
and the like. In TypeScript, we support the same types as you would
expect in JavaScript, with an extra enumeration type thrown in to help
things along.

Boolean 
-------

The most basic datatype is the simple true/false value, which JavaScript
and TypeScript call a `boolean` value.

```ts
let isDone: boolean = false;
```

Number 
------

As in JavaScript, all numbers in TypeScript are either floating point
values or BigIntegers. These floating point numbers get the type
`number`, while BigIntegers get the type `bigint`. In addition to
hexadecimal and decimal literals, TypeScript also supports binary and
octal literals introduced in ECMAScript 2015.

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

String 
------

Another fundamental part of creating programs in JavaScript for webpages
and servers alike is working with textual data. As in other languages,
we use the type `string` to refer to these textual datatypes. Just like
JavaScript, TypeScript also uses double quotes (`"`) or single quotes
(`'`) to surround string data.

```ts
let color: string = "blue";
color = 'red';
```

You can also use *template strings*, which can span multiple lines and
have embedded expressions. These strings are surrounded by the
backtick/backquote (`` ` ``) character, and embedded expressions are of
the form `${ expr }`.

```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
```

This is equivalent to declaring `sentence` like so:

```ts
let sentence: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
```

Array 
-----

TypeScript, like JavaScript, allows you to work with arrays of values.
Array types can be written in one of two ways. In the first, you use the
type of the elements followed by `[]` to denote an array of that element
type:

```ts
let list: number[] = [1, 2, 3];
```

The second way uses a generic array type, `Array<elemType>`:

```ts
let list: Array<number> = [1, 2, 3];
```

Tuple 
-----

Tuple types allow you to express an array with a fixed number of
elements whose types are known, but need not be the same. For example,
you may want to represent a value as a pair of a `string` and a
`number`:

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

When accessing an element with a known index, the correct type is
retrieved:

```ts
// OK
console.log(x[0].substring(1));
 
console.log(x[1].substring(1));
```

Accessing an element outside the set of known indices fails with an
error:

```ts
x[3] = "world";
 
console.log(x[5].toString());
```

Enum 
----

A helpful addition to the standard set of datatypes from JavaScript is
the `enum`. As in languages like C\#, an enum is a way of giving more
friendly names to sets of numeric values.

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

By default, enums begin numbering their members starting at `0`. You can
change this by manually setting the value of one of its members. For
example, we can start the previous example at `1` instead of `0`:

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to
the name of that value in the enum. For example, if we had the value `2`
but weren't sure what that mapped to in the `Color` enum above, we could
look up the corresponding name:

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
 
// Displays 'Green'
console.log(colorName);
```

Unknown 
-------

We may need to describe the type of variables that we do not know when
we are writing an application. These values may come from dynamic
content -- e.g. from the user -- or we may want to intentionally accept
all values in our API. In these cases, we want to provide a type that
tells the compiler and future readers that this variable could be
anything, so we give it the `unknown` type.

```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;
```

If you have a variable with an unknown type, you can narrow it to
something more specific by doing `typeof` checks, comparison checks, or
more advanced type guards that will be discussed in a later chapter:

```ts
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
 
if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
}
 
if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
}
```

Any 
---

In some situations, not all type information is available or its
declaration would take an inappropriate amount of effort. These may
occur for values from code that has been written without TypeScript or a
3rd party library. In these cases, we might want to opt-out of type
checking. To do so, we label these values with the `any` type:

```ts
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
```

The `any` type is a powerful way to work with existing JavaScript,
allowing you to gradually opt-in and opt-out of type checking during
compilation.

Unlike `unknown`, variables of type `any` allow you to access arbitrary
properties, even ones that don't exist. These properties include
functions and TypeScript will not check their existence or type:

```ts
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
```

The `any` will continue to propagate through your objects:

```ts
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
```

After all, remember that all the convenience of `any` comes at the cost
of losing type safety. Type safety is one of the main motivations for
using TypeScript and you should try to avoid using `any` when not
necessary.

Void 
----

`void` is a little like the opposite of `any`: the absence of having any
type at all. You may commonly see this as the return type of functions
that do not return a value:

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

Declaring variables of type `void` is not useful because you can only
assign `null` (only if
[`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)
is not specified, see next section) or `undefined` to them:

```ts
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;
```

Null and Undefined 
------------------

In TypeScript, both `undefined` and `null` actually have their types
named `undefined` and `null` respectively. Much like `void`, they're not
extremely useful on their own:

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

By default `null` and `undefined` are subtypes of all other types. That
means you can assign `null` and `undefined` to something like `number`.

However, when using the
[`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)
flag, `null` and `undefined` are only assignable to `unknown`, `any` and
their respective types (the one exception being that `undefined` is also
assignable to `void`). This helps avoid *many* common errors. In cases
where you want to pass in either a `string` or `null` or `undefined`,
you can use the union type `string | null | undefined`.

Union types are an advanced topic that we'll cover in a later chapter.

> As a note: we encourage the use of
> [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)
> when possible, but for the purposes of this handbook, we will assume
> it is turned off.

Never 
-----

The `never` type represents the type of values that never occur. For
instance, `never` is the return type for a function expression or an
arrow function expression that always throws an exception or one that
never returns. Variables also acquire the type `never` when narrowed by
any type guards that can never be true.

The `never` type is a subtype of, and assignable to, every type;
however, *no* type is a subtype of, or assignable to, `never` (except
`never` itself). Even `any` isn't assignable to `never`.

Some examples of functions returning `never`:

```ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

Object 
------

`object` is a type that represents the non-primitive type, i.e. anything
that is not `number`, `string`, `boolean`, `bigint`, `symbol`, `null`,
or `undefined`.

With `object` type, APIs like `Object.create` can be better represented.
For example:

```ts
declare function create(o: object | null): void;
 
// OK
create({ prop: 0 });
create(null);
create(undefined); // with `--strictNullChecks` flag enabled, undefined is not a subtype of null
 
create(42);
create("string");
create(false);
```

Generally, you won't need to use this.

Type assertions 
---------------

Sometimes you'll end up in a situation where you'll know more about a
value than TypeScript does. Usually, this will happen when you know the
type of some entity could be more specific than its current type.

*Type assertions* are a way to tell the compiler "trust me, I know what
I'm doing." A type assertion is like a type cast in other languages, but
it performs no special checking or restructuring of data. It has no
runtime impact and is used purely by the compiler. TypeScript assumes
that you, the programmer, have performed any special checks that you
need.

Type assertions have two forms.

One is the `as`-syntax:

```ts
let someValue: unknown = "this is a string";
 
let strLength: number = (someValue as string).length;
```

The other version is the "angle-bracket" syntax:

```ts
let someValue: unknown = "this is a string";
 
let strLength: number = (<string>someValue).length;
```

The two samples are equivalent. Using one over the other is mostly a
choice of preference; however, when using TypeScript with JSX, only
`as`-style assertions are allowed.

A note about `let` 
------------------

You may have noticed that so far, we've been using the `let` keyword
instead of JavaScript's `var` keyword which you might be more familiar
with. The `let` keyword is actually a newer JavaScript construct that
TypeScript makes available. You can read in the Handbook Reference on
[Variable Declarations](variable-declarations) more about how `let` and
`const` fix a lot of the problems with `var`.

About `Number`, `String`, `Boolean`, `Symbol` and `Object` 
----------------------------------------------------------

It can be tempting to think that the types `Number`, `String`,
`Boolean`, `Symbol`, or `Object` are the same as the lowercase versions
recommended above. These types do not refer to the language primitives
however, and almost never should be used as a type.

```ts
function reverse(s: String): String {
  return s.split("").reverse().join("");
}
 
reverse("hello world");
```

Instead, use the types `number`, `string`, `boolean`, `object` and
`symbol`.

```ts
function reverse(s: string): string {
  return s.split("").reverse().join("");
}
 
reverse("hello world");
```

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/basic-types.html>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/typescript/2/basic-types.md)
The Basics
==========

Each and every value in JavaScript has a set of behaviors you can
observe from running different operations. That sounds abstract, but as
a quick example, consider some operations we might run on a variable
named `message`.

```js
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();

// Calling 'message'
message();
```

If we break this down, the first runnable line of code accesses a
property called `toLowerCase` and then calls it. The second one tries to
call `message` directly.

But assuming we don't know the value of `message` - and that's pretty
common - we can't reliably say what results we'll get from trying to run
any of this code. The behavior of each operation depends entirely on
what value we had in the first place.

-   Is `message` callable?
-   Does it have a property called `toLowerCase` on it?
-   If it does, is `toLowerCase` even callable?
-   If both of these values are callable, what do they return?

The answers to these questions are usually things we keep in our heads
when we write JavaScript, and we have to hope we got all the details
right.

Let's say `message` was defined in the following way.

```js
const message = "Hello World!";
```

As you can probably guess, if we try to run `message.toLowerCase()`,
we'll get the same string only in lower-case.

What about that second line of code? If you're familiar with JavaScript,
you'll know this fails with an exception:

```text
TypeError: message is not a function
```

It'd be great if we could avoid mistakes like this.

When we run our code, the way that our JavaScript runtime chooses what
to do is by figuring out the *type* of the value - what sorts of
behaviors and capabilities it has. That's part of what that `TypeError`
is alluding to - it's saying that the string `"Hello World!"` cannot be
called as a function.

For some values, such as the primitives `string` and `number`, we can
identify their type at runtime using the `typeof` operator. But for
other things like functions, there's no corresponding runtime mechanism
to identify their types. For example, consider this function:

```js
function fn(x) {
  return x.flip();
}
```

We can *observe* by reading the code that this function will only work
if given an object with a callable `flip` property, but JavaScript
doesn't surface this information in a way that we can check while the
code is running. The only way in pure JavaScript to tell what `fn` does
with a particular value is to call it and see what happens. This kind of
behavior makes it hard to predict what the code will do before it runs,
which means it's harder to know what your code is going to do while
you're writing it.

Seen in this way, a *type* is the concept of describing which values can
be passed to `fn` and which will crash. JavaScript only truly provides
*dynamic* typing - running the code to see what happens.

The alternative is to use a *static* type system to make predictions
about what the code is expected to do *before* it runs.

Static type-checking 
--------------------

Think back to that `TypeError` we got earlier from trying to call a
`string` as a function. *Most people* don't like to get any sorts of
errors when running their code - those are considered bugs! And when we
write new code, we try our best to avoid introducing new bugs.

If we add just a bit of code, save our file, re-run the code, and
immediately see the error, we might be able to isolate the problem
quickly; but that's not always the case. We might not have tested the
feature thoroughly enough, so we might never actually run into a
potential error that would be thrown! Or if we were lucky enough to
witness the error, we might have ended up doing large refactorings and
adding a lot of different code that we're forced to dig through.

Ideally, we could have a tool that helps us find these bugs *before* our
code runs. That's what a static type-checker like TypeScript does.
*Static types systems* describe the shapes and behaviors of what our
values will be when we run our programs. A type-checker like TypeScript
uses that information and tells us when things might be going off the
rails.

```ts
const message = "hello!";
 
message();
```

Running that last sample with TypeScript will give us an error message
before we run the code in the first place.

Non-exception Failures 
----------------------

So far we've been discussing certain things like runtime errors - cases
where the JavaScript runtime tells us that it thinks something is
nonsensical. Those cases come up because [the ECMAScript
specification](https://tc39.github.io/ecma262/) has explicit
instructions on how the language should behave when it runs into
something unexpected.

For example, the specification says that trying to call something that
isn't callable should throw an error. Maybe that sounds like "obvious
behavior", but you could imagine that accessing a property that doesn't
exist on an object should throw an error too. Instead, JavaScript gives
us different behavior and returns the value `undefined`:

```js
const user = {
  name: "Daniel",
  age: 26,
};

user.location; // returns undefined
```

Ultimately, a static type system has to make the call over what code
should be flagged as an error in its system, even if it's "valid"
JavaScript that won't immediately throw an error. In TypeScript, the
following code produces an error about `location` not being defined:

```ts
const user = {
  name: "Daniel",
  age: 26,
};
 
user.location;
```

While sometimes that implies a trade-off in what you can express, the
intent is to catch legitimate bugs in our programs. And TypeScript
catches *a lot* of legitimate bugs.

For example: typos,

```ts
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();
```

uncalled functions,

```ts
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
}
```

or basic logic errors.

```ts
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Oops, unreachable
}
```

Types for Tooling 
-----------------

TypeScript can catch bugs when we make mistakes in our code. That's
great, but TypeScript can *also* prevent us from making those mistakes
in the first place.

The type-checker has information to check things like whether we're
accessing the right properties on variables and other properties. Once
it has that information, it can also start *suggesting* which properties
you might want to use.

That means TypeScript can be leveraged for editing code too, and the
core type-checker can provide error messages and code completion as you
type in the editor. That's part of what people often refer to when they
talk about tooling in TypeScript.

```ts
import express from "express";
const app = express();
 
app.get("/", function (req, res) {
  res.sen
});
 
app.listen(3000);
```

TypeScript takes tooling seriously, and that goes beyond completions and
errors as you type. An editor that supports TypeScript can deliver
"quick fixes" to automatically fix errors, refactorings to easily
re-organize code, and useful navigation features for jumping to
definitions of a variable, or finding all references to a given
variable. All of this is built on top of the type-checker and is fully
cross-platform, so it's likely that [your favorite editor has TypeScript
support
available](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

`tsc`, the TypeScript compiler 
------------------------------

We've been talking about type-checking, but we haven't yet used our
type-*checker*. Let's get acquainted with our new friend `tsc`, the
TypeScript compiler. First we'll need to grab it via npm.

```shell
npm install -g typescript
```

> This installs the TypeScript Compiler `tsc` globally. You can use
> `npx` or similar tools if you'd prefer to run `tsc` from a local
> `node_modules` package instead.

Now let's move to an empty folder and try writing our first TypeScript
program: `hello.ts`:

```ts
// Greets the world.
console.log("Hello world!");
```

Notice there are no frills here; this "hello world" program looks
identical to what you'd write for a "hello world" program in JavaScript.
And now let's type-check it by running the command `tsc` which was
installed for us by the `typescript` package.

```shell
tsc hello.ts
```

Tada!

Wait, "tada" *what* exactly? We ran `tsc` and nothing happened! Well,
there were no type errors, so we didn't get any output in our console
since there was nothing to report.

But check again - we got some *file* output instead. If we look in our
current directory, we'll see a `hello.js` file next to `hello.ts`.
That's the output from our `hello.ts` file after `tsc` *compiles* or
*transforms* it into a plain JavaScript file. And if we check the
contents, we'll see what TypeScript spits out after it processes a `.ts`
file:

```js
// Greets the world.
console.log("Hello world!");
```

In this case, there was very little for TypeScript to transform, so it
looks identical to what we wrote. The compiler tries to emit clean
readable code that looks like something a person would write. While
that's not always so easy, TypeScript indents consistently, is mindful
of when our code spans across different lines of code, and tries to keep
comments around.

What about if we *did* introduce a type-checking error? Let's rewrite
`hello.ts`:

```ts
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");
```

If we run `tsc hello.ts` again, notice that we get an error on the
command line!

```text
Expected 2 arguments, but got 1.
```

TypeScript is telling us we forgot to pass an argument to the `greet`
function, and rightfully so. So far we've only written standard
JavaScript, and yet type-checking was still able to find problems with
our code. Thanks TypeScript!

Emitting with Errors 
--------------------

One thing you might not have noticed from the last example was that our
`hello.js` file changed again. If we open that file up then we'll see
that the contents still basically look the same as our input file. That
might be a bit surprising given the fact that `tsc` reported an error
about our code, but this is based on one of TypeScript's core values:
much of the time, *you* will know better than TypeScript.

To reiterate from earlier, type-checking code limits the sorts of
programs you can run, and so there's a tradeoff on what sorts of things
a type-checker finds acceptable. Most of the time that's okay, but there
are scenarios where those checks get in the way. For example, imagine
yourself migrating JavaScript code over to TypeScript and introducing
type-checking errors. Eventually you'll get around to cleaning things up
for the type-checker, but that original JavaScript code was already
working! Why should converting it over to TypeScript stop you from
running it?

So TypeScript doesn't get in your way. Of course, over time, you may
want to be a bit more defensive against mistakes, and make TypeScript
act a bit more strictly. In that case, you can use the
[`noEmitOnError`](https://www.typescriptlang.org/tsconfig#noEmitOnError)
compiler option. Try changing your `hello.ts` file and running `tsc`
with that flag:

```shell
tsc --noEmitOnError hello.ts
```

You'll notice that `hello.js` never gets updated.

Explicit Types 
--------------

Up until now, we haven't told TypeScript what `person` or `date` are.
Let's edit the code to tell TypeScript that `person` is a `string`, and
that `date` should be a `Date` object. We'll also use the
`toDateString()` method on `date`.

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

What we did was add *type annotations* on `person` and `date` to
describe what types of values `greet` can be called with. You can read
that signature as "`greet` takes a `person` of type `string`, and a
`date` of type `Date`".

With this, TypeScript can tell us about other cases where `greet` might
have been called incorrectly. For example...

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", Date());
```

Huh? TypeScript reported an error on our second argument, but why?

Perhaps surprisingly, calling `Date()` in JavaScript returns a `string`.
On the other hand, constructing a `Date` with `new Date()` actually
gives us what we were expecting.

Anyway, we can quickly fix up the error:

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
```

Keep in mind, we don't always have to write explicit type annotations.
In many cases, TypeScript can even just *infer* (or "figure out") the
types for us even if we omit them.

```ts
let msg = "hello there!";
```

Even though we didn't tell TypeScript that `msg` had the type `string`
it was able to figure that out. That's a feature, and it's best not to
add annotations when the type system would end up inferring the same
type anyway.

> Note: The message bubble inside the previous code sample is what your
> editor would show if you had hovered over the word.

Erased Types 
------------

Let's take a look at what happens when we compile the above function
`greet` with `tsc` to output JavaScript:

```ts
"use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
 
```

Notice two things here:

1.  Our `person` and `date` parameters no longer have type annotations.
2.  Our "template string" - that string that used backticks (the `` ` ``
    character) - was converted to plain strings with concatenations.

More on that second point later, but let's now focus on that first
point. Type annotations aren't part of JavaScript (or ECMAScript to be
pedantic), so there really aren't any browsers or other runtimes that
can just run TypeScript unmodified. That's why TypeScript needs a
compiler in the first place - it needs some way to strip out or
transform any TypeScript-specific code so that you can run it. Most
TypeScript-specific code gets erased away, and likewise, here our type
annotations were completely erased.

> **Remember**: Type annotations never change the runtime behavior of
> your program.

Downleveling 
------------

One other difference from the above was that our template string was
rewritten from

```js
`Hello ${person}, today is ${date.toDateString()}!`;
```

to

```js
"Hello ".concat(person, ", today is ").concat(date.toDateString(), "!");
```

Why did this happen?

Template strings are a feature from a version of ECMAScript called
ECMAScript 2015 (a.k.a. ECMAScript 6, ES2015, ES6, etc. - *don't ask*).
TypeScript has the ability to rewrite code from newer versions of
ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a.
ES3 and ES5). This process of moving from a newer or "higher" version of
ECMAScript down to an older or "lower" one is sometimes called
*downleveling*.

By default TypeScript targets ES3, an extremely old version of
ECMAScript. We could have chosen something a little bit more recent by
using the [`target`](https://www.typescriptlang.org/tsconfig#target)
option. Running with `--target es2015` changes TypeScript to target
ECMAScript 2015, meaning code should be able to run wherever ECMAScript
2015 is supported. So running `tsc --target es2015 hello.ts` gives us
the following output:

```js
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

> While the default target is ES3, the great majority of current
> browsers support ES2015. Most developers can therefore safely specify
> ES2015 or above as a target, unless compatibility with certain ancient
> browsers is important.

Strictness 
----------

Different users come to TypeScript looking for different things in a
type-checker. Some people are looking for a more loose opt-in experience
which can help validate only some parts of their program, and still have
decent tooling. This is the default experience with TypeScript, where
types are optional, inference takes the most lenient types, and there's
no checking for potentially `null`/`undefined` values. Much like how
`tsc` emits in the face of errors, these defaults are put in place to
stay out of your way. If you're migrating existing JavaScript, that
might be a desirable first step.

In contrast, a lot of users prefer to have TypeScript validate as much
as it can straight away, and that's why the language provides strictness
settings as well. These strictness settings turn static type-checking
from a switch (either your code is checked or not) into something closer
to a dial. The further you turn this dial up, the more TypeScript will
check for you. This can require a little extra work, but generally
speaking it pays for itself in the long run, and enables more thorough
checks and more accurate tooling. When possible, a new codebase should
always turn these strictness checks on.

TypeScript has several type-checking strictness flags that can be turned
on or off, and all of our examples will be written with all of them
enabled unless otherwise stated. The
[`strict`](https://www.typescriptlang.org/tsconfig#strict) flag in the
CLI, or `"strict": true` in a [`tsconfig.json`](../tsconfig-json)
toggles them all on simultaneously, but we can opt out of them
individually. The two biggest ones you should know about are
[`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
and
[`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks).

`noImplicitAny` 
---------------

Recall that in some places, TypeScript doesn't try to infer types for us
and instead falls back to the most lenient type: `any`. This isn't the
worst thing that can happen - after all, falling back to `any` is just
the plain JavaScript experience anyway.

However, using `any` often defeats the purpose of using TypeScript in
the first place. The more typed your program is, the more validation and
tooling you'll get, meaning you'll run into fewer bugs as you code.
Turning on the
[`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
flag will issue an error on any variables whose type is implicitly
inferred as `any`.

`strictNullChecks` 
------------------

By default, values like `null` and `undefined` are assignable to any
other type. This can make writing some code easier, but forgetting to
handle `null` and `undefined` is the cause of countless bugs in the
world - some consider it a [billion dollar
mistake](https://www.youtube.com/watch?v=ybrQvs4x0Ps)! The
[`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)
flag makes handling `null` and `undefined` more explicit, and *spares*
us from worrying about whether we *forgot* to handle `null` and
`undefined`.

 
© 2012-2023 Microsoft\
Licensed under the Apache License, Version 2.0.\
https://www.typescriptlang.org/docs/handbook/2/basic-types.html>

