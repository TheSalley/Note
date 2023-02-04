# 函数进阶

## 10、构造函数和new 操作符

构造函数：主要用来实现可重用的对象

+ 以大写字母开头
+ 只能用`new` 操作符执行

当一个函数被`new` 操作符执行时，会执行以下步骤：

1. 创建一个新的空对象，并分配给`this`
2. 函数体执行。通常它会修改`this`，并为其添加新的属性
3. 返回`this` 的值

```javascript
function User(name) {
    // this = {}; (隐式创建)

    // 为this添加属性
    this.name = name;

    // return this; (隐式返回)
}
```