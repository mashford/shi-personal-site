---
sidebar_position: 10
---

# Plan mode：先规划再实施

菜单名称：`Plan mode`
常用命令：`/plan`

## 它做什么

Plan mode 让 Codex 在修改前先调查项目、识别风险并提出实施计划。

```text
/plan
```

也可以直接附带问题：

```text
/plan 分析这个页面在移动端溢出的原因，先不要修改文件
```

## 一个好的计划应该包含

- 相关入口文件；
- 当前行为和期望行为；
- 已确认的证据；
- 仍然未知的地方；
- 准备修改的文件；
- 验证命令和验收标准；
- 可能的副作用和回滚方式。

## 确认后怎么实施

```text
计划没问题，按计划实施。每个阶段完成后运行对应验证；如果发现证据不足，请停下来询问，不要猜。
```

计划不是最终结果，也不代表 Codex 已经修改了文件。确认计划时要检查范围是否过大、是否把猜测写成了事实、是否遗漏了测试。

## 什么时候必须先用计划

- 跨多个文件的重构；
- 视觉还原和多视口适配；
- 部署、迁移或权限变更；
- 难以复现的线上 Bug；
- 用户明确要求“不确定时停下”的任务。

简单的拼写修复不必强行进入计划模式。

官方参考：[Prompting Codex](https://learn.chatgpt.com/docs/prompting?site_variant=chatgpt&translationFallback=zh-Hans)、[Slash commands](https://learn.chatgpt.com/docs/reference/slash-commands)。
