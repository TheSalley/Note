# Express

## 1、常用中间件

- body-parser：解析 HTTP 请求体

- compression：压缩 HTTP 响应

- cookie-parser：解析 cookie 数据

- cors：处理跨域资源请求

- morgan：HTTP 请求日志记录

## 2、express 简单使用

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello, world");
});
app.post("/", (req, res) => {
  res.send("收到post");
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
```
