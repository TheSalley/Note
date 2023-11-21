# 《MySQL 必知必会》

## 1、数据库基础

> 什么是数据库？

数据库是保存**一些有组织的数据**的容器。(通常是一个文件或一组文件。)(类似于文件柜。)

> 什么是数据库管理系统？

数据库管理系统(DBMS)是管理数据库的软件。(类似于文件管理系统。)

> 什么是数据库服务器？

数据库服务器(DBS)是运行数据库管理系统的计算机。(类似于文件服务器。)

> 什么是数据库客户端？

数据库客户端(DBC)是连接数据库服务器的软件。(类似于文件客户端。)

> 表

表是一种结构化的文件，可用来存储特定类型的数据。数据存放于表中。(类似于文件存放在文件袋中。)

> 列

列是表中的一个字段，表由一个或多个列组成。每个列都有它自己的数据类型（数字、日期、文本等）。

> 行

表中的数据是按行来存储的，每一行都是表中的一个记录。

> 主键

在表中，每一行能够唯一标识自身的一列或多列，称为主键。(类似身份证号。)

主键的条件：

- 任意两行都不会有重复的主键值；
- 主键值不允许`NULL` 值；

注：多个列作为主键时，所有列值的组合必须唯一，但单个列的值可以不唯一。

> 外键

## 2、MySQL 简介

## 1、数据库的创建与删除

```javascript
// 展示当前所有存在的数据库
show databases;

// 创建数据库
 create database 数据库名 default character set utf8mb4 collate utf8mb4_general_ci;

// 删除数据库
drop database 数据库名字;

// 如果存在就删除
drop database if exists 数据库名字;

// 选择数据库
use 数据库名字;
```

## 2、表的创建、修改、删除

- ### 创建表

使用`CREATE TABLE`语句创建表，必须给出以下条件：

    - 表的名字
    - 列的名字和定义

```sql
-- NULL 允许该列在插入数据时不给出该列的值
-- NOT NULL 该列在插入数据时必须给出值
-- PRIMARY KEY 主键，必须唯一，不允许出现重复的列值
-- AUTO_INCREMENT 自增

CREATE TABLE book(
id int NOT NULL AUTO_INCREMENT COMMENT 'id',
book_number int NOT NULL COMMENT '编号',
book_name varchar(255) NOT NULL COMMENT '书名',
book_category char(5) NULL COMMENT '分类',
borrower int NULL COMMENT '借阅人',
create_time datetime NOT NULL COMMENT '入库日期',
PRIMARY KEY(id, book_number)
)ENGINE=INNODB;
```

注意: 在创建新表时，必须保证指定的表名不存在，否则会报错。

`NULL` 值空字符串不同，`NULL` 值指明列中没有数据。

每个表只允许有一个`AUTO_INCREMENT` 列，而且这个列必须被索引(如，通过使它成为主键)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31e848f8c59340749f30eaf9344c23d7~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=803&h=572&s=118652&e=png&b=191919)

#### 指定默认值

```sql
CREATE TABLE category(
id int NOT NULL AUTO_INCREMENT COMMENT 'id',
cate_name varchar(50) NOT NULL DEFAULT '其它' COMMENT '分类名称',
create_time datetime NOT NULL COMMENT '入库日期',
PRIMARY KEY(id)
)ENGINE=INNODB;
```

#### 引擎类型

InnoDB 是一个可靠的事务处理引擎，它不支持全文本搜索；

MEMORY 在功能等同于 MyISAM，但由于数据存储在内存（不是磁盘）中，速度很快（特别适合于临时表）；

MyISAM 是一个性能极高的引擎，它支持全文本搜索，但不支持事务处理。

注意：外键不能跨引擎

- ### 修改表

使用`ALTER TABLE`语句修改表，必须给出以下条件：

    - 表的名字
    - 要修改的列的名字和定义

#### 添加一个列

```sql
ALTER TABLE book
ADD price decimal(10, 2) COMMENT '价格';
```

#### 删除一个列

```sql
ALTER TABLE book
DROP COLUMN price;
```

#### 定义外键

```sql
ALTER TABLE book
ADD CONSTRAINT fk_cate
FOREIGN KEY (book_category)
REFERENCES category (id);
```

注意: 外键字段的类型必须和引用字段的类型一致。

- ### 删除表

使用`DROP TABLE`语句删除表，必须给出以下条件：

    - 表的名字

```sql
DROP TABLE book, category;
```

- ### 重命名表

使用`RENAME TABLE`语句重命名表，必须给出以下条件：

    - 表的名字

```sql
RENAME TABLE book TO books,
category TO categories;
```

## 3、Select

`SELECT` 语句用于从一个表或多个表中检索出想要的数据，必须要给出以下条件:

