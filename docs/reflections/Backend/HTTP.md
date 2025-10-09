# HTTP

## status code

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error

您列出的 HTTP 状态码基本正确，但有一些细节需要补充和调整。以下是更完整的说明：

### **1xx Informational (信息性状态码)**

- **102 Processing** (处理中)  
  服务器已收到请求并正在处理，但尚未完成。主要用于 WebDAV 扩展。

- **103 Early Hints** (早期提示)  
  服务器在准备完整响应之前，先发送一些 HTTP 头信息，用于优化页面加载性能（如预加载资源）。

---

### **3xx Redirection (重定向状态码)**

- **301 Moved Permanently** (永久重定向)  
  请求的资源已永久移动到新的 URL。浏览器会缓存此重定向，后续请求会直接跳转到新地址。

- **302 Found** (临时重定向)  
  请求的资源临时从不同的 URL 响应。浏览器不会缓存此重定向，后续请求可能仍访问原 URL。

- **303 See Other** (查看其他位置)  
  通常用于 POST 请求后的重定向，强制客户端使用 GET 方法请求新 URL。

- **304 Not Modified** (未修改)  
  资源未修改，客户端可以使用缓存的版本。与 `If-Modified-Since` 或 `If-None-Match` 请求头配合使用。

- **307 Temporary Redirect** (临时重定向)  
  与 302 类似，但要求客户端**保持相同的 HTTP 方法**（如 POST 请求重定向后仍为 POST）。

- **308 Permanent Redirect** (永久重定向)  
  与 301 类似，但要求客户端**保持相同的 HTTP 方法**（如 POST 请求重定向后仍为 POST）。

---

### **常见问题**

1. **302 vs 307**

   - 302 允许浏览器将 POST 请求重定向为 GET（部分浏览器会这样做）。
   - 307 严格保持原始请求方法。

2. **301 vs 308**

   - 301 不保证重定向后保持相同的方法（浏览器可能将 POST 转为 GET）。
   - 308 强制保持相同的方法。

3. **303 的特殊性**
   - 明确要求客户端使用 GET 方法请求新 URL，常用于表单提交后的重定向。

---

### **使用场景**

- **301/308**：网站永久迁移到新域名或 URL 结构变更。
- **302/307**：临时维护页面、A/B 测试。
- **303**：POST 提交表单后重定向到结果页面。
- **304**：缓存未过期，减少服务器负载。

## method

- GET
- POST
- PUT
- DELETE
- PATCH
- HEAD
- OPTIONS
