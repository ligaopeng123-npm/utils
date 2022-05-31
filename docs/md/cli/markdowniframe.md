# markdownIframe
`处理markdown文件的导入和编译插件`

## Usage

```js
const markdownIframe = require('@gaopeng123/markdownIframe');
// path 要处理的文件路径
// matchStart 要匹配的前缀 默认为 "[filename]("
// matchEnd  要匹配结束的位置 默认为 " ':include')"
const mi = new markdownIframe({path: join(__dirname, '../__test__/assets')});
mi.run()
    .then(data => {
        console.log('data', data);
    }).catch((err) => {
    console.error(err);
});
```




