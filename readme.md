# TypeScript Fundamentals

## 1. What is TypeScript?

TypeScript is an open-source programming language developed by Microsoft that extends JavaScript with a static type system.

It is a **superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code. TypeScript helps developers write more reliable, maintainable, and scalable applications by catching errors during development rather than at runtime.

### Why TypeScript?

* Detects errors before execution
* Improves code readability and maintainability
* Provides better IDE support and autocomplete
* Makes large codebases easier to manage
* Enhances developer productivity

### Example

```ts
const age: number = 25;

function greet(name: string): string {
  return `Hello ${name}`;
}
```

After compilation:

```js
const age = 25;

function greet(name) {
  return `Hello ${name}`;
}
```

> TypeScript types exist only during development and are removed during compilation.

---

## 2. Behind the Scenes

TypeScript code goes through multiple compilation phases before becoming JavaScript.

```text
TypeScript (.ts)
      ↓
Lexer
      ↓
Parser
      ↓
Binder
      ↓
Checker
      ↓
Emitter
      ↓
.js | .d.ts | .map
```

### Lexer (Scanner)

Converts source code characters into tokens.

```ts
const age = 25;
```

↓

```text
const | age | = | 25 | ;
```

### Parser

Converts tokens into an Abstract Syntax Tree (AST), a structured representation of the code.

```text
VariableDeclaration
├── age
└── 25
```

### Binder

Creates symbols and symbol tables.

It connects identifiers to their declarations so the compiler knows what each variable, function, or class refers to.

### Checker

Performs type checking and semantic analysis.

It validates:

* Type compatibility
* Type inference
* Generics
* Interfaces
* Function signatures

Example:

```ts
let age: number = "25";
```

Produces a compile-time error because a string cannot be assigned to a number.

### Emitter

Generates output files from the checked AST.

#### `.js`

Executable JavaScript code.

#### `.d.ts`

Declaration files containing only type information for tooling and library consumers.

#### `.map`

Source maps that connect generated JavaScript back to the original TypeScript source for debugging.

### Compilation Flow Summary

```text
Source Code
    ↓
Tokens
    ↓
AST
    ↓
Symbols
    ↓
Type Checking
    ↓
Output Files
```

This pipeline allows TypeScript to provide powerful type safety while ultimately producing standard JavaScript that can run in any JavaScript environment.
