---
slug: typescript-2
title: typescript-2
authors: [Shi]
tags: [typescript, frontend]
---

How to generate a .d.ts file from a .ts file?

```bash
tsc --declaration --emitDeclarationOnly index.ts
```

or in tsconfig.json

```json
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true
  }
}
```

refer to [typescript-2](https://juejin.cn/book/7047524421182947366/section/7291875368389541897)
