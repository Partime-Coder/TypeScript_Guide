# TypeScript Fundamentals

## 1. Installing TypeScript (Traditional Way)

This section covers the traditional TypeScript setup process without using frameworks such as React or Node.js. The goal is to understand how TypeScript works in a standalone project.

### Project Initialization

Create a new project and initialize npm:

```bash
npm init -y
```

This creates a `package.json` file with default settings.

### Installing TypeScript

Install TypeScript as a development dependency:

```bash
npm install -D typescript
```

> TypeScript is usually installed per project rather than globally because different projects may require different TypeScript versions.

For a global installation:

```bash
npm install -g typescript
```

### Type Definitions

In real-world projects, you will often install additional type definition packages such as:

```bash
npm install -D @types/node
npm install -D @types/react
```

These packages provide type information for libraries and improve IntelliSense and type checking.

### Creating tsconfig.json

Initialize a TypeScript configuration file:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file containing compiler settings.

### Important tsconfig.json Options

```json
{
  "rootDir": "./src",
  "outDir": "./dist"
}
```

* `rootDir` → Location of TypeScript source files.
* `outDir` → Location where compiled JavaScript files are generated.

### Creating the First TypeScript File

Create a file:

```text
src/index.ts
```

Example:

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}

let username = "Sujal";

console.log(greet(username));
```

### Type Inference

TypeScript can automatically determine types.

```ts
let username = "Sujal";
```

TypeScript infers:

```ts
let username: string;
```

This feature is called **Type Inference**.

### Benefits of Type Safety

TypeScript provides:

* Autocomplete
* IntelliSense
* Parameter suggestions
* Return type information
* Compile-time error detection

This makes large codebases easier to understand and maintain.

### Compiling TypeScript

Compile the project:

```bash
npx tsc
```

TypeScript reads the configuration from `tsconfig.json` and generates output files.

### Generated Files

```text
dist/
├── index.js
├── index.d.ts
└── index.js.map
```

#### index.js

Compiled JavaScript code executed by browsers or Node.js.

#### index.d.ts

Declaration file containing only type information.

#### index.js.map

Source map used for debugging TypeScript code.

### Running the Application

Execute the compiled JavaScript:

```bash
node dist/index.js
```

### Adding Scripts

```json
{
  "scripts": {
    "dev": "npx tsc",
    "start": "node dist/index.js"
  }
}
```

Run:

```bash
npm run dev
npm start
```

### Using ts-node

Install:

```bash
npm install -D ts-node
```

Run TypeScript directly:

```bash
npx ts-node src/index.ts
```

This avoids manually compiling before execution.

### Development vs Production

Development:

```text
TypeScript (.ts)
      ↓
 ts-node / tsx
      ↓
 Execution
```

Production:

```text
TypeScript (.ts)
      ↓
      tsc
      ↓
JavaScript (.js)
      ↓
    Node.js
```

### Summary

Traditional TypeScript setup consists of:

1. Initialize npm project.
2. Install TypeScript.
3. Create `tsconfig.json`.
4. Create `.ts` files inside `src`.
5. Compile using `npx tsc`.
6. Run generated JavaScript.
7. Use `.d.ts` and `.map` files for type information and debugging.

## 2. Type Annotations & Type Inference

TypeScript can determine types automatically, or developers can explicitly provide them.

### Type Inference

Type Inference is the process where TypeScript automatically determines the type of a variable based on its assigned value.

```ts id="qksuxc"
let name = "Sujal";
```

TypeScript infers:

```ts id="ud1w3l"
let name: string;
```

Even though no type was explicitly written, TypeScript understands that `name` is a string.

```ts id="ezib50"
name = 23;
```

Error:

```text id="ozf6rl"
Type 'number' is not assignable to type 'string'.
```

#### Union Type Inference

TypeScript can infer multiple possible types.

```ts id="swzc4i"
let value = Math.random() > 0.5 ? 10 : "5";
```

TypeScript infers:

```ts id="0xvzxv"
let value: number | string;
```

Since both a number and a string are possible outcomes, TypeScript creates a union type automatically.

> Type inference works with variables, function return values, arrays, objects, and most JavaScript constructs.

---

### Type Annotations

Type Annotations allow developers to explicitly specify the type of a variable, parameter, or return value.

```ts id="x09eqf"
let surname: string = "Bhagat";
```

Here, the developer explicitly tells TypeScript that `surname` must always be a string.

```ts id="9wp76l"
let isAlive: boolean = true;
```

TypeScript now enforces that only boolean values can be assigned to `isAlive`.

#### Why Use Type Annotations?

* Makes code more readable.
* Improves maintainability.
* Prevents accidental type changes.
* Clearly communicates developer intent.
* Useful when TypeScript cannot infer the desired type.

### Quick Comparison

```ts id="6q8zya"
// Type Inference
let name = "Sujal";

// Type Annotation
let surname: string = "Bhagat";
```

**Inference** → TypeScript decides the type.

**Annotation** → Developer decides the type.

## 3. Union Types, Literal Types & Any

### Union Types

A Union Type allows a variable to store values of multiple types.

Syntax:

```ts
typeA | typeB | typeC
```

Example:

```ts
let balance: number | string  = 0;
```

The `balance` variable can store:

* `number`
* `string`


```ts
balance = 500;
balance = "5M";

