# Writing a Promise

```js
class MyPromise {
  #status: "pending" | "fulfilled" | "rejected" = "pending";
  #value: any = void 0;

  constructor(executor) {
    try {
      executor(this.#resolve, this.#reject);
    } catch (e: unknown) {
      this.#reject(e);
    }
  }

  #resolve = (v) => {
    if (this.#status !== "pending") return;
    this.#status = "fulfilled";
    this.#value = v;
    this.#run();
  };

  #reject = (v) => {
    if (this.#status !== "pending") return;
    this.#status = "rejected";
    this.#value = v;
    this.#run();
  };

  #handlers = [] as any[];

  #runOnce = (callback, resolve, reject) => {
    if (typeof callback === "function") {
      if (this.#status === "fulfilled") {
        resolve(this.#value);
      } else {
        reject(this.#value);
      }
    } else {
      try {
        const data = callback(this.#value);
        resolve(data);
      } catch (e) {
        reject(e);
      }
    }
  };

  #run = () => {
    const status = this.#status;

    if (status === "pending") return;
    for (let { onResolve, onReject, resolve, reject } of this.#handlers) {
      if (status === "fulfilled") {
        this.#runOnce(onResolve, resolve, reject);
      } else if (status === "rejected") {
        this.#runOnce(onReject, resolve, reject);
      }
    }
    this.#handlers = [];
  };

  then(onResolve, onReject?) {
    const handlers = this.#handlers;
    const run = this.#run;
    return new MyPromise((resolve, reject) => {
      queueMicrotask(() => {
        handlers.push({
          onReject,
          onResolve,
          resolve,
          reject,
        });

        run();
      });
    });
  }
}
```
