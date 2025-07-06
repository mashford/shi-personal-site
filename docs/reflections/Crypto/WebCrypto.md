# Web Crypto API

## AES

```js
const crypto = window.crypto || window.msCrypto;

const key = await crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"]
);

console.log(key);

const encrypted = await crypto.subtle.encrypt(
  {
    name: "AES-GCM",
    iv: new Uint8Array(12),
  },
  key,
  new TextEncoder().encode("Hello World")
);

const decrypted = await crypto.subtle.decrypt(
  {
    name: "AES-GCM",
    iv: new Uint8Array(12),
  },
  key,
  encrypted
);

console.log(new TextDecoder().decode(decrypted));
```

## ECDSA

```js
const crypto = window.crypto || window.msCrypto;

const key = await crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-256",
  },
  true,
  ["sign", "verify"]
);

console.log(key);

const signature = await crypto.subtle.sign(
  {
    name: "ECDSA",
    namedCurve: "P-256",
  },
  key,
  new TextEncoder().encode("Hello World")
);

console.log(signature);

const verified = await crypto.subtle.verify(
  {
    name: "ECDSA",
    namedCurve: "P-256",
  },
  key,
  signature,
  new TextEncoder().encode("Hello World")
);

console.log(verified);
```

Here comes the interesting part, P-256 or secp256r1 has been confirmed to be unsafe. So never use it.

If you do need some ECDSA, use js libs like `noble/curves`

```js
import { secp256k1 } from "noble/curves";

const key = secp256k1.generateKeyPair();

console.log(key);

const signature = secp256k1.sign(
  new TextEncoder().encode("Hello World"),
  key.privateKey
);

console.log(signature);

const verified = secp256k1.verify(
  signature,
  new TextEncoder().encode("Hello World"),
  key.publicKey
);

console.log(verified);
```
