# 面试

1. 前端基础知识
2. 知识深度
3. 知识广度
4. 数据结构与算法
5. 分析和解决问题
6. 编写高质量代码
7. 项目设计
8. 软技能


`for...of` `for await...of`
`cookie` `session` `token` `JWT`
`Vue`的优化 `React`的优化

## 1、知识点概要

`HTML` &`CSS`：

- 对`Web` 标准的理解(结构、表现、行为)
- 浏览器内核、渲染原理、依赖管理、兼容性
- `CSS` 语法、层次关系、常用属性、布局、选择器、权重、盒模型、`CSS` 预处理器、`CSS3` 、`BFC` 、`CSS Modules` 、`Document Flow`、`Flexbox`

`HTML5`:

- 离线 & 存储
- `History` 、多媒体、`WebGL\SVG\Canvas`

`JavaScript`:

- 数据类型、运算、对象、`Function`、继承、闭包、作用域、事件、`Prototype`、`RegExp`、`JSON`、`Ajax`、`DOM`、`BOM`
- 内存泄漏、跨域、异步请求、模板引擎、模块化、`Flux`、同构、算法、`ECMAScript6`、`NodeJs`、`HTTP`

其他：
+ 主流框架(`React`、`Vue`)、`Hybrid App` \ `React Native` \ `Flutter`、`TypeScript`
+ `RESTFul`、`Web` 安全、前端工程化、性能优化

## 1、图片懒加载

懒加载：顾名思义，即在当前网页中，滑动页面到能看到图片的时候再加载图片。

> 问题拆分：

- 如何判断图片出现在当前窗口处
- 如何加载图片

> 解决方案

1. 位置计算 + 滚动事件 + dataset

使用 clientTop、offsetTop、clientHeight、scrollTop

window.scroll

先用 data-src 存放真实地址，需要记载时付给图片的 src

2. getBoundingClientRect + scroll + throttle + dataset

3. IntersectionObserver

能够监听元素是否到了当前视口的 api

## 2、浏览器实现剪切板

clipboard-copy

## 3、浏览器存储



::: details `localStorage` 和 `sessionStorage` 得区别，以及跨页面之后是否能共享？
`localStorage` 和 `sessionStorage` 都是`Web Storage API` 提供的两种客户端存储数据的方式。

区别：

1. 数据生命周期：

    + `localStorage` 数据永久存储，除非用户清除浏览器缓存或通过`JavaScript` 代码清除；
    + `sessionStorage` 数据仅会在当前会话期间存储，关闭浏览器或者当前标签页时，数据会被清除；
2. 作用域：

    + `localStorage` 数据在当前域名下的所有页面中都可以共享；
    + `sessionStorage` 数据仅在当前页面下共享；
3. 大小限制：

    + `localStorage` 存储容量通常比`sessionStorage` 要大，一般为 5M；
:::