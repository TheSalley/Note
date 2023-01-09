# 数据类型的转换

## 1、字符串转换

```javascript
// 显式地调用String()
let value = true;
value = String(value);
console.log(typeof value); // string
```

## 2、数字型转换

```javascript
// 使用算术运算符，string 类型的值会自动转换为number 类型
console.log("6" / "2"); // 3

// 显式地调用Number()
let str = "123";
let num = Number(str);
console.log(typeof num); // number
```

`number` 类型转换规则:
|值|变化|
| --- | --- |
|undefined|NaN|
|null|0|
|true 和 false|1、0|
|string|去掉首尾空白字符，如果剩余字符串为空，则转换为 0，否则从剩余字符串中读数字。当读到非数字时返回 NaN|

```javascript
console.log(Number("   123 "));  // 123
console.log(Number("123z"));  // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

## 3、布尔型转换

`0`、空字符串、`null`、`undefined`、`NaN` 都会转变为 `false`。

```javascript
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
```