# iOS PWA 中 Input 无法正常唤起键盘的问题总结与解决方案

## 背景

在开发 iOS PWA（`Add to Home Screen` / `standalone` 模式）时，我们遇到了一个非常典型但又非常难定位的问题：

> **Input 元素在首次点击时无法唤起系统键盘**
> 甚至需要多次点击，或在 Safari 中正常、但在 PWA 中失效。

这个问题在 Android、桌面浏览器、Safari Tab 中都不会出现，**只在 iOS PWA 环境稳定复现**。

---

## 问题表象

常见表现包括：

- 点击 input 无反应，键盘不弹
- 第二次点击才弹键盘
- 必须手动点到 input 文本区域才有效
- `input.focus()` 在 JS 中执行但键盘不出现
- Safari 中 OK，PWA 中必炸

---

## 根因分析

### 1. iOS 对键盘唤起的极端限制

在 iOS 中，**唤起键盘被视为系统级行为**，只有满足下面条件才会被允许：

- 必须来自 **直接的用户手势**
- 必须是 **同步调用**
- 必须作用在 **真实可交互的 input 元素上**

任何间接行为都会被系统拦截：

- 异步回调（`setTimeout / Promise / async`）
- React / Vue 生命周期里的 `focus()`
- 先显示 input 再调用 `focus()`
- 点击非 input 元素后转移 focus

---

### 2. iOS PWA 使用的是 WKWebView（非 Safari）

iOS PWA 并不运行在 Safari 中，而是运行在 **WKWebView**（standalone mode）：

- 对 focus 的判定更严格
- 对“是否用户触发”的判断更保守
- 对 layout / transform / animation 更敏感

这导致：

> **同一份代码：Safari 中正常，PWA 中无法唤起键盘**

---

## 最容易踩的工程坑

以下做法在大多数平台没问题，但在 iOS PWA 中失败率极高：

- 条件渲染 input（mount / unmount）
- 使用假 input（div + text）
- `opacity: 0` 隐藏 input
- modal / portal / transform 包裹 input
- 在点击事件中 `setState` 后再 `focus()`

本质问题是：
**iOS 不认为这些行为是“用户直接点了 input”**

---

## 关键突破点（核心结论）

**唯一稳定的解决方案是：**

> **Input 从页面加载开始就存在、可点击
> 只是“内容不可见”，而不是“input 不存在”**

换句话说：

- ❌ 不要 later mount input
- ❌ 不要程序调用 focus
- ✅ 让用户一开始就点在真实 input 上

---

## 最终解决方案

### 思路

- input 从一开始就存在于 DOM 中
- 用户第一次点击时，点击目标就是 input 本身
- 使用 CSS 隐藏内容而不是隐藏元素
- 同一次点击完成：
  - reveal 内容
  - focus 生效
  - 键盘弹出

---

### 核心实现

**HTML**

```html
<div class="secure-input">
  <input id="realInput" type="text" />
  <div class="mask">点击查看</div>
</div>
```

**CSS**

```css
.secure-input {
  position: relative;
}

.secure-input input {
  color: transparent;
  caret-color: transparent;
  background: transparent;
}

.mask {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
```

**JS**

```js
input.addEventListener("focus", () => {
  input.style.color = "#000";
  input.style.caretColor = "#000";
  mask.style.display = "none";
});
```

---

## 为什么这个方案有效

因为在 iOS 看来：

- 用户点击的 **从一开始就是 input**
- input 从未被隐藏、销毁、重新创建
- focus 是原生 click → focus 流程的一部分

> 键盘并不是被“调用”的，而是系统自然打开的。

这是 iOS 唯一信任的路径。

---

## 衍生经验总结

### iOS PWA 中使用 input 的规则

- input 永远不要条件渲染
- 不要依赖 JS 主动 focus
- 不要用 transform 包裹 input
- 尽量避免 modal / portal
- 优先让用户点击真实 input

---

## 结语

这个问题并不是代码写错，而是 **iOS PWA 的系统设计选择**。

当你尝试“用 Web 的方式控制键盘”时，iOS 会明确告诉你：

> **键盘只能由用户亲手唤起。**

理解这一点后，很多看似诡异的问题都会迎刃而解。
