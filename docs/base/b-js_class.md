# 类

## 1、`class`

基本语法：

```javascript
class MyClass {
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
}
```

然后使用`new MyClass()` 来创建实例对象。

`new` 会自动调用`constructor()` 方法，因此我们可以在`constructor()` 中初始化对象。

例子:

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name)''
    }
}

let user = new User("Jack");
user.sayHi();
```

当`new User("jack")` 被调用时，

1. 一个新对象被创建。

2. `constructor` 使用给定的参数运行，并将其赋值给`this.name`。

> 什么是`class`?

+ 类是一种函数

```javascript
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

alert(typeof User); // function
```

`class User { ... }` 实际上做了如下的事：

1. 创建`User` 函数，该函数成为类声明的结果。该函数的代码来自于`constructor`（如果不写`constructor` 方法，那么它就被假定为空）。

2. 存储类中的方法。