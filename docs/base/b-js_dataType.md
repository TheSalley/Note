# 数据类型

+ 值类型：`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`、`BigInt`

+ 引用类型：`Object`（包含`Function`、`Array`）

## Number

number 类型代表整数和浮点数。除了常规的数字，还有`Infinity`、`-Infinity`、`NaN`。

在JavaScript 中做数学运算是安全的。我们可以除以0，将非数字字符视为数字...

## BigInt

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

### String

支持单引号、双引号、反引号包裹。

### Boolean

boolean 类型仅包含两个值：`true` 和`false`

### null

它只包含`null` 值，代表"无"、"空"、"值未知" 的特殊值。

### undefined

undefined 的含义是未被赋值。

如果一个变量已被声明，但未被赋值，那么它的值就是undefined。