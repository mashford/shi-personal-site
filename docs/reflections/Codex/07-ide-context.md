---
sidebar_position: 7
---

# IDE context：共享编辑器上下文

菜单名称：`IDE context`
常用命令：`/ide-context`

## 它做什么

IDE context 让 Codex 使用已连接编辑器中的上下文，典型包括当前打开的文件、当前选中的代码和工作区信息。

```text
/ide-context
```

当菜单显示 `Turn IDE context off` 时，说明它当前已经打开；再次点击会关闭。

## 适合的提示

```text
解释我当前选中的这段代码，并指出它可能导致的状态更新问题。
```

```text
根据我现在打开的组件和测试文件，补一个最小回归测试。
```

## 它不等于什么

- 不等于自动读取整个仓库；
- 不等于永久记忆；
- 不等于 Git 提交；
- 不等于把本地工作区同步到云端；
- 不会自动解决 IDE 未连接或文件未保存的问题。

需要精确指定文件时，使用 `@路径`、`/mention` 或文件附件。

## 找不到 IDE context 时

1. 在 VS Code、Cursor 或 Windsurf 中打开项目文件夹。
2. 安装并启用 OpenAI Codex 扩展。
3. 登录与桌面 App 相同的账号。
4. 用 `Cmd/Ctrl + Shift + P` 执行 `Codex: Open Codex Sidebar`。
5. 在编辑器中打开文件或选中代码。
6. 回到桌面 App，重新输入 `/ide-context`。

如果仍不可用，可以暂时用 `+` 添加文件，或者在提示中写：

```text
请读取 @src/App.tsx 和 @src/styles.css，再分析这个布局问题。
```

## IDE context 与 CLI 的区别

CLI 中常见的是 `/ide`，用于把打开文件和当前选区加入下一次提示；桌面 App 的菜单名称是 `/ide-context`。两者概念相近，但命令列表取决于运行界面。

官方参考：[Codex IDE extension](https://learn.chatgpt.com/docs/codex/ide)、[Developer settings](https://learn.chatgpt.com/docs/developer-settings)。
