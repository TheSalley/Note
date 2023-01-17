# 对象

[[toc]]

## 1、简介

对象是用来存储**键值对**和更复杂的实体。
它的键必须是字符串或`symbol`。
值可以是任何类型。

创建对象：

```javascript
// 构造函数的语法
let user = new Object();
// 字面量的语法
let user = {};
```

对象的增加、读取、删除操作：

```javascript
let user = {};

// 增加
user["name"] = "alan";
user.age = 20;
// 读取
user["age"];
user.name;
// 删除
delete user["age"];
delete user.name;
```

## 2、计算属性

当创建一个对象时，我们可以在对象字面量中使用方括号。这就叫做**计算属性**。

```javascript
let fruit = "apple";

let bag = {
  [fruit]: 5,
};
```

## 3、属性值简写

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name：name 相同
    age, // 与age: age 相同
  };
}
```

## 4、属性名称限制

- 属性名不能是某个保留字
- 非字符串和`symbol`类型的会被自动转换为字符串
- 对象的`__proto__` 属性不能设置一个非对象的值，因为会被忽略掉

## 5、属性存在性测试，in 操作符

`JavaScript` 的对象的特性：能够被访问任何属性。即使属性不存在也不会报错！

```javascript
let user = { name: "alan", age: 30 };

console.log("age" in user); // true
```

## 5、for...in 循环

```javascript
let user = {
  name: "alan",
  age: 30,
  isAdmin: true,
};
for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values
  console.log(user[key]); // alan, 30, true
}
```

## 6、对象的顺序

有特别的顺序：整数属性会被排序，其他属性按创建的顺序显示。

::: tip
整数属性
:::

整数属性指的是一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串。

所以，"49" 是一个整数属性名，因为我们把它转换为整数，再转换回来，它还是一样的。但是"+49" 和"1.2" 就不行了。

## 7、对象的引用和复制

对象和原始类型的根本区别之一是：

对象是通过**引用**（在内存中的地址）存储和复制的，而原始类型总是作为一个整体复制。

> 复制 `Object.assign`

```javascript
let user = { name: "alan" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };
// 将permission1 和permission2 中的所有属性都拷贝到user 中
Object.assign(user, permissions1, permissions2);
// user = { name: "John", canView: true, canEdit: true }
```
::: warning
 `Object.assign` 是浅拷贝
:::