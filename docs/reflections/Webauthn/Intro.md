# About Webauthn

Webauthn is a new standard for secure authentication on the web. It allows users to authenticate to web applications using public key cryptography instead of a password. This is more secure and convenient than traditional password-based authentication.

`SPKAC`: Signed Public Key and Challenge

`U2F`: Universal 2nd Factor

`FIDO`: Fast Identity Online, an alliance of companies that developed the Webauthn standard. Their goal is to reduce the world's reliance on passwords.

Personally, I am happy Muggles are finally getting a taste of the magic of public key cryptography. It's about time. I am not going to exam the details of Webauthn, but I will show you a door [webauthn.guide](https://webauthn.guide/).

基本过程是这样的：

1. 注册流程（Registration）

- 用户选择注册新账户
- 服务器发送挑战（challenge）和用户信息到浏览器
- 浏览器提示用户选择认证器（如安全密钥、指纹、面容 ID 等）
- 认证器创建新的密钥对，并将公钥和凭证 ID 发送给服务器
- 服务器存储公钥和凭证 ID，与用户账户关联

2. 登录流程（Authentication）:

- 用户选择使用 WebAuthn 登录
- 服务器发送挑战（challenge）和之前存储的凭证 ID
- 浏览器提示用户使用之前注册的认证器进行验证
- 认证器使用私钥对挑战进行签名
- 浏览器将签名发送回服务器
- 服务器使用存储的公钥验证签名，确认用户身份

这套系统的傻逼之处在于，每个后端服务都要做 KYC，都要注册。
而且因为不是每个客户端都支持 Webauthn，所以还必须保留密码登录。
最后，最最最傻逼的是，WebAuthn 的信息保存在手机 keychain 里，用户拿不到自己的私钥。
