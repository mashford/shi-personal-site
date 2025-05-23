# lock files are patches

Why we need yarn.lock or pnpm-lock.yaml?

Bcs there are packages like 

```json
"dependencies": {
  "lodash": "^4.17.0"
}
```

the dependencies are resolved to different packages, which is an indeed anti-pattern.

even though a cleaver dev fixed the dependencies in his/hers package.json, the dependencies's dependencies may not always resolve to the same ones.