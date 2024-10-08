---
sidebar_position: 1
---

# Where to keep the SDK?

Some monitoring SDK keep their instances on window, which is natural. Bcs they work by capture the errors. (window.onerror & window.addEventListener).

```tsx
// Types
declare global {
	interface Window {
		monitor: SDK;
	}
}

window.monitor = new SDK()

```

