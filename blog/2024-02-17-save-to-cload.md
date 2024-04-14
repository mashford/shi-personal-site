---
slug: save-to-cload
title: Save to Cloud
authors: [Shi]
tags: [CloudFlare, frontend]
---

# Save to Cloud

I really enjoy deploy things on cloudflare, it's fast and free.

## worker and crypto

### Node.js capabilities

[reference](https://developers.cloudflare.com/workers/runtime-apis/nodejs/crypto/)

what a shame 'Sign' and 'Verify' are not supported. So I have to use WebCrypto API.
