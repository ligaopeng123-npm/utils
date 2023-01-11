# 介绍

## 命令

```tsx
rtc create <template> // 创建项目

rtc c <template> 
    
rtc createModule <module> // 创建模块

rtc cm <module> 

rtc list  // 查看命令支持

rtc ls
```

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

# 模板支持

## react-sample

### 技术栈

- React 17 
- less + scss
- ant + ant pro
- recoil

### 目录文件

#### public/json/menus.json: 定义路由模块相关

- RouteWithModuleRoutes 新增keepAlive 默认not

  auto： 默认缓存菜单级别 不缓存hideInMenu路由 

  force：强制缓存所有路由 

  not：不缓存

```json
{
    "id": 53,
    "name": "系统配置",
    "mName": "系统配置", // 移动端展示菜单名称 不填默认取name
    "path": "/system/config",
    "component": "/system/config", // pages/system/config均可 pages前不能加 '/' 
    "mComponent": "/system/config", // 移动端组件路径 不填默认取component
    "auth": null,
    "icon": "" // 菜单前图标 请放https://www.iconfont.cn/上 从iconfont上获取  
}
```

#### public/json/OEM.json: 定义OEM相关

```json
"data": {
    "loginName": "某某管理系统",
    "loginLogo": "./logo.svg",
    "loginDesc": "登录页产品描述",
    "menusLogo": "./logo.svg",
    "menusName": "某某管理系统",
    "copyright": "2022 某某有限公司",
    "links": [
        {
            "key": "ICP",
            "title": "京ICP备xxxx号-1",
            "href": "https://beian.miit.gov.cn/",
            "blankTarget": true
        },
        {
            "key": "gongan",
            "title": "京公网安备 xxxx号",
            "image": "./assets/gongan.png",
            "href": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxxx",
            "blankTarget": true
        }
    ]
}
```

#### env文件

```shell
# 开发环境 根据该配置启动和编译不同版本
REACT_APP_ENV=dev
REACT_APP_SERVICE=mock
# 部署路径
REACT_APP_PUBLICPATH=''
# 终端设备  auto pc mobile
REACT_APP_TERMINAL=auto
```

#### src/pages

业务代码放在该目录下，路由规则会基于该目录匹配。

#### src/headersJS

在header中引入的外部js文件

#### src/httpClient/intercept

定义拦截器

#### src/defaultSettings

定义布局相关

### 静态资源

#### public

tsx中直接使用 /img/*.png；

#### src

会经过webpack编译处理。

```less
body {
    background-image: url("~@/assets/img/dashboard/demo.png");
}
```

### 部署

默认使用docker部署，如果使用static方式部署，需要修改REACT_APP_PUBLICPATH变量



## react-electron

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


## react-screen

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


## table

- Store: 定义数据state及action
- typing：定义数据类型相关
- api：服务端相关
- styles.module：定义样式相关
- components：定义组件相关
  - TableForm：弹窗内部form表单
  - TableModal：弹窗组件
  - Table：表格组件


