---
sidebar_position: 13
---

# Status：查看当前会话状态

菜单名称：`Status`
常用命令：`/status`

## 它做什么

Status 用于查看当前聊天的状态。截图中显示的说明是：`Show chat ID, context usage, and rate limits`。

```text
/status
```

它通常可以帮助你确认：

- 当前聊天 ID；
- 上下文使用量；
- 速率限制或使用量状态；
- 当前模型和推理设置；
- 当前项目或工作目录；
- 本地还是云端执行；
- 当前权限和可写范围。

## 什么时候先执行它

- Codex 突然看不到文件；
- IDE context 看起来没有生效；
- 你不确定是否切换了项目；
- 长任务变慢，想确认上下文容量；
- 恢复聊天后，不确定是否回到了正确目录；
- 准备执行高风险操作。

## 一个排查例子

```text
/status
```

如果工作目录、项目、分支或执行位置不对，先修正环境，再继续任务。不要在错误目录里直接运行修复、提交或部署命令。

## Status 不是网站健康检查

`/status` 查看的是 Codex 当前会话，不是你的个人网站、服务器或 API 的运行状态。网站巡检应使用测试脚本、监控服务、CI 或浏览器检查。

官方参考：[Slash commands](https://learn.chatgpt.com/docs/reference/slash-commands)、[Developer commands](https://learn.chatgpt.com/docs/developer-commands)。
