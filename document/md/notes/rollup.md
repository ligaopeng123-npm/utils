# rollup学习笔记

## [常用插件](https://github.com/rollup/awesome)

- rollup-plugin-typescript2

  `编译ts、并生成.d.ts文件`

- rollup-plugin-terser

  `代码压缩`

- @rollup/plugin-node-resolve

  `第三方包管理`

- rollup-plugin-sourcemaps

  `生成`sourcemap

- @rollup/plugin-commonjs

  `基于commonjs规范使用`

- rollup-plugin-babel

  `es6转换`

- rollup-plugin-node-globals

  `全局变量`

- rollup-plugin-node-builtins

  `nodejs依赖用到的builtins fs等`

- @rollup/plugin-json

  `json 文件转换为 ES6 模块的汇总插件。`

- @rollup/plugin-replace

  `打包时可以替换目标字符串`

- @rollup/plugin-node-resolve

  `一个使用节点解析算法定位模块的汇总插件`

- @rollup/plugin-alias

  `解析alias`

- @rollup/plugin-image

  `图片加载，包括svg`

- rollup-plugin-styles

  `样式处理，包括sass、less、css modules、stylus`

- rollup-plugin-postcss

  `处理样式导入使用，sass、less、css modules、stylus`

## rollup.config.js

```js
export default {
    input: './src/index.ts', // 入口
    external: [], // 定义外部依赖
    globals: {
    	jquery: '$'
  	},
    plugins: [
        image(),
        styles(),
    ],
    output: [{
        file: '',
        format: 'esm', // cjs, amd, esm, iife, umd
        sourcemap: true
    }]
}
```



