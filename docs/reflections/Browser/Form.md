在 Web 开发中，除了 `FormData` 外，还有许多其他用于处理表单数据和文件上传的预定义工具函数和 API。以下是一些常用的工具和 API：

### 1. **URLSearchParams**

用于处理 URL 查询字符串，可以方便地构建和解析查询参数。

```typescript
// 创建 URLSearchParams 实例
const params = new URLSearchParams();

// 添加参数
params.append("name", "张三");
params.append("age", "25");

// 获取查询字符串
console.log(params.toString()); // 输出: name=%E5%BC%A0%E4%B8%89&age=25

// 解析查询字符串
const searchParams = new URLSearchParams("name=张三&age=25");
console.log(searchParams.get("name")); // 输出: 张三
```

### 2. **Blob 和 File**

- **Blob**：表示不可变的、原始数据的类文件对象。
- **File**：继承自 `Blob`，用于表示文件对象。

```typescript
// 创建 Blob
const blob = new Blob(["Hello, World!"], { type: "text/plain" });

// 创建 File 对象
const file = new File(["Hello, File!"], "example.txt", { type: "text/plain" });
```

### 3. **FileReader**

用于异步读取文件内容。

```typescript
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];

const reader = new FileReader();
reader.onload = (event) => {
  console.log("文件内容:", event.target.result);
};
reader.readAsText(file); // 读取为文本
// 其他方法: readAsArrayBuffer, readAsDataURL, readAsBinaryString
```

### 4. **Streams API**

用于处理流式数据，适合处理大文件或实时数据。

```typescript
// 从文件创建可读流
const fileStream = file.stream();
const reader = fileStream.getReader();

const readChunk = async () => {
  const { done, value } = await reader.read();
  if (!done) {
    console.log("读取到分片:", value);
    readChunk(); // 继续读取下一块
  }
};
readChunk();
```

### 5. **fetch API**

用于发起网络请求，支持流式上传和下载。

```typescript
// 上传文件
const formData = new FormData();
formData.append("file", file);

fetch("/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("上传成功:", data))
  .catch((error) => console.error("上传失败:", error));
```

### 7. **File System Access API**

允许 Web 应用与用户本地文件系统交互。

```typescript
// 请求文件句柄
const fileHandle = await window.showOpenFilePicker();
const file = await fileHandle[0].getFile();
console.log("文件内容:", await file.text());
```

### 8. **Compression Streams API**

用于压缩和解压缩数据流。

```typescript
// 压缩数据
const stream = new Blob(["Hello, World!"]).stream();
const compressedStream = stream.pipeThrough(new CompressionStream("gzip"));

// 解压缩数据
const decompressedStream = compressedStream.pipeThrough(
  new DecompressionStream("gzip")
);
```

## FormData

`FormData` 是 Web API 提供的一个接口，主要用于简化表单数据的收集和发送，特别适合处理文件上传和表单提交。以下是它的核心用途和用法：

---

## **FormData 解决了什么问题？**

1. **简化表单数据收集**：自动收集表单中的所有字段，无需手动拼接键值对。
2. **支持文件上传**：可以轻松处理文件（如 `<input type="file">`）和普通表单字段的混合提交。
3. **自动设置 `Content-Type`**：使用 `multipart/form-data` 格式，适合传输二进制数据（如文件）。
4. **兼容性好**：支持现代浏览器，并且可以通过 `fetch`、`XMLHttpRequest` 或 `axios` 发送。

---

## **基本用法**

### **1. 创建 FormData 实例**

```typescript
const formData = new FormData();
```

### **2. 添加数据**

#### **（1）添加普通字段**

```typescript
formData.append("username", "张三");
formData.append("age", "25");
formData.append("isStudent", "true");
```

#### **（2）添加文件**

```typescript
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];
formData.append("avatar", file); // "avatar" 是后端接收的字段名
```

#### **（3）添加 Blob 数据**

```typescript
const blob = new Blob(["Hello, World!"], { type: "text/plain" });
formData.append("document", blob, "example.txt"); // 第三个参数是文件名
```

### **3. 获取和修改数据**

```typescript
// 获取字段值
const username = formData.get("username"); // "张三"

// 获取所有字段值
for (const [key, value] of formData.entries()) {
  console.log(key, value);
}

// 检查字段是否存在
const hasAge = formData.has("age"); // true

// 删除字段
formData.delete("age");
```

### **4. 提交表单数据**

#### **（1）使用 `fetch` 提交**

```typescript
fetch("/api/upload", {
  method: "POST",
  body: formData, // 自动设置 Content-Type: multipart/form-data
})
  .then((response) => response.json())
  .then((data) => console.log("上传成功", data))
  .catch((error) => console.error("上传失败", error));
```

#### **（2）使用 `XMLHttpRequest` 提交**

```typescript
const xhr = new XMLHttpRequest();
xhr.open("POST", "/api/upload", true);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log("上传成功", JSON.parse(xhr.responseText));
  } else {
    console.error("上传失败", xhr.statusText);
  }
};
xhr.send(formData);
```

---

## **实际应用场景**

### **1. 文件上传**

```html
<input type="file" id="fileInput" />
<button onclick="uploadFile()">上传文件</button>

<script>
  async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", "这是一个示例文件");

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("上传成功", result);
    } catch (error) {
      console.error("上传失败", error);
    }
  }
</script>
```

### **2. 提交表单数据（含文件）**

```html
<form id="myForm">
  <input type="text" name="username" placeholder="用户名" required />
  <input type="email" name="email" placeholder="邮箱" required />
  <input type="file" name="avatar" accept="image/*" required />
  <button type="submit">提交</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // 自动收集表单数据

    try {
      const response = await fetch("/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("提交成功", result);
    } catch (error) {
      console.error("提交失败", error);
    }
  });
</script>
```

---

## **注意事项**

1. **`Content-Type` 自动设置**：使用 `FormData` 时，浏览器会自动设置 `Content-Type: multipart/form-data`，**不要手动设置**，否则可能导致请求失败。
2. **文件大小限制**：服务器可能需要配置 `body-parser` 或 `multer`（Node.js）来处理大文件上传。
3. **兼容性**：现代浏览器都支持 `FormData`，但在较旧的浏览器（如 IE 10 以下）可能需要 polyfill。

---

## **总结**

- **适用场景**：文件上传、表单提交、混合数据（文件 + 文本）提交。
- **优势**：自动处理 `multipart/form-data`，支持文件上传，使用简单。
- **替代方案**：
  - 纯文本数据：`URLSearchParams` 或 `JSON.stringify`。
  - 二进制数据流：`fetch` + `Blob` 或 `Streams API`。

如果需要上传文件或提交表单数据，`FormData` 是最佳选择！ 🚀
