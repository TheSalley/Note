# 性能优化

## 1、前端性能优化

1. 减少整体加载时间

    + 减小文件体积、减少`HTTP`请求、使用预加载

2. 使网站尽快可用
    
    + 仅加载首屏内容，其它内容根据需要进行懒加载

3. 平滑和交互性

    + 使用`CSS` 替代`JS` 动画、减少UI 重绘

4. 感知表现

    + 让用户感觉更快。耗时操作给用户反馈，如进度条、骨架屏、加载动画等提示性信息。

5. 性能测定

    + 性能指标、性能测试、性能监控持续优化

## 2、RAIL

RAIL 是**Response**、**Animation**、**Idle**、**Load** 的集合。是Google提出的性能模型，用于提升浏览器内的用户体验和性能。

RAIL 模型的理念是”以用户为中心，最终目标不是让您的网站在任何特定设备上都能运行很快，而是使用户满意”。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4cc6498512e4502b3cd235a113913e8~tplv-k3u1fbpfcp-watermark.image?)

+ 响应（Response）：应该尽可能快速的响应用户, 应该在 100ms 以内响应用户输入。

+ 动画（Animation）：在展示动画的时候，每一帧应该以 16ms 进行渲染，这样可以保持动画效果的一致性，并且避免卡顿。

+ 空闲（Idle）：当使用 Javascript 主线程的时候，应该把任务划分到执行时间小于 50ms 的片段中去，这样可以释放线程以进行用户交互。

+ 加载（Load）：应该在小于 1s 的时间内加载完成你的网站，并可以进行用户交互。

## 3、Web Vitals

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5322901019d4488b97b059a8e7a7bd8a~tplv-k3u1fbpfcp-watermark.image?)