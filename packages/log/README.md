# console.log

`美化日志打印`

```
type LogType = 'success' | 'info' | 'log' | 'warn' | 'error';
```

## consoleStr

`打印字符串`

![img_str](https://github.com/ligaopeng123-npm/utils/blob/master/packages/log/src/img_str.png?raw=true)

## consoleBg

`打印带有背景的字符串`

![img_bg](https://github.com/ligaopeng123-npm/utils/blob/master/packages/log/src/img_bg.png?raw=true)

## consoleTag

`打印带有tag的log`

![img_1](https://github.com/ligaopeng123-npm/utils/blob/master/packages/log/src/img_tag_1.png?raw=true)

![img_2](https://github.com/ligaopeng123-npm/utils/blob/master/packages/log/src/img_tag_2.png?raw=true)

## createConsoleFactory

```typescript
createConsoleFactory(console, {error: 'red'});
// console.str console.tag console.bg 
```

