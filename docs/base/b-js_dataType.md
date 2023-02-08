# 数据类型

+ 值类型：`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`、`BigInt`

+ 引用类型：`Object`（包含`Function`、`Array`）

## Number

`Number` 类型代表整数和浮点数。除了常规的数字，还有`Infinity`、`-Infinity`、`NaN`。

在`JavaScript` 中做数学运算是安全的。我们可以除以0，将非数字字符视为数字...

## BigInt

`BigInt` 用来表示任意长度的整数。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

## String

使用单引号、双引号、反引号包裹。

```javascript
'' "" ``
```

## Boolean

`Boolean` 类型仅包含两个值：`true` 和`false`

## null

它只包含`null` 值，代表"无"、"空"、"值未知" 的特殊值。

## undefined

`undefined` 的含义是未被赋值。

如果一个变量已被声明，但未被赋值，那么它的值就是undefined。

## Symbol

`symbol` 值表示唯一的标识符。

创建：

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
```

`symbol` 作为对象的键时不会被自动转换为字符串。

所有`symbol` 都具有`description` 属性。

对象字面量中使用`symbol` 需要用中括号把它括起来。

```javascript
let id = Symbol("id");

let user = {
    name: "alan",
    [id]: 123
}
```
`symbol` 属性不参与`for...in` 循环，但`Object.assign` 会同时复制字符串属性和`symbol` 属性。

全局`symbol`:

```javascript
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

// 在代码的其他位置读取
let idAgain = Symbol.for("id");

console.log( id === idAgain ); // true
```

`Symbol.keyFor`:

```javascript
// 通过 name 获取 symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 symbol 获取 name
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
```

## typeof 运算符

`typeof` 运算符返回参数的类型。

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object"

typeof alert // "function"
```