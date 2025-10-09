# Symbol

在 JavaScript/TypeScript 中，有几个特殊的 `Symbol` 会在对象被特定操作时自动调用。以下是一些常用的 `Symbol` 及其触发时机：

### 1. `Symbol.toPrimitive`

当对象需要被转换为原始值（如字符串、数字等）时调用：

```typescript
const obj = {
  [Symbol.toPrimitive](hint: "default" | "string" | "number") {
    if (hint === "number") return 42;
    if (hint === "string") return "hello";
    return "default";
  },
};

console.log(Number(obj)); // 42
console.log(String(obj)); // 'hello'
console.log(obj + ""); // 'default'
```

### 2. `Symbol.iterator`

定义对象的默认迭代器，用于 `for...of` 循环和解构等场景：

```typescript
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of myIterable) {
  console.log(value); // 1, 2, 3
}
```

### 3. `Symbol.asyncIterator`

定义对象的异步迭代器，用于 `for await...of` 循环：

```typescript
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    yield "hello";
    yield "world";
  },
};

(async () => {
  for await (const x of asyncIterable) {
    console.log(x); // 'hello', 'world'
  }
})();
```

### 4. `Symbol.toStringTag`

自定义对象的 `Object.prototype.toString()` 返回值：

```typescript
const obj = {
  [Symbol.toStringTag]: "MyCustomObject",
};

console.log(Object.prototype.toString.call(obj)); // '[object MyCustomObject]'
```

### 5. `Symbol.hasInstance`

自定义 `instanceof` 操作符的行为：

```typescript
class MyArray {
  static [Symbol.hasInstance](instance: any) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof MyArray); // true
```

### 6. `Symbol.species`

用于创建派生对象时指定构造函数：

```typescript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * 2);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

### 7. `Symbol.match`, `Symbol.replace`, `Symbol.search`, `Symbol.split`

自定义字符串匹配和替换行为：

```typescript
const customMatcher = {
  [Symbol.match](str: string) {
    return str.includes("hello") ? ["hello"] : null;
  },
};

console.log("hello world".match(customMatcher)); // ['hello']
```

### 8. `Symbol.isConcatSpreadable`

控制数组或类数组对象在 `concat()` 方法中的展开行为：

```typescript
const arr1 = [1, 2];
const arr2 = [3, 4];
arr2[Symbol.isConcatSpreadable] = false;
console.log([].concat(arr1, arr2)); // [1, 2, [3, 4]]
```

### 9. `Symbol.unscopables`

用于 `with` 语句中，排除某些属性：

```typescript
const obj = {
  foo: 1,
  bar: 2,
  [Symbol.unscopables]: {
    foo: true,
  },
};

with (obj) {
  console.log(bar); // 2
  console.log(foo); // ReferenceError: foo is not defined
}
```

这些 `Symbol` 提供了对 JavaScript 对象行为的底层控制能力，可以用于实现更高级的抽象和元编程功能。
