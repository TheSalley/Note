# TypeScript

## 1、强类型 Vs 弱类型

强类型不允许随意的隐式类型转换，而弱类型是允许的。

如: 
```javascript
    '100' - 50 // js 结果为 50 ，ts 会报错
```

弱类型的问题：

```javascript
    let obj = {}
    obj.foo()
    // 运行时才会报错
```

## 2、静态类型 与 动态类型

变量的类型是固定的，在编译时确定类型。

变量类型可变，在运行时确定类型。

## 3、类型简介

+ 基本类型

string 、number 、boolean 、void 、null 、undefined 、 symbol

+ object

```javascript
    const foo: object = {} // [] function() {}

    const obj: { name: string } = { name: 'zs' } // 用接口更好
```

+ array

```javascript
    const arr1: Array<number> = [1, 2, 3]

    const arr2: number[] = [1, 2, 3]
```

+ tuple

```javascript
    const tuple: [number, string] = [11, 'zs']
```

+ enum

```javascript
    enum status {
        Draft = 0,
        UnPublish = 1,
        Publish = 2 
    }
    // 既能通过键取到值，也能通过值得到键
```

+ function

```javascript
    function func1 (a: number, b?: number): string {
        return 'func1'
    }
    // 可选参数也可用es6默认值的方式，注意，放最后
```