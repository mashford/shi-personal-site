# JWT

JWT JSON Web Token 是一个标准。与之相关的标准有 JWE JSON Web Encryption 和 JWS JSON Web Signature。

我们一般讲的 JWT，指的是 JWS。

## JWS

JWS 由三部分组成：

1. Header
2. Payload
3. Signature

## JWE

JWE 由四部分组成：

1. Header
2. Payload
3. Signature
4. Initialization Vector

标准还规定了一些乱七八糟的东西，比如 JWK JSON Web Key

## 为什么需要 JWT

在传统的 web 登录认证中，cookie 只是一个随机的 ID，会随着请求附上。

这不仅带来了 CSRF 的问题，还要求服务器维护一个 ID 到用户信息的映射。这种存在服务器的临时 session 非常不利于扩容。

我们让 HTTP GET 变幂等，本质上是为了扩容。为了扩容，我们必须让后端变得 stateless。方法是每次请求都视为全新的请求，独立验证用户身份。

That's why we need JWT.

## Real World Practice

1. 在哪里保存 JWT？

- localStorage： 会被 JS 访问到，可以用来防 CSRF。

- cookie：HTTPOnly 阻止 XSS，Secure 强制开启 HTTPS，还可以加上 Domain=yourdomain.com，SameSite=Strict。

可以服务器生成一个相同长度的掩码，存在 localStorage 中，然后和 JWT 进行异或运算，同时防止 CSRF 和 XSS。
