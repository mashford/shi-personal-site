# How to benchmark a section of code

 refer to [stackoverflow.com](https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute/15641427#15641427)

Do Not Use Date.now()

```js

const a = performance.now();
alert('do something...');
const b = performance.now();
alert('It took ' + (b - a) + ' ms.');

```

Use Date.now() only when you want to know the local time on user's machine.

Above is from this site https://xsleaks.dev/.