```

Union types are useful when a value can exist in multiple valid forms.

---

### Literal Types

Literal Types restrict a variable to specific values rather than an entire type.

Example:

```ts
let apiResponseStatus: "pending" | "success" | "failed" = "pending";
```

The variable can only contain one of these three values:

```ts
"pending"
"success"
"failed"
```

Valid:

```ts
apiResponseStatus = "success";
```

Invalid:

```ts
apiResponseStatus = "error";
```

Error:

```text
Type '"error"' is not assignable to type '"pending" | "success" | "failed"'.
```

Literal types are commonly used for:

* API response states
* User roles
* Application status values
* Configuration options

---

### Any Type

The `any` type disables TypeScript's type checking for a variable.

Example:

```ts
let anyValue: any = 0.56;
```

Now any type of value can be assigned:

```ts
anyValue = "string";
anyValue = 100;
anyValue = false;
anyValue = {};
anyValue = [];
```

Variables declared without initialization may also become `any` depending on compiler settings.

```ts
let allType;
```

TypeScript cannot determine the type, so it may infer `any`.

> Using `any` removes TypeScript's safety benefits and should generally be avoided whenever possible.

---

### Undefined Type

TypeScript also supports the `undefined` type.

Example:

```ts
let userName: undefined = undefined;
```

A variable with the `undefined` type can only contain the value `undefined`.

```ts
userName = undefined; // Valid
```

`undefined` is commonly encountered with:

* Optional properties
* Missing function returns
* Uninitialized values

---

### Quick Summary

| Type                    | Purpose                       |
| ----------------------- | ----------------------------- |
| `number \| string`      | Multiple possible types       |
| `"success" \| "failed"` | Restrict to specific values   |
| `any`                   | Disable type checking         |
| `undefined`             | Represents absence of a value |

### Key Takeaway

* **Union Types** → Multiple allowed types.
* **Literal Types** → Multiple allowed values.
* **Any** → No type checking.
* **Undefined** → Absence of a value.

### Unknown Type

The `unknown` type can store any value, just like `any`.

```ts id="g7yr7o"
let value: unknown = "Sujal";
```

However, TypeScript does not allow you to directly use the value.

```ts id="6u65xv"
value.toUpperCase();
```

Error:

```text id="a0b62o"
Object is of type 'unknown'.
```

First, you must check the type:

```ts id="v4bqq5"
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Now TypeScript knows `value` is a string.

---

### Any vs Unknown

```ts id="7sccy3"
let anyValue: any = "Sujal";

anyValue.toUpperCase(); // Allowed
anyValue.toFixed(2);    // Also Allowed (even though it's wrong)
```

With `any`, TypeScript trusts you completely.

```ts id="g5ejm5"
let unknownValue: unknown = "Sujal";

unknownValue.toUpperCase(); // Error
```

With `unknown`, TypeScript asks:

> "First tell me what type this value is."

### Quick Rule

* `any` → No type checking.
* `unknown` → Type checking required before use.
* Prefer `unknown` over `any` when the type is not known.

# 4. Type Narrowing & Type Guards

When working with Union Types, TypeScript needs a way to determine the exact type of a value at runtime. This process is called **Type Narrowing**.

Type Guards are checks that help TypeScript narrow a broader type into a more specific type.

Common Type Guards:

* `typeof`
* `instanceof`
* Custom Type Guards
* `in` operator

---

## Type Narrowing with `typeof`

Used for primitive types such as `string`, `number`, and `boolean`.

```ts
function getData(data: string | number) {
    if (typeof data === "string") {
        return `${data} is a string`;
    }

    return `${data} is number`;
}
```

Before the check:

```ts
string | number
```

Inside the condition:

```ts
string
```

Outside the condition:

```ts
number
```

---

## Narrowing Optional Values

Optional parameters can be `undefined`.

```ts
function getMsg(msg?: string): string {
    if (!msg) {
        return "there is no msg send";
    }

    return `message is: ${msg}`;
}
```

TypeScript narrows:

```ts
string | undefined
```

to

```ts
string
```

after the existence check.

---

## Type Narrowing with `instanceof`

Used to identify class instances.

```ts
class ProductData {
    fetchdata() {
        return "product data is fetch";
    }
}

class UserData {
    fetchdata() {
        return "user data is fetch";
    }
}

function fetchApiData(data: ProductData | UserData) {
    if (data instanceof ProductData) {
        return data.fetchdata();
    }

    return data.fetchdata();
}
```

Inside the `if` block:

```ts
data: ProductData
```

Else block:

```ts
data: UserData
```

---

## Custom Type Guards

Used when working with custom object types.

```ts
type UserDataType = {
    name: string;
    age: number;
    isAlive: boolean;
};
```

Create a custom type guard:

```ts
function isUserData(dataObj: any): dataObj is UserDataType {
    return (
        typeof dataObj === "object" &&
        dataObj !== null &&
        typeof dataObj.name === "string" &&
        typeof dataObj.age === "number" &&
        typeof dataObj.isAlive === "boolean"
    );
}
```

The return type:

```ts
dataObj is UserDataType
```

tells TypeScript:

> If this function returns `true`, treat `dataObj` as `UserDataType`.

---

## Using a Custom Type Guard

```ts
function sendUserData(data: UserDataType | string) {
    if (isUserData(data)) {
        return `user data is ${data.name}, ${data.age}, ${data.isAlive}`;
    }

    return `user data ${data}`;
}
```

When `isUserData(data)` returns `true`, TypeScript knows that `data` is a `UserDataType`.

---

## Summary

| Type Guard        | Purpose                    |
| ----------------- | -------------------------- |
| `typeof`          | Narrow primitive types     |
| `instanceof`      | Narrow class instances     |
| Custom Type Guard | Narrow custom object types |
| `in`              | Check if a property exists |

### Key Takeaway

Type Guards help TypeScript understand the exact type of a value at runtime, making code safer and reducing type-related errors.

# 5. Advanced Types (Type Assertion, Unknown, Any & Never)

As applications grow, TypeScript provides additional types and utilities that help developers work safely with dynamic data, API responses, DOM elements, and unreachable code paths.

