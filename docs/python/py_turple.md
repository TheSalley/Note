# 元组

## 1、元组

与列表不同，元组是不可变的。(即值不能被修改，但可以被重新赋值)

## 2、定义元组

```python
dimensions = (200, 50)

print(dimensions[0])  # 200
print(dimensions[1])  # 50
```

:::tip
如果元组中只有一个元素，必须在这个元素后面加上逗号。
:::

## 3、遍历元组

```python
dimensions = (200, 50)

for dimension in dimensions:
    print(dimension)

# 200
# 50
```