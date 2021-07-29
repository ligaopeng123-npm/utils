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

| 函数名                  | 作用                                   | 参数及返回值                                      | demo                                                         |
| ----------------------- | -------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| memoized                | 缓存函数                               | (...arg: any): Array<any>                         | const fn= (x)=> x * x;<br />const cacheFn = memoized(fn);<br />cacheFn(4); // [4, {4: 16}] |
| asyncMemoized           | 异步缓存函数                           | (arg: string): Promise<Array<any>>                | const asyncCacheFn = asyncMemoized(async (...arg: any)=> {}); |
| convertToTwodimensional | 将一维数组，转为指定长度的二维数组     | (arr: Array<any>, len: number): Array<Array<any>> | convertToTwodimensional([], 1);                              |
| uuid                    | 获取uuid 默认获取64位长度 数据技术位62 | (len?: number, radix?: number) => string;         |                                                              |



