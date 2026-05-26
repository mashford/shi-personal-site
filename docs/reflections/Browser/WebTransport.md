# WebTransport：下一代 Web 实时通信 API，WebSocket 的继任者？

很多年前，Web 应用的通信模式非常简单：

- 页面加载 → HTTP 请求 → 页面刷新
- 后来出现 AJAX
- 再后来出现 WebSocket，实现双向实时通信
- 视频、游戏、实时协作兴起后，又出现 WebRTC

但这些方案都有一些问题：

- WebSocket：只有一个可靠的 TCP 流
- WebRTC：能力强，但太重
- HTTP/2：无法真正解决低延迟双向实时问题

于是浏览器开始拥抱 QUIC，而 WebTransport 就诞生了。

WebTransport 可以看作：

> “建立在 HTTP/3（QUIC）之上的低延迟实时通信 API”

它试图提供：

- 双向通信
- 多路复用
- 不同可靠性策略
- 更低延迟
- 更好的连接恢复能力

简单来说：

> WebSocket 是 TCP 风格实时通信，而 WebTransport 是 QUIC 风格实时通信。

---

## WebSocket 的问题

假设你在做：

- 实时游戏
- 股票行情
- AI 语音聊天
- 多人协作文档
- IoT 设备监控

WebSocket 会遇到一个经典问题：

TCP Head-of-line Blocking。

例如：

服务器发送：

```
packet1
packet2
packet3
packet4
```

如果：

```
packet2 丢失
```

那么：

```
packet3
packet4
```

即使已经到达浏览器，也必须等待。

因为 TCP 保证：

> 顺序 + 可靠

于是：

```
延迟突然变高
```

对于聊天：

问题不大。

对于：

- 游戏位置同步
- 实时语音
- 视频流

体验会明显变差。

---

## WebTransport 的核心思想

WebTransport 基于：

HTTP/3

而 HTTP/3 又基于：

QUIC

QUIC 工作在：

```
UDP
    ↓
QUIC
    ↓
HTTP/3
    ↓
WebTransport
```

它最大的变化：

TCP：

```
一个连接
    ↓
一个数据流
```

QUIC：

```
一个连接
    ↓
多个独立数据流
```

于是：

```
stream1: 聊天消息
stream2: 玩家位置
stream3: 音频
stream4: 文件传输
```

即使：

```
stream2 丢包
```

也不会阻塞：

```
stream1
stream3
stream4
```

---

## WebTransport 提供两种传输模式

### 1. Streams（可靠）

类似：

```javascript
const transport = new WebTransport("https://example.com:4433");

await transport.ready;

const stream = await transport.createBidirectionalStream();

const writer = stream.writable.getWriter();

await writer.write(new TextEncoder().encode("hello"));
```

特点：

- 顺序保证
- 可靠传输
- 多流独立

适合：

- 聊天
- 文档同步
- 文件传输

---

### 2. Datagrams（不可靠）

类似：

```javascript
const writer = transport.datagrams.writable.getWriter();

await writer.write(new Uint8Array([1, 2, 3]));
```

特点：

- 不保证送达
- 不保证顺序
- 超低延迟

适合：

- 玩家坐标
- 鼠标位置
- 语音数据
- 视频帧

因为：

旧数据没意义。

例如：

玩家位置：

```
x=100
x=101
x=102
x=103
```

如果：

```
x=101
```

丢了，

根本没必要重传。

直接显示：

```
x=103
```

即可。

---

## WebTransport vs WebSocket

|                  能力 | WebSocket | WebTransport |
| --------------------: | --------: | -----------: |
|              双向通信 |         ✓ |            ✓ |
|                  基于 |       TCP |         QUIC |
|              多路复用 |         × |            ✓ |
| Head-of-line Blocking |        有 |         没有 |
|            不可靠传输 |         × |            ✓ |
|              连接迁移 |         × |            ✓ |
|                低延迟 |      一般 |         更低 |
|            浏览器支持 |      成熟 |         较新 |

---

## 一个 AI 语音助手例子

假设你做：

```
ChatGPT Voice
```

可能的数据：

### Stream（可靠）

```
用户消息
AI 文本
配置同步
```

### Datagram（不可靠）

```
麦克风音频
实时语音流
情绪数据
```

这样：

某一帧音频丢失：

```
[frame1]
[frame2]
[x]
[frame4]
```

不会导致：

```
frame4 卡住等待
```

用户几乎感觉不到。

---

## WebTransport 和 WebRTC 的区别

很多人会问：

> WebRTC 不已经能做这些了吗？

确实可以。

但 WebRTC 很复杂：

需要：

- SDP
- ICE
- STUN
- TURN
- NAT 穿透

一套流程下来：

```
信令服务器
ICE协商
候选收集
连接建立
```

非常重。

WebTransport：

```javascript
const transport = new WebTransport(url);
```

就结束了。

因此：

WebTransport 更像：

> 给 Web 开发者的轻量实时网络层

而 WebRTC 更像：

> 浏览器级音视频系统

---

## WebTransport 的限制

目前还不能完全替代 WebSocket：

### 浏览器支持

并非所有浏览器都完全支持。

### 必须依赖 HTTP/3

服务端需要支持：

- QUIC
- HTTP/3
- WebTransport

