https://juejin.cn/post/7462542925916258344?searchId=2025052316572319CCAA6DEC6FE638C4C3

# Architecture of chrome

1. browser process, which takes user inputs, render URL bar and channel information.

2. storage process, local storage, indexed DB, cache, session storage.

3. network process, 

4. render processes (multi), load resources from network process and build paint tree.

  1. parse HTML, build DOM tree;

  2. parse CSS, build CSSOM tree;

  3. parse and execute javascript. 
  
    1. Async: once script loaded, execute; 

    2. Defer: Defer scripts run after the `DOMContentLoaded` event is fired. This event occurs once the HTML has been fully parsed, but before other resources like images and stylesheets are fully loaded. Maintains order.

  4. build the render tree,

  5. reflow, build layout tree, calculate element size position; Layering.

  6. paint & build the paint tree.

5. GPU process, take paint tree send to GPU.


## the render process is multi thread.
  The rendering process in a browser involves multiple threads to efficiently manage tasks. Here are the key threads typically involved:
### 1. Main Thread
  - Handles HTML parsing, CSS parsing, and JavaScript execution.
  - Manages the construction of the DOM, CSSOM, and render tree.
  - Performs layout and painting tasks.
  - controls other threads

#### 1.1 GUI Rendering Thread

#### 1.2 JS Engine Thread

### Compositor Thread

### Worker Threads

By distributing tasks across these threads, browsers can optimize rendering performance and provide a smoother user experience.

![img](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/92e6ab7c559247aeac6934b3eeaf6ce2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgRE9N54K86YeR5pyv5aOr:q75.awebp?rk3s=f64ab15b&x-expires=1748222531&x-signature=iqs74RKR6zrPBRV%2FAqdK6auATNw%3D)


## what events are fired 

## the process of events capture and bubble