This section covers:

* Type Assertion
* Unknown Type
* Any Type
* Unknown vs Any
* Error Handling in Try/Catch
* Never Type

---

## Type Assertion

Type Assertion tells TypeScript:

> "Trust me, I know the actual type of this value."

It does not change the value at runtime. It only affects TypeScript's type checking.

### Syntax

```ts
value as Type
```

Example:

```ts
let response: any = "54";

let numericLength: number = (response as string).length;
```

Here:

```ts
response: any
```

TypeScript does not know the actual type.

Using:

```ts
response as string
```

tells TypeScript to treat the value as a string, allowing access to string properties and methods.

---

## Type Assertion with Custom Types

Type Assertions are commonly used when working with API responses or JSON data.

Example:

```ts
type Game = {
    name: string;
};
```

```ts
let gameString = '{"name":"Far Cry 3"}';

let gameObject = JSON.parse(gameString) as Game;

console.log(gameObject.name);
```

Without assertion:

```ts
JSON.parse()
```

returns:

```ts
any
```

By asserting:

```ts
as Game
```

TypeScript treats the parsed object as a `Game` type.

---

## Type Assertion with DOM Elements

DOM methods often return generic element types.

Example:

```ts
const inputElement =
    document.getElementById("username") as HTMLInputElement;
```

Now TypeScript knows the element is specifically an input element.

```ts
inputElement.value;
```

Without assertion:

```ts
document.getElementById()
```

returns:

```ts
HTMLElement | null
```

which does not provide input-specific properties.

---

## Type Assertion with Unknown

Unknown values must be narrowed before use.

Example:

```ts
const data: unknown = "name";
```

This is not allowed:

```ts
const dataStr: string = data;
```

Error:

```text
Type 'unknown' is not assignable to type 'string'.
```

Using Type Assertion:

```ts
const dataStr: string = data as string;
```

Now TypeScript treats the value as a string.

---

## Unknown Type

The `unknown` type can store any value.

```ts
let unknownValue: unknown;

unknownValue = "name";
unknownValue = 43;
unknownValue = [2, 3, 4];
```

However, TypeScript prevents direct usage.

```ts
unknownValue.toUpperCase();
```

Error:

```text
Object is of type 'unknown'.
```

Before using the value, its type must be verified.

```ts
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
```

This makes `unknown` safer than `any`.

---

## Any Type

The `any` type disables TypeScript's type checking.

```ts
let anyValue: any;

anyValue = "name";
anyValue = 43;
anyValue = [2, 3, 4];
```

TypeScript allows any operation:

```ts
anyValue.toUpperCase();
```

Even if the value is not a string.

This may cause runtime errors.

Example:

```ts
let anyValue: any = 100;

anyValue.toUpperCase();
```

Runtime Error:

```text
anyValue.toUpperCase is not a function
```

---

## Unknown vs Any

### Unknown

```ts
let value: unknown = "Sujal";

value.toUpperCase();
```

Error:

```text
Object is of type 'unknown'
```

Type checking is required before usage.

---

### Any

```ts
let value: any = "Sujal";

value.toUpperCase();
```

No error.

TypeScript trusts the developer completely.

---

### Comparison

| Type      | Type Safety | Requires Checking |
| --------- | ----------- | ----------------- |
| `any`     | ❌ No        | ❌ No              |
| `unknown` | ✅ Yes       | ✅ Yes             |

### Recommendation

Prefer:

```ts
unknown
```

over

```ts
any
```

whenever the actual type is not known.

---

## Try/Catch and Unknown Errors

In TypeScript, the `catch` parameter is treated as `unknown`.

Example:

```ts
try {

} catch (error) {
    console.log(error.message);
}
```

Error:

```text
Object is of type 'unknown'.
```

TypeScript cannot guarantee that the thrown value is an Error object.

A value such as:

```ts
throw "Something went wrong";
```

is completely valid JavaScript.

---

### Correct Approach

Use a Type Guard:

```ts
try {

} catch (error) {

    if (error instanceof Error) {
        console.log(error.message);
    }

    console.log("error is:", error);
}
```

Now TypeScript safely knows that `error` is an Error object.

---

## Never Type

The `never` type represents values that should never occur.

It is commonly used when:

* A function never finishes execution.
* All possible cases of a union have been handled.
* Exhaustive type checking.

---

## Exhaustive Checking

Example:

```ts
type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {
        console.log("redirect to admin page");
        return;
    }

    if (role === "user") {
        console.log("redirect to user page");
        return;
    }

    role;
}
```

At this point:

```ts
role
```

has type:

```ts
never
```

because all possible values have already been handled.

---

### Why Is This Useful?

Suppose a new role is added:

```ts
type Role = "admin" | "user" | "manager";
```

Now TypeScript will indicate that `"manager"` has not been handled.

This helps prevent missing cases when union types grow.

---

## Functions Returning Never

A function returning `never` never reaches completion.

Example:

```ts
function neverReturn(): never {
    while (true) {}
}
```

The function never stops executing.

Another example:

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

Execution ends immediately because an exception is thrown.

---

## Summary

| Type      | Purpose                                                 |
| --------- | ------------------------------------------------------- |
| `as`      | Tell TypeScript the expected type                       |
| `unknown` | Any value, but must be checked before use               |
| `any`     | Disables type checking                                  |
| `never`   | Represents impossible values or non-returning functions |

### Key Takeaway

* **Type Assertion** helps TypeScript understand a value's type.
* **Unknown** is safer than **Any** because it requires validation.
* **Any** removes TypeScript's protection and should be avoided when possible.
* **Never** represents unreachable code paths and functions that never return.
* Use these advanced types carefully to maintain type safety in large applications.

