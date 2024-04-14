---
sidebar_position: 2
---

# Data Markup

Pls check this [developers.google.com](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

## Some Templates

All templates: [developers.google.com](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

useFull ones are [fact check](https://developers.google.com/search/docs/appearance/structured-data/factcheck)

![fact check](https://developers.google.com/static/search/docs/images/factcheck-example-result.png)

&

[FAQ](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

![faq](https://developers.google.com/static/search/docs/images/faqpage-searchresult.png)

## how to tell spiders not to crawl this page?

```html
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
```

## canonical urls

Some situations are like urls are competing against each other whereas they presents the same file.

```html
<link
  rel="canonical"
  href="https://m.ixigua.com/xigua_hot_spot/detail/7101281806032313356"
/>
```
