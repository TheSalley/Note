# 函数的类型

```typescript
// 函数声明
// 输入多余的（或者少于要求的）参数，是不被允许的
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

:::tip
`TypeScript` 中的`=>` ，左边是输入类型，右边是输出类型。
:::

- 用接口定义函数的形状

```typescript
interface SearchFun {
  (source: string, subString): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
```

- 可选参数

```typescript
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName("Tom", "Cat");
let tom = buildName("Tom");
```

:::tip
可选参数后面不允许再出现必需参数了。
:::

- 参数默认值

```typescript
// 此时不受可选参数必须在必需参数后面的限制
function buildName(firstName: string = "Tom", lastName: string) {
  return firstName + " " + lastName;
}
let tomcat = buildName("Tom", "Cat");
let cat = buildName(undefined, "Cat");
```

- 剩余参数

```typescript
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

- 重载

重载允许一个函数接受不同数量或类型的参数时，做出不同的处理。

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
```
