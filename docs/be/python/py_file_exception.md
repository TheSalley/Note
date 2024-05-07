# 文件和异常

[[toc]]

## 1、读取文件

关键字`with` 让不需要访问文件时自动关闭

```python
with open('data.txt', 'r', encoding='utf-8') as file_object:
    contents = file_object.read()

print(contents)  # ...
```

- `for-in` 循环

```python
with open('data.txt', 'r', encoding='utf-8') as file_object:
    for line in file_object:
        print(line)  # ...
```

- 在`with` 代码块外打印内容

`readlines()` ：读取所有的行

```python
with open('data.txt', 'r', encoding='utf-8') as file_object:
    lines = file_object.readlines()

for line in lines:
    print(line)
```

## 2、写入文件

```python
with open('01.data.txt', 'w', encoding='utf-8') as file_object:
    contents = file_object.write(
"""杜甫 <<春夜喜雨>>
好雨知时节，当春乃发生。
随风潜入夜，润物细无声。
野径云俱黑，江船火独明。
晓看红湿处，花重锦官城。
"""
    )
```

| 操作模式 | 含义                           |
| -------- | ------------------------------ |
| r        | 读取（默认）                   |
| w        | 写入（会先截断之前的内容））   |
| x        | 写入，如果文件已存在会产生异常 |
| a        | 追加内容至文件末尾             |
| b        | 二进制模式                     |
| t        | 文本模式（默认）               |
| +        | 更新（可读可写）               |

## 3、异常

`Python` 使用称为**异常**的特殊对象来处理程序执行过程中发生的错误。

当`Python` 遇到错误时，如果没有对异常进行处理，程序会停止并显示`traceback`，反之会执行处理该异常的代码。

+ `try-except` 代码块

```python
try:
    print(5/0)
except ZeroDivisionError:
    print('0 不能当除数')
```

+ `else` 代码块

依赖`try` 代码块成功执行的代码放在此处。

```python
try: 
    answer = int(first_number) / int(second_number)
except ZeroDivisionError:
    print('0 不能当除数')
else:
    print(answer)
```

+ `pass`

静默失败

`pass` 语句告诉`Python` 什么都不做，也可以充当占位符。

```python
try:
    ...
except FileNotFoundError:
    pass
else:
    ...

...
```
