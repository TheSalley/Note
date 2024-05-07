# NodeJs

[[toc]]

## 1、NodeJs 简介

+ NodeJs 是一个基于`Chrome V8` 引擎的`JavaScript` 运行环境。
+ NodeJs 使用了**事件驱动**、**非阻塞式I/O** 的模型，所以轻量又高效。
+ NodeJs 是一门动态语言，是运行在服务端的`JavaScript`。

::: tip
nvm 插件管理node 的版本
nrm 插件管理npm 的版本
:::

## 2、NodeJs 模块

+ 原生模块
+ 文件模块
+ 第三方模块
+ 自定义模块

### 自定义模块

+ 创建模块

```javascript
// b.js
function funA() {
    return 'Tom';
}
// 暴露方法 funA
module.exports = funA;
```

+ 加载模块

```javascript
// a.js
var funA = require('./b.js');
funA();
```

:::tip
`module.exports` 用于对外暴露。一个模块中**有且仅有**一个`module.exports` ，如果有多个，那么后面的会覆盖上面的。
:::

### 内置模块
