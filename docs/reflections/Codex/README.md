---
sidebar_position: 1
---

# Codex 学习手册

这是一份面向日常开发的 Codex 入门笔记，重点解释 Codex 的工作界面、命令、上下文、权限和可复用配置。

## 先记住三个概念

| 概念 | 可以把它理解成 | 主要解决的问题 |
| --- | --- | --- |
| Chat / session | 一次连续的工作对话 | 让 Codex 记住当前任务正在做到哪里 |
| Context | Codex 当前能看到的资料 | 告诉它应该读哪些文件、代码和历史信息 |
| Project | 一个本地目录或云端工作空间 | 确定文件、Git、配置和默认工作位置 |

Codex 不等于一个只会聊天的模型。它还会读取项目、运行命令、修改文件、检查 Git 变化，并在权限允许时执行更长的任务。最终效果通常取决于四件事：目标是否清楚、上下文是否准确、权限是否合适、是否要求它验证结果。

## 推荐阅读顺序

1. [斜杠命令](./01-斜杠命令.md)：掌握聊天框里最常用的 `/...`。
2. [上下文、会话与项目](./02-上下文-会话与项目.md)：理解 IDE context、文件引用和恢复会话。
3. [CLI 命令](./03-CLI命令.md)：学习终端中的 `codex ...`。
4. [计划、权限、模型与执行](./04-计划-权限-模型与执行.md)：知道什么时候先计划、什么时候让它改文件。
5. [检查、评审与验证](./05-检查-评审与验证.md)：让“完成”有证据，而不是只听 Codex 说完成了。
6. [AGENTS、Skills、MCP 与配置](./06-AGENTS-Skills-MCP与配置.md)：把个人习惯和项目规则持久化。
7. [常见问题与速查表](./07-常见问题与速查表.md)：排查命令缺失、上下文不对和本地/云端混淆。

## 最小日常工作流

```text
明确目标
  ↓
/plan              # 多步骤任务先调查和规划
  ↓
/goal              # 需要持续推进时，设置持久目标
  ↓
补充上下文          # @文件、选区、IDE context、截图、报错
  ↓
实施修改            # 选择合适的权限和模型
  ↓
/diff + 测试        # 看改了什么，验证行为
  ↓
/review             # 从代码审查角度再检查一次
```

简单问题不需要机械地执行完整流程；但涉及多个文件、视觉还原、部署或重构时，规划和验证很重要。

## 两套命令不要混淆

### 桌面 App / Codex 聊天框

在输入框中输入 `/`，会出现当前环境支持的斜杠命令，例如 `/plan`、`/status`、`/review`。命令是否出现会随产品版本、项目类型和权限变化。

### 终端 CLI

在终端中执行 `codex`、`codex resume`、`codex exec`、`codex review` 等命令。CLI 的参数以本机安装版本的 `codex --help` 为准。

### IDE 扩展

VS Code、Cursor、Windsurf 等编辑器里的 Codex 扩展可以把打开的文件和选中的代码带进当前对话。IDE 扩展与 CLI 共享许多 Codex 配置，但它不是桌面 App 的完全相同界面。

## 官方资料

- [OpenAI Docs：Codex 斜杠命令](https://learn.chatgpt.com/docs/reference/slash-commands)
- [OpenAI Docs：开发者命令与 CLI 参考](https://learn.chatgpt.com/docs/developer-commands)
- [OpenAI Docs：CLI 命令行参考](https://learn.chatgpt.com/docs/cli/reference)
- [OpenAI Docs：Codex IDE 扩展](https://learn.chatgpt.com/docs/codex/ide)
- [OpenAI Docs：项目与聊天](https://learn.chatgpt.com/docs/projects?surface=app)
- [OpenAI Docs：Codex 最佳实践](https://learn.chatgpt.com/docs/learn/best-practices)

官方命令会持续更新。看到本文与自己界面不一致时，优先在当前 Codex 中输入 `/`，或在终端执行 `codex --help`。