- 想要什么
- 从什么地方找

#### 1. 检索单个列

```sql
SELECT book_name FROM books;
```

注: 检索到的数据的顺序可能是数据被添加到表中的顺序，也可能不是。

#### 2. 检索多个列

```sql
SELECT book_name, author FROM books;
```

#### 3. 检索所有列

```sql
SELECT * FROM tb_student;
```

#### 4. 去重

```sql
SELECT DISTINCT author FROM books;
```

注：**DISTINCT** 关键字是应用于所有列的。它会在所有列中查找重复的值，并只保留其中一个。如果给出`SLECT DISTINCT author, book_name` 它只会将多个列相同的给去重掉。

#### 5. 限制结果

返回前 5 行：

```sql
SELECT * FROM books LIMIT 5;
```

返回从第 10 行开始的 5 行：

```sql
SELECT * FROM books LIMIT 9,5;
SELECT * FROM books LIMIT 5 OFFSET 9;
```

注：从 0 开始计数

#### 6. 使用完全限定的表名

```sql
SELECT book_db.books.author FROM book_db.books;
```

#### 7. 排序数据

返回先将书籍分类排序，再将书籍编号排序：

```sql
SELECT book_number, book_name, book_category, author FROM books
ORDER BY book_category, book_number;
```

返回按书籍编号的降序，书籍名称的升序数据：

```sql
SELECT book_number, book_name FROM books
ORDER BY book_number DESC, book_name;
```

注：默认`ASC`(升序)

#### 8. 过滤数据

`where` 子句中的运算符:

| 运算符  | 描述                       |
| ------- | -------------------------- |
| =       | 等于                       |
| <>      | 不等于                     |
| >       | 大于                       |
| <       | 小于                       |
| >=      | 大于等于                   |
| <=      | 小于等于                   |
| BETWEEN | 在某个范围内               |
| LIKE    | 搜索某种模式               |
| IN      | 指定针对某个列的多个可能值 |

使用`WHERE` 子句过滤数据。

| 操作符  | 说明               |
| ------- | ------------------ |
| =       | 等于               |
| <>      | 不等于             |
| !=      | 不等于             |
| <       | 小于               |
| <=      | 小于等于           |
| >       | 大于               |
| >=      | 大于等于           |
| BETWEEN | 在指定的两个值之间 |

选择所有作者是余华的书籍:

```sql
SELECT * FROM books WHERE author='余华';
```

注：`ORDER BY` 和`WHERE` 同时使用时，`ORDER BY` 应在`WHERE` 之后。

英文字符时不区分大小写，也就说`author` = 'c' 会将 c 和 C 都返回。

选择书籍编号在 1000005 和 1000007 之间的书籍：

```sql
SELECT * FROM books WHERE book_number BETWEEN 1000005 AND 1000007;
```

> `AND` 操作符

返回书籍编号等于 1000010 并且作者为余华的书籍：

```sql
SELECT * FROM books WHERE book_number='1000010' AND author='余华';
```

> `OR` 操作符

返回余华或者莫言的所有书籍：

```sql
SELECT * FROM books WHERE author='余华' OR author='莫言';
```

注：在同时使用`OR`、 `AND` 时，应使用圆括号明确表明计算次序。因为`AND` 优先级比`OR` 高。

> `IN` 操作符

返回所有书籍编号在 1000001、1000002、1000003、1000004 中的书籍：

```sql
SELECT * FROM books WHERE book_number IN (1000001,1000002,1000003,1000004);
```

注：`IN` 操作符比`OR` 操作符执行更快。

`IN` 操作符可以包含其它`SELECT` 语句。

> `NOT` 操作符

返回所有非余华、莫言的书籍信息：

```sql
SELECT * FROM books WHERE author NOT IN ('莫言','余华');
```

注：`NOT` 与`IN`、`BETWEEN`、`EXISTS` 配合使用。

#### 9. 空值检查

返回所有没有作者的书籍的书籍编号：

```sql
SELECT book_number FROM books WHERE author IS NULL;
```

注：`NULL` 值代表没有值，与 0、空字符串、仅包含空格的字符串不同。

#### 10. `LIKE` 操作符

> `%` 通配符

`%` 表示任意字符出现任意次数。

返回所有书籍名称以含有**的** 字的书籍信息：

```sql
SELECT * FROM books WHERE book_name LIKE '%的%';
```

注：`%` 通配符不匹配`NULL` 值。

> `_` 通配符

`_` 表示任意单个字符。

返回所有书籍名称以**命**字开头的两个字书名的书籍信息：

```sql
SELECT * FROM books WHERE book_name LIKE '命_';
```

#### 11. 用正则表达式进行搜索

