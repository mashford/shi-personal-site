---
sidebar_position: 9
---

# Model：选择模型

菜单名称：`Model`
常用命令：`/model`

## 它做什么

Model 用于选择当前聊天使用的模型。可选列表由账号、工作区、客户端和当前环境决定。

```text
/model
```

选择后，可以用 `/status` 检查当前会话是否已经切换。

## 怎么选

| 任务 | 选择思路 |
| --- | --- |
| 摘要、查找、简单文案 | 更快、更省资源的可用模型 |
| 普通 Bug、测试和局部重构 | 平衡速度与推理能力 |
| 复杂架构、长任务、视觉还原 | 更强推理和更长上下文的可用模型 |
| 图片、截图、草图理解 | 确认当前模型支持视觉输入 |

模型越强不代表可以省略上下文和验证。复杂任务仍要给出文件、复现步骤、约束和完成标准。

## 与 Reasoning 的关系

模型决定“使用哪种能力”；Reasoning 决定“当前模型投入多少推理”。如果菜单提供独立的 `Reasoning`，可以分别调整：

```text
/model
/reasoning
```

## CLI 中选择模型

```bash
codex --model <MODEL>
codex -m <MODEL>
codex exec -m <MODEL> "检查当前改动"
```

具体模型名称必须以当前账号显示的列表为准，不要照抄已经下线或没有权限的模型名。

## 一个实际策略

```text
先用默认模型调查问题
  ↓
如果任务跨文件或证据复杂，提高推理强度
  ↓
如果仍然不确定，补上下文或询问用户
  ↓
最后用测试、截图和 diff 验证
```

官方参考：[Models](https://learn.chatgpt.com/docs/models)、[Prompting Codex](https://learn.chatgpt.com/docs/prompting?site_variant=chatgpt&translationFallback=zh-Hans)。
