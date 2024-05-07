# if 语句

## 1、简介

即分支语句。

:::tip
`python` 的空列表在`if` 语句中返回`False`
:::

```python
age = 19

if age >= 18:
    print('you are a adult.')  # 'you are a adult.'
elif age == 17:
    print('please wait a year.')
else:
    print('you are a children.')
```

## 2、检查多个条件

```python
age_0 = 22
age_1 = 18

print(age_0 >= 21 and age_1 >= 21)  # False
print(age_0 >= 21 or age_1 >= 21)  # True
```

## 3、检查特定值是否包含在列表中

```python
my_favourites = ['apple' 'banana', 'pear']

print('apple' in my_favourites)  # True
```

## 4、检查特定值是否不包含在列表中

```python
my_favourites = ['apple' 'banana', 'pear']

print('apple' not in my_favourites)  # False
```