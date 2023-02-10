# HTML

## 1、`Doctype` 的作用？

`<!DOCTYPE>` 声明位于`HTML` 文档的第一行，处于`<html>` 标签之前。作用是：告诉浏览器的解析器用什么文档标准解析这个文档。

## 2、行内元素？块级元素？空元素？

首先， `CSS` 规范规定：每个元素都有`display` 属性，用来确定该元素的类型，每个元素都有默认的`display` 值。

- 行内元素：

  `a`、`b`、`span`、`img`、`input`

- 块级元素

  `div`、`ul` 、`ol`、 `li`、 `p`、`h1`

- 空元素

  `br`、`hr`、`img`、`input`、`link`、`meta`

## 3、常见的浏览器内核有哪些？

- `Webkit` 内核：`Chrome`、`Safari` [`Chrome`的`Blink`（`Webkit` 的分支）]

- `Trident` 内核：`IE`、`360`等

- `Presto` 内核：`Opera7`以上 [`Opera` 内核原为`Presto`，现为`Blink`]

- `Gecko` 内核：`Netscape6` 以上，`Mozilla`

## 4、介绍下你对浏览器内核的理解？

主要分两部分：**渲染引擎(`layout engineer` 或 `Rendering Engine`)** 和 `JS` 引擎。

渲染引擎：

负责获取网页的内容(`HTML`、`XML`、图像等)、整理讯息(例如添加`CSS` 等)、以及计算网页的显示方式。最后会输入到显示器或打印机。

浏览器的内核不同，对于网页的语法解释也会有所不同。

`JS` 引擎：

解析和执行`javascript` 来实现王爷的动态效果。

## 5、页面导入样式时，使用`link` 和`@import` 有什么区别？

1. `link` 属于`XTML` 标签，除了加载`CSS` 外，也能用于定义`RSS`,