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
