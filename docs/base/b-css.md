# 基础

## 1、盒模型

+ 标准盒

    ```javascript
    box-sizing: content-box
    ```
    元素宽度 = content
+ IE盒

    ```javascript
    box-sizing: border-box
    ```
    元素宽度 = content + padding + boder

## 2、BFC （块级格式化上下文）

> 几个常见的触发条件

1. `float` 不为 none
2. `display` 为 inline-block、table-caption 或 table-cell
3. `overflow` 不为visible
4. `position` 不为 static 、 relative

总结： BFC 可以视为一种布局的手段，它的目的在于创建出一块独立区域，同时让内部元素更好地在这片区域中布局。

## 3、回流和重绘

引起元素**大小**、**位置**变化的情况，均会触发**回流**（Reflow）。反之，如颜色样式、背景色等改变时，则会触发**重绘**（Repaint）。

> 哪些情况会发生回流

1. 页面首次渲染
2. 浏览器窗口变化
3. 元素尺寸、位置变化
4. 添加或删除可见的DOM 节点
5. 元素内容发生变化

总结：回流必将引起重绘，重绘不一定引起回流。且回流的开销更大。

## 4、DOM 事件流及事件委托机制

> DOM 事件流分为三个阶段

1. 捕获阶段
2. 目标阶段
3. 冒泡阶段

**事件委托**正是利用事件流的冒泡特性，将本来要绑定到多个元素的事件函数，委托到了其祖先元素上。

## 5、BOM 和 DOM

BOM （Browser Object Model）浏览器对象模型，属于w3c 标准，是所有浏览器都应该遵循的标准。

DOM （Document Object Model）文档对象模型，是由各个浏览器自己扩展的对象模型，实现标准并不相同。

## 6、Ajax

在不重新加载整个网页的情况下对网页部分内容进行异步动态更新。

基于`XMLHttpRequest` 对象实现。

## 7、浏览器输入URL 回车后经过哪些过程

1. DNS 域名解析
2. TCP连接： 三次握手
3. 发送HTTP 请求
4. 服务器处理请求并返回HTTP 报文
5. 浏览器解析渲染页面
6. 断开连接： 四次挥手

## 8、浏览器跨域

1. JSONP （利用script标签的特性，前端需要定义一个回调函数接收数据，但只能发送get 请求）
2. CORS （服务器方面）
3. PostMessage、WebSocket
4. Nginx 反向代理
5. img、script、link等标签特性

## 9、浏览器缓存策略

1. Cookie 

有过期时间，长度限制4kb，且每次都会携带在请求头中

2. SessionStorage

无过期时间，容量大，但窗口关闭自动删除

3. LocalStorage

无过期时间，容量大

4. IndexedDb

存储更大量的结构化数据

## 10、Get 请求和 Post 请求

+ Get 传输大小有限，Post 无大小限制
+ Get 参数直接暴露在URL 上，不能用来传输敏感信息
+ 浏览器会缓存Get 请求，Post 则不会缓存（在该特性下Get 请求可能会出现304 不更新，解决方法：链接加个随机参数）

## 11、JS 数据类型

> 值类型

`number`, `string`, `null`, `undefined`, `boolean`, `bigint`, `symbol`

> 引用类型

`Object`, `Array`, `Function`

## 12、this

`this` 永远指向最后调用它的那个对象。

> `this` 的5 种场景

1. 函数直接调用

`this` 指向 `window`

2. 函数被被人调用

谁调用就指向谁

3. `new` 创建实例

`this` 指向 实例对象

4. `apply`, `call`, `bind`

更改`this` 指向

5. 箭头函数

没有`this`, 也不能被 `new`

## 13、闭包

闭包指能够读取其他函数内部变量的函数。

## 14、作用域链

以当前环境向上一层层查找变量的过程就叫做作用域链。

## 15、原型链

每个函数都有`prototype` 属性，每个实例对象都有一个 `__proto__` 属性，当访问实例对象的属性或方法，会先从自身构造函数中查找，如果找不到就通过 `__proto__` 去原型中查找。

## 16、new 的过程

1. 创建新对象，并将此对象的`__prototype__`指向构造函数的`prototype`
2. 将`this` 指向新创建的对象
3. 返回新对象

## 17、判断数组

1. `Array.is([])`
2. `Object.prototype.toString.call()`

## 18、深拷贝、浅拷贝

```javascript
// 浅拷贝
function clone(obj) {
    const cloneObj = {}
    for(const key in obj) {
        cloneObj[key] = obj[key]
    }
    return cloneeObj
}

// 深拷贝
function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj
    }
    var newObj = new obj.__proto__.constructor;
    for(var key in obj) {
        newObj[key] = deepClone(obj[key])
    }
    return newObj
}

```
## 19、EventLoop

JavaScript 是单线程的，包含了同步任务和异步任务，同步任务放入**调用栈**中执行，异步任务放入**消息队列**中。先执行同步任务，再执行异步任务。

## 20、宏任务和微任务

异步任务队列中会优先执行微任务，当执行完所有微任务后才会执行下一个宏任务。

> 微任务

1. promise.then
2. promise.catch
3. promise.finaly

> 宏任务

1. setTimmeOut
2. setInterval
3. requestAnimaionFrame