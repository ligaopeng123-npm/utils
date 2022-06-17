## 使用方式

```tsx
rtc create <template> // 创建项目

rtc c <template> 
    
rtc createModule <module> // 创建模块

rtc cm <module> 

rtc list  // 查看命令支持

rtc ls
```

## 模板支持

### 框架

#### react-sample

### 技术栈

- React 17 
- less + scss
- ant + ant pro
- recoil

### 目录文件

public/json/menus.json: 定义路由模块相关

```typescript
{
    "id": 53,
     "name": "系统配置",
     "path": "/system/config",
     "component": "/system/config", // pages/system/config均可 pages前不能加 '/' 
     "auth": null
}
```

public/json/OEM.json: 定义OEM相关

src/pages：业务代码放在该目录下，路由规则会基于该目录匹配。

src/headersJS：在header中引入的外部js文件

src/httpClient/intercept：定义拦截器

src/defaultSettings：定义布局相关

### 细节

#### 静态资源

##### public：tsx中直接使用 /img/*.png；在样式中需要放到src目录下进行编译。

```less
body {
    background-image: url("~@/assets/img/dashboard/demo.png");
}
```

#### 部署

默认使用docker部署，如果使用static方式部署，需要修改REACT_APP_PUBLICPATH变量



#### react-electron

## 介绍

Electron16+

react react-dom 17+

react-router v6

electron-builder 打包

webpack5+  编译

## Install

```bash
git clone --depth 1 --branch react-electron-template https://github.com/ligaopeng123/react-project-template.git your-project-name
or
rtc create your-project-name

cd your-project-name
npm install
```

[^注意]: 如果需要添加新的依赖包，请确认该包的使用环境，如果是node-gyp之类的原生模块，或者ffpmeg之类的第三方程序，请在release目录下得app环境安装依赖，electron-builder会将这些依赖打到程序包里。

## 开发环境

无需编译的静态资源 统一放到根目录下得assets下

.eslintrc 配置eslint

```bash
npm start 
```

## build

```bash
npm run package
```


#### react-screen

### 技术栈

- React 17 
- less + scss
- ant + ant pro
- recoil

### 目录文件

public/json/menus.json: 定义路由模块相关

public/json/OEM.json: 定义OEM相关

src/pages：业务代码放在该目录下，路由规则会基于该目录匹配。

src/pages/*：没个目录下都可以是一个大屏

src/headersJS：在header中引入的外部js文件

src/httpClient/intercept：定义拦截器

src/defaultSettings：定义布局相关


### 模块

#### table

404: Not Found

## 插件依赖

| 插件              | 目的         |
| ----------------- | ------------ |
| chalk             | 美化输入输出 |
| prompts           | 用户信息输入 |
| download-git-repo | 远程模板下载 |
| cac               | cli指令      |
| lodash.template   | 处理模板     |
| ora               | loading效果  |
| fast-glob         | 文件名读取   |

