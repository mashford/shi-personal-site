# How to debug reflows?

## I am sure there is a way using dev tool

## With React, it shouldn't be a problem

you must have used the devtool from Meta.

## Watch with JavaScript

```js

// select the target node
var target = document.querySelector('#target');

// create an observer instance
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.type);
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

const terget = document.getElementById('target');
for (let i = 0; i < 10; i++) {
  terget.append('<div>SOmething....</div>');
}

// later, you can stop observing
// observer.disconnect();

```


