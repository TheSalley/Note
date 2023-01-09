# 列表

## 1、列表

> 列表：

由一系列元素按特定的顺序组成。

```python
fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits)  # ['banana', 'orange', 'mango', 'lemon']
```

## 2、访问列表元素

```python
# 通过索引获取
fruits = ['banana', 'orange', 'mango', 'lemon']
second_fruit = fruits[1]
print(second_fruit)  # orange

# 访问最后一个元素
last_fruit = fruits[-1]
print(last_fruit)  # lemon
```

## 3、修改、添加和删除元素

+ 修改列表元素

```python
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits[0] = 'apple'
print(fruits)  # ['apple', 'orange', 'mango', 'lemon']
```

+ 在列表中添加元素

    + `append()`

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.append('pear')
    print(fruits)  # ['banana', 'orange', 'mango', 'lemon', 'pear']
    ```

    + `insert()`

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.insert(2, 'strawberry')
    print(fruits)  # ['banana', 'orange', 'strawberry', 'mango', 'lemon']
    ```

+ 从列表中删除元素

    + `del`

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    del fruits[0]
    print(fruits)  # ['orange', 'mango', 'lemon']
    ```

    + `pop()`

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.pop()
    fruits.pop(0)
    print(fruits)  # ['orange', 'mango']
    ```

    + `remove()`

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.remove('banana')
    print(fruits)  # ['orange', 'mango', 'lemon']
    ```

## 4、组织列表

> 排序

+ 永久排序

    正向排序：

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.sort()
    print(fruits)  # ['banana', 'lemon', 'mango', 'orange']
    ```

    反向排序：

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.sort(reverse=True)
    print(fruits)  # ['orange', 'mango', 'lemon', 'banana']
    ```

+ 临时排序

    同样支持反向排序

    ```python
    # 不影响原列表
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits_new = sorted(fruits)
    print(fruits)  # ['banana', 'orange', 'mango', 'lemon']
    print(fruits_new)  # ['banana', 'lemon', 'mango', 'orange']
    ```

> 反转

+ 反转列表

`reverse()`

```python
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.reverse()
print(fruits)  # ['lemon', 'mango', 'orange', 'banana']
```

> 获取列表的长度

`len()`

```python
fruits = ['banana', 'orange', 'mango', 'lemon']
print(len(fruits))  # 4
```