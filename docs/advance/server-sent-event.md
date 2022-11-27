# Sever Sent Event

`Server Sent Event` 规范描述了一个内建的类`EventSource`，它能保持与服务器的连接，并允许从中接收事件。

与`WebSocket` 的区别：

| WebSocket                        | EventSource              |
| -------------------------------- | ------------------------ |
| 双向：客户端与服务端都能交换消息 | 单向：仅服务器能发送消息 |
| 二进制和文本数据                 | 仅文本数据               |
| WebSocket 协议                   | 常规 HTTP 协议           |

**支持自动重连**

**支持跨源请求**

> 使用

```javascript
let eventSource = new EventSource(...);

eventSource.close();
```