# 6. Interfaces, Classes & Object Type Composition

So far, we have used `type` aliases to define custom object structures. TypeScript also provides another way to define object shapes called **Interfaces**.

Interfaces are commonly used with classes and object-oriented programming patterns.

This section covers:

* Interfaces
* Classes and `implements`
* Type vs Interface
* Intersection Types (`&`)
* Optional Properties (`?`)
* Readonly Properties (`readonly`)

---

## Custom Types

A custom object type can be created using the `type` keyword.

```ts id="c3w8y9"
type Example = {
    name: string;
    age: number;
};
```

Usage:

```ts id="3j3mh8"
function forExample(data: Example) {
    return data;
}
```

This ensures that the passed object contains all required properties.

---

## Classes and Implements

Classes can enforce a structure using the `implements` keyword.

```ts id="dbzxv3"
type Game = {
    name: string;
    releaseDate: number;
    played: boolean;
};
```

Incorrect implementation:

```ts id="7gv1e5"
class GameClass implements Game {}
```

Error:

```text id="vhdlhz"
Class 'GameClass' incorrectly implements type 'Game'.
```

The class must contain every required property.

Correct implementation:

```ts id="i8lqwp"
class GameClass implements Game {
    name = "GTA V";
    releaseDate = 2013;
    played = true;
}
```

TypeScript now confirms that the class satisfies the `Game` structure.

---

## Why Interfaces Exist

Interfaces are another way to describe object structures.

Example:

```ts id="1kyq6r"
interface GameType {
    type: "open world" | "RPG";
}
```

Used with classes:

```ts id="lyjixm"
class TypeClass implements GameType {
    type: "open world" | "RPG" = "open world";
}
```

This is one of the most common uses of interfaces.

---

## Type vs Interface

Both can describe object structures.

### Type

```ts id="y9zx36"
type User = {
    name: string;
};
```

### Interface

```ts id="fhz75v"
interface User {
    name: string;
}
```

For basic objects, both behave very similarly.

### General Rule

Use:

```ts id="lkby58"
interface
```

when designing object contracts or classes.

Use:

```ts id="h0cw4y"
type
```

for unions, intersections, and advanced type compositions.

---

## Intersection Types

Intersection types combine multiple object types into one.

Syntax:

```ts id="vjlwm9"
type Combined = TypeA & TypeB;
```

Example:

```ts id="xy0n6r"
type GameName = {
    name: string;
};

type GameAge = {
    age: number;
};

type GameAllType = GameName & GameAge;
```

Usage:

```ts id="92c5af"
const gtaV: GameAllType = {
    name: "GTA V",
    age: 13
};
```

The object must satisfy both types.

Visual representation:

```text id="ucd1jy"
GameName
    +
GameAge
    =
GameAllType
```

---

## Optional Properties

Sometimes a property is not required.

Use:

```ts id="e22p39"
?
```

Example:

```ts id="7q0e3q"
type UserData = {
    name: string;
    bio?: string;
};
```

Valid:

```ts id="4b9vut"
const user1: UserData = {
    name: "Sujal"
};
```

Also valid:

```ts id="f3i6uz"
const user2: UserData = {
    name: "Sujal",
    bio: "Frontend Developer"
};
```

The property becomes optional.

---

## Readonly Properties

A readonly property can be assigned once but cannot be modified later.

Example:

```ts id="h1p7wq"
type Config = {
    readonly appName: string;
    version: 1;
};
```

Usage:

```ts id="qj7mna"
const config: Config = {
    appName: "BMS Store",
    version: 1
};
```

Access:

```ts id="95f0dh"
console.log(config.appName);
```

Modification:

```ts id="80w9gs"
config.appName = "BMS Blog";
```

Error:

```text id="mbj9ee"
Cannot assign to 'appName' because it is a read-only property.
```

Readonly values help protect configuration data and constants from accidental changes.

---

## Summary

| Feature      | Purpose                             |
| ------------ | ----------------------------------- |
| `interface`  | Define object contracts             |
| `implements` | Force classes to follow a structure |
| `&`          | Combine multiple types              |
| `?`          | Optional property                   |
| `readonly`   | Prevent property reassignment       |

### Key Takeaway

* Interfaces define object structures and are commonly used with classes.
* Classes can use `implements` to enforce a contract.
* Intersection types combine multiple object types.
* Optional properties allow missing values.
* Readonly properties can be assigned once and cannot be modified later.
* Interfaces and Types are similar, but interfaces are often preferred for object-oriented design.

# 7. Objects & Utility Types

Objects are one of the most commonly used data structures in TypeScript.

TypeScript can automatically infer object types, but developers can also explicitly define object structures using custom types.

This section covers:

* Object Type Inference
* Object Type Annotations
* Custom Object Types
* Structural Typing (Duck Typing)
* Nested Object Types
* Utility Types

  * Partial
  * Required
  * Pick
  * Omit

---

## Object Type Inference

TypeScript automatically infers the type of an object based on its properties.

Example:

```ts id="5gt92a"
const user = {
    name: "Sujal",
    age: 21,
    isCool: true
};
```

TypeScript infers:

```ts id="7xk1jc"
{
    name: string;
    age: number;
    isCool: boolean;
}
```

This process is called **Type Inference**.

---

## Object Type Annotations

Sometimes we explicitly define the object's structure.

```ts id="v6t30n"
let person: {
    name: string;
    age: number;
    isCool: boolean;
};
```

Assignment:

```ts id="w2tl6h"
person = {
    name: "Sujal",
    age: 21,
    isCool: true
};
```

TypeScript ensures all required properties exist and have the correct types.

---

## Creating Reusable Object Types

Instead of repeating object structures, we can create custom types.

