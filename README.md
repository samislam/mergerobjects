# Quick Start

```ts
import { mergeObjects } from 'mergerobjects'

const objA = { a: 'apple', b: 'banana', c: { x: 8, y: 5 } }
const objB = { b: 'Juice', c: { x: 0, v: 3 } }

const merged = mergeObjects(objA, objB) // you can provide unlimited arguments...
// { a: 'apple', b: 'Juice', c: { x: 0, v: 3 } }
```

Unlike lodash's `_.merge()` function, **mergeObjects** creates a new instance of your object and doesn't mutate your objects.

Regarding deep, or shallow copying; **mergeObjects** makes a shallow copy of your objects, and does not deep clone them. This means that after merging, you'll lose the prototype chain from the end object, as it returns a POJO (Plain Old JavaScript Object).

**mergeObjects** is a simple and a quick utility for merging objects, and it works perfectly with TypeScript for auto completions.

# API Reference:

```
mergeObjects(...sources: object[]) => The merged object
```

- If you provide no arguments, an empty object is returned.