返回书名中带`.` 的所有书籍信息:

```sql
SELECT * FROM books WHERE book_name REGEXP '\\.';
```

注：`MySQL` 要求两个反斜杠。

> 字符类

| 字符类     | 说明                                              |
| ---------- | ------------------------------------------------- |
| [:alnum:]  | 任意字母和数字（同[a-zA-Z0-9]）                   |
| [:alpha:]  | 任意字符（同[a-zA-Z]）                            |
| [:blank:]  | 空格和制表（同[\\t]）                             |
| [:cntrl:]  | ASCII 控制字符（ASCII 0 到 31 和 127）            |
| [:digit:]  | 任意数字（同[0-9]）                               |
| [:graph:]  | 与[:print:] 相同，但不包含空格                    |
| [:lower:]  | 任意小写字母（同[a-z]）                           |
| [:print:]  | 任意可打印字符                                    |
| [:punct:]  | 既不在[:alnum:] 又不在[:cntrl:] 中的任意字符      |
| [:space:]  | 包括空格在内的任意空白字符（同[\\f\\n\\r\\t\\v]） |
| [:upper:]  | 任意大写字母（同[A-Z]）                           |
| [:xdigit:] | 任意十六进制数字（同[a-fA-F0-9]）                 |

#### 12. 计算字段

```sql
SELECT CONCAT(book_name, ' - ', '(',author,')') AS '数据' FROM books;
```

```sql
SELECT  book_name, book_quantity, book_price, book_quantity * book_price AS '总价'
FROM books;
```

#### 13. 数据处理函数

| 函数    | 说明               |
| ------- | ------------------ |
| LTrim() | 去除列值左边的空格 |
| RTrim() | 去除列值右边的空格 |
| Upper() | 转大写             |
| Lower() | 转小写             |

#### 14. 汇总数据

| 聚集函数 | 说明             |
| -------- | ---------------- |
| AVG()    | 返回某列的平均值 |
| COUNT()  | 返回某列的行数   |
| MAX()    | 返回某列的最大值 |
| MIN()    | 返回某列的最小值 |
| SUM()    | 返回某列值之和   |

注：`AVG()` 函数忽略列值为`NULL` 的行。

如果指定列名，则指定列的值为空的行被`COUNT()` 忽略，但如果`COUNT()` 中使用的是星号(\*)，则不忽略。

`MAX()` 函数忽略列值为`NULL` 的行。

`MIN()` 函数忽略列值为`NULL` 的行。

`SUM()` 函数忽略列值为`NULL` 的行。

#### 15. 分组数据

```sql
SELECT author, COUNT(*) AS '数量' FROM books GROUP BY author;
```

```sql
SELECT author, COUNT(*) AS '数量' FROM books GROUP BY author HAVING COUNT(*) >= 3;
```

#### 16. 使用子查询

```sql
SELECT book_number, book_name FROM books WHERE book_category IN (SELECT id FROM category WHERE id = 1);
```

#### 17. 联结表

```sql

```

#### 18. 创建高级联结

#### 19. 组合查询

#### 20. 全文本搜索

## 4、Insert

**INSERT** 用来插入行到表中。

- 插入完整的行
- 插入行的一部分
- 插入多行
- 插入某些查询的结果

```sql
INSERT INTO tb_student (stu_id, stu_name, stu_sex, stu_birth, stu_addr, col_id)
VALUES (5000, '郭靖', 1, '1998-05-05', '山西太原', 2);
```

优点：即使表的结构改变，此语句依然能正常工作。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9da6e36134e4a158b3de63ec405df4a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=795&h=450&s=103127&e=png&b=1d1d1e)

## 5、Update

```sql
UPDATE tb_student SET stu_addr='终南山' WHERE stu_name='杨过';
```

## 6、Delete

**DELETE** 语句只会从表中删除行或者所有行，但不会删除表本身。

如果要删除表中的所有行，可以使用`TRUNCATE TABLE` 语句。

```sql
DELETE FROM tb_student WHERE stu_name='林震南';
```

## 7、join

```sql
SELECT s.stu_name, tb_teacher.tea_title ,tb_teacher.tea_name
FROM tb_student AS s
INNER JOIN tb_teacher ON s.col_id = tb_teacher.col_id;
```

## 8、视图

视图是虚拟的表，它只包含使用时动态查询出的结果。

视图可以包含查询语句，也可以不包含查询语句。

视图的作用：

- 重用 SQL 语句；
- 简化复杂的 SQL 操作；
- 使用表的组成部分，而不是整个表；
- 保护数据；可以给用户授予表的特定部分的访问权限，而不是整个表的访问权限；

```sql
CREATE VIEW v_student AS
SELECT stu_id, stu_name, stu_sex,
```
