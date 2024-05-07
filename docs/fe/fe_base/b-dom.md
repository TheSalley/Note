# DOM

[[toc]]

鸟瞰图：

![屏幕截图 2023-01-30 143445.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6825d62d05742b7a401f19d36ffc6ec~tplv-k3u1fbpfcp-watermark.image?)

## 1、简介

文档对象模型（Document Object Model）， 简称DOM。我们可以使用它来创建或更改页面内容。

:::tip
用于样式的CSSOM（CSS Object Model）规范
:::

它解释了如何将CSS 表示为对象、以及如何读写这些对象。
当我们修改文档的样式规则时，CSSOM和DOM 是一起工作的。

## 2、遍历DOM

`<html>` = `document.documentElement`

`<body>` = `document.body`

`<head>` = `document.head`

:::tip
在DOM 中， `null` 值代表不存在或没有此节点
:::

**子节点**: `childNodes`、`firstChild`、`lastChild`

检查节点是否含有子节点: `elem.hasChildNodes()`

+ `childNodes` 是一个集合 --- 类数组的可迭代对象

