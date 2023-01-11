# git

## 1、设置用户名、邮箱

```shell
    git config --global user.name "xxx"
    git config --global user.email "xxx"
```

## 2、本地

| 指令             | 含义         |
| ---------------- | ------------ |
| git init         | 初始化       |
| git status       | 查看当前状态 |
| git add          | 添加到暂存区 |
| git commit       | 提交         |
| git log          | 日志         |
| touch .gitignore | 忽略         |

## 3、分支

| 指令                          | 含义                       |
| ----------------------------- | -------------------------- |
| git branch -a                 | 查看本地的和远程的所有分支 |
| git branch `main`             | 创建本地的 main 分支       |
| git branch -d `main`          | 删除本地的 main 分支       |
| git checkout                  | 切换分支                   |
| git branch -b                 | 创建并切换分支             |
| git merge                     | 合并分支内容               |
| git push origin --delete main | 删除远程的 main 分支       |

## 4、远程

| 指令          | 含义     |
| ------------- | -------- |
| git clone     | 克隆     |
| git remote -v | 查看远程 |
| git push      | 提交远程 |
| git fetch     | 拉取远程 |
| git diff      | 查看不同 |
| git pull      |          |

## 5、暂存区

| 指令         | 含义                 |
| ------------ | -------------------- |
| git ls-files | 查看当前暂存区的文件 |