```ts id="5khzsm"
type Human = {
    name: string;
    age: number;
    traits: string[];
};
```

Usage:

```ts id="5w6r9m"
const myself: Human = {
    name: "Sujal",
    age: 21,
    traits: ["cool", "chill"]
};
```

This improves readability and reusability.

---

## Structural Typing (Duck Typing)

TypeScript follows **Structural Typing**.

A value is considered valid if it contains the required properties, regardless of where it came from.

Often called:

> "If it looks like a duck and walks like a duck, it's a duck."

Example:

```ts id="w5lln3"
type Bottle = {
    liter: string;
};
```

```ts id="6xjlwm"
let smallBottle: Bottle = {
    liter: "500ml"
};
```

```ts id="zn3a2s"
let bigBottle = {
    liter: "1000ml",
    material: "steel"
};
```

Assignment:

```ts id="rrx17q"
smallBottle = bigBottle;
```

Valid because:

```ts id="0n6jn7"
bigBottle.liter
```

satisfies the minimum requirements of `Bottle`.

Extra properties are ignored.

---

## Nested Object Types

Object types can contain other object types.

Example:

```ts id="v9cksp"
type Item = {
    name: string;
    quantity: number;
};
```

```ts id="x4s46x"
type Address = {
    street: string;
    pin: number;
};
```

```ts id="fxsyls"
type Order = {
    id: string;
    item: Item[];
    address: Address;
};
```

Usage:

```ts id="vft8y3"
const order: Order = {
    id: "ORD001",
    item: [
        {
            name: "Keyboard",
            quantity: 1
        }
    ],
    address: {
        street: "Main Road",
        pin: 410206
    }
};
```

Nested types help organize complex data structures.

---

# Utility Types

TypeScript provides built-in utility types that transform existing types.

---

## Partial

`Partial<T>` makes every property optional.

Example:

```ts id="mbjlwm"
type Game = {
    name: string;
    age: number;
};
```

```ts id="4u8euh"
function update(data: Partial<Game>) {
    console.log(data);
}
```

Valid:

```ts id="nyu0b7"
update({ age: 13 });
```

Also valid:

```ts id="n0g08e"
update({ name: "Watch Dogs" });
```

Even this is valid:

```ts id="dndn8j"
update({});
```

Type becomes:

```ts id="twzxkv"
{
    name?: string;
    age?: number;
}
```

Common use case:

* Update APIs
* Form updates
* Patch requests

---

## Required

`Required<T>` makes all properties mandatory.

Example:

```ts id="40c5th"
function updateAll(data: Required<Game>) {
    console.log(data);
}
```

Valid:

```ts id="p74u6d"
updateAll({
    name: "Watch Dogs 2",
    age: 10
});
```

Missing any property causes an error.

It also converts optional properties into required ones.

---

## Pick

`Pick<T, Keys>` selects specific properties from a type.

Example:

```ts id="zljlwm"
function setName(data: Pick<Game, "name">) {
    console.log(data);
}
```

Usage:

```ts id="e9rrf4"
setName({
    name: "Sleeping Dogs"
});
```

Generated type:

```ts id="2oq52r"
{
    name: string;
}
```

Useful when only a small portion of a type is needed.

---

## Omit

`Omit<T, Keys>` removes specific properties from a type.

Example:

```ts id="mzj0hx"
function getAge(data: Omit<Game, "name">) {
    console.log(data);
}
```

Usage:

```ts id="g9jqzt"
getAge({
    age: 42
});
```

Generated type:

```ts id="k1rhy4"
{
    age: number;
}
```

Trying to pass `name` results in an error.

```ts id="2eb7w9"
getAge({
    name: "GTA V"
});
```

Error:

```text id="e9t49n"
'name' does not exist in type 'Omit<Game, "name">'
```

Common use case:

* Remove sensitive fields
* Exclude IDs
* Create public versions of objects

---

## Utility Type Summary

| Utility Type  | Purpose                       |
| ------------- | ----------------------------- |
| `Partial<T>`  | Makes all properties optional |
| `Required<T>` | Makes all properties required |
| `Pick<T, K>`  | Select specific properties    |
| `Omit<T, K>`  | Remove specific properties    |

---

## Key Takeaway

* TypeScript automatically infers object types.
* Custom types make object structures reusable.
* TypeScript uses Structural Typing (Duck Typing).
* Nested types help model real-world data.
* Utility Types allow existing types to be transformed without creating new ones manually.
* `Partial`, `Required`, `Pick`, and `Omit` are among the most commonly used utility types in modern TypeScript applications.

# 8. Functions & Function Types

Functions are one of the most important building blocks in TypeScript.

TypeScript allows developers to define types for:

* Function Parameters
* Return Values
* Optional Parameters
* Function Expressions
* Function Type Signatures

By typing functions, TypeScript can catch errors before the code runs.

---

## Function Parameters

Parameters can be given explicit types.

Example:

```ts
function addProduct(product: string, quantity: number) {
    console.log(
        `product name: ${product} how many ${quantity}`
    );
}
```

Usage:

```ts
addProduct("game", 2);
```

Valid because:

```ts
product  → string
quantity → number
```

Incorrect:

```ts
addProduct("game", "2");
```

Error:

```text
Argument of type 'string' is not assignable to parameter of type 'number'.
```

---

## Return Types

Functions can explicitly define what type they return.

Example:

```ts
function getPrice(): number {
    return 1000;
}
```

The return type:

```ts
number
```

means the function must always return a number.

Invalid:

```ts
function getPrice(): number {
    return "1000";
}
```

Error:

```text
Type 'string' is not assignable to type 'number'.
```

---

## Void Return Type

Some functions perform actions but do not return a value.

Example:

```ts
function hello(): void {
    console.log("hello");
}
```

