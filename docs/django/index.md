# Django

## 1、指令

```python
# 创建虚拟环境
py -3 -m venv env_name
# 激活虚拟环境
env_name\Scripts\activate
# 失活虚拟环境
decativate
# 安装
pip install django
# 新建一个项目
django-admin startproject 项目名
# 项目中新建一个应用
python manage.py startapp 应用名
# 数据库创建更改文件
python manage.py makemigrations
# 同步数据库进行更新
python manage.py migrate
# 清空数据库
python manage.py flush
# 运行项目
python manage.py runserver
# 创建超级用户
python manage.py createsuperuser
```