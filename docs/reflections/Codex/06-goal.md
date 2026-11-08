---
sidebar_position: 6
---

# Goal：持续追踪任务目标

菜单名称：`Goal`
常用命令：`/goal`

## 它做什么

Goal 把一个目标附加到当前聊天，让 Codex 在多轮工作中持续参考目标、进度和完成条件。

```text
/goal 完成这个页面的 React 复刻，桌面和移动截图都通过，并运行 pnpm build
```

它适合长任务，不适合每一个小改动。

## 常用操作

```text
/goal                  # 查看当前目标
/goal edit             # 修改目标
/goal pause            # 暂停目标
/goal resume           # 恢复目标
/goal clear            # 清除目标
```

在桌面 App 中，如果目标已激活，也可以直接使用输入框上方的目标进度区域进行暂停、恢复、编辑或清除。

## 怎么写一个好的目标

目标至少要包含：

- 要改变什么；
- 范围是什么；
- 什么证据算完成；
- 哪些事情不能做；
- 遇到未知时如何处理。

```text
/goal
完成 landing page 的 React + Vite 复刻：
1. 保持桌面和 390px 移动视口布局一致；
2. 主要交互可操作；
3. 运行 pnpm build；
4. 输出截图和剩余差异；
5. 设计证据不足时停下来询问，不要自行编造。
```

## Goal 和普通提示的区别

普通提示是当前这一轮的任务；Goal 是跨多轮持续追踪的目标。Goal 不会自动替代测试、截图或人工验收，也不会让 Codex 获得缺失的设计资料。

## 什么时候暂停

遇到以下情况时，应该暂停或修改目标：

- 任务范围发生变化；
- 原始证据不足，继续做会靠猜；
- 需要用户选择设计方案或产品行为；
- 当前分支或运行环境不再适合继续。

官方参考：[Slash commands](https://learn.chatgpt.com/docs/reference/slash-commands)、[Long-running work](https://learn.chatgpt.com/docs/long-running-work)。
