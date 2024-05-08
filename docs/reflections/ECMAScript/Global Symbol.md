# How to make const [a, b] = {a:1, b:2}

```js
Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]()
}
```

## How to make "猪痞恶霸" instanceof demo

```js
class demo {
    static [Symbol.hasInstance](item) {
        return item === "猪痞恶霸"
    }
}
"猪痞恶霸" instanceof demo // true
```