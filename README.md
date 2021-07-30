### types

| 函数名        | 作用                                       |
| ------------- | ------------------------------------------ |
| isObject      | 判断对象                                   |
| isPromise     | 判断Promise                                |
| isFunction    | 判断函数                                   |
| isNumber      | 判断数字                                   |
| isUndefined   | 判断undefined                              |
| isString      | 判断string                                 |
| isElement     | 判断element                                |
| isEqualByObj  | 判断对象是否相等（包括各个属性）           |
| isEmptyObject | 判断是否是空对象                           |
| isEmpty       | 判断是否是空 null undefined '' [] 都为true |

### 工具函数

| 函数名         | 作用              | 参数及返回值                                                 | demo                                                         |
| -------------- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| memoized       | 缓存函数          | (...arg: any): Array<any>                                    | const fn= (x)=> x * x;<br />const cacheFn = memoized(fn);<br />cacheFn(4); // [4, {4: 16}] |
| asyncMemoized  | 异步缓存函数      | (arg: string): Promise<Array<any>>                           | const asyncCacheFn = asyncMemoized(async (...arg: any)=> {}); |
| urlJoinParmas  | 将参数拼接到url中 | (parmas?: urlJoinParmasPatams): string                       | urlJoinParmas({name:'zhangsan'})                             |
| download       | 文件下载函数      | ({url, fileName, blob, parmas}: downloadParams): void \| Error | download({url: '',fileName: '',parmas: {}});                 |
| downloadStream | stream文件下载    | ({url, options, fileName}: downloadStreamParams): void       | downloadStream({url:'', options: {body: ''},fileName: ''})   |

### 字符串函数

| 函数名    | 作用                                                         | 参数及返回值                              | demo                                                |
| --------- | ------------------------------------------------------------ | ----------------------------------------- | --------------------------------------------------- |
| uuid      | 获取uuid 默认获取64位长度 数据技术位62                       | (len?: number, radix?: number) => string; | uuid()                                              |
| formatStr | 格式化字符串，将一个'hello {o}, I like {1}'中的 {0}{1} 替换成对应字符 | (...args: any) => string                  | formatStr('hello {o}, I like {1}')('china', 'you'); |

### 数组函数

| 函数名                  | 作用                               | 参数及返回值                                      | demo                            |
| ----------------------- | ---------------------------------- | ------------------------------------------------- | ------------------------------- |
| convertToTwodimensional | 将一维数组，转为指定长度的二维数组 | (arr: Array<any>, len: number): Array<Array<any>> | convertToTwodimensional([], 1); |