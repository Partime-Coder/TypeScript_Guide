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

