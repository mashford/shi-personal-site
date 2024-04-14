---
sidebar_position: 1
---

# how to use infer type?

```typescript
type separator = "-" | "/" | ".";

type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Num2 = 0 | Num;

type DD = `0${Num}` | `1${Num2}` | `2${Num2}` | `30` | `31`;
type MM = `0${Num}` | `10` | `11` | `12`;
type YYYY = `19${Num2}${Num2}` | `20${Num2}${Num2}`;

type GetDateType<T extends string> = T extends "MM"
  ? MM
  : T extends "DD"
  ? DD
  : T extends "YYYY"
  ? YYYY
  : never;

type FormatDate<T extends string> =
  T extends `${infer D}${separator}${infer M}${separator}${infer Y}`
    ? T extends `${D}${infer sep1}${M}${infer sep2}${Y}`
      ? `${GetDateType<D>}${sep1}${GetDateType<M>}${sep2}${GetDateType<Y>}`
      : never
    : never;

const date: FormatDate<"DD-MM-YYYY"> = "13-01-2023";
```

refer to [this](https://juejin.cn/post/7322850477710884902)
