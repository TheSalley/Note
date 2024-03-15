# 发展史

## 1、5 大主流浏览器

| 浏览器  | 内核         |
| ------- | ------------ |
| IE      | tredent      |
| chrome  | webkit blink |
| safari  | webkit       |
| firefox | gecko        |
| opera   | presto       |

## 2、浏览器的历史 和 JS 诞生

> 1990

蒂姆·伯纳斯·李 超文本分享资讯的人

world wide web 移植到 C libwww/nexus

允许别人浏览他人编写的网站

> 1993

美国伊利诺大学 NCSA 组织（马克·安德森）

MOSIAC 浏览器 显示图片

图形化浏览器

> 1994

马克·安德森 和 吉姆·克拉克 成立 MOSIAC comunication corporation

商标问题（MOSIAC -> 伊利诺大学 -> spy glass 公司）， 改名 Netscape comunication corporation

网景公司 -> netscape navigator

> 1996

microsoft 收购 spy glass 开发 IE （internet exploror 1.0）

IE3 Jscript

Netscape 的 Brendan eich 在 netscape navigator 开发出 livescript

Java 火了，蹭热度，和 SUN 合作，livescript -> javascript

> 2001

IE6 XP 诞生

JS 引擎

> 2003

mozilla 公司 firefox （由 netscape navigator 改的）

> 2008

google 基于 webkit blink gears 开发 chrome 👏👏👏👏👏

v8 引擎（JS 引擎）🐂🐂🐂 直接翻译机器码；独立于浏览器运行

progressive webapp

> 2009

甲骨文 oracle 收购 SUN

JS 的所有权属于甲骨文

## 3、ECMA

European Computer Manufactures Association（欧洲计算机制造联合会）

一些规范 ES5、ES6

## 4、编程语言

编译型 解释型

源码 --> 编译器 --> 机器语言 --> 可执行的文件

源码 --> 解释器 --> 解释一行就执行一行

解释型语言：不需要根据不同的系统平台进行移植

.java -> javac -> .class -> JVM 解释执行

.cpp -> 编译器 -> .s（汇编） -> 汇编器 -> .obj（目标代码） -> 链接器 -> 可执行的文件

脚本语言：脚本引擎 -> 解释器

脚本语言 前端：javascript（客户端脚本） 后端：php（服务端脚本）

动态语言 -> 脚本语言 -> 解释型语言 -> 弱类型语言

静态语言 -> 编译型语言 -> 强类型语言

## 5、JavaScript

- ECMA

  语法、变量、关键字、保留字、运算、对象、继承、函数

- DOM document object model （W3C 规范）

- BOM browser object model （没有规范）

> 单线程 多线程

JavaScript 的 JS 引擎是单线程的，但可以模拟多线程

轮转时间片：短时间之内轮流执行多个任务的片段

1. 任务 1 任务 2
2. 切分任务 1 任务 2
3. 随机排列这些任务片段，组成队列
4. 按照这个队列顺序将任务片段送进 JS 进程
5. JS 进程执行一个又一个的任务片段

### 变量

变量命名遵循命名规范、语义化、小驼峰

> JS 的值

- 原始值

  Number String Boolean Undefined Null

- 引用值

  Object Array Function Date RegExp

栈 堆

### 错误

- 语法错误

代码块全不执行

- 通用错误

代码块中断执行

11:20

src 设置后，script 的内容将会被忽略