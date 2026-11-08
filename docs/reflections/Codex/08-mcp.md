---
sidebar_position: 8
---

# MCP：查看外部工具连接

菜单名称：`MCP`
常用命令：`/mcp`

## 它做什么

MCP（Model Context Protocol）用于把 Codex 连接到外部工具和数据源，例如文档、数据库、设计工具或内部系统。

```text
/mcp
```

打开后通常可以查看已配置的 MCP server 和连接状态。

## 它和文件上下文的区别

文件上下文是当前项目中的代码、截图和附件；MCP 是可以被 Codex 调用的外部工具。连接 MCP 不代表 Codex 会自动读取所有外部数据，你仍应明确指定：

```text
请使用已连接的官方文档 MCP，查找这个 API 的当前参数，并给出来源。
```

## CLI 中的 MCP

```bash
codex mcp list
codex mcp add <name> --url <URL>
codex mcp remove <name>
codex mcp login <name>
```

先使用 `list` 确认状态，再修改配置。需要 OAuth 的服务可能会打开登录流程。

## 使用建议

- 明确指定要使用的 server，而不是只说“查一下”；
- 对外部数据注明时间范围和来源；
- 对写入型工具保留人工审批；
- 不要把 token、cookie 或私密 URL 写入仓库；
- 连接异常时先检查 server 是否启动、认证是否过期和权限是否足够。

MCP 配置通常位于 `~/.codex/config.toml`，也可以按项目配置在受信任项目的 `.codex/config.toml` 中。

官方参考：[MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)、[Developer settings](https://learn.chatgpt.com/docs/developer-settings)。
