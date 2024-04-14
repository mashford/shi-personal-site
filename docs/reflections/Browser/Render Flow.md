---
sidebar_position: 1
---

# How a page is rendered

## Chrome processes

- Render Process (multi): parse HTML/CSS/javaScript, render page. Notice, a page may have multiple render process, if it contains iframes

- Dedicated worker (multi)

- Service worker (multi)

- Plugin process (multi)

- Extension process (multi)

- Browser Process (one): UI, browser interface. This process listen to user events. And it controls other processes.

- GPU Process (one)

- Utility: Network service (one)

- Utility: Storage service (one). This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

- Utility: Audio service (one).

- Utility: Tracing service (one).

- Spare renderer

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f91326ae9f994854a024b8cba9dc6f78~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0ffc7af98c64c84a6d160c5f801045d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

#### question:

when opening a new tab, what processes are created?

If memory pressure is low, there will be a render process,

## process of network request

1. 浏览器进程发出 URL 请求给网络进程

2. 网络进程接收到 URL 请求后，发起网络请求，然后服务器返回 HTTP 数据到网络进程，网络进程解析 HTTP 响应头数据，并将其转发给浏览器进程

3. 浏览器进程接收到网络进程的响应头数据后，发送 CommitNavigation 消息到渲染进程，发送 CommitNavigation 时会携带响应头、等基本信息。

4. 渲染进程接收到 CommitNavigation 消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和网络进程建立数据管道

5. 最后渲染进程会像浏览器进程“确认提交”，这是告诉浏览器进程，说我已经准备好接受和解析页面数据了

6. 最后浏览器进程更新页面状态

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/4/1731a0a7812b8fca~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)

## process of rendering

[juejun](https://juejin.cn/post/7018358245785862151) [web.dev](https://web.dev/articles/howbrowserswork#webkit_css_parser)

[juejin](https://juejin.cn/post/6976783503870410765)
