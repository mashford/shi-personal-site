# Hooks and useId

### 为什么 hooks 不能在条件语句中

每个 fiber 节点都有一个 hooks list，每次渲染时，hooks list 的长度和顺序都是确定的。

### useId

```TSX
const id = useId();
```

useId 会生成一个唯一的 id，这个 id 会在组件的整个生命周期中保持不变。

这个 ID 是根据组件在组件树中的位置生成的，所以在 CSR 和 SSR 中都一致。

这个 hook 解决了 hydration mismatch 的问题。

```TSX
const id = useId();
return (
  <div>
    <input id={id} />
    <label htmlFor={id}>Label</label>
  </div>
);
```
