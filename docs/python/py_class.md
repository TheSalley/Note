# 类

## 1、简介

## 2、创建和使用类

> <span class="hightlight-text">创建`Dog` 类：</span>

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sit(self):
        print(f'{self.name} is now sitting.')

    def roll_over(self):
        print(f'{self.name} rolled over!')
```

- `__init__()`

这个函数是一个特殊方法，每当我们根据`Dog` 类创建新实例时，`Python` 都会自动运行这个函数。

- `self`

它是一个指向实例本身的引用，让实例能够访问类中的属性和方法。

> <span class="hightlight-text">根据类创建实例</span>

```python
class Dog:
    ...

my_dog = Dog('greed', 6)
# 访问属性
print(f'My dog\'s name is {my_dog.name}')  # My dog's name is greed
print(f'My dog\'s age is {my_dog.age}')  # My dog's age is 6

# 调用方法
my_dog.sit()  # greed is now sitting.
my_dog.roll_over()  # greed rolled over!
```

> <span class="hightlight-text">使用类和实例</span>

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        # 给属性指定一个默认值
        self.odometer_reading = 0

    def get_descriptive_name(self):
        lone_name = f'{self.year} {self.make} {self.model}.'
        return lone_name.title()

    def get_odometer(self):
        print(f'This car has {self.odometer_reading} mils on it')

my_new_car = Car('audi', 'a4', 2019)
print(my_new_car.get_descriptive_name())  # 2019 Audi A4.
my_new_car.get_odometer()  #This car has 0 mils on it
```

修改属性的值：

- 直接修改

```python
...
my_new_car.odometer_reading = 23
```

- 通过方法修改

```python
    class Car:
        ...
        def update_odometer(self, mileage):
            self.odometer_reading = mileage

    my_new_car.update_odometer(100)
```

## 3、继承

一个类继承另一个类，将自动获得另一个类的所有属性和方法，同时也可以定义自己独有的属性和方法。

```python
class Car:
    ...

class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        # 给子类定义自己的属性
        self.battery_size = 75

    # 子类自己的方法
    def describe_battert(self):
        print(f'This car has a {self.battery_size}-kmh battery.')

my_tesla = ElectricCar('tesla', 'model3', 2020)
print(my_tesla.get_descriptive_name())  # 2020 Tesla Model3.
my_tesla.describe_battert()  # This car has a 75-kmh battery.
```

- `super()`

是一个特殊的函数，它能让 Python 调父类的方法。

**重写父类的方法**：就是覆盖的意思。

将实例作为对象的属性：

```python
class Car:
    ...

class Battery:
    def __init__(self, battery_size=60):
        self.battery_size = battery_size

    def describe_battery(self):
        print(f'This car has a {self.battery_size} kmh battery.')

class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery(15)


my_tesla = ElectricCar('tesla', 'model3', 2020)
print(my_tesla.get_descriptive_name())  # 2020 Tesla Model3.
my_tesla.battery.describe_battery()  # This car has a 15 kmh battery.
```
