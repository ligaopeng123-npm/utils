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

------

### memoized

| 函数名        | 参数及返回值                       | demo                                         |
| ------------- | ---------------------------------- | -------------------------------------------- |
| memoized      | (...arg: any): Array<any>          | const cacheFn = memoized(()=> {})            |
| asyncMemoized | (arg: string): Promise<Array<any>> | const asyncCacheFn = memoized(async ()=> {}) |







