# 类型声明

## 1、布尔值

```typescript
let isDone: boolean = false;
// 注意
let createdByNewBoolean: Boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(1);
```

:::tip
在`TypeScript` 中，`boolean` 是`JavaScript` 的基本类型，而`Boolean` 是`JavaScript` 的构造函数。
:::

## 2、数值

```typescript
let num: number = 6;
```

## 3、字符串

```typescript
let name: string = "Alan";
let str: string = `hello, ${name}.`;
```

## 4、空值

`JavaScript` 没有空值(`Void`) 的概念，而`TypeScript` 中，使用`void` 表示没有返回值的函数。

```typescript
function say(): void {
    console.log("hi.");
}
// 声明一个void 类型的变量没有什么用，只能在strictNullChecks 未指定时，将它赋值为null 和undefined
let unusable: void = undefined;
```

## 5、Null 和Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

:::tip
与`void` 不同，`null` 和`undefined` 是所有类型的子类型。这意味着可以将一个`undefined` 值赋给`number` 类型。
:::

## 6、any(任意值)

+ `any` 类型允许赋值为任意类型。
+ 在`any` 类型上访问任何属性和方法都是允许的。
+ 声明一个变量为`any` 类型，对它的任何操作，返回的内容的类型都是`any`。