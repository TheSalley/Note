# NestJS

## 1、简介

NestJS 的特点：

- 原生支持 TypeScript
- 可以基于 Express，也可以选择 Fastify

```shell
npm i -g @nestjs/cli # 全局安装nestjs 脚手架
nest new project-name # 使用脚手架创建项目
```

目录介绍：

```shell
src
├── app.controller.spec.ts # 对于基本控制器的单元测试样例
├── app.controller.ts # 带有单个路由的基本控制器示例
├── app.module.ts # 应用程序的根模块
├── app.service.ts # 带有单个方法的基本服务
└── main.ts # 应用程序入口文件
```