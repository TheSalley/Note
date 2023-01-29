# Django

## 1、指令

```python
# 创建虚拟环境
python -m venv ll_env
# 激活虚拟环境
ll_env\Scripts\activate
# 失活虚拟环境
decativate
# 安装
pip install django
# 新建一个项目
django-admin startproject learning_log .
# 创建数据库
python manage.py migrate
# 运行项目
python manage.py runserver
# 搭建应用程序所需的基础
python manage.py startapp learning_logs
# 迁移数据库
python manage.py makemigrations learning_logs
python manage.py migrate
# 创建超级用户
python manage.py createsuperuser
```