The `void` type means:

> This function does not return anything useful.

Usage:

```ts
hello();
```

Common examples:

* Logging
* Updating UI
* Sending requests
* Triggering side effects

---

## Type Inference for Return Values

TypeScript can automatically infer return types.

Example:

```ts
function getDiscount() {
    return 20;
}
```

TypeScript infers:

```ts
function getDiscount(): number
```

Because the function returns a number.

For simple functions, explicit return types are often unnecessary.

---

## Optional Parameters

Parameters can be marked as optional using `?`.

Example:

```ts
function greet(name?: string) {
    return `Hello ${name}`;
}
```

Valid:

```ts
greet();
greet("Sujal");
```

TypeScript treats:

```ts
name?: string
```

as:

```ts
name: string | undefined
```

---

## Default Parameters

A parameter can have a default value.

Example:

```ts
function greet(name: string = "Guest") {
    return `Hello ${name}`;
}
```

Usage:

```ts
greet();
```

Output:

```text
Hello Guest
```

Usage:

```ts
greet("Sujal");
```

Output:

```text
Hello Sujal
```

Default values remove the need for manual checks.

---

## Object Parameters

Functions can receive objects.

Example:

```ts
type User = {
    name: string;
    age: number;
};
```

```ts
function createUser(user: User) {
    return user;
}
```

Usage:

```ts
createUser({
    name: "Sujal",
    age: 21
});
```

TypeScript validates the entire object structure.

---

## Function Type Signatures

Functions themselves can have types.

Example:

```ts
let calculate: (a: number, b: number) => number;
```

Assignment:

```ts
calculate = function (a, b) {
    return a + b;
};
```

Valid because:

```ts
(number, number) => number
```

matches the expected function type.

---

## Type Alias for Functions

Function types can be reused using type aliases.

Example:

```ts
type MathOperation = (
    a: number,
    b: number
) => number;
```

Usage:

```ts
const add: MathOperation = (a, b) => {
    return a + b;
};
```

```ts
const multiply: MathOperation = (a, b) => {
    return a * b;
};
```

Both functions follow the same contract.

---

## Arrow Functions

Arrow functions can also be typed.

Example:

```ts
const getTax = (
    price: number
): number => {
    return price * 0.18;
};
```

Usage:

```ts
getTax(1000);
```

Return type:

```ts
number
```

---

## Rest Parameters

Functions can accept multiple values using rest parameters.

Example:

```ts
function total(...numbers: number[]) {
    return numbers.reduce(
        (sum, num) => sum + num,
        0
    );
}
```

Usage:

```ts
total(10, 20, 30);
```

Result:

```text
60
```

Type:

```ts
number[]
```

---

## Summary

| Feature                   | Purpose                       |
| ------------------------- | ----------------------------- |
| Parameter Types           | Define allowed argument types |
| Return Types              | Define returned value type    |
| `void`                    | No meaningful return value    |
| Optional Parameters (`?`) | Parameter may be omitted      |
| Default Parameters        | Provide fallback values       |
| Function Type Signatures  | Type functions themselves     |
| Type Alias Functions      | Reusable function contracts   |
| Rest Parameters           | Accept multiple arguments     |

---

## Key Takeaway

* Functions can have typed parameters and return values.
* TypeScript validates arguments passed to functions.
* `void` is used when a function does not return anything useful.
* Optional and default parameters make functions more flexible.
* Function type signatures allow functions to be treated like any other type.
* Function type aliases help create reusable function contracts.

# 9. Arrays, Tuples & Enums

Arrays, Tuples, and Enums help organize and manage collections of data in TypeScript.

This section covers:

* Arrays
* Readonly Arrays
* Multi-Dimensional Arrays
* Tuples
* Readonly Tuples
* Named Tuples
* Enums
* Numeric Enums
* String Enums

---

## Arrays

Arrays store multiple values of the same type.

### String Array

```ts id="j1m7ax"
const gameList: string[] = [
    "Far Cry 3",
    "Nioh"
];
```

Type:

```ts id="a9hm8z"
string[]
```

Only strings are allowed.

---

### Number Array

```ts id="4ulx9g"
const gamePrice: number[] = [
    599,
    2999
];
```

Type:

```ts id="q3n2g8"
number[]
```

Only numbers are allowed.

---

### Generic Array Syntax

TypeScript also provides a generic array syntax.

```ts id="8u7m6q"
const rating: Array<number> = [
    4.5,
    5.0
];
```

Equivalent to:

```ts id="z5h8wy"
const rating: number[];
```

Both approaches are valid.

---

## Arrays of Objects

Arrays can store custom object types.

Example:

```ts id="z8n3tb"
type GameData = {
    name: string;
    price: number;
    addon: {
        name: string;
        price: number;
    }[];
};
```

Usage:

```ts id="ivv2ll"
const data: GameData[] = [
    {
        name: "GTA",
        price: 1999,
        addon: [
            {
                name: "GTA Online",
                price: 2999
            }
        ]
    }
];
```

Type:

```ts id="phuxqx"
GameData[]
```

Each array item must follow the `GameData` structure.

---

## Readonly Arrays

Readonly arrays prevent modification after creation.

Example:

```ts id="d64y08"
const cities: readonly string[] = [
    "Panvel",
    "Pune"
];
```

Valid:

```ts id="bkpwlo"
console.log(cities);
```

Invalid:

```ts id="tup88y"
cities.push("Mumbai");
```

Error:

```text id="04z9hk"
Property 'push' does not exist on type 'readonly string[]'
```

Readonly arrays are useful for constant data.

---

## Multi-Dimensional Arrays

Arrays can contain other arrays.

Example:

```ts id="8xvf0w"
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];
```

Visual representation:

