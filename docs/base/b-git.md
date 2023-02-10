# git

## 1、设置用户名、邮箱

```shell
    git config --global user.name "xxx"
    git config --global user.email "xxx"
```

## 2、本地

| 指令              | 含义              |
| ----------------- | ----------------- |
| git init          | 初始化            |
| git status        | 查看当前状态      |
| git add           | 添加到暂存区      |
| git commit        | 提交              |
| git log           | 日志              |
| touch .gitignore  | 忽略              |
| git config --list | 查看本地 git 配置 |

## 3、分支

| 指令                          | 含义                        |
| ----------------------------- | --------------------------- |
| git branch -a                 | 查看本地的和远程的所有分支  |
| git branch `main`             | 创建本地的 main 分支        |
| git branch -d `main`          | 删除本地的 main 分支        |
| git checkout `dev`            | 切换到本地的 dev 分支       |
| git branch -b `dev`           | 创建并切换本地的 dev 分支   |
| git merge bug                 | 合并 bug 分支内容到当前分支 |
| git push origin --delete main | 删除远程的 main 分支        |

## 4、远程

| 指令                   | 含义                     |
| ---------------------- | ------------------------ |
| git clone              | 克隆                     |
| git remote -v          | 查看远程                 |
| git push               | 提交远程                 |
| git fetch              | 拉取远程                 |
| git diff               | 查看不同                 |
| git pull origin `main` | 将远程 main 分支拉到本地 |
| git rebase `main`      | 将当前分支合到 main 分支 |

## 5、暂存区

| 指令         | 含义                 |
| ------------ | -------------------- |
| git ls-files | 查看当前暂存区的文件 |
