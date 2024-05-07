# HTTP

## 1、状态码

由3位数字组成，第一个数字定义了响应的类别

1. 1xx
    指示消息，表示请求已接收，继续处理
2. 2xx
    成功，表示请求已被成功成功接收，处理
3. 3xx ：重定向
    | 状态码 | 含义 |
    | --- | ---|
    | 301 Moved Permanetly| 永久重定向，表示请求的资源已经永久地搬到了其他位置|
    | 302 Found| 临时重定向，表示请求的资源临时搬到了其他位置 |
    | 303 See Other| 临时重定向，表示应用GET请求资源 |
    | 304 Not Modified | 表示客户端发送附带条件的请求，如果条件不满足时，返回304 |
    | 307 Temporary Redirect | 临时重定向 |
4. 4xx : 客户端错误
    | 400 Bad Request | 客户端请求语法错误，服务器无法理解 |
    | 401 Unauthorized | 请求未授权 |
    | 403 Forbidden| 服务器收到请求，但是拒绝提供服务 |
    | 404 Not Found | 请求资源不存在，比如输入了错误的url |
    | 415 Unsupported media type | 不支持的媒体类型 |
5. 5xx : 服务器错误
    | 500 Internal Server Error | 服务器发生了不可预期的错误 |
    | 503 Server Unavailable | 服务器当前不能处理客户端的请求 |

## 2、https 和 http 

- https 协议需要ca 证书，费用较高，而http 不需要；
- http 协议是超文本传输协议，信息是明文传输的，https 则是具有安全性的ssl 加密传输协议；
- http 默认80 端口，https 默认为443 端口；
- http 协议连接是无状态的；https 协议是具有ssl 和http 协议共同构建的可进行加密传输、身份认证的网络协议，比http 更加安全
