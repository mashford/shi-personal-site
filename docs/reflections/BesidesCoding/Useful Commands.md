---
sidebar_position: 2
---

# Useful Commands

## Released a listened local port

```bash
# find 3118 port occupation list
lsof -ti :3118
# could be 11566
# kill it
kill -9 11566
```