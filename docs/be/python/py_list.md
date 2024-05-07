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

:::danger
访问的索引值超过列表长度时会报错.
:::

## 3、修改、添加和删除元素

+ 修改列表元素

```python
# 通过索引找到该元素并修改

fruits = ['banana', 'orange', 'mango', 'lemon']
fruits[0] = 'apple'
print(fruits)  # ['apple', 'orange', 'mango', 'lemon']
```

+ 在列表中添加元素

    + `append()`

    ```python
    # 尾部追加

    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.append('pear')
    print(fruits)  # ['banana', 'orange', 'mango', 'lemon', 'pear']
    ```

    + `insert()`

    ```python
    # 任意位置添加

    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.insert(2, 'strawberry')
    print(fruits)  # ['banana', 'orange', 'strawberry', 'mango', 'lemon']
    ```

+ 从列表中删除元素

    + `del`

    ```python
    # 删除指定位置的元素

    fruits = ['banana', 'orange', 'mango', 'lemon']
    del fruits[0]
    print(fruits)  # ['orange', 'mango', 'lemon']
    ```

    + `pop()`

    ```python
    # 返回删除的元素

    fruits = ['banana', 'orange', 'mango', 'lemon']
    # 弹出最后一个
    fruits.pop()
    # 弹出指定位置的元素
    fruits.pop(0)
    print(fruits)  # ['orange', 'mango']
    ```

    + `remove()`

    ```python
    # 根据值来删除，只能删除出现的第一个
    # 返回删除项

    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.remove('banana')
    print(fruits)  # ['orange', 'mango', 'lemon']
    ```

## 4、组织列表

> 排序

+ `sort() 方法`永久排序（不可恢复）

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

+ `sorted() 函数`临时排序（不影响原列表）

    同样支持反向排序

    ```python
    fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits_new = sorted(fruits)
    print(fruits)  # ['banana', 'orange', 'mango', 'lemon']
    print(fruits_new)  # ['banana', 'lemon', 'mango', 'orange']
    ```

> 反转

+ 反转列表

`reverse()`（永久性）

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