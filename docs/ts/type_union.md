# 联合类型

+ 联合类型：

    表示取值可以为多种类型中的一种。

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```

+ 当`TypeScript` 不确定一个联合类型的变量到底是哪种类型时，我们只能访问联合类型它们共有的属性和方法。
+ 当联合类型的变量被赋值时，会根据类型推论的规则推断出一个类型。