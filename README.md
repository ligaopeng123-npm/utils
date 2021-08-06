[TOC]

------

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

### Object

#### clone函数

##### clone: <T>(val: T): T

> 将对象或者数组clone一份，解除引用
>
> ```typescript
> clone({});
> ```

##### cloneAllObject: <T>(val: T): T

> clone所有对象的属性
>
> ```typescript
> cloneAllObject({});
> ```

##### cloneAllArray: <T>(val: T): T

> clone所有的数组属性
>
> ```typescript
> cloneAllArray([]);
> ```

##### cloneAllItem: <T>(val: T): T

> clone所有
>
> ```typescript
> cloneAllItem({});
> ```



------

### Function

#### 缓存函数

##### memoized: (...arg: any): Array<any>  

> 缓存函数返回值，fn可为多参函数，但第一个参数会作为缓存对象的key
>
> ```typescript
> const fn= (x,y)=> x * y;
> const cacheFn = memoized(fn);
> cacheFn(4,2); // [4, {4: 8}]
> ```

##### asyncMemoized:  (arg: string): Promise<Array<any>>

> 缓存异步函数的返回值，fn可为多参async函数，但第一个参数会作为缓存对象的key
>
> ```typescript
> /**
>  * 获取本地json数据
>  * @param path
>  */
> export const loadLocalJson = asyncMemoized(async (path: string) => {
> 	const res = await fetch(path);
> 	const json = await res.clone().json();
> 	return json;
> });
> 
> export const menuData = loadLocalJson('/json/menus.json');
> ```

#### monad

##### ResponseMonad

> Response响应值处理
>
> ```typescript
> ResponseMonad.of({
> 	states: 200,
> 	data: {
> 		code: '',
> 		data: null, message: ''
> 	},
> 	message: ''
> }).effect((data) => {// 返回 true获false 结果为正确是返回
> 	return data.states === 200;
> }).map((v) => v.data).map((v) => v.data).map((v) => v.data).map((v) => v.data).chain((d) => {
> 	console.log('d', d);
> }).catch((type, msg) => { // 捕获异常错误type为0时为 effect结果不满足报错  type为1是为map解构出错
> 	console.log('e', e, msg);
> })
> ```

#### compose

##### compose

> 合并函数
>
> ```typescript
> compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // a(b(c()));
> ```

##### pipe

> 合并函数
>
> ```typescript
> compose((a)=> a+a,(b)=> b*b, (c)=> c/c); // c(b(a()));
> ```

##### composePromises：(promises: Promises, initialValue?: any): Promise<void>

> 合并promise，将上一次的结果，作为下一个promise的参数
>
> ```typescript
> const p1 = async (t) => {
> 	console.log(t); // 8
> 	return await new Promise((resolve, reject) => {
> 		setTimeout(() => {
> 			resolve(t + 1);
> 		}, 1000)
> 	});
> };
> 
> 
> const p2 = async (t) => {
> 	console.log(t); // 9
> 	return await new Promise((resolve, reject) => {
> 		setTimeout(() => {
> 			resolve(t + 1);
> 		}, 1000)
> 	});
> };
> 
> 
> composePromises([p1, p2], 8).then((res) => {
> 	console.log('res', res); // res 10
> })
> ```



------

### file

##### urlJoinParmas: (parmas?: urlJoinParmasPatams): string

> 将对象参数拼接到url中
>
> ```typescript
> urlJoinParmas({name:'zhangsan'})
> ```

##### download: ({url, fileName, blob, parmas}: downloadParams): void \| Error

> 文件下载函数
>
> ```typescript
> download({url: '',fileName: '',parmas: {}});
> ```

##### downloadStream:({url, options, fileName}: downloadStreamParams): void

> stream文件下载
>
> ```typescript
> downloadStream({url:'', options: {body: ''},fileName: ''})
> ```

##### imageFromFile:(file: File): string

> 将图片的file文件，转化成blob图片路径，可直接在src中体现
>
> ```typescript
> imageFromFile(file);
> ```



------

### String

##### uuid:(len?: number, radix?: number) => string;

> 获取uuid 默认获取64位长度 数据技术位62
>
> ```typescript
> uuid()
> ```

##### formatStr:(...args: any) => string

> 格式化字符串，将一个'hello {o}, I like {1}'中的 {0}{1} 替换成对应字符
>
> ```typescript
> formatStr('hello {o}, I like {1}')('china', 'you');
> ```



------

### 数组

##### convertToTwodimensional:(arr: Array<any>, len: number): Array<Array<any>>

> 将一维数组，转为指定长度的二维数组
>
> ```typescript
> convertToTwodimensional([], 1);
> ```