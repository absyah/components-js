---
{
  "title": "tokenize",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/core/src/helper/tokenizer.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# tokenize

**Signature:**

```typescript
export declare function tokenize<T extends TokenizeGrammar>(
  input: string,
  grammar: T
): (
  | string
  | {
      type: keyof T;
      content: string;
    }
)[];
```
