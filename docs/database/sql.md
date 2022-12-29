# sql

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

## 2、表的创建与编辑

```javascript

```

## 3、Select

```sql
SELECT * FROM tb_student;
SELECT stu_name, stu_sex FROM tb_student;

SELECT DISTINCT stu_sex FROM tb_student;

SELECT * FROM tb_student WHERE stu_addr='四川成都';

SELECT * FROM tb_student WHERE stu_id > 2000 AND stu_id < 3000;
SELECT * FROM tb_student WHERE stu_id > 5000 OR stu_id < 50;
SELECT * FROM tb_student WHERE NOT stu_id = 1001;

SELECT * FROM tb_student WHERE stu_addr IS NULL;

SELECT * FROM tb_student WHERE stu_id BETWEEN 1001 and 1003;

SELECT * FROM tb_student WHERE stu_addr IN ('四川成都','河南洛阳')

SELECT * FROM tb_student WHERE stu_name LIKE '%嫣_';

SELECT * FROM tb_student ORDER BY stu_birth;
SELECT * FROM tb_student ORDER BY stu_birth DESC;
SELECT * FROM tb_student ORDER BY stu_birth, stu_id;

SELECT * FROM tb_student LIMIT 3;

SELECT * FROM tb_student WHERE stu_name REGEXP '[我过]';

SELECT stu_name AS '姓名' FROM tb_student;

SELECT s.stu_name, s.col_id ,c.col_name FROM tb_student AS s, tb_college AS c
WHERE s.col_id = c.col_id;
```

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

## 4、Insert

```sql
INSERT INTO tb_student (stu_id, stu_name, stu_sex, stu_birth, stu_addr, col_id)
VALUES (5000, '郭靖', 1, '1998-05-05', '山西太原', 2);
```

## 5、Update

```sql
UPDATE tb_student SET stu_addr='终南山' WHERE stu_name='杨过';
```

## 6、Delete

```sql
DELETE FROM tb_student WHERE stu_name='林震南';
```

## 7、join 

```sql
SELECT s.stu_name, tb_teacher.tea_title ,tb_teacher.tea_name 
FROM tb_student AS s 
INNER JOIN tb_teacher ON s.col_id = tb_teacher.col_id;
```