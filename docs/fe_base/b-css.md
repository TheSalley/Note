# CSS

## 1、`CSS` 是什么？

**CSS**（层叠样式表 Cascading Style Sheets），用来描述 HTML、XML 等如何被渲染。

## 2、`CSS` 盒子模型

- 盒模型

`content`(内容)、`padding`(内边距)、`margin`(外边距)、`border`(边框)

- `IE` 盒子

`IE` 盒子的`content` 包括`border`、`padding`

- `W3C` 盒子

`content` 不包含其它

## 3、`CSS` 选择器

- `id` 选择器 (#myid)
- 类选择器 (.myclassname)
- 标签选择器 (div)
- 相邻选择器 (h1 + p)
- 子选择器 (ul > li)
- 后代选择器 (li a)
- 通配符选择器 (\*)
- 属性选择器 (a[class="link-effect"])
- 伪类选择器 (a:hover, li:nth-child)

## 4、`CSS` 中哪些样式可以被继承？

- 可被继承的样式

`font-size`、`color`

## 5、`CSS` 样式优先级是如何计算的？

- 就近原则，同等权重下以最近的样式为准
- 同权重下: 内联样式 > 内部样式 > 外部样式
- `!important` 比内联样式高

## 6、`CSS3` 新增的伪类

- `p:first-of-type` 选择其父元素的第一个`p` 元素
- `p:last-of-type` 选择其父元素的最后一个`p` 元素
- `p:only-of-type` 选择其只有一个`p` 元素的父元素里的`p` 元素
- `p:only-child` 选择其只有一个子元素且为`p` 的父元素里的`p` 元素
- `p:nth-child(2)` 选择其父元素的第二个`p`元素
- `::after` 后缀伪元素
- `::before` 前缀伪元素

## 7、如何居中`div`?

- 水平居中

```css
div { 
    width: 200px; 
    margin: 0 auto; 
}
```

- 水平垂直居中

```css
// 绝对定位 1
div { 
    width: 300px; 
    height: 300px; 
    position: absolute; 
    margin: auto;
    background: pink; 
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
}
// 绝对定位 2
div {
    width: 300px; 
    height: 300px; 
    position: absolute; 
    background: pink; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
}
// flex 布局
div {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 8、`display` 有哪些值?

+ `none` 元素不显示，并从文档流中移除
+ `block` 块元素，可设置宽高，独占一行
+ `inline` 行内元素，不可设置宽高，不独占一行
+ `inline-block` 行内块元素，可设置宽高，不独占一行
+ `table` 块级表格
+ `grid` 网格容器
+ `flex` 弹性容器

## 9、`position` 有哪些值?

+ `static` 默认值，没有定位
+ `relative` 相对定位，相对于自身定位 
+ `absolute` 绝对定位，相当于距离自己最近的非`static` 定位的祖先元素定位
+ `fixed` 固定定位，相对于浏览器窗口定位
+ `sticky` 粘性定位，与`top` 值配合，相对浏览器窗口定位
