# 字典

## 1、概念

同`JavaScript` 的对象（即由一系列的键值对组成）。

```python
person = {
    "name": "alan",
    "age": 24
}

print(person["name"])  # alan
print(person["age"])  # 24
```

:::tip
在`Python` 中，字典中元素排列的顺序与定义时相同。
在`Python` 中，集合同样也是用`{}` 来创建的。
:::

## 2、新增键值对

```python
person = {
    "name": "alan",
    "age": 24
}

person["gender"] = "male"
```

## 3、删除键值对

```python
person = {
    "name": "alan",
    "age": 24
}

del person["age"]
```

## 4、`get()` 来访问值

可以使用`get()` 方法在对象访问不存在的键时返回一个默认值。

```python
person = {
    "name": "alan",
    "age": 24
}

value = person.get("address", "unknow")
print(value)  # unknow
```

:::tip
如果`get()` 方法没有指定第二个参数，则返回`None`。它代表一个值不存在的特殊值。
:::

## 5、遍历字典

- 遍历所有键值对

```python
person = {
    "name": "alan",
    "age": 24
}

for key, value in person.items():
    print(f"key: {key}")
    print(f"value: {value}")

"""
    key: name
    value: alan
    key: age
    value: 24
"""
```

- 遍历所有的键

```python
person = {
    "name": "alan",
    "age": 24
}

for key in person.keys():
    print(f"key: {key}")

"""
    key: name
    key: age
"""
```

- 遍历所有的值

```python
person = {
    "name": "alan",
    "age": 24
}

for value in person.values():
    print(f"value: {value}")

"""
    value: alan
    value: 24
"""
```