```text id="ey5iqa"
[
 [1,2,3],
 [4,5,6]
]
```

Common use cases:

* Tables
* Grids
* Matrix data
* Board games

---

# Tuples

Tuples are fixed-length arrays with fixed types and positions.

Example:

```ts id="crr06v"
let gameTuple: [string, number];
```

Valid:

```ts id="ohrl8m"
gameTuple = ["Hue", 67];
```

Invalid:

```ts id="q1tk5s"
gameTuple = [67, "Hue"];
```

Error because the order matters.

---

## Optional Tuple Elements

Tuple values can be optional.

Example:

```ts id="7a7vpm"
let userTuple: [
    string,
    number,
    boolean?
];
```

Valid:

```ts id="stgtmq"
userTuple = ["Sujal", 21];
```

Also valid:

```ts id="8zok7w"
userTuple = ["Sujal", 21, true];
```

The last value is optional.

---

## Readonly Tuples

Readonly tuples cannot be modified.

Example:

```ts id="rl1gr0"
const location: readonly [
    number,
    number
] = [24.55, 45.56];
```

Invalid:

```ts id="oqfjlwm"
location[0] = 50;
```

Error because the tuple is readonly.

---

## Named Tuples

Named tuples improve readability.

Example:

```ts id="4zwtsd"
const item: [
    name: string,
    price: number
] = ["Bag", 446];
```

Instead of:

```ts id="0p65nq"
[string, number]
```

developers can immediately understand what each position represents.

---

# Enums

Enums define a set of named constants.

They make code easier to read and maintain.

Example:

```ts id="qyv14m"
enum CupSize {
    Small,
    Medium,
    Large
}
```

Usage:

```ts id="3nk8nn"
const size = CupSize.Small;
```

---

## Numeric Enums

By default, TypeScript assigns numeric values starting from `0`.

Example:

```ts id="o4iut9"
enum CupSize {
    Small,
    Medium,
    Large
}
```

Generated values:

```text id="2n0br9"
Small  = 0
Medium = 1
Large  = 2
```

---

### Auto Increment

Example:

```ts id="v5qqjo"
enum ErrorEnum {
    Number = 100,
    Name,
    Age
}
```

Generated values:

```text id="ktg16o"
Number = 100
Name   = 101
Age    = 102
```

After the first numeric value, TypeScript automatically increments the rest.

---

## String Enums

String enums are generally preferred because they are easier to debug.

Example:

```ts id="gm1mqo"
enum GameType {
    RPG = "rpg",
    SIMULATION = "simulation"
}
```

Usage:

```ts id="tpk8i9"
function getGame(type: GameType) {
    console.log(type);
}

getGame(GameType.RPG);
```

Output:

```text id="4xaw2w"
rpg
```

String enums are more descriptive than numeric values.

---

## Mixed Enums (Not Recommended)

TypeScript allows mixing numbers and strings.

Example:

```ts id="x3c3kl"
enum RandomEnum {
    ID = 1,
    Name = "string"
}
```

This is valid TypeScript.

However, it is generally considered bad practice because it creates inconsistent enum values.

Prefer:

```ts id="jlwmjp"
All Numbers
```

or

```ts id="yidtyn"
All Strings
```

for better readability and maintainability.

---

## Arrays vs Tuples

| Feature            | Array             | Tuple              |
| ------------------ | ----------------- | ------------------ |
| Length             | Variable          | Fixed              |
| Order Matters      | No                | Yes                |
| Types Per Position | Same Type Usually | Fixed Types        |
| Example            | `string[]`        | `[string, number]` |

Example:

```ts id="m7a7b3"
const names: string[] = [
    "Sujal",
    "Rahul"
];
```

```ts id="3rr0uw"
const user: [
    string,
    number
] = [
    "Sujal",
    21
];
```

---

## Enum vs Literal Types

Enums:

```ts id="0lqvsh"
enum GameType {
    RPG = "rpg",
    SIMULATION = "simulation"
}
```

Literal Types:

```ts id="aq6g62"
type GameType =
    | "rpg"
    | "simulation";
```

In modern TypeScript projects, Literal Types are often preferred because they generate no extra JavaScript code.

---

## Summary

| Feature        | Purpose                  |
| -------------- | ------------------------ |
| `string[]`     | Array of strings         |
| `number[]`     | Array of numbers         |
| `readonly`     | Prevent modifications    |
| `[][]`         | Multi-dimensional arrays |
| Tuple          | Fixed-length typed array |
| Readonly Tuple | Immutable tuple          |
| Named Tuple    | Self-documenting tuple   |
| Enum           | Named constant values    |

### Key Takeaway

* Arrays store collections of values.
* Tuples store values with fixed positions and types.
* Readonly arrays and tuples prevent accidental changes.
* Enums provide named constants for predefined values.
* String enums are generally preferred over numeric enums.
* Literal Types are often a modern alternative to enums.

# 10. Object-Oriented Programming (OOP) in TypeScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code using classes and objects.

TypeScript extends JavaScript's class system with powerful type safety features such as:

* Access Modifiers
* Constructors
* Inheritance
* Encapsulation
* Getters & Setters
* Static Members
* Abstract Classes
* Composition

---

## Classes

A class acts as a blueprint for creating objects.

Example:

```ts id="cl1"
class User {
    name: string;
    age: number;

    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age;
    }
}
```

Creating an object:

```ts id="cl2"
const user1 = new User(
    "Sujal",
    21
);
```

Accessing properties:

```ts id="cl3"
user1.name = "Raj";
```

---

## Access Modifiers

TypeScript provides access modifiers to control visibility.

### Public

Public members can be accessed from anywhere.

```ts id="cl4"
class Game {
    public name: string = "GTA";
}
```

