# 网络请求

## 1、`fetch()`

基本语法：

```javascript
let promise = fetch(url, [options])
```

获取响应通常要经历两个阶段：

+ 第一阶段

    当服务器发送了响应头(`response header`), `fetch` 返回的`promise` 就使用内建的`Response class` 对象来对响应头进行解析。

    在这个阶段里，我们可以检查`HTTP` 的状态码来确定本次请求是否成功。此时，还没有响应体(`response body`)

    + `response.status` : `HTTP` 状态码
    + `response.ok` : `HTTP` 状态码为200 ~ 299, 则为`true`
    + `response.headers` : 响应头对象


    如果`fetch` 无法建立`HTTP` 请求，如网络问题，亦或是请求的地址不存在。那么`promise` 就会`reject`。

+ 第二阶段

    为了获取`response body`，我们需要使用一个其他的方法调用。
    
    + `response.text()`    
    + `response.json()`
    + `response.formData()` : 以`FormData` 对象的形式返回`response`
    + `response.blob()` : 以`Blob`(具有类型的二进制数据) 形式返回`response`
    + `response.arrayBuffer()` : 以`ArrayBuffer`(低级别的二进制数据) 形式返回`response`

    `response.body` 是`ReadableStream` 对象，它允许你逐块读取`body`

### `Response header` 

`Response header` 位于`response.headers` 中的一个类似`Map` 的`header` 对象。

```javascript
let response = await fetch("...");

// 获取一个 header
console.log(response.headers.get("Content-Type")); // application/json; charset=utf-8

// 迭代所有header
for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
}
```

### `Request header`

```javascript
// 设置请求头
let response = fetch(url, {
    headers: {
        Authentication: "secret"
    }
})
```

但是一些仅有浏览器控制的`header` 无法设置，如`Cookie`、`Referer`、`Host` 等。

### `POST` 请求

```javascript
let user = {
    name: "alan",
    surname: "xxx"
};

let response = await fetch("...", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
});
```

## 2、`FormData`

`FormData` 是表示`HTML` 表单数据的对象。

它会自动捕获`form` 元素字段。

`FormData` 的特殊之处在于网络方法(`network methods`)，例如`fetch` 接受一个`FormData` 对象作为`body` 。它会被编码并发送出去，并带有`Content-Type: multipart/form-data`。

构造函数：

```javascript
let formData = new FormData([form]);
```