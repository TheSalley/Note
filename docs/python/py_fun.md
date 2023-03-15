# 函数

## 1、函数概念

可复用的代码块。

```python
def greet_user():
    print("Hello")

greet_user()
```

## 2、函数的参数

```python
def greet_user(username):
    print(f"Hello, {username}!")

greet_user("alan")
```

## 3、关键字实参(指定传参)

```python
def greet_user(username, day):
    print(f"Hello, {username}! , this {day}")

greet_user(username = "alan", day = "Monday")
```

## 4、参数默认值

```python
def greet_user(username, day = "Friday"):
    print(f"Hello, {username}! , this {day}")

greet_user(username = "alan")
```

:::tip
在使用参数默认值时，必须遵循没有默认值在前，有默认值的在后。
:::

## 5、实参不匹配

不会像`JavaScript` 一样是`undefined`，而会报错。

## 6、任意数量的实参

```python
def make_food(*foods):
    print(foods)

print(make_food("apple", "milk"))

"""
    ("apple", "milk")
"""
```

## 7、任意数量的实参 2

形参`**foods` 让`Python` 创建一个名为`foods` 的空字典，并将所有收到的名称值对放到这个字典中。

```python
def make_food(**foods):
    print(foods)

print(make_food(name1 = "apple", name2 = "milk"))

"""
    {
        "name1": "apple",
        "name2": "milk"
    }
"""
```

## 8、返回值

```python
def get_formatted_name(first_name, last_name):
    full_name = f"{first_name} {last_name}"
    return full_name

musician = get_formatted_name("alan", "turing")
```
