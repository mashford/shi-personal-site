# MIME Types

Here are some commonly used MIME types in frontend development:

### Text

- `text/html` - HTML documents
- `text/plain` - Plain text
- `text/css` - CSS stylesheets
- `text/csv` - CSV files
- `text/javascript` - JavaScript (obsolete, use `application/javascript` instead)

### Application

- `application/javascript` - JavaScript
- `application/json` - JSON data
- `application/xml` - XML data
- `application/pdf` - PDF documents
- `application/zip` - ZIP archives
- `application/x-www-form-urlencoded` - Form data
- `application/octet-stream` - Binary data
- `application/wasm` - WebAssembly

### Image

- `image/jpeg` - JPEG images
- `image/png` - PNG images
- `image/gif` - GIF images
- `image/svg+xml` - SVG vector images
- `image/webp` - WebP images
- `image/x-icon` - ICO format

### Font

- `font/woff` - Web Open Font Format (WOFF)
- `font/woff2` - Web Open Font Format 2 (WOFF2)
- `font/ttf` - TrueType Font
- `font/otf` - OpenType Font

### Audio/Video

- `audio/mpeg` - MP3 audio
- `audio/ogg` - OGG audio
- `audio/wav` - WAV audio
- `video/mp4` - MP4 video
- `video/webm` - WebM video
- `video/ogg` - OGG video

### Multipart

- `multipart/form-data` - Form data with file uploads
- `multipart/byteranges` - Partial content

These MIME types are essential for proper content handling in web applications.

## 特别注意

### `multipart/form-data`

multipart/form-data 顾名思义，的设计初衷就是为了处理表单数据，特别是当表单中需要上传文件或包含不同类型的数据时。使用一个唯一的边界字符串（boundary）来分隔不同的部分。边界字符串在请求头中定义，例如：Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryXxYyZz。

为什么选择 multipart/form-data？

- 灵活性：可以同时传输文本字段和文件。
- 效率：对于二进制数据，避免了不必要的编码/解码开销。
- 兼容性：被所有现代浏览器和服务器广泛支持。

`multipart/form-data` 主要用于以下场景：

1. **文件上传**：当需要上传文件时，必须使用 `multipart/form-data` 编码类型。这是最常见的用途，比如用户上传头像、文档、图片等。

2. **表单包含文件输入**：当 HTML 表单中包含 `<input type="file">` 元素时，表单的 `enctype` 属性必须设置为 `multipart/form-data`。

3. **二进制数据提交**：当需要提交二进制数据（如图片、视频、PDF 等）时，使用 `multipart/form-data` 可以确保数据在传输过程中不会被错误地编码或损坏。

4. **混合数据提交**：当需要同时提交文本字段和文件时，`multipart/form-data` 可以有效地处理这种混合数据。

5. **大文件上传**：对于大文件上传，`multipart/form-data` 支持分块传输，可以更高效地处理大文件。

示例

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="text" name="description" placeholder="文件描述" />
  <input type="file" name="file" id="file" />
  <button type="submit">上传</button>
</form>
```

与 `application/x-www-form-urlencoded` 的区别

- `application/x-www-form-urlencoded`：适用于简单的键值对数据，所有字符都会进行 URL 编码，不适合传输二进制数据。
- `multipart/form-data`：适用于文件上传和混合数据，不会对二进制数据进行编码，适合传输大文件和二进制数据。

前端在进行分片上传的时候会使用 `multipart/form-data`。
