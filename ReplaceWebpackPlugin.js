/**********************************************************************
 *
 * @模块名称: TestPlugin
 *
 * @模块用途: TestPlugin
 *
 * @date: 2022/3/25 13:14
 *
 * @版权所有: pgli
 *
 **********************************************************************/
class ReplaceWebpackPlugin {
    // 在插件函数的 prototype 上定义一个 `apply` 方法，以 compiler 为参数。
    // todo 必须定义 是webpack调用的入口函数
    constructor(config) {
        this.filename = config.filename || 'index.html';
        this.placeholder = config.placeholder || '<!-- ReplaceWebpackPlugin   -->';
        this.content = config.content;
    }

    apply(compiler) {
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.emit.tapAsync(
            'ReplaceWebpackPlugin',
            (compilation, callback) => {
                for (const name of Object.keys(compilation.assets)) {
                    if (name.endsWith(this.filename)) {
                        const source = compilation.assets[name].source().replace(new RegExp(this.placeholder), this.content);
                        compilation.assets[name] = {
                            source() {
                                return source;
                            },
                            size() {
                                return source.length;
                            }
                        };
                    }
                }
                // 用 webpack 提供的插件 API 处理构建过程
                // compilation.addModule(/* ... */);
                // compilation.assets 打包输出内容，构造复合要求的对象 {source, filename, size}等
                // 异步函数 callback需要先执行
                callback();
            }
        );
    }
}

module.exports = ReplaceWebpackPlugin;
