---
sidebar_position: 4
---

# CLI 命令：在终端里使用 Codex

CLI 是终端版本的 Codex。它适合脚本化、远程开发、持续集成和喜欢键盘操作的人。

## 启动与登录

```bash
codex
```

在当前目录启动交互式 Codex。当前目录通常会成为项目工作目录，因此建议先进入正确的仓库：

```bash
cd /path/to/project
codex
```

也可以指定目录：

```bash
codex --cd /path/to/project
# 或
codex -C /path/to/project
```

登录和退出登录：

```bash
codex login
codex login status
codex logout
```

如果机器上同时有多个账号或旧凭证，先用 `codex login status` 确认当前认证方式，再决定是否重新登录。

## 恢复与分叉会话

```bash
codex resume
codex resume --last
codex resume <SESSION_ID>
codex fork <SESSION_ID>
```

- `codex resume`：打开会话选择器。
- `codex resume --last`：恢复当前工作目录最近的会话。
- `codex resume <SESSION_ID>`：按会话 ID 恢复。
- `codex fork <SESSION_ID>`：从历史会话复制新分支。

如果 Codex 询问使用当前目录还是会话保存的目录，优先检查 Git 分支和路径，不要盲选。

## 非交互执行：`codex exec`

`codex exec` 用于脚本、自动化和 CI 场景。它不要求你一直坐在交互界面前。

一个典型例子：

```bash
codex exec "检查当前项目的测试失败原因，只给出分析，不修改文件"
```

在自动化中，务必明确：

1. 工作目录；
2. 是否允许写文件；
3. 输出格式；
4. 超时策略；
5. 失败时返回什么状态码。

执行会话也可以恢复：

```bash
codex exec resume <SESSION_ID>
codex exec resume --last
```

CLI 版本和安装方式不同，`exec` 的具体参数可能不同。遇到参数问题先执行：

```bash
codex exec --help
```

## 代码审查：`codex review`

对未提交改动审查：

```bash
codex review --uncommitted
```

对某个基准分支审查：

```bash
codex review --base main
```

审查某个提交：

```bash
codex review --commit <COMMIT_SHA>
```

附加审查要求：

```bash
codex review --uncommitted \
  "重点检查权限边界、错误处理、数据丢失风险和缺少的测试"
```

审查命令的目的通常是报告问题，不是直接修改工作区。想让 Codex 修复时，要另发明确指令，并在修复后重新测试。

## MCP 命令

MCP 用于连接外部工具和数据源：

```bash
codex mcp list
codex mcp add <name> --url <URL>
codex mcp remove <name>
codex mcp login <name>
```

先 `list`，再修改配置。不要把访问令牌直接写进 Git 仓库或聊天记录。

## 配置和功能

查看或管理功能开关：

```bash
codex features list
codex features enable <feature>
codex features disable <feature>
```

升级 CLI（当前版本支持时）：

```bash
codex update
```

运行沙箱相关命令：

```bash
codex sandbox --help
```

`sandbox`、功能开关和某些高级命令可能属于实验功能。先看帮助，再在非关键项目中试用。

## CLI 中最重要的快捷键和符号

| 写法 | 作用 |
| --- | --- |
| `@` | 搜索并引用项目中的文件 |
| `/` | 打开斜杠命令菜单 |
| `!` | 在当前审批和沙箱策略下运行本地 shell 命令 |
| `Tab` | 在 Codex 工作时排队下一条提示 |
| `Ctrl+C` | 退出或中断当前操作，具体行为取决于当前状态 |
| `Ctrl+R` | 搜索历史提示 |
| `/status` | 查看当前会话状态 |
| `/diff` | 查看工作区差异 |
| `/review` | 请求当前工作区审查 |

## 安全原则

- 不要为了省确认直接使用危险的全权限参数。
- 自动化任务优先使用 `workspace-write` 之类的最小权限范围。
- 命令中出现 `--dangerously-bypass-approvals-and-sandbox` 时，要把它当作高风险操作处理。
- CI 中要保存结构化输出和最终摘要，并设置超时。
- 对生产环境、密钥、数据库和删除操作，始终保留人工审批。

官方参考：[Developer commands](https://learn.chatgpt.com/docs/developer-commands)、[CLI reference](https://learn.chatgpt.com/docs/cli/reference)。
