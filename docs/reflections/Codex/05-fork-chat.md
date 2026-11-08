---
sidebar_position: 5
---

# Fork chat：分叉当前聊天

菜单名称：`Fork chat`
常用命令：`/fork`

## 它做什么

Fork 会从当前聊天的某个状态创建一个新聊天，保留原聊天作为另一条路线。它适合在不破坏原方案的情况下尝试不同的实现方向。

```text
/fork
```

## 适合的场景

- 方案 A 和方案 B 都值得尝试；
- 想实验一个高风险重构，但保留原聊天记录；
- 想让一个分支研究问题，另一个分支直接实施；
- 当前聊天已经形成了完整背景，但新方向不应污染主线。

示例：

```text
/fork
在这个分支中只研究 CSS 方案，不修改文件，比较三种布局实现的风险。
```

## 和其他命令的区别

| 命令 | 用途 |
| --- | --- |
| `/new` | 在同一个项目中重新开始空白聊天 |
| `/fork` | 继承当前聊天历史，尝试另一条路线 |
| `/side` | 临时问一个侧边问题，主聊天仍是主线 |
| `/worktree` | 在 Git worktree 中隔离代码工作区 |

Fork 聊天并不等于自动创建一个独立 Git 分支，也不等于复制所有本地文件。涉及代码写入时，先确认当前项目、分支和工作目录。

## 使用后的检查

```text
/status
/diff
```

确认新聊天使用的工作目录和文件状态，再开始修改。完成后不要把两个分支的改动混在一起提交。

官方参考：[Slash commands](https://learn.chatgpt.com/docs/reference/slash-commands)、[Projects and chats](https://learn.chatgpt.com/docs/projects?surface=app)。