Usage:

```ts id="cl5"
const game = new Game();

console.log(game.name);
```

Public is the default modifier.

---

## Private

Private members can only be accessed inside the class.

```ts id="cl6"
class Game {
    private creator: string =
        "Someone";

    reveal() {
        return this.creator;
    }
}
```

Usage:

```ts id="cl7"
const game = new Game();

game.reveal();
```

Invalid:

```ts id="cl8"
game.creator;
```

Error:

```text id="cl9"
Property 'creator' is private
```

Private data helps protect internal implementation details.

---

## Protected

Protected members are accessible inside the class and its child classes.

```ts id="cl10"
class Shop {
    protected name = "BMS";
}
```

Child class:

```ts id="cl11"
class Branch extends Shop {
    getName() {
        return this.name;
    }
}
```

Usage:

```ts id="cl12"
new Branch().getName();
```

Difference:

| Modifier  | Class | Child Class | Outside |
| --------- | ----- | ----------- | ------- |
| public    | ✅     | ✅           | ✅       |
| protected | ✅     | ✅           | ❌       |
| private   | ✅     | ❌           | ❌       |

---

## Parameter Properties

TypeScript allows properties to be declared directly inside the constructor.

Instead of:

```ts id="cl13"
class User {
    bio: string;

    constructor(bio: string) {
        this.bio = bio;
    }
}
```

Use:

```ts id="cl14"
class User {
    constructor(
        public bio: string
    ) {}
}
```

This automatically creates and assigns the property.

---

## Readonly Properties

Readonly properties can only be assigned once.

Example:

```ts id="cl15"
class APIKey {
    readonly key: string;

    constructor(key: string) {
        this.key = key;
    }
}
```

Usage:

```ts id="cl16"
const api = new APIKey("abc123");
```

Invalid:

```ts id="cl17"
api.key = "xyz";
```

Error:

```text id="cl18"
Cannot assign to 'key'
because it is readonly
```

Readonly values are useful for IDs, tokens, and configuration values.

---

## Getters and Setters

Getters and Setters act as controlled access points to data.

Example:

```ts id="cl19"
class Balance {

    private amount = 1000;

    get balance() {
        return this.amount;
    }

    set balance(
        value: number
    ) {

        if (value < 0) {
            throw new Error(
                "Balance cannot be negative"
            );
        }

        this.amount = value;
    }
}
```

Usage:

```ts id="cl20"
const b = new Balance();

b.balance = 500;

console.log(b.balance);
```

Benefits:

* Validation
* Encapsulation
* Controlled updates

---

## Static Members

Static members belong to the class itself, not individual objects.

Example:

```ts id="cl21"
class User {

    static appName =
        "BMS Store";

    constructor(
        public bio: string
    ) {}
}
```

Access:

```ts id="cl22"
User.appName;
```

No object creation required.

Invalid:

```ts id="cl23"
const user = new User("Hi");

user.appName;
```

Error because static properties belong to the class.

Common use cases:

* Configuration
* Utility Methods
* Global Constants

---

## Inheritance

Inheritance allows one class to reuse another class.

Example:

```ts id="cl24"
class Shop {
    protected name = "BMS";
}

class Branch extends Shop {

    getName() {
        return this.name;
    }
}
```

The child class automatically receives access to inherited members.

---

## Abstract Classes

Abstract classes act as blueprints for other classes.

They cannot be instantiated directly.

Example:

```ts id="cl25"
abstract class Drink {

    abstract make(): void;
}
```

Child class:

```ts id="cl26"
class Lemonade extends Drink {

    make() {
        console.log("Lemon");
    }
}
```

Usage:

```ts id="cl27"
const drink =
    new Lemonade();

drink.make();
```

Invalid:

```ts id="cl28"
new Drink();
```

Error because abstract classes cannot create objects.

---

## Why Use Abstract Classes?

They enforce a contract.

Every child class must implement:

```ts id="cl29"
make()
```

otherwise TypeScript throws an error.

---

## Composition

Composition means building classes using other classes.

Instead of inheriting behavior, objects are combined together.

Example:

```ts id="cl30"
class Heater {

    heat() {
        console.log(
            "Heating water"
        );
    }
}
```

```ts id="cl31"
class Water {

    constructor(
        private heater: Heater
    ) {}

    makeTea() {
        this.heater.heat();
    }
}
```

Usage:

```ts id="cl32"
const heater =
    new Heater();

const water =
    new Water(heater);

water.makeTea();
```

This relationship is often described as:

> Has-A relationship

while inheritance represents:

> Is-A relationship

---

## Composition vs Inheritance

### Inheritance

```text id="cl33"
Branch IS-A Shop
```

### Composition

```text id="cl34"
Water HAS-A Heater
```

Modern applications often prefer composition because it creates more flexible and reusable code.

---

## Summary

| Feature        | Purpose                                |
| -------------- | -------------------------------------- |
| Class          | Blueprint for objects                  |
| Constructor    | Initialize object data                 |
| Public         | Accessible everywhere                  |
| Private        | Accessible only inside class           |
| Protected      | Accessible inside class and subclasses |
| Readonly       | Cannot be changed after assignment     |
| Getter         | Read data safely                       |
| Setter         | Update data with validation            |
| Static         | Belongs to the class itself            |
| Inheritance    | Reuse behavior from another class      |
| Abstract Class | Blueprint for subclasses               |
| Composition    | Build classes from other classes       |

### Key Takeaway

* Classes create reusable object blueprints.
* Access modifiers control visibility and protect data.
* Getters and Setters provide controlled access to properties.
* Static members belong to the class, not instances.
* Abstract classes define contracts for subclasses.
* Composition is often preferred over inheritance for building flexible applications.

