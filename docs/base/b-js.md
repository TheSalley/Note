# JavaScript

1. [发展史和简单介绍](./b-js_history.md)
2. [数据类型](./b-js_dataType.md)
3. [数据类型的转换](./b-js_dataType_transition.md)
4. [类](./b-js_class.md)


## 2、检测数据类型的方法

![检测数据类型的方式]()

- typeof

```javascript
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof []); // object
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

- instanceof

机制是判断在其**原型链**中能否找到该类型的原型。

```javascript
console.log(2 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log("str" instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

- constructor

```javascript
console.log((2).constructor === Number); // true
console.log(true.constructor === Boolean); // true
console.log("str".constructor === String); // true
console.log([].constructor === Array); // true
console.log(function () {}.constructor === Function); // true
console.log({}.constructor === Object); // true
```

- Object.prototype.toString.call()

> 为什么`obj.toString()` 和`Object.prototype.toString.call(obj)` 的结果不一样？

因为`toString` 是`Object` 的原型方法，而`Array`、`Function` 等类型作为`Object` 的实例，都重写了`toString` 方法。（`Function` 类型返回内容为函数体的字符串，`Array` 类型返回元素组成的字符串）

## 3、判断数组的方式有哪些？

1. Object.prototype.toString.call()

```javascript
Object.prototype.toString.call(obj).slice(8, -1) === "Array";
```

2. 原型链

```javascript
obj.__proto__ === Array.prototype;
```

3. ES6 的`Array.isArray()`

```javascript
Array.isArray(obj);
```

4. instanceof

```javascript
obj instanceof Array;
```

5. Array.prototype.isPrototypeOf

```javascript
Array.prototype.isPrototypeOf(obj);
```

## 4、null 和 undefined 的区别？

首先，`Null` 和`Undefined` 都是基本数据类型，它们的值是它们本身。

`undefined` 代表的含义是**未定义**，`null` 代表的含义是**空对象**。一般变量只声明但未赋值时，系统会自动分配此变量一个`undefined`值，而`null` 主要用于赋值给一个返回值是对象的变量，用于初始化。

## 6、instanceof 操作符的原理及实现

```javascript
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto);
  }
}
```

## 7、Object.assign 和 扩展运算符是深拷贝还是浅拷贝？

- 扩展运算符

```javascript
let outObj = {
  inObj: { a: 1, b: 2 },
};

let newObj = { ...outObj };
newObj.inObj.a = 2;

console.log(outObj); // { inObj: { a: 2, b: 2 } }
```

- Object.assign()

```javascript
let outObj = {
  inObj: { a: 1, b: 2 },
};

let newObj = Object.assign({}, outObj);
newObj.inObj.a = 2;

console.log(outObj); // { inObj: { a: 2, b: 2 } }
```

可以看到，两者都是**浅拷贝**。
