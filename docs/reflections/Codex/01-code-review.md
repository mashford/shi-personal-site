---
sidebar_position: 1
---

# Code review：代码审查

菜单名称：`Code review`
常用命令：`/review`

## 它做什么

Code review 让 Codex 以审查者的身份阅读 Git 改动，重点寻找可能的 Bug、回归、风险和缺少的测试。它的默认目标是报告问题，不是直接修改工作区。

官方文档区分了两种审查：Codex 内置的 `/review` 用于本地 Git checkout；GitHub Pull Request 的 Code Review 是另一套集成。

## 在桌面 App 中使用

1. 在 Codex 输入框输入 `/`。
2. 选择 `Code review` 或 `/review`。
3. 选择审查未提交改动，或与某个分支比较。
4. 指定额外关注点，例如安全、性能或移动端布局。
5. 阅读问题后，再决定是否让 Codex 修复。

示例：

```text
/review
重点检查权限边界、错误处理、数据丢失风险，以及是否缺少回归测试。
```

## 在 CLI 中使用

```bash
codex review --uncommitted
codex review --base main
codex review --commit <COMMIT_SHA>
```

带自定义要求：

```bash
codex review --uncommitted \
  "重点检查 API 兼容性、异常处理和未覆盖的测试场景"
```

## 推荐流程

```text
/status
/diff
/review
运行测试
再次检查 diff
```

`/review` 不是测试替代品。审查通过后仍应运行项目自己的 lint、test、build 和运行时检查。

## 常见误区

- 只看审查摘要，不看具体文件和行号；
- 没有确认审查范围，误以为它检查了整个仓库；
- 把“没有发现问题”当成“功能一定正确”；
- 让 Codex 一边审查一边大范围修改，导致审查对象不断变化。

官方参考：[Code review](https://learn.chatgpt.com/docs/code-review)。