例如：

- Node 原生支持有限
- nginx 支持仍在发展
- Cloudflare 支持较好

### 生态还不成熟

今天大多数框架：

```javascript
socket.io;
ws;
```

仍然基于 WebSocket。

---

## 未来会发生什么

过去：

```
HTTP
    ↓
AJAX
    ↓
WebSocket
```

未来可能：

```
HTTP
    ↓
WebSocket
    ↓
WebTransport
```

尤其随着：

- AI 实时语音
- 云游戏
- XR
- 多人实时协作
- Agent 通信

增长后：

“一个可靠 TCP 流”越来越像一种限制。

未来浏览器可能会逐渐把：

> 多流 + 可选择可靠性

变成默认能力。

**兼容性表（推荐）**
[Can I Use - WebTransport](https://caniuse.com/webtransport?utm_source=chatgpt.com)

**官方文档兼容性页**
[MDN WebTransport Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport?utm_source=chatgpt.com)

根据目前的数据，大致可以总结成：

| 浏览器     |                           支持情况 |
| ---------- | ---------------------------------: |
| Chrome     |                        ✅ 完整支持 |
| Edge       |                        ✅ 完整支持 |
| Firefox    |                            ✅ 支持 |
| Safari     | ⚠️ 较晚加入，部分版本/实现仍需注意 |
| iOS Safari |                  ⚠️ 新版本开始支持 |
| IE         |                          ❌ 不支持 |

如果你在写文章，我建议不要写：

> “WebTransport 浏览器支持还不成熟”

这个说法在 2026 年已经有点过时了。

更准确的说法应该是：

> WebTransport 已经在主流 Chromium 浏览器以及 Firefox 中得到支持，Safari 的支持也在逐步完善。但它仍未达到像 WebSocket 那样“几乎无脑可用”的生态成熟度，因此生产环境通常需要做 feature detection 和 fallback。

实际项目里一般这样写：

```javascript
if ("WebTransport" in window) {
  // use WebTransport
} else {
  // fallback to WebSocket
}
```

([OpenReplay Blog][2])

另外比浏览器兼容性更容易踩坑的其实是**服务端支持**：

- 浏览器支持 WebTransport
- ≠ 服务器能跑 WebTransport

因为服务器还需要：

- HTTP/3
- QUIC
- WebTransport endpoint

很多传统部署（老 Nginx、Node 原生 server）不一定直接可用。

## Node.js 生态现状：浏览器支持 ≠ 服务端支持

到今天，浏览器对 WebTransport 的支持已经比早期成熟很多，但真正落地时，更容易遇到的问题其实不在浏览器，而在服务端。

WebTransport 的协议栈是：

```text
UDP
  ↓
QUIC
  ↓
HTTP/3
  ↓
WebTransport
```

而 Node.js 传统的网络能力主要围绕：

```text
TCP
  ↓
HTTP/1.1
HTTP/2
WebSocket
```

展开。

这意味着：

```javascript
const server = http.createServer();

const wss = new WebSocketServer({
  server,
});
```

这种熟悉的模式并不能直接迁移到 WebTransport。

原因在于：

- WebTransport 必须运行在 HTTP/3 之上
- HTTP/3 必须依赖 QUIC
- QUIC 基于 UDP，而不是 TCP
- Node.js 原生 HTTP Server 不负责这些能力

因此：

> 浏览器支持 WebTransport，并不意味着 `npm install` 一个库就能跑起来。

目前 Node.js 的支持情况大致如下：

|         能力 |              Node.js 状态 |
| -----------: | ------------------------: |
|     HTTP/1.1 |                   ✅ 成熟 |
|       HTTP/2 |                   ✅ 成熟 |
|    WebSocket |                   ✅ 成熟 |
|         QUIC | ⚠️ 历史上实验过，但未稳定 |
|       HTTP/3 |               ⚠️ 有限支持 |
| WebTransport |     ⚠️ 主要依赖第三方实现 |

常见方案包括：

- `@fails-components/webtransport`
- `quiche`
- `aioquic`
- Cloudflare 边缘运行环境
- Go/Rust 服务端

很多团队会选择：

```text
Browser
      ↓
WebTransport
      ↓
Edge Gateway
      ↓
Node.js Internal Service
```

例如：

```text
Chrome
    ↓
Cloudflare Edge
    ↓
Node API
```

或者：

```text
Chrome
    ↓
Go WebTransport Server
    ↓
Node Backend
```

这样做的原因是：

- Go、Rust 对 QUIC 支持更成熟
- 边缘平台通常已经内置 HTTP/3
- Node 继续负责业务逻辑

所以现阶段更准确的描述不是：

> WebTransport 还不成熟

而是：

> 浏览器已经逐渐成熟，但服务端生态仍处于演进阶段。

就像当年 WebSocket 刚出现时一样，真正阻碍普及的通常不是浏览器，而是基础设施。

---

## 总结

一句话概括：

> WebTransport = WebSocket + QUIC + 多路复用 + 可选可靠性

如果 WebSocket 解决的是：

> “浏览器实时通信”

那么 WebTransport 解决的是：

> “低延迟实时系统”。

它未必会取代 WebSocket，但很可能会成为下一代实时 Web 基础设施。
