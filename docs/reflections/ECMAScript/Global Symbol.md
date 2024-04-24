# How to make const [a, b] = {a:1, b:2}

```js
Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]()
}
```