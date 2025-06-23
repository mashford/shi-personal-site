# Daily Practice

## Singleton

```js
function singleton(ClassName) {
  let instance = null;
  return new Proxy(ClassName, {
    construct(target, args) {
      if (!instance) {
        instance = new target(...args);
      }
      return instance;
    },
  });
}
```

:::info Example

```js
const Singleton = singleton(SomeClass);
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

Proxy can also be used in other things, like

1. READ

- Lazy loading
- Log access
- Access control
- Transform value before getting it

2. SET

- Validate value before setting it
- Transform value before setting it
- Log access

## Write a GCD function

```js
function gcd(a, b) {
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

console.log(gcd(12, 18));
```

## deepClone

```js
function deepClone(obj: unknown) {
  if (!obj) return obj;
  if (structuredClone) return structuredClone(obj);
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  const cloneObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}
```

## Write a debounce function

```js
function debounce(func: Function, wait: number) {
  let timeout: number;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

## Write a throttle function

```js
function throttle(func: Function, wait: number) {
  let timeout: number | null;
  return function (...args) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
}
```

## Write a call function

```js
Function.prototype.myCall = function (context: any, ...args: any[]) {
  context = context || window;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const res = context[fnSymbol](...args);
  delete context[fnSymbol];
  return res;
};
```

## Write an apply function

```js
Function.prototype.myApply = function (context: any, args: any[]) {
  context = context || window;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const res = context[fnSymbol](...args);
  delete context[fnSymbol];
  return res;
};
```

## Write a bind function

```js
Function.prototype.myBind = function (context: any, ...args: any[]) {
  context = context || window;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  return function (...args2: any[]) {
    if (new.target) {
      return new context[fnSymbol](...args, ...args2);
    }
    return context[fnSymbol](...args, ...args2);
  };
};
```

## How to find if a function is a generator function

```js
function isGeneratorFunction(fn) {
  return fn[Symbol.toStringTag] === "GeneratorFunction";
}
```

## How to find if a function is an async function

```js
function isAsyncFunction(fn) {
  return fn[Symbol.toStringTag] === "AsyncFunction";
}
```

## How to find if an object is a proxy object

```js
function isProxyObject(obj) {
  return obj[Symbol.toStringTag] === "Proxy";
}
```

## How to find if an object has a specific property

```js
// if you want to check the prototype chain
function hasProperty(obj, prop) {
  return Reflect.has(obj, prop);
}

// if you want to check if the property is in the object itself

function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
```
