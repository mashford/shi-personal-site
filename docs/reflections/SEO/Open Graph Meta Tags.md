---
sidebar_position: 3
---

# Open Graph Meta Tags

[ahrefs.com](https://ahrefs.com/blog/open-graph-meta-tags/)

**Open Graph Meta Tags**（简称 OG Tags 或 Open Graph 标签）是一组特殊的 **HTML meta 标签**，用于控制当你的网页链接被分享到社交媒体（如 Facebook、LinkedIn、X/Twitter、WhatsApp、Discord、Slack 等）时，显示的**预览卡片**（rich preview）样子。

简单说：没有 OG Tags 时，分享链接通常只显示一个丑陋的纯文本 + 默认截图；加了 OG Tags 后，就能自定义漂亮的标题、描述、缩略图，甚至视频预览，让分享内容更吸引眼球、点击率更高。

### 谁创建的？官方来源

- 由 **Facebook**（现在 Meta）在 2010 年推出，称为 **Open Graph protocol**（开放图谱协议）。
- 官网：https://ogp.me/（至今仍是标准文档）。
- 现在已成为**事实标准**，几乎所有主流社交平台都支持（即使是 X/Twitter 也 fallback 到 OG Tags，如果没有专属 Twitter Card）。

### 它长什么样？（最核心的 4 个必填标签）

这些标签必须放在 HTML 的 `<head>` 部分：

```html
<meta property="og:title" content="你的页面标题 - 吸引点击的那种" />
<meta
  property="og:description"
  content="简短描述，1-2 句，控制在 150-200 字符以内，激发好奇心"
/>
<meta property="og:image" content="https://your-site.com/images/og-image.jpg" />
<!-- 推荐尺寸 1200×630 -->
<meta property="og:url" content="https://your-site.com/page-url" />
<!-- 页面的规范 URL -->
```

其他常用但非必须的：

- `<meta property="og:type" content="website" />` 或 `article`、`product` 等（告诉平台这是什么类型内容）
- `<meta property="og:site_name" content="你的网站名称" />`
- `<meta property="og:locale" content="zh_CN" />`（语言地区，中文站点常用 zh_CN）
- `<meta property="og:image:width" content="1200" />` 和 `og:image:height`（推荐指定，避免平台裁剪变形）

### 实际效果对比（为什么重要）

**没加 OG Tags** 时分享：

- 标题：自动取 `<title>` 或页面第一行文字
- 描述：随机抓取一段文字
- 图片：可能取 logo、第一张图、或根本没有

**加了 OG Tags** 后：

- 标题、描述、图片完全自定义
- 看起来专业、统一、吸引人
- 点击率通常提升 20-100%（视内容而定）
- 品牌形象一致（所有分享都带统一风格的封面图）

### 2026 年最新注意点（至今有效）

- **图片尺寸**：主流推荐 1200×630 px（1.91:1 比例），文件 < 1MB，支持 WebP/JPG/PNG。
- **缓存问题**：Facebook 等平台会缓存预览，改了 OG Tags 后要用官方调试工具刷新缓存：
  - Facebook：https://developers.facebook.com/tools/debug/
  - LinkedIn：Post Inspector
  - X：Card Validator（如果用 Twitter Card，也支持 OG fallback）
- **多语言站点**：不同语言版本要用不同的 og:locale 和对应语言的标题/描述/图片。
- **SEO 间接影响**：OG Tags 本身不直接影响 Google 排名，但能提升社交分享 → 带来更多外部流量 → 间接提升用户信号和品牌曝光。

### 小结：一句话记住

**Open Graph Meta Tags 就是“社交媒体分享时的名片”**——你不定义，它就乱抓；你定义好了，就能让每一次分享都变成高质量的广告位。

如果你是 WordPress 站点，用 Yoast SEO 或 Rank Math 插件就能一键生成/编辑 OG Tags；如果是 Next.js/React 等，手动加到 `<head>` 里也简单。

有具体页面想优化 OG Tags，或者想看示例代码？可以贴 URL 或告诉我页面类型，我帮你给出推荐写法！
