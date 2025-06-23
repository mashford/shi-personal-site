## How to clone an object

```js
let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
```

extra clone:

```
function deepClone(value, path = new Set()) {
  if(path.has(value)) return value

  if(typeof value === 'object') {
    if(Array.isArray(value)) {
      return value.map((v)=>deepClone(v))
    } else if(value === null) {
      return value
    } else if(Object.getPrototypeOf(value) === Object.prototype) {
      return Reflect.ownKeys(value).reduce((prev, key)=>{
        path.add(value)
        prev[key] = deepClone(value[key], path)
        return prev
      },{})
    } else if(Object.getPrototypeOf(value) === Date.prototype) {
      return new Date(value)
    } else if(Object.getPrototypeOf(value) === RegExp.prototype) {
      return new RegExp(value.source, value.flag)
    } else {
      return value
    }
  } else {
    return value
  }
}// https://www.greatfrontend.com/questions/javascript/deep-clone-ii
```