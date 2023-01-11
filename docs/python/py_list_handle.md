# 操作列表

## 1、遍历整个列表

```python
magicians = ['ooo', 'kiva', 'faiz']
for magician in magicians:
    print(magician)

# ooo
# kiva
# faiz
```

## 2、创建数值列表

`range()`

```python
numbers = list(range(1, 5))
print(numbers)

# [1, 2, 3, 4]

# range() 的第三个参数是步长
even_numbers = list(range(2, 11, 2))
print(even_numbers)

# [2, 4, 6, 8, 10]
```

## 3、对数字列表执行简单的统计计算

```python
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print(min(digits))  # 0
print(max(digits))  # 9
print(sum(digits))  # 45
```

## 4、列表解析

列表解析：将`for` 循环和创建新元素的代码合并成一行。

```python
squares = [value ** 2 for value in range(1, 11)]
print(squares)

# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## 5、使用列表的一部分  

+ 切片

    ```python
    fruits = ['banner', 'apple', 'pear', 'mango']
    print(fruits[0:3])
    print(fruits[:2])
    print(fruits[2:])
    print(fruits[-3:])

    # ['banner', 'apple', 'pear']
    # ['banner', 'apple']
    # ['pear', 'mango']
    # ['apple', 'pear', 'mango']
    ```

## 6、复制列表

创建整个列表的副本（使用[:]）

```python
my_foods = ['pizza', 'carrot cake']
friend_foods = my_foods[:]

print(f"my_foods : {my_foods}")
print(f"friend_foods : {friend_foods}")

# my_foods : ['pizza', 'carrot cake']
# friend_foods : ['pizza', 'carrot cake']
```