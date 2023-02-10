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

1. `link` 属于`XTML` 标签，除了加载`CSS` 外，也能用于定义`RSS`、定义`rel` 连接属性；而`@import` 是`CSS` 提供的，只能用于加载`CSS`;

2. 页面被加载时，`link` 也会同时加载；而`@import` 引用的`CSS` 会等到页面被加载完后再加载；

3. `@import` 是`CSS2.1` 提出的，只能在`IE5` 以上才能被识别，而`link` 是`XHTML` 标签，无兼容性问题。

4. `link` 支持使用`js` 去控制`DOM` 去改变样式，而`@import` 不支持。

## 6、简述一下你对`HTML` 语义化的理解？

用正确的标签做正确的事。

`HTML` 语义化让页面的内容结构化，有利于浏览器、搜索引擎的解析，同时也让网站开发人员便于阅读。

搜索引擎的爬虫也依赖于`HTML` 标记来确定上下文和各个关键字的权重，利于`SEO`。


## 7、