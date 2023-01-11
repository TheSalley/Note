# 元组

## 1、定义元组

元组看起来很像列表，但使用圆括号标识。且不能修改里面的元素，但可以给元组变量重新赋值。

```python
sexs = ('male', 'female')
print(sexs)

# ('male', 'female')
```

## 2、遍历元组

```python
sexs = ('male', 'female')
for sex in sexs:
    print(sex)

# 'male'
# 'female'
```