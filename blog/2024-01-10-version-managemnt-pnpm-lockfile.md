---
slug: lockfile-debugging
title: lockfile debugging
authors: [Shi]
tags: [pnpm, node, frontend]
---

Ideally, we don't need a lockfile, like a npm-lock, a yarn-lock, or a pnpm-lock.yaml. A lockfile should be pure function of package.json.

But some idiots invented this ^ sign. Then all the troubles begins.

```zsh
{
  'pkg': "^2.2.0"
}
```

Could resolve to 2.2.0, 2.2.1 or sth else.

Then we need a lockfile, which could grow

A temp solution:

```zsh
# clear node_modules in current folder
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
# clear the store
rm -rf node_modules && rm -rf ~/.pnpm-store
```
