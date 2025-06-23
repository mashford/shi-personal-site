# Import JS with importmap

important: 
 1. include in `<header>`
 2. check if possible `HTMLScriptElement.supports('importmap')`

Step 1:
```js
<script type="importmap">
  {
    "imports": {
      "browser-fs-access": "https://unpkg.com/browser-fs-access@0.33.0/dist/index.modern.js"
    }
  }
</script>
```

Step 2:

```js
<button>Select a text file</button>
<script type="module">
  import {fileOpen} from 'browser-fs-access';

  const button = document.querySelector('button');
  button.addEventListener('click', async () => {
    const file = await fileOpen({
      mimeTypes: ['text/plain'],
    });
    console.log(await file.text());
  });
</script>
```

[web.dev](https://web.dev/blog/import-maps-in-all-modern-browsers)