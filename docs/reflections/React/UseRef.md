# UseRef

```
// ✅ 正确用法：转发 ref 到内部元素
import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // 暴露特定方法给父组件
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const childRef = useRef(null);
  const handleClick = () => childRef.current.focus(); // 调用子组件方法
  return (
    <>
      <Child ref={childRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}
```

## React 为什么要这样设计

React 的类组件可以接受 ref，但是函数组件不能。ref.current 就指向了 class 组件的实例。
函数组件没有实例，所以不能接受 ref。
但是函数组件为了区分这种行为，特意会不处理 ref。对于函数组件来说，ref 必须通过 props 来获取，但是 key ref 都是保留的，需要特殊处理。
