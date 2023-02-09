# 在浏览器中存储数据

## 1、Cookie

`Cookie` 是直接存储在浏览器中的一小串数据。它们是`HTTP` 协议的一部分。

`Cookie` 通常是由服务器使用响应`Set-Cookie` 设置的。之后浏览器将它们自动添加到每一个对相同域的请求中。

常见的使用方法是身份验证：

1. 登录后，服务器在响应中使用`Set-Cookie` 来设置唯一的“会话标识符”（`session identifier`）--`cookie`。
2. 下次当请求被发送到同一个域时，浏览器会在请求头中携带`Cookie`。
3. 所以服务器知道是谁发起了请求。

`cookie` 有大小限制

### `document.cookie`

获取所有`cookie`:

```javascript
console.log(document.cookie); // cookie1=value1;cookie2=value2;...
```

写入`cookie`:

```javascript
document.cookie = "user=Alan"; // 只会更新名称为 user 的 cookie
```

### `path`

`url` 路径前缀必须是绝对路径。

它使得该路径下的页面可以访问该`cookie`。

默认为当前路径。

:::tip
如果`cookie` 带有`path=/admin`，那么该`cookie` 在`/admin` 和`/admin/something` 下都是可见的，但在`/home` 下不可见。

通常，我们将`path` 设置为根目录`path=/`。
:::

### `domain`

`domain` 控制了可访问`cookie` 的域。

默认情况下，`cookie` 只有在设置的域下才能被访问到，子域也不能访问。

```javascript
// 任何子域 *.site.com 都可以访问cookie
document.cookie = "user=Alan;domain=site.com";

// 在 forum.site.com
console.log(document.cookie); // user=Alan
```

### `expires` 、`max-age`

默认情况下，如果`cookie` 没有设置这两个参数中的任何一个，那么关闭浏览器后，`cookie` 就会消失。

- `expires`

`cookie` 的过期日期必须采用`GMT` 时区的格式，我们可以用`date.toUTCString()` 来获取它。

```javascript
// 当前时间 + 1 天
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=Alan;expires=" + date;
```

- `max-age`

它是`expires` 的替代选项，指明了`cookie` 的过期时间距离当前时间的秒数。

```javascript
// cookie 会在1h 后失效
document.cookie = "user=Alan;max-age=3600";
```

### `secure`

`cookie` 是基于域的，不区分协议。所以在`https` 和`http` 上都能传输。

```javascript
// 只能在HTTPS 下可访问
document.cookie = "user=Alan;secure";
```

### `samesite`

它用来防止`XSRF`（跨网站请求伪造）攻击。

## 2、localStorage、sessionStorage

`Web` 存储对象`localStorage` 和`sessionStorage` 允许我们在浏览器上保存键值对。

- 与`cookie` 不同，`Web` 存储对象不会随着每个请求被发送到服务器。

- 容量比`cookie` 大。

- 服务器无法操作`Web` 存储对象。

- 存储绑定到源（域、协议、端口）。三者有一个不同，就无法共享数据。

两个存储对象都有相同的方法和属性：

- `setItem(key, value)` --- 存储键值对
- `getItem(key)` --- 根据键获取值
- `removeItem(key)` --- 删除键及其对应的值
- `clear()` --- 删除所有的数据
- `key(index)` --- 获取该索引下的键名
- `length` --- 存储的内容的长度

:::tip
存储对象是不可迭代的。
:::

### `localStorage`

- 在同源的所有标签页和窗口之间共享数据。
- 数据不会过期。浏览器重启或电脑关机重启后仍然存在。

### `sessionStorage`

- 数据只存在于当前浏览器标签页。具有相同页面的另一个标签页中将会有不同的存储。
- 同一标签页下的 `iframe` 之间是共享的（假如它们来自相同的源）。
- 数据在页面刷新后仍然保留，但关闭重开浏览器标签页后不会保留。

### `Storage` 事件

- 在`setItem`、`removeItem`、`clear` 方法后触发。

- 该事件会在所有可访问到存储对象的`window` 对象上触发，导致当前数据改变的`window` 对象除外。

- 包含的属性：
  - `key` --- 发生更改的数据的`key`（如果调用的是`.clear()` 方法，则为`null`）
  - `oldValue` --- 旧值（如果是新增数据，则为`null`）
  - `newValue` --- 新值（如果是删除数据，则`null`）
  - `url` --- 发生数据更改的文档的`url`
  - `storageArea` --- 发生数据更改的`localStorage` 或`sessionStorage` 对象
