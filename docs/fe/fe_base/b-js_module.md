# 模块

[[toc]]

## 1、简介

随着项目越写越大，我们需要将其拆分为多个文件，即所谓的模块化。

一个模块就是一个文件。

模块可以互相加载。使用`export` 和`import` 来做到导入导出。

例如：

`sayHi.js` 文件导出了一个函数：

```javascript
// 📂 sayHi.js
export function sayHi(user) {
    ...
}
```

另一个文件导入这个函数：

```javascript
// 📂 main.js
import { sayHi } from './sayHi.js';
...
```

::: tip 
在浏览器中使用需要加上`type` 属性:

`<script src="" type="module"></script>`
:::

与常规的脚本相比，模块有什么不同？

+ 模块始终在严格模式下运行
+ 每个模块都有自己的作用域，我们需要使用导入、导出而不依赖全局变量。
+ 模块代码仅在第一次导入时解析，然后传入所有的导入

```javascript
// 📂 alert.js
alert("...")
```

```javascript
// 在不同的文件中导入相同的模块

// 📂 1.js
import `./alert.js`; // ...

// 📂 2.js
import `./alert.js`; // (什么都不显示)
```

+ `import.meta` 对象包含当前模块的信息
+ 模块脚本总是被**延迟**的，与`defer` 特性相同

## 2、导出和导入

+ 在声明之前导出

```javascript
export let books = ['HTML', 'CSS', 'JavaScript','NodeJs', 'Vue', 'React', 'Flutter'];

export class User {
    constructor(name) {
        this.name = name;
    }
}
```
+ 导出与声明分开写

```javascript
function sayHi() {
    ...
}

let name = 'zs';

export {
    sayHi,
    name
}
```
+ import *

如果有很多要导入的内容，可以用`import * as <obj>` 将所有内容导入为一个对象：

```javascript
import * as say from './say.js';
```
+ import as

使用`as` 让导入具有不同的名字：

```javascript
import { sayHi as hi, sayBye as bye } from './say,js';
```
+ export as

```javascript
...
export {
    sayHi as hi,
    sayBye as bye
}
```
+ export default

模块提供了一个特殊的默认导出`export default` 语法，以使“一个模块只做一件事”的方式看起来更好。

```javascript
// 📂 user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}
```

```javascript
// 📂 main.js
import User from './user.js'; // 不需要花括号
```

## 3、动态导入

+ `import()` 表达式

`import()` 表达式加载模块并返回一个`promise`，该 `promise resolve` 为一个包含其所有导出的模块对象。

```javascript
import(modulePath)
    .then(obj => <module object>)
    .catch(err => ...)
```

在异步函数中，可以用`await import(modulePath)`