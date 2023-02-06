# 对象

[[toc]]

## 1、简介

对象是使用**键值对**来存储一些复杂的实体。

它的键必须是字符串或`symbol`，值可以是任何类型。

创建对象：

```javascript
// 构造函数的语法
let user = new Object();
// 字面量的语法
let user = {};
```

对象属性的增加、读取、删除操作：

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
  [fruit + "_num"]: 5,
};
```

## 3、属性值简写

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name：name 相同
    age: 30,
  };
}
```

## 4、属性名称限制

- 属性名不能是某个保留字
- 非字符串类型和`symbol` 类型的会被自动转换为字符串
- 对象的`__proto__` 属性不能设置一个非对象的值，因为会被忽略掉

## 5、in 操作符, 判断属性是否存在

`JavaScript` 的对象的特性：能够被访问任何属性。即使属性不存在也不会报错！

```javascript
let user = { name: "alan", age: 30 };

console.log("age" in user); // true
console.log("height" in user); // false
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

通过引用来判断两个对象是否相等:

```javascript
let a = {};
let b = a;

console.log(a == b); // true，都引用同一对象
console.log(a === b); // true

console.log({} == {}); // false
```

<hr/>

拷贝对象的操作：

- 递归深拷贝：

```javascript
let user = {
  name: "John",
  age: 30,
  sizes: {
    height: 100,
    width: 50,
  },
};

function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  // 定义一个新的空对象
  let newObj = {};
  for (let key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}
```

- `Object.assign()` 可以将多个对象合并到一个对象中:

```javascript
let user = { name: "alan" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };
// 将permission1 和permission2 中的所有属性都拷贝到user 中
Object.assign(user, permissions1, permissions2);
// user = { name: "alan", canView: true, canEdit: true }
```

::: warning
`Object.assign` 是浅拷贝
:::

## 8、对象方法中的 this

`this` 指向当前对象

```javascript
let user = {
  name: "alan",
  age: 30,
  sayHi() {
    // sayHi(){...} 等同于sayHi: function(){...}
    console.log(this.name);
  },
};

user.sayHi(); // alan
```
## 9、可选链操作符 ?.

可选链操作符`?.` 是一种访问嵌套对象属性的安全方式。即使不存在，也不会报错。

如果可选链`?.` 前面的值是`undefined` 或`null`，它会停止运算并返回`undefined`。

`value?.prop`:
+ 若`value` 存在，则表达式的结果与`value.prop` 相同
+ 否则(当`value` 为`undefined` /`null`)，则返回`undefined`

变体：`obj.method?()`、`obj?.[prop]`