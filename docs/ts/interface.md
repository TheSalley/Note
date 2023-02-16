# 接口

在`TypeScript` 中，使用`interface`(接口) 来定义对象的类型。

```typescript
interface Person {
  name: string;
  age: number;
}

let alan: Person = {
  name: "Alan",
  age: 20,
};
```

:::tip
赋值的时候，变量的形状必须和接口的形状保持一致。
:::

- 可选属性

可选属性的含义是该属性可以不存在。

```typescript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom",
};
```

- 任意属性

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};
```

:::warning
一旦定义了任意属性且类型为`string` 时，那么确定属性和可选属性的类型都必须是它的类型的子集。

一个接口中只能定义一个任意属性。
:::

- 只读属性

```typescript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person = {
  id: 89757,
  name: "Tom",
  gender: "male",
};

// tom.id = 9527; 会报错
```

:::tip
只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
:::
