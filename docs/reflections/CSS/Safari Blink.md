---
sidebar_position: 4
---

# Safari Blink

This issue is just for safari.

For clickable or touchable items like `<a />` or an item with `onClick` callback, when touched, you can notice there's a quick blink.

It's ok for webpages, but for web applications like a PWA, this blink may be the last thing you want to see. Here the

[stackoverflow.com](https://stackoverflow.com/questions/3516173/ipad-safari-how-to-disable-the-quick-blinking-effect-when-a-link-has-been-hit) link talked about this issue and solution.

```css
* {
  -webkit-backface-visibility: hidden;
  -webkit-tap-highlight-color: transparent;
}
```
