# `Requests` 库

## 简介

`Requests` 库是`Python` 中一个常用的`HTTP` 库，它可以用来发送`HTTP` 请求，并接收`HTTP` 响应。

## 基本使用

> 安装

```shell
pip install requests
```

> 请求

```python
import requests

# 发送一个 GET 请求

# 不带参数
requests.get('http://www.baidu.com')
# 带参数
requests.get('http://www.baidu.com?wd=python')
requests.get('http://www.baidu.com', params={
    'wd': 'python'
})

# 发送一个 POST 请求
data = {'key1': 'value1', 'key2': 'value2'}
requests.post('http://shiliwangzhi.com/post', data=data)
```

> 响应

向服务器发送请求后，服务器会返回响应数据。

| 属性        | 解释           |
| ----------- | -------------- |
| status_code | 响应状态码     |
| headers     | 响应头         |
| encoding    | 响应编码       |
| text        | 响应文本       |
| content     | 响应二进制     |
| json        | 响应 JSON 数据 |
| cookies     | 响应 Cookies   |
| history     | 响应历史       |
| elapsed     | 响应耗时       |

## 高级使用||
