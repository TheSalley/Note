# 变量和简单数据类型

## 1、变量

变量是可以赋值的标签，也可以说变量指向特定的值。(有些像C 的指针)

```python
message = "Hello Python!"
print(message)  # Hello Python!

message = 123
print(message)  # 123
```

:::tip
`Python` 和`JavaScript` 一样，都是动态语言
:::

同时给多个变量赋值：

```python
x, y, z = 0, 1, 2
```

> 命名规则：

+ 只能包含字母、数字、下划线。但不能以数字开头。

+ 不能用关键字和保留字。

### 常量

```python
MAX_CONNECTIONS = 5000
```

## 2、字符串

使用单引号、双引号包裹。

```python
'This is a string'
"This is also a string"
```

在字符串中使用变量:

```python
# f""、f''
first_name = "alan"
last_name = "turing"
full_name = f"{first_name} {last_name}"
print(f"Hello, {full_name.title()}")  # Hello, Alan Turing

# "".format()、''.format()
full_name2 = "{}-{}".format(first_name, last_name)
print("Hello, {}".format(full_name2))  # Hello, alan-turing
```

## 3、数

整数和浮点数:

+ 将任意两个数相除时，结果总是浮点数，即使这两个数都是整数且能够整除。

+ 一整一浮点的情况下，结果也总是浮点数。

```python
print(4 / 2)  # 2.0

print(1 + 2.0)  # 3.0
print(2 * 1.0)  # 2.0
print(3.0 ** 2)  # 9.0
```

当书写很大的数时，可以用下划线分组：

```python
large_num = 14_000_000_000
print(large_num)  # 14000000000
```
