# webpack学习笔记

## mode

- development
- production
- node 不启用任何优化

## loader

- `从后往前执行,ts->js->bable  less->css->style scss->css->style`
- `对于JavaScript无法表示的资源模块(图片等)，loader会将他们单独copy到输出目录下，并将文件的访问路径作为改模块的导出成员暴露出去`

```js
const {getOptions} = require("loader-utils");
// // schema-utils  来校验Options

/**
 * 将$转换为@
 * @param source
 * @return {*}
 *
const replace$2 = (source) => {
    return source.replace(/\$/ig, '@');
}
// 导出一个函数 被webpack调用的时候会传递一个source
module.exports = function (source) {
    // 获取配置
    const options = getOptions(this);
    // 函数需要转换成字符串形式 被eval调用
    return `
        export default (options)=> {
            ${replace$2.toString()}
            return replace$2(${source});
        }
    `
};
```

### ts tsx

- ts-loader

### js

- babel-loader
- @babel/preset-env

### css

`postcss-loader -> css-loader -> style-loader` 

- postcss-loader

  `css文件处理兼容前缀`

- css-loader        

  `将css文件做为一个模块转换成js模块，但是该loader没有做执行，因此不生效`

- style-loader     

  ` 执行css-loader模块，将样式添加到html中`

```js
{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader:'postcss-loader',
          options:{
             postcssOptions:{
               //添加插件autoprefixer,能加前缀
               plugins:[
                 require('autoprefixer')
               ]
             }
          }
        }
      ]
    },
```

### less

- less 
- less-loader -> css-loader  -> style-loader

### scss

- sass

- sass-loader -> css-loader  -> style-loader  

  ```js
  {
        test: /\.scss$/,
        use: ['style-loader','css-loader']
      }
  ```

### img

- `asset/resource` 发送一个单独的文件并导出 URL。之前通过使用 `file-loader` 实现。
- `asset/inline` 导出一个资源的 data URI。之前通过使用 `url-loader` 实现。
- `asset/source` 导出资源的源代码。之前通过使用 `raw-loader` 实现。
- `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 `url-loader`，并且配置资源体积限制实现。
- [svg-url-loader](https://github.com/bhovhannes/svg-url-loader)

### html

- html-loader

### wasm

- [wasm-loader](https://github.com/ballercat/wasm-loader)

## plugins

```js
// 一个 JavaScript 类
class MyExampleWebpackPlugin {
  // 在插件函数的 prototype 上定义一个 `apply` 方法，以 compiler 为参数。
  // todo 必须定义 是webpack调用的入口函数
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('这是一个示例插件！');
        console.log(
          '这里表示了资源的单次构建的 `compilation` 对象：',
          compilation
        );
        // 用 webpack 提供的插件 API 处理构建过程
        compilation.addModule(/* ... */);
        // compilation.assets 打包输出内容，构造复合要求的对象 {source, filename, size}等
        // 异步函数 callback需要先执行
        callback();
      }
    );
  }
}
```

### [钩子](https://webpack.docschina.org/api/compiler-hooks/)

#### emit

`即将往输出目录输出bundle文件的时候调用`

### 插件

#### clean-webpack-plugin

`清理上次打包文件`

#### html-webpacl-plugin

`自动将打包的bundle文件，引入到html中`

#### copy-webpack-plugin

`文件copy,可将指定文件copy到指定路径`

## dev

#### watch

`监控文件变更，启动实时编译`

#### browser-sync 

` 监控文件变更，控制浏览器刷新`

#### webpack-dev-server 

`官方推荐工具，内部启动一个http服务`

#### proxy

- changeOrigin: 确保代理的主机名称

#### HMR

- hot 设置为true

- 手动处理javaScript热更新替换

  ```js
  module.hot.accep('./*', ()=> {
      // 执行热更新后的替换逻辑
  })
  ```

## devtool

- source-map 生成物理source-map文件，并在代码中引用，可定位报错的具体位置

- inline-source-map 生成map文件，但不是以物理文件存在，是以data URLs的形式注入到代码中。同样可定位到报错的具体位置

- hidden-source-map 生成source-map文件，但是不会在代码中引用，如果想引用，需要手动添加注释引入map文件。

  ```js
  //# sourceMappingURL=*.map
  ```

- nosources-source-map （方便定位的话，生产模式可用） 可以看到报错的信息所在的位置，但是看不到源码的信息，可保护源码在生产环境不暴露。

- cheap-module-eval-source-map (推荐开发使用)，可定位到代码Loader转换前的代码报错行。（不会定位到列，性能会更好）

- eval 将源代码编译后的代码包裹在eval函数中，然后通过

  ```js
  //# sourceURL=*.js
  ```

  定位到源码所在的文件，但是不能知道具体的行列数。

## Tree Shaking

### optimization

```js
module.exports = {
    optimization: {
        // 模块只导出被使用的成员
        usedExports: true,
        // 压缩代码
        minimize: true,
        // 将所有的模块，尽可能的合并到一个函数中，提高运行效率
        cocatenateModules: true,
        // 移除副作用模块  可在package.json配置副作用文件的规则
        sideEffects:true,
        // 代码分包
   
    }
}
```

## Code Splitting

`把项目中的资源模块，根据规则打包到不同的bundle中，提高首屏启动速度`

### 多入口打包

```js
{
    splitChunks: {
        // 自动提取所有的公共模块并合并到单独的bundle中
        chunks: 'all'
    }
}
```

###  动态导入特性

`按需加载模块，在程序运行时，如果用到某个模块时，才去加载这个模块。遵循es module语法即可自动处理分包`

