---
sidebar_position: 7
---

# AGENTS.md、Skills、MCP 与配置

这四个东西解决的是不同问题：

| 机制 | 核心问题 | 典型内容 |
| --- | --- | --- |
| `AGENTS.md` | 每次进入项目都要遵守什么规则 | 构建命令、目录约定、禁止事项、验收标准 |
| Skill | 某类任务应该按什么流程做 | 视觉还原、PDF 处理、数据分析、部署 |
| MCP | 需要连接哪些外部工具和数据 | 文档、数据库、设计工具、工单系统 |
| `config.toml` | Codex 的默认行为如何设置 | 默认模型、权限、沙箱、MCP、功能开关 |

## `/init` 和 `AGENTS.md`

在项目根目录执行：

```text
/init
```

Codex 会生成一个初始的 `AGENTS.md`。建议把它改成短而明确的项目规则：

```markdown
# AGENTS.md

## 项目说明

这是一个 React + Vite 项目。

## 常用命令

- 安装依赖：`pnpm install`
- 开发：`pnpm dev`
- 构建：`pnpm build`
- 检查：`pnpm lint`

## 工作规则

- 修改前先读取相关组件和样式文件。
- 不要删除现有测试或用户未要求的功能。
- 不确定设计意图时停下来询问，不要臆造。
- 完成前运行受影响的测试和构建。
```

`AGENTS.md` 适合放稳定规则，不适合记录某个临时 Bug 的全部过程。临时任务应写在提示、Issue 或专门的任务文件里。

## Skill：可复用的工作流

Skill 通常是一个带 `SKILL.md` 的目录，可以附带脚本、参考资料和资源。它适合把“每次都要重复说明的流程”固定下来。

显式调用：

```text
$visual-restore
```

或者在 Codex 中使用：

```text
/skills
```

根据任务匹配自动调用也是可能的，但自动调用依赖 Skill 的名称和描述。对关键流程，显式写出 Skill 名称更容易确认行为。

一个好的 Skill 应该写清楚：

- 什么时候触发；
- 什么时候不要触发；
- 输入是什么；
- 必须执行哪些步骤；
- 什么时候必须停下来；
- 输出和验证证据是什么。

例如视觉还原 Skill 可以要求固定视口、截图、比较、迭代，并规定缺少设计证据时不得自行补齐。

## `/mcp`：外部工具连接

查看连接状态：

```text
/mcp
```

CLI 中：

```bash
codex mcp list
```

MCP 适合接入 Codex 本地文件以外的工具，例如文档服务、数据库、设计工具或内部系统。连接之后，仍然要告诉 Codex：

```text
请使用已连接的文档 MCP 查找官方资料，并在答案中给出来源。
```

不要因为工具已连接就默认它会自动使用；需要时明确指定数据源和验证要求。也不要把 token、cookie 或私密 URL 提交到仓库。

## `config.toml`

个人配置通常在：

```text
~/.codex/config.toml
```

项目级配置通常在：

```text
.codex/config.toml
```

常见配置内容：

- 默认模型和 provider；
- 默认审批策略和沙箱；
- MCP server；
- Skills 是否启用；
- 多代理或高级功能。

CLI 一次性覆盖某个设置：

```bash
codex --model <MODEL>
codex --config model='<MODEL>'
```

不要把个人密钥、登录凭证或机器专属路径放进团队仓库。

## 如何判断该用哪一个

```text
每个项目都一样的规则       → AGENTS.md
反复执行的一套任务流程     → Skill
需要外部系统或工具         → MCP
个人/项目的默认行为        → config.toml
只对这一轮有效的信息       → 当前提示或文件引用
```

## 常见误区

### 把 Skill 当成项目规则

Skill 是可复用流程；项目的启动命令和目录约定应放在 `AGENTS.md`。

### 把 MCP 当成上下文记忆

MCP 是工具连接，不等于 Codex 自动记住所有外部系统内容。每次仍要指定查询目标和验收标准。

### 把配置改动当成当前聊天命令

`/model` 或 `/permissions` 通常是当前会话控制；想让默认值长期生效，需要检查 `config.toml` 或 App 设置。

官方参考：[Customization](https://learn.chatgpt.com/docs/customization/overview?site_variant=chatgpt&translationFallback=pt-BR)、[Build skills](https://learn.chatgpt.com/docs/build-skills)、[Config basics](https://learn.chatgpt.com/docs/config-file/config-basic?trk=article-ssr-frontend-pulse_little-text-block)、[MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)。
