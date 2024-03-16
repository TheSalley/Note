# NestJS

## 1、简介

企业级开发框架，提供了 IOC、AOP、微服务等架构特性

mysql、mongodb、redis、rabbitmq、nacos

pm2、docker、docker compose

项目：

会议室预定系统，nest+mysql+typeorm+redis+docker

电商系统，nest+mysql+rabbitmq+redis+docker compose+etcd

大众点评系统，nest+mysql+redis+docker compose+rabbitmq

聊天室，nest+mongodb+redis+docker compose+websocket+nginx

教育平台，nest+mysql+redis+nginx+docker compose+kafka+graphql

博客项目，nest+mysql+redis+docker compose+elasticsearch

nest 基础：

IOC、AOP、全局模块、动态模块、自定义 provider、middleware、pipe、intercepter、guard

nest cli 的使用

后端部分：

docker、mysql、redis、typeorm、jwt、session、RBAC 权限控制、pm2 部署

做会议室预定项目

微服务、创建 monorepo 项目，用 rabbitmq 做削峰填谷，用 etcd、nacos 做配置中心和注册中心，用 passport 做身份验证和 docker compose 部署多个项目和 nginx

做电商系统项目

redis

做大众点评项目

学 websocket、mongodb

做聊天室项目

学 graphql、kafka

做教育平台项目

用 ElasticSearch 做全文检索

做博客项目

oauth2.0 做授权

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
