# How to make `const [a, b] = {a:1, b:2}`

```js
Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};
```

## How to make "instance" instanceof demo

```js
class demo {
  static [Symbol.hasInstance](item) {
    return item === "instance";
  }
}
"instance" instanceof demo; // true
```

## With node.js, you can actually decide what to show on console.log

[nodejs.org](https://nodejs.org/api/util.html#util_util_inspect_custom)

```js
const password = {
  toString() {
    return "xxxxxxxx";
  },
  [Symbol.for("nodejs.util.inspect.custom")](depth, inspectOptions, inspect) {
    return `Password <${this.toString()}>`;
  },
};
console.log(password);
// Prints Password <xxxxxxxx>
```
