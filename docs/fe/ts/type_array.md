# 数组的类型

+ 类型 + 方括号

```typescript
let num_arr: number[] = [1, 2, 3, 4, 5];
```

+ 泛型

```typescript
let num_arr: Array<number> = [1, 2, 3, 4, 5];
```

+ 接口

```typescript
interface NumberArray {
    [index: number]: number;
}
let num_arr: NumberArray = [1, 2, 3, 4, 5];
```