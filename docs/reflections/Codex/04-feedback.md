---
sidebar_position: 4
---

# Feedback：提交产品反馈

菜单名称：`Feedback`
常用命令：`/feedback`

## 它做什么

Feedback 用于向 Codex 或 ChatGPT 团队反馈产品问题、命令异常、界面问题或体验建议。

```text
/feedback
```

它不是项目里的 Issue，也不是让 Codex 修改当前代码。

## 一条好的反馈包含什么

```text
环境：Codex 桌面 App / macOS / 本地项目
操作：我在输入框中打开命令菜单，点击 IDE context
预期：当前 IDE 的打开文件被带入下一条提示
实际：菜单项消失，或提示仍然看不到当前文件
复现：每次都能复现 / 偶尔复现
时间：发生时间和客户端版本
```

如果是命令问题，写出：

- 使用的命令；
- 当前项目类型；
- 本地还是云端；
- 是否连接了 IDE；
- 是否有错误信息或截图。

## 提交前检查隐私

诊断日志和截图可能包含：

- 本地绝对路径；
- 仓库名和分支名；
- 私有域名；
- 文件内容；
- 终端输出中的 token 或 cookie。

提交前先检查并移除敏感信息。不要把 API key、密码和访问令牌放进反馈文字。

## 项目问题应该去哪儿

如果是代码、需求或团队协作问题，优先写入项目 Issue 或团队系统；只有当 Codex 产品本身的行为有问题时才使用 Feedback。

官方参考：[Slash commands](https://learn.chatgpt.com/docs/reference/slash-commands)。
