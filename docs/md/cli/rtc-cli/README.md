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

### 插件依赖

| 插件              | 目的         |
| ----------------- | ------------ |
| chalk             | 美化输入输出 |
| prompts           | 用户信息输入 |
| download-git-repo | 远程模板下载 |
| cac               | cli指令      |
| lodash.template   | 处理模板     |
| ora               | loading效果  |
| fast-glob         | 文件名读取   |

## 模板支持

### 模板

#### react-sample

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/react-simple-template/README.md ':include')

#### react-electron

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/react-electron-template/README.md ':include')

#### react-screen

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/react-screen-template/README.md ':include')

#### flutter-repo

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/flutter-repo-template/README.md ':include')

#### components-repo

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/components-repo/README.md ':include')

#### function-repo

[filename](https://raw.githubusercontent.com/ligaopeng123/react-project-template/function-repo/README.md ':include')

### 模块

#### table

- Store: 定义数据state及action
- typing：定义数据类型相关
- api：服务端相关
- styles.module：定义样式相关
- components：定义组件相关
  - TableForm：弹窗内部form表单
  - TableModal：弹窗组件
  - Table：表格组件

#### function

`依赖function-repo，开发函数库，包含jest测试等功能。上传到npm`

#### rc-component

`依赖components-repo，开发react组件，包含开发测试环境，自动检测变更上传等功能。上传到npm`

#### web-component

`依赖components-repo，开发web组件，包含开发测试环境，自动检测变更上传等功能。上传到npm`

