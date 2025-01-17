---
sidebar_position: 2
---

# Add a revert commit

The `master` branches, supposedly to be protected and free of direct pushes, may be as safe as you think. So if you need to revert a git that has been recorded on remote server. Try:

```Bash
git reflog
q
git revert 4945db2
```

https://www.simplilearn.com/how-to-revert-commit-in-git-article